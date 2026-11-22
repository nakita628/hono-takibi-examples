import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdImagesV1ImageIdRoute,
  getAccountsAccountIdImagesV1ImageIdBlobRoute,
  getAccountsAccountIdImagesV1ImageIdRoute,
  getAccountsAccountIdImagesV1Route,
  getAccountsAccountIdImagesV1StatsRoute,
  getAccountsAccountIdImagesV2MetadataKeysRoute,
  getAccountsAccountIdImagesV2Route,
  patchAccountsAccountIdImagesV1ImageIdRoute,
  postAccountsAccountIdImagesV1DirectUploadRoute,
  postAccountsAccountIdImagesV1Route,
  postAccountsAccountIdImagesV2DirectUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareImagesHandler = app
  .openapi(getAccountsAccountIdImagesV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV1DirectUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV1StatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdImagesV1ImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV1ImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdImagesV1ImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV1ImageIdBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV2DirectUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV2MetadataKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
