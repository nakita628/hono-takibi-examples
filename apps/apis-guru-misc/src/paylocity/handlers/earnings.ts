import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute,
  putV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const earningsHandler = app
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CompaniesCompanyIdEmployeesEmployeeIdEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDateRoute, (c) => {
    throw new Error('Not implemented')
  })
