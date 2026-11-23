import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  getEmployeesEmployeeIDLeaveBalancesRoute,
  getEmployeesEmployeeIDLeaveLeaveIDRoute,
  getEmployeesEmployeeIDLeavePeriodsRoute,
  getEmployeesEmployeeIDLeaveRoute,
  getEmployeesEmployeeIDLeaveTypesRoute,
  getEmployeesEmployeeIDPaymentMethodsRoute,
  getEmployeesEmployeeIDPayTemplatesRoute,
  getEmployeesEmployeeIDRoute,
  getEmployeesEmployeeIDSalaryAndWagesRoute,
  getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  getEmployeesEmployeeIDStatutoryLeaveBalanceRoute,
  getEmployeesEmployeeIDTaxRoute,
  getEmployeesEmployeeIDUkopeningbalancesRoute,
  getEmployeesRoute,
  postEmployeesEmployeeIDEmploymentRoute,
  postEmployeesEmployeeIDLeaveRoute,
  postEmployeesEmployeeIDLeaveTypesRoute,
  postEmployeesEmployeeIDPaymentMethodsRoute,
  postEmployeesEmployeeIDPaytemplateearningsRoute,
  postEmployeesEmployeeIDPayTemplatesEarningsRoute,
  postEmployeesEmployeeIDSalaryAndWagesRoute,
  postEmployeesEmployeeIDUkopeningbalancesRoute,
  postEmployeesRoute,
  putEmployeesEmployeeIDLeaveLeaveIDRoute,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  putEmployeesEmployeeIDRoute,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  putEmployeesEmployeeIDUkopeningbalancesRoute,
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
  .openapi(getEmployeesEmployeeIDUkopeningbalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDUkopeningbalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployeesEmployeeIDUkopeningbalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployeesEmployeeIDLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeaveLeaveIDRoute, (c) => {
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
  .openapi(getEmployeesEmployeeIDStatutoryLeaveBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployeesEmployeeIDLeavePeriodsRoute, (c) => {
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
  .openapi(postEmployeesEmployeeIDPaytemplateearningsRoute, (c) => {
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
