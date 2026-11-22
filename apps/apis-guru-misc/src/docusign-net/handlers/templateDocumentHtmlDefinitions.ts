import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const templateDocumentHtmlDefinitionsHandler = app.openapi(
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
