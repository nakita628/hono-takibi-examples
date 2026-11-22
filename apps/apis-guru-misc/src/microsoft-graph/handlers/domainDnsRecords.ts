import { OpenAPIHono } from '@hono/zod-openapi'
import { getDomainDnsRecordsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const domainDnsRecordsHandler = app.openapi(getDomainDnsRecordsCountRoute, (c) => {
  throw new Error('Not implemented')
})
