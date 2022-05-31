Rails.application.routes.draw do
  root 'static#index'
  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :messages, only: %i[index]
    end
 end

end
