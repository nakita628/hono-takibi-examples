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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1HealthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1HealthPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headApiV1HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuthAppPortalAccessAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSecretRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdSendExampleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdEndpointEndpointIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdEndpointEndpointIdHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1EventTypeEventTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgBulkExpungeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdMsgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdAttemptEndpointEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdAttemptMsgMsgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
