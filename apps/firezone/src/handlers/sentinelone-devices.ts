import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSentineloneDevicesRoute,
  getSentineloneDevicesSentineloneAgentRoute,
} from '../routes'

export const getSentineloneDevicesRouteHandler: RouteHandler<
  typeof getSentineloneDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSentineloneDevicesSentineloneAgentRouteHandler: RouteHandler<
  typeof getSentineloneDevicesSentineloneAgentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
