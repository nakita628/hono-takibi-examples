import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute,
  getAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsRoute,
  getAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute,
  postAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsRoute,
  putAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDataTagsHandler = app
  .openapi(getAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpDataTagCategoriesCategoryIdDataTagsTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
