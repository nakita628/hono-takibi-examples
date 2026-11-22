import { OpenAPIHono } from '@hono/zod-openapi'
import { beaconinfoHandler, beaconsHandler, namespacesHandler, v1beta1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', beaconinfoHandler)
  .route('/', beaconsHandler)
  .route('/', v1beta1Handler)
  .route('/', namespacesHandler)

export default app
