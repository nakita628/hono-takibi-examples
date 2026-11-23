import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesSlugRoute,
  getCategoriesRoute,
  getCategoriesSlugDocsRoute,
  getCategoriesSlugRoute,
  postCategoriesRoute,
  putCategoriesSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoriesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoriesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesSlugDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
