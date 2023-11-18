Rails.application.routes.draw do

# custom routes for logging in, signing up, and logging out
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # a custom route in our Rails application, to handle any requests that come through that aren't requests for our API routes by returning the public/index.html file instead
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
