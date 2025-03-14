import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../DTOs/UserDTO';
import { AccountService } from '../services/account.service';
import LoginDTO from "../DTOs/account/LoginDTO";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResponseResult } from '../DTOs/common/ResponseResult';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: false
})
export class NavComponent implements OnInit {

  model: LoginDTO = new LoginDTO();
  currentUser$: Observable<UserDTO> | undefined;

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser;
  }

  login() {
    this.accountService.login(this.model).subscribe(data => {

      var responseResult = <ResponseResult>data;

      if (responseResult.isSuccess) {
        this.toastr.success(responseResult.message);
        this.router.navigateByUrl('/members');
      } else {
        this.toastr.error(responseResult.message);
      }

    }, error => {
      this.toastr.error(error.error);
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
