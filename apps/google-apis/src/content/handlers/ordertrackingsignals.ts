import { OpenAPIHono } from '@hono/zod-openapi'
import { postMerchantIdOrdertrackingsignalsRoute } from '../routes'

const app = new OpenAPIHono()

export const ordertrackingsignalsHandler = app.openapi(
  postMerchantIdOrdertrackingsignalsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
