import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameRoute,
  getAccountsAccountIdBasinCatalogRoute,
  postAccountsAccountIdBasinCatalogBucketNameDeleteRoute,
  postAccountsAccountIdBasinCatalogBucketNameDisableRoute,
  postAccountsAccountIdBasinCatalogBucketNameEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basinCatalogManagementHandler = app
  .openapi(getAccountsAccountIdBasinCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBasinCatalogBucketNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBasinCatalogBucketNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBasinCatalogBucketNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBasinCatalogBucketNameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
