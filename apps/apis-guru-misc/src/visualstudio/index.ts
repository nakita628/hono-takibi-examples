import { OpenAPIHono } from '@hono/zod-openapi'
import {
  agentsHandler,
  agentTelemetryHandler,
  authenticationHandler,
  billingHandler,
  configurationHandler,
  environmentsHandler,
  healthHandler,
  heartBeatHandler,
  locationsHandler,
  netmonHandler,
  networkSettingsHandler,
  plansHandler,
  poolGroupHandler,
  poolHandler,
  poolsHandler,
  prebuildsHandler,
  prebuildsVHandler,
  privacyHandler,
  resourcesHandler,
  sasHandler,
  secretsHandler,
  tenantHandler,
  tokensHandler,
  tunnelHandler,
  userSubscriptionsHandler,
  vmHandler,
  vnetPoolDefinitionsHandler,
  warmupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', agentTelemetryHandler)
  .route('/', agentsHandler)
  .route('/', environmentsHandler)
  .route('/', billingHandler)
  .route('/', configurationHandler)
  .route('/', poolsHandler)
  .route('/', prebuildsHandler)
  .route('/', privacyHandler)
  .route('/', resourcesHandler)
  .route('/', vnetPoolDefinitionsHandler)
  .route('/', heartBeatHandler)
  .route('/', locationsHandler)
  .route('/', sasHandler)
  .route('/', secretsHandler)
  .route('/', tenantHandler)
  .route('/', tokensHandler)
  .route('/', tunnelHandler)
  .route('/', userSubscriptionsHandler)
  .route('/', networkSettingsHandler)
  .route('/', plansHandler)
  .route('/', poolHandler)
  .route('/', poolGroupHandler)
  .route('/', vmHandler)
  .route('/', prebuildsVHandler)
  .route('/', healthHandler)
  .route('/', netmonHandler)
  .route('/', authenticationHandler)
  .route('/', warmupHandler)

export default app
