import { OpenAPIHono } from '@hono/zod-openapi'
import {
  consoleHandler,
  cqHandler,
  crxHandler,
  customHandler,
  graniteHandler,
  slingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cqHandler)
  .route('/', slingHandler)
  .route('/', customHandler)
  .route('/', crxHandler)
  .route('/', graniteHandler)
  .route('/', consoleHandler)

export default app
