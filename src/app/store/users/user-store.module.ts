import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './effects/user.effects';
import { userReducers } from './reducers/user.reducers';
import { USER_FEATURE_SELECTOR } from './selectors/user.selectors';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(USER_FEATURE_SELECTOR, userReducers),
  ],
  providers: [UserService],
})
export class UserStore {}
