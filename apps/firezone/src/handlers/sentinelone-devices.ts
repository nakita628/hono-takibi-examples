import { OpenAPIHono } from '@hono/zod-openapi'
import { getSentineloneDevicesRoute, getSentineloneDevicesSentineloneAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const sentineloneDevicesHandler = app
  .openapi(getSentineloneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSentineloneDevicesSentineloneAgentRoute, (c) => {
    throw new Error('Not implemented')
  })
