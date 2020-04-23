// import { AbstractControl } from '@angular/forms';
// import { AuthenticationService } from './../../../services/authentication.service';
// import { map } from 'rxjs/operators';

// export class UsernameValidator {
//     static createValidator(authService: AuthenticationService) {
//         return (control: AbstractControl) => {
//             return authService.checkUsernameNotTaken(control.value).pipe(map(res => {
//                 return res['exists'] ? { usernameTaken: true } : null;
//             }));
//         };
//     }
// }
