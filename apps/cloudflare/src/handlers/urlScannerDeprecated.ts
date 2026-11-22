import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdUrlscannerResponseResponseIdRoute,
  getAccountsAccountIdUrlscannerScanRoute,
  getAccountsAccountIdUrlscannerScanScanIdHarRoute,
  getAccountsAccountIdUrlscannerScanScanIdRoute,
  getAccountsAccountIdUrlscannerScanScanIdScreenshotRoute,
  postAccountsAccountIdUrlscannerScanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlScannerDeprecatedHandler = app
  .openapi(getAccountsAccountIdUrlscannerResponseResponseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdUrlscannerScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerScanScanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerScanScanIdHarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdUrlscannerScanScanIdScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
