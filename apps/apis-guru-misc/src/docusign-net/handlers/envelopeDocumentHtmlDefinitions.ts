import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const envelopeDocumentHtmlDefinitionsHandler = app.openapi(
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
