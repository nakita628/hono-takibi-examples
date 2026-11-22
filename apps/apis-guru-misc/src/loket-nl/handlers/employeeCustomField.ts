import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute,
  getProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute,
  getProvidersEmployersEmployeesEmployeeIdCustomfieldsRoute,
  postProvidersEmployersEmployeesEmployeeIdCustomfieldsRoute,
  putProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeCustomFieldHandler = app
  .openapi(deleteProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
