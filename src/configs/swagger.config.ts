
import { DocumentBuilder } from '@nestjs/swagger';

const globalPrefix = 'api'; // Example global prefix, adjust as needed

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Your API Title')
  .setDescription('The API description')
  .setVersion('1.0')
  .addServer('http://localhost:3000', 'Development server')
  .addServer('https://api.yourdomain.com', 'Production server')
  .addServer('https://staging-api.yourdomain.com', 'Staging server')
  .addServer('http://localhost:3001', 'Testing server')
  .setTermsOfService('https://yourdomain.com/terms')
  .setContact('API Support', 'https://yourdomain.com/support', 'support@yourdomain.com')
  .setLicense('MIT', 'https://opensource.org/licenses/MIT')
  .setOpenAPIVersion('3.0.0')
  .setExternalDoc('Find more info here', 'https://yourdomain.com/docs')
  .addTag('users', 'Operations related to users')
  .addTag('posts', 'Operations related to posts')
  // Add bearer authentication if your API uses JWTs
  .addBearerAuth()
  .build();


