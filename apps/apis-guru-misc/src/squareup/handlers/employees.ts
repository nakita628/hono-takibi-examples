import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2EmployeesIdRoute, getV2EmployeesRoute } from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app
  .openapi(getV2EmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
