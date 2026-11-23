import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokenHandler,
  accountHandler,
  billingGroupHandler,
  cardHandler,
  cloudsHandler,
  invoicesHandler,
  meHandler,
  mysqlHandler,
  organizationHandler,
  organizationsHandler,
  pgHandler,
  projectHandler,
  serviceTypesHandler,
  serviceVersionsHandler,
  tenantsHandler,
  userauthHandler,
  userHandler,
  userinfoHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', projectHandler)
  .route('/', organizationHandler)
  .route('/', accountHandler)
  .route('/', billingGroupHandler)
  .route('/', invoicesHandler)
  .route('/', cloudsHandler)
  .route('/', tenantsHandler)
  .route('/', userinfoHandler)
  .route('/', organizationsHandler)
  .route('/', cardHandler)
  .route('/', mysqlHandler)
  .route('/', pgHandler)
  .route('/', serviceTypesHandler)
  .route('/', serviceVersionsHandler)
  .route('/', accessTokenHandler)
  .route('/', meHandler)
  .route('/', userHandler)
  .route('/', userauthHandler)

export default app
