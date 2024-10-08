import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  Subscription,
  debounceTime,
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  take,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-qn',
  templateUrl: './qn.component.html',
  styleUrls: ['./qn.component.css'],
})
export class QnComponent implements OnInit {
  constructor() {}
  @ViewChild('btn', { static: true }) button!: ElementRef;
  buttonSubscription!: Subscription;
  data = [
    [1, 0, 1],
    [0, 0, 0],
    [0, 1, 0],
  ];
  count = 0;
  formattedData: number[] = [];
  clickSet: Set<number> = new Set();
  ngOnInit(): void {
    this.formatData();
    this.buttonClick();
  }
  formatData() {
    this.formattedData = this.data.flat();
    this.count = this.formattedData.reduce((acc, cur) => {
      if (cur == 1) {
        acc += 1;
      }
      return acc;
    }, 0);
    console.log(this.formattedData);
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .pipe(
        map((res: any) => res.target.dataset),
        filter((res1: any) => !!Number(res1.value))
      )
      .subscribe((res2: any) => {
        this.clickSet.add(Number(res2.idx));
        if (this.clickSet.size == this.count) {
          this.unroll();
        }
      });
  }
  isSelected(idx: number) {
    return this.clickSet.has(idx);
  }
  unroll() {
    let a = from(Array.from(this.clickSet.keys()).reverse());
    let b = interval(300).pipe(take(this.count));
    zip(a, b).subscribe((res) => {
      console.log(res[0]);
      this.clickSet.delete(res[0]);
    });
  }
}
