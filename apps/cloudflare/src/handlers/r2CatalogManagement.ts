import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdR2CatalogBucketNameRoute,
  getAccountsAccountIdR2CatalogRoute,
  postAccountsAccountIdR2CatalogBucketNameDeleteRoute,
  postAccountsAccountIdR2CatalogBucketNameDisableRoute,
  postAccountsAccountIdR2CatalogBucketNameEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const r2CatalogManagementHandler = app
  .openapi(getAccountsAccountIdR2CatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2CatalogBucketNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdR2CatalogBucketNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdR2CatalogBucketNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdR2CatalogBucketNameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
