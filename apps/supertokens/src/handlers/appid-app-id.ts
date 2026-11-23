import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeAccountlinkingUserLinkCheckRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeAccountlinkingUserPrimaryRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeAccountlinkingUserPrimaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeAccountlinkingUserLinkRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeAccountlinkingUserLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeAccountlinkingUserUnlinkRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeAccountlinkingUserUnlinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeTotpDeviceRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeTotpDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeTotpDeviceRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeTotpDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeTotpDeviceListRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeTotpDeviceListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeTotpDeviceRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeTotpDeviceRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeTotpVerifyRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeTotpVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeTotpDeviceVerifyRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeUseridMapRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeUseridMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeUseridMapRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeUseridMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeUseridMapRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeUseridMapRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeUseridExternalUserIdInfoRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeUseridExternalUserIdInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupCodeCheckRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupCodeConsumeRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupCodeRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupCodeRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeSigninupCodesRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeSigninupCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupCodesRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeUserRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdRecipeUserRouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdRecipeUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSignupRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSignupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeUser2RouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeUser2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdRecipeUser2RouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdRecipeUser2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserPasswordResetTokenRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserPasswordResetRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserPasswordhashImportRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSigninupRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSigninupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeUser3RouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeUser3Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeUsersByEmailRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeUsersByEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserEmailVerifyRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserEmailVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeUserEmailVerifyRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeUserEmailVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeUserEmailVerifyRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeUserEmailVerifyRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeUserMetadataRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeUserMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeUserMetadataRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeUserMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeUserMetadataRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeUserMetadataRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdRecipeUserRoleRouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdRecipeUserRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeUserRoleRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeUserRoleRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeUserRolesRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeUserRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeRoleUsersRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeRoleUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeRoleRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeRolePermissionsRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeRolePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeRolePermissionsRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeRolePermissionsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipePermissionRolesRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipePermissionRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeRoleRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeRoleRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeRolesRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSessionRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeSessionRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeSessionRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeSessionRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeSessionVerifyRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeSessionVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeSessionRefreshRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeSessionRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeSessionUserRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeSessionUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeSessionRegenerateRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeSessionRegenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeSessionDataRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeSessionDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeSessionDataRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeSessionDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeJwtRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeJwtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeJwtJwksRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeJwtJwksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdWellKnownJwksJsonRouteHandler: RouteHandler<
  typeof getAppidAppIdWellKnownJwksJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeJwtDataRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeJwtDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdRecipeJwtDataRouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdRecipeJwtDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeDashboardUserRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeDashboardUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeDashboardUserRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeDashboardUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppidAppIdRecipeDashboardUserRouteHandler: RouteHandler<
  typeof deleteAppidAppIdRecipeDashboardUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeDashboardUsersRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeDashboardUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeDashboardSessionVerifyRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeDashboardSessionVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppidAppIdRecipeDashboardSessionRouteHandler: RouteHandler<
  typeof deleteAppidAppIdRecipeDashboardSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeDashboardSigninRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeDashboardSigninRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeDashboardUserSessionsRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeDashboardUserSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdApiversionRouteHandler: RouteHandler<
  typeof getAppidAppIdApiversionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdIndexRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdHelloRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdHelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdHelloRouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdHelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdHelloRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdHelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppidAppIdTenantIdHelloRouteHandler: RouteHandler<
  typeof deleteAppidAppIdTenantIdHelloRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTelemetryRouteHandler: RouteHandler<
  typeof getAppidAppIdTelemetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdUsersCountRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdUsersCountActiveRouteHandler: RouteHandler<
  typeof getAppidAppIdUsersCountActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdUsersRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdUserRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdUserRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdUserSearchTagsRouteHandler: RouteHandler<
  typeof getAppidAppIdUserSearchTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdEeFeatureflagRouteHandler: RouteHandler<
  typeof getAppidAppIdEeFeatureflagRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdEeLicenseRouteHandler: RouteHandler<
  typeof putAppidAppIdEeLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAppidAppIdEeLicenseRouteHandler: RouteHandler<
  typeof deleteAppidAppIdEeLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdEeLicenseRouteHandler: RouteHandler<
  typeof getAppidAppIdEeLicenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdUserIdRouteHandler: RouteHandler<
  typeof getAppidAppIdUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdUsersByAccountinfoRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdUsersByAccountinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRequestsStatsRouteHandler: RouteHandler<
  typeof getAppidAppIdRequestsStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeMultitenancyTenantRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeMultitenancyTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeMultitenancyTenantV2RouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeMultitenancyTenantV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeMultitenancyTenantRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeMultitenancyTenantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeMultitenancyTenantV2RouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRouteHandler: RouteHandler<
  typeof getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeMultitenancyTenantRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeMultitenancyTenantRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeMultitenancyTenantListRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeMultitenancyTenantListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeMultitenancyTenantListV2RouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeMultitenancyTenantListV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRouteHandler: RouteHandler<
  typeof putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeMultitenancyTenantUserRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthClientsRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthClientsRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthClientsRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthClientsListRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthClientsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthClientsRemoveRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthClientsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthAuthRequestsConsentRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthAuthRequestsConsentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsConsentRejectRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthAuthRequestsLoginRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthAuthRequestsLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsLoginRejectRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRouteHandler: RouteHandler<
  typeof putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthSessionRevokeRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthSessionRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthTokenRevokeRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthTokenRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthTokensRevokeRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthTokensRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthAuthRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthTokenRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppidAppIdRecipeOauthSessionsLogoutRouteHandler: RouteHandler<
  typeof getAppidAppIdRecipeOauthSessionsLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAppidAppIdRecipeOauthIntrospectRouteHandler: RouteHandler<
  typeof postAppidAppIdRecipeOauthIntrospectRoute
> = async (c) => {
  throw new Error('Not implemented')
}
