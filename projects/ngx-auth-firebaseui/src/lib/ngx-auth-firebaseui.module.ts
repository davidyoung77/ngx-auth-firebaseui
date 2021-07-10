// @angular/*
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
// @angular/fire
import { FirebaseAppConfig, FIREBASE_APP_NAME, FIREBASE_OPTIONS } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// @angular/material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EmailConfirmationComponent } from './components/email-confirmation/email-confirmation.component';
import { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
import { NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
import { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
import { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
import { NgxAuthFirebaseuiSigninWithPhoneComponent } from './components/ngx-auth-firebaseui-signin-with-phone/ngx-auth-firebaseui-signin-with-phone.component';
import { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
// ngx-auth-firebaseui
// components
import { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
import { AuthProvidersComponent } from './components/providers/auth.providers.component';
// guards
import { LoggedInGuard } from './guards/logged-in.guard';
import { NgxAuthFirebaseUIConfig, ngxAuthFirebaseUIConfigFactory } from './interfaces/config.interface';
import { AuthProcessService } from './services/auth-process.service';
// services
import { FirestoreSyncService } from './services/firestore-sync.service';
import { NgxAuthFirebaseUIConfigToken, UserProvidedConfigToken } from './tokens';





// interfaces
// ###################################################################################################
// Export module's public API
// components
export { LegalityDialogComponent } from './components/legality-dialog/legality-dialog.component';
export { LinkMenuItem, NgxAuthFirebaseuiAvatarComponent } from './components/ngx-auth-firebaseui-avatar/ngx-auth-firebaseui-avatar.component';
export { NgxAuthFirebaseuiLoginComponent } from './components/ngx-auth-firebaseui-login/ngx-auth-firebaseui-login.component';
export { NgxAuthFirebaseuiRegisterComponent } from './components/ngx-auth-firebaseui-register/ngx-auth-firebaseui-register.component';
export { UserComponent } from './components/ngx-auth-firebaseui-user/user.component';
export { AuthComponent } from './components/ngx-auth-firebaseui/auth.component';
export { AuthProvidersComponent, Layout, Theme } from './components/providers/auth.providers.component';
// guards
export { LoggedInGuard } from './guards/logged-in.guard';
// interfaces
export { NgxAuthFirebaseUIConfig } from './interfaces/config.interface';
// services
export { AuthProcessService, AuthProvider } from './services/auth-process.service';
export { FirestoreSyncService } from './services/firestore-sync.service';




@NgModule({
  imports: [
    CommonModule,
    // HTTP
    RouterModule,
    HttpClientModule,
    // FLEX_LAYOUT
    FlexLayoutModule,
    // FORMS
    FormsModule,
    ReactiveFormsModule,
    // MATERIAL2
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatMenuModule,
    // ANGULAR MATERIAL EXTENSIONS
    MatPasswordStrengthModule,
    // ANGULARFIRE2
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    AuthComponent,
    UserComponent,
    NgxAuthFirebaseuiAvatarComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    // LoggedInGuard,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxAuthFirebaseuiLoginComponent,
    NgxAuthFirebaseuiRegisterComponent,
    NgxAuthFirebaseuiSigninWithPhoneComponent
  ],
  declarations: [
    AuthComponent,
    UserComponent,
    NgxAuthFirebaseuiAvatarComponent,
    AuthProvidersComponent,
    EmailConfirmationComponent,
    LegalityDialogComponent,
    NgxAuthFirebaseuiLoginComponent,
    NgxAuthFirebaseuiRegisterComponent,
    NgxAuthFirebaseuiSigninWithPhoneComponent
  ],
  entryComponents: [
    UserComponent,
    LegalityDialogComponent
  ]
})
export class NgxAuthFirebaseUIModule {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer, auth: AuthProcessService) {
    auth.listenToUserEvents();
    this.registerProviderIcons();
  }

  static forRoot(
    configFactory: FirebaseAppConfig,
    appNameFactory: () => string | undefined = () => undefined,
    config: NgxAuthFirebaseUIConfig = {}
  ): ModuleWithProviders<NgxAuthFirebaseUIModule> {
    return {
      ngModule: NgxAuthFirebaseUIModule,
      providers:
        [
          {
            provide: FIREBASE_OPTIONS,
            useValue: configFactory
          },
          {
            provide: FIREBASE_APP_NAME,
            useFactory: appNameFactory
          },
          {provide: UserProvidedConfigToken, useValue: config},
          {
            provide: NgxAuthFirebaseUIConfigToken,
            useFactory: ngxAuthFirebaseUIConfigFactory,
            deps: [UserProvidedConfigToken]
          },
          AuthProcessService,
          FirestoreSyncService,
          LoggedInGuard
        ]
    };
  }

  registerProviderIcons() {
    this.iconRegistry
      .addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/google.svg'))
      .addSvgIcon('apple', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/apple.svg'))
      .addSvgIcon('google-colored', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/google.svg'))
      .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/facebook.svg'))
      .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/twitter.svg'))
      .addSvgIcon('github', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/github-circle.svg'))
      .addSvgIcon('microsoft', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/microsoft.svg'))
      .addSvgIcon('yahoo', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/mdi/yahoo.svg'))
      .addSvgIcon('phone', this.sanitizer.bypassSecurityTrustResourceUrl('/assets/phone.svg'));
  }
}
