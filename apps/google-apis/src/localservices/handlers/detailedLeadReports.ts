import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DetailedLeadReportsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const detailedLeadReportsHandler = app.openapi(getV1DetailedLeadReportsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
