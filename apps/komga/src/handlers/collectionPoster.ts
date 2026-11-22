import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute,
  getApiV1CollectionsIdThumbnailRoute,
  getApiV1CollectionsIdThumbnailsRoute,
  getApiV1CollectionsIdThumbnailsThumbnailIdRoute,
  postApiV1CollectionsIdThumbnailsRoute,
  putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionPosterHandler = app
  .openapi(getApiV1CollectionsIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CollectionsIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
