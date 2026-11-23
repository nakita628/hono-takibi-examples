import { OpenAPIHono } from '@hono/zod-openapi'
import { associationsHandler, filesHandler, foldersHandler, inboxHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', filesHandler)
  .route('/', associationsHandler)
  .route('/', foldersHandler)
  .route('/', inboxHandler)

export default app
