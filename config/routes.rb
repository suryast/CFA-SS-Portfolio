Rails.application.routes.draw do
  get 'pages/feed'

  get 'advocacies/causindy'

  get 'advocacies/rumahcerita'

  get 'techs/code'

  get 'techs/iot'

  get 'techs/website'

  get 'businesses/buziebee'

  get 'businesses/kertanegara'

  get 'businesses/squarentie'

  root :to => "home#portfolio"

  get 'home/portfolio'

  get 'home/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
