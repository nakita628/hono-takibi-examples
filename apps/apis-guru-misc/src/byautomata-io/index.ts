import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contentproSearchHandler,
  contentproSimilarTextHandler,
  searchHandler,
  similarHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', contentproSearchHandler)
  .route('/', contentproSimilarTextHandler)
  .route('/', searchHandler)
  .route('/', similarHandler)

export default app
