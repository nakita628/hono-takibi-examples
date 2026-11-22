import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const responsiveHtmlPreviewHandler = app.openapi(
  postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreviewRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
