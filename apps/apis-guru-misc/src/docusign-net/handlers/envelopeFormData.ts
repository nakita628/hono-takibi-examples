import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRoute } from '../routes'

const app = new OpenAPIHono()

export const envelopeFormDataHandler = app.openapi(
  getV21AccountsAccountIdEnvelopesEnvelopeIdFormDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
