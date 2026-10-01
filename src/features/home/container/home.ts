import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FloorStructureComponent } from '../../structure/container/floor-structure';

@Component({
  selector: 'app-home',
  imports: [FloorStructureComponent],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly navLinks = [
    { href: '#histoire', label: 'Histoire' },
    { href: '#ambiance', label: 'Ambiance' },
    { href: '#carte', label: 'La carte' },
    { href: '#reservation', label: 'Réservation' },
    { href: '#contact', label: 'Contact' },
  ];

  readonly menu = {
    entrees: [
      { name: 'Burrata, tomates anciennes, basilic', price: '14€' },
      { name: 'Tartare de bœuf au couteau', price: '16€' },
      { name: 'Velouté de saison, croûtons maison', price: '11€' },
    ],
    plats: [
      { name: 'Volaille rôtie, jus corsé, légumes glacés', price: '24€' },
      { name: 'Risotto aux champignons, parmesan 18 mois', price: '21€' },
      { name: 'Pavé de poisson du jour, beurre blanc', price: '26€' },
    ],
    desserts: [
      { name: 'Tarte fine aux pommes, caramel beurre salé', price: '9€' },
      { name: 'Moelleux au chocolat, glace vanille', price: '10€' },
    ],
  };
}
