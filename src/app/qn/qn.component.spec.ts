import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnComponent } from './qn.component';

describe('QnComponent', () => {
  let component: QnComponent;
  let fixture: ComponentFixture<QnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
