import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesRoute,
  patchAccountingCategoriesAccountingCategoryIdRoute,
  postAccountingCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingCategoriesHandler = app
  .openapi(postAccountingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
