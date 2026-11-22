import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPeriodreadyforpayrollRoute } from '../routes'

const app = new OpenAPIHono()

export const periodReadyForPayrollHandler = app.openapi(
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPeriodreadyforpayrollRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
