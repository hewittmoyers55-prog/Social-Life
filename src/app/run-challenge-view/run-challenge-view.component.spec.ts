import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective } from 'igniteui-angular';
import { RunChallengeViewComponent } from './run-challenge-view.component';

describe('RunChallengeViewComponent', () => {
  let component: RunChallengeViewComponent;
  let fixture: ComponentFixture<RunChallengeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunChallengeViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunChallengeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
