import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesIdRoute,
  getCategoriesRoute,
  postCategoriesBatchRoute,
  postCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
