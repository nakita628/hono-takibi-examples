import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ApplePayDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const applePayHandler = app.openapi(postV2ApplePayDomainsRoute, (c) => {
  throw new Error('Not implemented')
})
