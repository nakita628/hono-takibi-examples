import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute,
  deleteAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute,
  getAccountsAccountIdCloudforceOneEventsCategoriesCatalogRoute,
  getAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute,
  getAccountsAccountIdCloudforceOneEventsCategoriesRoute,
  getAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute,
  getAccountsAccountIdResourceLibraryCategoriesIdRoute,
  getAccountsAccountIdResourceLibraryCategoriesRoute,
  patchAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute,
  patchAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute,
  postAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute,
  postAccountsAccountIdCloudforceOneEventsCategoriesCreateRoute,
  postAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoryHandler = app
  .openapi(getAccountsAccountIdCloudforceOneEventsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsCategoriesCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsCategoriesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneEventsEventCategoriesByIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdResourceLibraryCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdResourceLibraryCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
