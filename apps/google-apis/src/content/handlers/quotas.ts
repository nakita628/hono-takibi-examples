import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantIdQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const quotasHandler = app.openapi(getMerchantIdQuotasRoute, (c) => {
  throw new Error('Not implemented')
})
