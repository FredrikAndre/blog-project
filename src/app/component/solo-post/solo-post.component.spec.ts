import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { SoloPostComponent } from './solo-post.component';

describe('SoloPostComponent', () => {
  let component: SoloPostComponent;
  let fixture: ComponentFixture<SoloPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloPostComponent ],
      imports: [ 
        HttpClientModule,
        AppRoutingModule 
      ]
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

  it('should be empty', () => {
    expect(component.content).toBe('');
  })

});
