import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output';
  newOnomatopiaParent: string = '';

  onomatopiaList: string[] = ["Woohooo !!!", "Sheeeeshhh !!!", "Grrrrr !!!", "Ouch !!!", "Aie !!!",];

  onReceiveNewOnomatopia(event: any): void {
    this.newOnomatopiaParent = event;
  }
}



// Afficher la liste des onomatopées dans le AppComponent
// Générer un composant <app-create-onomatopia> (CreateOnomatopiaComponent) qui contiendra un formulaire permettant de créer une onomatopée
// Déclarer CreateOnomatopiaComponent en tant que composant enfant de AppComponent dans le HTML.
// À chaque création d'onomatopée, AppComponent affichera le nouvel élément grâce à un transfert d’information effectué via le Output().
