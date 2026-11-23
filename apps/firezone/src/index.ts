import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  actorsHandler,
  clientsHandler,
  defenderDevicesHandler,
  defenderPostureProvidersHandler,
  emailOtpAuthProvidersHandler,
  entraAuthProvidersHandler,
  entraDirectoriesHandler,
  githubAuthProvidersHandler,
  googleAuthProvidersHandler,
  googleDirectoriesHandler,
  groupsHandler,
  intuneDevicesHandler,
  intunePostureProvidersHandler,
  iruDevicesHandler,
  iruPostureProvidersHandler,
  logsHandler,
  oidcAuthProvidersHandler,
  oktaAuthProvidersHandler,
  oktaDirectoriesHandler,
  policiesHandler,
  postureFieldsHandler,
  resourcesHandler,
  santaDevicesHandler,
  santaPostureProvidersHandler,
  sentineloneDevicesHandler,
  sentinelonePostureProvidersHandler,
  sitesHandler,
  sophosDevicesHandler,
  sophosPostureProvidersHandler,
  x509AuthProviderHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', groupsHandler)
  .route('/', actorsHandler)
  .route('/', clientsHandler)
  .route('/', sitesHandler)
  .route('/', santaPostureProvidersHandler)
  .route('/', githubAuthProvidersHandler)
  .route('/', postureFieldsHandler)
  .route('/', oidcAuthProvidersHandler)
  .route('/', sentinelonePostureProvidersHandler)
  .route('/', emailOtpAuthProvidersHandler)
  .route('/', entraAuthProvidersHandler)
  .route('/', iruPostureProvidersHandler)
  .route('/', googleAuthProvidersHandler)
  .route('/', policiesHandler)
  .route('/', intunePostureProvidersHandler)
  .route('/', x509AuthProviderHandler)
  .route('/', resourcesHandler)
  .route('/', sentineloneDevicesHandler)
  .route('/', oktaAuthProvidersHandler)
  .route('/', intuneDevicesHandler)
  .route('/', sophosPostureProvidersHandler)
  .route('/', defenderPostureProvidersHandler)
  .route('/', googleDirectoriesHandler)
  .route('/', santaDevicesHandler)
  .route('/', entraDirectoriesHandler)
  .route('/', accountHandler)
  .route('/', sophosDevicesHandler)
  .route('/', iruDevicesHandler)
  .route('/', oktaDirectoriesHandler)
  .route('/', logsHandler)
  .route('/', defenderDevicesHandler)

export default app
