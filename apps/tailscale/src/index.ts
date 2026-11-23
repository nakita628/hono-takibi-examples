import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceDeviceIdAttributesAttributeKeyRoute,
  deleteDeviceDeviceIdRoute,
  deleteDeviceInvitesDeviceInviteIdRoute,
  deletePostureIntegrationsIdRoute,
  deleteTailnetTailnetKeysKeyIdRoute,
  deleteTailnetTailnetLoggingLogTypeStreamRoute,
  deleteTailnetTailnetOauthAppsAppIdRoute,
  deleteTailnetTailnetRoute,
  deleteTailnetTailnetServicesServiceNameRoute,
  deleteUserInvitesUserInviteIdRoute,
  deleteWebhooksEndpointIdRoute,
  getDeviceDeviceIdAttributesRoute,
  getDeviceDeviceIdDeviceInvitesRoute,
  getDeviceDeviceIdRoute,
  getDeviceDeviceIdRoutesRoute,
  getDeviceInvitesDeviceInviteIdRoute,
  getOrganizationsOrganizationTailnetsRoute,
  getPostureIntegrationsIdRoute,
  getTailnetTailnetAclRoute,
  getTailnetTailnetContactsRoute,
  getTailnetTailnetDevicesRoute,
  getTailnetTailnetDnsConfigurationRoute,
  getTailnetTailnetDnsNameserversRoute,
  getTailnetTailnetDnsPreferencesRoute,
  getTailnetTailnetDnsSearchpathsRoute,
  getTailnetTailnetDnsSplitDnsRoute,
  getTailnetTailnetKeysKeyIdRoute,
  getTailnetTailnetKeysRoute,
  getTailnetTailnetLoggingConfigurationRoute,
  getTailnetTailnetLoggingLogTypeStreamRoute,
  getTailnetTailnetLoggingLogTypeStreamStatusRoute,
  getTailnetTailnetLoggingNetworkRoute,
  getTailnetTailnetOauthAppsAppIdRoute,
  getTailnetTailnetOauthAppsRoute,
  getTailnetTailnetPostureIntegrationsRoute,
  getTailnetTailnetServicesRoute,
  getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  getTailnetTailnetServicesServiceNameDevicesRoute,
  getTailnetTailnetServicesServiceNameRoute,
  getTailnetTailnetSettingsRoute,
  getTailnetTailnetUserInvitesRoute,
  getTailnetTailnetUsersRoute,
  getTailnetTailnetWebhooksRoute,
  getUserInvitesUserInviteIdRoute,
  getUsersUserIdRoute,
  getWebhooksEndpointIdRoute,
  patchPostureIntegrationsIdRoute,
  patchTailnetTailnetContactsContactTypeRoute,
  patchTailnetTailnetDeviceAttributesRoute,
  patchTailnetTailnetDnsSplitDnsRoute,
  patchTailnetTailnetSettingsRoute,
  patchWebhooksEndpointIdRoute,
  postDeviceDeviceIdAttributesAttributeKeyRoute,
  postDeviceDeviceIdAuthorizedRoute,
  postDeviceDeviceIdDeviceInvitesRoute,
  postDeviceDeviceIdExpireRoute,
  postDeviceDeviceIdIpRoute,
  postDeviceDeviceIdKeyRoute,
  postDeviceDeviceIdNameRoute,
  postDeviceDeviceIdRoutesRoute,
  postDeviceDeviceIdTagsRoute,
  postDeviceInvitesDashAcceptRoute,
  postDeviceInvitesDeviceInviteIdResendRoute,
  postOrganizationsOrganizationTailnetsRoute,
  postTailnetTailnetAclPreviewRoute,
  postTailnetTailnetAclRoute,
  postTailnetTailnetAclValidateRoute,
  postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute,
  postTailnetTailnetAwsExternalIdRoute,
  postTailnetTailnetContactsContactTypeResendVerificationEmailRoute,
  postTailnetTailnetDnsConfigurationRoute,
  postTailnetTailnetDnsNameserversRoute,
  postTailnetTailnetDnsPreferencesRoute,
  postTailnetTailnetDnsSearchpathsRoute,
  postTailnetTailnetKeysRoute,
  postTailnetTailnetOauthAppsRoute,
  postTailnetTailnetPostureIntegrationsRoute,
  postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  postTailnetTailnetUserInvitesRoute,
  postTailnetTailnetWebhooksRoute,
  postUserInvitesUserInviteIdResendRoute,
  postUsersUserIdApproveRoute,
  postUsersUserIdDeleteRoute,
  postUsersUserIdRestoreRoute,
  postUsersUserIdRoleRoute,
  postUsersUserIdSuspendRoute,
  postWebhooksEndpointIdRotateRoute,
  postWebhooksEndpointIdTestRoute,
  putTailnetTailnetDnsSplitDnsRoute,
  putTailnetTailnetKeysKeyIdRoute,
  putTailnetTailnetLoggingLogTypeStreamRoute,
  putTailnetTailnetOauthAppsAppIdRoute,
  putTailnetTailnetServicesServiceNameRoute,
} from './routes'
import {
  deleteDeviceDeviceIdAttributesAttributeKeyRouteHandler,
  deleteDeviceDeviceIdRouteHandler,
  deleteDeviceInvitesDeviceInviteIdRouteHandler,
  deletePostureIntegrationsIdRouteHandler,
  deleteTailnetTailnetKeysKeyIdRouteHandler,
  deleteTailnetTailnetLoggingLogTypeStreamRouteHandler,
  deleteTailnetTailnetOauthAppsAppIdRouteHandler,
  deleteTailnetTailnetRouteHandler,
  deleteTailnetTailnetServicesServiceNameRouteHandler,
  deleteUserInvitesUserInviteIdRouteHandler,
  deleteWebhooksEndpointIdRouteHandler,
  getDeviceDeviceIdAttributesRouteHandler,
  getDeviceDeviceIdDeviceInvitesRouteHandler,
  getDeviceDeviceIdRouteHandler,
  getDeviceDeviceIdRoutesRouteHandler,
  getDeviceInvitesDeviceInviteIdRouteHandler,
  getOrganizationsOrganizationTailnetsRouteHandler,
  getPostureIntegrationsIdRouteHandler,
  getTailnetTailnetAclRouteHandler,
  getTailnetTailnetContactsRouteHandler,
  getTailnetTailnetDevicesRouteHandler,
  getTailnetTailnetDnsConfigurationRouteHandler,
  getTailnetTailnetDnsNameserversRouteHandler,
  getTailnetTailnetDnsPreferencesRouteHandler,
  getTailnetTailnetDnsSearchpathsRouteHandler,
  getTailnetTailnetDnsSplitDnsRouteHandler,
  getTailnetTailnetKeysKeyIdRouteHandler,
  getTailnetTailnetKeysRouteHandler,
  getTailnetTailnetLoggingConfigurationRouteHandler,
  getTailnetTailnetLoggingLogTypeStreamRouteHandler,
  getTailnetTailnetLoggingLogTypeStreamStatusRouteHandler,
  getTailnetTailnetLoggingNetworkRouteHandler,
  getTailnetTailnetOauthAppsAppIdRouteHandler,
  getTailnetTailnetOauthAppsRouteHandler,
  getTailnetTailnetPostureIntegrationsRouteHandler,
  getTailnetTailnetServicesRouteHandler,
  getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRouteHandler,
  getTailnetTailnetServicesServiceNameDevicesRouteHandler,
  getTailnetTailnetServicesServiceNameRouteHandler,
  getTailnetTailnetSettingsRouteHandler,
  getTailnetTailnetUserInvitesRouteHandler,
  getTailnetTailnetUsersRouteHandler,
  getTailnetTailnetWebhooksRouteHandler,
  getUserInvitesUserInviteIdRouteHandler,
  getUsersUserIdRouteHandler,
  getWebhooksEndpointIdRouteHandler,
  patchPostureIntegrationsIdRouteHandler,
  patchTailnetTailnetContactsContactTypeRouteHandler,
  patchTailnetTailnetDeviceAttributesRouteHandler,
  patchTailnetTailnetDnsSplitDnsRouteHandler,
  patchTailnetTailnetSettingsRouteHandler,
  patchWebhooksEndpointIdRouteHandler,
  postDeviceDeviceIdAttributesAttributeKeyRouteHandler,
  postDeviceDeviceIdAuthorizedRouteHandler,
  postDeviceDeviceIdDeviceInvitesRouteHandler,
  postDeviceDeviceIdExpireRouteHandler,
  postDeviceDeviceIdIpRouteHandler,
  postDeviceDeviceIdKeyRouteHandler,
  postDeviceDeviceIdNameRouteHandler,
  postDeviceDeviceIdRoutesRouteHandler,
  postDeviceDeviceIdTagsRouteHandler,
  postDeviceInvitesDashAcceptRouteHandler,
  postDeviceInvitesDeviceInviteIdResendRouteHandler,
  postOrganizationsOrganizationTailnetsRouteHandler,
  postTailnetTailnetAclPreviewRouteHandler,
  postTailnetTailnetAclRouteHandler,
  postTailnetTailnetAclValidateRouteHandler,
  postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRouteHandler,
  postTailnetTailnetAwsExternalIdRouteHandler,
  postTailnetTailnetContactsContactTypeResendVerificationEmailRouteHandler,
  postTailnetTailnetDnsConfigurationRouteHandler,
  postTailnetTailnetDnsNameserversRouteHandler,
  postTailnetTailnetDnsPreferencesRouteHandler,
  postTailnetTailnetDnsSearchpathsRouteHandler,
  postTailnetTailnetKeysRouteHandler,
  postTailnetTailnetOauthAppsRouteHandler,
  postTailnetTailnetPostureIntegrationsRouteHandler,
  postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRouteHandler,
  postTailnetTailnetUserInvitesRouteHandler,
  postTailnetTailnetWebhooksRouteHandler,
  postUserInvitesUserInviteIdResendRouteHandler,
  postUsersUserIdApproveRouteHandler,
  postUsersUserIdDeleteRouteHandler,
  postUsersUserIdRestoreRouteHandler,
  postUsersUserIdRoleRouteHandler,
  postUsersUserIdSuspendRouteHandler,
  postWebhooksEndpointIdRotateRouteHandler,
  postWebhooksEndpointIdTestRouteHandler,
  putTailnetTailnetDnsSplitDnsRouteHandler,
  putTailnetTailnetKeysKeyIdRouteHandler,
  putTailnetTailnetLoggingLogTypeStreamRouteHandler,
  putTailnetTailnetOauthAppsAppIdRouteHandler,
  putTailnetTailnetServicesServiceNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTailnetTailnetDevicesRoute, getTailnetTailnetDevicesRouteHandler)
  .openapi(deleteTailnetTailnetRoute, deleteTailnetTailnetRouteHandler)
  .openapi(
    patchTailnetTailnetDeviceAttributesRoute,
    patchTailnetTailnetDeviceAttributesRouteHandler,
  )
  .openapi(getDeviceDeviceIdRoute, getDeviceDeviceIdRouteHandler)
  .openapi(deleteDeviceDeviceIdRoute, deleteDeviceDeviceIdRouteHandler)
  .openapi(postDeviceDeviceIdExpireRoute, postDeviceDeviceIdExpireRouteHandler)
  .openapi(getDeviceDeviceIdRoutesRoute, getDeviceDeviceIdRoutesRouteHandler)
  .openapi(postDeviceDeviceIdRoutesRoute, postDeviceDeviceIdRoutesRouteHandler)
  .openapi(postDeviceDeviceIdAuthorizedRoute, postDeviceDeviceIdAuthorizedRouteHandler)
  .openapi(postDeviceDeviceIdNameRoute, postDeviceDeviceIdNameRouteHandler)
  .openapi(postDeviceDeviceIdTagsRoute, postDeviceDeviceIdTagsRouteHandler)
  .openapi(postDeviceDeviceIdKeyRoute, postDeviceDeviceIdKeyRouteHandler)
  .openapi(postDeviceDeviceIdIpRoute, postDeviceDeviceIdIpRouteHandler)
  .openapi(getDeviceDeviceIdAttributesRoute, getDeviceDeviceIdAttributesRouteHandler)
  .openapi(
    postDeviceDeviceIdAttributesAttributeKeyRoute,
    postDeviceDeviceIdAttributesAttributeKeyRouteHandler,
  )
  .openapi(
    deleteDeviceDeviceIdAttributesAttributeKeyRoute,
    deleteDeviceDeviceIdAttributesAttributeKeyRouteHandler,
  )
  .openapi(getDeviceDeviceIdDeviceInvitesRoute, getDeviceDeviceIdDeviceInvitesRouteHandler)
  .openapi(postDeviceDeviceIdDeviceInvitesRoute, postDeviceDeviceIdDeviceInvitesRouteHandler)
  .openapi(getTailnetTailnetUserInvitesRoute, getTailnetTailnetUserInvitesRouteHandler)
  .openapi(postTailnetTailnetUserInvitesRoute, postTailnetTailnetUserInvitesRouteHandler)
  .openapi(getUserInvitesUserInviteIdRoute, getUserInvitesUserInviteIdRouteHandler)
  .openapi(deleteUserInvitesUserInviteIdRoute, deleteUserInvitesUserInviteIdRouteHandler)
  .openapi(postUserInvitesUserInviteIdResendRoute, postUserInvitesUserInviteIdResendRouteHandler)
  .openapi(getDeviceInvitesDeviceInviteIdRoute, getDeviceInvitesDeviceInviteIdRouteHandler)
  .openapi(deleteDeviceInvitesDeviceInviteIdRoute, deleteDeviceInvitesDeviceInviteIdRouteHandler)
  .openapi(
    postDeviceInvitesDeviceInviteIdResendRoute,
    postDeviceInvitesDeviceInviteIdResendRouteHandler,
  )
  .openapi(postDeviceInvitesDashAcceptRoute, postDeviceInvitesDashAcceptRouteHandler)
  .openapi(
    getTailnetTailnetLoggingConfigurationRoute,
    getTailnetTailnetLoggingConfigurationRouteHandler,
  )
  .openapi(getTailnetTailnetLoggingNetworkRoute, getTailnetTailnetLoggingNetworkRouteHandler)
  .openapi(
    getTailnetTailnetLoggingLogTypeStreamStatusRoute,
    getTailnetTailnetLoggingLogTypeStreamStatusRouteHandler,
  )
  .openapi(
    getTailnetTailnetLoggingLogTypeStreamRoute,
    getTailnetTailnetLoggingLogTypeStreamRouteHandler,
  )
  .openapi(
    putTailnetTailnetLoggingLogTypeStreamRoute,
    putTailnetTailnetLoggingLogTypeStreamRouteHandler,
  )
  .openapi(
    deleteTailnetTailnetLoggingLogTypeStreamRoute,
    deleteTailnetTailnetLoggingLogTypeStreamRouteHandler,
  )
  .openapi(postTailnetTailnetAwsExternalIdRoute, postTailnetTailnetAwsExternalIdRouteHandler)
  .openapi(
    postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute,
    postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRouteHandler,
  )
  .openapi(getTailnetTailnetDnsNameserversRoute, getTailnetTailnetDnsNameserversRouteHandler)
  .openapi(postTailnetTailnetDnsNameserversRoute, postTailnetTailnetDnsNameserversRouteHandler)
  .openapi(getTailnetTailnetDnsPreferencesRoute, getTailnetTailnetDnsPreferencesRouteHandler)
  .openapi(postTailnetTailnetDnsPreferencesRoute, postTailnetTailnetDnsPreferencesRouteHandler)
  .openapi(getTailnetTailnetDnsSearchpathsRoute, getTailnetTailnetDnsSearchpathsRouteHandler)
  .openapi(postTailnetTailnetDnsSearchpathsRoute, postTailnetTailnetDnsSearchpathsRouteHandler)
  .openapi(getTailnetTailnetDnsSplitDnsRoute, getTailnetTailnetDnsSplitDnsRouteHandler)
  .openapi(patchTailnetTailnetDnsSplitDnsRoute, patchTailnetTailnetDnsSplitDnsRouteHandler)
  .openapi(putTailnetTailnetDnsSplitDnsRoute, putTailnetTailnetDnsSplitDnsRouteHandler)
  .openapi(getTailnetTailnetDnsConfigurationRoute, getTailnetTailnetDnsConfigurationRouteHandler)
  .openapi(postTailnetTailnetDnsConfigurationRoute, postTailnetTailnetDnsConfigurationRouteHandler)
  .openapi(getTailnetTailnetKeysRoute, getTailnetTailnetKeysRouteHandler)
  .openapi(postTailnetTailnetKeysRoute, postTailnetTailnetKeysRouteHandler)
  .openapi(getTailnetTailnetKeysKeyIdRoute, getTailnetTailnetKeysKeyIdRouteHandler)
  .openapi(deleteTailnetTailnetKeysKeyIdRoute, deleteTailnetTailnetKeysKeyIdRouteHandler)
  .openapi(putTailnetTailnetKeysKeyIdRoute, putTailnetTailnetKeysKeyIdRouteHandler)
  .openapi(getTailnetTailnetAclRoute, getTailnetTailnetAclRouteHandler)
  .openapi(postTailnetTailnetAclRoute, postTailnetTailnetAclRouteHandler)
  .openapi(postTailnetTailnetAclPreviewRoute, postTailnetTailnetAclPreviewRouteHandler)
  .openapi(postTailnetTailnetAclValidateRoute, postTailnetTailnetAclValidateRouteHandler)
  .openapi(
    getTailnetTailnetPostureIntegrationsRoute,
    getTailnetTailnetPostureIntegrationsRouteHandler,
  )
  .openapi(
    postTailnetTailnetPostureIntegrationsRoute,
    postTailnetTailnetPostureIntegrationsRouteHandler,
  )
  .openapi(getPostureIntegrationsIdRoute, getPostureIntegrationsIdRouteHandler)
  .openapi(patchPostureIntegrationsIdRoute, patchPostureIntegrationsIdRouteHandler)
  .openapi(deletePostureIntegrationsIdRoute, deletePostureIntegrationsIdRouteHandler)
  .openapi(getTailnetTailnetUsersRoute, getTailnetTailnetUsersRouteHandler)
  .openapi(getUsersUserIdRoute, getUsersUserIdRouteHandler)
  .openapi(postUsersUserIdRoleRoute, postUsersUserIdRoleRouteHandler)
  .openapi(postUsersUserIdApproveRoute, postUsersUserIdApproveRouteHandler)
  .openapi(postUsersUserIdSuspendRoute, postUsersUserIdSuspendRouteHandler)
  .openapi(postUsersUserIdRestoreRoute, postUsersUserIdRestoreRouteHandler)
  .openapi(postUsersUserIdDeleteRoute, postUsersUserIdDeleteRouteHandler)
  .openapi(getTailnetTailnetContactsRoute, getTailnetTailnetContactsRouteHandler)
  .openapi(
    patchTailnetTailnetContactsContactTypeRoute,
    patchTailnetTailnetContactsContactTypeRouteHandler,
  )
  .openapi(
    postTailnetTailnetContactsContactTypeResendVerificationEmailRoute,
    postTailnetTailnetContactsContactTypeResendVerificationEmailRouteHandler,
  )
  .openapi(getTailnetTailnetWebhooksRoute, getTailnetTailnetWebhooksRouteHandler)
  .openapi(postTailnetTailnetWebhooksRoute, postTailnetTailnetWebhooksRouteHandler)
  .openapi(getWebhooksEndpointIdRoute, getWebhooksEndpointIdRouteHandler)
  .openapi(patchWebhooksEndpointIdRoute, patchWebhooksEndpointIdRouteHandler)
  .openapi(deleteWebhooksEndpointIdRoute, deleteWebhooksEndpointIdRouteHandler)
  .openapi(postWebhooksEndpointIdTestRoute, postWebhooksEndpointIdTestRouteHandler)
  .openapi(postWebhooksEndpointIdRotateRoute, postWebhooksEndpointIdRotateRouteHandler)
  .openapi(getTailnetTailnetSettingsRoute, getTailnetTailnetSettingsRouteHandler)
  .openapi(patchTailnetTailnetSettingsRoute, patchTailnetTailnetSettingsRouteHandler)
  .openapi(getTailnetTailnetServicesRoute, getTailnetTailnetServicesRouteHandler)
  .openapi(
    getTailnetTailnetServicesServiceNameRoute,
    getTailnetTailnetServicesServiceNameRouteHandler,
  )
  .openapi(
    putTailnetTailnetServicesServiceNameRoute,
    putTailnetTailnetServicesServiceNameRouteHandler,
  )
  .openapi(
    deleteTailnetTailnetServicesServiceNameRoute,
    deleteTailnetTailnetServicesServiceNameRouteHandler,
  )
  .openapi(
    getTailnetTailnetServicesServiceNameDevicesRoute,
    getTailnetTailnetServicesServiceNameDevicesRouteHandler,
  )
  .openapi(
    getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
    getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRouteHandler,
  )
  .openapi(
    postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
    postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRouteHandler,
  )
  .openapi(getTailnetTailnetOauthAppsRoute, getTailnetTailnetOauthAppsRouteHandler)
  .openapi(postTailnetTailnetOauthAppsRoute, postTailnetTailnetOauthAppsRouteHandler)
  .openapi(getTailnetTailnetOauthAppsAppIdRoute, getTailnetTailnetOauthAppsAppIdRouteHandler)
  .openapi(putTailnetTailnetOauthAppsAppIdRoute, putTailnetTailnetOauthAppsAppIdRouteHandler)
  .openapi(deleteTailnetTailnetOauthAppsAppIdRoute, deleteTailnetTailnetOauthAppsAppIdRouteHandler)
  .openapi(
    getOrganizationsOrganizationTailnetsRoute,
    getOrganizationsOrganizationTailnetsRouteHandler,
  )
  .openapi(
    postOrganizationsOrganizationTailnetsRoute,
    postOrganizationsOrganizationTailnetsRouteHandler,
  )

export default app
