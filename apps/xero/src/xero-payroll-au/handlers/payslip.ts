import { OpenAPIHono } from '@hono/zod-openapi'
import { getPayslipPayslipIDRoute, postPayslipPayslipIDRoute } from '../routes'

const app = new OpenAPIHono()

export const payslipHandler = app
  .openapi(getPayslipPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayslipPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
