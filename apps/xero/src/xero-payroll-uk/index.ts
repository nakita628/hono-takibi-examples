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
} from './routes'
import {
  deleteEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  deleteEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  deleteEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  deleteTimesheetsTimesheetIDLinesTimesheetLineIDRouteHandler,
  deleteTimesheetsTimesheetIDRouteHandler,
  getBenefitsIdRouteHandler,
  getBenefitsRouteHandler,
  getDeductionsDeductionIdRouteHandler,
  getDeductionsRouteHandler,
  getEarningsOrdersIdRouteHandler,
  getEarningsOrdersRouteHandler,
  getEarningsRatesEarningsRateIDRouteHandler,
  getEarningsRatesRouteHandler,
  getEmployeesEmployeeIDLeaveBalancesRouteHandler,
  getEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  getEmployeesEmployeeIDLeavePeriodsRouteHandler,
  getEmployeesEmployeeIDLeaveRouteHandler,
  getEmployeesEmployeeIDLeaveTypesRouteHandler,
  getEmployeesEmployeeIDPaymentMethodsRouteHandler,
  getEmployeesEmployeeIDPayTemplatesRouteHandler,
  getEmployeesEmployeeIDRouteHandler,
  getEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  getEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  getEmployeesEmployeeIDStatutoryLeaveBalanceRouteHandler,
  getEmployeesEmployeeIDTaxRouteHandler,
  getEmployeesEmployeeIDUkopeningbalancesRouteHandler,
  getEmployeesRouteHandler,
  getLeaveTypesLeaveTypeIDRouteHandler,
  getLeaveTypesRouteHandler,
  getPayRunCalendarsPayRunCalendarIDRouteHandler,
  getPayRunCalendarsRouteHandler,
  getPayRunsPayRunIDRouteHandler,
  getPayRunsRouteHandler,
  getPayslipsPayslipIDRouteHandler,
  getPayslipsRouteHandler,
  getReimbursementsReimbursementIDRouteHandler,
  getReimbursementsRouteHandler,
  getSettingsRouteHandler,
  getSettingsTrackingCategoriesRouteHandler,
  getStatutoryLeavesSickStatutorySickLeaveIDRouteHandler,
  getStatutoryLeavesSummaryEmployeeIDRouteHandler,
  getTimesheetsRouteHandler,
  getTimesheetsTimesheetIDRouteHandler,
  postBenefitsRouteHandler,
  postDeductionsRouteHandler,
  postEarningsRatesRouteHandler,
  postEmployeesEmployeeIDEmploymentRouteHandler,
  postEmployeesEmployeeIDLeaveRouteHandler,
  postEmployeesEmployeeIDLeaveTypesRouteHandler,
  postEmployeesEmployeeIDPaymentMethodsRouteHandler,
  postEmployeesEmployeeIDPaytemplateearningsRouteHandler,
  postEmployeesEmployeeIDPayTemplatesEarningsRouteHandler,
  postEmployeesEmployeeIDSalaryAndWagesRouteHandler,
  postEmployeesEmployeeIDUkopeningbalancesRouteHandler,
  postEmployeesRouteHandler,
  postLeaveTypesRouteHandler,
  postPayRunCalendarsRouteHandler,
  postReimbursementsRouteHandler,
  postStatutoryLeavesSickRouteHandler,
  postTimesheetsRouteHandler,
  postTimesheetsTimesheetIDApproveRouteHandler,
  postTimesheetsTimesheetIDLinesRouteHandler,
  postTimesheetsTimesheetIDRevertToDraftRouteHandler,
  putEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  putEmployeesEmployeeIDPayTemplatesEarningsPayTemplateEarningIDRouteHandler,
  putEmployeesEmployeeIDRouteHandler,
  putEmployeesEmployeeIDSalaryAndWagesSalaryAndWagesIDRouteHandler,
  putEmployeesEmployeeIDUkopeningbalancesRouteHandler,
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
  .openapi(
    getEmployeesEmployeeIDUkopeningbalancesRoute,
    getEmployeesEmployeeIDUkopeningbalancesRouteHandler,
  )
  .openapi(
    postEmployeesEmployeeIDUkopeningbalancesRoute,
    postEmployeesEmployeeIDUkopeningbalancesRouteHandler,
  )
  .openapi(
    putEmployeesEmployeeIDUkopeningbalancesRoute,
    putEmployeesEmployeeIDUkopeningbalancesRouteHandler,
  )
  .openapi(getEmployeesEmployeeIDLeaveRoute, getEmployeesEmployeeIDLeaveRouteHandler)
  .openapi(postEmployeesEmployeeIDLeaveRoute, postEmployeesEmployeeIDLeaveRouteHandler)
  .openapi(getEmployeesEmployeeIDLeaveLeaveIDRoute, getEmployeesEmployeeIDLeaveLeaveIDRouteHandler)
  .openapi(putEmployeesEmployeeIDLeaveLeaveIDRoute, putEmployeesEmployeeIDLeaveLeaveIDRouteHandler)
  .openapi(
    deleteEmployeesEmployeeIDLeaveLeaveIDRoute,
    deleteEmployeesEmployeeIDLeaveLeaveIDRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDLeaveBalancesRoute,
    getEmployeesEmployeeIDLeaveBalancesRouteHandler,
  )
  .openapi(
    getEmployeesEmployeeIDStatutoryLeaveBalanceRoute,
    getEmployeesEmployeeIDStatutoryLeaveBalanceRouteHandler,
  )
  .openapi(
    getStatutoryLeavesSummaryEmployeeIDRoute,
    getStatutoryLeavesSummaryEmployeeIDRouteHandler,
  )
  .openapi(postStatutoryLeavesSickRoute, postStatutoryLeavesSickRouteHandler)
  .openapi(
    getStatutoryLeavesSickStatutorySickLeaveIDRoute,
    getStatutoryLeavesSickStatutorySickLeaveIDRouteHandler,
  )
  .openapi(getEmployeesEmployeeIDLeavePeriodsRoute, getEmployeesEmployeeIDLeavePeriodsRouteHandler)
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
    postEmployeesEmployeeIDPaytemplateearningsRoute,
    postEmployeesEmployeeIDPaytemplateearningsRouteHandler,
  )
  .openapi(getBenefitsRoute, getBenefitsRouteHandler)
  .openapi(postBenefitsRoute, postBenefitsRouteHandler)
  .openapi(getBenefitsIdRoute, getBenefitsIdRouteHandler)
  .openapi(getDeductionsRoute, getDeductionsRouteHandler)
  .openapi(postDeductionsRoute, postDeductionsRouteHandler)
  .openapi(getDeductionsDeductionIdRoute, getDeductionsDeductionIdRouteHandler)
  .openapi(getEarningsOrdersRoute, getEarningsOrdersRouteHandler)
  .openapi(getEarningsOrdersIdRoute, getEarningsOrdersIdRouteHandler)
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
  .openapi(getPayRunCalendarsPayRunCalendarIDRoute, getPayRunCalendarsPayRunCalendarIDRouteHandler)
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
  .openapi(getPayRunsPayRunIDRoute, getPayRunsPayRunIDRouteHandler)
  .openapi(getPayslipsRoute, getPayslipsRouteHandler)
  .openapi(getPayslipsPayslipIDRoute, getPayslipsPayslipIDRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(getSettingsTrackingCategoriesRoute, getSettingsTrackingCategoriesRouteHandler)

export default app
