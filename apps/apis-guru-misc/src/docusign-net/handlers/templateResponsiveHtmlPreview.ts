import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const templateResponsiveHtmlPreviewHandler = app.openapi(
  postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
