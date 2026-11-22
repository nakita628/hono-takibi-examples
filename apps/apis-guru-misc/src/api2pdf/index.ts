import { OpenAPIHono } from '@hono/zod-openapi'
import {
  headlessChromeHandler,
  libreOfficeHandler,
  mergeCombinePdfsHandler,
  wkhtmltopdfHandler,
  zxingZebraCrossingBarCodesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', headlessChromeHandler)
  .route('/', libreOfficeHandler)
  .route('/', mergeCombinePdfsHandler)
  .route('/', wkhtmltopdfHandler)
  .route('/', zxingZebraCrossingBarCodesHandler)

export default app
