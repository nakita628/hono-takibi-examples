import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTracesV2TrackingIdRoute,
  getTracesV2HealthRoute,
  getTracesV2TrackingIdRoute,
  getTracesV2VersionRoute,
} from '../routes'

export const getTracesV2HealthRouteHandler: RouteHandler<typeof getTracesV2HealthRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTracesV2VersionRouteHandler: RouteHandler<typeof getTracesV2VersionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTracesV2TrackingIdRouteHandler: RouteHandler<
  typeof deleteTracesV2TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracesV2TrackingIdRouteHandler: RouteHandler<
  typeof getTracesV2TrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
