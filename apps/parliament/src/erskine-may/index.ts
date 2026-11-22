import { OpenAPIHono } from '@hono/zod-openapi'
import {
  chapterHandler,
  indexTermHandler,
  partHandler,
  searchHandler,
  sectionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chapterHandler)
  .route('/', indexTermHandler)
  .route('/', partHandler)
  .route('/', searchHandler)
  .route('/', sectionHandler)

export default app
