import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserCreationService} from '../session/guest-user-creation/user-creation.service';
import {MatSnackBar} from '@angular/material';
import {take} from 'rxjs/operators';
import {User} from '../session/guest-user-creation/user';
import {ItemService} from '../item/item.service';
import {Item} from '../item/item';
import {PriceOfItems} from '../item/price-of-items';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

    user: User;
    itemList: Item[];
    priceOfItem: PriceOfItems;

    priceOfItemSet: Set<PriceOfItems>;


    constructor(private router: Router,
                private userCreationService: UserCreationService,
                private itemService: ItemService,
                private snackBar: MatSnackBar) {

    }


    ngOnInit() {
        if (this.user == null) {
            this.user = new User();

            this.user.username = localStorage.getItem('username');
            console.log(this.user);

            this.userCreationService.findByUsername(this.user).pipe(take(1)).subscribe(
                response => {
                    this.user = response;
                }
            );


        }

        this.getAllItem();
    }


    getAllItem() {
        this.itemService.getItems().pipe(take(1)).subscribe(
            response => {
                this.itemList = response
            }
        );
    }

    calTotal(item: Item): void {
        this.itemService.getPrice(item).pipe(take(1)).subscribe(priceOfItema => {
                this.priceOfItem = priceOfItema;
                console.log('this.priceOfItem', this.priceOfItem);

                this.priceOfItem.totalPrice = this.priceOfItem.actualCartonPrice + this.priceOfItem.actualSinglePrice;
                this.addToTable(this.priceOfItem);

            },
            error => {
                this.snackBar.open(error.error, 'error', {
                    duration: 3000
                });
            }
        )
    }

    addToTable(priceOfItems: PriceOfItems) {
        if (!priceOfItems || !priceOfItems.itemSeq) {
            return;
        }
        // Validation end
        if (!this.priceOfItemSet) {
            this.priceOfItemSet = new Set();
        }
        this.priceOfItemSet.add(JSON.parse(JSON.stringify(priceOfItems)));
    }


    delete(priceOfItems: PriceOfItems) {
        this.priceOfItemSet.delete(priceOfItems);
    }
}
