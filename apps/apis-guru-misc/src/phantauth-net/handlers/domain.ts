import { OpenAPIHono } from '@hono/zod-openapi'
import { getDomainDomainnameRoute } from '../routes'

const app = new OpenAPIHono()

export const domainHandler = app.openapi(getDomainDomainnameRoute, (c) => {
  throw new Error('Not implemented')
})
