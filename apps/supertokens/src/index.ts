import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppidAppIdEeLicenseRoute,
  deleteAppidAppIdRecipeDashboardSessionRoute,
  deleteAppidAppIdRecipeDashboardUserRoute,
  deleteAppidAppIdTenantIdHelloRoute,
  getAppidAppIdApiversionRoute,
  getAppidAppIdEeFeatureflagRoute,
  getAppidAppIdEeLicenseRoute,
  getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute,
  getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute,
  getAppidAppIdRecipeDashboardUserSessionsRoute,
  getAppidAppIdRecipeDashboardUsersRoute,
  getAppidAppIdRecipeJwtJwksRoute,
  getAppidAppIdRecipeMultitenancyTenantListRoute,
  getAppidAppIdRecipeMultitenancyTenantListV2Route,
  getAppidAppIdRecipeOauthAuthRequestsConsentRoute,
  getAppidAppIdRecipeOauthAuthRequestsLoginRoute,
  getAppidAppIdRecipeOauthAuthRoute,
  getAppidAppIdRecipeOauthClientsListRoute,
  getAppidAppIdRecipeOauthClientsRoute,
  getAppidAppIdRecipeOauthSessionsLogoutRoute,
  getAppidAppIdRecipePermissionRolesRoute,
  getAppidAppIdRecipeRolePermissionsRoute,
  getAppidAppIdRecipeRolesRoute,
  getAppidAppIdRecipeSessionDataRoute,
  getAppidAppIdRecipeSessionRoute,
  getAppidAppIdRecipeTotpDeviceListRoute,
  getAppidAppIdRecipeUserEmailVerifyRoute,
  getAppidAppIdRecipeUseridMapRoute,
  getAppidAppIdRecipeUserMetadataRoute,
  getAppidAppIdRequestsStatsRoute,
  getAppidAppIdTelemetryRoute,
  getAppidAppIdTenantIdHelloRoute,
  getAppidAppIdTenantIdIndexRoute,
  getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute,
  getAppidAppIdTenantIdRecipeJwtDataRoute,
  getAppidAppIdTenantIdRecipeMultitenancyTenantRoute,
  getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route,
  getAppidAppIdTenantIdRecipeRoleUsersRoute,
  getAppidAppIdTenantIdRecipeSessionUserRoute,
  getAppidAppIdTenantIdRecipeSigninupCodesRoute,
  getAppidAppIdTenantIdRecipeUser2Route,
  getAppidAppIdTenantIdRecipeUser3Route,
  getAppidAppIdTenantIdRecipeUserRolesRoute,
  getAppidAppIdTenantIdRecipeUserRoute,
  getAppidAppIdTenantIdRecipeUsersByEmailRoute,
  getAppidAppIdTenantIdUsersByAccountinfoRoute,
  getAppidAppIdTenantIdUsersCountRoute,
  getAppidAppIdTenantIdUsersRoute,
  getAppidAppIdUserIdRoute,
  getAppidAppIdUsersCountActiveRoute,
  getAppidAppIdUserSearchTagsRoute,
  getAppidAppIdWellKnownJwksJsonRoute,
  getConfigRoute,
  getRecipeMultitenancyAppListRoute,
  getRecipeMultitenancyAppListV2Route,
  getRecipeMultitenancyConnectionuridomainListRoute,
  getRecipeMultitenancyConnectionuridomainListV2Route,
  postAppidAppIdRecipeAccountlinkingUserLinkRoute,
  postAppidAppIdRecipeAccountlinkingUserPrimaryRoute,
  postAppidAppIdRecipeAccountlinkingUserUnlinkRoute,
  postAppidAppIdRecipeDashboardSessionVerifyRoute,
  postAppidAppIdRecipeDashboardSigninRoute,
  postAppidAppIdRecipeDashboardUserRoute,
  postAppidAppIdRecipeJwtRoute,
  postAppidAppIdRecipeMultitenancyTenantRemoveRoute,
  postAppidAppIdRecipeOauthClientsRemoveRoute,
  postAppidAppIdRecipeOauthClientsRoute,
  postAppidAppIdRecipeOauthIntrospectRoute,
  postAppidAppIdRecipeOauthSessionRevokeRoute,
  postAppidAppIdRecipeOauthTokenRevokeRoute,
  postAppidAppIdRecipeOauthTokenRoute,
  postAppidAppIdRecipeOauthTokensRevokeRoute,
  postAppidAppIdRecipeRolePermissionsRemoveRoute,
  postAppidAppIdRecipeRoleRemoveRoute,
  postAppidAppIdRecipeSessionRefreshRoute,
  postAppidAppIdRecipeSessionRegenerateRoute,
  postAppidAppIdRecipeSessionVerifyRoute,
  postAppidAppIdRecipeTotpDeviceRemoveRoute,
  postAppidAppIdRecipeTotpDeviceRoute,
  postAppidAppIdRecipeUserEmailVerifyRemoveRoute,
  postAppidAppIdRecipeUseridMapRemoveRoute,
  postAppidAppIdRecipeUseridMapRoute,
  postAppidAppIdRecipeUserMetadataRemoveRoute,
  postAppidAppIdTenantIdHelloRoute,
  postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute,
  postAppidAppIdTenantIdRecipeSessionRemoveRoute,
  postAppidAppIdTenantIdRecipeSessionRoute,
  postAppidAppIdTenantIdRecipeSigninRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute,
  postAppidAppIdTenantIdRecipeSigninupCodeRoute,
  postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute,
  postAppidAppIdTenantIdRecipeSigninupRoute,
  postAppidAppIdTenantIdRecipeSignupRoute,
  postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute,
  postAppidAppIdTenantIdRecipeTotpVerifyRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute,
  postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute,
  postAppidAppIdTenantIdRecipeUserRoleRemoveRoute,
  postAppidAppIdUserRemoveRoute,
  postRecipeMultitenancyAppRemoveRoute,
  postRecipeMultitenancyConnectionuridomainRemoveRoute,
  postRecipeTotpDeviceImportRoute,
  putAppidAppIdEeLicenseRoute,
  putAppidAppIdRecipeDashboardUserRoute,
  putAppidAppIdRecipeMultitenancyTenantRoute,
  putAppidAppIdRecipeMultitenancyTenantV2Route,
  putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute,
  putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute,
  putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute,
  putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute,
  putAppidAppIdRecipeOauthClientsRoute,
  putAppidAppIdRecipeRoleRoute,
  putAppidAppIdRecipeSessionDataRoute,
  putAppidAppIdRecipeTotpDeviceRoute,
  putAppidAppIdRecipeUseridExternalUserIdInfoRoute,
  putAppidAppIdRecipeUserMetadataRoute,
  putAppidAppIdTenantIdHelloRoute,
  putAppidAppIdTenantIdRecipeJwtDataRoute,
  putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute,
  putAppidAppIdTenantIdRecipeUser2Route,
  putAppidAppIdTenantIdRecipeUserRoleRoute,
  putAppidAppIdTenantIdRecipeUserRoute,
  putRecipeMultitenancyAppRoute,
  putRecipeMultitenancyAppV2Route,
  putRecipeMultitenancyConnectionuridomainRoute,
  putRecipeMultitenancyConnectionuridomainV2Route,
} from './routes'
import {
  deleteAppidAppIdEeLicenseRouteHandler,
  deleteAppidAppIdRecipeDashboardSessionRouteHandler,
  deleteAppidAppIdRecipeDashboardUserRouteHandler,
  deleteAppidAppIdTenantIdHelloRouteHandler,
  getAppidAppIdApiversionRouteHandler,
  getAppidAppIdEeFeatureflagRouteHandler,
  getAppidAppIdEeLicenseRouteHandler,
  getAppidAppIdRecipeAccountlinkingUserLinkCheckRouteHandler,
  getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRouteHandler,
  getAppidAppIdRecipeDashboardUserSessionsRouteHandler,
  getAppidAppIdRecipeDashboardUsersRouteHandler,
  getAppidAppIdRecipeJwtJwksRouteHandler,
  getAppidAppIdRecipeMultitenancyTenantListRouteHandler,
  getAppidAppIdRecipeMultitenancyTenantListV2RouteHandler,
  getAppidAppIdRecipeOauthAuthRequestsConsentRouteHandler,
  getAppidAppIdRecipeOauthAuthRequestsLoginRouteHandler,
  getAppidAppIdRecipeOauthAuthRouteHandler,
  getAppidAppIdRecipeOauthClientsListRouteHandler,
  getAppidAppIdRecipeOauthClientsRouteHandler,
  getAppidAppIdRecipeOauthSessionsLogoutRouteHandler,
  getAppidAppIdRecipePermissionRolesRouteHandler,
  getAppidAppIdRecipeRolePermissionsRouteHandler,
  getAppidAppIdRecipeRolesRouteHandler,
  getAppidAppIdRecipeSessionDataRouteHandler,
  getAppidAppIdRecipeSessionRouteHandler,
  getAppidAppIdRecipeTotpDeviceListRouteHandler,
  getAppidAppIdRecipeUserEmailVerifyRouteHandler,
  getAppidAppIdRecipeUseridMapRouteHandler,
  getAppidAppIdRecipeUserMetadataRouteHandler,
  getAppidAppIdRequestsStatsRouteHandler,
  getAppidAppIdTelemetryRouteHandler,
  getAppidAppIdTenantIdHelloRouteHandler,
  getAppidAppIdTenantIdIndexRouteHandler,
  getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRouteHandler,
  getAppidAppIdTenantIdRecipeJwtDataRouteHandler,
  getAppidAppIdTenantIdRecipeMultitenancyTenantRouteHandler,
  getAppidAppIdTenantIdRecipeMultitenancyTenantV2RouteHandler,
  getAppidAppIdTenantIdRecipeRoleUsersRouteHandler,
  getAppidAppIdTenantIdRecipeSessionUserRouteHandler,
  getAppidAppIdTenantIdRecipeSigninupCodesRouteHandler,
  getAppidAppIdTenantIdRecipeUser2RouteHandler,
  getAppidAppIdTenantIdRecipeUser3RouteHandler,
  getAppidAppIdTenantIdRecipeUserRolesRouteHandler,
  getAppidAppIdTenantIdRecipeUserRouteHandler,
  getAppidAppIdTenantIdRecipeUsersByEmailRouteHandler,
  getAppidAppIdTenantIdUsersByAccountinfoRouteHandler,
  getAppidAppIdTenantIdUsersCountRouteHandler,
  getAppidAppIdTenantIdUsersRouteHandler,
  getAppidAppIdUserIdRouteHandler,
  getAppidAppIdUsersCountActiveRouteHandler,
  getAppidAppIdUserSearchTagsRouteHandler,
  getAppidAppIdWellKnownJwksJsonRouteHandler,
  getConfigRouteHandler,
  getRecipeMultitenancyAppListRouteHandler,
  getRecipeMultitenancyAppListV2RouteHandler,
  getRecipeMultitenancyConnectionuridomainListRouteHandler,
  getRecipeMultitenancyConnectionuridomainListV2RouteHandler,
  postAppidAppIdRecipeAccountlinkingUserLinkRouteHandler,
  postAppidAppIdRecipeAccountlinkingUserPrimaryRouteHandler,
  postAppidAppIdRecipeAccountlinkingUserUnlinkRouteHandler,
  postAppidAppIdRecipeDashboardSessionVerifyRouteHandler,
  postAppidAppIdRecipeDashboardSigninRouteHandler,
  postAppidAppIdRecipeDashboardUserRouteHandler,
  postAppidAppIdRecipeJwtRouteHandler,
  postAppidAppIdRecipeMultitenancyTenantRemoveRouteHandler,
  postAppidAppIdRecipeOauthClientsRemoveRouteHandler,
  postAppidAppIdRecipeOauthClientsRouteHandler,
  postAppidAppIdRecipeOauthIntrospectRouteHandler,
  postAppidAppIdRecipeOauthSessionRevokeRouteHandler,
  postAppidAppIdRecipeOauthTokenRevokeRouteHandler,
  postAppidAppIdRecipeOauthTokenRouteHandler,
  postAppidAppIdRecipeOauthTokensRevokeRouteHandler,
  postAppidAppIdRecipeRolePermissionsRemoveRouteHandler,
  postAppidAppIdRecipeRoleRemoveRouteHandler,
  postAppidAppIdRecipeSessionRefreshRouteHandler,
  postAppidAppIdRecipeSessionRegenerateRouteHandler,
  postAppidAppIdRecipeSessionVerifyRouteHandler,
  postAppidAppIdRecipeTotpDeviceRemoveRouteHandler,
  postAppidAppIdRecipeTotpDeviceRouteHandler,
  postAppidAppIdRecipeUserEmailVerifyRemoveRouteHandler,
  postAppidAppIdRecipeUseridMapRemoveRouteHandler,
  postAppidAppIdRecipeUseridMapRouteHandler,
  postAppidAppIdRecipeUserMetadataRemoveRouteHandler,
  postAppidAppIdTenantIdHelloRouteHandler,
  postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRouteHandler,
  postAppidAppIdTenantIdRecipeSessionRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeSessionRouteHandler,
  postAppidAppIdTenantIdRecipeSigninRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupCodeCheckRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupCodeConsumeRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupCodeRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupCodeRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupCodesRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeSigninupRouteHandler,
  postAppidAppIdTenantIdRecipeSignupRouteHandler,
  postAppidAppIdTenantIdRecipeTotpDeviceVerifyRouteHandler,
  postAppidAppIdTenantIdRecipeTotpVerifyRouteHandler,
  postAppidAppIdTenantIdRecipeUserEmailVerifyRouteHandler,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRouteHandler,
  postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRouteHandler,
  postAppidAppIdTenantIdRecipeUserPasswordhashImportRouteHandler,
  postAppidAppIdTenantIdRecipeUserPasswordResetRouteHandler,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRouteHandler,
  postAppidAppIdTenantIdRecipeUserPasswordResetTokenRouteHandler,
  postAppidAppIdTenantIdRecipeUserRoleRemoveRouteHandler,
  postAppidAppIdUserRemoveRouteHandler,
  postRecipeMultitenancyAppRemoveRouteHandler,
  postRecipeMultitenancyConnectionuridomainRemoveRouteHandler,
  postRecipeTotpDeviceImportRouteHandler,
  putAppidAppIdEeLicenseRouteHandler,
  putAppidAppIdRecipeDashboardUserRouteHandler,
  putAppidAppIdRecipeMultitenancyTenantRouteHandler,
  putAppidAppIdRecipeMultitenancyTenantV2RouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsConsentRejectRouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsLoginRejectRouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRouteHandler,
  putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRouteHandler,
  putAppidAppIdRecipeOauthClientsRouteHandler,
  putAppidAppIdRecipeRoleRouteHandler,
  putAppidAppIdRecipeSessionDataRouteHandler,
  putAppidAppIdRecipeTotpDeviceRouteHandler,
  putAppidAppIdRecipeUseridExternalUserIdInfoRouteHandler,
  putAppidAppIdRecipeUserMetadataRouteHandler,
  putAppidAppIdTenantIdHelloRouteHandler,
  putAppidAppIdTenantIdRecipeJwtDataRouteHandler,
  putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRouteHandler,
  putAppidAppIdTenantIdRecipeUser2RouteHandler,
  putAppidAppIdTenantIdRecipeUserRoleRouteHandler,
  putAppidAppIdTenantIdRecipeUserRouteHandler,
  putRecipeMultitenancyAppRouteHandler,
  putRecipeMultitenancyAppV2RouteHandler,
  putRecipeMultitenancyConnectionuridomainRouteHandler,
  putRecipeMultitenancyConnectionuridomainV2RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute,
    getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute,
    getAppidAppIdRecipeAccountlinkingUserLinkCheckRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeAccountlinkingUserPrimaryRoute,
    postAppidAppIdRecipeAccountlinkingUserPrimaryRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeAccountlinkingUserLinkRoute,
    postAppidAppIdRecipeAccountlinkingUserLinkRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeAccountlinkingUserUnlinkRoute,
    postAppidAppIdRecipeAccountlinkingUserUnlinkRouteHandler,
  )
  .openapi(postAppidAppIdRecipeTotpDeviceRoute, postAppidAppIdRecipeTotpDeviceRouteHandler)
  .openapi(putAppidAppIdRecipeTotpDeviceRoute, putAppidAppIdRecipeTotpDeviceRouteHandler)
  .openapi(getAppidAppIdRecipeTotpDeviceListRoute, getAppidAppIdRecipeTotpDeviceListRouteHandler)
  .openapi(postRecipeTotpDeviceImportRoute, postRecipeTotpDeviceImportRouteHandler)
  .openapi(
    postAppidAppIdRecipeTotpDeviceRemoveRoute,
    postAppidAppIdRecipeTotpDeviceRemoveRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeTotpVerifyRoute,
    postAppidAppIdTenantIdRecipeTotpVerifyRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute,
    postAppidAppIdTenantIdRecipeTotpDeviceVerifyRouteHandler,
  )
  .openapi(postAppidAppIdRecipeUseridMapRoute, postAppidAppIdRecipeUseridMapRouteHandler)
  .openapi(getAppidAppIdRecipeUseridMapRoute, getAppidAppIdRecipeUseridMapRouteHandler)
  .openapi(
    postAppidAppIdRecipeUseridMapRemoveRoute,
    postAppidAppIdRecipeUseridMapRemoveRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeUseridExternalUserIdInfoRoute,
    putAppidAppIdRecipeUseridExternalUserIdInfoRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute,
    postAppidAppIdTenantIdRecipeSigninupCodeCheckRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute,
    postAppidAppIdTenantIdRecipeSigninupCodeConsumeRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupCodeRoute,
    postAppidAppIdTenantIdRecipeSigninupCodeRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute,
    postAppidAppIdTenantIdRecipeSigninupCodeRemoveRouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeSigninupCodesRoute,
    getAppidAppIdTenantIdRecipeSigninupCodesRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute,
    postAppidAppIdTenantIdRecipeSigninupCodesRemoveRouteHandler,
  )
  .openapi(getAppidAppIdTenantIdRecipeUserRoute, getAppidAppIdTenantIdRecipeUserRouteHandler)
  .openapi(putAppidAppIdTenantIdRecipeUserRoute, putAppidAppIdTenantIdRecipeUserRouteHandler)
  .openapi(postAppidAppIdTenantIdRecipeSigninRoute, postAppidAppIdTenantIdRecipeSigninRouteHandler)
  .openapi(postAppidAppIdTenantIdRecipeSignupRoute, postAppidAppIdTenantIdRecipeSignupRouteHandler)
  .openapi(getAppidAppIdTenantIdRecipeUser2Route, getAppidAppIdTenantIdRecipeUser2RouteHandler)
  .openapi(putAppidAppIdTenantIdRecipeUser2Route, putAppidAppIdTenantIdRecipeUser2RouteHandler)
  .openapi(
    postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute,
    postAppidAppIdTenantIdRecipeUserPasswordResetTokenRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserPasswordResetRoute,
    postAppidAppIdTenantIdRecipeUserPasswordResetRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute,
    postAppidAppIdTenantIdRecipeUserPasswordhashImportRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute,
    postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeSigninupRoute,
    postAppidAppIdTenantIdRecipeSigninupRouteHandler,
  )
  .openapi(getAppidAppIdTenantIdRecipeUser3Route, getAppidAppIdTenantIdRecipeUser3RouteHandler)
  .openapi(
    getAppidAppIdTenantIdRecipeUsersByEmailRoute,
    getAppidAppIdTenantIdRecipeUsersByEmailRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute,
    postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute,
    postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserEmailVerifyRoute,
    postAppidAppIdTenantIdRecipeUserEmailVerifyRouteHandler,
  )
  .openapi(getAppidAppIdRecipeUserEmailVerifyRoute, getAppidAppIdRecipeUserEmailVerifyRouteHandler)
  .openapi(
    postAppidAppIdRecipeUserEmailVerifyRemoveRoute,
    postAppidAppIdRecipeUserEmailVerifyRemoveRouteHandler,
  )
  .openapi(getAppidAppIdRecipeUserMetadataRoute, getAppidAppIdRecipeUserMetadataRouteHandler)
  .openapi(putAppidAppIdRecipeUserMetadataRoute, putAppidAppIdRecipeUserMetadataRouteHandler)
  .openapi(
    postAppidAppIdRecipeUserMetadataRemoveRoute,
    postAppidAppIdRecipeUserMetadataRemoveRouteHandler,
  )
  .openapi(
    putAppidAppIdTenantIdRecipeUserRoleRoute,
    putAppidAppIdTenantIdRecipeUserRoleRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeUserRoleRemoveRoute,
    postAppidAppIdTenantIdRecipeUserRoleRemoveRouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeUserRolesRoute,
    getAppidAppIdTenantIdRecipeUserRolesRouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeRoleUsersRoute,
    getAppidAppIdTenantIdRecipeRoleUsersRouteHandler,
  )
  .openapi(putAppidAppIdRecipeRoleRoute, putAppidAppIdRecipeRoleRouteHandler)
  .openapi(getAppidAppIdRecipeRolePermissionsRoute, getAppidAppIdRecipeRolePermissionsRouteHandler)
  .openapi(
    postAppidAppIdRecipeRolePermissionsRemoveRoute,
    postAppidAppIdRecipeRolePermissionsRemoveRouteHandler,
  )
  .openapi(getAppidAppIdRecipePermissionRolesRoute, getAppidAppIdRecipePermissionRolesRouteHandler)
  .openapi(postAppidAppIdRecipeRoleRemoveRoute, postAppidAppIdRecipeRoleRemoveRouteHandler)
  .openapi(getAppidAppIdRecipeRolesRoute, getAppidAppIdRecipeRolesRouteHandler)
  .openapi(
    postAppidAppIdTenantIdRecipeSessionRoute,
    postAppidAppIdTenantIdRecipeSessionRouteHandler,
  )
  .openapi(getAppidAppIdRecipeSessionRoute, getAppidAppIdRecipeSessionRouteHandler)
  .openapi(
    postAppidAppIdTenantIdRecipeSessionRemoveRoute,
    postAppidAppIdTenantIdRecipeSessionRemoveRouteHandler,
  )
  .openapi(postAppidAppIdRecipeSessionVerifyRoute, postAppidAppIdRecipeSessionVerifyRouteHandler)
  .openapi(postAppidAppIdRecipeSessionRefreshRoute, postAppidAppIdRecipeSessionRefreshRouteHandler)
  .openapi(
    getAppidAppIdTenantIdRecipeSessionUserRoute,
    getAppidAppIdTenantIdRecipeSessionUserRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeSessionRegenerateRoute,
    postAppidAppIdRecipeSessionRegenerateRouteHandler,
  )
  .openapi(getAppidAppIdRecipeSessionDataRoute, getAppidAppIdRecipeSessionDataRouteHandler)
  .openapi(putAppidAppIdRecipeSessionDataRoute, putAppidAppIdRecipeSessionDataRouteHandler)
  .openapi(postAppidAppIdRecipeJwtRoute, postAppidAppIdRecipeJwtRouteHandler)
  .openapi(getAppidAppIdRecipeJwtJwksRoute, getAppidAppIdRecipeJwtJwksRouteHandler)
  .openapi(getAppidAppIdWellKnownJwksJsonRoute, getAppidAppIdWellKnownJwksJsonRouteHandler)
  .openapi(getAppidAppIdTenantIdRecipeJwtDataRoute, getAppidAppIdTenantIdRecipeJwtDataRouteHandler)
  .openapi(putAppidAppIdTenantIdRecipeJwtDataRoute, putAppidAppIdTenantIdRecipeJwtDataRouteHandler)
  .openapi(postAppidAppIdRecipeDashboardUserRoute, postAppidAppIdRecipeDashboardUserRouteHandler)
  .openapi(putAppidAppIdRecipeDashboardUserRoute, putAppidAppIdRecipeDashboardUserRouteHandler)
  .openapi(
    deleteAppidAppIdRecipeDashboardUserRoute,
    deleteAppidAppIdRecipeDashboardUserRouteHandler,
  )
  .openapi(getAppidAppIdRecipeDashboardUsersRoute, getAppidAppIdRecipeDashboardUsersRouteHandler)
  .openapi(
    postAppidAppIdRecipeDashboardSessionVerifyRoute,
    postAppidAppIdRecipeDashboardSessionVerifyRouteHandler,
  )
  .openapi(
    deleteAppidAppIdRecipeDashboardSessionRoute,
    deleteAppidAppIdRecipeDashboardSessionRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeDashboardSigninRoute,
    postAppidAppIdRecipeDashboardSigninRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeDashboardUserSessionsRoute,
    getAppidAppIdRecipeDashboardUserSessionsRouteHandler,
  )
  .openapi(getAppidAppIdApiversionRoute, getAppidAppIdApiversionRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getAppidAppIdTenantIdIndexRoute, getAppidAppIdTenantIdIndexRouteHandler)
  .openapi(getAppidAppIdTenantIdHelloRoute, getAppidAppIdTenantIdHelloRouteHandler)
  .openapi(putAppidAppIdTenantIdHelloRoute, putAppidAppIdTenantIdHelloRouteHandler)
  .openapi(postAppidAppIdTenantIdHelloRoute, postAppidAppIdTenantIdHelloRouteHandler)
  .openapi(deleteAppidAppIdTenantIdHelloRoute, deleteAppidAppIdTenantIdHelloRouteHandler)
  .openapi(getAppidAppIdTelemetryRoute, getAppidAppIdTelemetryRouteHandler)
  .openapi(getAppidAppIdTenantIdUsersCountRoute, getAppidAppIdTenantIdUsersCountRouteHandler)
  .openapi(getAppidAppIdUsersCountActiveRoute, getAppidAppIdUsersCountActiveRouteHandler)
  .openapi(getAppidAppIdTenantIdUsersRoute, getAppidAppIdTenantIdUsersRouteHandler)
  .openapi(postAppidAppIdUserRemoveRoute, postAppidAppIdUserRemoveRouteHandler)
  .openapi(getAppidAppIdUserSearchTagsRoute, getAppidAppIdUserSearchTagsRouteHandler)
  .openapi(getAppidAppIdEeFeatureflagRoute, getAppidAppIdEeFeatureflagRouteHandler)
  .openapi(putAppidAppIdEeLicenseRoute, putAppidAppIdEeLicenseRouteHandler)
  .openapi(deleteAppidAppIdEeLicenseRoute, deleteAppidAppIdEeLicenseRouteHandler)
  .openapi(getAppidAppIdEeLicenseRoute, getAppidAppIdEeLicenseRouteHandler)
  .openapi(getAppidAppIdUserIdRoute, getAppidAppIdUserIdRouteHandler)
  .openapi(
    getAppidAppIdTenantIdUsersByAccountinfoRoute,
    getAppidAppIdTenantIdUsersByAccountinfoRouteHandler,
  )
  .openapi(getAppidAppIdRequestsStatsRoute, getAppidAppIdRequestsStatsRouteHandler)
  .openapi(
    putRecipeMultitenancyConnectionuridomainRoute,
    putRecipeMultitenancyConnectionuridomainRouteHandler,
  )
  .openapi(
    putRecipeMultitenancyConnectionuridomainV2Route,
    putRecipeMultitenancyConnectionuridomainV2RouteHandler,
  )
  .openapi(
    postRecipeMultitenancyConnectionuridomainRemoveRoute,
    postRecipeMultitenancyConnectionuridomainRemoveRouteHandler,
  )
  .openapi(
    getRecipeMultitenancyConnectionuridomainListRoute,
    getRecipeMultitenancyConnectionuridomainListRouteHandler,
  )
  .openapi(
    getRecipeMultitenancyConnectionuridomainListV2Route,
    getRecipeMultitenancyConnectionuridomainListV2RouteHandler,
  )
  .openapi(putRecipeMultitenancyAppRoute, putRecipeMultitenancyAppRouteHandler)
  .openapi(putRecipeMultitenancyAppV2Route, putRecipeMultitenancyAppV2RouteHandler)
  .openapi(postRecipeMultitenancyAppRemoveRoute, postRecipeMultitenancyAppRemoveRouteHandler)
  .openapi(getRecipeMultitenancyAppListRoute, getRecipeMultitenancyAppListRouteHandler)
  .openapi(getRecipeMultitenancyAppListV2Route, getRecipeMultitenancyAppListV2RouteHandler)
  .openapi(
    putAppidAppIdRecipeMultitenancyTenantRoute,
    putAppidAppIdRecipeMultitenancyTenantRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeMultitenancyTenantV2Route,
    putAppidAppIdRecipeMultitenancyTenantV2RouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeMultitenancyTenantRoute,
    getAppidAppIdTenantIdRecipeMultitenancyTenantRouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route,
    getAppidAppIdTenantIdRecipeMultitenancyTenantV2RouteHandler,
  )
  .openapi(
    getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute,
    getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeMultitenancyTenantRemoveRoute,
    postAppidAppIdRecipeMultitenancyTenantRemoveRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeMultitenancyTenantListRoute,
    getAppidAppIdRecipeMultitenancyTenantListRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeMultitenancyTenantListV2Route,
    getAppidAppIdRecipeMultitenancyTenantListV2RouteHandler,
  )
  .openapi(
    putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute,
    putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute,
    postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute,
    postAppidAppIdTenantIdRecipeMultitenancyTenantUserRouteHandler,
  )
  .openapi(
    postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute,
    postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRouteHandler,
  )
  .openapi(getAppidAppIdRecipeOauthClientsRoute, getAppidAppIdRecipeOauthClientsRouteHandler)
  .openapi(postAppidAppIdRecipeOauthClientsRoute, postAppidAppIdRecipeOauthClientsRouteHandler)
  .openapi(putAppidAppIdRecipeOauthClientsRoute, putAppidAppIdRecipeOauthClientsRouteHandler)
  .openapi(
    getAppidAppIdRecipeOauthClientsListRoute,
    getAppidAppIdRecipeOauthClientsListRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeOauthClientsRemoveRoute,
    postAppidAppIdRecipeOauthClientsRemoveRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeOauthAuthRequestsConsentRoute,
    getAppidAppIdRecipeOauthAuthRequestsConsentRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute,
    putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute,
    putAppidAppIdRecipeOauthAuthRequestsConsentRejectRouteHandler,
  )
  .openapi(
    getAppidAppIdRecipeOauthAuthRequestsLoginRoute,
    getAppidAppIdRecipeOauthAuthRequestsLoginRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute,
    putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute,
    putAppidAppIdRecipeOauthAuthRequestsLoginRejectRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute,
    putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRouteHandler,
  )
  .openapi(
    putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute,
    putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeOauthSessionRevokeRoute,
    postAppidAppIdRecipeOauthSessionRevokeRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeOauthTokenRevokeRoute,
    postAppidAppIdRecipeOauthTokenRevokeRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeOauthTokensRevokeRoute,
    postAppidAppIdRecipeOauthTokensRevokeRouteHandler,
  )
  .openapi(getAppidAppIdRecipeOauthAuthRoute, getAppidAppIdRecipeOauthAuthRouteHandler)
  .openapi(postAppidAppIdRecipeOauthTokenRoute, postAppidAppIdRecipeOauthTokenRouteHandler)
  .openapi(
    getAppidAppIdRecipeOauthSessionsLogoutRoute,
    getAppidAppIdRecipeOauthSessionsLogoutRouteHandler,
  )
  .openapi(
    postAppidAppIdRecipeOauthIntrospectRoute,
    postAppidAppIdRecipeOauthIntrospectRouteHandler,
  )

export default app
