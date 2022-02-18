export abstract class ListToken {

  public values!: Array<string>;

  abstract resetValues();
  abstract filterValues();

}