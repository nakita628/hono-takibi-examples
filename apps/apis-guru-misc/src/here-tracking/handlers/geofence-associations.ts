import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
  getGeofenceAssociationsV2GeofenceIdDevicesRoute,
  getGeofenceAssociationsV2HealthRoute,
  getGeofenceAssociationsV2VersionRoute,
  putGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
} from '../routes'

export const getGeofenceAssociationsV2HealthRouteHandler: RouteHandler<
  typeof getGeofenceAssociationsV2HealthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeofenceAssociationsV2VersionRouteHandler: RouteHandler<
  typeof getGeofenceAssociationsV2VersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGeofenceAssociationsV2GeofenceIdDevicesRouteHandler: RouteHandler<
  typeof getGeofenceAssociationsV2GeofenceIdDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler: RouteHandler<
  typeof deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGeofenceAssociationsV2GeofenceIdTrackingIdRouteHandler: RouteHandler<
  typeof putGeofenceAssociationsV2GeofenceIdTrackingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
