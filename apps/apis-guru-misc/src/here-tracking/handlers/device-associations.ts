import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceAssociationsV2HealthRoute,
  getDeviceAssociationsV2TrackingIdGeofencesRoute,
  getDeviceAssociationsV2VersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceAssociationsHandler = app
  .openapi(getDeviceAssociationsV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAssociationsV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceAssociationsV2TrackingIdGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
