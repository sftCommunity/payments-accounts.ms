import { Payment } from "./payment";

export abstract class PaymentRepository {
  abstract create(payment: Payment): Promise<void>;
  abstract findById(id: string): Promise<Payment | null>;
}
