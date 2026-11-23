import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescribeVcenterClientsRoute } from '../routes'

const app = new OpenAPIHono()

export const describeVcenterClientsHandler = app.openapi(getDescribeVcenterClientsRoute, (c) => {
  throw new Error('Not implemented')
})
