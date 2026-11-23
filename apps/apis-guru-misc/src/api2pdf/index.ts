import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chromeHandler,
  libreofficeHandler,
  mergeHandler,
  wkhtmltopdfHandler,
  zebraHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chromeHandler)
  .route('/', libreofficeHandler)
  .route('/', mergeHandler)
  .route('/', wkhtmltopdfHandler)
  .route('/', zebraHandler)

export default app
