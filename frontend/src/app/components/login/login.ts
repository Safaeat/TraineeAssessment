import { Component, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({

  selector: 'app-login',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './login.html',

  styleUrl: './login.css'

})

export class Login {

  private auth = inject(AuthService);

  private router = inject(Router);

  username = '';

  password = '';

  message = '';

  login() {

    this.auth.login({

      username: this.username,

      password: this.password

    })

      .subscribe({

        next: (response) => {

          this.auth.saveToken(response.token);

          this.router.navigate(['/secure']);

        },

        error: () => {

          this.message = "Invalid Username or Password";

        }

      });

  }

}
