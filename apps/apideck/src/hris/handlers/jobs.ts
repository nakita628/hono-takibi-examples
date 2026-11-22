import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHrisJobsEmployeesEmployeeIdJobsJobIdRoute,
  getHrisJobsEmployeesEmployeeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(getHrisJobsEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHrisJobsEmployeesEmployeeIdJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
