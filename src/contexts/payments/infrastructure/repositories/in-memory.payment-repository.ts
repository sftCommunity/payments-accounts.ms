import { Payment, PrimitivePayment } from "../../domain/payment";
import { PaymentRepository } from "../../domain/payment.repository";

export class InMemoryPaymentRepository implements PaymentRepository {
  private payments: PrimitivePayment[] = [];

  async create(payment: Payment): Promise<void> {
    this.payments.push(payment.toValue());
  }

  async findById(id: string): Promise<Payment | null> {
    const payment = this.payments.find(payment => payment.id === id) || null;
    return payment ? new Payment(payment) : null;
  }
}
