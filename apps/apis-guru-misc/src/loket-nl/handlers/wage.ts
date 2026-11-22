import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsWagesWageIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdWagesRoute,
  getProvidersEmployersEmployeesEmploymentsWagesWageIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdWagesRoute,
  putProvidersEmployersEmployeesEmploymentsWagesWageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wageHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsWagesWageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsWagesWageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsWagesWageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
