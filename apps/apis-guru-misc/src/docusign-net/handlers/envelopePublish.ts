import { OpenAPIHono } from '@hono/zod-openapi'
import { postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRoute } from '../routes'

const app = new OpenAPIHono()

export const envelopePublishHandler = app.openapi(
  postV21AccountsAccountIdConnectEnvelopesPublishHistoricalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
