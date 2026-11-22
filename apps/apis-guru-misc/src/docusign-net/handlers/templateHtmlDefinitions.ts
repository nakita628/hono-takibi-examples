import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const templateHtmlDefinitionsHandler = app.openapi(
  getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
