import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiAmendmentsIdRoute,
  deleteApiAppointmentProfilesIdRoute,
  deleteApiAppointmentsIdRoute,
  deleteApiAppointmentTemplatesIdRoute,
  deleteApiDocumentsIdRoute,
  deleteApiLabDocumentsIdRoute,
  deleteApiLabOrdersIdRoute,
  deleteApiLabResultsIdRoute,
  deleteApiLabTestsIdRoute,
  deleteApiLineItemsIdRoute,
  deleteApiMessagesIdRoute,
  deleteApiPatientLabResultsIdRoute,
  deleteApiPatientsIdOnpatientAccessRoute,
  deleteApiPatientsIdRoute,
  deleteApiPatientsSummaryIdRoute,
  deleteApiReminderProfilesIdRoute,
  deleteApiSublabsIdRoute,
  getApiAllergiesIdRoute,
  getApiAllergiesRoute,
  getApiAmendmentsIdRoute,
  getApiAmendmentsRoute,
  getApiAppointmentProfilesIdRoute,
  getApiAppointmentProfilesRoute,
  getApiAppointmentsIdRoute,
  getApiAppointmentsRoute,
  getApiAppointmentTemplatesIdRoute,
  getApiAppointmentTemplatesRoute,
  getApiBillingProfilesIdRoute,
  getApiBillingProfilesRoute,
  getApiCarePlansIdRoute,
  getApiCarePlansRoute,
  getApiCareTeamMembersIdRoute,
  getApiCareTeamMembersRoute,
  getApiClaimBillingNotesIdRoute,
  getApiClaimBillingNotesRoute,
  getApiClinicalNoteFieldTypesIdRoute,
  getApiClinicalNoteFieldTypesRoute,
  getApiClinicalNoteFieldValuesIdRoute,
  getApiClinicalNoteFieldValuesRoute,
  getApiClinicalNotesIdRoute,
  getApiClinicalNotesRoute,
  getApiClinicalNoteTemplatesIdRoute,
  getApiClinicalNoteTemplatesRoute,
  getApiCommLogsIdRoute,
  getApiCommLogsRoute,
  getApiConsentFormsIdRoute,
  getApiConsentFormsRoute,
  getApiCustomAppointmentFieldsIdRoute,
  getApiCustomAppointmentFieldsRoute,
  getApiCustomDemographicsIdRoute,
  getApiCustomDemographicsRoute,
  getApiCustomInsurancePlanNamesIdRoute,
  getApiCustomInsurancePlanNamesRoute,
  getApiCustomVitalsIdRoute,
  getApiCustomVitalsRoute,
  getApiDoctorsIdRoute,
  getApiDoctorsRoute,
  getApiDocumentsIdRoute,
  getApiDocumentsRoute,
  getApiEligibilityChecksIdRoute,
  getApiEligibilityChecksRoute,
  getApiEobsIdRoute,
  getApiEobsRoute,
  getApiFeeSchedulesIdRoute,
  getApiFeeSchedulesRoute,
  getApiImplantableDevicesIdRoute,
  getApiImplantableDevicesRoute,
  getApiInsurancesIdRoute,
  getApiInsurancesRoute,
  getApiInventoryCategoriesIdRoute,
  getApiInventoryCategoriesRoute,
  getApiInventoryVaccinesIdRoute,
  getApiInventoryVaccinesRoute,
  getApiLabDocumentsIdRoute,
  getApiLabDocumentsRoute,
  getApiLabOrdersIdRoute,
  getApiLabOrdersRoute,
  getApiLabOrdersSummaryIdRoute,
  getApiLabOrdersSummaryRoute,
  getApiLabResultsIdRoute,
  getApiLabResultsRoute,
  getApiLabTestsIdRoute,
  getApiLabTestsRoute,
  getApiLineItemsIdRoute,
  getApiLineItemsRoute,
  getApiMedicationsIdRoute,
  getApiMedicationsRoute,
  getApiMessagesIdRoute,
  getApiMessagesRoute,
  getApiOfficesIdRoute,
  getApiOfficesRoute,
  getApiPatientCommunicationsIdRoute,
  getApiPatientCommunicationsRoute,
  getApiPatientFlagTypesIdRoute,
  getApiPatientFlagTypesRoute,
  getApiPatientInterventionsIdRoute,
  getApiPatientInterventionsRoute,
  getApiPatientLabResultsIdRoute,
  getApiPatientLabResultsRoute,
  getApiPatientMessagesIdRoute,
  getApiPatientMessagesRoute,
  getApiPatientPaymentLogIdRoute,
  getApiPatientPaymentLogRoute,
  getApiPatientPaymentsIdRoute,
  getApiPatientPaymentsRoute,
  getApiPatientPhysicalExamsIdRoute,
  getApiPatientPhysicalExamsRoute,
  getApiPatientRiskAssessmentsIdRoute,
  getApiPatientRiskAssessmentsRoute,
  getApiPatientsIdCcdaRoute,
  getApiPatientsIdOnpatientAccessRoute,
  getApiPatientsIdQrda1Route,
  getApiPatientsIdRoute,
  getApiPatientsRoute,
  getApiPatientsSummaryIdRoute,
  getApiPatientsSummaryRoute,
  getApiPatientVaccineRecordsIdRoute,
  getApiPatientVaccineRecordsRoute,
  getApiPrescriptionMessagesIdRoute,
  getApiPrescriptionMessagesRoute,
  getApiProblemsIdRoute,
  getApiProblemsRoute,
  getApiProceduresIdRoute,
  getApiProceduresRoute,
  getApiReminderProfilesIdRoute,
  getApiReminderProfilesRoute,
  getApiSublabsIdRoute,
  getApiSublabsRoute,
  getApiTaskCategoriesIdRoute,
  getApiTaskCategoriesRoute,
  getApiTaskNotesIdRoute,
  getApiTaskNotesRoute,
  getApiTasksIdRoute,
  getApiTasksRoute,
  getApiTaskStatusesIdRoute,
  getApiTaskStatusesRoute,
  getApiTaskTemplatesIdRoute,
  getApiTaskTemplatesRoute,
  getApiTransactionsIdRoute,
  getApiTransactionsRoute,
  getApiUserGroupsIdRoute,
  getApiUserGroupsRoute,
  getApiUsersIdRoute,
  getApiUsersRoute,
  patchApiAllergiesIdRoute,
  patchApiAmendmentsIdRoute,
  patchApiAppointmentProfilesIdRoute,
  patchApiAppointmentsIdRoute,
  patchApiAppointmentTemplatesIdRoute,
  patchApiClinicalNoteFieldValuesIdRoute,
  patchApiCommLogsIdRoute,
  patchApiConsentFormsIdRoute,
  patchApiCustomAppointmentFieldsIdRoute,
  patchApiCustomDemographicsIdRoute,
  patchApiDocumentsIdRoute,
  patchApiLabDocumentsIdRoute,
  patchApiLabOrdersIdRoute,
  patchApiLabResultsIdRoute,
  patchApiLabTestsIdRoute,
  patchApiLineItemsIdRoute,
  patchApiMedicationsIdAppendToPharmacyNoteRoute,
  patchApiMedicationsIdRoute,
  patchApiMessagesIdRoute,
  patchApiOfficesIdRoute,
  patchApiPatientCommunicationsIdRoute,
  patchApiPatientFlagTypesIdRoute,
  patchApiPatientInterventionsIdRoute,
  patchApiPatientLabResultsIdRoute,
  patchApiPatientMessagesIdRoute,
  patchApiPatientPhysicalExamsIdRoute,
  patchApiPatientRiskAssessmentsIdRoute,
  patchApiPatientsIdRoute,
  patchApiPatientsSummaryIdRoute,
  patchApiPatientVaccineRecordsIdRoute,
  patchApiProblemsIdRoute,
  patchApiReminderProfilesIdRoute,
  patchApiSublabsIdRoute,
  patchApiTaskCategoriesIdRoute,
  patchApiTaskNotesIdRoute,
  patchApiTasksIdRoute,
  patchApiTaskStatusesIdRoute,
  patchApiTaskTemplatesIdRoute,
  postApiAllergiesRoute,
  postApiAmendmentsRoute,
  postApiAppointmentProfilesRoute,
  postApiAppointmentsRoute,
  postApiAppointmentTemplatesRoute,
  postApiClaimBillingNotesRoute,
  postApiClinicalNoteFieldValuesRoute,
  postApiCommLogsRoute,
  postApiConsentFormsIdApplyToAppointmentRoute,
  postApiConsentFormsIdUnapplyFromAppointmentRoute,
  postApiConsentFormsRoute,
  postApiCustomAppointmentFieldsRoute,
  postApiCustomDemographicsRoute,
  postApiDocumentsRoute,
  postApiEobsRoute,
  postApiInventoryVaccinesRoute,
  postApiLabDocumentsRoute,
  postApiLabOrdersRoute,
  postApiLabResultsRoute,
  postApiLabTestsRoute,
  postApiLineItemsRoute,
  postApiMedicationsRoute,
  postApiMessagesRoute,
  postApiOfficesIdAddExamRoomRoute,
  postApiPatientCommunicationsRoute,
  postApiPatientFlagTypesRoute,
  postApiPatientInterventionsRoute,
  postApiPatientLabResultsRoute,
  postApiPatientMessagesRoute,
  postApiPatientPaymentsRoute,
  postApiPatientPhysicalExamsRoute,
  postApiPatientRiskAssessmentsRoute,
  postApiPatientsIdOnpatientAccessRoute,
  postApiPatientsRoute,
  postApiPatientsSummaryRoute,
  postApiPatientVaccineRecordsRoute,
  postApiProblemsRoute,
  postApiReminderProfilesRoute,
  postApiSublabsRoute,
  postApiTaskCategoriesRoute,
  postApiTaskNotesRoute,
  postApiTasksRoute,
  postApiTaskStatusesRoute,
  postApiTaskTemplatesRoute,
  putApiAllergiesIdRoute,
  putApiAmendmentsIdRoute,
  putApiAppointmentProfilesIdRoute,
  putApiAppointmentsIdRoute,
  putApiAppointmentTemplatesIdRoute,
  putApiClinicalNoteFieldValuesIdRoute,
  putApiCommLogsIdRoute,
  putApiConsentFormsIdRoute,
  putApiCustomAppointmentFieldsIdRoute,
  putApiCustomDemographicsIdRoute,
  putApiDocumentsIdRoute,
  putApiLabDocumentsIdRoute,
  putApiLabOrdersIdRoute,
  putApiLabResultsIdRoute,
  putApiLabTestsIdRoute,
  putApiLineItemsIdRoute,
  putApiMedicationsIdRoute,
  putApiMessagesIdRoute,
  putApiOfficesIdRoute,
  putApiPatientCommunicationsIdRoute,
  putApiPatientFlagTypesIdRoute,
  putApiPatientInterventionsIdRoute,
  putApiPatientLabResultsIdRoute,
  putApiPatientMessagesIdRoute,
  putApiPatientPhysicalExamsIdRoute,
  putApiPatientRiskAssessmentsIdRoute,
  putApiPatientsIdRoute,
  putApiPatientsSummaryIdRoute,
  putApiPatientVaccineRecordsIdRoute,
  putApiProblemsIdRoute,
  putApiReminderProfilesIdRoute,
  putApiSublabsIdRoute,
  putApiTaskCategoriesIdRoute,
  putApiTaskNotesIdRoute,
  putApiTasksIdRoute,
  putApiTaskStatusesIdRoute,
  putApiTaskTemplatesIdRoute,
} from '../routes'

