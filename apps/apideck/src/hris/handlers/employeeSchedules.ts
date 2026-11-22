import { OpenAPIHono } from '@hono/zod-openapi'
import { getHrisSchedulesEmployeesEmployeeIdRoute } from '../routes'

const app = new OpenAPIHono()

export const employeeSchedulesHandler = app.openapi(
  getHrisSchedulesEmployeesEmployeeIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
