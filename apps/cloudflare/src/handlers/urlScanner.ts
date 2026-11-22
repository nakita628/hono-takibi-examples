import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdUrlscannerV2DomScanIdRoute,
  getAccountsAccountIdUrlscannerV2HarScanIdRoute,
  getAccountsAccountIdUrlscannerV2ResponsesResponseIdRoute,
  getAccountsAccountIdUrlscannerV2ResultScanIdRoute,
  getAccountsAccountIdUrlscannerV2ScreenshotsScanIdPngRoute,
  getAccountsAccountIdUrlscannerV2SearchRoute,
  postAccountsAccountIdUrlscannerV2BulkRoute,
  postAccountsAccountIdUrlscannerV2ScanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlScannerHandler = app
  .openapi(postAccountsAccountIdUrlscannerV2BulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2DomScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2HarScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2ResponsesResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2ResultScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUrlscannerV2ScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2ScreenshotsScanIdPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerV2SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
