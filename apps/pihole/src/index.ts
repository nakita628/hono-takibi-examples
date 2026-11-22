import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionsHandler,
  authenticationHandler,
  clientManagementHandler,
  dhcpHandler,
  dnsControlHandler,
  documentationHandler,
  domainManagementHandler,
  ftlInformationHandler,
  groupManagementHandler,
  listManagementHandler,
  metricsHandler,
  networkInformationHandler,
  paddHandler,
  piHoleConfigurationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authenticationHandler)
  .route('/', metricsHandler)
  .route('/', dnsControlHandler)
  .route('/', domainManagementHandler)
  .route('/', groupManagementHandler)
  .route('/', clientManagementHandler)
  .route('/', listManagementHandler)
  .route('/', ftlInformationHandler)
  .route('/', piHoleConfigurationHandler)
  .route('/', networkInformationHandler)
  .route('/', actionsHandler)
  .route('/', dhcpHandler)
  .route('/', documentationHandler)
  .route('/', paddHandler)

export default app
