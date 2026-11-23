import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesIdRoute,
  getCategoriesIdRoute,
  getCategoriesIdTransactionsRoute,
  postCategoriesIdCategoryRulesRoute,
  putCategoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(deleteCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoriesIdCategoryRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
