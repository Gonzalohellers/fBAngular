import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIndividualComponent } from './video-individual.component';

describe('VideoIndividualComponent', () => {
  let component: VideoIndividualComponent;
  let fixture: ComponentFixture<VideoIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoIndividualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
