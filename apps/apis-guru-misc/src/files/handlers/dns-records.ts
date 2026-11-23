import { OpenAPIHono } from '@hono/zod-openapi'
import { getDnsRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const dnsRecordsHandler = app.openapi(getDnsRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
