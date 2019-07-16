import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAboutComponent } from './intro-about.component';

describe('IntroAboutComponent', () => {
  let component: IntroAboutComponent;
  let fixture: ComponentFixture<IntroAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
