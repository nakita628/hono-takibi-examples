import { OpenAPIHono } from '@hono/zod-openapi'
import { postMachinePaymentsAccountCreditRoute } from '../routes'

const app = new OpenAPIHono()

export const machinePaymentsHandler = app.openapi(postMachinePaymentsAccountCreditRoute, (c) => {
  throw new Error('Not implemented')
})
