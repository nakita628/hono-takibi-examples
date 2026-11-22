import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesCategoryVideosRoute,
  getCategoriesCategoryVideosVideoIdRoute,
  getVideosVideoIdCategoriesRoute,
  putVideosVideoIdCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesVideosHandler = app
  .openapi(getCategoriesCategoryVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVideosVideoIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
