import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from "./pages/home/home.component";
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberDetailComponent } from './pages/members/member-detail/member-detail.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MessageComponent } from './pages/message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { MemberCardComponent } from './pages/members/member-card/member-card.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { EditMemberComponent } from './pages/members/edit-member/edit-member.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({ declarations: [
        AppComponent,
        NavComponent,
        RegisterComponent,
        HomeComponent,
        MemberListComponent,
        MemberDetailComponent,
        ListsComponent,
        MessageComponent,
        MemberCardComponent,
        EditMemberComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right'
        }),
        NgxSpinnerModule,
        ReactiveFormsModule,
        PaginationModule.forRoot(),
        BrowserAnimationsModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
