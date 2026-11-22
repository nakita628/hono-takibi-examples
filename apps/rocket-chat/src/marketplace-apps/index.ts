import { OpenAPIHono } from '@hono/zod-openapi'
import { jitsiAppHandler, manageAppsHandler, rasaAppHandler, whatsAppHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', rasaAppHandler)
  .route('/', whatsAppHandler)
  .route('/', manageAppsHandler)
  .route('/', jitsiAppHandler)

export default app
