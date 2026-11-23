import { OpenAPIHono } from '@hono/zod-openapi'
import { v1Handler, v2beta1Handler, v2Handler, v3Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', v2beta1Handler)
  .route('/', v2Handler)
  .route('/', v3Handler)

export default app
