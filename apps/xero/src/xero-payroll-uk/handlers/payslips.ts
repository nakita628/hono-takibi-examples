import { OpenAPIHono } from '@hono/zod-openapi'
import { getPayslipsPayslipIDRoute, getPayslipsRoute } from '../routes'

const app = new OpenAPIHono()

export const payslipsHandler = app
  .openapi(getPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayslipsPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
