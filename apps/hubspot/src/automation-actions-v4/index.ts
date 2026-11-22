import { OpenAPIHono } from '@hono/zod-openapi'
import {
  callbacksHandler,
  definitionsHandler,
  functionsHandler,
  revisionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', definitionsHandler)
  .route('/', functionsHandler)
  .route('/', revisionsHandler)
  .route('/', callbacksHandler)

export default app
