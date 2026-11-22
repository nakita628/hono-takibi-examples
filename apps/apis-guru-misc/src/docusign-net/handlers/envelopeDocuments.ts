import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeDocumentsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
