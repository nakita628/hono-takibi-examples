import { OpenAPIHono } from '@hono/zod-openapi'
import {
  anythingHandler,
  apiKeyHandler,
  httpHandler,
  mutualTLSHandler,
  oAuth2Handler,
  openIDConnectHandler,
  otherHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeyHandler)
  .route('/', httpHandler)
  .route('/', anythingHandler)
  .route('/', mutualTLSHandler)
  .route('/', oAuth2Handler)
  .route('/', openIDConnectHandler)
  .route('/', otherHandler)

export default app
