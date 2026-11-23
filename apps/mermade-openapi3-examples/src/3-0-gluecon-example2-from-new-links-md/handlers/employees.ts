import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmployeesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app.openapi(getEmployeesIdRoute, (c) => {
  throw new Error('Not implemented')
})
