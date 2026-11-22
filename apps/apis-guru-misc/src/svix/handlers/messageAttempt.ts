import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdMsgMsgIdAttemptAttemptIdContentIndexRoute,
  getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute,
  getApiV1AppAppIdAttemptMsgMsgIdIndexRoute,
  getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute,
  getApiV1AppAppIdMsgMsgIdAttemptAttemptIdIndexRoute,
  getApiV1AppAppIdMsgMsgIdAttemptIndexRoute,
  getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute,
  getApiV1AppAppIdMsgMsgIdEndpointIndexRoute,
  postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageAttemptHandler = app
  .openapi(getApiV1AppAppIdAttemptEndpointEndpointIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdAttemptMsgMsgIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdEndpointEndpointIdMsgIndexRoute, (c) => {
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
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdMsgMsgIdEndpointEndpointIdAttemptIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppAppIdMsgMsgIdEndpointEndpointIdResendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
