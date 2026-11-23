import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdEndpointEndpointIdIndexRoute,
  deleteApiV1AppAppIdIndexRoute,
  deleteApiV1AppAppIdIntegrationIntegIdIndexRoute,
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRoute,
  deleteApiV1AppAppIdMsgMsgIdContentIndexRoute,
  deleteApiV1EventTypeEventTypeNameIndexRoute,
  getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute,
  getApiV1AppAppIdAttemptMsgMsgIdIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
  getApiV1AppAppIdEndpointIndexRoute,
  getApiV1AppAppIdIndexRoute,
  getApiV1AppAppIdIntegrationIndexRoute,
  getApiV1AppAppIdIntegrationIntegIdIndexRoute,
  getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute,
  getApiV1AppAppIdMsgIndexRoute,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRoute,
  getApiV1AppAppIdMsgMsgIdAttemptIndexRoute,
  getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute,
  getApiV1AppAppIdMsgMsgIdEndpointIndexRoute,
  getApiV1AppAppIdMsgMsgIdIndexRoute,
  getApiV1AppIndexRoute,
  getApiV1BackgroundTaskIndexRoute,
  getApiV1BackgroundTaskTaskIdIndexRoute,
  getApiV1EventTypeEventTypeNameIndexRoute,
  getApiV1EventTypeIndexRoute,
  getApiV1HealthIndexRoute,
  patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute,
  postApiV1AppAppIdEndpointIndexRoute,
  postApiV1AppAppIdIntegrationIndexRoute,
  postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute,
  postApiV1AppAppIdMsgIndexRoute,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute,
  postApiV1AppIndexRoute,
  postApiV1AuthAppAppIdExpireAllIndexRoute,
  postApiV1AuthAppPortalAccessAppIdIndexRoute,
  postApiV1AuthDashboardAccessAppIdIndexRoute,
  postApiV1AuthLogoutIndexRoute,
  postApiV1EventTypeIndexRoute,
  putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
  putApiV1AppAppIdEndpointEndpointIdIndexRoute,
  putApiV1AppAppIdIndexRoute,
  putApiV1AppAppIdIntegrationIntegIdIndexRoute,
  putApiV1EventTypeEventTypeNameIndexRoute,
} from './routes'
import {
  deleteApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  deleteApiV1AppAppIdIndexRouteHandler,
  deleteApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRouteHandler,
  deleteApiV1AppAppIdMsgMsgIdContentIndexRouteHandler,
  deleteApiV1EventTypeEventTypeNameIndexRouteHandler,
  getApiV1AppAppIdAttemptEndpointEndpointIdIndexRouteHandler,
  getApiV1AppAppIdAttemptMsgMsgIdIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdMsgIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdSecretIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdStatsIndexRouteHandler,
  getApiV1AppAppIdEndpointEndpointIdTransformationIndexRouteHandler,
  getApiV1AppAppIdEndpointIndexRouteHandler,
  getApiV1AppAppIdIndexRouteHandler,
  getApiV1AppAppIdIntegrationIndexRouteHandler,
  getApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  getApiV1AppAppIdIntegrationIntegIdKeyIndexRouteHandler,
  getApiV1AppAppIdMsgIndexRouteHandler,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRouteHandler,
  getApiV1AppAppIdMsgMsgIdAttemptIndexRouteHandler,
  getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRouteHandler,
  getApiV1AppAppIdMsgMsgIdEndpointIndexRouteHandler,
  getApiV1AppAppIdMsgMsgIdIndexRouteHandler,
  getApiV1AppIndexRouteHandler,
  getApiV1BackgroundTaskIndexRouteHandler,
  getApiV1BackgroundTaskTaskIdIndexRouteHandler,
  getApiV1EventTypeEventTypeNameIndexRouteHandler,
  getApiV1EventTypeIndexRouteHandler,
  getApiV1HealthIndexRouteHandler,
  patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdRecoverIndexRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRouteHandler,
  postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRouteHandler,
  postApiV1AppAppIdEndpointIndexRouteHandler,
  postApiV1AppAppIdIntegrationIndexRouteHandler,
  postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRouteHandler,
  postApiV1AppAppIdMsgIndexRouteHandler,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRouteHandler,
  postApiV1AppIndexRouteHandler,
  postApiV1AuthAppAppIdExpireAllIndexRouteHandler,
  postApiV1AuthAppPortalAccessAppIdIndexRouteHandler,
  postApiV1AuthDashboardAccessAppIdIndexRouteHandler,
  postApiV1AuthLogoutIndexRouteHandler,
  postApiV1EventTypeIndexRouteHandler,
  putApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  putApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  putApiV1AppAppIdIndexRouteHandler,
  putApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  putApiV1EventTypeEventTypeNameIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1AppIndexRoute, getApiV1AppIndexRouteHandler)
  .openapi(postApiV1AppIndexRoute, postApiV1AppIndexRouteHandler)
  .openapi(deleteApiV1AppAppIdIndexRoute, deleteApiV1AppAppIdIndexRouteHandler)
  .openapi(getApiV1AppAppIdIndexRoute, getApiV1AppAppIdIndexRouteHandler)
  .openapi(putApiV1AppAppIdIndexRoute, putApiV1AppAppIdIndexRouteHandler)
  .openapi(
    getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute,
    getApiV1AppAppIdAttemptEndpointEndpointIdIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdAttemptMsgMsgIdIndexRoute,
    getApiV1AppAppIdAttemptMsgMsgIdIndexRouteHandler,
  )
  .openapi(getApiV1AppAppIdEndpointIndexRoute, getApiV1AppAppIdEndpointIndexRouteHandler)
  .openapi(postApiV1AppAppIdEndpointIndexRoute, postApiV1AppAppIdEndpointIndexRouteHandler)
  .openapi(
    deleteApiV1AppAppIdEndpointEndpointIdIndexRoute,
    deleteApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  )
  .openapi(
    putApiV1AppAppIdEndpointEndpointIdIndexRoute,
    putApiV1AppAppIdEndpointEndpointIdIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  )
  .openapi(
    patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
    patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  )
  .openapi(
    putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute,
    putApiV1AppAppIdEndpointEndpointIdHeadersIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdMsgIndexRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute,
    postApiV1AppAppIdEndpointEndpointIdRecoverIndexRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute,
    postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdSecretIndexRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute,
    postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdStatsIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
    getApiV1AppAppIdEndpointEndpointIdTransformationIndexRouteHandler,
  )
  .openapi(
    patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute,
    patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRouteHandler,
  )
  .openapi(getApiV1AppAppIdIntegrationIndexRoute, getApiV1AppAppIdIntegrationIndexRouteHandler)
  .openapi(postApiV1AppAppIdIntegrationIndexRoute, postApiV1AppAppIdIntegrationIndexRouteHandler)
  .openapi(
    deleteApiV1AppAppIdIntegrationIntegIdIndexRoute,
    deleteApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdIntegrationIntegIdIndexRoute,
    getApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  )
  .openapi(
    putApiV1AppAppIdIntegrationIntegIdIndexRoute,
    putApiV1AppAppIdIntegrationIntegIdIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute,
    getApiV1AppAppIdIntegrationIntegIdKeyIndexRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute,
    postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRouteHandler,
  )
  .openapi(getApiV1AppAppIdMsgIndexRoute, getApiV1AppAppIdMsgIndexRouteHandler)
  .openapi(postApiV1AppAppIdMsgIndexRoute, postApiV1AppAppIdMsgIndexRouteHandler)
  .openapi(getApiV1AppAppIdMsgMsgIdIndexRoute, getApiV1AppAppIdMsgMsgIdIndexRouteHandler)
  .openapi(
    getApiV1AppAppIdMsgMsgIdAttemptIndexRoute,
    getApiV1AppAppIdMsgMsgIdAttemptIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRoute,
    getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRouteHandler,
  )
  .openapi(
    deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRoute,
    deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRouteHandler,
  )
  .openapi(
    deleteApiV1AppAppIdMsgMsgIdContentIndexRoute,
    deleteApiV1AppAppIdMsgMsgIdContentIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdMsgMsgIdEndpointIndexRoute,
    getApiV1AppAppIdMsgMsgIdEndpointIndexRouteHandler,
  )
  .openapi(
    getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute,
    getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRouteHandler,
  )
  .openapi(
    postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute,
    postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRouteHandler,
  )
  .openapi(
    postApiV1AuthAppPortalAccessAppIdIndexRoute,
    postApiV1AuthAppPortalAccessAppIdIndexRouteHandler,
  )
  .openapi(
    postApiV1AuthAppAppIdExpireAllIndexRoute,
    postApiV1AuthAppAppIdExpireAllIndexRouteHandler,
  )
  .openapi(
    postApiV1AuthDashboardAccessAppIdIndexRoute,
    postApiV1AuthDashboardAccessAppIdIndexRouteHandler,
  )
  .openapi(postApiV1AuthLogoutIndexRoute, postApiV1AuthLogoutIndexRouteHandler)
  .openapi(getApiV1BackgroundTaskIndexRoute, getApiV1BackgroundTaskIndexRouteHandler)
  .openapi(getApiV1BackgroundTaskTaskIdIndexRoute, getApiV1BackgroundTaskTaskIdIndexRouteHandler)
  .openapi(getApiV1EventTypeIndexRoute, getApiV1EventTypeIndexRouteHandler)
  .openapi(postApiV1EventTypeIndexRoute, postApiV1EventTypeIndexRouteHandler)
  .openapi(
    deleteApiV1EventTypeEventTypeNameIndexRoute,
    deleteApiV1EventTypeEventTypeNameIndexRouteHandler,
  )
  .openapi(
    getApiV1EventTypeEventTypeNameIndexRoute,
    getApiV1EventTypeEventTypeNameIndexRouteHandler,
  )
  .openapi(
    putApiV1EventTypeEventTypeNameIndexRoute,
    putApiV1EventTypeEventTypeNameIndexRouteHandler,
  )
  .openapi(getApiV1HealthIndexRoute, getApiV1HealthIndexRouteHandler)

export default app
