import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { CommentViewComponent } from './comment-view.component';
import { Comment } from 'src/app/models/Comment';
import { Component } from '@angular/core';

describe('CommentViewComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentViewComponent, TestHostComponent ],
      imports: [ 
        HttpClientModule,
        AppRoutingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should present the comment', () => {
    let pTag: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(pTag.innerText).toBe('Testing Comment');
  })

});

@Component({
  template: `<app-comment-view [comment]="commentSendToView"></app-comment-view>`,
})

class TestHostComponent {
  commentSendToView: Comment = { id: 1, content: 'Testing Comment', postId: 600 };
}