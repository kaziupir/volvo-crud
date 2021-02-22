export class UserModel {
  public id: number;
  public name: string;
  public surname: string;
  public birthDate: string;
  public phone: string;
  public city: string;
  public street: string;
  public number: number;

  constructor(input: Partial<UserModel>) {
    input = input || {};

    this.id = input.id;
    this.name = input.name || '';
    this.surname = input.surname || '';
    this.birthDate = input.birthDate || '';
    this.phone = input.phone || '';
    this.city = input.city || '';
    this.street = input.street || '';
    this.number = input.number;
  }
}
