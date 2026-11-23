import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdEndpointEndpointIdRoute,
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRoute,
  deleteApiV1AppAppIdMsgMsgIdContentRoute,
  deleteApiV1AppAppIdRoute,
  deleteApiV1EventTypeEventTypeNameRoute,
  getApiV1AppAppIdAttemptEndpointEndpointIdRoute,
  getApiV1AppAppIdAttemptMsgMsgIdRoute,
  getApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  getApiV1AppAppIdEndpointEndpointIdMsgRoute,
  getApiV1AppAppIdEndpointEndpointIdRoute,
  getApiV1AppAppIdEndpointEndpointIdSecretRoute,
  getApiV1AppAppIdEndpointEndpointIdStatsRoute,
  getApiV1AppAppIdEndpointRoute,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRoute,
  getApiV1AppAppIdMsgMsgIdEndpointRoute,
  getApiV1AppAppIdMsgMsgIdRoute,
  getApiV1AppAppIdMsgRoute,
  getApiV1AppAppIdRoute,
  getApiV1AppRoute,
  getApiV1EventTypeEventTypeNameRoute,
  getApiV1EventTypeRoute,
  getApiV1HealthPingRoute,
  getApiV1HealthRoute,
  headApiV1HealthPingRoute,
  headApiV1HealthRoute,
  patchApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  patchApiV1AppAppIdEndpointEndpointIdRoute,
  patchApiV1AppAppIdRoute,
  patchApiV1EventTypeEventTypeNameRoute,
  postApiV1AppAppIdEndpointEndpointIdRecoverRoute,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute,
  postApiV1AppAppIdEndpointEndpointIdSendExampleRoute,
  postApiV1AppAppIdEndpointRoute,
  postApiV1AppAppIdMsgBulkExpungeRoute,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRoute,
  postApiV1AppAppIdMsgRoute,
  postApiV1AppRoute,
  postApiV1AuthAppPortalAccessAppIdRoute,
  postApiV1AuthLogoutRoute,
  postApiV1EventTypeRoute,
  putApiV1AppAppIdEndpointEndpointIdHeadersRoute,
  putApiV1AppAppIdEndpointEndpointIdRoute,
  putApiV1AppAppIdRoute,
  putApiV1EventTypeEventTypeNameRoute,
} from './routes'
import {
  deleteApiV1AppAppIdEndpointEndpointIdRouteHandler,
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRouteHandler,
  deleteApiV1AppAppIdMsgMsgIdContentRouteHandler,
  deleteApiV1AppAppIdRouteHandler,
  deleteApiV1EventTypeEventTypeNameRouteHandler,
  getApiV1AppAppIdAttemptEndpointEndpointIdRouteHandler,
  getApiV1AppAppIdAttemptMsgMsgIdRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdMsgRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdSecretRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdStatsRouteHandler,
  getApiV1AppAppIdEndpointRouteHandler,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRouteHandler,
  getApiV1AppAppIdMsgMsgIdEndpointRouteHandler,
  getApiV1AppAppIdMsgMsgIdRouteHandler,
  getApiV1AppAppIdMsgRouteHandler,
  getApiV1AppAppIdRouteHandler,
  getApiV1AppRouteHandler,
  getApiV1EventTypeEventTypeNameRouteHandler,
  getApiV1EventTypeRouteHandler,
  getApiV1HealthPingRouteHandler,
  getApiV1HealthRouteHandler,
  headApiV1HealthPingRouteHandler,
  headApiV1HealthRouteHandler,
  patchApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  patchApiV1AppAppIdEndpointEndpointIdRouteHandler,
  patchApiV1AppAppIdRouteHandler,
  patchApiV1EventTypeEventTypeNameRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdRecoverRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdSendExampleRouteHandler,
  postApiV1AppAppIdEndpointRouteHandler,
  postApiV1AppAppIdMsgBulkExpungeRouteHandler,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRouteHandler,
  postApiV1AppAppIdMsgRouteHandler,
  postApiV1AppRouteHandler,
  postApiV1AuthAppPortalAccessAppIdRouteHandler,
  postApiV1AuthLogoutRouteHandler,
  postApiV1EventTypeRouteHandler,
  putApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  putApiV1AppAppIdEndpointEndpointIdRouteHandler,
  putApiV1AppAppIdRouteHandler,
  putApiV1EventTypeEventTypeNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1HealthPingRoute, getApiV1HealthPingRouteHandler)
  .openapi(headApiV1HealthPingRoute, headApiV1HealthPingRouteHandler)
  .openapi(getApiV1HealthRoute, getApiV1HealthRouteHandler)
  .openapi(headApiV1HealthRoute, headApiV1HealthRouteHandler)
  .openapi(postApiV1AuthLogoutRoute, postApiV1AuthLogoutRouteHandler)
  .openapi(postApiV1AuthAppPortalAccessAppIdRoute, postApiV1AuthAppPortalAccessAppIdRouteHandler)
  .openapi(getApiV1AppRoute, getApiV1AppRouteHandler)
  .openapi(postApiV1AppRoute, postApiV1AppRouteHandler)
  .openapi(getApiV1AppAppIdRoute, getApiV1AppAppIdRouteHandler)
  .openapi(putApiV1AppAppIdRoute, putApiV1AppAppIdRouteHandler)
  .openapi(deleteApiV1AppAppIdRoute, deleteApiV1AppAppIdRouteHandler)
  .openapi(patchApiV1AppAppIdRoute, patchApiV1AppAppIdRouteHandler)
  .openapi(getApiV1AppAppIdEndpointRoute, getApiV1AppAppIdEndpointRouteHandler)
  .openapi(postApiV1AppAppIdEndpointRoute, postApiV1AppAppIdEndpointRouteHandler)
  .openapi(getApiV1AppAppIdEndpointEndpointIdRoute, getApiV1AppAppIdEndpointEndpointIdRouteHandler)
  .openapi(putApiV1AppAppIdEndpointEndpointIdRoute, putApiV1AppAppIdEndpointEndpointIdRouteHandler)
  .openapi(
    deleteApiV1AppAppIdEndpointEndpointIdRoute,
    deleteApiV1AppAppIdEndpointEndpointIdRouteHandler,
  )
  .openapi(
    patchApiV1AppAppIdEndpointEndpointIdRoute,
    patchApiV1AppAppIdEndpointEndpointIdRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdSecretRoute,
    getApiV1AppAppIdEndpointEndpointIdSecretRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute,
    postApiV1AppAppIdEndpointEndpointIdSecretRotateRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdStatsRoute,
    getApiV1AppAppIdEndpointEndpointIdStatsRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdSendExampleRoute,
    postApiV1AppAppIdEndpointEndpointIdSendExampleRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdRecoverRoute,
    postApiV1AppAppIdEndpointEndpointIdRecoverRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdHeadersRoute,
    getApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  )
  .openapi(
    putApiV1AppAppIdEndpointEndpointIdHeadersRoute,
    putApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  )
  .openapi(
    patchApiV1AppAppIdEndpointEndpointIdHeadersRoute,
    patchApiV1AppAppIdEndpointEndpointIdHeadersRouteHandler,
  )
  .openapi(getApiV1EventTypeRoute, getApiV1EventTypeRouteHandler)
  .openapi(postApiV1EventTypeRoute, postApiV1EventTypeRouteHandler)
  .openapi(getApiV1EventTypeEventTypeNameRoute, getApiV1EventTypeEventTypeNameRouteHandler)
  .openapi(putApiV1EventTypeEventTypeNameRoute, putApiV1EventTypeEventTypeNameRouteHandler)
  .openapi(deleteApiV1EventTypeEventTypeNameRoute, deleteApiV1EventTypeEventTypeNameRouteHandler)
  .openapi(patchApiV1EventTypeEventTypeNameRoute, patchApiV1EventTypeEventTypeNameRouteHandler)
  .openapi(getApiV1AppAppIdMsgRoute, getApiV1AppAppIdMsgRouteHandler)
  .openapi(postApiV1AppAppIdMsgRoute, postApiV1AppAppIdMsgRouteHandler)
  .openapi(getApiV1AppAppIdMsgMsgIdRoute, getApiV1AppAppIdMsgMsgIdRouteHandler)
  .openapi(deleteApiV1AppAppIdMsgMsgIdContentRoute, deleteApiV1AppAppIdMsgMsgIdContentRouteHandler)
  .openapi(postApiV1AppAppIdMsgBulkExpungeRoute, postApiV1AppAppIdMsgBulkExpungeRouteHandler)
  .openapi(
    getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRoute,
    getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRouteHandler,
  )
  .openapi(
    deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRoute,
    deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRouteHandler,
  )
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointRoute, getApiV1AppAppIdMsgMsgIdEndpointRouteHandler)
  .openapi(
    postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRoute,
    postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdMsgRoute,
    getApiV1AppAppIdEndpointEndpointIdMsgRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdAttemptEndpointEndpointIdRoute,
    getApiV1AppAppIdAttemptEndpointEndpointIdRouteHandler,
  )
  .openapi(getApiV1AppAppIdAttemptMsgMsgIdRoute, getApiV1AppAppIdAttemptMsgMsgIdRouteHandler)

export default app