export const getApiAllergiesRouteHandler: RouteHandler<typeof getApiAllergiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAllergiesRouteHandler: RouteHandler<typeof postApiAllergiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAllergiesIdRouteHandler: RouteHandler<typeof getApiAllergiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiAllergiesIdRouteHandler: RouteHandler<
  typeof patchApiAllergiesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAllergiesIdRouteHandler: RouteHandler<typeof putApiAllergiesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAmendmentsRouteHandler: RouteHandler<typeof getApiAmendmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAmendmentsRouteHandler: RouteHandler<typeof postApiAmendmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiAmendmentsIdRouteHandler: RouteHandler<
  typeof deleteApiAmendmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAmendmentsIdRouteHandler: RouteHandler<typeof getApiAmendmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiAmendmentsIdRouteHandler: RouteHandler<
  typeof patchApiAmendmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAmendmentsIdRouteHandler: RouteHandler<typeof putApiAmendmentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentProfilesRouteHandler: RouteHandler<
  typeof getApiAppointmentProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAppointmentProfilesRouteHandler: RouteHandler<
  typeof postApiAppointmentProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAppointmentProfilesIdRouteHandler: RouteHandler<
  typeof deleteApiAppointmentProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentProfilesIdRouteHandler: RouteHandler<
  typeof getApiAppointmentProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAppointmentProfilesIdRouteHandler: RouteHandler<
  typeof patchApiAppointmentProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAppointmentProfilesIdRouteHandler: RouteHandler<
  typeof putApiAppointmentProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentTemplatesRouteHandler: RouteHandler<
  typeof getApiAppointmentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiAppointmentTemplatesRouteHandler: RouteHandler<
  typeof postApiAppointmentTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAppointmentTemplatesIdRouteHandler: RouteHandler<
  typeof deleteApiAppointmentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentTemplatesIdRouteHandler: RouteHandler<
  typeof getApiAppointmentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAppointmentTemplatesIdRouteHandler: RouteHandler<
  typeof patchApiAppointmentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAppointmentTemplatesIdRouteHandler: RouteHandler<
  typeof putApiAppointmentTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentsRouteHandler: RouteHandler<typeof getApiAppointmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiAppointmentsRouteHandler: RouteHandler<
  typeof postApiAppointmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiAppointmentsIdRouteHandler: RouteHandler<
  typeof deleteApiAppointmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiAppointmentsIdRouteHandler: RouteHandler<
  typeof getApiAppointmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiAppointmentsIdRouteHandler: RouteHandler<
  typeof patchApiAppointmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiAppointmentsIdRouteHandler: RouteHandler<
  typeof putApiAppointmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBillingProfilesRouteHandler: RouteHandler<
  typeof getApiBillingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiBillingProfilesIdRouteHandler: RouteHandler<
  typeof getApiBillingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCarePlansRouteHandler: RouteHandler<typeof getApiCarePlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCarePlansIdRouteHandler: RouteHandler<typeof getApiCarePlansIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCareTeamMembersRouteHandler: RouteHandler<
  typeof getApiCareTeamMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCareTeamMembersIdRouteHandler: RouteHandler<
  typeof getApiCareTeamMembersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClaimBillingNotesRouteHandler: RouteHandler<
  typeof getApiClaimBillingNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClaimBillingNotesRouteHandler: RouteHandler<
  typeof postApiClaimBillingNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClaimBillingNotesIdRouteHandler: RouteHandler<
  typeof getApiClaimBillingNotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteFieldTypesRouteHandler: RouteHandler<
  typeof getApiClinicalNoteFieldTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteFieldTypesIdRouteHandler: RouteHandler<
  typeof getApiClinicalNoteFieldTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteFieldValuesRouteHandler: RouteHandler<
  typeof getApiClinicalNoteFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiClinicalNoteFieldValuesRouteHandler: RouteHandler<
  typeof postApiClinicalNoteFieldValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteFieldValuesIdRouteHandler: RouteHandler<
  typeof getApiClinicalNoteFieldValuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiClinicalNoteFieldValuesIdRouteHandler: RouteHandler<
  typeof patchApiClinicalNoteFieldValuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiClinicalNoteFieldValuesIdRouteHandler: RouteHandler<
  typeof putApiClinicalNoteFieldValuesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteTemplatesRouteHandler: RouteHandler<
  typeof getApiClinicalNoteTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNoteTemplatesIdRouteHandler: RouteHandler<
  typeof getApiClinicalNoteTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNotesRouteHandler: RouteHandler<
  typeof getApiClinicalNotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiClinicalNotesIdRouteHandler: RouteHandler<
  typeof getApiClinicalNotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCommLogsRouteHandler: RouteHandler<typeof getApiCommLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCommLogsRouteHandler: RouteHandler<typeof postApiCommLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCommLogsIdRouteHandler: RouteHandler<typeof getApiCommLogsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiCommLogsIdRouteHandler: RouteHandler<typeof patchApiCommLogsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiCommLogsIdRouteHandler: RouteHandler<typeof putApiCommLogsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiConsentFormsRouteHandler: RouteHandler<typeof getApiConsentFormsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiConsentFormsRouteHandler: RouteHandler<
  typeof postApiConsentFormsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiConsentFormsIdRouteHandler: RouteHandler<
  typeof getApiConsentFormsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiConsentFormsIdRouteHandler: RouteHandler<
  typeof patchApiConsentFormsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiConsentFormsIdRouteHandler: RouteHandler<
  typeof putApiConsentFormsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsentFormsIdApplyToAppointmentRouteHandler: RouteHandler<
  typeof postApiConsentFormsIdApplyToAppointmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiConsentFormsIdUnapplyFromAppointmentRouteHandler: RouteHandler<
  typeof postApiConsentFormsIdUnapplyFromAppointmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomAppointmentFieldsRouteHandler: RouteHandler<
  typeof getApiCustomAppointmentFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCustomAppointmentFieldsRouteHandler: RouteHandler<
  typeof postApiCustomAppointmentFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomAppointmentFieldsIdRouteHandler: RouteHandler<
  typeof getApiCustomAppointmentFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCustomAppointmentFieldsIdRouteHandler: RouteHandler<
  typeof patchApiCustomAppointmentFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCustomAppointmentFieldsIdRouteHandler: RouteHandler<
  typeof putApiCustomAppointmentFieldsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomDemographicsRouteHandler: RouteHandler<
  typeof getApiCustomDemographicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiCustomDemographicsRouteHandler: RouteHandler<
  typeof postApiCustomDemographicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomDemographicsIdRouteHandler: RouteHandler<
  typeof getApiCustomDemographicsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiCustomDemographicsIdRouteHandler: RouteHandler<
  typeof patchApiCustomDemographicsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiCustomDemographicsIdRouteHandler: RouteHandler<
  typeof putApiCustomDemographicsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomInsurancePlanNamesRouteHandler: RouteHandler<
  typeof getApiCustomInsurancePlanNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomInsurancePlanNamesIdRouteHandler: RouteHandler<
  typeof getApiCustomInsurancePlanNamesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiCustomVitalsRouteHandler: RouteHandler<typeof getApiCustomVitalsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiCustomVitalsIdRouteHandler: RouteHandler<
  typeof getApiCustomVitalsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDoctorsRouteHandler: RouteHandler<typeof getApiDoctorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDoctorsIdRouteHandler: RouteHandler<typeof getApiDoctorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentsRouteHandler: RouteHandler<typeof getApiDocumentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiDocumentsRouteHandler: RouteHandler<typeof postApiDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiDocumentsIdRouteHandler: RouteHandler<
  typeof deleteApiDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiDocumentsIdRouteHandler: RouteHandler<typeof getApiDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiDocumentsIdRouteHandler: RouteHandler<
  typeof patchApiDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiDocumentsIdRouteHandler: RouteHandler<typeof putApiDocumentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiEligibilityChecksRouteHandler: RouteHandler<
  typeof getApiEligibilityChecksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEligibilityChecksIdRouteHandler: RouteHandler<
  typeof getApiEligibilityChecksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEobsRouteHandler: RouteHandler<typeof getApiEobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiEobsRouteHandler: RouteHandler<typeof postApiEobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiEobsIdRouteHandler: RouteHandler<typeof getApiEobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiFeeSchedulesRouteHandler: RouteHandler<typeof getApiFeeSchedulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiFeeSchedulesIdRouteHandler: RouteHandler<
  typeof getApiFeeSchedulesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImplantableDevicesRouteHandler: RouteHandler<
  typeof getApiImplantableDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiImplantableDevicesIdRouteHandler: RouteHandler<
  typeof getApiImplantableDevicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInsurancesRouteHandler: RouteHandler<typeof getApiInsurancesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiInsurancesIdRouteHandler: RouteHandler<typeof getApiInsurancesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiInventoryCategoriesRouteHandler: RouteHandler<
  typeof getApiInventoryCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInventoryCategoriesIdRouteHandler: RouteHandler<
  typeof getApiInventoryCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInventoryVaccinesRouteHandler: RouteHandler<
  typeof getApiInventoryVaccinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiInventoryVaccinesRouteHandler: RouteHandler<
  typeof postApiInventoryVaccinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiInventoryVaccinesIdRouteHandler: RouteHandler<
  typeof getApiInventoryVaccinesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabDocumentsRouteHandler: RouteHandler<typeof getApiLabDocumentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiLabDocumentsRouteHandler: RouteHandler<
  typeof postApiLabDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLabDocumentsIdRouteHandler: RouteHandler<
  typeof deleteApiLabDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabDocumentsIdRouteHandler: RouteHandler<
  typeof getApiLabDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiLabDocumentsIdRouteHandler: RouteHandler<
  typeof patchApiLabDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLabDocumentsIdRouteHandler: RouteHandler<
  typeof putApiLabDocumentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabOrdersRouteHandler: RouteHandler<typeof getApiLabOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLabOrdersRouteHandler: RouteHandler<typeof postApiLabOrdersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLabOrdersIdRouteHandler: RouteHandler<
  typeof deleteApiLabOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabOrdersIdRouteHandler: RouteHandler<typeof getApiLabOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiLabOrdersIdRouteHandler: RouteHandler<
  typeof patchApiLabOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLabOrdersIdRouteHandler: RouteHandler<typeof putApiLabOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLabOrdersSummaryRouteHandler: RouteHandler<
  typeof getApiLabOrdersSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabOrdersSummaryIdRouteHandler: RouteHandler<
  typeof getApiLabOrdersSummaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabResultsRouteHandler: RouteHandler<typeof getApiLabResultsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiLabResultsRouteHandler: RouteHandler<typeof postApiLabResultsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLabResultsIdRouteHandler: RouteHandler<
  typeof deleteApiLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabResultsIdRouteHandler: RouteHandler<typeof getApiLabResultsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiLabResultsIdRouteHandler: RouteHandler<
  typeof patchApiLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLabResultsIdRouteHandler: RouteHandler<typeof putApiLabResultsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLabTestsRouteHandler: RouteHandler<typeof getApiLabTestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLabTestsRouteHandler: RouteHandler<typeof postApiLabTestsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiLabTestsIdRouteHandler: RouteHandler<
  typeof deleteApiLabTestsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLabTestsIdRouteHandler: RouteHandler<typeof getApiLabTestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiLabTestsIdRouteHandler: RouteHandler<typeof patchApiLabTestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiLabTestsIdRouteHandler: RouteHandler<typeof putApiLabTestsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiLineItemsRouteHandler: RouteHandler<typeof getApiLineItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiLineItemsRouteHandler: RouteHandler<typeof postApiLineItemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteApiLineItemsIdRouteHandler: RouteHandler<
  typeof deleteApiLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiLineItemsIdRouteHandler: RouteHandler<typeof getApiLineItemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiLineItemsIdRouteHandler: RouteHandler<
  typeof patchApiLineItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiLineItemsIdRouteHandler: RouteHandler<typeof putApiLineItemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMedicationsRouteHandler: RouteHandler<typeof getApiMedicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiMedicationsRouteHandler: RouteHandler<typeof postApiMedicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiMedicationsIdRouteHandler: RouteHandler<
  typeof getApiMedicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiMedicationsIdRouteHandler: RouteHandler<
  typeof patchApiMedicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiMedicationsIdRouteHandler: RouteHandler<
  typeof putApiMedicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiMedicationsIdAppendToPharmacyNoteRouteHandler: RouteHandler<
  typeof patchApiMedicationsIdAppendToPharmacyNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessagesRouteHandler: RouteHandler<typeof getApiMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiMessagesRouteHandler: RouteHandler<typeof postApiMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiMessagesIdRouteHandler: RouteHandler<
  typeof deleteApiMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessagesIdRouteHandler: RouteHandler<typeof getApiMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiMessagesIdRouteHandler: RouteHandler<typeof patchApiMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiMessagesIdRouteHandler: RouteHandler<typeof putApiMessagesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiOfficesRouteHandler: RouteHandler<typeof getApiOfficesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiOfficesIdRouteHandler: RouteHandler<typeof getApiOfficesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiOfficesIdRouteHandler: RouteHandler<typeof patchApiOfficesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiOfficesIdRouteHandler: RouteHandler<typeof putApiOfficesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiOfficesIdAddExamRoomRouteHandler: RouteHandler<
  typeof postApiOfficesIdAddExamRoomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientCommunicationsRouteHandler: RouteHandler<
  typeof getApiPatientCommunicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientCommunicationsRouteHandler: RouteHandler<
  typeof postApiPatientCommunicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientCommunicationsIdRouteHandler: RouteHandler<
  typeof getApiPatientCommunicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientCommunicationsIdRouteHandler: RouteHandler<
  typeof patchApiPatientCommunicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientCommunicationsIdRouteHandler: RouteHandler<
  typeof putApiPatientCommunicationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientFlagTypesRouteHandler: RouteHandler<
  typeof getApiPatientFlagTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientFlagTypesRouteHandler: RouteHandler<
  typeof postApiPatientFlagTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientFlagTypesIdRouteHandler: RouteHandler<
  typeof getApiPatientFlagTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientFlagTypesIdRouteHandler: RouteHandler<
  typeof patchApiPatientFlagTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientFlagTypesIdRouteHandler: RouteHandler<
  typeof putApiPatientFlagTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientInterventionsRouteHandler: RouteHandler<
  typeof getApiPatientInterventionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientInterventionsRouteHandler: RouteHandler<
  typeof postApiPatientInterventionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientInterventionsIdRouteHandler: RouteHandler<
  typeof getApiPatientInterventionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientInterventionsIdRouteHandler: RouteHandler<
  typeof patchApiPatientInterventionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientInterventionsIdRouteHandler: RouteHandler<
  typeof putApiPatientInterventionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientLabResultsRouteHandler: RouteHandler<
  typeof getApiPatientLabResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientLabResultsRouteHandler: RouteHandler<
  typeof postApiPatientLabResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPatientLabResultsIdRouteHandler: RouteHandler<
  typeof deleteApiPatientLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientLabResultsIdRouteHandler: RouteHandler<
  typeof getApiPatientLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientLabResultsIdRouteHandler: RouteHandler<
  typeof patchApiPatientLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientLabResultsIdRouteHandler: RouteHandler<
  typeof putApiPatientLabResultsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientMessagesRouteHandler: RouteHandler<
  typeof getApiPatientMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientMessagesRouteHandler: RouteHandler<
  typeof postApiPatientMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientMessagesIdRouteHandler: RouteHandler<
  typeof getApiPatientMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientMessagesIdRouteHandler: RouteHandler<
  typeof patchApiPatientMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientMessagesIdRouteHandler: RouteHandler<
  typeof putApiPatientMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPaymentLogRouteHandler: RouteHandler<
  typeof getApiPatientPaymentLogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPaymentLogIdRouteHandler: RouteHandler<
  typeof getApiPatientPaymentLogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPaymentsRouteHandler: RouteHandler<
  typeof getApiPatientPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientPaymentsRouteHandler: RouteHandler<
  typeof postApiPatientPaymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPaymentsIdRouteHandler: RouteHandler<
  typeof getApiPatientPaymentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPhysicalExamsRouteHandler: RouteHandler<
  typeof getApiPatientPhysicalExamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientPhysicalExamsRouteHandler: RouteHandler<
  typeof postApiPatientPhysicalExamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientPhysicalExamsIdRouteHandler: RouteHandler<
  typeof getApiPatientPhysicalExamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientPhysicalExamsIdRouteHandler: RouteHandler<
  typeof patchApiPatientPhysicalExamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientPhysicalExamsIdRouteHandler: RouteHandler<
  typeof putApiPatientPhysicalExamsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientRiskAssessmentsRouteHandler: RouteHandler<
  typeof getApiPatientRiskAssessmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientRiskAssessmentsRouteHandler: RouteHandler<
  typeof postApiPatientRiskAssessmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientRiskAssessmentsIdRouteHandler: RouteHandler<
  typeof getApiPatientRiskAssessmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientRiskAssessmentsIdRouteHandler: RouteHandler<
  typeof patchApiPatientRiskAssessmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientRiskAssessmentsIdRouteHandler: RouteHandler<
  typeof putApiPatientRiskAssessmentsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientVaccineRecordsRouteHandler: RouteHandler<
  typeof getApiPatientVaccineRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientVaccineRecordsRouteHandler: RouteHandler<
  typeof postApiPatientVaccineRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientVaccineRecordsIdRouteHandler: RouteHandler<
  typeof getApiPatientVaccineRecordsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientVaccineRecordsIdRouteHandler: RouteHandler<
  typeof patchApiPatientVaccineRecordsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientVaccineRecordsIdRouteHandler: RouteHandler<
  typeof putApiPatientVaccineRecordsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsRouteHandler: RouteHandler<typeof getApiPatientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientsRouteHandler: RouteHandler<typeof postApiPatientsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPatientsIdRouteHandler: RouteHandler<
  typeof deleteApiPatientsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsIdRouteHandler: RouteHandler<typeof getApiPatientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiPatientsIdRouteHandler: RouteHandler<typeof patchApiPatientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiPatientsIdRouteHandler: RouteHandler<typeof putApiPatientsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiPatientsIdCcdaRouteHandler: RouteHandler<
  typeof getApiPatientsIdCcdaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPatientsIdOnpatientAccessRouteHandler: RouteHandler<
  typeof deleteApiPatientsIdOnpatientAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsIdOnpatientAccessRouteHandler: RouteHandler<
  typeof getApiPatientsIdOnpatientAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientsIdOnpatientAccessRouteHandler: RouteHandler<
  typeof postApiPatientsIdOnpatientAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsIdQrda1RouteHandler: RouteHandler<
  typeof getApiPatientsIdQrda1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsSummaryRouteHandler: RouteHandler<
  typeof getApiPatientsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiPatientsSummaryRouteHandler: RouteHandler<
  typeof postApiPatientsSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiPatientsSummaryIdRouteHandler: RouteHandler<
  typeof deleteApiPatientsSummaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPatientsSummaryIdRouteHandler: RouteHandler<
  typeof getApiPatientsSummaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiPatientsSummaryIdRouteHandler: RouteHandler<
  typeof patchApiPatientsSummaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiPatientsSummaryIdRouteHandler: RouteHandler<
  typeof putApiPatientsSummaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPrescriptionMessagesRouteHandler: RouteHandler<
  typeof getApiPrescriptionMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiPrescriptionMessagesIdRouteHandler: RouteHandler<
  typeof getApiPrescriptionMessagesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProblemsRouteHandler: RouteHandler<typeof getApiProblemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiProblemsRouteHandler: RouteHandler<typeof postApiProblemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiProblemsIdRouteHandler: RouteHandler<typeof getApiProblemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiProblemsIdRouteHandler: RouteHandler<typeof patchApiProblemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiProblemsIdRouteHandler: RouteHandler<typeof putApiProblemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiProceduresRouteHandler: RouteHandler<typeof getApiProceduresRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiProceduresIdRouteHandler: RouteHandler<typeof getApiProceduresIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiReminderProfilesRouteHandler: RouteHandler<
  typeof getApiReminderProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiReminderProfilesRouteHandler: RouteHandler<
  typeof postApiReminderProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiReminderProfilesIdRouteHandler: RouteHandler<
  typeof deleteApiReminderProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiReminderProfilesIdRouteHandler: RouteHandler<
  typeof getApiReminderProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiReminderProfilesIdRouteHandler: RouteHandler<
  typeof patchApiReminderProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiReminderProfilesIdRouteHandler: RouteHandler<
  typeof putApiReminderProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSublabsRouteHandler: RouteHandler<typeof getApiSublabsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSublabsRouteHandler: RouteHandler<typeof postApiSublabsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiSublabsIdRouteHandler: RouteHandler<typeof deleteApiSublabsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiSublabsIdRouteHandler: RouteHandler<typeof getApiSublabsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiSublabsIdRouteHandler: RouteHandler<typeof patchApiSublabsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiSublabsIdRouteHandler: RouteHandler<typeof putApiSublabsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskCategoriesRouteHandler: RouteHandler<
  typeof getApiTaskCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTaskCategoriesRouteHandler: RouteHandler<
  typeof postApiTaskCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskCategoriesIdRouteHandler: RouteHandler<
  typeof getApiTaskCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTaskCategoriesIdRouteHandler: RouteHandler<
  typeof patchApiTaskCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTaskCategoriesIdRouteHandler: RouteHandler<
  typeof putApiTaskCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskNotesRouteHandler: RouteHandler<typeof getApiTaskNotesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTaskNotesRouteHandler: RouteHandler<typeof postApiTaskNotesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTaskNotesIdRouteHandler: RouteHandler<typeof getApiTaskNotesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchApiTaskNotesIdRouteHandler: RouteHandler<
  typeof patchApiTaskNotesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTaskNotesIdRouteHandler: RouteHandler<typeof putApiTaskNotesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTaskStatusesRouteHandler: RouteHandler<typeof getApiTaskStatusesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiTaskStatusesRouteHandler: RouteHandler<
  typeof postApiTaskStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskStatusesIdRouteHandler: RouteHandler<
  typeof getApiTaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTaskStatusesIdRouteHandler: RouteHandler<
  typeof patchApiTaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTaskStatusesIdRouteHandler: RouteHandler<
  typeof putApiTaskStatusesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskTemplatesRouteHandler: RouteHandler<
  typeof getApiTaskTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTaskTemplatesRouteHandler: RouteHandler<
  typeof postApiTaskTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTaskTemplatesIdRouteHandler: RouteHandler<
  typeof getApiTaskTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTaskTemplatesIdRouteHandler: RouteHandler<
  typeof patchApiTaskTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTaskTemplatesIdRouteHandler: RouteHandler<
  typeof putApiTaskTemplatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksRouteHandler: RouteHandler<typeof getApiTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiTasksRouteHandler: RouteHandler<typeof postApiTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTasksIdRouteHandler: RouteHandler<typeof getApiTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiTasksIdRouteHandler: RouteHandler<typeof patchApiTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiTasksIdRouteHandler: RouteHandler<typeof putApiTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTransactionsRouteHandler: RouteHandler<typeof getApiTransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiTransactionsIdRouteHandler: RouteHandler<
  typeof getApiTransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUserGroupsRouteHandler: RouteHandler<typeof getApiUserGroupsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUserGroupsIdRouteHandler: RouteHandler<typeof getApiUserGroupsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiUsersRouteHandler: RouteHandler<typeof getApiUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiUsersIdRouteHandler: RouteHandler<typeof getApiUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
