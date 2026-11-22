import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  batchesHandler,
  bgpHandler,
  capacityHandler,
  consoleLogDetailsHandler,
  devicesHandler,
  emailsHandler,
  eventsHandler,
  facilitiesHandler,
  firmwareSetsHandler,
  hardwareReservationsHandler,
  incidentsHandler,
  interconnectionsHandler,
  invitationsHandler,
  invoicesHandler,
  ipAddressesHandler,
  licensesHandler,
  membershipsHandler,
  metalGatewaysHandler,
  metrosHandler,
  operatingSystemsHandler,
  organizationsHandler,
  otPsHandler,
  passwordResetTokensHandler,
  paymentMethodsHandler,
  plansHandler,
  portsHandler,
  projectsHandler,
  selfServiceReservationsHandler,
  spotMarketHandler,
  sshKeysHandler,
  supportRequestHandler,
  transferRequestsHandler,
  twoFactorAuthHandler,
  usagesHandler,
  userdataHandler,
  usersHandler,
  userVerificationTokensHandler,
  vlaNsHandler,
  vrFsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', batchesHandler)
  .route('/', bgpHandler)
  .route('/', vrFsHandler)
  .route('/', capacityHandler)
  .route('/', interconnectionsHandler)
  .route('/', eventsHandler)
  .route('/', devicesHandler)
  .route('/', consoleLogDetailsHandler)
  .route('/', sshKeysHandler)
  .route('/', usagesHandler)
  .route('/', emailsHandler)
  .route('/', facilitiesHandler)
  .route('/', hardwareReservationsHandler)
  .route('/', incidentsHandler)
  .route('/', usersHandler)
  .route('/', invitationsHandler)
  .route('/', invoicesHandler)
  .route('/', ipAddressesHandler)
  .route('/', licensesHandler)
  .route('/', metrosHandler)
  .route('/', spotMarketHandler)
  .route('/', membershipsHandler)
  .route('/', metalGatewaysHandler)
  .route('/', operatingSystemsHandler)
  .route('/', organizationsHandler)
  .route('/', firmwareSetsHandler)
  .route('/', paymentMethodsHandler)
  .route('/', plansHandler)
  .route('/', portsHandler)
  .route('/', projectsHandler)
  .route('/', vlaNsHandler)
  .route('/', selfServiceReservationsHandler)
  .route('/', passwordResetTokensHandler)
  .route('/', supportRequestHandler)
  .route('/', transferRequestsHandler)
  .route('/', twoFactorAuthHandler)
  .route('/', otPsHandler)
  .route('/', userdataHandler)
  .route('/', userVerificationTokensHandler)

export default app
