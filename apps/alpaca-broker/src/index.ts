import { OpenAPIHono } from '@hono/zod-openapi'
import { v1beta1Handler, v1betaHandler, v1Handler, v2beta1Handler, v2Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1betaHandler)
  .route('/', v1beta1Handler)
  .route('/', v1Handler)
  .route('/', v2beta1Handler)
  .route('/', v2Handler)

export default app
