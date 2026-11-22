import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetAccountSummaryRoute, postActionGetAccountSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetAccountSummaryHandler = app
  .openapi(getActionGetAccountSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccountSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
