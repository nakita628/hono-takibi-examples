import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AvailableDomainsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const availableDomainsHandler = app.openapi(getApiV1AvailableDomainsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
