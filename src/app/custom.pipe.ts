import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name : 'append'
})

export class AppendPipe implements PipeTransform{
    transform(value:any) {
        return value + ' bala'
    }
}