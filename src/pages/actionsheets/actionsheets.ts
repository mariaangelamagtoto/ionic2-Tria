import { Component} from '@angular/core';
import {Platform, ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl : 'actionsheets.html'
})
export class ActionSheetControllerPage {
  constructor(
    public platform         : Platform,
    public ActionSheetCtrl  : ActionSheetController
  ) {}

  openMenu() {
    let actionsheets = this.ActionSheetCtrl.create({
      title       : 'Albums',
      cssClass    : 'action-sheets-basic-page',
      buttons     : [
        {
          text    : 'Delete',
          role    : 'destructive',
          icon    : !this.platform.is('ios') ? 'trash' : null,
          handler : () => {
            console.log('Delete Clicked')
          }
        },
        {
          text    : 'Share',
          icon    : !this.platform.is('ios') ? 'share' : null,
          handler : () => {
            console.log('Share Clicked')
          }
        },
        {
          text    : 'Play',
          icon    : !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler : () => {
            console.log('Play Clicked')
          }
        },
        {
          text    : 'Favorite',
          icon    : !this.platform.is('ios') ? 'heart-outline' : null,
          handler : () => {
            console.log('Favorite Clicked')
          }
        },
        {
          text    : 'Cancel',
          role    : 'cancel',
          icon    : !this.platform.is('ios') ? 'close' : null,
          handler : () => {
            console.log('Cancel Clicked')
          }
        }
      ]
    });
    actionsheets.present();
  }
}
