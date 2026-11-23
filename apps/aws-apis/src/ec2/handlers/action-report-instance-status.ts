import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionReportInstanceStatusRoute, postActionReportInstanceStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const actionReportInstanceStatusHandler = app
  .openapi(getActionReportInstanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionReportInstanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
