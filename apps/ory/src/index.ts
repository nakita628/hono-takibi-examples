import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminIdentitiesIdCredentialsTypeRoute,
  deleteAdminIdentitiesIdRoute,
  deleteAdminIdentitiesIdSessionsRoute,
  deleteAdminSessionsIdRoute,
  deleteSelfServiceLoginTestRoute,
  deleteSelfServiceLogoutApiRoute,
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  getAdminCourierMessagesIdRoute,
  getAdminCourierMessagesRoute,
  getAdminIdentitiesByExternalExternalIDRoute,
  getAdminIdentitiesIdRoute,
  getAdminIdentitiesIdSessionsRoute,
  getAdminIdentitiesRoute,
  getAdminSessionsIdRoute,
  getAdminSessionsRoute,
  getHealthAliveRoute,
  getHealthReadyRoute,
  getSchemasIdRoute,
  getSchemasRoute,
  getSelfServiceErrorsRoute,
  getSelfServiceFedCmParametersRoute,
  getSelfServiceLoginApiRoute,
  getSelfServiceLoginBrowserRoute,
  getSelfServiceLoginFlowsRoute,
  getSelfServiceLogoutBrowserRoute,
  getSelfServiceLogoutRoute,
  getSelfServiceRecoveryApiRoute,
  getSelfServiceRecoveryBrowserRoute,
  getSelfServiceRecoveryFlowsRoute,
  getSelfServiceRegistrationApiRoute,
  getSelfServiceRegistrationBrowserRoute,
  getSelfServiceRegistrationFlowsRoute,
  getSelfServiceSettingsApiRoute,
  getSelfServiceSettingsBrowserRoute,
  getSelfServiceSettingsFlowsRoute,
  getSelfServiceVerificationApiRoute,
  getSelfServiceVerificationBrowserRoute,
  getSelfServiceVerificationFlowsRoute,
  getSessionsRoute,
  getSessionsTokenExchangeRoute,
  getSessionsWhoamiRoute,
  getVersionRoute,
  getWellKnownChangePasswordRoute,
  getWellKnownOryWebauthnJsRoute,
  patchAdminIdentitiesIdRoute,
  patchAdminIdentitiesRoute,
  patchAdminSessionsIdExtendRoute,
  postAdminIdentitiesRoute,
  postAdminRecoveryCodeRoute,
  postAdminRecoveryLinkRoute,
  postAdminSessionsRoute,
  postAdminTestLoginFlowsRoute,
  postSelfServiceFedCmTokenRoute,
  postSelfServiceLoginRoute,
  postSelfServiceRecoveryRoute,
  postSelfServiceRegistrationRoute,
  postSelfServiceSettingsRoute,
  postSelfServiceVerificationRoute,
  putAdminIdentitiesIdRoute,
} from './routes'
import {
  deleteAdminIdentitiesIdCredentialsTypeRouteHandler,
  deleteAdminIdentitiesIdRouteHandler,
  deleteAdminIdentitiesIdSessionsRouteHandler,
  deleteAdminSessionsIdRouteHandler,
  deleteSelfServiceLoginTestRouteHandler,
  deleteSelfServiceLogoutApiRouteHandler,
  deleteSessionsIdRouteHandler,
  deleteSessionsRouteHandler,
  getAdminCourierMessagesIdRouteHandler,
  getAdminCourierMessagesRouteHandler,
  getAdminIdentitiesByExternalExternalIDRouteHandler,
  getAdminIdentitiesIdRouteHandler,
  getAdminIdentitiesIdSessionsRouteHandler,
  getAdminIdentitiesRouteHandler,
  getAdminSessionsIdRouteHandler,
  getAdminSessionsRouteHandler,
  getHealthAliveRouteHandler,
  getHealthReadyRouteHandler,
  getSchemasIdRouteHandler,
  getSchemasRouteHandler,
  getSelfServiceErrorsRouteHandler,
  getSelfServiceFedCmParametersRouteHandler,
  getSelfServiceLoginApiRouteHandler,
  getSelfServiceLoginBrowserRouteHandler,
  getSelfServiceLoginFlowsRouteHandler,
  getSelfServiceLogoutBrowserRouteHandler,
  getSelfServiceLogoutRouteHandler,
  getSelfServiceRecoveryApiRouteHandler,
  getSelfServiceRecoveryBrowserRouteHandler,
  getSelfServiceRecoveryFlowsRouteHandler,
  getSelfServiceRegistrationApiRouteHandler,
  getSelfServiceRegistrationBrowserRouteHandler,
  getSelfServiceRegistrationFlowsRouteHandler,
  getSelfServiceSettingsApiRouteHandler,
  getSelfServiceSettingsBrowserRouteHandler,
  getSelfServiceSettingsFlowsRouteHandler,
  getSelfServiceVerificationApiRouteHandler,
  getSelfServiceVerificationBrowserRouteHandler,
  getSelfServiceVerificationFlowsRouteHandler,
  getSessionsRouteHandler,
  getSessionsTokenExchangeRouteHandler,
  getSessionsWhoamiRouteHandler,
  getVersionRouteHandler,
  getWellKnownChangePasswordRouteHandler,
  getWellKnownOryWebauthnJsRouteHandler,
  patchAdminIdentitiesIdRouteHandler,
  patchAdminIdentitiesRouteHandler,
  patchAdminSessionsIdExtendRouteHandler,
  postAdminIdentitiesRouteHandler,
  postAdminRecoveryCodeRouteHandler,
  postAdminRecoveryLinkRouteHandler,
  postAdminSessionsRouteHandler,
  postAdminTestLoginFlowsRouteHandler,
  postSelfServiceFedCmTokenRouteHandler,
  postSelfServiceLoginRouteHandler,
  postSelfServiceRecoveryRouteHandler,
  postSelfServiceRegistrationRouteHandler,
  postSelfServiceSettingsRouteHandler,
  postSelfServiceVerificationRouteHandler,
  putAdminIdentitiesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWellKnownChangePasswordRoute, getWellKnownChangePasswordRouteHandler)
  .openapi(getWellKnownOryWebauthnJsRoute, getWellKnownOryWebauthnJsRouteHandler)
  .openapi(getAdminCourierMessagesRoute, getAdminCourierMessagesRouteHandler)
  .openapi(getAdminCourierMessagesIdRoute, getAdminCourierMessagesIdRouteHandler)
  .openapi(getAdminIdentitiesRoute, getAdminIdentitiesRouteHandler)
  .openapi(patchAdminIdentitiesRoute, patchAdminIdentitiesRouteHandler)
  .openapi(postAdminIdentitiesRoute, postAdminIdentitiesRouteHandler)
  .openapi(
    getAdminIdentitiesByExternalExternalIDRoute,
    getAdminIdentitiesByExternalExternalIDRouteHandler,
  )
  .openapi(deleteAdminIdentitiesIdRoute, deleteAdminIdentitiesIdRouteHandler)
  .openapi(getAdminIdentitiesIdRoute, getAdminIdentitiesIdRouteHandler)
  .openapi(patchAdminIdentitiesIdRoute, patchAdminIdentitiesIdRouteHandler)
  .openapi(putAdminIdentitiesIdRoute, putAdminIdentitiesIdRouteHandler)
  .openapi(
    deleteAdminIdentitiesIdCredentialsTypeRoute,
    deleteAdminIdentitiesIdCredentialsTypeRouteHandler,
  )
  .openapi(deleteAdminIdentitiesIdSessionsRoute, deleteAdminIdentitiesIdSessionsRouteHandler)
  .openapi(getAdminIdentitiesIdSessionsRoute, getAdminIdentitiesIdSessionsRouteHandler)
  .openapi(postAdminRecoveryCodeRoute, postAdminRecoveryCodeRouteHandler)
  .openapi(postAdminRecoveryLinkRoute, postAdminRecoveryLinkRouteHandler)
  .openapi(getAdminSessionsRoute, getAdminSessionsRouteHandler)
  .openapi(postAdminSessionsRoute, postAdminSessionsRouteHandler)
  .openapi(deleteAdminSessionsIdRoute, deleteAdminSessionsIdRouteHandler)
  .openapi(getAdminSessionsIdRoute, getAdminSessionsIdRouteHandler)
  .openapi(patchAdminSessionsIdExtendRoute, patchAdminSessionsIdExtendRouteHandler)
  .openapi(postAdminTestLoginFlowsRoute, postAdminTestLoginFlowsRouteHandler)
  .openapi(getHealthAliveRoute, getHealthAliveRouteHandler)
  .openapi(getHealthReadyRoute, getHealthReadyRouteHandler)
  .openapi(getSchemasRoute, getSchemasRouteHandler)
  .openapi(getSchemasIdRoute, getSchemasIdRouteHandler)
  .openapi(getSelfServiceErrorsRoute, getSelfServiceErrorsRouteHandler)
  .openapi(getSelfServiceFedCmParametersRoute, getSelfServiceFedCmParametersRouteHandler)
  .openapi(postSelfServiceFedCmTokenRoute, postSelfServiceFedCmTokenRouteHandler)
  .openapi(postSelfServiceLoginRoute, postSelfServiceLoginRouteHandler)
  .openapi(getSelfServiceLoginApiRoute, getSelfServiceLoginApiRouteHandler)
  .openapi(getSelfServiceLoginBrowserRoute, getSelfServiceLoginBrowserRouteHandler)
  .openapi(getSelfServiceLoginFlowsRoute, getSelfServiceLoginFlowsRouteHandler)
  .openapi(deleteSelfServiceLoginTestRoute, deleteSelfServiceLoginTestRouteHandler)
  .openapi(getSelfServiceLogoutRoute, getSelfServiceLogoutRouteHandler)
  .openapi(deleteSelfServiceLogoutApiRoute, deleteSelfServiceLogoutApiRouteHandler)
  .openapi(getSelfServiceLogoutBrowserRoute, getSelfServiceLogoutBrowserRouteHandler)
  .openapi(postSelfServiceRecoveryRoute, postSelfServiceRecoveryRouteHandler)
  .openapi(getSelfServiceRecoveryApiRoute, getSelfServiceRecoveryApiRouteHandler)
  .openapi(getSelfServiceRecoveryBrowserRoute, getSelfServiceRecoveryBrowserRouteHandler)
  .openapi(getSelfServiceRecoveryFlowsRoute, getSelfServiceRecoveryFlowsRouteHandler)
  .openapi(postSelfServiceRegistrationRoute, postSelfServiceRegistrationRouteHandler)
  .openapi(getSelfServiceRegistrationApiRoute, getSelfServiceRegistrationApiRouteHandler)
  .openapi(getSelfServiceRegistrationBrowserRoute, getSelfServiceRegistrationBrowserRouteHandler)
  .openapi(getSelfServiceRegistrationFlowsRoute, getSelfServiceRegistrationFlowsRouteHandler)
  .openapi(postSelfServiceSettingsRoute, postSelfServiceSettingsRouteHandler)
  .openapi(getSelfServiceSettingsApiRoute, getSelfServiceSettingsApiRouteHandler)
  .openapi(getSelfServiceSettingsBrowserRoute, getSelfServiceSettingsBrowserRouteHandler)
  .openapi(getSelfServiceSettingsFlowsRoute, getSelfServiceSettingsFlowsRouteHandler)
  .openapi(postSelfServiceVerificationRoute, postSelfServiceVerificationRouteHandler)
  .openapi(getSelfServiceVerificationApiRoute, getSelfServiceVerificationApiRouteHandler)
  .openapi(getSelfServiceVerificationBrowserRoute, getSelfServiceVerificationBrowserRouteHandler)
  .openapi(getSelfServiceVerificationFlowsRoute, getSelfServiceVerificationFlowsRouteHandler)
  .openapi(deleteSessionsRoute, deleteSessionsRouteHandler)
  .openapi(getSessionsRoute, getSessionsRouteHandler)
  .openapi(getSessionsTokenExchangeRoute, getSessionsTokenExchangeRouteHandler)
  .openapi(getSessionsWhoamiRoute, getSessionsWhoamiRouteHandler)
  .openapi(deleteSessionsIdRoute, deleteSessionsIdRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)

export default app
