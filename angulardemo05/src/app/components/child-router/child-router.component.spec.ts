import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouterComponent } from './child-router.component';

describe('ChildRouterComponent', () => {
  let component: ChildRouterComponent;
  let fixture: ComponentFixture<ChildRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
