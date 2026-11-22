import { OpenAPIHono } from '@hono/zod-openapi'
import {
  booksHandler,
  chaptersHandler,
  checksumsHandler,
  openapiJsonHandler,
  translationsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', translationsHandler)
  .route('/', checksumsHandler)
  .route('/', booksHandler)
  .route('/', chaptersHandler)
  .route('/', openapiJsonHandler)

export default app
