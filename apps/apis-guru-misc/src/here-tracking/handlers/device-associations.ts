import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDeviceAssociationsV2HealthRoute,
  getDeviceAssociationsV2TrackingIdGeofencesRoute,
  getDeviceAssociationsV2VersionRoute,
} from '../routes'

export const getDeviceAssociationsV2HealthRouteHandler: RouteHandler<
  typeof getDeviceAssociationsV2HealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeviceAssociationsV2VersionRouteHandler: RouteHandler<
  typeof getDeviceAssociationsV2VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeviceAssociationsV2TrackingIdGeofencesRouteHandler: RouteHandler<
  typeof getDeviceAssociationsV2TrackingIdGeofencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
