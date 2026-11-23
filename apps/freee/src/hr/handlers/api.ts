import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompaniesCompanyIdEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmployeesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdProfileRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdProfileRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdHealthInsuranceRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdWelfarePensionInsuranceRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdDependentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdDependentRulesBulkUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdBankAccountRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdBankAccountRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdBasicPayRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdBasicPayRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdAllowanceRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdAllowanceRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmployeesEmployeeIdAllowanceRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdDeductionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdDeductionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmployeesEmployeeIdDeductionRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdProfileCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdWorkRecordsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdWorkRecordsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1EmployeesEmployeeIdWorkRecordsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdWorkRecordSummariesYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdTimeClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EmployeesEmployeeIdTimeClocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdTimeClocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdTimeClocksAvailableTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdSpecialHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdAttendanceTagSummariesYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdAttendanceTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdAttendanceTagsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1EmployeesEmployeeIdAttendanceTagsDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SalariesEmployeePayrollStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SalariesEmployeePayrollStatementsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SalariesEmployeePayrollStatementsEmployeeIdRemarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BonusesEmployeePayrollStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BonusesEmployeePayrollStatementsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeeGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EmployeesEmployeeIdGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1GroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AllowancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AllowancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AllowancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DeductionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DeductionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PositionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PositionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsMonthlyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsMonthlyAttendancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsMonthlyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApprovalRequestsMonthlyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApprovalRequestsMonthlyAttendancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsMonthlyAttendancesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsWorkTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsWorkTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsWorkTimesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApprovalRequestsWorkTimesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApprovalRequestsWorkTimesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsWorkTimesIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsPaidHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsPaidHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsPaidHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApprovalRequestsPaidHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApprovalRequestsPaidHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsPaidHolidaysIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsSpecialHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsSpecialHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsSpecialHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApprovalRequestsSpecialHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApprovalRequestsSpecialHolidaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsSpecialHolidaysIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsOvertimeWorksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsOvertimeWorksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsOvertimeWorksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApprovalRequestsOvertimeWorksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApprovalRequestsOvertimeWorksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApprovalRequestsOvertimeWorksIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalRequestsOvertimeWorksSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalFlowRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApprovalFlowRoutesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1YearendAdjustmentsYearEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearPayrollAndBonusEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearDependentsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1YearendAdjustmentsYearPreviousJobsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1YearendAdjustmentsYearInsurancesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1YearendAdjustmentsYearInsurancesEmployeeIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearHousingLoanDeductionsEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1YearendAdjustmentsYearHousingLoansEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1YearendAdjustmentsYearHousingLoansEmployeeIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
