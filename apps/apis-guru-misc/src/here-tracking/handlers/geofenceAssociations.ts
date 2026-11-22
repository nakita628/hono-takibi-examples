import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
  getGeofenceAssociationsV2GeofenceIdDevicesRoute,
  getGeofenceAssociationsV2HealthRoute,
  getGeofenceAssociationsV2VersionRoute,
  putGeofenceAssociationsV2GeofenceIdTrackingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geofenceAssociationsHandler = app
  .openapi(getGeofenceAssociationsV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofenceAssociationsV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofenceAssociationsV2GeofenceIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGeofenceAssociationsV2GeofenceIdTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGeofenceAssociationsV2GeofenceIdTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
