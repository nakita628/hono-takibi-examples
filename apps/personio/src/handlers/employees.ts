import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompanyEmployeesAttributesRoute,
  getCompanyEmployeesCustomAttributesRoute,
  getCompanyEmployeesEmployeeIdAbsencesBalanceRoute,
  getCompanyEmployeesEmployeeIdProfilePictureWidthRoute,
  getCompanyEmployeesEmployeeIdRoute,
  getCompanyEmployeesRoute,
  patchCompanyEmployeesEmployeeIdRoute,
  postCompanyEmployeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app
  .openapi(getCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompanyEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompanyEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdAbsencesBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesCustomAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompanyEmployeesEmployeeIdProfilePictureWidthRoute, (c) => {
    throw new Error('Not implemented')
  })
