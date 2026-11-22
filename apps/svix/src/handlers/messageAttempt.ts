import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentRoute,
  getApiV1AppAppIdAttemptEndpointEndpointIdRoute,
  getApiV1AppAppIdAttemptMsgMsgIdRoute,
  getApiV1AppAppIdEndpointEndpointIdMsgRoute,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdRoute,
  getApiV1AppAppIdMsgMsgIdEndpointRoute,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageAttemptHandler = app
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
