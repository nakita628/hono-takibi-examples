import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
  deleteTimesheetsTimesheetIDRoute,
  getBenefitsIdRoute,
  getBenefitsRoute,
  getDeductionsDeductionIdRoute,
  getDeductionsRoute,
  getEarningsOrdersIdRoute,
  getEarningsOrdersRoute,
  getEarningsRatesEarningsRateIDRoute,
  getEarningsRatesRoute,
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
  getLeaveTypesLeaveTypeIDRoute,
  getLeaveTypesRoute,
  getPayRunCalendarsPayRunCalendarIDRoute,
  getPayRunCalendarsRoute,
  getPayRunsPayRunIDRoute,
  getPayRunsRoute,
  getPayslipsPayslipIDRoute,
  getPayslipsRoute,
  getReimbursementsReimbursementIDRoute,
  getReimbursementsRoute,
  getSettingsRoute,
  getSettingsTrackingCategoriesRoute,
  getStatutoryLeavesSickStatutorySickLeaveIDRoute,
  getStatutoryLeavesSummaryEmployeeIDRoute,
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postBenefitsRoute,
  postDeductionsRoute,
  postEarningsRatesRoute,
  postEmployeesEmployeeIDEmploymentRoute,
  postEmployeesEmployeeIDLeaveRoute,
  postEmployeesEmployeeIDLeaveTypesRoute,
  postEmployeesEmployeeIDPaymentMethodsRoute,
  postEmployeesEmployeeIDPaytemplateearningsRoute,
  postEmployeesEmployeeIDPayTemplatesEarningsRoute,
  postEmployeesEmployeeIDSalaryAndWagesRoute,
  postEmployeesEmployeeIDUkopeningbalancesRoute,
  postEmployeesRoute,
  postLeaveTypesRoute,
  postPayRunCalendarsRoute,
  postReimbursementsRoute,
  postStatutoryLeavesSickRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDApproveRoute,
  postTimesheetsTimesheetIDLinesRoute,
  postTimesheetsTimesheetIDRevertToDraftRoute,
  putEmployeesEmployeeIDLeaveLeaveIDRoute,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  putEmployeesEmployeeIDRoute,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  putEmployeesEmployeeIDUkopeningbalancesRoute,
  putTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollUkHandler = app
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
  .openapi(getStatutoryLeavesSummaryEmployeeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatutoryLeavesSickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatutoryLeavesSickStatutorySickLeaveIDRoute, (c) => {
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
  .openapi(getBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBenefitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeductionsDeductionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEarningsRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsRatesEarningsRateIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeaveTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeaveTypesLeaveTypeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReimbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReimbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReimbursementsReimbursementIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimesheetsTimesheetIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimesheetsTimesheetIDRevertToDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimesheetsTimesheetIDLinesTimesheetLineIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunCalendarsPayRunCalendarIDRoute, (c) => {
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
  .openapi(getPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayslipsPayslipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTrackingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
