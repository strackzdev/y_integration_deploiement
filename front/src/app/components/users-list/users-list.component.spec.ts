import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersListComponent} from './users-list.component';
import {UsersCreationFormComponent} from '../users-creation-form/users-creation-form.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {UsersService} from '../../services/users.service';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersCreationFormComponent, HttpClientTestingModule],
      providers: [UsersService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
