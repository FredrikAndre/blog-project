import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloPostComponent } from './solo-post.component';

describe('SoloPostComponent', () => {
  let component: SoloPostComponent;
  let fixture: ComponentFixture<SoloPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
