import { OpenAPIHono } from '@hono/zod-openapi'
import {
  privateQuotesHandler,
  qshowHandler,
  quoteHandler,
  quoteImagesHandler,
  quoteOfTheDayHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', quoteOfTheDayHandler)
  .route('/', qshowHandler)
  .route('/', privateQuotesHandler)
  .route('/', quoteHandler)
  .route('/', quoteImagesHandler)

export default app
