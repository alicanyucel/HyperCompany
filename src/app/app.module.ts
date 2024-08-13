import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';
import { CommonInterceptor } from 'src/interceptor/common.interceptor';
import { BusPipe } from 'src/pipe/bus.pipe';
import { CarPipe } from 'src/pipe/car.pipe';
import { BoatPipe } from 'src/pipe/boat.pipe';
import { CommonModule } from '@angular/common';
const routes: Routes = [

  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    BusPipe,
    CarPipe,
    BoatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
