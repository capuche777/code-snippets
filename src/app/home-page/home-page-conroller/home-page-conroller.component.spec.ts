import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageConrollerComponent } from './home-page-conroller.component';

describe('HomePageConrollerComponent', () => {
  let component: HomePageConrollerComponent;
  let fixture: ComponentFixture<HomePageConrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageConrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageConrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
