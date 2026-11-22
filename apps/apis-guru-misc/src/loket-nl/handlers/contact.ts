import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesContactsContactIdRoute,
  getProvidersEmployersEmployeesContactsContactIdRoute,
  getProvidersEmployersEmployeesEmployeeIdContactsRoute,
  postProvidersEmployersEmployeesEmployeeIdContactsRoute,
  putProvidersEmployersEmployeesContactsContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app
  .openapi(deleteProvidersEmployersEmployeesContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
