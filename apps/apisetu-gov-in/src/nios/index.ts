import { OpenAPIHono } from '@hono/zod-openapi'
import {
  hscerHandler,
  hsmgrHandler,
  hvcerHandler,
  sscerHandler,
  ssmgrHandler,
  svcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hscerHandler)
  .route('/', hsmgrHandler)
  .route('/', hvcerHandler)
  .route('/', sscerHandler)
  .route('/', ssmgrHandler)
  .route('/', svcerHandler)

export default app
