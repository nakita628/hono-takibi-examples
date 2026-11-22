import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeyHandler,
  httpHandler,
  oAuth2Handler,
  openIDConnectHandler,
  otherHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeyHandler)
  .route('/', httpHandler)
  .route('/', oAuth2Handler)
  .route('/', openIDConnectHandler)
  .route('/', otherHandler)

export default app
