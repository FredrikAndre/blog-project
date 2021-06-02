import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BlogViewComponent } from './component/blog-view/blog-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app-routing.module';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        BlogViewComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  })

  describe('routes', () => {
    it('should navigate to /blogs', fakeAsync(() => {
      router.navigate([""]);
      tick();
      expect(location.path()).toBe('/blogs')
    }));
  })
    

  

});
