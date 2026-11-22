import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1MeEmployeesEmployeeIdRoute,
  getV1MeEmployeesRoute,
  getV1MeRolesRoleIdRoute,
  getV1MeRolesRoute,
  postV1MeEmployeesRoute,
  postV1MeRolesRoute,
  putV1MeEmployeesEmployeeIdRoute,
  putV1MeRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1EmployeesHandler = app
  .openapi(getV1MeEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MeEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MeEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MeRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
