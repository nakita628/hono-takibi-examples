import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationHandler,
  authorizeHandler,
  eventsHandler,
  githubHandler,
  logsHandler,
  logsSocketHandler,
  newsfeedsHandler,
  notificationsHandler,
  oauthHandler,
  openapiHandler,
  openapiTypeHandler,
  organisationsHandler,
  passwordForgottenHandler,
  paymentsHandler,
  productsHandler,
  selfHandler,
  summaryHandler,
  usersHandler,
  v2Handler,
  v3Handler,
  v4Handler,
  vendorHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', openapiHandler)
  .route('/', applicationHandler)
  .route('/', authorizeHandler)
  .route('/', eventsHandler)
  .route('/', githubHandler)
  .route('/', logsSocketHandler)
  .route('/', logsHandler)
  .route('/', newsfeedsHandler)
  .route('/', notificationsHandler)
  .route('/', oauthHandler)
  .route('/', openapiTypeHandler)
  .route('/', organisationsHandler)
  .route('/', passwordForgottenHandler)
  .route('/', paymentsHandler)
  .route('/', productsHandler)
  .route('/', selfHandler)
  .route('/', summaryHandler)
  .route('/', usersHandler)
  .route('/', v2Handler)
  .route('/', v3Handler)
  .route('/', v4Handler)
  .route('/', vendorHandler)

export default app
