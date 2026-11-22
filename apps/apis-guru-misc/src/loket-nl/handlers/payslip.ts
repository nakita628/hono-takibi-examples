import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperiodresultsYearYearRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsPayrollrunIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsSummaryPayrollPeriodIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsYearRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdWagesheetYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payslipHandler = app
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperiodresultsYearYearRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsSummaryPayrollPeriodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsPayrollrunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdWagesheetYearRoute, (c) => {
    throw new Error('Not implemented')
  })
