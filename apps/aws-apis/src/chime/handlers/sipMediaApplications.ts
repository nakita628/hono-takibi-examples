import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSipMediaApplicationsSipMediaApplicationIdRoute,
  getSipMediaApplicationsRoute,
  getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
  getSipMediaApplicationsSipMediaApplicationIdRoute,
  postSipMediaApplicationsRoute,
  postSipMediaApplicationsSipMediaApplicationIdCallsRoute,
  postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRoute,
  putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute,
  putSipMediaApplicationsSipMediaApplicationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sipMediaApplicationsHandler = app
  .openapi(postSipMediaApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSipMediaApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSipMediaApplicationsSipMediaApplicationIdCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSipMediaApplicationsSipMediaApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSipMediaApplicationsSipMediaApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSipMediaApplicationsSipMediaApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSipMediaApplicationsSipMediaApplicationIdLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSipMediaApplicationsSipMediaApplicationIdCallsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
