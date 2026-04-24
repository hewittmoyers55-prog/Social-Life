import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';
import { FindItemChallengeViewComponent } from './find-item-challenge-view.component';

describe('FindItemChallengeViewComponent', () => {
  let component: FindItemChallengeViewComponent;
  let fixture: ComponentFixture<FindItemChallengeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindItemChallengeViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindItemChallengeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
