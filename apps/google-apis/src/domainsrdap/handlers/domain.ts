import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DomainDomainNameRoute } from '../routes'

const app = new OpenAPIHono()

export const domainHandler = app.openapi(getV1DomainDomainNameRoute, (c) => {
  throw new Error('Not implemented')
})
