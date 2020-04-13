Rails.application.routes.draw do
  devise_for :users, controllers: { 
    sessions: 'users/sessions' 
  }

  resources :helps
  get 'helps', to: 'helps#index'
  root 'pages#index'
  get 'pages/index'
  
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create]
  mount ActionCable.server => '/cable'

  match '*pages', to: 'pages#index', via: :all
end
