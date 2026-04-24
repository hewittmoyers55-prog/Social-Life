import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ChallengeViewComponent } from './challenge-view/challenge-view.component';
import { FindItemChallengeViewComponent } from './find-item-challenge-view/find-item-challenge-view.component';
import { RunChallengeViewComponent } from './run-challenge-view/run-challenge-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home-view', component: HomeViewComponent, data: { text: 'Home-View' } },
  { path: 'challenge-view', component: ChallengeViewComponent, data: { text: 'Challenge-View' } },
  { path: 'find-item-challenge-view', component: FindItemChallengeViewComponent, data: { text: 'Find-Item-Challenge-View' } },
  { path: 'run-challenge-view', component: RunChallengeViewComponent, data: { text: 'Run-Challenge-View' } },
  { path: 'profile-view', component: ProfileViewComponent, data: { text: 'Profile-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
