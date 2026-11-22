import { OpenAPIHono } from '@hono/zod-openapi'
import {
  contactsHandler,
  deviceInvitesHandler,
  devicePostureHandler,
  devicesHandler,
  dnsHandler,
  keysHandler,
  loggingHandler,
  oAuthAppsHandler,
  organizationsHandler,
  policyFileHandler,
  servicesHandler,
  tailnetSettingsHandler,
  userInvitesHandler,
  usersHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', devicesHandler)
  .route('/', organizationsHandler)
  .route('/', deviceInvitesHandler)
  .route('/', userInvitesHandler)
  .route('/', loggingHandler)
  .route('/', dnsHandler)
  .route('/', keysHandler)
  .route('/', policyFileHandler)
  .route('/', devicePostureHandler)
  .route('/', usersHandler)
  .route('/', contactsHandler)
  .route('/', webhooksHandler)
  .route('/', tailnetSettingsHandler)
  .route('/', servicesHandler)
  .route('/', oAuthAppsHandler)

export default app
