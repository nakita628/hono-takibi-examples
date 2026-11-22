import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
  getProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculationRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculationRoute,
  putProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const baseForCalculationHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculationRoute, (c) => {
    throw new Error('Not implemented')
  })
