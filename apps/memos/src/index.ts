import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiServiceHandler,
  attachmentServiceHandler,
  authServiceHandler,
  identityProviderServiceHandler,
  instanceServiceHandler,
  memoServiceHandler,
  spaceServiceHandler,
  userServiceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aiServiceHandler)
  .route('/', attachmentServiceHandler)
  .route('/', authServiceHandler)
  .route('/', identityProviderServiceHandler)
  .route('/', instanceServiceHandler)
  .route('/', memoServiceHandler)
  .route('/', spaceServiceHandler)
  .route('/', userServiceHandler)

export default app
