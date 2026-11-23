import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actorTokensHandler,
  adminPortalLinkTokensHandler,
  allowlistIdentifiersHandler,
  apiKeysHandler,
  betaFeaturesHandler,
  billingHandler,
  blocklistIdentifiersHandler,
  clientsHandler,
  commerceHandler,
  domainsHandler,
  emailAddressesHandler,
  enterpriseConnectionsHandler,
  instanceHandler,
  invitationsHandler,
  jwksHandler,
  jwtTemplatesHandler,
  logsHandler,
  m2mTokensHandler,
  machinesHandler,
  oauthApplicationsHandler,
  organizationDomainsHandler,
  organizationInvitationsHandler,
  organizationMembershipsHandler,
  organizationPermissionsHandler,
  organizationRolesHandler,
  organizationsHandler,
  phoneNumbersHandler,
  proxyChecksHandler,
  publicHandler,
  redirectUrlsHandler,
  roleSetsHandler,
  samlConnectionsHandler,
  sessionsHandler,
  signInTokensHandler,
  signUpsHandler,
  templatesHandler,
  testingTokensHandler,
  usersHandler,
  waitlistEntriesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', publicHandler)
  .route('/', jwksHandler)
  .route('/', clientsHandler)
  .route('/', emailAddressesHandler)
  .route('/', usersHandler)
  .route('/', phoneNumbersHandler)
  .route('/', sessionsHandler)
  .route('/', templatesHandler)
  .route('/', invitationsHandler)
  .route('/', organizationInvitationsHandler)
  .route('/', allowlistIdentifiersHandler)
  .route('/', blocklistIdentifiersHandler)
  .route('/', betaFeaturesHandler)
  .route('/', actorTokensHandler)
  .route('/', domainsHandler)
  .route('/', instanceHandler)
  .route('/', webhooksHandler)
  .route('/', jwtTemplatesHandler)
  .route('/', machinesHandler)
  .route('/', organizationsHandler)
  .route('/', organizationRolesHandler)
  .route('/', organizationDomainsHandler)
  .route('/', proxyChecksHandler)
  .route('/', redirectUrlsHandler)
  .route('/', signInTokensHandler)
  .route('/', signUpsHandler)
  .route('/', oauthApplicationsHandler)
  .route('/', samlConnectionsHandler)
  .route('/', enterpriseConnectionsHandler)
  .route('/', testingTokensHandler)
  .route('/', organizationMembershipsHandler)
  .route('/', waitlistEntriesHandler)
  .route('/', commerceHandler)
  .route('/', billingHandler)
  .route('/', organizationPermissionsHandler)
  .route('/', roleSetsHandler)
  .route('/', logsHandler)
  .route('/', adminPortalLinkTokensHandler)
  .route('/', apiKeysHandler)
  .route('/', m2mTokensHandler)

export default app
