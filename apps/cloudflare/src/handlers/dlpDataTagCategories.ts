import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute,
  getAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute,
  getAccountsAccountIdDlpDataTagCategoriesRoute,
  postAccountsAccountIdDlpDataTagCategoriesRoute,
  putAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDataTagCategoriesHandler = app
  .openapi(getAccountsAccountIdDlpDataTagCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDataTagCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpDataTagCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
