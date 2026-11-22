import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmployeeIdPhotoRoute,
  getProvidersEmployersEmployeesEmployeeIdCitizenservicenumberRoute,
  getProvidersEmployersEmployeesEmployeeIdPhotoRoute,
  getProvidersEmployersEmployeesEmployeeIdPhotoVersionRoute,
  getProvidersEmployersEmployeesEmployeeIdRoute,
  getProvidersEmployersEmployerIdEmployeesRoute,
  patchProvidersEmployersEmployeesEmployeeIdRevokeEmployeeSelfServiceAccessRoute,
  postProvidersEmployersEmployeesEmployeeIdPhotoRoute,
  putProvidersEmployersEmployeesEmployeeIdCitizenservicenumberRoute,
  putProvidersEmployersEmployeesEmployeeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeHandler = app
  .openapi(getProvidersEmployersEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdCitizenservicenumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmployeeIdCitizenservicenumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersEmployeesEmployeeIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdPhotoVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmployeeIdRevokeEmployeeSelfServiceAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
