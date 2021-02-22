import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss'],
})
export class TableToolbarComponent implements OnInit, OnDestroy {
  @Output() public onInputChange: EventEmitter<string> = new EventEmitter();

  public nameControl: FormControl;
  public controlSub: Subscription;

  ngOnInit(): void {
    this.nameControl = new FormControl('');

    this.controlSub = this.nameControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((value: string) => this.onInputChange.emit(value));
  }

  ngOnDestroy(): void {
    this.controlSub.unsubscribe();
  }

  public clearInput(): void {
    this.nameControl.reset('');
  }
}
