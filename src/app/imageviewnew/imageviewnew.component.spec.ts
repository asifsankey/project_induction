import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageviewnewComponent } from './imageviewnew.component';

describe('ImageviewnewComponent', () => {
  let component: ImageviewnewComponent;
  let fixture: ComponentFixture<ImageviewnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageviewnewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageviewnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
