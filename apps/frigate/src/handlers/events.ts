import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsEventIdRetainRoute,
  deleteEventsEventIdRoute,
  deleteEventsIndexRoute,
  getEventsEventIdClipMp4Route,
  getEventsEventIdPreviewGifRoute,
  getEventsEventIdRoute,
  getEventsEventIdSnapshotCleanWebpRoute,
  getEventsEventIdSnapshotJpgRoute,
  getEventsEventIdThumbnailExtensionRoute,
  getEventsExploreRoute,
  getEventsRoute,
  getEventsSearchRoute,
  getEventsSummaryRoute,
  postEventsCameraNameLabelCreateRoute,
  postEventsEventIdAttributesRoute,
  postEventsEventIdDescriptionRoute,
  postEventsEventIdPlusRoute,
  postEventsEventIdRecognizedLicensePlateRoute,
  postEventsEventIdRetainRoute,
  postEventsEventIdSubLabelRoute,
  putEventsEventIdDescriptionRegenerateRoute,
  putEventsEventIdEndRoute,
  putEventsEventIdFalsePositiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsExploreRoute, (c) => {
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
  .openapi(deleteEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsCameraNameLabelCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEventIdEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdSnapshotJpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdThumbnailExtensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdSnapshotCleanWebpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdClipMp4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsEventIdPreviewGifRoute, (c) => {
    throw new Error('Not implemented')
  })
