import { OpenAPIHono } from '@hono/zod-openapi'
import { accountHandler, appKeysHandler, rolesHandler, storeHandler, userHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', userHandler)
  .route('/', rolesHandler)
  .route('/', accountHandler)
  .route('/', storeHandler)
  .route('/', appKeysHandler)

export default app
