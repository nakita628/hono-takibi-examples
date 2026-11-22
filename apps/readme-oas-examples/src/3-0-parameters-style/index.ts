import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cookieHandler,
  headerHandler,
  multipartFormDataEncodingHandler,
  pathHandler,
  queryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cookieHandler)
  .route('/', headerHandler)
  .route('/', pathHandler)
  .route('/', queryHandler)
  .route('/', multipartFormDataEncodingHandler)

export default app
