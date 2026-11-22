import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersDepartmentsDepartmentIdRoute,
  getProvidersEmployersEmployerIdDepartmentsRoute,
  getProvidersEmployersEmployerIdUseraccessibledepartmentsRoute,
  postProvidersEmployersEmployerIdDepartmentsRoute,
  putProvidersEmployersDepartmentsDepartmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const departmentsHandler = app
  .openapi(getProvidersEmployersDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdUseraccessibledepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
