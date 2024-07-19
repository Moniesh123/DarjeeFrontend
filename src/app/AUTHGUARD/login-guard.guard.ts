import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {

  let _router = inject(Router);

  let login = localStorage.getItem('LogginData');

  if (login == 'false') {
    _router.navigate(['/Login']);
    alert('Login To Access !!!');
    return false;
  }

  return true;
};
