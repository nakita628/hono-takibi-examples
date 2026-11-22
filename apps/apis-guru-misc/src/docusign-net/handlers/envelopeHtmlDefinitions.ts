import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const envelopeHtmlDefinitionsHandler = app.openapi(
  getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
