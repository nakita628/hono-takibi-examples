import { OpenAPIHono } from '@hono/zod-openapi'
import { assetsHandler, assetTypesHandler, settingsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetsHandler)
  .route('/', assetTypesHandler)
  .route('/', settingsHandler)

export default app
