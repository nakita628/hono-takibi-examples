import { OpenAPIHono } from '@hono/zod-openapi'
import { patchProvidersEmployersEmployeesEmploymentsEmploymentIdEmployeeprofileRoute } from '../routes'

const app = new OpenAPIHono()

export const activateEmployeeProfileHandler = app.openapi(
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdEmployeeprofileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
