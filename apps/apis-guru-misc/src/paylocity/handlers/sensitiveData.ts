import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sensitiveDataHandler = app
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedataRoute, (c) => {
    throw new Error('Not implemented')
  })
