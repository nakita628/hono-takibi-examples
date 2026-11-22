import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdDataSecurityPostureAssetSchemasAssetClassRoute,
  getAccountsAccountIdDataSecurityPostureAssetSchemasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetSchemasHandler = app
  .openapi(getAccountsAccountIdDataSecurityPostureAssetSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPostureAssetSchemasAssetClassRoute, (c) => {
    throw new Error('Not implemented')
  })
