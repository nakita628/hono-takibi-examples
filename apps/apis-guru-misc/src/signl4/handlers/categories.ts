import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesTeamIdCategoryIdRoute,
  getCategoriesImagesRoute,
  getCategoriesTeamIdCategoryIdMetricsRoute,
  getCategoriesTeamIdCategoryIdRoute,
  getCategoriesTeamIdCategoryIdSubscriptionsRoute,
  getCategoriesTeamIdMetricsRoute,
  getCategoriesTeamIdRoute,
  postCategoriesTeamIdCategoryIdSubscriptionsRoute,
  postCategoriesTeamIdRoute,
  putCategoriesTeamIdCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTeamIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoriesTeamIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTeamIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoriesTeamIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTeamIdCategoryIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTeamIdCategoryIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesTeamIdCategoryIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
