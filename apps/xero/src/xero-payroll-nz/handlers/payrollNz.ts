import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute,
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
  deleteTimesheetsTimesheetIDRoute,
  getDeductionsDeductionIdRoute,
  getDeductionsRoute,
  getEarningsRatesEarningsRateIDRoute,
  getEarningsRatesRoute,
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
  getLeaveTypesLeaveTypeIDRoute,
  getLeaveTypesRoute,
  getPayRunCalendarsPayrollCalendarIDRoute,
  getPayRunCalendarsRoute,
  getPayRunsPayRunIDRoute,
  getPayRunsRoute,
  getPaySlipsPaySlipIDRoute,
  getPaySlipsRoute,
  getReimbursementsReimbursementIDRoute,
  getReimbursementsRoute,
  getSettingsRoute,
  getSettingsTrackingCategoriesRoute,
  getStatutoryDeductionsIdRoute,
  getStatutoryDeductionsRoute,
  getSuperannuationsRoute,
  getSuperannuationsSuperannuationIDRoute,
  getTimesheetsRoute,
  getTimesheetsTimesheetIDRoute,
  postDeductionsRoute,
  postEarningsRatesRoute,
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
  postLeaveTypesRoute,
  postPayRunCalendarsRoute,
  postPayRunsRoute,
  postReimbursementsRoute,
  postSuperannuationsRoute,
  postTimesheetsRoute,
  postTimesheetsTimesheetIDApproveRoute,
  postTimesheetsTimesheetIDLinesRoute,
  postTimesheetsTimesheetIDRevertToDraftRoute,
  putEmployeesEmployeeIDLeaveLeaveIDRoute,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
  putEmployeesEmployeeIDRoute,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
  putPaySlipsPaySlipIDRoute,
  putTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollNzHandler = app
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
  .openapi(getDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeductionsDeductionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatutoryDeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatutoryDeductionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperannuationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperannuationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperannuationsSuperannuationIDRoute, (c) => {
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
  .openapi(getPayRunCalendarsPayrollCalendarIDRoute, (c) => {
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
  .openapi(postPayRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunsPayRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaySlipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaySlipsPaySlipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaySlipsPaySlipIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTrackingCategoriesRoute, (c) => {
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
