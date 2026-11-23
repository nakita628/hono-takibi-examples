import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
  deleteTrackingCategoriesTrackingCategoryIDRoute,
  getTrackingCategoriesRoute,
  getTrackingCategoriesTrackingCategoryIDRoute,
  postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute,
  postTrackingCategoriesTrackingCategoryIDRoute,
  putTrackingCategoriesRoute,
  putTrackingCategoriesTrackingCategoryIDOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackingCategoriesHandler = app
  .openapi(getTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingCategoriesTrackingCategoryIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrackingCategoriesTrackingCategoryIDOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
