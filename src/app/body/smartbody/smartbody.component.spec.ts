import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartbodyComponent } from './smartbody.component';

describe('SmartbodyComponent', () => {
  let component: SmartbodyComponent;
  let fixture: ComponentFixture<SmartbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
