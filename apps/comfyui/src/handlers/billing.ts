import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiBillingChurnkeyAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app.openapi(getApiBillingChurnkeyAuthRoute, (c) => {
  throw new Error('Not implemented')
})
