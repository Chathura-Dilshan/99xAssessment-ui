import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCretionComponent } from './user-cretion.component';

describe('UserCretionComponent', () => {
  let component: UserCretionComponent;
  let fixture: ComponentFixture<UserCretionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCretionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
