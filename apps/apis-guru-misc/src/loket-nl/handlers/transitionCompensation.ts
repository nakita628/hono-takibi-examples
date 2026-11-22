import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculateDefaultsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitionCompensationHandler = app
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculateDefaultsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
