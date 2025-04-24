import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../types/login-response.type';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>('/login', {email, password}).pipe(
      tap((value) => {
          sessionStorage.setItem("authToken", value.accessToken)
          sessionStorage.setItem("username", value.name)
        }
      )
    )
  }
}
