import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      width: '*',
    })
    ),
    state('out', style({
      width: '100%',
    })),
    transition('* <=> *', animate(300))
  ])
];
