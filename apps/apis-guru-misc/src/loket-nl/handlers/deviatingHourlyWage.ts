import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
  getProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywagesRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywagesRoute,
  putProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviatingHourlyWageHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywagesRoute, (c) => {
    throw new Error('Not implemented')
  })
