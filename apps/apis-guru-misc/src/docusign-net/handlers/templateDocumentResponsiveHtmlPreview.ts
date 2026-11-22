import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const templateDocumentResponsiveHtmlPreviewHandler = app.openapi(
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
