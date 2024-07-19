import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const tailorLoginGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let TailorLogin = localStorage.getItem("TailorLoggin");

  if (TailorLogin == 'false') {
    _router.navigate(['/TailorLogin']);
    alert('This Area Is Only For Tailors !!!');
    return false;
  }

  return true;
};
