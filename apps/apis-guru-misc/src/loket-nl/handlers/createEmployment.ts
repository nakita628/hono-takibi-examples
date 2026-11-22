import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProvidersEmployersEmployeesEmployeeIdEmploymentsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const createEmploymentHandler = app
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postProvidersEmployersEmployeesEmployeeIdEmploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
