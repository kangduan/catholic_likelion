Rails.application.routes.draw do
  get 'chats/index'

  get 'chats/show'

  # config/routes.rb
  Rails.application.routes.draw do
    resources :chats, only: [:index, :show]
    resources :messages, only: [:create]
  end
  devise_for :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
