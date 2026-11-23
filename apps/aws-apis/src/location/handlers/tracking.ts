import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRoute,
  deleteTrackingV0TrackersTrackerNameRoute,
  getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRoute,
  getTrackingV0TrackersTrackerNameRoute,
  patchTrackingV0TrackersTrackerNameRoute,
  postTrackingV0ListTrackersRoute,
  postTrackingV0TrackersRoute,
  postTrackingV0TrackersTrackerNameConsumersRoute,
  postTrackingV0TrackersTrackerNameDeletePositionsRoute,
  postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRoute,
  postTrackingV0TrackersTrackerNameGetPositionsRoute,
  postTrackingV0TrackersTrackerNameListConsumersRoute,
  postTrackingV0TrackersTrackerNameListPositionsRoute,
  postTrackingV0TrackersTrackerNamePositionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackingHandler = app
  .openapi(postTrackingV0TrackersTrackerNameConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNameDeletePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNameGetPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNamePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingV0TrackersTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingV0TrackersTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingV0TrackersTrackerNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingV0TrackersTrackerNameConsumersConsumerArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNameListPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0TrackersTrackerNameListConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingV0ListTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
