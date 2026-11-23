import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiV1ApprovalRequestsMonthlyAttendancesIdRoute,
  deleteApiV1ApprovalRequestsOvertimeWorksIdRoute,
  deleteApiV1ApprovalRequestsPaidHolidaysIdRoute,
  deleteApiV1ApprovalRequestsSpecialHolidaysIdRoute,
  deleteApiV1ApprovalRequestsWorkTimesIdRoute,
  deleteApiV1EmployeesEmployeeIdAllowanceRulesIdRoute,
  deleteApiV1EmployeesEmployeeIdDeductionRulesIdRoute,
  deleteApiV1EmployeesEmployeeIdWorkRecordsDateRoute,
  deleteApiV1EmployeesIdRoute,
  deleteApiV1GroupsIdRoute,
  deleteApiV1PositionsIdRoute,
  deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute,
  deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute,
  deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute,
  getApiV1AllowancesIdRoute,
  getApiV1AllowancesRoute,
  getApiV1ApprovalFlowRoutesIdRoute,
  getApiV1ApprovalFlowRoutesRoute,
  getApiV1ApprovalRequestsMonthlyAttendancesIdRoute,
  getApiV1ApprovalRequestsMonthlyAttendancesRoute,
  getApiV1ApprovalRequestsOvertimeWorksIdRoute,
  getApiV1ApprovalRequestsOvertimeWorksRoute,
  getApiV1ApprovalRequestsOvertimeWorksSettingRoute,
  getApiV1ApprovalRequestsPaidHolidaysIdRoute,
  getApiV1ApprovalRequestsPaidHolidaysRoute,
  getApiV1ApprovalRequestsSpecialHolidaysIdRoute,
  getApiV1ApprovalRequestsSpecialHolidaysRoute,
  getApiV1ApprovalRequestsWorkTimesIdRoute,
  getApiV1ApprovalRequestsWorkTimesRoute,
  getApiV1BonusesEmployeePayrollStatementsEmployeeIdRoute,
  getApiV1BonusesEmployeePayrollStatementsRoute,
  getApiV1CompaniesCompanyIdEmployeesRoute,
  getApiV1DeductionsIdRoute,
  getApiV1DeductionsRoute,
  getApiV1EmployeeGroupMembershipsRoute,
  getApiV1EmployeesEmployeeIdAllowanceRulesRoute,
  getApiV1EmployeesEmployeeIdAttendanceTagsDateRoute,
  getApiV1EmployeesEmployeeIdAttendanceTagsRoute,
  getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute,
  getApiV1EmployeesEmployeeIdBankAccountRuleRoute,
  getApiV1EmployeesEmployeeIdBasicPayRuleRoute,
  getApiV1EmployeesEmployeeIdDeductionRulesRoute,
  getApiV1EmployeesEmployeeIdDependentRulesRoute,
  getApiV1EmployeesEmployeeIdGroupMembershipsRoute,
  getApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute,
  getApiV1EmployeesEmployeeIdProfileCustomFieldsRoute,
  getApiV1EmployeesEmployeeIdProfileRuleRoute,
  getApiV1EmployeesEmployeeIdSpecialHolidaysRoute,
  getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesRoute,
  getApiV1EmployeesEmployeeIdTimeClocksIdRoute,
  getApiV1EmployeesEmployeeIdTimeClocksRoute,
  getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute,
  getApiV1EmployeesEmployeeIdWorkRecordsDateRoute,
  getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute,
  getApiV1EmployeesIdRoute,
  getApiV1EmployeesRoute,
  getApiV1GroupsRoute,
  getApiV1PositionsRoute,
  getApiV1SalariesEmployeePayrollStatementsEmployeeIdRoute,
  getApiV1SalariesEmployeePayrollStatementsRoute,
  getApiV1UsersMeRoute,
  getApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute,
  getApiV1YearendAdjustmentsYearEmployeesRoute,
  postApiV1AllowancesRoute,
  postApiV1ApprovalRequestsMonthlyAttendancesIdActionsRoute,
  postApiV1ApprovalRequestsMonthlyAttendancesRoute,
  postApiV1ApprovalRequestsOvertimeWorksIdActionsRoute,
  postApiV1ApprovalRequestsOvertimeWorksRoute,
  postApiV1ApprovalRequestsPaidHolidaysIdActionsRoute,
  postApiV1ApprovalRequestsPaidHolidaysRoute,
  postApiV1ApprovalRequestsSpecialHolidaysIdActionsRoute,
  postApiV1ApprovalRequestsSpecialHolidaysRoute,
  postApiV1ApprovalRequestsWorkTimesIdActionsRoute,
  postApiV1ApprovalRequestsWorkTimesRoute,
  postApiV1DeductionsRoute,
  postApiV1EmployeesEmployeeIdTimeClocksRoute,
  postApiV1EmployeesRoute,
  postApiV1GroupsRoute,
  postApiV1PositionsRoute,
  postApiV1YearendAdjustmentsYearHousingLoansEmployeeIdRoute,
  postApiV1YearendAdjustmentsYearInsurancesEmployeeIdRoute,
  putApiV1ApprovalRequestsMonthlyAttendancesIdRoute,
  putApiV1ApprovalRequestsOvertimeWorksIdRoute,
  putApiV1ApprovalRequestsPaidHolidaysIdRoute,
  putApiV1ApprovalRequestsSpecialHolidaysIdRoute,
  putApiV1ApprovalRequestsWorkTimesIdRoute,
  putApiV1EmployeesEmployeeIdAllowanceRulesRoute,
  putApiV1EmployeesEmployeeIdAttendanceTagsDateRoute,
  putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute,
  putApiV1EmployeesEmployeeIdBankAccountRuleRoute,
  putApiV1EmployeesEmployeeIdBasicPayRuleRoute,
  putApiV1EmployeesEmployeeIdDeductionRulesRoute,
  putApiV1EmployeesEmployeeIdDependentRulesBulkUpdateRoute,
  putApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute,
  putApiV1EmployeesEmployeeIdProfileRuleRoute,
  putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute,
  putApiV1EmployeesEmployeeIdWorkRecordsDateRoute,
  putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute,
  putApiV1EmployeesIdRoute,
  putApiV1GroupsIdRoute,
  putApiV1PositionsIdRoute,
  putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkRoute,
  putApiV1YearendAdjustmentsYearDependentsEmployeeIdRoute,
  putApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute,
  putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdRoute,
  putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute,
  putApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute,
  putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdRoute,
  putApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute,
} from '../routes'

