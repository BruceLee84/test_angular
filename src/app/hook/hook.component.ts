import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges, OnDestroy {

  @Input() hookName: string;
  intervelVariable = null

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit called");

    // this.intervelVariable= setInterval(()=>{
    //   console.log(new Date())
    // },2000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }

}
