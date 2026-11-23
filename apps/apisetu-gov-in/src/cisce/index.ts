import { OpenAPIHono } from '@hono/zod-openapi'
import { hpcerHandler, hscerHandler, hsmgrHandler, spcerHandler, sscerHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hpcerHandler)
  .route('/', hscerHandler)
  .route('/', hsmgrHandler)
  .route('/', spcerHandler)
  .route('/', sscerHandler)

export default app