export const getApiV1UsersMeRouteHandler: RouteHandler<typeof getApiV1UsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CompaniesCompanyIdEmployeesRouteHandler: RouteHandler<
  typeof getApiV1CompaniesCompanyIdEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesRouteHandler: RouteHandler<typeof getApiV1EmployeesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1EmployeesRouteHandler: RouteHandler<typeof postApiV1EmployeesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesIdRouteHandler: RouteHandler<
  typeof getApiV1EmployeesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesIdRouteHandler: RouteHandler<
  typeof putApiV1EmployeesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EmployeesIdRouteHandler: RouteHandler<
  typeof deleteApiV1EmployeesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdProfileRuleRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdProfileRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdProfileRuleRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdProfileRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdHealthInsuranceRuleRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdHealthInsuranceRuleRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdDependentRulesRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdDependentRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdDependentRulesBulkUpdateRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdDependentRulesBulkUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdBankAccountRuleRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdBankAccountRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdBankAccountRuleRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdBankAccountRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdBasicPayRuleRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdBasicPayRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdBasicPayRuleRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdBasicPayRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdAllowanceRulesRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdAllowanceRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdAllowanceRulesRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdAllowanceRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EmployeesEmployeeIdAllowanceRulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1EmployeesEmployeeIdAllowanceRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdDeductionRulesRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdDeductionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdDeductionRulesRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdDeductionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EmployeesEmployeeIdDeductionRulesIdRouteHandler: RouteHandler<
  typeof deleteApiV1EmployeesEmployeeIdDeductionRulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdProfileCustomFieldsRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdProfileCustomFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdWorkRecordsDateRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdWorkRecordsDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdWorkRecordsDateRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdWorkRecordsDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1EmployeesEmployeeIdWorkRecordsDateRouteHandler: RouteHandler<
  typeof deleteApiV1EmployeesEmployeeIdWorkRecordsDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdTimeClocksRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdTimeClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EmployeesEmployeeIdTimeClocksRouteHandler: RouteHandler<
  typeof postApiV1EmployeesEmployeeIdTimeClocksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdTimeClocksIdRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdTimeClocksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdSpecialHolidaysRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdSpecialHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdAttendanceTagsRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdAttendanceTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdAttendanceTagsDateRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdAttendanceTagsDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1EmployeesEmployeeIdAttendanceTagsDateRouteHandler: RouteHandler<
  typeof putApiV1EmployeesEmployeeIdAttendanceTagsDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SalariesEmployeePayrollStatementsRouteHandler: RouteHandler<
  typeof getApiV1SalariesEmployeePayrollStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SalariesEmployeePayrollStatementsEmployeeIdRouteHandler: RouteHandler<
  typeof getApiV1SalariesEmployeePayrollStatementsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkRouteHandler: RouteHandler<
  typeof putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BonusesEmployeePayrollStatementsRouteHandler: RouteHandler<
  typeof getApiV1BonusesEmployeePayrollStatementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BonusesEmployeePayrollStatementsEmployeeIdRouteHandler: RouteHandler<
  typeof getApiV1BonusesEmployeePayrollStatementsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeeGroupMembershipsRouteHandler: RouteHandler<
  typeof getApiV1EmployeeGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EmployeesEmployeeIdGroupMembershipsRouteHandler: RouteHandler<
  typeof getApiV1EmployeesEmployeeIdGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GroupsRouteHandler: RouteHandler<typeof getApiV1GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1GroupsRouteHandler: RouteHandler<typeof postApiV1GroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1GroupsIdRouteHandler: RouteHandler<typeof putApiV1GroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GroupsIdRouteHandler: RouteHandler<
  typeof deleteApiV1GroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AllowancesRouteHandler: RouteHandler<typeof getApiV1AllowancesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1AllowancesRouteHandler: RouteHandler<
  typeof postApiV1AllowancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AllowancesIdRouteHandler: RouteHandler<
  typeof getApiV1AllowancesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DeductionsRouteHandler: RouteHandler<typeof getApiV1DeductionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1DeductionsRouteHandler: RouteHandler<
  typeof postApiV1DeductionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DeductionsIdRouteHandler: RouteHandler<
  typeof getApiV1DeductionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PositionsRouteHandler: RouteHandler<typeof getApiV1PositionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1PositionsRouteHandler: RouteHandler<typeof postApiV1PositionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1PositionsIdRouteHandler: RouteHandler<
  typeof putApiV1PositionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PositionsIdRouteHandler: RouteHandler<
  typeof deleteApiV1PositionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsMonthlyAttendancesRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsMonthlyAttendancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsMonthlyAttendancesRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsMonthlyAttendancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsMonthlyAttendancesIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsMonthlyAttendancesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ApprovalRequestsMonthlyAttendancesIdRouteHandler: RouteHandler<
  typeof putApiV1ApprovalRequestsMonthlyAttendancesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ApprovalRequestsMonthlyAttendancesIdRouteHandler: RouteHandler<
  typeof deleteApiV1ApprovalRequestsMonthlyAttendancesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsMonthlyAttendancesIdActionsRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsMonthlyAttendancesIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsWorkTimesRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsWorkTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsWorkTimesRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsWorkTimesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsWorkTimesIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsWorkTimesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ApprovalRequestsWorkTimesIdRouteHandler: RouteHandler<
  typeof putApiV1ApprovalRequestsWorkTimesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ApprovalRequestsWorkTimesIdRouteHandler: RouteHandler<
  typeof deleteApiV1ApprovalRequestsWorkTimesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsWorkTimesIdActionsRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsWorkTimesIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsPaidHolidaysRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsPaidHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsPaidHolidaysRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsPaidHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsPaidHolidaysIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsPaidHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ApprovalRequestsPaidHolidaysIdRouteHandler: RouteHandler<
  typeof putApiV1ApprovalRequestsPaidHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ApprovalRequestsPaidHolidaysIdRouteHandler: RouteHandler<
  typeof deleteApiV1ApprovalRequestsPaidHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsPaidHolidaysIdActionsRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsPaidHolidaysIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsSpecialHolidaysRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsSpecialHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsSpecialHolidaysRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsSpecialHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsSpecialHolidaysIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsSpecialHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ApprovalRequestsSpecialHolidaysIdRouteHandler: RouteHandler<
  typeof putApiV1ApprovalRequestsSpecialHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ApprovalRequestsSpecialHolidaysIdRouteHandler: RouteHandler<
  typeof deleteApiV1ApprovalRequestsSpecialHolidaysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsSpecialHolidaysIdActionsRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsSpecialHolidaysIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsOvertimeWorksRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsOvertimeWorksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsOvertimeWorksRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsOvertimeWorksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsOvertimeWorksIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsOvertimeWorksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1ApprovalRequestsOvertimeWorksIdRouteHandler: RouteHandler<
  typeof putApiV1ApprovalRequestsOvertimeWorksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1ApprovalRequestsOvertimeWorksIdRouteHandler: RouteHandler<
  typeof deleteApiV1ApprovalRequestsOvertimeWorksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ApprovalRequestsOvertimeWorksIdActionsRouteHandler: RouteHandler<
  typeof postApiV1ApprovalRequestsOvertimeWorksIdActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalRequestsOvertimeWorksSettingRouteHandler: RouteHandler<
  typeof getApiV1ApprovalRequestsOvertimeWorksSettingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalFlowRoutesRouteHandler: RouteHandler<
  typeof getApiV1ApprovalFlowRoutesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ApprovalFlowRoutesIdRouteHandler: RouteHandler<
  typeof getApiV1ApprovalFlowRoutesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1YearendAdjustmentsYearEmployeesRouteHandler: RouteHandler<
  typeof getApiV1YearendAdjustmentsYearEmployeesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1YearendAdjustmentsYearEmployeesEmployeeIdRouteHandler: RouteHandler<
  typeof getApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearEmployeesEmployeeIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearDependentsEmployeeIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearDependentsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRouteHandler: RouteHandler<
  typeof deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1YearendAdjustmentsYearInsurancesEmployeeIdRouteHandler: RouteHandler<
  typeof postApiV1YearendAdjustmentsYearInsurancesEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRouteHandler: RouteHandler<
  typeof deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1YearendAdjustmentsYearHousingLoansEmployeeIdRouteHandler: RouteHandler<
  typeof postApiV1YearendAdjustmentsYearHousingLoansEmployeeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRouteHandler: RouteHandler<
  typeof putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRouteHandler: RouteHandler<
  typeof deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
