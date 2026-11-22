import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute,
  deleteAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute,
  getAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute,
  getAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute,
  getAccountsAccountIdCloudforceOneEventsTagsCategoriesRoute,
  patchAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute,
  patchAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute,
  postAccountsAccountIdCloudforceOneEventsTagsCategoriesCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagCategoryHandler = app
  .openapi(deleteAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsTagCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsTagsCategoriesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsTagsCategoriesCategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
