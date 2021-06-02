import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { PostViewComponent } from './post-view.component';
import { Post } from 'src/app/models/Post';
import { Component } from '@angular/core';

describe('PostViewComponent', () => {
  let component: TestPostComponent;
  let fixture: ComponentFixture<TestPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostViewComponent, TestPostComponent ],
      imports: [ 
        HttpClientModule,
        AppRoutingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should present the title', () => {
    let h5Tag: HTMLHeadingElement = fixture.nativeElement.querySelector('h5');

    expect(h5Tag.innerText).toBe('Testing Post');
  })

  
});

@Component({
  template: `<app-post-view [post]="postSendToView"></app-post-view>`,
})

class TestPostComponent {
  postSendToView: Post = { 
    id: 500, 
    title: 'Testing Post', 
    content: 'With alot of content', 
    blogId: 30, 
    created: new Date,
    modified: '1/1/1', 
    comments: []
  };
}
