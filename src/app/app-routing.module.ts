import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { MemberDetailComponent } from './pages/members/member-detail/member-detail.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MessageComponent } from './pages/message/message.component';
import { AuthGuard } from './guards/auth.guard';
import { EditMemberComponent } from './pages/members/edit-member/edit-member.component';
import { PreventUnsavedChangesGuard } from './guards/prevent-unsaved-changes.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
    { path: 'members/:username', component: MemberDetailComponent },
    { path: 'member/edit', component: EditMemberComponent, canDeactivate: [PreventUnsavedChangesGuard] },
    { path: 'lists', component: ListsComponent },
    { path: 'messages', component: MessageComponent },
    { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
