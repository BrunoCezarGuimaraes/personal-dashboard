import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimation', [
      /** => * esta dizendo cada parte da animação, ou mudança de fase*/
      transition(':increment', [

        query(':enter, :leave', [
          style({
            //display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%' /*Serve para evitar o problema do overflow*/
          })
        ], { optional: true }),

        /*query(':enter', [
          style({
            opacity: 0,
          })
        ], { optional: true }),*/

        group([
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-80px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(80px)'
            }),
            animate('250ms 125ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ])

      ]),

      transition(':decrement', [

        query(':enter, :leave', [
          style({
            //display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%' /*Serve para evitar o problema do overflow*/
          })
        ], { optional: true }),

        /*query(':enter', [
          style({
            opacity: 0,
          })
        ], { optional: true }),*/

        group([
          query(':leave', [
            animate('250ms ease-in', style({
              opacity: 0,
              transform: 'translateX(80px)'
            }))
          ], { optional: true }),

          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(-80px)'
            }),
            animate('250ms 125ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
          ], { optional: true })
        ])

      ])
    ])
  ]
})
export class AppComponent {
  title = 'personal-dashboard';

  /*Metodo para animação da troca de rotas*/
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated)
      return outlet.activatedRouteData['tabNumber']
    else
      return null
  }
}
