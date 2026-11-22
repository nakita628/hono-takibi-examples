import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeDocumentFieldsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
