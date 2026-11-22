import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actorTokensHandler,
  adminPortalLinkTokensHandler,
  allowListBlockListHandler,
  apiKeysHandler,
  betaFeaturesHandler,
  billingHandler,
  clientsHandler,
  commerceHandler,
  domainsHandler,
  emailAddressesHandler,
  emailSMSTemplatesHandler,
  enterpriseConnectionsHandler,
  instanceSettingsHandler,
  invitationsHandler,
  jwksHandler,
  jwtTemplatesHandler,
  logsHandler,
  m2MTokensHandler,
  machinesHandler,
  miscellaneousHandler,
  oAuthAccessTokensHandler,
  oAuthApplicationsHandler,
  organizationDomainsHandler,
  organizationInvitationsHandler,
  organizationMembershipsHandler,
  organizationPermissionsHandler,
  organizationRolesHandler,
  organizationsHandler,
  phoneNumbersHandler,
  proxyChecksHandler,
  redirectURLsHandler,
  roleSetsHandler,
  samlConnectionsHandler,
  sessionsHandler,
  signInTokensHandler,
  signUpsHandler,
  testingTokensHandler,
  usersHandler,
  waitlistEntriesHandler,
  webhooksHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', miscellaneousHandler)
  .route('/', jwksHandler)
  .route('/', clientsHandler)
  .route('/', emailAddressesHandler)
  .route('/', phoneNumbersHandler)
  .route('/', sessionsHandler)
  .route('/', emailSMSTemplatesHandler)
  .route('/', usersHandler)
  .route('/', invitationsHandler)
  .route('/', organizationInvitationsHandler)
  .route('/', allowListBlockListHandler)
  .route('/', betaFeaturesHandler)
  .route('/', actorTokensHandler)
  .route('/', domainsHandler)
  .route('/', instanceSettingsHandler)
  .route('/', webhooksHandler)
  .route('/', jwtTemplatesHandler)
  .route('/', machinesHandler)
  .route('/', organizationsHandler)
  .route('/', organizationRolesHandler)
  .route('/', organizationMembershipsHandler)
  .route('/', organizationDomainsHandler)
  .route('/', proxyChecksHandler)
  .route('/', redirectURLsHandler)
  .route('/', signInTokensHandler)
  .route('/', signUpsHandler)
  .route('/', oAuthApplicationsHandler)
  .route('/', samlConnectionsHandler)
  .route('/', enterpriseConnectionsHandler)
  .route('/', testingTokensHandler)
  .route('/', waitlistEntriesHandler)
  .route('/', commerceHandler)
  .route('/', billingHandler)
  .route('/', organizationPermissionsHandler)
  .route('/', roleSetsHandler)
  .route('/', logsHandler)
  .route('/', adminPortalLinkTokensHandler)
  .route('/', apiKeysHandler)
  .route('/', m2MTokensHandler)
  .route('/', oAuthAccessTokensHandler)

export default app
