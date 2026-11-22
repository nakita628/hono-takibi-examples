import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
  deleteAssociationsV3TrackingIdRulesRuleIdRoute,
  deleteAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
  getAssociationsV3GeofencesGeofenceIdRoute,
  getAssociationsV3HealthRoute,
  getAssociationsV3RulesRuleIdRoute,
  getAssociationsV3SensorsSensorRuleIdRoute,
  getAssociationsV3TrackingIdGeofencesRoute,
  getAssociationsV3TrackingIdRulesRoute,
  getAssociationsV3TrackingIdSensorsRoute,
  getAssociationsV3VersionRoute,
  postAssociationsV3DevicesTrackingIdBatchCreateRoute,
  postAssociationsV3DevicesTrackingIdBatchDeleteRoute,
  putAssociationsV3DevicesBatchUpdateRoute,
  putAssociationsV3TrackingIdGeofencesGeofenceIdRoute,
  putAssociationsV3TrackingIdRulesRuleIdRoute,
  putAssociationsV3TrackingIdSensorsSensorRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const associationsHandler = app
  .openapi(putAssociationsV3DevicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssociationsV3DevicesTrackingIdBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssociationsV3DevicesTrackingIdBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3GeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3RulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3SensorsSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3TrackingIdGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssociationsV3TrackingIdGeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssociationsV3TrackingIdGeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3TrackingIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssociationsV3TrackingIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssociationsV3TrackingIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsV3TrackingIdSensorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssociationsV3TrackingIdSensorsSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAssociationsV3TrackingIdSensorsSensorRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
