import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
  deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
  deleteApiLedgerAccountCategoriesIdRoute,
  getApiLedgerAccountCategoriesIdRoute,
  getApiLedgerAccountCategoriesRoute,
  patchApiLedgerAccountCategoriesIdRoute,
  postApiLedgerAccountCategoriesRoute,
  putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute,
  putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ledgerAccountCategoryHandler = app
  .openapi(getApiLedgerAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLedgerAccountCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
