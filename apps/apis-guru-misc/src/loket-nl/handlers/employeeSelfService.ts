import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmployeeIdSelfserviceRoute,
  getProvidersEmployersEmployerIdEmployeesSelfserviceRoute,
  patchProvidersEmployersEmployeesSelfserviceRoute,
  patchProvidersEmployersEmployerIdEmployeesSelfserviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeSelfServiceHandler = app
  .openapi(patchProvidersEmployersEmployeesSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployerIdEmployeesSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
