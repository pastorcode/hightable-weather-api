export class GeoNames {
  private readonly username: string;
  private readonly baseUrl: string;

  constructor() {
    this.username = 'pastorcode'; // I won't do this in production
    this.baseUrl = 'http://api.geonames.org';
  }

  async searchCity(city: string) {
    const url = `${this.baseUrl}/searchJSON?q=${city}&maxRows=10&username=${this.username}`;
    console.log(url);
    const response = await fetch(url);
    const cities = await response.json();
    return cities.geonames.map((city: any) => ({
      name: city.name,
      country: city.countryName,
    }));
  }
}
