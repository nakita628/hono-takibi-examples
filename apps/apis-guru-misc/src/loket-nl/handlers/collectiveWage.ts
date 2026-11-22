import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersEmployerIdEmployeesEmploymentsWagesRoute } from '../routes'

const app = new OpenAPIHono()

export const collectiveWageHandler = app.openapi(
  postProvidersEmployersEmployerIdEmployeesEmploymentsWagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
