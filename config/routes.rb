Rails.application.routes.draw do
  devise_for :users, controllers: { 
    sessions: 'users/sessions' 
  }

  resources :helps
  get 'helps', to: 'helps#index'
  root 'pages#index'
  get 'pages/index'

  match '*pages', to: 'pages#index', via: :all
end
