import { Request, Response } from 'express';
import { GetLass3MessagesService } from '../services/GetLass3MessagesService';

class GetLass3MessagesController {
    async handle( request: Request, response: Response) {
        const service = new GetLass3MessagesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { GetLass3MessagesController };