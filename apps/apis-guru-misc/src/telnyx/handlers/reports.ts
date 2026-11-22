import { OpenAPIHono } from '@hono/zod-openapi'
import { getLedgerBillingGroupReportsIdRoute, postLedgerBillingGroupReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postLedgerBillingGroupReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLedgerBillingGroupReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
