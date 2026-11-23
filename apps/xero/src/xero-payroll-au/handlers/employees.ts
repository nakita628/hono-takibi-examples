import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmployeesEmployeeIDRoute,
  getEmployeesRoute,
  postEmployeesEmployeeIDRoute,
  postEmployeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app
  .openapi(getEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
