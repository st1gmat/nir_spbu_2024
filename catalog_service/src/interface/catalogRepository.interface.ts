export interface ICatalogRepository {
    create(data: any): Promise<{}>;
    update(data: any): Promise<{}>;
    delete(id: any): any;
    find(data: any): Promise<[]>;
    findOne(data: any): Promise<{}>;
}