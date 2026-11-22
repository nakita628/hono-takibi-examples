import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillingRatePlansPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ratePlansHandler = app.openapi(getBillingRatePlansPublicKeyRoute, (c) => {
  throw new Error('Not implemented')
})
