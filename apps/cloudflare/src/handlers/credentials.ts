import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
  getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
  getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsRoute,
  patchAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
  postAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsRoute,
  putAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app
  .openapi(getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAccountsAccountIdVulnScannerCredentialSetsCredentialSetIdCredentialsCredentialIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
