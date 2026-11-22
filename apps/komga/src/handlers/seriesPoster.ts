import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
  getApiV1SeriesSeriesIdThumbnailRoute,
  getApiV1SeriesSeriesIdThumbnailsRoute,
  getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute,
  postApiV1SeriesSeriesIdThumbnailsRoute,
  putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seriesPosterHandler = app
  .openapi(getApiV1SeriesSeriesIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SeriesSeriesIdThumbnailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SeriesSeriesIdThumbnailsThumbnailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SeriesSeriesIdThumbnailsThumbnailIdSelectedRoute, (c) => {
    throw new Error('Not implemented')
  })
