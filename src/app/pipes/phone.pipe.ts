import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    // !phone = se phone está preenchido
    const INVALID_PHONE = !phone || phone.length < 10 || phone.length > 11;
    const CEL_PHONE = phone.length === 11;

    if (INVALID_PHONE) {
      return 'Telefone indisponível ou inválido';
    }

    if (CEL_PHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        7
      )}-${phone.substring(7)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        6
      )}-${phone.substring(6)}`;
    }
  }
}
