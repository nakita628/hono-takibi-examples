import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventIdRetainRoute,
  deleteEventsEventIdRoute,
  deleteEventsIndexRoute,
  deleteTriggerEmbeddingCameraNameNameRoute,
  getEventIdsRoute,
  getEventsEventIdRoute,
  getEventsExploreRoute,
  getEventsRoute,
  getEventsSearchRoute,
  getEventsSummaryRoute,
  getTriggersStatusCameraNameRoute,
  postDescriptionGenerateRoute,
  postEventsCameraNameLabelCreateRoute,
  postEventsEventIdAttributesRoute,
  postEventsEventIdDescriptionRoute,
  postEventsEventIdPlusRoute,
  postEventsEventIdRecognizedLicensePlateRoute,
  postEventsEventIdRetainRoute,
  postEventsEventIdSubLabelRoute,
  postTriggerEmbeddingRoute,
  putEventsEventIdDescriptionRegenerateRoute,
  putEventsEventIdEndRoute,
  putEventsEventIdFalsePositiveRoute,
  putTriggerEmbeddingCameraNameNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsExploreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdRetainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsEventIdRetainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdPlusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventIdFalsePositiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdSubLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdRecognizedLicensePlateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEventIdDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventIdDescriptionRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDescriptionGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsCameraNameLabelCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventIdEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTriggerEmbeddingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTriggerEmbeddingCameraNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTriggerEmbeddingCameraNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTriggersStatusCameraNameRoute, (c) => {
    throw new Error('Not implemented')
  })
