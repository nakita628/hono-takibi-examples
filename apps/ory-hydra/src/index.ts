import { OpenAPIHono } from '@hono/zod-openapi'
import {
  jwkHandler,
  metadataHandler,
  oAuth2Handler,
  oidcHandler,
  wellknownHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', wellknownHandler)
  .route('/', oidcHandler)
  .route('/', oAuth2Handler)
  .route('/', jwkHandler)
  .route('/', metadataHandler)

export default app
