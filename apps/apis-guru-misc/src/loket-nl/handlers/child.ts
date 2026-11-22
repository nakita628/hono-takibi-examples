import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesChildrenChildIdRoute,
  getProvidersEmployersEmployeesChildrenChildIdRoute,
  getProvidersEmployersEmployeesEmployeeIdChildrenRoute,
  postProvidersEmployersEmployeesEmployeeIdChildrenRoute,
  putProvidersEmployersEmployeesChildrenChildIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const childHandler = app
  .openapi(deleteProvidersEmployersEmployeesChildrenChildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesChildrenChildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesChildrenChildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
