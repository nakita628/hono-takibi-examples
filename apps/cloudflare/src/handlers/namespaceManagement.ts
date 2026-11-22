import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameNamespacesRoute,
  getAccountsAccountIdR2CatalogBucketNameNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespaceManagementHandler = app
  .openapi(getAccountsAccountIdBasinCatalogBucketNameNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2CatalogBucketNameNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
