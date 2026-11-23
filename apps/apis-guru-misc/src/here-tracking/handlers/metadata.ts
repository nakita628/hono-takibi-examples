import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataV2DevicesTrackingIdRoute,
  deleteMetadataV2GeofencesGeofenceIdRoute,
  deleteMetadataV2SensorRulesSensorRuleIdRoute,
  getMetadataV2DevicesTrackingIdRoute,
  getMetadataV2GeofencesGeofenceIdRoute,
  getMetadataV2HealthRoute,
  getMetadataV2SensorRulesSensorRuleIdRoute,
  getMetadataV2VersionRoute,
  postMetadataV2DevicesBatchRoute,
  postMetadataV2GeofencesBatchRoute,
  postMetadataV2SensorRulesBatchRoute,
  putMetadataV2DevicesTrackingIdRoute,
  putMetadataV2GeofencesGeofenceIdRoute,
  putMetadataV2SensorRulesSensorRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(postMetadataV2DevicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataV2DevicesTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV2DevicesTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataV2DevicesTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataV2GeofencesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataV2GeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV2GeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataV2GeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataV2SensorRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataV2SensorRulesSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV2SensorRulesSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataV2SensorRulesSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
