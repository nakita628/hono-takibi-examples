import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiAllergiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAllergiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAllergiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAllergiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAllergiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAmendmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAmendmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAmendmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAmendmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppointmentProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppointmentProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAppointmentProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAppointmentProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppointmentTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppointmentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAppointmentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAppointmentTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCarePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCarePlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCareTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCareTeamMembersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClaimBillingNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClaimBillingNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClaimBillingNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteFieldTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteFieldTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiClinicalNoteFieldValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteFieldValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiClinicalNoteFieldValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiClinicalNoteFieldValuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNoteTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiClinicalNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCommLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCommLogsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsentFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiConsentFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiConsentFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiConsentFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentFormsIdApplyToAppointmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiConsentFormsIdUnapplyFromAppointmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomAppointmentFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCustomAppointmentFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomAppointmentFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomAppointmentFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCustomAppointmentFieldsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomDemographicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCustomDemographicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomDemographicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomDemographicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCustomDemographicsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomInsurancePlanNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomInsurancePlanNamesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomVitalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomVitalsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDoctorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDoctorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEligibilityChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEligibilityChecksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiEobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFeeSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiFeeSchedulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImplantableDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiImplantableDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInsurancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInsurancesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryVaccinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInventoryVaccinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInventoryVaccinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLabDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLabDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLabOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLabOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabOrdersSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabOrdersSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLabResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLabTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLabTestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLabTestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLabTestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLabTestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLineItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMedicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMedicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMedicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMedicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMedicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMedicationsIdAppendToPharmacyNoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOfficesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiOfficesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOfficesIdAddExamRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientCommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientCommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientCommunicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientCommunicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientCommunicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientFlagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientFlagTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientFlagTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientFlagTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientFlagTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientInterventionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientInterventionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientInterventionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientInterventionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientInterventionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientLabResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientLabResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatientLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientLabResultsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPhysicalExamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientPhysicalExamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientPhysicalExamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientPhysicalExamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientPhysicalExamsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientRiskAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientRiskAssessmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientRiskAssessmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientRiskAssessmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientRiskAssessmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientVaccineRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientVaccineRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientVaccineRecordsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientVaccineRecordsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientVaccineRecordsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsIdCcdaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatientsIdOnpatientAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsIdOnpatientAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientsIdOnpatientAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsIdQrda1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatientsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatientsSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatientsSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPatientsSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPatientsSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPrescriptionMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPrescriptionMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProblemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProblemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProblemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiProblemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiProblemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProceduresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProceduresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReminderProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReminderProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReminderProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReminderProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiReminderProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiReminderProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSublabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSublabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSublabsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSublabsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSublabsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiSublabsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskStatusesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaskTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTaskTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUserGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
