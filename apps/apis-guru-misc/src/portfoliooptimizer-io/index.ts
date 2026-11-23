import { OpenAPIHono } from '@hono/zod-openapi'
import { assetsHandler, factorsHandler, portfolioHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetsHandler)
  .route('/', factorsHandler)
  .route('/', portfolioHandler)

export default app
