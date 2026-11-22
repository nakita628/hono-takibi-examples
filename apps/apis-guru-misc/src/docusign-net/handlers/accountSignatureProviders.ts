import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdSignatureProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const accountSignatureProvidersHandler = app.openapi(
  getV21AccountsAccountIdSignatureProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
