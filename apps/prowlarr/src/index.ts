import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  apiHandler,
  contentHandler,
  idHandler,
  loginHandler,
  logoutHandler,
  pathHandler,
  pingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiHandler)
  .route('/', loginHandler)
  .route('/', logoutHandler)
  .route('/', idHandler)
  .route('/', pingHandler)
  .route('/', contentHandler)
  .route('/', __rootHandler)
  .route('/', pathHandler)

export default app
