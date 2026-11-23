import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTracesV2TrackingIdRoute,
  getTracesV2HealthRoute,
  getTracesV2TrackingIdRoute,
  getTracesV2VersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracesHandler = app
  .openapi(getTracesV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracesV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTracesV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracesV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
