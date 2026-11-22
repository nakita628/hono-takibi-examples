import { OpenAPIHono } from '@hono/zod-openapi'
import {
  categoriesHandler,
  dataIntegrityHandler,
  excelReportsHandler,
  reportsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', reportsHandler)
  .route('/', categoriesHandler)
  .route('/', dataIntegrityHandler)
  .route('/', excelReportsHandler)

export default app
