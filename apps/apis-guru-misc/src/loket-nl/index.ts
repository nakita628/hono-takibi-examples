import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abpFundsHandler,
  absenceHandler,
  absenceProgressHandler,
  achmeaHandler,
  activateEmployeeProfileHandler,
  actualsHandler,
  addressHandler,
  administrationHandler,
  announcementHandler,
  aowDateHandler,
  apgPensionDeclarationHandler,
  applicationHandler,
  applicationsetsHandler,
  assessmentHandler,
  attachmentOfEarningsHandler,
  auditTrailHandler,
  auditTrailPayrollRunHandler,
  authorizationSetsHandler,
  authorizationsHandler,
  baseForCalculationHandler,
  baseForEmploymentFundCalculationHandler,
  benefitInKindHandler,
  benefitInKindTypeHandler,
  benefitsAndDeductionsHandler,
  billableItemHandler,
  billableItemsHandler,
  calendarHandler,
  chamberOfCommerceHandler,
  changeAddressRequestHandler,
  changeContactinformationRequestHandler,
  childHandler,
  collectiveBenefitsAndDeductionsHandler,
  collectiveLeaveHandler,
  collectiveWageHandler,
  companyCarHandler,
  conceptEmployeeDossierHandler,
  conceptEmployeeHandler,
  conceptEmployeeSelfServiceHandler,
  contactHandler,
  contactHistoryHandler,
  contractCodeHandler,
  costPerHourHandler,
  createEmploymentHandler,
  customFieldHandler,
  customHolidayHandler,
  customNotificationHandler,
  dashboardLicensesHandler,
  dataNewBusinessHandler,
  declarationsAttachmentsHandler,
  declarationsHandler,
  departmentsHandler,
  deviatingAWFContributionHandler,
  deviatingHourlyWageHandler,
  documentManagementHandler,
  documentTemplateHandler,
  downloadRequestHandler,
  educationFurtherIndicationHandler,
  educationHandler,
  educationTypeHandler,
  emailIdentitiesHandler,
  emailtemplatesHandler,
  emailTemplatesHandler,
  employeeBenefitsHandler,
  employeeCustomFieldHandler,
  employeeHandler,
  employeeNotesHandler,
  employeeSelfServiceHandler,
  employerDashboardHandler,
  employerDossierHandler,
  employerHandler,
  employerNotesHandler,
  employerUserAuthorizationsHandler,
  employerUserHandler,
  employerUserNotificationSettingsHandler,
  employmentCustomFieldHandler,
  employmentDossierHandler,
  employmentFundsHandler,
  employmentHandler,
  employmentNotesHandler,
  employmentTemplateHandler,
  externalTenantEmployerUserHandler,
  externalTenantHandler,
  externalTenantProviderUserHandler,
  fiscalCompanyCarHandler,
  fiscalPropertiesHandler,
  functionsHandler,
  generateDocumentHandler,
  healthcareInsuranceActHandler,
  importHandler,
  initialisePayrollPeriodHandler,
  initiatePayrollRunHandler,
  initiatePayrollTaxReturnHandler,
  journalAllocationHandler,
  journalRunHandler,
  journalRunOverviewHandler,
  journalRunResultsHandler,
  lastModifiedVersionNumbersHandler,
  leaveBalanceHandler,
  leaveHandler,
  leavePolicyAndEmploymentLinksHandler,
  leavePolicyHandler,
  leaveRequestHandler,
  leaveTypesHandler,
  linkedDepartmentsHandler,
  linkedEmployersHandler,
  mdvNotificationsHandler,
  modulesHandler,
  nationalHolidayHandler,
  notificationHandler,
  notificationSetsHandler,
  occupationalDisabilityHandler,
  organizationalEntityHandler,
  otherPayrollVariablesHandler,
  partnerHandler,
  paygradeHandler,
  paymentInformationHandler,
  paymentInformationNonSEPAHandler,
  paymentInformationSeparatePaymentsHandler,
  payrollAdministrationHandler,
  payrollAdministrationProcessOverviewHandler,
  payrollAdministrationReportsHandler,
  payrollComponentSetHandler,
  payrollComponentsHandler,
  payrollPeriodDataHandler,
  payrollPeriodDataOnAdministrationLevelHandler,
  payrollPeriodsHandler,
  payrollProcessStatusHandler,
  payrollResultsHandler,
  payrollRunDownloadsHandler,
  payrollRunHandler,
  payrollRunNotesHandler,
  payrollRunResultsHandler,
  payrollSimulatorHandler,
  payrollTaxReturnByMessageReferenceHandler,
  payrollTaxReturnDownloadsHandler,
  payrollTaxReturnHandler,
  payrollTaxReturnResponseMessageHandler,
  payslipHandler,
  pensionBenefitHandler,
  periodReadyForPayrollHandler,
  preboardingTrajectoryHandler,
  proformaHandler,
  protectedEarningsHandler,
  providerHandler,
  providerLeavePolicyHandler,
  qwoaterHandler,
  reviewPayrollRunHandler,
  signDocumentHandler,
  socialSecurityBenefitsHandler,
  socialSecurityHandler,
  transitionCompensationHandler,
  undoPayrollRunHandler,
  upaPensionDeclarationHandler,
  userFilterSettingsHandler,
  userHandler,
  wachtgeldHandler,
  wageHandler,
  wageProjectionHandler,
  wageProposalHandler,
  workflowsHandler,
  workflowTriggerMappingHandler,
  workingHoursHandler,
  yearEndStatementAtAdministrationLevelHandler,
  yearEndStatementHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', achmeaHandler)
  .route('/', aowDateHandler)
  .route('/', applicationHandler)
  .route('/', chamberOfCommerceHandler)
  .route('/', dataNewBusinessHandler)
  .route('/', addressHandler)
  .route('/', providerHandler)
  .route('/', applicationsetsHandler)
  .route('/', authorizationSetsHandler)
  .route('/', emailIdentitiesHandler)
  .route('/', employerHandler)
  .route('/', announcementHandler)
  .route('/', benefitInKindTypeHandler)
  .route('/', importHandler)
  .route('/', paygradeHandler)
  .route('/', conceptEmployeeHandler)
  .route('/', assessmentHandler)
  .route('/', conceptEmployeeDossierHandler)
  .route('/', signDocumentHandler)
  .route('/', generateDocumentHandler)
  .route('/', preboardingTrajectoryHandler)
  .route('/', conceptEmployeeSelfServiceHandler)
  .route('/', contractCodeHandler)
  .route('/', customFieldHandler)
  .route('/', customHolidayHandler)
  .route('/', departmentsHandler)
  .route('/', educationFurtherIndicationHandler)
  .route('/', educationTypeHandler)
  .route('/', contactHistoryHandler)
  .route('/', absenceProgressHandler)
  .route('/', absenceHandler)
  .route('/', childHandler)
  .route('/', contactHandler)
  .route('/', employeeCustomFieldHandler)
  .route('/', educationHandler)
  .route('/', wageProposalHandler)
  .route('/', abpFundsHandler)
  .route('/', attachmentOfEarningsHandler)
  .route('/', baseForCalculationHandler)
  .route('/', baseForEmploymentFundCalculationHandler)
  .route('/', benefitsAndDeductionsHandler)
  .route('/', benefitInKindHandler)
  .route('/', companyCarHandler)
  .route('/', costPerHourHandler)
  .route('/', employmentCustomFieldHandler)
  .route('/', customNotificationHandler)
  .route('/', declarationsHandler)
  .route('/', declarationsAttachmentsHandler)
  .route('/', deviatingAWFContributionHandler)
  .route('/', deviatingHourlyWageHandler)
  .route('/', employmentFundsHandler)
  .route('/', fiscalCompanyCarHandler)
  .route('/', fiscalPropertiesHandler)
  .route('/', healthcareInsuranceActHandler)
  .route('/', journalAllocationHandler)
  .route('/', leaveHandler)
  .route('/', leaveRequestHandler)
  .route('/', employmentNotesHandler)
  .route('/', organizationalEntityHandler)
  .route('/', otherPayrollVariablesHandler)
  .route('/', paymentInformationNonSEPAHandler)
  .route('/', paymentInformationHandler)
  .route('/', paymentInformationSeparatePaymentsHandler)
  .route('/', payrollPeriodDataHandler)
  .route('/', pensionBenefitHandler)
  .route('/', protectedEarningsHandler)
  .route('/', socialSecurityBenefitsHandler)
  .route('/', socialSecurityHandler)
  .route('/', wachtgeldHandler)
  .route('/', wageHandler)
  .route('/', workingHoursHandler)
  .route('/', employmentHandler)
  .route('/', employmentDossierHandler)
  .route('/', activateEmployeeProfileHandler)
  .route('/', leaveBalanceHandler)
  .route('/', leavePolicyAndEmploymentLinksHandler)
  .route('/', payrollSimulatorHandler)
  .route('/', payslipHandler)
  .route('/', createEmploymentHandler)
  .route('/', transitionCompensationHandler)
  .route('/', wageProjectionHandler)
  .route('/', yearEndStatementHandler)
  .route('/', employeeNotesHandler)
  .route('/', partnerHandler)
  .route('/', employeeSelfServiceHandler)
  .route('/', employeeHandler)
  .route('/', employeeBenefitsHandler)
  .route('/', changeAddressRequestHandler)
  .route('/', changeContactinformationRequestHandler)
  .route('/', occupationalDisabilityHandler)
  .route('/', functionsHandler)
  .route('/', lastModifiedVersionNumbersHandler)
  .route('/', leavePolicyHandler)
  .route('/', employerNotesHandler)
  .route('/', notificationHandler)
  .route('/', mdvNotificationsHandler)
  .route('/', apgPensionDeclarationHandler)
  .route('/', journalRunHandler)
  .route('/', journalRunResultsHandler)
  .route('/', journalRunOverviewHandler)
  .route('/', reviewPayrollRunHandler)
  .route('/', payrollRunNotesHandler)
  .route('/', payrollRunDownloadsHandler)
  .route('/', payrollRunHandler)
  .route('/', payrollRunResultsHandler)
  .route('/', undoPayrollRunHandler)
  .route('/', payrollTaxReturnHandler)
  .route('/', payrollTaxReturnByMessageReferenceHandler)
  .route('/', payrollTaxReturnDownloadsHandler)
  .route('/', payrollTaxReturnResponseMessageHandler)
  .route('/', upaPensionDeclarationHandler)
  .route('/', payrollAdministrationReportsHandler)
  .route('/', auditTrailHandler)
  .route('/', payrollComponentSetHandler)
  .route('/', auditTrailPayrollRunHandler)
  .route('/', payrollPeriodDataOnAdministrationLevelHandler)
  .route('/', payrollComponentsHandler)
  .route('/', payrollPeriodsHandler)
  .route('/', payrollResultsHandler)
  .route('/', initialisePayrollPeriodHandler)
  .route('/', payrollAdministrationProcessOverviewHandler)
  .route('/', initiatePayrollRunHandler)
  .route('/', initiatePayrollTaxReturnHandler)
  .route('/', periodReadyForPayrollHandler)
  .route('/', yearEndStatementAtAdministrationLevelHandler)
  .route('/', downloadRequestHandler)
  .route('/', externalTenantEmployerUserHandler)
  .route('/', employerUserHandler)
  .route('/', linkedEmployersHandler)
  .route('/', userHandler)
  .route('/', employerUserNotificationSettingsHandler)
  .route('/', workflowsHandler)
  .route('/', workflowTriggerMappingHandler)
  .route('/', actualsHandler)
  .route('/', administrationHandler)
  .route('/', authorizationsHandler)
  .route('/', billableItemHandler)
  .route('/', employerDashboardHandler)
  .route('/', dashboardLicensesHandler)
  .route('/', employerDossierHandler)
  .route('/', documentManagementHandler)
  .route('/', documentTemplateHandler)
  .route('/', emailTemplatesHandler)
  .route('/', collectiveBenefitsAndDeductionsHandler)
  .route('/', calendarHandler)
  .route('/', collectiveWageHandler)
  .route('/', employmentTemplateHandler)
  .route('/', externalTenantHandler)
  .route('/', collectiveLeaveHandler)
  .route('/', leaveTypesHandler)
  .route('/', modulesHandler)
  .route('/', nationalHolidayHandler)
  .route('/', payrollAdministrationHandler)
  .route('/', proformaHandler)
  .route('/', linkedDepartmentsHandler)
  .route('/', employerUserAuthorizationsHandler)
  .route('/', providerLeavePolicyHandler)
  .route('/', notificationSetsHandler)
  .route('/', externalTenantProviderUserHandler)
  .route('/', billableItemsHandler)
  .route('/', emailtemplatesHandler)
  .route('/', payrollProcessStatusHandler)
  .route('/', qwoaterHandler)
  .route('/', userFilterSettingsHandler)

export default app
