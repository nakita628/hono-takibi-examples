import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionBusinessIDExtendedcreditsRoute } from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app.openapi(getVersionBusinessIDExtendedcreditsRoute, (c) => {
  throw new Error('Not implemented')
})
