# PersonalDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

Link da aplicação: https://personal-dashboard-beta.vercel.app/

# Bibliotecas, Apis de destaque, utilizadas

uuid = geração de id

rxjs = states

materialize = para icons

unsplash = imagens de background randomicas

# Explicação da aplicação

A Aplicação é um Dashboard pessoal para desktop, que possui como principais telas bookmark, todo e notes;

-Bookmark, tem como funcionalidade criar marcadores para que salve links de sites podendo apaga-los ou edita-los, ao clicar num dos icones ira ser redirecionado a url marcada.

-Todo, sua funcionalidade é a criação de uma lista de tarefas que se pode editar, excluir e marcar como concluidas.

-Notes, criação de notas para lembretes.

Cada uma delas possui uma das tres funcionalidades possui uma tela de adicionar e editar, cujas as funcionalidades estão na pasta Shared, onde tambem salva localmente os dados de cada uma delas.

A Aplicação utiliza-se de animação para a movimentação de cada rota, alem da interação com os objetos, possuindo tambem uma notificação no canto direito inferior da tela para alertar qualquer atividade feita como por exemplo a exclusão de uma nota.

No canto superior direito possui o botão para mudar o background da aplicação (porem não se salva localmente, e a imagem do background é trazida pela Api: unsplash, que tras imagens randomicas para a aplicação a cada clique).

Atenção, os possiveis erros na aplicação se devem atraves dos cookies do unsplash porem não é o foco do aprendizado dessa aplicação, possivelmente melhoras futuras nessa aplicação sera correção desses erros, porem eles não prejudicam a aplicação.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Notas finais

Essa aplicação foi feita exclusivamente para fins de prática a angular, atraves do tutorial do youtuber: Devstackr

Link do tutorial:
https://www.youtube.com/watch?v=VBIUe9KaCFc&list=PLIjdNHWULhPR2Tp3fA6Yg8_OY7bG35S5q&index=2&ab_channel=Devstackr

## Imagem da aplicação

![personal dash board](https://user-images.githubusercontent.com/22208015/143701060-f4e3bfb4-fe04-47e5-9232-e0b06af3c2e3.jpg)

