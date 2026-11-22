import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdImagesV1KeysSigningKeyNameRoute,
  getAccountsAccountIdImagesV1KeysRoute,
  putAccountsAccountIdImagesV1KeysSigningKeyNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareImagesKeysHandler = app
  .openapi(getAccountsAccountIdImagesV1KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdImagesV1KeysSigningKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdImagesV1KeysSigningKeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
