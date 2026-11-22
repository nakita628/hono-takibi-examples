import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAddressingPrefixesPrefixIdRoute,
  getAccountsAccountIdAddressingLoaDocumentsLoaDocumentIdDownloadRoute,
  getAccountsAccountIdAddressingLoaDocumentsRoute,
  getAccountsAccountIdAddressingPrefixesPrefixIdRoute,
  getAccountsAccountIdAddressingPrefixesRoute,
  patchAccountsAccountIdAddressingPrefixesPrefixIdRoute,
  postAccountsAccountIdAddressingLoaDocumentsRoute,
  postAccountsAccountIdAddressingPrefixesPrefixIdValidateRoute,
  postAccountsAccountIdAddressingPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipAddressManagementPrefixesHandler = app
  .openapi(getAccountsAccountIdAddressingLoaDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingLoaDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingLoaDocumentsLoaDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAddressingPrefixesPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAddressingPrefixesPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAddressingPrefixesPrefixIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAddressingPrefixesPrefixIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
