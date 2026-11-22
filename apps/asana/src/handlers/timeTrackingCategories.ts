import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  getTimeTrackingCategoriesRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
  getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRoute,
  postTimeTrackingCategoriesRoute,
  putTimeTrackingCategoriesTimeTrackingCategoryGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeTrackingCategoriesHandler = app
  .openapi(getTimeTrackingCategoriesTimeTrackingCategoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimeTrackingCategoriesTimeTrackingCategoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimeTrackingCategoriesTimeTrackingCategoryGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeTrackingCategoriesTimeTrackingCategoryGidTimeTrackingEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimeTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
