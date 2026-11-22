import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  actorsHandler,
  clientsHandler,
  clientTokensHandler,
  defenderDevicesHandler,
  defenderPostureProvidersHandler,
  emailOTPAuthProvidersHandler,
  entraAuthProvidersHandler,
  entraDirectoriesHandler,
  externalIdentitiesHandler,
  gatewaysHandler,
  gatewayTokensHandler,
  gitHubAuthProvidersHandler,
  googleAuthProvidersHandler,
  googleDirectoriesHandler,
  groupsHandler,
  intuneDevicesHandler,
  intunePostureProvidersHandler,
  iruDevicesHandler,
  iruPostureProvidersHandler,
  logsHandler,
  membershipsHandler,
  oidcAuthProvidersHandler,
  oktaAuthProvidersHandler,
  oktaDirectoriesHandler,
  policiesHandler,
  poolMembersHandler,
  resourcesHandler,
  santaDevicesHandler,
  santaPostureProvidersHandler,
  sentinelOneDevicesHandler,
  sentinelOnePostureProvidersHandler,
  sitesHandler,
  sophosDevicesHandler,
  sophosPostureProvidersHandler,
  x509AuthProvidersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', groupsHandler)
  .route('/', externalIdentitiesHandler)
  .route('/', clientsHandler)
  .route('/', gatewaysHandler)
  .route('/', santaPostureProvidersHandler)
  .route('/', gitHubAuthProvidersHandler)
  .route('/', policiesHandler)
  .route('/', oidcAuthProvidersHandler)
  .route('/', gatewayTokensHandler)
  .route('/', sentinelOnePostureProvidersHandler)
  .route('/', actorsHandler)
  .route('/', clientTokensHandler)
  .route('/', emailOTPAuthProvidersHandler)
  .route('/', entraAuthProvidersHandler)
  .route('/', iruPostureProvidersHandler)
  .route('/', sitesHandler)
  .route('/', googleAuthProvidersHandler)
  .route('/', intunePostureProvidersHandler)
  .route('/', x509AuthProvidersHandler)
  .route('/', resourcesHandler)
  .route('/', sentinelOneDevicesHandler)
  .route('/', oktaAuthProvidersHandler)
  .route('/', intuneDevicesHandler)
  .route('/', sophosPostureProvidersHandler)
  .route('/', defenderPostureProvidersHandler)
  .route('/', membershipsHandler)
  .route('/', googleDirectoriesHandler)
  .route('/', santaDevicesHandler)
  .route('/', entraDirectoriesHandler)
  .route('/', accountHandler)
  .route('/', sophosDevicesHandler)
  .route('/', iruDevicesHandler)
  .route('/', poolMembersHandler)
  .route('/', oktaDirectoriesHandler)
  .route('/', logsHandler)
  .route('/', defenderDevicesHandler)

export default app
