import { OpenAPIHono } from '@hono/zod-openapi'
import {
  appsHandler,
  changepasswordHandler,
  loginHandler,
  logoutHandler,
  meHandler,
  pingHandler,
  refreshHandler,
  registerHandler,
  sendpasswordHandler,
  servicesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', appsHandler)
  .route('/', changepasswordHandler)
  .route('/', loginHandler)
  .route('/', logoutHandler)
  .route('/', meHandler)
  .route('/', pingHandler)
  .route('/', refreshHandler)
  .route('/', registerHandler)
  .route('/', sendpasswordHandler)
  .route('/', servicesHandler)

export default app
