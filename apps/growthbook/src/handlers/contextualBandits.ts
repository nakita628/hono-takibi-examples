import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  deleteV1ContextualBanditsIdRoute,
  getV1ContextualBanditsIdCurrentRoute,
  getV1ContextualBanditsIdEventsEventIdRoute,
  getV1ContextualBanditsIdEventsRoute,
  getV1ContextualBanditsIdLinkedFeaturesRoute,
  getV1ContextualBanditsIdResultsRoute,
  getV1ContextualBanditsIdRoute,
  getV1ContextualBanditsIdSnapshotsRoute,
  getV1ContextualBanditsIdSnapshotsSnapshotIdRoute,
  getV1ContextualBanditsIdStatusRoute,
  getV1ContextualBanditsIdVisualChangesetsRoute,
  getV1ContextualBanditsRoute,
  postV1ContextualBanditsIdCancelRoute,
  postV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  postV1ContextualBanditsIdRefreshRoute,
  postV1ContextualBanditsIdStartRoute,
  postV1ContextualBanditsIdStopRoute,
  postV1ContextualBanditsIdVariationsRoute,
  postV1ContextualBanditsIdVisualChangesetsRoute,
  postV1ContextualBanditsRoute,
  putV1ContextualBanditsIdLinkedFeatureFeatureIdRoute,
  putV1ContextualBanditsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contextualBanditsHandler = app
  .openapi(getV1ContextualBanditsIdCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdLinkedFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditsIdLinkedFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ContextualBanditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContextualBanditsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContextualBanditsIdVisualChangesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
