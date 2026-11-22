import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessGroupsHandler,
  aiGatewayHandler,
  aliasesHandler,
  apiKeysHandler,
  artifactsHandler,
  authenticationHandler,
  billingHandler,
  bulkRedirectsHandler,
  certsHandler,
  checksHandler,
  checksV2Handler,
  connectHandler,
  daemonsHandler,
  deploymentsHandler,
  dnsHandler,
  domainsHandler,
  domainsRegistrarHandler,
  drainsHandler,
  drivesHandler,
  edgeCacheHandler,
  environmentHandler,
  featureFlagsHandler,
  globalConfigHandler,
  integrationsHandler,
  kmsHandler,
  logDrainsHandler,
  logsHandler,
  marketplaceHandler,
  microfrontendsHandler,
  networkingHandler,
  observabilityHandler,
  organizationsHandler,
  projectMembersHandler,
  projectRoutesHandler,
  projectsHandler,
  rollingReleaseHandler,
  sandboxesHandler,
  securityHandler,
  speedInsightsHandler,
  storageHandler,
  teamsHandler,
  userHandler,
  v2Handler,
  vcrHandler,
  vercelCiHandler,
  webAnalyticsHandler,
  webHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessGroupsHandler)
  .route('/', aiGatewayHandler)
  .route('/', artifactsHandler)
  .route('/', billingHandler)
  .route('/', bulkRedirectsHandler)
  .route('/', checksV2Handler)
  .route('/', checksHandler)
  .route('/', networkingHandler)
  .route('/', connectHandler)
  .route('/', daemonsHandler)
  .route('/', deploymentsHandler)
  .route('/', dnsHandler)
  .route('/', domainsHandler)
  .route('/', domainsRegistrarHandler)
  .route('/', logDrainsHandler)
  .route('/', drainsHandler)
  .route('/', drivesHandler)
  .route('/', edgeCacheHandler)
  .route('/', globalConfigHandler)
  .route('/', environmentHandler)
  .route('/', userHandler)
  .route('/', featureFlagsHandler)
  .route('/', integrationsHandler)
  .route('/', marketplaceHandler)
  .route('/', authenticationHandler)
  .route('/', apiKeysHandler)
  .route('/', kmsHandler)
  .route('/', logsHandler)
  .route('/', microfrontendsHandler)
  .route('/', observabilityHandler)
  .route('/', v2Handler)
  .route('/', organizationsHandler)
  .route('/', projectMembersHandler)
  .route('/', projectRoutesHandler)
  .route('/', projectsHandler)
  .route('/', rollingReleaseHandler)
  .route('/', sandboxesHandler)
  .route('/', securityHandler)
  .route('/', speedInsightsHandler)
  .route('/', storageHandler)
  .route('/', teamsHandler)
  .route('/', vcrHandler)
  .route('/', vercelCiHandler)
  .route('/', webHandler)
  .route('/', webAnalyticsHandler)
  .route('/', webhooksHandler)
  .route('/', aliasesHandler)
  .route('/', certsHandler)

export default app
