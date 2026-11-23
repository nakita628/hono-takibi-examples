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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AppIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdAttemptMsgMsgIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdHeadersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdRecoverIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdReplayMissingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdSecretIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSecretRotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdStatsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdTransformationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIntegrationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdIntegrationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdIntegrationIntegIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIntegrationIntegIdKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdIntegrationIntegIdKeyRotateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdAttemptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdContentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthAppPortalAccessAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthAppAppIdExpireAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthDashboardAccessAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthLogoutIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BackgroundTaskIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BackgroundTaskTaskIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EventTypeEventTypeNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HealthIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
