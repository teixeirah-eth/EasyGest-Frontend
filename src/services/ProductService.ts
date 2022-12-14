export default interface ProductService {
  delete(id: string): Promise<any>;

  create(description: string, price: string): Promise<any>;

  update(id: string, description: string, price: string): Promise<any>;

  list(): Promise<any>;

}