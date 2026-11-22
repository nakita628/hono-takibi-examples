import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const documentResponsiveHtmlPreviewHandler = app.openapi(
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
