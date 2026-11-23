import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActorsActorIdClientTokensIdRoute,
  deleteActorsActorIdClientTokensRoute,
  deleteActorsActorIdExternalIdentitiesIdRoute,
  deleteActorsIdRoute,
  deleteClientsIdRoute,
  deleteDefenderPostureProvidersIdRoute,
  deleteGroupsIdRoute,
  deleteIntunePostureProvidersIdRoute,
  deleteIruPostureProvidersIdRoute,
  deletePoliciesIdRoute,
  deleteResourcesIdRoute,
  deleteSantaPostureProvidersIdRoute,
  deleteSentinelonePostureProvidersIdRoute,
  deleteSitesIdRoute,
  deleteSitesSiteIdGatewaysIdRoute,
  deleteSitesSiteIdGatewayTokensIdRoute,
  deleteSitesSiteIdGatewayTokensRoute,
  deleteSophosPostureProvidersIdRoute,
  getAccountRoute,
  getActorsActorIdClientTokensIdRoute,
  getActorsActorIdClientTokensRoute,
  getActorsActorIdExternalIdentitiesIdRoute,
  getActorsActorIdExternalIdentitiesRoute,
  getActorsIdRoute,
  getActorsRoute,
  getClientsIdRoute,
  getClientsRoute,
  getDefenderDevicesDefenderDeviceRoute,
  getDefenderDevicesRoute,
  getDefenderPostureProvidersIdRoute,
  getDefenderPostureProvidersRoute,
  getEmailOtpAuthProvidersIdRoute,
  getEmailOtpAuthProvidersRoute,
  getEntraAuthProvidersIdRoute,
  getEntraAuthProvidersRoute,
  getEntraDirectoriesIdRoute,
  getEntraDirectoriesRoute,
  getGithubAuthProvidersIdRoute,
  getGithubAuthProvidersRoute,
  getGoogleAuthProvidersIdRoute,
  getGoogleAuthProvidersRoute,
  getGoogleDirectoriesIdRoute,
  getGoogleDirectoriesRoute,
  getGroupsGroupIdMembershipsRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  getIntuneDevicesIdRoute,
  getIntuneDevicesRoute,
  getIntunePostureProvidersIdRoute,
  getIntunePostureProvidersRoute,
  getIruDevicesIdRoute,
  getIruDevicesRoute,
  getIruPostureProvidersIdRoute,
  getIruPostureProvidersRoute,
  getLogsLogIdRoute,
  getLogsRoute,
  getOidcAuthProvidersIdRoute,
  getOidcAuthProvidersRoute,
  getOktaAuthProvidersIdRoute,
  getOktaAuthProvidersRoute,
  getOktaDirectoriesIdRoute,
  getOktaDirectoriesRoute,
  getPoliciesIdRoute,
  getPoliciesRoute,
  getPostureFieldsRoute,
  getResourcesIdRoute,
  getResourcesResourceIdPoolMembersRoute,
  getResourcesRoute,
  getSantaDevicesIdRoute,
  getSantaDevicesRoute,
  getSantaPostureProvidersIdRoute,
  getSantaPostureProvidersRoute,
  getSentineloneDevicesRoute,
  getSentineloneDevicesSentineloneAgentRoute,
  getSentinelonePostureProvidersIdRoute,
  getSentinelonePostureProvidersRoute,
  getSitesIdRoute,
  getSitesRoute,
  getSitesSiteIdGatewaysIdRoute,
  getSitesSiteIdGatewaysRoute,
  getSophosDevicesIdRoute,
  getSophosDevicesRoute,
  getSophosPostureProvidersIdRoute,
  getSophosPostureProvidersRoute,
  getX509AuthProviderRoute,
  patchActorsIdRoute,
  patchClientsIdRoute,
  patchDefenderPostureProvidersIdRoute,
  patchGroupsGroupIdMembershipsRoute,
  patchGroupsIdRoute,
  patchIntunePostureProvidersIdRoute,
  patchIruPostureProvidersIdRoute,
  patchPoliciesIdRoute,
  patchResourcesIdRoute,
  patchResourcesResourceIdPoolMembersRoute,
  patchSantaPostureProvidersIdRoute,
  patchSentinelonePostureProvidersIdRoute,
  patchSitesIdRoute,
  patchSitesSiteIdGatewaysIdRoute,
  patchSophosPostureProvidersIdRoute,
  postActorsActorIdClientTokensRoute,
  postActorsRoute,
  postGroupsRoute,
  postPoliciesRoute,
  postResourcesRoute,
  postSitesRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRotateRoute,
  postSitesSiteIdGatewaysGatewayIdTokenRoute,
  postSitesSiteIdGatewaysRoute,
  postSitesSiteIdGatewayTokensRoute,
  putActorsIdRoute,
  putClientsIdRoute,
  putClientsIdUnverifyRoute,
  putClientsIdVerifyRoute,
  putDefenderPostureProvidersIdRoute,
  putGroupsGroupIdMembershipsRoute,
  putGroupsIdRoute,
  putIntunePostureProvidersIdRoute,
  putIruPostureProvidersIdRoute,
  putPoliciesIdRoute,
  putResourcesIdRoute,
  putResourcesResourceIdPoolMembersRoute,
  putSantaPostureProvidersIdRoute,
  putSentinelonePostureProvidersIdRoute,
  putSitesIdRoute,
  putSitesSiteIdGatewaysIdRoute,
  putSophosPostureProvidersIdRoute,
} from './routes'
import {
  deleteActorsActorIdClientTokensIdRouteHandler,
  deleteActorsActorIdClientTokensRouteHandler,
  deleteActorsActorIdExternalIdentitiesIdRouteHandler,
  deleteActorsIdRouteHandler,
  deleteClientsIdRouteHandler,
  deleteDefenderPostureProvidersIdRouteHandler,
  deleteGroupsIdRouteHandler,
  deleteIntunePostureProvidersIdRouteHandler,
  deleteIruPostureProvidersIdRouteHandler,
  deletePoliciesIdRouteHandler,
  deleteResourcesIdRouteHandler,
  deleteSantaPostureProvidersIdRouteHandler,
  deleteSentinelonePostureProvidersIdRouteHandler,
  deleteSitesIdRouteHandler,
  deleteSitesSiteIdGatewaysIdRouteHandler,
  deleteSitesSiteIdGatewayTokensIdRouteHandler,
  deleteSitesSiteIdGatewayTokensRouteHandler,
  deleteSophosPostureProvidersIdRouteHandler,
  getAccountRouteHandler,
  getActorsActorIdClientTokensIdRouteHandler,
  getActorsActorIdClientTokensRouteHandler,
  getActorsActorIdExternalIdentitiesIdRouteHandler,
  getActorsActorIdExternalIdentitiesRouteHandler,
  getActorsIdRouteHandler,
  getActorsRouteHandler,
  getClientsIdRouteHandler,
  getClientsRouteHandler,
  getDefenderDevicesDefenderDeviceRouteHandler,
  getDefenderDevicesRouteHandler,
  getDefenderPostureProvidersIdRouteHandler,
  getDefenderPostureProvidersRouteHandler,
  getEmailOtpAuthProvidersIdRouteHandler,
  getEmailOtpAuthProvidersRouteHandler,
  getEntraAuthProvidersIdRouteHandler,
  getEntraAuthProvidersRouteHandler,
  getEntraDirectoriesIdRouteHandler,
  getEntraDirectoriesRouteHandler,
  getGithubAuthProvidersIdRouteHandler,
  getGithubAuthProvidersRouteHandler,
  getGoogleAuthProvidersIdRouteHandler,
  getGoogleAuthProvidersRouteHandler,
  getGoogleDirectoriesIdRouteHandler,
  getGoogleDirectoriesRouteHandler,
  getGroupsGroupIdMembershipsRouteHandler,
  getGroupsIdRouteHandler,
  getGroupsRouteHandler,
  getIntuneDevicesIdRouteHandler,
  getIntuneDevicesRouteHandler,
  getIntunePostureProvidersIdRouteHandler,
  getIntunePostureProvidersRouteHandler,
  getIruDevicesIdRouteHandler,
  getIruDevicesRouteHandler,
  getIruPostureProvidersIdRouteHandler,
  getIruPostureProvidersRouteHandler,
  getLogsLogIdRouteHandler,
  getLogsRouteHandler,
  getOidcAuthProvidersIdRouteHandler,
  getOidcAuthProvidersRouteHandler,
  getOktaAuthProvidersIdRouteHandler,
  getOktaAuthProvidersRouteHandler,
  getOktaDirectoriesIdRouteHandler,
  getOktaDirectoriesRouteHandler,
  getPoliciesIdRouteHandler,
  getPoliciesRouteHandler,
  getPostureFieldsRouteHandler,
  getResourcesIdRouteHandler,
  getResourcesResourceIdPoolMembersRouteHandler,
  getResourcesRouteHandler,
  getSantaDevicesIdRouteHandler,
  getSantaDevicesRouteHandler,
  getSantaPostureProvidersIdRouteHandler,
  getSantaPostureProvidersRouteHandler,
  getSentineloneDevicesRouteHandler,
  getSentineloneDevicesSentineloneAgentRouteHandler,
  getSentinelonePostureProvidersIdRouteHandler,
  getSentinelonePostureProvidersRouteHandler,
  getSitesIdRouteHandler,
  getSitesRouteHandler,
  getSitesSiteIdGatewaysIdRouteHandler,
  getSitesSiteIdGatewaysRouteHandler,
  getSophosDevicesIdRouteHandler,
  getSophosDevicesRouteHandler,
  getSophosPostureProvidersIdRouteHandler,
  getSophosPostureProvidersRouteHandler,
  getX509AuthProviderRouteHandler,
  patchActorsIdRouteHandler,
  patchClientsIdRouteHandler,
  patchDefenderPostureProvidersIdRouteHandler,
  patchGroupsGroupIdMembershipsRouteHandler,
  patchGroupsIdRouteHandler,
  patchIntunePostureProvidersIdRouteHandler,
  patchIruPostureProvidersIdRouteHandler,
  patchPoliciesIdRouteHandler,
  patchResourcesIdRouteHandler,
  patchResourcesResourceIdPoolMembersRouteHandler,
  patchSantaPostureProvidersIdRouteHandler,
  patchSentinelonePostureProvidersIdRouteHandler,
  patchSitesIdRouteHandler,
  patchSitesSiteIdGatewaysIdRouteHandler,
  patchSophosPostureProvidersIdRouteHandler,
  postActorsActorIdClientTokensRouteHandler,
  postActorsRouteHandler,
  postGroupsRouteHandler,
  postPoliciesRouteHandler,
  postResourcesRouteHandler,
  postSitesRouteHandler,
  postSitesSiteIdGatewaysGatewayIdTokenRotateRouteHandler,
  postSitesSiteIdGatewaysGatewayIdTokenRouteHandler,
  postSitesSiteIdGatewaysRouteHandler,
  postSitesSiteIdGatewayTokensRouteHandler,
  putActorsIdRouteHandler,
  putClientsIdRouteHandler,
  putClientsIdUnverifyRouteHandler,
  putClientsIdVerifyRouteHandler,
  putDefenderPostureProvidersIdRouteHandler,
  putGroupsGroupIdMembershipsRouteHandler,
  putGroupsIdRouteHandler,
  putIntunePostureProvidersIdRouteHandler,
  putIruPostureProvidersIdRouteHandler,
  putPoliciesIdRouteHandler,
  putResourcesIdRouteHandler,
  putResourcesResourceIdPoolMembersRouteHandler,
  putSantaPostureProvidersIdRouteHandler,
  putSentinelonePostureProvidersIdRouteHandler,
  putSitesIdRouteHandler,
  putSitesSiteIdGatewaysIdRouteHandler,
  putSophosPostureProvidersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(getActorsActorIdExternalIdentitiesRoute, getActorsActorIdExternalIdentitiesRouteHandler)
  .openapi(deleteClientsIdRoute, deleteClientsIdRouteHandler)
  .openapi(getClientsIdRoute, getClientsIdRouteHandler)
  .openapi(patchClientsIdRoute, patchClientsIdRouteHandler)
  .openapi(putClientsIdRoute, putClientsIdRouteHandler)
  .openapi(deleteSitesSiteIdGatewaysIdRoute, deleteSitesSiteIdGatewaysIdRouteHandler)
  .openapi(getSitesSiteIdGatewaysIdRoute, getSitesSiteIdGatewaysIdRouteHandler)
  .openapi(patchSitesSiteIdGatewaysIdRoute, patchSitesSiteIdGatewaysIdRouteHandler)
  .openapi(putSitesSiteIdGatewaysIdRoute, putSitesSiteIdGatewaysIdRouteHandler)
  .openapi(getSantaPostureProvidersRoute, getSantaPostureProvidersRouteHandler)
  .openapi(getGithubAuthProvidersIdRoute, getGithubAuthProvidersIdRouteHandler)
  .openapi(getPostureFieldsRoute, getPostureFieldsRouteHandler)
  .openapi(getOidcAuthProvidersRoute, getOidcAuthProvidersRouteHandler)
  .openapi(deleteSitesSiteIdGatewayTokensIdRoute, deleteSitesSiteIdGatewayTokensIdRouteHandler)
  .openapi(getSentinelonePostureProvidersRoute, getSentinelonePostureProvidersRouteHandler)
  .openapi(deleteActorsIdRoute, deleteActorsIdRouteHandler)
  .openapi(getActorsIdRoute, getActorsIdRouteHandler)
  .openapi(patchActorsIdRoute, patchActorsIdRouteHandler)
  .openapi(putActorsIdRoute, putActorsIdRouteHandler)
  .openapi(putClientsIdVerifyRoute, putClientsIdVerifyRouteHandler)
  .openapi(deleteActorsActorIdClientTokensRoute, deleteActorsActorIdClientTokensRouteHandler)
  .openapi(getActorsActorIdClientTokensRoute, getActorsActorIdClientTokensRouteHandler)
  .openapi(postActorsActorIdClientTokensRoute, postActorsActorIdClientTokensRouteHandler)
  .openapi(deleteActorsActorIdClientTokensIdRoute, deleteActorsActorIdClientTokensIdRouteHandler)
  .openapi(getActorsActorIdClientTokensIdRoute, getActorsActorIdClientTokensIdRouteHandler)
  .openapi(getEmailOtpAuthProvidersRoute, getEmailOtpAuthProvidersRouteHandler)
  .openapi(getEntraAuthProvidersRoute, getEntraAuthProvidersRouteHandler)
  .openapi(deleteIruPostureProvidersIdRoute, deleteIruPostureProvidersIdRouteHandler)
  .openapi(getIruPostureProvidersIdRoute, getIruPostureProvidersIdRouteHandler)
  .openapi(patchIruPostureProvidersIdRoute, patchIruPostureProvidersIdRouteHandler)
  .openapi(putIruPostureProvidersIdRoute, putIruPostureProvidersIdRouteHandler)
  .openapi(getSitesRoute, getSitesRouteHandler)
  .openapi(postSitesRoute, postSitesRouteHandler)
  .openapi(deleteSitesIdRoute, deleteSitesIdRouteHandler)
  .openapi(getSitesIdRoute, getSitesIdRouteHandler)
  .openapi(patchSitesIdRoute, patchSitesIdRouteHandler)
  .openapi(putSitesIdRoute, putSitesIdRouteHandler)
  .openapi(getGoogleAuthProvidersRoute, getGoogleAuthProvidersRouteHandler)
  .openapi(deletePoliciesIdRoute, deletePoliciesIdRouteHandler)
  .openapi(getPoliciesIdRoute, getPoliciesIdRouteHandler)
  .openapi(patchPoliciesIdRoute, patchPoliciesIdRouteHandler)
  .openapi(putPoliciesIdRoute, putPoliciesIdRouteHandler)
  .openapi(deleteIntunePostureProvidersIdRoute, deleteIntunePostureProvidersIdRouteHandler)
  .openapi(getIntunePostureProvidersIdRoute, getIntunePostureProvidersIdRouteHandler)
  .openapi(patchIntunePostureProvidersIdRoute, patchIntunePostureProvidersIdRouteHandler)
  .openapi(putIntunePostureProvidersIdRoute, putIntunePostureProvidersIdRouteHandler)
  .openapi(getX509AuthProviderRoute, getX509AuthProviderRouteHandler)
  .openapi(getResourcesRoute, getResourcesRouteHandler)
  .openapi(postResourcesRoute, postResourcesRouteHandler)
  .openapi(
    deleteActorsActorIdExternalIdentitiesIdRoute,
    deleteActorsActorIdExternalIdentitiesIdRouteHandler,
  )
  .openapi(
    getActorsActorIdExternalIdentitiesIdRoute,
    getActorsActorIdExternalIdentitiesIdRouteHandler,
  )
  .openapi(getSentineloneDevicesRoute, getSentineloneDevicesRouteHandler)
  .openapi(getOktaAuthProvidersRoute, getOktaAuthProvidersRouteHandler)
  .openapi(getIntuneDevicesIdRoute, getIntuneDevicesIdRouteHandler)
  .openapi(getSophosPostureProvidersRoute, getSophosPostureProvidersRouteHandler)
  .openapi(deleteDefenderPostureProvidersIdRoute, deleteDefenderPostureProvidersIdRouteHandler)
  .openapi(getDefenderPostureProvidersIdRoute, getDefenderPostureProvidersIdRouteHandler)
  .openapi(patchDefenderPostureProvidersIdRoute, patchDefenderPostureProvidersIdRouteHandler)
  .openapi(putDefenderPostureProvidersIdRoute, putDefenderPostureProvidersIdRouteHandler)
  .openapi(getIntunePostureProvidersRoute, getIntunePostureProvidersRouteHandler)
  .openapi(getGroupsGroupIdMembershipsRoute, getGroupsGroupIdMembershipsRouteHandler)
  .openapi(patchGroupsGroupIdMembershipsRoute, patchGroupsGroupIdMembershipsRouteHandler)
  .openapi(putGroupsGroupIdMembershipsRoute, putGroupsGroupIdMembershipsRouteHandler)
  .openapi(getGoogleDirectoriesRoute, getGoogleDirectoriesRouteHandler)
  .openapi(
    getSentineloneDevicesSentineloneAgentRoute,
    getSentineloneDevicesSentineloneAgentRouteHandler,
  )
  .openapi(deleteSantaPostureProvidersIdRoute, deleteSantaPostureProvidersIdRouteHandler)
  .openapi(getSantaPostureProvidersIdRoute, getSantaPostureProvidersIdRouteHandler)
  .openapi(patchSantaPostureProvidersIdRoute, patchSantaPostureProvidersIdRouteHandler)
  .openapi(putSantaPostureProvidersIdRoute, putSantaPostureProvidersIdRouteHandler)
  .openapi(getGoogleDirectoriesIdRoute, getGoogleDirectoriesIdRouteHandler)
  .openapi(getSantaDevicesRoute, getSantaDevicesRouteHandler)
  .openapi(putClientsIdUnverifyRoute, putClientsIdUnverifyRouteHandler)
  .openapi(deleteResourcesIdRoute, deleteResourcesIdRouteHandler)
  .openapi(getResourcesIdRoute, getResourcesIdRouteHandler)
  .openapi(patchResourcesIdRoute, patchResourcesIdRouteHandler)
  .openapi(putResourcesIdRoute, putResourcesIdRouteHandler)
  .openapi(getEntraDirectoriesRoute, getEntraDirectoriesRouteHandler)
  .openapi(getEntraAuthProvidersIdRoute, getEntraAuthProvidersIdRouteHandler)
  .openapi(getClientsRoute, getClientsRouteHandler)
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(getSophosDevicesIdRoute, getSophosDevicesIdRouteHandler)
  .openapi(deleteSitesSiteIdGatewayTokensRoute, deleteSitesSiteIdGatewayTokensRouteHandler)
  .openapi(postSitesSiteIdGatewayTokensRoute, postSitesSiteIdGatewayTokensRouteHandler)
  .openapi(getIruDevicesIdRoute, getIruDevicesIdRouteHandler)
  .openapi(getIntuneDevicesRoute, getIntuneDevicesRouteHandler)
  .openapi(getResourcesResourceIdPoolMembersRoute, getResourcesResourceIdPoolMembersRouteHandler)
  .openapi(
    patchResourcesResourceIdPoolMembersRoute,
    patchResourcesResourceIdPoolMembersRouteHandler,
  )
  .openapi(putResourcesResourceIdPoolMembersRoute, putResourcesResourceIdPoolMembersRouteHandler)
  .openapi(getGithubAuthProvidersRoute, getGithubAuthProvidersRouteHandler)
  .openapi(getEntraDirectoriesIdRoute, getEntraDirectoriesIdRouteHandler)
  .openapi(
    deleteSentinelonePostureProvidersIdRoute,
    deleteSentinelonePostureProvidersIdRouteHandler,
  )
  .openapi(getSentinelonePostureProvidersIdRoute, getSentinelonePostureProvidersIdRouteHandler)
  .openapi(patchSentinelonePostureProvidersIdRoute, patchSentinelonePostureProvidersIdRouteHandler)
  .openapi(putSentinelonePostureProvidersIdRoute, putSentinelonePostureProvidersIdRouteHandler)
  .openapi(getEmailOtpAuthProvidersIdRoute, getEmailOtpAuthProvidersIdRouteHandler)
  .openapi(getOktaDirectoriesIdRoute, getOktaDirectoriesIdRouteHandler)
  .openapi(getIruDevicesRoute, getIruDevicesRouteHandler)
  .openapi(deleteGroupsIdRoute, deleteGroupsIdRouteHandler)
  .openapi(getGroupsIdRoute, getGroupsIdRouteHandler)
  .openapi(patchGroupsIdRoute, patchGroupsIdRouteHandler)
  .openapi(putGroupsIdRoute, putGroupsIdRouteHandler)
  .openapi(getLogsLogIdRoute, getLogsLogIdRouteHandler)
  .openapi(getOidcAuthProvidersIdRoute, getOidcAuthProvidersIdRouteHandler)
  .openapi(getSitesSiteIdGatewaysRoute, getSitesSiteIdGatewaysRouteHandler)
  .openapi(postSitesSiteIdGatewaysRoute, postSitesSiteIdGatewaysRouteHandler)
  .openapi(getDefenderDevicesRoute, getDefenderDevicesRouteHandler)
  .openapi(getPoliciesRoute, getPoliciesRouteHandler)
  .openapi(postPoliciesRoute, postPoliciesRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getSophosDevicesRoute, getSophosDevicesRouteHandler)
  .openapi(getActorsRoute, getActorsRouteHandler)
  .openapi(postActorsRoute, postActorsRouteHandler)
  .openapi(getOktaDirectoriesRoute, getOktaDirectoriesRouteHandler)
  .openapi(getSantaDevicesIdRoute, getSantaDevicesIdRouteHandler)
  .openapi(getIruPostureProvidersRoute, getIruPostureProvidersRouteHandler)
  .openapi(getOktaAuthProvidersIdRoute, getOktaAuthProvidersIdRouteHandler)
  .openapi(getDefenderDevicesDefenderDeviceRoute, getDefenderDevicesDefenderDeviceRouteHandler)
  .openapi(deleteSophosPostureProvidersIdRoute, deleteSophosPostureProvidersIdRouteHandler)
  .openapi(getSophosPostureProvidersIdRoute, getSophosPostureProvidersIdRouteHandler)
  .openapi(patchSophosPostureProvidersIdRoute, patchSophosPostureProvidersIdRouteHandler)
  .openapi(putSophosPostureProvidersIdRoute, putSophosPostureProvidersIdRouteHandler)
  .openapi(
    postSitesSiteIdGatewaysGatewayIdTokenRotateRoute,
    postSitesSiteIdGatewaysGatewayIdTokenRotateRouteHandler,
  )
  .openapi(
    postSitesSiteIdGatewaysGatewayIdTokenRoute,
    postSitesSiteIdGatewaysGatewayIdTokenRouteHandler,
  )
  .openapi(getDefenderPostureProvidersRoute, getDefenderPostureProvidersRouteHandler)
  .openapi(getGoogleAuthProvidersIdRoute, getGoogleAuthProvidersIdRouteHandler)

export default app
