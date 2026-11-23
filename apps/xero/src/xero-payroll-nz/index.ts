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
} from './routes'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRouteHandler,
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  deleteTimesheetsTimesheetIDRouteHandler,
  getDeductionsDeductionIdRouteHandler,
  getDeductionsRouteHandler,
  getEarningsRatesEarningsRateIDRouteHandler,
  getEarningsRatesRouteHandler,
  getEmployeesEmployeeIDLeaveBalancesRouteHandler,
  getEmployeesEmployeeIDLeavePeriodsRouteHandler,
  getEmployeesEmployeeIDLeaveRouteHandler,
  getEmployeesEmployeeIDLeaveTypesRouteHandler,
  getEmployeesEmployeeIDOpeningBalancesRouteHandler,
  getEmployeesEmployeeIDPaymentMethodsRouteHandler,
  getEmployeesEmployeeIDPayTemplatesRouteHandler,
  getEmployeesEmployeeIDRouteHandler,
  getEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  getEmployeesEmployeeIDTaxRouteHandler,
  getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRouteHandler,
  getEmployeesEmployeeIDWorkingPatternsRouteHandler,
  getEmployeesRouteHandler,
  getLeaveTypesLeaveTypeIDRouteHandler,
  getLeaveTypesRouteHandler,
  getPayRunCalendarsPayrollCalendarIDRouteHandler,
  getPayRunCalendarsRouteHandler,
  getPayRunsPayRunIDRouteHandler,
  getPayRunsRouteHandler,
  getPaySlipsPaySlipIDRouteHandler,
  getPaySlipsRouteHandler,
  getReimbursementsReimbursementIDRouteHandler,
  getReimbursementsRouteHandler,
  getSettingsRouteHandler,
  getSettingsTrackingCategoriesRouteHandler,
  getStatutoryDeductionsIdRouteHandler,
  getStatutoryDeductionsRouteHandler,
  getSuperannuationsRouteHandler,
  getSuperannuationsSuperannuationIDRouteHandler,
  getTimesheetsRouteHandler,
  getTimesheetsTimesheetIDRouteHandler,
  postDeductionsRouteHandler,
  postEarningsRatesRouteHandler,
  postEmployeesEmployeeIDEmploymentRouteHandler,
  postEmployeesEmployeeIDLeaveRouteHandler,
  postEmployeesEmployeeIDLeaveSetupRouteHandler,
  postEmployeesEmployeeIDLeaveTypesRouteHandler,
  postEmployeesEmployeeIDOpeningBalancesRouteHandler,
  postEmployeesEmployeeIDPaymentMethodsRouteHandler,
  postEmployeesEmployeeIDPayTemplateEarningsRouteHandler,
  postEmployeesEmployeeIDPayTemplatesEarningsRouteHandler,
  postEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  postEmployeesEmployeeIDTaxRouteHandler,
  postEmployeesEmployeeIDWorkingPatternsRouteHandler,
  postEmployeesRouteHandler,
  postLeaveTypesRouteHandler,
  postPayRunCalendarsRouteHandler,
  postPayRunsRouteHandler,
  postReimbursementsRouteHandler,
  postSuperannuationsRouteHandler,
  postTimesheetsRouteHandler,
  postTimesheetsTimesheetIDApproveRouteHandler,
  postTimesheetsTimesheetIDLinesRouteHandler,
  postTimesheetsTimesheetIDRevertToDraftRouteHandler,
  putEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  putEmployeesEmployeeIDRouteHandler,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  putPaySlipsPaySlipIDRouteHandler,
  putTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEmployeesRoute, getEmployeesRouteHandler)
  .openapi(postEmployeesRoute, postEmployeesRouteHandler)
  .openapi(getEmployeesEmployeeIDRoute, getEmployeesEmployeeIDRouteHandler)
  .openapi(putEmployeesEmployeeIDRoute, putEmployeesEmployeeIDRouteHandler)
  .openapi(postEmployeesEmployeeIDEmploymentRoute, postEmployeesEmployeeIDEmploymentRouteHandler)
  .openapi(getEmployeesEmployeeIDTaxRoute, getEmployeesEmployeeIDTaxRouteHandler)
  .openapi(postEmployeesEmployeeIDTaxRoute, postEmployeesEmployeeIDTaxRouteHandler)
  .openapi(
    getEmployeesEmployeeIDOpeningBalancesRoute,
    getEmployeesEmployeeIDOpeningBalancesRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDOpeningBalancesRoute,
    postEmployeesEmployeeIDOpeningBalancesRouteHandler,
  )
  .openapi(getEmployeesEmployeeIDLeaveRoute, getEmployeesEmployeeIDLeaveRouteHandler)
  .openapi(postEmployeesEmployeeIDLeaveRoute, postEmployeesEmployeeIDLeaveRouteHandler)
  .openapi(putEmployeesEmployeeIDLeaveLeaveIDRoute, putEmployeesEmployeeIDLeaveLeaveIDRouteHandler)
  .openapi(
    deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
    deleteEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDLeaveBalancesRoute,
    getEmployeesEmployeeIDLeaveBalancesRouteHandler,
  )
  .openapi(getEmployeesEmployeeIDLeavePeriodsRoute, getEmployeesEmployeeIDLeavePeriodsRouteHandler)
  .openapi(postEmployeesEmployeeIDLeaveSetupRoute, postEmployeesEmployeeIDLeaveSetupRouteHandler)
  .openapi(getEmployeesEmployeeIDLeaveTypesRoute, getEmployeesEmployeeIDLeaveTypesRouteHandler)
  .openapi(postEmployeesEmployeeIDLeaveTypesRoute, postEmployeesEmployeeIDLeaveTypesRouteHandler)
  .openapi(
    getEmployeesEmployeeIDPaymentMethodsRoute,
    getEmployeesEmployeeIDPaymentMethodsRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDPaymentMethodsRoute,
    postEmployeesEmployeeIDPaymentMethodsRouteHandler,
  )
  .openapi(getEmployeesEmployeeIDPayTemplatesRoute, getEmployeesEmployeeIDPayTemplatesRouteHandler)
  .openapi(
    postEmployeesEmployeeIDPayTemplatesEarningsRoute,
    postEmployeesEmployeeIDPayTemplatesEarningsRouteHandler,
  )
  .openapi(
    putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
    putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  )
  .openapi(
    deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRoute,
    deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDPayTemplateEarningsRoute,
    postEmployeesEmployeeIDPayTemplateEarningsRouteHandler,
  )
  .openapi(getDeductionsRoute, getDeductionsRouteHandler)
  .openapi(postDeductionsRoute, postDeductionsRouteHandler)
  .openapi(getDeductionsDeductionIdRoute, getDeductionsDeductionIdRouteHandler)
  .openapi(getStatutoryDeductionsRoute, getStatutoryDeductionsRouteHandler)
  .openapi(getStatutoryDeductionsIdRoute, getStatutoryDeductionsIdRouteHandler)
  .openapi(getSuperannuationsRoute, getSuperannuationsRouteHandler)
  .openapi(postSuperannuationsRoute, postSuperannuationsRouteHandler)
  .openapi(getSuperannuationsSuperannuationIDRoute, getSuperannuationsSuperannuationIDRouteHandler)
  .openapi(getEarningsRatesRoute, getEarningsRatesRouteHandler)
  .openapi(postEarningsRatesRoute, postEarningsRatesRouteHandler)
  .openapi(getEarningsRatesEarningsRateIDRoute, getEarningsRatesEarningsRateIDRouteHandler)
  .openapi(getLeaveTypesRoute, getLeaveTypesRouteHandler)
  .openapi(postLeaveTypesRoute, postLeaveTypesRouteHandler)
  .openapi(getLeaveTypesLeaveTypeIDRoute, getLeaveTypesLeaveTypeIDRouteHandler)
  .openapi(getReimbursementsRoute, getReimbursementsRouteHandler)
  .openapi(postReimbursementsRoute, postReimbursementsRouteHandler)
  .openapi(getReimbursementsReimbursementIDRoute, getReimbursementsReimbursementIDRouteHandler)
  .openapi(getTimesheetsRoute, getTimesheetsRouteHandler)
  .openapi(postTimesheetsRoute, postTimesheetsRouteHandler)
  .openapi(getTimesheetsTimesheetIDRoute, getTimesheetsTimesheetIDRouteHandler)
  .openapi(deleteTimesheetsTimesheetIDRoute, deleteTimesheetsTimesheetIDRouteHandler)
  .openapi(postTimesheetsTimesheetIDLinesRoute, postTimesheetsTimesheetIDLinesRouteHandler)
  .openapi(postTimesheetsTimesheetIDApproveRoute, postTimesheetsTimesheetIDApproveRouteHandler)
  .openapi(
    postTimesheetsTimesheetIDRevertToDraftRoute,
    postTimesheetsTimesheetIDRevertToDraftRouteHandler,
  )
  .openapi(
    putTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
    putTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  )
  .openapi(
    deleteTimesheetsTimesheetIDLinesTimesheetLineIDRoute,
    deleteTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  )
  .openapi(getPayRunCalendarsRoute, getPayRunCalendarsRouteHandler)
  .openapi(postPayRunCalendarsRoute, postPayRunCalendarsRouteHandler)
  .openapi(
    getPayRunCalendarsPayrollCalendarIDRoute,
    getPayRunCalendarsPayrollCalendarIDRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDSalaryAndWagesRoute,
    getEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDSalaryAndWagesRoute,
    postEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
    getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  )
  .openapi(
    putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
    putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  )
  .openapi(
    deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRoute,
    deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  )
  .openapi(getPayRunsRoute, getPayRunsRouteHandler)
  .openapi(postPayRunsRoute, postPayRunsRouteHandler)
  .openapi(getPayRunsPayRunIDRoute, getPayRunsPayRunIDRouteHandler)
  .openapi(getPaySlipsRoute, getPaySlipsRouteHandler)
  .openapi(getPaySlipsPaySlipIDRoute, getPaySlipsPaySlipIDRouteHandler)
  .openapi(putPaySlipsPaySlipIDRoute, putPaySlipsPaySlipIDRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(getSettingsTrackingCategoriesRoute, getSettingsTrackingCategoriesRouteHandler)
  .openapi(
    getEmployeesEmployeeIDWorkingPatternsRoute,
    getEmployeesEmployeeIDWorkingPatternsRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDWorkingPatternsRoute,
    postEmployeesEmployeeIDWorkingPatternsRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute,
    getEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRouteHandler,
  )
  .openapi(
    deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRoute,
    deleteEmployeesEmployeeIDWorkingPatternsEmployeeWorkingPatternIDRouteHandler,
  )

export default app
