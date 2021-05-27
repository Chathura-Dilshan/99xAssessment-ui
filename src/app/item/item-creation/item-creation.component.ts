import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Item} from '../item';
import {NgForm} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ItemService} from '../item.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {

  @Input() item: Item;
  @ViewChild('itemForm', {static: true}) itemForm: NgForm;

  constructor(private itemService: ItemService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.item == null) {
      this.item = new Item();
    }
  }


  saveItem(): void {
    this.itemService.postItem(this.item).pipe(take(1)).subscribe(item => {
          this.item = item;
          this.snackBar.open('Item Saved', 'success', {
            duration: 3000
          });
        },
        error => {
          this.snackBar.open(error.error, 'success', {
            duration: 3000
          });
        }
    )
  }

}
