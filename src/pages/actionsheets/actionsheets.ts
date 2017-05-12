import { Component} from '@angular/core';
import {Platform, ActionSheetController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';

@Component({
  templateUrl : 'actionsheets.html'
})
export class ActionSheetControllerPage {
  constructor(
    public platform         : Platform,
    public ActionSheetCtrl  : ActionSheetController,
    public alertCtrl        : AlertController,
  ) {}

  private _testRadioOpen    = false;
  private _testRadioResult  = <any>{};

  private _testCheckboxOpen = false;
  private _testCheckboxData = <any>{};

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
  /*show alert*/
  showAlert() {
    let alert = this.alertCtrl.create({
      title   : 'New Friend',
      message : 'Your friend, just approved your friend request!',
      buttons : ['Ok']
    });
    alert.present()
  }
  /*alert propmt*/

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title   : 'Login',
      message : "Enter a name for this new album you're so keen on adding",
      inputs  : [
        {
          name        : 'username',
          placeholder : 'Username'
        },
        {
          name        : 'password',
          placeholder : 'Password'
        }
      ] ,
      buttons : [
        {
          text    : 'Cancel',
          handler : data => {
            console.log('Cancel clicked');
          }
        },
        {
          text     : 'Login',
          handler  : data => {
            console.log('Login Clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  /*alert confirm*/
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title     : 'Use this Thingy?',
      message   : 'Do you agree to use this lightsaber to something something',
      buttons   : [
        {
          text    : 'Disagree',
          handler : () => {
            console.log('Disagre Clicked');
          }
        },
        {
          text     : 'Agree',
          handler  : () => {
            console.log('Agree Clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  /*alert radio*/
  showRadio() {
    let radio = this.alertCtrl.create();
      radio.setTitle('Lightsaber Color');

      radio.addInput({
        type    : 'radio',
        label   : 'Blue',
        value   : 'blue',
        checked :  true
      });

      radio.addInput({
        type    : 'radio',
        label   : 'Red',
        value   : 'red',
      });

      radio.addInput({
        type    : 'radio',
        label   : 'Yellow',
        value   : 'yellow',
      });

      radio.addInput({
        type    : 'radio',
        label   : 'Orange',
        value   : 'orange',
      });

      radio.addButton('Cancel');
      radio.addButton({
        text    : 'Ok',
        handler : data => {
          this._testRadioOpen = false;
          this._testRadioResult = data;
        }
      });
      radio.present().then(() => {
        this._testRadioOpen = true;
      });
  }
  /*show checkbox*/
  showCheckbox() {
    let checkbox = this.alertCtrl.create();
      checkbox.setTitle('Which planet have you visited?');

      checkbox.addInput({
        type    : 'checkbox',
        label   : 'Alderaan',
        value   : 'value1',
        checked : true
      });

      checkbox.addInput({
        type    : 'checkbox',
        label   : 'Damacia',
        value   : 'value2',
      });

      checkbox.addInput({
        type    : 'checkbox',
        label   : "Summoner's rift",
        value   : 'value3',
      });

      checkbox.addInput({
        type    : 'checkbox',
        label   : "Freljord",
        value   : 'value4',
      });

      checkbox.addButton('Cancel');
      checkbox.addButton({
        text    : 'Ok',
        handler : data => {
          console.log('checkbox data:', data);
          this._testCheckboxOpen = false;
          this._testCheckboxData = data;
        }
      });
      checkbox.present().then(()=> {
        this._testCheckboxOpen = true;
      });
  }
}
