import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute,
  getAccountsAccountIdVulnScannerTargetEnvironmentsRoute,
  getAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute,
  patchAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute,
  postAccountsAccountIdVulnScannerTargetEnvironmentsRoute,
  putAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetEnvironmentsHandler = app
  .openapi(getAccountsAccountIdVulnScannerTargetEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVulnScannerTargetEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdVulnScannerTargetEnvironmentsTargetEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
