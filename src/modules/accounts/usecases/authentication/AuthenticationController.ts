import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticationUseCase } from './AuthenticationUseCase';

class AuthenticationController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticationUseCase = container.resolve(AuthenticationUseCase);

    const session = await authenticationUseCase.execute({ email, password });

    return response.json(session);
  }
}

export { AuthenticationController };
