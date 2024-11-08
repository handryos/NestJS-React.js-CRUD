export default interface Countrie {
  borders: [];
  name: string;
  population: [
    {
      value: number;
      year: number;
    }
  ];
  flag: string;
}
