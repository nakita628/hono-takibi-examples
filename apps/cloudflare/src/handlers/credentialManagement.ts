import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBasinCatalogBucketNameCredentialStatusRoute,
  getAccountsAccountIdR2CatalogBucketNameCredentialStatusRoute,
  postAccountsAccountIdBasinCatalogBucketNameCredentialRoute,
  postAccountsAccountIdR2CatalogBucketNameCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialManagementHandler = app
  .openapi(postAccountsAccountIdBasinCatalogBucketNameCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBasinCatalogBucketNameCredentialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdR2CatalogBucketNameCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2CatalogBucketNameCredentialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
