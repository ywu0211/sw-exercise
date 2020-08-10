import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/container/layout.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule, MatProgressSpinnerModule,
  MatRippleModule
} from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './services/http-interceptor';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Modules from angular material
const MaterialModules = [
  MatListModule,
  MatDividerModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatExpansionModule,
  MatRippleModule,
  MatProgressSpinnerModule,
];
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    ErrorDialogComponent,
    SpinnerComponent
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MaterialModules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
