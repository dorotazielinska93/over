import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const SlideInAnimation = [
  trigger('slideIn', [
    state('in', style({
        width: '*',
      })
    ),
    state('out', style({
      width: '0',
    })),
    transition('* <=> *', animate(300))
  ])
];
