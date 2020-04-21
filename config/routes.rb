Rails.application.routes.draw do
  # devise_for :users, controllers: { 
  #   sessions: 'users/sessions' 
  # }
  devise_for :users
  resources :sessions

  resources :helps
  get 'helps', to: 'helps#index'
  root 'pages#index'
  get 'pages/index'
  
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]
  mount ActionCable.server => '/cable'

  match '*pages', to: 'pages#index', via: :all
end
