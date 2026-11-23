import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesCategoryChannelsRoute,
  getCategoriesCategoryGroupsRoute,
  getCategoriesCategoryRoute,
  getCategoriesCategoryVideosRoute,
  getCategoriesCategoryVideosVideoIdRoute,
  getCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
