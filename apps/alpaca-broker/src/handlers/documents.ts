import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute,
  getV1AccountsAccountIdDocumentsRoute,
  getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute,
  postV1AccountsAccountIdDocumentsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentsHandler = app
  .openapi(getV1AccountsAccountIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdDocumentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdDocumentsW8benDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
