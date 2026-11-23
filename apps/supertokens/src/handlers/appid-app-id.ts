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

const app = new OpenAPIHono()

export const appidAppIdHandler = app
  .openapi(getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserPrimaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeAccountlinkingUserUnlinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeTotpDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeTotpDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeTotpDeviceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeTotpDeviceRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeTotpVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUseridMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeUseridMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUseridMapRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeUseridExternalUserIdInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeSigninupCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUser2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeUser2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSigninupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUser3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUsersByEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeUserEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUserEmailVerifyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeUserMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeUserMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeUserMetadataRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeUserRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeUserRoleRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeUserRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeRoleUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeRolePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeRolePermissionsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipePermissionRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeRoleRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeSessionRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeSessionUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeSessionRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeSessionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeSessionDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeJwtJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdWellKnownJwksJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeJwtDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeJwtDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdRecipeDashboardUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeDashboardUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeDashboardSessionVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdRecipeDashboardSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeDashboardSigninRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeDashboardUserSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdApiversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdTenantIdHelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTelemetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUsersCountActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUserSearchTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdEeFeatureflagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdEeLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdUsersByAccountinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRequestsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeMultitenancyTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeMultitenancyTenantV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeMultitenancyTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeMultitenancyTenantRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeMultitenancyTenantListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeMultitenancyTenantListV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthClientsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthClientsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRequestsConsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRequestsLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthSessionRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokenRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokensRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeOauthSessionsLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeOauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
