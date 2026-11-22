import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ExpenseCategoriesIdRoute,
  getApiV1ExpenseCategoriesCreateRoute,
  getApiV1ExpenseCategoriesIdEditRoute,
  getApiV1ExpenseCategoriesIdRoute,
  getApiV1ExpenseCategoriesRoute,
  postApiV1ExpenseCategoriesBulkRoute,
  postApiV1ExpenseCategoriesRoute,
  putApiV1ExpenseCategoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expenseCategoriesHandler = app
  .openapi(getApiV1ExpenseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpenseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ExpenseCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExpenseCategoriesIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExpenseCategoriesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
