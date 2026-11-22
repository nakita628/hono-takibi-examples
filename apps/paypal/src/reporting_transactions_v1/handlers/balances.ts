import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReportingBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app.openapi(getV1ReportingBalancesRoute, (c) => {
  throw new Error('Not implemented')
})
