import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmployeeIdEmploymentsRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsComprehensiveRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsMinimizedRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdCorrectstartdateRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdReinstateRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdTerminateRoute,
  putProvidersEmployersEmployeesEmploymentsEmploymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employmentHandler = app
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsEmploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdCorrectstartdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdReinstateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdEmploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsComprehensiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsMinimizedRoute, (c) => {
    throw new Error('Not implemented')
  })
