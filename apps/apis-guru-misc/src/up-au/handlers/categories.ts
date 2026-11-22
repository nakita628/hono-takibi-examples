import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesIdRoute,
  getCategoriesRoute,
  patchTransactionsTransactionIdRelationshipsCategoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransactionsTransactionIdRelationshipsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
