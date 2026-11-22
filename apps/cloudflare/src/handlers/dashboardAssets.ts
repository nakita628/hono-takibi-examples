import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsAssetIdDownloadRoute,
  getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsListRoute,
  postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardAssetsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsUploadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdCloudforceOneV2RequestsProjectTypeRequestIdAssetsAssetIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
