import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute,
  getAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute,
  getAccountsAccountIdDlpDocumentFingerprintsRoute,
  postAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute,
  postAccountsAccountIdDlpDocumentFingerprintsRoute,
  putAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDocumentFingerprintsHandler = app
  .openapi(getAccountsAccountIdDlpDocumentFingerprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDocumentFingerprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpDocumentFingerprintsDocumentFingerprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
