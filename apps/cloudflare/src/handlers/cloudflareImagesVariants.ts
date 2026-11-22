import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdImagesV1VariantsVariantIdRoute,
  getAccountsAccountIdImagesV1VariantsRoute,
  getAccountsAccountIdImagesV1VariantsVariantIdFlatRoute,
  getAccountsAccountIdImagesV1VariantsVariantIdRoute,
  patchAccountsAccountIdImagesV1VariantsVariantIdRoute,
  postAccountsAccountIdImagesV1VariantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareImagesVariantsHandler = app
  .openapi(getAccountsAccountIdImagesV1VariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdImagesV1VariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdImagesV1VariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV1VariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdImagesV1VariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdImagesV1VariantsVariantIdFlatRoute, (c) => {
    throw new Error('Not implemented')
  })
