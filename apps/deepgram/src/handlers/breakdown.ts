import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdBillingBreakdownRoute,
  getV1ProjectsProjectIdUsageBreakdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const breakdownHandler = app
  .openapi(getV1ProjectsProjectIdUsageBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBillingBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
