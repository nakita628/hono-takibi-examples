import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneScansConfigConfigIdRoute,
  deleteAccountsAccountIdVulnScannerScansScanIdRoute,
  getAccountsAccountIdCloudforceOneBannerConfigIdRoute,
  getAccountsAccountIdCloudforceOneScansConfigRoute,
  getAccountsAccountIdCloudforceOneScansResultsConfigIdRoute,
  getAccountsAccountIdVulnScannerScansRoute,
  getAccountsAccountIdVulnScannerScansScanIdRoute,
  patchAccountsAccountIdCloudforceOneScansConfigConfigIdRoute,
  postAccountsAccountIdCloudforceOneScansConfigRoute,
  postAccountsAccountIdVulnScannerScansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scansHandler = app
  .openapi(getAccountsAccountIdCloudforceOneBannerConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneScansConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneScansConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneScansConfigConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneScansConfigConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneScansResultsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVulnScannerScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVulnScannerScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdVulnScannerScansScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVulnScannerScansScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
