import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const AnimationSmall = [
  trigger('small', [
    state('in', style({
        width: '*',
      })
    ),
    state('out', style({
      width: '30%',
    })),
    transition('* <=> *', animate(300))
  ])
];
