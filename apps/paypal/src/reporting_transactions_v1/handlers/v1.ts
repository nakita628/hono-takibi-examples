import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReportingBalancesRoute, getV1ReportingTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ReportingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
