import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  batchesHandler,
  bgpDynamicNeighborsHandler,
  bgpHandler,
  capacityHandler,
  connectionsHandler,
  devicesHandler,
  emailsHandler,
  eventsHandler,
  facilitiesHandler,
  hardwareReservationsHandler,
  incidentsHandler,
  invitationsHandler,
  invoicesHandler,
  ipsHandler,
  licensesHandler,
  locationsHandler,
  marketHandler,
  membershipsHandler,
  metalGatewaysHandler,
  operatingSystemsHandler,
  operatingSystemVersionsHandler,
  organizationsHandler,
  paymentMethodsHandler,
  plansHandler,
  portsHandler,
  projectsHandler,
  resetPasswordHandler,
  routesHandler,
  spotMarketRequestsHandler,
  sshKeysHandler,
  supportRequestsHandler,
  transfersHandler,
  userdataHandler,
  userHandler,
  usersHandler,
  verifyEmailHandler,
  virtualCircuitsHandler,
  virtualNetworksHandler,
  vrfsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeysHandler)
  .route('/', batchesHandler)
  .route('/', bgpHandler)
  .route('/', bgpDynamicNeighborsHandler)
  .route('/', capacityHandler)
  .route('/', connectionsHandler)
  .route('/', devicesHandler)
  .route('/', emailsHandler)
  .route('/', eventsHandler)
  .route('/', facilitiesHandler)
  .route('/', hardwareReservationsHandler)
  .route('/', incidentsHandler)
  .route('/', invitationsHandler)
  .route('/', invoicesHandler)
  .route('/', ipsHandler)
  .route('/', licensesHandler)
  .route('/', locationsHandler)
  .route('/', marketHandler)
  .route('/', membershipsHandler)
  .route('/', metalGatewaysHandler)
  .route('/', operatingSystemVersionsHandler)
  .route('/', operatingSystemsHandler)
  .route('/', organizationsHandler)
  .route('/', paymentMethodsHandler)
  .route('/', plansHandler)
  .route('/', portsHandler)
  .route('/', projectsHandler)
  .route('/', resetPasswordHandler)
  .route('/', routesHandler)
  .route('/', spotMarketRequestsHandler)
  .route('/', sshKeysHandler)
  .route('/', supportRequestsHandler)
  .route('/', transfersHandler)
  .route('/', userHandler)
  .route('/', userdataHandler)
  .route('/', usersHandler)
  .route('/', verifyEmailHandler)
  .route('/', virtualCircuitsHandler)
  .route('/', virtualNetworksHandler)
  .route('/', vrfsHandler)

export default app
