class ApplicationController < ActionController::API

    #this is to access the cookies hash in your controllers
    # Since all of your controllers inherit from ApplicationController, adding this module here means all of your controllers will be able to work with cookies.
    include ActionController::Cookies
end
