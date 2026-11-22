import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, invoicesHandler, storeConfigurationHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', invoicesHandler)
  .route('/', storeConfigurationHandler)

export default app
