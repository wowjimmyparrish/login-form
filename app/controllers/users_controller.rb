class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :userNotLoggedIn

# creates a new User object using the create! method and passes in user_params as the parameters.
# Then, it sets the user_id in the session to the id of the newly created user.
# Finally, it renders the user object as JSON with a status of :created.
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # finds a User object based on the id stored in the session variable. If the user is found, it renders the user object as JSON with a status of :ok.
    def show 
        user = User.find_by!(id: session[:user_id])                                   
        render json: user, status: :ok
    end

    # finds a user based on the user_id stored in the session. If the user is found and matches the currently authenticated user, it destroys the user record and renders an empty JSON response. If the user is not found, it renders a JSON response with an error message and a not_found status. If the user is found but does not match the currently authenticated user, it renders a JSON response with an "Unauthorized" error message and an unauthorized status.
     def destroy
        user = find_user
      
        if user == session[:user_id]
          user.destroy 
          render json: {}
        elsif user.nil?
          render json: { error: "User not found" }, status: :not_found
        else
          render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

    private 

    # uses the User model to find a user by their id, which is passed in through the params hash. The method returns the found user.
    def find_user
        User.find_by(id: params[:id])
    end

    # returns a JSON response with an error message and sets the HTTP status code to unauthorized.
    def userNotLoggedIn
        return render json: {error: "User is not logged in"}, status: :unauthorized
    end

    # allows the parameters email, password, and password_confirmation to be passed through from a request. It uses the permit method from the params object to ensure only these specific parameters are allowed.
    def user_params 
        params.permit(:email, :password, :password_confirmation)
    end

# takes an argument called invalid. It checks if the session does not include :user_id. If it doesn't, it renders a JSON response with the errors from invalid.record.errors.full_messages and sets the status code to :unprocessable_entity.
      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity unless session.include? :user_id
    end

end
