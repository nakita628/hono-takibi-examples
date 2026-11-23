import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alimwHandler,
  alsblHandler,
  alsfcHandler,
  apptuHandler,
  clcerHandler,
  nooclHandler,
  srcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alimwHandler)
  .route('/', alsblHandler)
  .route('/', alsfcHandler)
  .route('/', apptuHandler)
  .route('/', clcerHandler)
  .route('/', nooclHandler)
  .route('/', srcerHandler)

export default app
