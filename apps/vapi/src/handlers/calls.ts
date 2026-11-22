import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCallIdRoute,
  getCallIdAssistantRecordingRoute,
  getCallIdCallLogsRoute,
  getCallIdCustomerRecordingRoute,
  getCallIdMonoRecordingRoute,
  getCallIdPcapRoute,
  getCallIdRoute,
  getCallIdStereoRecordingRoute,
  getCallIdVideoRecordingRoute,
  getCallRoute,
  patchCallIdRoute,
  postCallRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(postCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdMonoRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdStereoRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdVideoRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdCustomerRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdAssistantRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdPcapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallIdCallLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
