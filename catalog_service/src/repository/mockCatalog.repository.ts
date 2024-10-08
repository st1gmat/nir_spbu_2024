import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class MockCatalogRepository implements ICatalogRepository {
    create(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    update(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    find(data: any): Promise<[]> {
        throw new Error("Method not implemented.");
    }
    findOne(data: any): Promise<{}> {
        throw new Error("Method not implemented.");
    }

}