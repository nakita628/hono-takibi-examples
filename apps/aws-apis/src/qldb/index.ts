import { OpenAPIHono } from '@hono/zod-openapi'
import { journalS3ExportsHandler, ledgersHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ledgersHandler)
  .route('/', journalS3ExportsHandler)
  .route('/', tagsHandler)

export default app
