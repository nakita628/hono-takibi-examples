import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReadingProfileLibraryLibraryIdRoute,
  deleteApiReadingProfileRoute,
  deleteApiReadingProfileSeriesSeriesIdRoute,
  getApiReadingProfileAllRoute,
  getApiReadingProfileLibraryIdSeriesIdRoute,
  getApiReadingProfileLibraryRoute,
  getApiReadingProfileSeriesRoute,
  postApiReadingProfileBulkRoute,
  postApiReadingProfileCreateRoute,
  postApiReadingProfileLibraryLibraryIdRoute,
  postApiReadingProfilePromoteRoute,
  postApiReadingProfileRoute,
  postApiReadingProfileSeriesRoute,
  postApiReadingProfileSeriesSeriesIdRoute,
  postApiReadingProfileSetDevicesRoute,
  postApiReadingProfileUpdateParentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const readingProfileHandler = app
  .openapi(getApiReadingProfileAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileLibraryIdSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReadingProfileLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfilePromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileUpdateParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileSeriesSeriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileLibraryLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReadingProfileLibraryLibraryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReadingProfileSetDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
