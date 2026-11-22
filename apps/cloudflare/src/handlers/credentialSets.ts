import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute,
  getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute,
  getAccountsAccountIdVulnScannerCredentialSetsRoute,
  patchAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute,
  postAccountsAccountIdVulnScannerCredentialSetsRoute,
  putAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialSetsHandler = app
  .openapi(getAccountsAccountIdVulnScannerCredentialSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVulnScannerCredentialSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
