import { v4 as uuidv4 } from "uuid";

export interface PrimitivePayment {
  id: string;
  amount: number;
  customer_id: string;
}

export class Payment {
  constructor(private attributes: PrimitivePayment) {}

  static create(attributes: { amount: number; customer_id: string }): Payment {
    return new Payment({
      id: uuidv4(),
      amount: attributes.amount,
      customer_id: attributes.customer_id,
    });
  }

  toValue(): PrimitivePayment {
    return {
      id: this.attributes.id,
      amount: this.attributes.amount,
      customer_id: this.attributes.customer_id,
    };
  }
}
