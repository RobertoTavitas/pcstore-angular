import { ComponentFixture, TestBed } from '@angular/core/testing';

import { itempageComponent } from './itempage.component';

describe('itempageComponent', () => {
  let component: itempageComponent;
  let fixture: ComponentFixture<itempageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ itempageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(itempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
