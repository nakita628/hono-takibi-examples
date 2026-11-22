import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute,
  deleteAccountsAccountIdR2BucketsBucketNameObjectsRoute,
  getAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute,
  getAccountsAccountIdR2BucketsBucketNameObjectsRoute,
  putAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const r2ObjectHandler = app
  .openapi(deleteAccountsAccountIdR2BucketsBucketNameObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2BucketsBucketNameObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdR2BucketsBucketNameObjectsObjectKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
