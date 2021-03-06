import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/models/booking.model';

export abstract class BookingProxy {
  abstract get(): Observable<Booking[]>;
  abstract create(): Observable<Booking[]>;
  abstract delete(): Observable<Booking[]>;
  abstract update(): Observable<Booking[]>;
}
