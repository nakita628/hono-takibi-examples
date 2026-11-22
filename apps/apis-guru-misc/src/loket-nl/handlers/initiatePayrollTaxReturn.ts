import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsInitiateRoute } from '../routes'

const app = new OpenAPIHono()

export const initiatePayrollTaxReturnHandler = app.openapi(
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsInitiateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
