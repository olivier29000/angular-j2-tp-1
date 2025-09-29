import { Component } from '@angular/core';

interface Chat {
  nom : string;
  couleur : COULEUR;
  age : number;
}

enum COULEUR {
  BLANC, GRIS, NOIR
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chatList : Chat[] = []
  newChat : Chat = {
    nom : "",
    couleur : COULEUR.BLANC,
    age : 5
  }

  ajouterNewChat() : void {
    this.chatList.push({...this.newChat})
  }
}
