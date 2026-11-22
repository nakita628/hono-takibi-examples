import { OpenAPIHono } from '@hono/zod-openapi'
import {
  devicesHandler,
  enterprisesHandler,
  entitlementsHandler,
  grouplicensesHandler,
  grouplicenseusersHandler,
  installsHandler,
  managedconfigurationsfordeviceHandler,
  managedconfigurationsforuserHandler,
  managedconfigurationssettingsHandler,
  permissionsHandler,
  productsHandler,
  serviceaccountkeysHandler,
  storelayoutclustersHandler,
  storelayoutpagesHandler,
  usersHandler,
  webappsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', enterprisesHandler)
  .route('/', grouplicensesHandler)
  .route('/', grouplicenseusersHandler)
  .route('/', productsHandler)
  .route('/', managedconfigurationssettingsHandler)
  .route('/', serviceaccountkeysHandler)
  .route('/', storelayoutpagesHandler)
  .route('/', storelayoutclustersHandler)
  .route('/', usersHandler)
  .route('/', devicesHandler)
  .route('/', installsHandler)
  .route('/', managedconfigurationsfordeviceHandler)
  .route('/', entitlementsHandler)
  .route('/', managedconfigurationsforuserHandler)
  .route('/', webappsHandler)
  .route('/', permissionsHandler)

export default app
