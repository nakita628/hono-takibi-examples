import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGeofencesV2GeofenceIdRoute,
  deleteGeofencesV2Route,
  getGeofencesV2GeofenceIdRoute,
  getGeofencesV2HealthRoute,
  getGeofencesV2Route,
  getGeofencesV2VersionRoute,
  postGeofencesV2GeofenceIdPoiTrainingRoute,
  postGeofencesV2Route,
  postGeofencesV2TrainingTestRoute,
  putGeofencesV2GeofenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geofencesHandler = app
  .openapi(deleteGeofencesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencesV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencesV2TrainingTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencesV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGeofencesV2GeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencesV2GeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGeofencesV2GeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencesV2GeofenceIdPoiTrainingRoute, (c) => {
    throw new Error('Not implemented')
  })
