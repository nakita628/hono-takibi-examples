import { OpenAPIHono } from '@hono/zod-openapi'
import { postMerchantCancellationRoute } from '../routes'

const app = new OpenAPIHono()

export const merchantHandler = app.openapi(postMerchantCancellationRoute, (c) => {
  throw new Error('Not implemented')
})
