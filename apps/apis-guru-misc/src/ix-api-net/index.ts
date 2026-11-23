import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  authHandler,
  connectionsHandler,
  contactsHandler,
  devicesHandler,
  facilitiesHandler,
  healthHandler,
  implementationHandler,
  ipsHandler,
  macsHandler,
  memberJoiningRulesHandler,
  metroAreaNetworksHandler,
  metroAreasHandler,
  networkFeatureConfigsHandler,
  networkFeaturesHandler,
  networkServiceConfigsHandler,
  networkServicesHandler,
  popsHandler,
  portsHandler,
  productOfferingsHandler,
  roleAssignmentsHandler,
  rolesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', authHandler)
  .route('/', connectionsHandler)
  .route('/', contactsHandler)
  .route('/', devicesHandler)
  .route('/', facilitiesHandler)
  .route('/', healthHandler)
  .route('/', implementationHandler)
  .route('/', ipsHandler)
  .route('/', macsHandler)
  .route('/', memberJoiningRulesHandler)
  .route('/', metroAreaNetworksHandler)
  .route('/', metroAreasHandler)
  .route('/', networkFeatureConfigsHandler)
  .route('/', networkFeaturesHandler)
  .route('/', networkServiceConfigsHandler)
  .route('/', networkServicesHandler)
  .route('/', popsHandler)
  .route('/', portsHandler)
  .route('/', productOfferingsHandler)
  .route('/', roleAssignmentsHandler)
  .route('/', rolesHandler)

export default app
