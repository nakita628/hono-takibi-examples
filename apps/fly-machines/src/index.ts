import { OpenAPIHono } from '@hono/zod-openapi'
import { appsHandler, machinesHandler, volumesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', machinesHandler)
  .route('/', volumesHandler)

export default app
