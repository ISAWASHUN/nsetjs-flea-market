export class CreateItemDto {
  id: string;
  name: string;
  price: number;
  description: string;
  status: 'ON_SALE' | 'SOLD_OUT';
}
