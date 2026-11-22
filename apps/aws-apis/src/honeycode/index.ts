import { OpenAPIHono } from '@hono/zod-openapi'
import { screendataHandler, tagsHandler, workbooksHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', workbooksHandler)
  .route('/', screendataHandler)
  .route('/', tagsHandler)

export default app
