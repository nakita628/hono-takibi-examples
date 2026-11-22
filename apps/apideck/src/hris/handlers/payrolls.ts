import { OpenAPIHono } from '@hono/zod-openapi'
import { getHrisPayrollsPayrollIdRoute, getHrisPayrollsRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollsHandler = app
  .openapi(getHrisPayrollsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisPayrollsPayrollIdRoute, (c) => {
    throw new Error('Not implemented')
  })
