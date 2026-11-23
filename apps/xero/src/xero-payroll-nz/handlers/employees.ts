import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute,
  getEmployeesEmployeeIDLeaveBalancesRoute,
  getEmployeesEmployeeIDLeavePeriodsRoute,
  getEmployeesEmployeeIDLeaveRoute,
  getEmployeesEmployeeIDLeaveTypesRoute,
  getEmployeesEmployeeIDOpeningBalancesRoute,
  getEmployeesEmployeeIDPaymentMethodsRoute,
  getEmployeesEmployeeIDPayTemplatesRoute,
  getEmployeesEmployeeIDRoute,
  getEmployeesEmployeeIDSalaryAndWagesRoute,
  getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  getEmployeesEmployeeIDTaxRoute,
  getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute,
  getEmployeesEmployeeIDWorkingPatternsRoute,
  getEmployeesRoute,
  postEmployeesEmployeeIDEmploymentRoute,
  postEmployeesEmployeeIDLeaveRoute,
  postEmployeesEmployeeIDLeaveSetupRoute,
  postEmployeesEmployeeIDLeaveTypesRoute,
  postEmployeesEmployeeIDOpeningBalancesRoute,
  postEmployeesEmployeeIDPaymentMethodsRoute,
  postEmployeesEmployeeIDPayTemplateEarningsRoute,
  postEmployeesEmployeeIDPayTemplatesEarningsRoute,
  postEmployeesEmployeeIDSalaryAndWagesRoute,
  postEmployeesEmployeeIDTaxRoute,
  postEmployeesEmployeeIDWorkingPatternsRoute,
  postEmployeesRoute,
  putEmployeesEmployeeIDLeaveLeaveIDRoute,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  putEmployeesEmployeeIDRoute,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employeesHandler = app
  .openapi(getEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployeesEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDEmploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDOpeningBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDOpeningBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployeesEmployeeIDLeaveLeaveIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeesEmployeeIDLeaveLeaveIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeaveBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeavePeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDLeaveSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDPayTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDPayTemplatesEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDPayTemplateEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDSalaryAndWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDSalaryAndWagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDWorkingPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDWorkingPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute, (c) => {
    throw new Error('Not implemented')
  })
