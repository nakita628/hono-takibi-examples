import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CompaniesCompanyIdEmployeesEmployeeIdRoute,
  getV2CompaniesCompanyIdEmployeesIndexRoute,
  patchV2CompaniesCompanyIdEmployeesEmployeeIdRoute,
  postV2CompaniesCompanyIdEmployeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeeHandler = app
  .openapi(postV2CompaniesCompanyIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CompaniesCompanyIdEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
