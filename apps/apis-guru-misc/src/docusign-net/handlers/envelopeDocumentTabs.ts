import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeDocumentTabsHandler = app
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
