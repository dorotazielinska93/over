import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      width: '*',
      // transform: 'scaleX(*)',
      opacity: 1
    })
    ),
    state('out', style({
      width: 0,
      transform: 'scale(0,0)',
      opacity: 0
    })),
    transition('* <=> *', animate(400))
  ])
];
