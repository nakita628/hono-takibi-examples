import { OpenAPIHono } from '@hono/zod-openapi'
import { conversionHandler, reportsHandler, savedColumnsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', conversionHandler)
  .route('/', reportsHandler)
  .route('/', savedColumnsHandler)

export default app
