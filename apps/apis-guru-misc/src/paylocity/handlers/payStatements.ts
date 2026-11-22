import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateRoute,
  getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payStatementsHandler = app
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDateRoute, (c) => {
    throw new Error('Not implemented')
  })
