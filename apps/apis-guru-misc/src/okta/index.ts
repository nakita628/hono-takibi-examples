import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1UsersUserIdSessionsRoute,
  getApiV1UsersMeRoute,
  getApiV1UsersRoute,
  getApiV1UsersUserIdAppLinksRoute,
  getApiV1UsersUserIdGroupsRoute,
  getApiV1UsersUserIdRoute,
  postApiV1UsersRoute,
  postApiV1UsersUserIdCredentialsChangePasswordRoute,
  postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute,
  postApiV1UsersUserIdCredentialsForgotPasswordRoute,
  postApiV1UsersUserIdLifecycleActivateRoute,
  postApiV1UsersUserIdLifecycleDeactivateRoute,
  postApiV1UsersUserIdLifecycleExpirePasswordRoute,
  postApiV1UsersUserIdLifecycleResetFactorsRoute,
  postApiV1UsersUserIdLifecycleResetPasswordRoute,
  postApiV1UsersUserIdLifecycleSuspendRoute,
  postApiV1UsersUserIdLifecycleUnlockRoute,
  postApiV1UsersUserIdLifecycleUnsuspendRoute,
  putApiV1UsersUserIdRoute,
} from './routes'
import {
  deleteApiV1UsersUserIdSessionsRouteHandler,
  getApiV1UsersMeRouteHandler,
  getApiV1UsersRouteHandler,
  getApiV1UsersUserIdAppLinksRouteHandler,
  getApiV1UsersUserIdGroupsRouteHandler,
  getApiV1UsersUserIdRouteHandler,
  postApiV1UsersRouteHandler,
  postApiV1UsersUserIdCredentialsChangePasswordRouteHandler,
  postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRouteHandler,
  postApiV1UsersUserIdCredentialsForgotPasswordRouteHandler,
  postApiV1UsersUserIdLifecycleActivateRouteHandler,
  postApiV1UsersUserIdLifecycleDeactivateRouteHandler,
  postApiV1UsersUserIdLifecycleExpirePasswordRouteHandler,
  postApiV1UsersUserIdLifecycleResetFactorsRouteHandler,
  postApiV1UsersUserIdLifecycleResetPasswordRouteHandler,
  postApiV1UsersUserIdLifecycleSuspendRouteHandler,
  postApiV1UsersUserIdLifecycleUnlockRouteHandler,
  postApiV1UsersUserIdLifecycleUnsuspendRouteHandler,
  putApiV1UsersUserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1UsersRoute, getApiV1UsersRouteHandler)
  .openapi(postApiV1UsersRoute, postApiV1UsersRouteHandler)
  .openapi(getApiV1UsersMeRoute, getApiV1UsersMeRouteHandler)
  .openapi(getApiV1UsersUserIdRoute, getApiV1UsersUserIdRouteHandler)
  .openapi(putApiV1UsersUserIdRoute, putApiV1UsersUserIdRouteHandler)
  .openapi(getApiV1UsersUserIdAppLinksRoute, getApiV1UsersUserIdAppLinksRouteHandler)
  .openapi(
    postApiV1UsersUserIdCredentialsChangePasswordRoute,
    postApiV1UsersUserIdCredentialsChangePasswordRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRoute,
    postApiV1UsersUserIdCredentialsChangeRecoveryQuestionRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdCredentialsForgotPasswordRoute,
    postApiV1UsersUserIdCredentialsForgotPasswordRouteHandler,
  )
  .openapi(getApiV1UsersUserIdGroupsRoute, getApiV1UsersUserIdGroupsRouteHandler)
  .openapi(
    postApiV1UsersUserIdLifecycleActivateRoute,
    postApiV1UsersUserIdLifecycleActivateRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleDeactivateRoute,
    postApiV1UsersUserIdLifecycleDeactivateRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleExpirePasswordRoute,
    postApiV1UsersUserIdLifecycleExpirePasswordRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleResetFactorsRoute,
    postApiV1UsersUserIdLifecycleResetFactorsRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleResetPasswordRoute,
    postApiV1UsersUserIdLifecycleResetPasswordRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleSuspendRoute,
    postApiV1UsersUserIdLifecycleSuspendRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleUnlockRoute,
    postApiV1UsersUserIdLifecycleUnlockRouteHandler,
  )
  .openapi(
    postApiV1UsersUserIdLifecycleUnsuspendRoute,
    postApiV1UsersUserIdLifecycleUnsuspendRouteHandler,
  )
  .openapi(deleteApiV1UsersUserIdSessionsRoute, deleteApiV1UsersUserIdSessionsRouteHandler)

export default app
