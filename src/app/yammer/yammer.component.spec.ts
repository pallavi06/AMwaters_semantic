import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YammerComponent } from './yammer.component';

describe('YammerComponent', () => {
  let component: YammerComponent;
  let fixture: ComponentFixture<YammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
