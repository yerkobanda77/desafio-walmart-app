import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCLP',
})
export class CurrencyCLPPipe implements PipeTransform {
  transform(value: number): string {
    const formatNumber = {
      separador: '.', // separador para los miles
      sepDecimal: ',', // separador para los decimales
      formatear: function(num) {
        num += '';
        const splitStr = num.split('.');
        let splitLeft = splitStr[0];
        const splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
        const regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
          splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
        }
        return this.simbol + splitLeft + splitRight;
      },
      new: function(num, simbol) {
        this.simbol = simbol || '';
        return this.formatear(num);
      },
    };

    if (typeof value !== 'undefined') {
      return value !== 0 ? formatNumber.new(value, '') : value.toString();
    }
  }
}
