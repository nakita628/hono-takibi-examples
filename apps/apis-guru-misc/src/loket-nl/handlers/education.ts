import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute,
  getProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute,
  getProvidersEmployersEmployeesEmployeeIdEducationsRoute,
  postProvidersEmployersEmployeesEmployeeIdEducationsRoute,
  putProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationHandler = app
  .openapi(deleteProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEducationsEmployeeEducationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdEducationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdEducationsRoute, (c) => {
    throw new Error('Not implemented')
  })
