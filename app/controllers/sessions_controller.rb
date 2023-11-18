class SessionsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:create]

    # finds a user by their email address, authenticates their password, and if successful, sets the user_id in the session and returns the user object as JSON with a status of :created. If the authentication fails, it returns an error
    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {error: "Wrong email and/or password. Please try again!"}, status: :unauthorized 
        end
    end

    # deletes the :user_id from the session and then returns a response with a status of :no_content.
    def destroy
        session.delete :user_id
        head :no_content
    end


    private 
    
    # checks if the user_id is present in the session. If it is not present, it renders a JSON response with an error message of "Not authorized" and sets the status code to 401 (unauthorized).
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end
end
