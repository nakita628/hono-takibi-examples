import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCustomProvidersIdentifierRoute,
  deleteAdminOauthClientsClientIdRoute,
  deleteAdminSsoProvidersSsoProviderIdRoute,
  deleteAdminUsersUserIdFactorsFactorIdRoute,
  deleteAdminUsersUserIdRoute,
  deleteFactorsFactorIdRoute,
  deleteFactorsRecoveryCodesRoute,
  deleteUserIdentitiesIdentityIdRoute,
  deleteUserOauthGrantsRoute,
  getAdminAuditRoute,
  getAdminCustomProvidersIdentifierRoute,
  getAdminCustomProvidersRoute,
  getAdminOauthClientsClientIdRoute,
  getAdminOauthClientsRoute,
  getAdminSsoProvidersRoute,
  getAdminSsoProvidersSsoProviderIdRoute,
  getAdminUsersRoute,
  getAdminUsersUserIdFactorsRoute,
  getAdminUsersUserIdRoute,
  getAuthorizeRoute,
  getCallbackRoute,
  getFactorsRecoveryCodesRoute,
  getHealthRoute,
  getOauthAuthorizationsAuthorizationIdRoute,
  getOauthAuthorizeRoute,
  getSamlMetadataRoute,
  getSettingsRoute,
  getUserIdentitiesAuthorizeRoute,
  getUserOauthGrantsRoute,
  getUserRoute,
  getVerifyRoute,
  postAdminCustomProvidersRoute,
  postAdminGenerateLinkRoute,
  postAdminOauthClientsClientIdRegenerateSecretRoute,
  postAdminOauthClientsRoute,
  postAdminSsoProvidersRoute,
  postCallbackRoute,
  postFactorsFactorIdChallengeRoute,
  postFactorsFactorIdVerifyRoute,
  postFactorsRecoveryCodesRegenerateRoute,
  postFactorsRecoveryCodesRoute,
  postFactorsRecoveryCodesVerifyRoute,
  postFactorsRoute,
  postInviteRoute,
  postLogoutRoute,
  postMagiclinkRoute,
  postOauthAuthorizationsAuthorizationIdConsentRoute,
  postOauthClientsRegisterRoute,
  postOauthTokenRoute,
  postOtpRoute,
  postReauthenticateRoute,
  postRecoverRoute,
  postResendRoute,
  postSamlAcsRoute,
  postSignupRoute,
  postSsoRoute,
  postTokenRoute,
  postVerifyRoute,
  putAdminCustomProvidersIdentifierRoute,
  putAdminOauthClientsClientIdRoute,
  putAdminSsoProvidersSsoProviderIdRoute,
  putAdminUsersUserIdFactorsFactorIdRoute,
  putAdminUsersUserIdRoute,
  putUserRoute,
} from './routes'
import {
  deleteAdminCustomProvidersIdentifierRouteHandler,
  deleteAdminOauthClientsClientIdRouteHandler,
  deleteAdminSsoProvidersSsoProviderIdRouteHandler,
  deleteAdminUsersUserIdFactorsFactorIdRouteHandler,
  deleteAdminUsersUserIdRouteHandler,
  deleteFactorsFactorIdRouteHandler,
  deleteFactorsRecoveryCodesRouteHandler,
  deleteUserIdentitiesIdentityIdRouteHandler,
  deleteUserOauthGrantsRouteHandler,
  getAdminAuditRouteHandler,
  getAdminCustomProvidersIdentifierRouteHandler,
  getAdminCustomProvidersRouteHandler,
  getAdminOauthClientsClientIdRouteHandler,
  getAdminOauthClientsRouteHandler,
  getAdminSsoProvidersRouteHandler,
  getAdminSsoProvidersSsoProviderIdRouteHandler,
  getAdminUsersRouteHandler,
  getAdminUsersUserIdFactorsRouteHandler,
  getAdminUsersUserIdRouteHandler,
  getAuthorizeRouteHandler,
  getCallbackRouteHandler,
  getFactorsRecoveryCodesRouteHandler,
  getHealthRouteHandler,
  getOauthAuthorizationsAuthorizationIdRouteHandler,
  getOauthAuthorizeRouteHandler,
  getSamlMetadataRouteHandler,
  getSettingsRouteHandler,
  getUserIdentitiesAuthorizeRouteHandler,
  getUserOauthGrantsRouteHandler,
  getUserRouteHandler,
  getVerifyRouteHandler,
  postAdminCustomProvidersRouteHandler,
  postAdminGenerateLinkRouteHandler,
  postAdminOauthClientsClientIdRegenerateSecretRouteHandler,
  postAdminOauthClientsRouteHandler,
  postAdminSsoProvidersRouteHandler,
  postCallbackRouteHandler,
  postFactorsFactorIdChallengeRouteHandler,
  postFactorsFactorIdVerifyRouteHandler,
  postFactorsRecoveryCodesRegenerateRouteHandler,
  postFactorsRecoveryCodesRouteHandler,
  postFactorsRecoveryCodesVerifyRouteHandler,
  postFactorsRouteHandler,
  postInviteRouteHandler,
  postLogoutRouteHandler,
  postMagiclinkRouteHandler,
  postOauthAuthorizationsAuthorizationIdConsentRouteHandler,
  postOauthClientsRegisterRouteHandler,
  postOauthTokenRouteHandler,
  postOtpRouteHandler,
  postReauthenticateRouteHandler,
  postRecoverRouteHandler,
  postResendRouteHandler,
  postSamlAcsRouteHandler,
  postSignupRouteHandler,
  postSsoRouteHandler,
  postTokenRouteHandler,
  postVerifyRouteHandler,
  putAdminCustomProvidersIdentifierRouteHandler,
  putAdminOauthClientsClientIdRouteHandler,
  putAdminSsoProvidersSsoProviderIdRouteHandler,
  putAdminUsersUserIdFactorsFactorIdRouteHandler,
  putAdminUsersUserIdRouteHandler,
  putUserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(postLogoutRoute, postLogoutRouteHandler)
  .openapi(getVerifyRoute, getVerifyRouteHandler)
  .openapi(postVerifyRoute, postVerifyRouteHandler)
  .openapi(getAuthorizeRoute, getAuthorizeRouteHandler)
  .openapi(postSignupRoute, postSignupRouteHandler)
  .openapi(postRecoverRoute, postRecoverRouteHandler)
  .openapi(postResendRoute, postResendRouteHandler)
  .openapi(postMagiclinkRoute, postMagiclinkRouteHandler)
  .openapi(postOtpRoute, postOtpRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(getUserIdentitiesAuthorizeRoute, getUserIdentitiesAuthorizeRouteHandler)
  .openapi(deleteUserIdentitiesIdentityIdRoute, deleteUserIdentitiesIdentityIdRouteHandler)
  .openapi(getUserOauthGrantsRoute, getUserOauthGrantsRouteHandler)
  .openapi(deleteUserOauthGrantsRoute, deleteUserOauthGrantsRouteHandler)
  .openapi(postReauthenticateRoute, postReauthenticateRouteHandler)
  .openapi(postFactorsRoute, postFactorsRouteHandler)
  .openapi(postFactorsFactorIdChallengeRoute, postFactorsFactorIdChallengeRouteHandler)
  .openapi(postFactorsFactorIdVerifyRoute, postFactorsFactorIdVerifyRouteHandler)
  .openapi(deleteFactorsFactorIdRoute, deleteFactorsFactorIdRouteHandler)
  .openapi(getFactorsRecoveryCodesRoute, getFactorsRecoveryCodesRouteHandler)
  .openapi(postFactorsRecoveryCodesRoute, postFactorsRecoveryCodesRouteHandler)
  .openapi(deleteFactorsRecoveryCodesRoute, deleteFactorsRecoveryCodesRouteHandler)
  .openapi(postFactorsRecoveryCodesVerifyRoute, postFactorsRecoveryCodesVerifyRouteHandler)
  .openapi(postFactorsRecoveryCodesRegenerateRoute, postFactorsRecoveryCodesRegenerateRouteHandler)
  .openapi(getCallbackRoute, getCallbackRouteHandler)
  .openapi(postCallbackRoute, postCallbackRouteHandler)
  .openapi(postSsoRoute, postSsoRouteHandler)
  .openapi(getSamlMetadataRoute, getSamlMetadataRouteHandler)
  .openapi(postSamlAcsRoute, postSamlAcsRouteHandler)
  .openapi(postInviteRoute, postInviteRouteHandler)
  .openapi(postAdminGenerateLinkRoute, postAdminGenerateLinkRouteHandler)
  .openapi(getAdminAuditRoute, getAdminAuditRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(getAdminUsersUserIdRoute, getAdminUsersUserIdRouteHandler)
  .openapi(putAdminUsersUserIdRoute, putAdminUsersUserIdRouteHandler)
  .openapi(deleteAdminUsersUserIdRoute, deleteAdminUsersUserIdRouteHandler)
  .openapi(getAdminUsersUserIdFactorsRoute, getAdminUsersUserIdFactorsRouteHandler)
  .openapi(putAdminUsersUserIdFactorsFactorIdRoute, putAdminUsersUserIdFactorsFactorIdRouteHandler)
  .openapi(
    deleteAdminUsersUserIdFactorsFactorIdRoute,
    deleteAdminUsersUserIdFactorsFactorIdRouteHandler,
  )
  .openapi(getAdminSsoProvidersRoute, getAdminSsoProvidersRouteHandler)
  .openapi(postAdminSsoProvidersRoute, postAdminSsoProvidersRouteHandler)
  .openapi(getAdminSsoProvidersSsoProviderIdRoute, getAdminSsoProvidersSsoProviderIdRouteHandler)
  .openapi(putAdminSsoProvidersSsoProviderIdRoute, putAdminSsoProvidersSsoProviderIdRouteHandler)
  .openapi(
    deleteAdminSsoProvidersSsoProviderIdRoute,
    deleteAdminSsoProvidersSsoProviderIdRouteHandler,
  )
  .openapi(getAdminOauthClientsRoute, getAdminOauthClientsRouteHandler)
  .openapi(postAdminOauthClientsRoute, postAdminOauthClientsRouteHandler)
  .openapi(getAdminOauthClientsClientIdRoute, getAdminOauthClientsClientIdRouteHandler)
  .openapi(putAdminOauthClientsClientIdRoute, putAdminOauthClientsClientIdRouteHandler)
  .openapi(deleteAdminOauthClientsClientIdRoute, deleteAdminOauthClientsClientIdRouteHandler)
  .openapi(
    postAdminOauthClientsClientIdRegenerateSecretRoute,
    postAdminOauthClientsClientIdRegenerateSecretRouteHandler,
  )
  .openapi(getAdminCustomProvidersRoute, getAdminCustomProvidersRouteHandler)
  .openapi(postAdminCustomProvidersRoute, postAdminCustomProvidersRouteHandler)
  .openapi(getAdminCustomProvidersIdentifierRoute, getAdminCustomProvidersIdentifierRouteHandler)
  .openapi(putAdminCustomProvidersIdentifierRoute, putAdminCustomProvidersIdentifierRouteHandler)
  .openapi(
    deleteAdminCustomProvidersIdentifierRoute,
    deleteAdminCustomProvidersIdentifierRouteHandler,
  )
  .openapi(postOauthClientsRegisterRoute, postOauthClientsRegisterRouteHandler)
  .openapi(postOauthTokenRoute, postOauthTokenRouteHandler)
  .openapi(getOauthAuthorizeRoute, getOauthAuthorizeRouteHandler)
  .openapi(
    getOauthAuthorizationsAuthorizationIdRoute,
    getOauthAuthorizationsAuthorizationIdRouteHandler,
  )
  .openapi(
    postOauthAuthorizationsAuthorizationIdConsentRoute,
    postOauthAuthorizationsAuthorizationIdConsentRouteHandler,
  )
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)

export default app
