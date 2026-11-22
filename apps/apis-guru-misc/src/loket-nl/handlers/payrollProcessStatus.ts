import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersProviderIdPayrollprocessstatusRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollProcessStatusHandler = app.openapi(
  getProvidersProviderIdPayrollprocessstatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
