import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { increment, incrementTwo, shoppingCart } from './redux/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: Observable<number>
  sc: Observable<any[]>

  constructor (private store: Store<{count: any}>){
    this.count = store.select('count', 'counter')
    this.sc = store.select('count', 'shoppingCart')
  }

  increment(){
    console.log(this.count)
    this.store.dispatch(increment())
  }


  addProduct(){
    this.store.dispatch(shoppingCart({item: {productName: "Algo", price: 2000, cant: 3}}))
  }


}
