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
} from './routes'
import {
  deleteApiAmendmentsIdRouteHandler,
  deleteApiAppointmentProfilesIdRouteHandler,
  deleteApiAppointmentsIdRouteHandler,
  deleteApiAppointmentTemplatesIdRouteHandler,
  deleteApiDocumentsIdRouteHandler,
  deleteApiLabDocumentsIdRouteHandler,
  deleteApiLabOrdersIdRouteHandler,
  deleteApiLabResultsIdRouteHandler,
  deleteApiLabTestsIdRouteHandler,
  deleteApiLineItemsIdRouteHandler,
  deleteApiMessagesIdRouteHandler,
  deleteApiPatientLabResultsIdRouteHandler,
  deleteApiPatientsIdOnpatientAccessRouteHandler,
  deleteApiPatientsIdRouteHandler,
  deleteApiPatientsSummaryIdRouteHandler,
  deleteApiReminderProfilesIdRouteHandler,
  deleteApiSublabsIdRouteHandler,
  getApiAllergiesIdRouteHandler,
  getApiAllergiesRouteHandler,
  getApiAmendmentsIdRouteHandler,
  getApiAmendmentsRouteHandler,
  getApiAppointmentProfilesIdRouteHandler,
  getApiAppointmentProfilesRouteHandler,
  getApiAppointmentsIdRouteHandler,
  getApiAppointmentsRouteHandler,
  getApiAppointmentTemplatesIdRouteHandler,
  getApiAppointmentTemplatesRouteHandler,
  getApiBillingProfilesIdRouteHandler,
  getApiBillingProfilesRouteHandler,
  getApiCarePlansIdRouteHandler,
  getApiCarePlansRouteHandler,
  getApiCareTeamMembersIdRouteHandler,
  getApiCareTeamMembersRouteHandler,
  getApiClaimBillingNotesIdRouteHandler,
  getApiClaimBillingNotesRouteHandler,
  getApiClinicalNoteFieldTypesIdRouteHandler,
  getApiClinicalNoteFieldTypesRouteHandler,
  getApiClinicalNoteFieldValuesIdRouteHandler,
  getApiClinicalNoteFieldValuesRouteHandler,
  getApiClinicalNotesIdRouteHandler,
  getApiClinicalNotesRouteHandler,
  getApiClinicalNoteTemplatesIdRouteHandler,
  getApiClinicalNoteTemplatesRouteHandler,
  getApiCommLogsIdRouteHandler,
  getApiCommLogsRouteHandler,
  getApiConsentFormsIdRouteHandler,
  getApiConsentFormsRouteHandler,
  getApiCustomAppointmentFieldsIdRouteHandler,
  getApiCustomAppointmentFieldsRouteHandler,
  getApiCustomDemographicsIdRouteHandler,
  getApiCustomDemographicsRouteHandler,
  getApiCustomInsurancePlanNamesIdRouteHandler,
  getApiCustomInsurancePlanNamesRouteHandler,
  getApiCustomVitalsIdRouteHandler,
  getApiCustomVitalsRouteHandler,
  getApiDoctorsIdRouteHandler,
  getApiDoctorsRouteHandler,
  getApiDocumentsIdRouteHandler,
  getApiDocumentsRouteHandler,
  getApiEligibilityChecksIdRouteHandler,
  getApiEligibilityChecksRouteHandler,
  getApiEobsIdRouteHandler,
  getApiEobsRouteHandler,
  getApiFeeSchedulesIdRouteHandler,
  getApiFeeSchedulesRouteHandler,
  getApiImplantableDevicesIdRouteHandler,
  getApiImplantableDevicesRouteHandler,
  getApiInsurancesIdRouteHandler,
  getApiInsurancesRouteHandler,
  getApiInventoryCategoriesIdRouteHandler,
  getApiInventoryCategoriesRouteHandler,
  getApiInventoryVaccinesIdRouteHandler,
  getApiInventoryVaccinesRouteHandler,
  getApiLabDocumentsIdRouteHandler,
  getApiLabDocumentsRouteHandler,
  getApiLabOrdersIdRouteHandler,
  getApiLabOrdersRouteHandler,
  getApiLabOrdersSummaryIdRouteHandler,
  getApiLabOrdersSummaryRouteHandler,
  getApiLabResultsIdRouteHandler,
  getApiLabResultsRouteHandler,
  getApiLabTestsIdRouteHandler,
  getApiLabTestsRouteHandler,
  getApiLineItemsIdRouteHandler,
  getApiLineItemsRouteHandler,
  getApiMedicationsIdRouteHandler,
  getApiMedicationsRouteHandler,
  getApiMessagesIdRouteHandler,
  getApiMessagesRouteHandler,
  getApiOfficesIdRouteHandler,
  getApiOfficesRouteHandler,
  getApiPatientCommunicationsIdRouteHandler,
  getApiPatientCommunicationsRouteHandler,
  getApiPatientFlagTypesIdRouteHandler,
  getApiPatientFlagTypesRouteHandler,
  getApiPatientInterventionsIdRouteHandler,
  getApiPatientInterventionsRouteHandler,
  getApiPatientLabResultsIdRouteHandler,
  getApiPatientLabResultsRouteHandler,
  getApiPatientMessagesIdRouteHandler,
  getApiPatientMessagesRouteHandler,
  getApiPatientPaymentLogIdRouteHandler,
  getApiPatientPaymentLogRouteHandler,
  getApiPatientPaymentsIdRouteHandler,
  getApiPatientPaymentsRouteHandler,
  getApiPatientPhysicalExamsIdRouteHandler,
  getApiPatientPhysicalExamsRouteHandler,
  getApiPatientRiskAssessmentsIdRouteHandler,
  getApiPatientRiskAssessmentsRouteHandler,
  getApiPatientsIdCcdaRouteHandler,
  getApiPatientsIdOnpatientAccessRouteHandler,
  getApiPatientsIdQrda1RouteHandler,
  getApiPatientsIdRouteHandler,
  getApiPatientsRouteHandler,
  getApiPatientsSummaryIdRouteHandler,
  getApiPatientsSummaryRouteHandler,
  getApiPatientVaccineRecordsIdRouteHandler,
  getApiPatientVaccineRecordsRouteHandler,
  getApiPrescriptionMessagesIdRouteHandler,
  getApiPrescriptionMessagesRouteHandler,
  getApiProblemsIdRouteHandler,
  getApiProblemsRouteHandler,
  getApiProceduresIdRouteHandler,
  getApiProceduresRouteHandler,
  getApiReminderProfilesIdRouteHandler,
  getApiReminderProfilesRouteHandler,
  getApiSublabsIdRouteHandler,
  getApiSublabsRouteHandler,
  getApiTaskCategoriesIdRouteHandler,
  getApiTaskCategoriesRouteHandler,
  getApiTaskNotesIdRouteHandler,
  getApiTaskNotesRouteHandler,
  getApiTasksIdRouteHandler,
  getApiTasksRouteHandler,
  getApiTaskStatusesIdRouteHandler,
  getApiTaskStatusesRouteHandler,
  getApiTaskTemplatesIdRouteHandler,
  getApiTaskTemplatesRouteHandler,
  getApiTransactionsIdRouteHandler,
  getApiTransactionsRouteHandler,
  getApiUserGroupsIdRouteHandler,
  getApiUserGroupsRouteHandler,
  getApiUsersIdRouteHandler,
  getApiUsersRouteHandler,
  patchApiAllergiesIdRouteHandler,
  patchApiAmendmentsIdRouteHandler,
  patchApiAppointmentProfilesIdRouteHandler,
  patchApiAppointmentsIdRouteHandler,
  patchApiAppointmentTemplatesIdRouteHandler,
  patchApiClinicalNoteFieldValuesIdRouteHandler,
  patchApiCommLogsIdRouteHandler,
  patchApiConsentFormsIdRouteHandler,
  patchApiCustomAppointmentFieldsIdRouteHandler,
  patchApiCustomDemographicsIdRouteHandler,
  patchApiDocumentsIdRouteHandler,
  patchApiLabDocumentsIdRouteHandler,
  patchApiLabOrdersIdRouteHandler,
  patchApiLabResultsIdRouteHandler,
  patchApiLabTestsIdRouteHandler,
  patchApiLineItemsIdRouteHandler,
  patchApiMedicationsIdAppendToPharmacyNoteRouteHandler,
  patchApiMedicationsIdRouteHandler,
  patchApiMessagesIdRouteHandler,
  patchApiOfficesIdRouteHandler,
  patchApiPatientCommunicationsIdRouteHandler,
  patchApiPatientFlagTypesIdRouteHandler,
  patchApiPatientInterventionsIdRouteHandler,
  patchApiPatientLabResultsIdRouteHandler,
  patchApiPatientMessagesIdRouteHandler,
  patchApiPatientPhysicalExamsIdRouteHandler,
  patchApiPatientRiskAssessmentsIdRouteHandler,
  patchApiPatientsIdRouteHandler,
  patchApiPatientsSummaryIdRouteHandler,
  patchApiPatientVaccineRecordsIdRouteHandler,
  patchApiProblemsIdRouteHandler,
  patchApiReminderProfilesIdRouteHandler,
  patchApiSublabsIdRouteHandler,
  patchApiTaskCategoriesIdRouteHandler,
  patchApiTaskNotesIdRouteHandler,
  patchApiTasksIdRouteHandler,
  patchApiTaskStatusesIdRouteHandler,
  patchApiTaskTemplatesIdRouteHandler,
  postApiAllergiesRouteHandler,
  postApiAmendmentsRouteHandler,
  postApiAppointmentProfilesRouteHandler,
  postApiAppointmentsRouteHandler,
  postApiAppointmentTemplatesRouteHandler,
  postApiClaimBillingNotesRouteHandler,
  postApiClinicalNoteFieldValuesRouteHandler,
  postApiCommLogsRouteHandler,
  postApiConsentFormsIdApplyToAppointmentRouteHandler,
  postApiConsentFormsIdUnapplyFromAppointmentRouteHandler,
  postApiConsentFormsRouteHandler,
  postApiCustomAppointmentFieldsRouteHandler,
  postApiCustomDemographicsRouteHandler,
  postApiDocumentsRouteHandler,
  postApiEobsRouteHandler,
  postApiInventoryVaccinesRouteHandler,
  postApiLabDocumentsRouteHandler,
  postApiLabOrdersRouteHandler,
  postApiLabResultsRouteHandler,
  postApiLabTestsRouteHandler,
  postApiLineItemsRouteHandler,
  postApiMedicationsRouteHandler,
  postApiMessagesRouteHandler,
  postApiOfficesIdAddExamRoomRouteHandler,
  postApiPatientCommunicationsRouteHandler,
  postApiPatientFlagTypesRouteHandler,
  postApiPatientInterventionsRouteHandler,
  postApiPatientLabResultsRouteHandler,
  postApiPatientMessagesRouteHandler,
  postApiPatientPaymentsRouteHandler,
  postApiPatientPhysicalExamsRouteHandler,
  postApiPatientRiskAssessmentsRouteHandler,
  postApiPatientsIdOnpatientAccessRouteHandler,
  postApiPatientsRouteHandler,
  postApiPatientsSummaryRouteHandler,
  postApiPatientVaccineRecordsRouteHandler,
  postApiProblemsRouteHandler,
  postApiReminderProfilesRouteHandler,
  postApiSublabsRouteHandler,
  postApiTaskCategoriesRouteHandler,
  postApiTaskNotesRouteHandler,
  postApiTasksRouteHandler,
  postApiTaskStatusesRouteHandler,
  postApiTaskTemplatesRouteHandler,
  putApiAllergiesIdRouteHandler,
  putApiAmendmentsIdRouteHandler,
  putApiAppointmentProfilesIdRouteHandler,
  putApiAppointmentsIdRouteHandler,
  putApiAppointmentTemplatesIdRouteHandler,
  putApiClinicalNoteFieldValuesIdRouteHandler,
  putApiCommLogsIdRouteHandler,
  putApiConsentFormsIdRouteHandler,
  putApiCustomAppointmentFieldsIdRouteHandler,
  putApiCustomDemographicsIdRouteHandler,
  putApiDocumentsIdRouteHandler,
  putApiLabDocumentsIdRouteHandler,
  putApiLabOrdersIdRouteHandler,
  putApiLabResultsIdRouteHandler,
  putApiLabTestsIdRouteHandler,
  putApiLineItemsIdRouteHandler,
  putApiMedicationsIdRouteHandler,
  putApiMessagesIdRouteHandler,
  putApiOfficesIdRouteHandler,
  putApiPatientCommunicationsIdRouteHandler,
  putApiPatientFlagTypesIdRouteHandler,
  putApiPatientInterventionsIdRouteHandler,
  putApiPatientLabResultsIdRouteHandler,
  putApiPatientMessagesIdRouteHandler,
  putApiPatientPhysicalExamsIdRouteHandler,
  putApiPatientRiskAssessmentsIdRouteHandler,
  putApiPatientsIdRouteHandler,
  putApiPatientsSummaryIdRouteHandler,
  putApiPatientVaccineRecordsIdRouteHandler,
  putApiProblemsIdRouteHandler,
  putApiReminderProfilesIdRouteHandler,
  putApiSublabsIdRouteHandler,
  putApiTaskCategoriesIdRouteHandler,
  putApiTaskNotesIdRouteHandler,
  putApiTasksIdRouteHandler,
  putApiTaskStatusesIdRouteHandler,
  putApiTaskTemplatesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiAllergiesRoute, getApiAllergiesRouteHandler)
  .openapi(postApiAllergiesRoute, postApiAllergiesRouteHandler)
  .openapi(getApiAllergiesIdRoute, getApiAllergiesIdRouteHandler)
  .openapi(patchApiAllergiesIdRoute, patchApiAllergiesIdRouteHandler)
  .openapi(putApiAllergiesIdRoute, putApiAllergiesIdRouteHandler)
  .openapi(getApiAmendmentsRoute, getApiAmendmentsRouteHandler)
  .openapi(postApiAmendmentsRoute, postApiAmendmentsRouteHandler)
  .openapi(deleteApiAmendmentsIdRoute, deleteApiAmendmentsIdRouteHandler)
  .openapi(getApiAmendmentsIdRoute, getApiAmendmentsIdRouteHandler)
  .openapi(patchApiAmendmentsIdRoute, patchApiAmendmentsIdRouteHandler)
  .openapi(putApiAmendmentsIdRoute, putApiAmendmentsIdRouteHandler)
  .openapi(getApiAppointmentProfilesRoute, getApiAppointmentProfilesRouteHandler)
  .openapi(postApiAppointmentProfilesRoute, postApiAppointmentProfilesRouteHandler)
  .openapi(deleteApiAppointmentProfilesIdRoute, deleteApiAppointmentProfilesIdRouteHandler)
  .openapi(getApiAppointmentProfilesIdRoute, getApiAppointmentProfilesIdRouteHandler)
  .openapi(patchApiAppointmentProfilesIdRoute, patchApiAppointmentProfilesIdRouteHandler)
  .openapi(putApiAppointmentProfilesIdRoute, putApiAppointmentProfilesIdRouteHandler)
  .openapi(getApiAppointmentTemplatesRoute, getApiAppointmentTemplatesRouteHandler)
  .openapi(postApiAppointmentTemplatesRoute, postApiAppointmentTemplatesRouteHandler)
  .openapi(deleteApiAppointmentTemplatesIdRoute, deleteApiAppointmentTemplatesIdRouteHandler)
  .openapi(getApiAppointmentTemplatesIdRoute, getApiAppointmentTemplatesIdRouteHandler)
  .openapi(patchApiAppointmentTemplatesIdRoute, patchApiAppointmentTemplatesIdRouteHandler)
  .openapi(putApiAppointmentTemplatesIdRoute, putApiAppointmentTemplatesIdRouteHandler)
  .openapi(getApiAppointmentsRoute, getApiAppointmentsRouteHandler)
  .openapi(postApiAppointmentsRoute, postApiAppointmentsRouteHandler)
  .openapi(deleteApiAppointmentsIdRoute, deleteApiAppointmentsIdRouteHandler)
  .openapi(getApiAppointmentsIdRoute, getApiAppointmentsIdRouteHandler)
  .openapi(patchApiAppointmentsIdRoute, patchApiAppointmentsIdRouteHandler)
  .openapi(putApiAppointmentsIdRoute, putApiAppointmentsIdRouteHandler)
  .openapi(getApiBillingProfilesRoute, getApiBillingProfilesRouteHandler)
  .openapi(getApiBillingProfilesIdRoute, getApiBillingProfilesIdRouteHandler)
  .openapi(getApiCarePlansRoute, getApiCarePlansRouteHandler)
  .openapi(getApiCarePlansIdRoute, getApiCarePlansIdRouteHandler)
  .openapi(getApiCareTeamMembersRoute, getApiCareTeamMembersRouteHandler)
  .openapi(getApiCareTeamMembersIdRoute, getApiCareTeamMembersIdRouteHandler)
  .openapi(getApiClaimBillingNotesRoute, getApiClaimBillingNotesRouteHandler)
  .openapi(postApiClaimBillingNotesRoute, postApiClaimBillingNotesRouteHandler)
  .openapi(getApiClaimBillingNotesIdRoute, getApiClaimBillingNotesIdRouteHandler)
  .openapi(getApiClinicalNoteFieldTypesRoute, getApiClinicalNoteFieldTypesRouteHandler)
  .openapi(getApiClinicalNoteFieldTypesIdRoute, getApiClinicalNoteFieldTypesIdRouteHandler)
  .openapi(getApiClinicalNoteFieldValuesRoute, getApiClinicalNoteFieldValuesRouteHandler)
  .openapi(postApiClinicalNoteFieldValuesRoute, postApiClinicalNoteFieldValuesRouteHandler)
  .openapi(getApiClinicalNoteFieldValuesIdRoute, getApiClinicalNoteFieldValuesIdRouteHandler)
  .openapi(patchApiClinicalNoteFieldValuesIdRoute, patchApiClinicalNoteFieldValuesIdRouteHandler)
  .openapi(putApiClinicalNoteFieldValuesIdRoute, putApiClinicalNoteFieldValuesIdRouteHandler)
  .openapi(getApiClinicalNoteTemplatesRoute, getApiClinicalNoteTemplatesRouteHandler)
  .openapi(getApiClinicalNoteTemplatesIdRoute, getApiClinicalNoteTemplatesIdRouteHandler)
  .openapi(getApiClinicalNotesRoute, getApiClinicalNotesRouteHandler)
  .openapi(getApiClinicalNotesIdRoute, getApiClinicalNotesIdRouteHandler)
  .openapi(getApiCommLogsRoute, getApiCommLogsRouteHandler)
  .openapi(postApiCommLogsRoute, postApiCommLogsRouteHandler)
  .openapi(getApiCommLogsIdRoute, getApiCommLogsIdRouteHandler)
  .openapi(patchApiCommLogsIdRoute, patchApiCommLogsIdRouteHandler)
  .openapi(putApiCommLogsIdRoute, putApiCommLogsIdRouteHandler)
  .openapi(getApiConsentFormsRoute, getApiConsentFormsRouteHandler)
  .openapi(postApiConsentFormsRoute, postApiConsentFormsRouteHandler)
  .openapi(getApiConsentFormsIdRoute, getApiConsentFormsIdRouteHandler)
  .openapi(patchApiConsentFormsIdRoute, patchApiConsentFormsIdRouteHandler)
  .openapi(putApiConsentFormsIdRoute, putApiConsentFormsIdRouteHandler)
  .openapi(
    postApiConsentFormsIdApplyToAppointmentRoute,
    postApiConsentFormsIdApplyToAppointmentRouteHandler,
  )
  .openapi(
    postApiConsentFormsIdUnapplyFromAppointmentRoute,
    postApiConsentFormsIdUnapplyFromAppointmentRouteHandler,
  )
  .openapi(getApiCustomAppointmentFieldsRoute, getApiCustomAppointmentFieldsRouteHandler)
  .openapi(postApiCustomAppointmentFieldsRoute, postApiCustomAppointmentFieldsRouteHandler)
  .openapi(getApiCustomAppointmentFieldsIdRoute, getApiCustomAppointmentFieldsIdRouteHandler)
  .openapi(patchApiCustomAppointmentFieldsIdRoute, patchApiCustomAppointmentFieldsIdRouteHandler)
  .openapi(putApiCustomAppointmentFieldsIdRoute, putApiCustomAppointmentFieldsIdRouteHandler)
  .openapi(getApiCustomDemographicsRoute, getApiCustomDemographicsRouteHandler)
  .openapi(postApiCustomDemographicsRoute, postApiCustomDemographicsRouteHandler)
  .openapi(getApiCustomDemographicsIdRoute, getApiCustomDemographicsIdRouteHandler)
  .openapi(patchApiCustomDemographicsIdRoute, patchApiCustomDemographicsIdRouteHandler)
  .openapi(putApiCustomDemographicsIdRoute, putApiCustomDemographicsIdRouteHandler)
  .openapi(getApiCustomInsurancePlanNamesRoute, getApiCustomInsurancePlanNamesRouteHandler)
  .openapi(getApiCustomInsurancePlanNamesIdRoute, getApiCustomInsurancePlanNamesIdRouteHandler)
  .openapi(getApiCustomVitalsRoute, getApiCustomVitalsRouteHandler)
  .openapi(getApiCustomVitalsIdRoute, getApiCustomVitalsIdRouteHandler)
  .openapi(getApiDoctorsRoute, getApiDoctorsRouteHandler)
  .openapi(getApiDoctorsIdRoute, getApiDoctorsIdRouteHandler)
  .openapi(getApiDocumentsRoute, getApiDocumentsRouteHandler)
  .openapi(postApiDocumentsRoute, postApiDocumentsRouteHandler)
  .openapi(deleteApiDocumentsIdRoute, deleteApiDocumentsIdRouteHandler)
  .openapi(getApiDocumentsIdRoute, getApiDocumentsIdRouteHandler)
  .openapi(patchApiDocumentsIdRoute, patchApiDocumentsIdRouteHandler)
  .openapi(putApiDocumentsIdRoute, putApiDocumentsIdRouteHandler)
  .openapi(getApiEligibilityChecksRoute, getApiEligibilityChecksRouteHandler)
  .openapi(getApiEligibilityChecksIdRoute, getApiEligibilityChecksIdRouteHandler)
  .openapi(getApiEobsRoute, getApiEobsRouteHandler)
  .openapi(postApiEobsRoute, postApiEobsRouteHandler)
  .openapi(getApiEobsIdRoute, getApiEobsIdRouteHandler)
  .openapi(getApiFeeSchedulesRoute, getApiFeeSchedulesRouteHandler)
  .openapi(getApiFeeSchedulesIdRoute, getApiFeeSchedulesIdRouteHandler)
  .openapi(getApiImplantableDevicesRoute, getApiImplantableDevicesRouteHandler)
  .openapi(getApiImplantableDevicesIdRoute, getApiImplantableDevicesIdRouteHandler)
  .openapi(getApiInsurancesRoute, getApiInsurancesRouteHandler)
  .openapi(getApiInsurancesIdRoute, getApiInsurancesIdRouteHandler)
  .openapi(getApiInventoryCategoriesRoute, getApiInventoryCategoriesRouteHandler)
  .openapi(getApiInventoryCategoriesIdRoute, getApiInventoryCategoriesIdRouteHandler)
  .openapi(getApiInventoryVaccinesRoute, getApiInventoryVaccinesRouteHandler)
  .openapi(postApiInventoryVaccinesRoute, postApiInventoryVaccinesRouteHandler)
  .openapi(getApiInventoryVaccinesIdRoute, getApiInventoryVaccinesIdRouteHandler)
  .openapi(getApiLabDocumentsRoute, getApiLabDocumentsRouteHandler)
  .openapi(postApiLabDocumentsRoute, postApiLabDocumentsRouteHandler)
  .openapi(deleteApiLabDocumentsIdRoute, deleteApiLabDocumentsIdRouteHandler)
  .openapi(getApiLabDocumentsIdRoute, getApiLabDocumentsIdRouteHandler)
  .openapi(patchApiLabDocumentsIdRoute, patchApiLabDocumentsIdRouteHandler)
  .openapi(putApiLabDocumentsIdRoute, putApiLabDocumentsIdRouteHandler)
  .openapi(getApiLabOrdersRoute, getApiLabOrdersRouteHandler)
  .openapi(postApiLabOrdersRoute, postApiLabOrdersRouteHandler)
  .openapi(deleteApiLabOrdersIdRoute, deleteApiLabOrdersIdRouteHandler)
  .openapi(getApiLabOrdersIdRoute, getApiLabOrdersIdRouteHandler)
  .openapi(patchApiLabOrdersIdRoute, patchApiLabOrdersIdRouteHandler)
  .openapi(putApiLabOrdersIdRoute, putApiLabOrdersIdRouteHandler)
  .openapi(getApiLabOrdersSummaryRoute, getApiLabOrdersSummaryRouteHandler)
  .openapi(getApiLabOrdersSummaryIdRoute, getApiLabOrdersSummaryIdRouteHandler)
  .openapi(getApiLabResultsRoute, getApiLabResultsRouteHandler)
  .openapi(postApiLabResultsRoute, postApiLabResultsRouteHandler)
  .openapi(deleteApiLabResultsIdRoute, deleteApiLabResultsIdRouteHandler)
  .openapi(getApiLabResultsIdRoute, getApiLabResultsIdRouteHandler)
  .openapi(patchApiLabResultsIdRoute, patchApiLabResultsIdRouteHandler)
  .openapi(putApiLabResultsIdRoute, putApiLabResultsIdRouteHandler)
  .openapi(getApiLabTestsRoute, getApiLabTestsRouteHandler)
  .openapi(postApiLabTestsRoute, postApiLabTestsRouteHandler)
  .openapi(deleteApiLabTestsIdRoute, deleteApiLabTestsIdRouteHandler)
  .openapi(getApiLabTestsIdRoute, getApiLabTestsIdRouteHandler)
  .openapi(patchApiLabTestsIdRoute, patchApiLabTestsIdRouteHandler)
  .openapi(putApiLabTestsIdRoute, putApiLabTestsIdRouteHandler)
  .openapi(getApiLineItemsRoute, getApiLineItemsRouteHandler)
  .openapi(postApiLineItemsRoute, postApiLineItemsRouteHandler)
  .openapi(deleteApiLineItemsIdRoute, deleteApiLineItemsIdRouteHandler)
  .openapi(getApiLineItemsIdRoute, getApiLineItemsIdRouteHandler)
  .openapi(patchApiLineItemsIdRoute, patchApiLineItemsIdRouteHandler)
  .openapi(putApiLineItemsIdRoute, putApiLineItemsIdRouteHandler)
  .openapi(getApiMedicationsRoute, getApiMedicationsRouteHandler)
  .openapi(postApiMedicationsRoute, postApiMedicationsRouteHandler)
  .openapi(getApiMedicationsIdRoute, getApiMedicationsIdRouteHandler)
  .openapi(patchApiMedicationsIdRoute, patchApiMedicationsIdRouteHandler)
  .openapi(putApiMedicationsIdRoute, putApiMedicationsIdRouteHandler)
  .openapi(
    patchApiMedicationsIdAppendToPharmacyNoteRoute,
    patchApiMedicationsIdAppendToPharmacyNoteRouteHandler,
  )
  .openapi(getApiMessagesRoute, getApiMessagesRouteHandler)
  .openapi(postApiMessagesRoute, postApiMessagesRouteHandler)
  .openapi(deleteApiMessagesIdRoute, deleteApiMessagesIdRouteHandler)
  .openapi(getApiMessagesIdRoute, getApiMessagesIdRouteHandler)
  .openapi(patchApiMessagesIdRoute, patchApiMessagesIdRouteHandler)
  .openapi(putApiMessagesIdRoute, putApiMessagesIdRouteHandler)
  .openapi(getApiOfficesRoute, getApiOfficesRouteHandler)
  .openapi(getApiOfficesIdRoute, getApiOfficesIdRouteHandler)
  .openapi(patchApiOfficesIdRoute, patchApiOfficesIdRouteHandler)
  .openapi(putApiOfficesIdRoute, putApiOfficesIdRouteHandler)
  .openapi(postApiOfficesIdAddExamRoomRoute, postApiOfficesIdAddExamRoomRouteHandler)
  .openapi(getApiPatientCommunicationsRoute, getApiPatientCommunicationsRouteHandler)
  .openapi(postApiPatientCommunicationsRoute, postApiPatientCommunicationsRouteHandler)
  .openapi(getApiPatientCommunicationsIdRoute, getApiPatientCommunicationsIdRouteHandler)
  .openapi(patchApiPatientCommunicationsIdRoute, patchApiPatientCommunicationsIdRouteHandler)
  .openapi(putApiPatientCommunicationsIdRoute, putApiPatientCommunicationsIdRouteHandler)
  .openapi(getApiPatientFlagTypesRoute, getApiPatientFlagTypesRouteHandler)
  .openapi(postApiPatientFlagTypesRoute, postApiPatientFlagTypesRouteHandler)
  .openapi(getApiPatientFlagTypesIdRoute, getApiPatientFlagTypesIdRouteHandler)
  .openapi(patchApiPatientFlagTypesIdRoute, patchApiPatientFlagTypesIdRouteHandler)
  .openapi(putApiPatientFlagTypesIdRoute, putApiPatientFlagTypesIdRouteHandler)
  .openapi(getApiPatientInterventionsRoute, getApiPatientInterventionsRouteHandler)
  .openapi(postApiPatientInterventionsRoute, postApiPatientInterventionsRouteHandler)
  .openapi(getApiPatientInterventionsIdRoute, getApiPatientInterventionsIdRouteHandler)
  .openapi(patchApiPatientInterventionsIdRoute, patchApiPatientInterventionsIdRouteHandler)
  .openapi(putApiPatientInterventionsIdRoute, putApiPatientInterventionsIdRouteHandler)
  .openapi(getApiPatientLabResultsRoute, getApiPatientLabResultsRouteHandler)
  .openapi(postApiPatientLabResultsRoute, postApiPatientLabResultsRouteHandler)
  .openapi(deleteApiPatientLabResultsIdRoute, deleteApiPatientLabResultsIdRouteHandler)
  .openapi(getApiPatientLabResultsIdRoute, getApiPatientLabResultsIdRouteHandler)
  .openapi(patchApiPatientLabResultsIdRoute, patchApiPatientLabResultsIdRouteHandler)
  .openapi(putApiPatientLabResultsIdRoute, putApiPatientLabResultsIdRouteHandler)
  .openapi(getApiPatientMessagesRoute, getApiPatientMessagesRouteHandler)
  .openapi(postApiPatientMessagesRoute, postApiPatientMessagesRouteHandler)
  .openapi(getApiPatientMessagesIdRoute, getApiPatientMessagesIdRouteHandler)
  .openapi(patchApiPatientMessagesIdRoute, patchApiPatientMessagesIdRouteHandler)
  .openapi(putApiPatientMessagesIdRoute, putApiPatientMessagesIdRouteHandler)
  .openapi(getApiPatientPaymentLogRoute, getApiPatientPaymentLogRouteHandler)
  .openapi(getApiPatientPaymentLogIdRoute, getApiPatientPaymentLogIdRouteHandler)
  .openapi(getApiPatientPaymentsRoute, getApiPatientPaymentsRouteHandler)
  .openapi(postApiPatientPaymentsRoute, postApiPatientPaymentsRouteHandler)
  .openapi(getApiPatientPaymentsIdRoute, getApiPatientPaymentsIdRouteHandler)
  .openapi(getApiPatientPhysicalExamsRoute, getApiPatientPhysicalExamsRouteHandler)
  .openapi(postApiPatientPhysicalExamsRoute, postApiPatientPhysicalExamsRouteHandler)
  .openapi(getApiPatientPhysicalExamsIdRoute, getApiPatientPhysicalExamsIdRouteHandler)
  .openapi(patchApiPatientPhysicalExamsIdRoute, patchApiPatientPhysicalExamsIdRouteHandler)
  .openapi(putApiPatientPhysicalExamsIdRoute, putApiPatientPhysicalExamsIdRouteHandler)
  .openapi(getApiPatientRiskAssessmentsRoute, getApiPatientRiskAssessmentsRouteHandler)
  .openapi(postApiPatientRiskAssessmentsRoute, postApiPatientRiskAssessmentsRouteHandler)
  .openapi(getApiPatientRiskAssessmentsIdRoute, getApiPatientRiskAssessmentsIdRouteHandler)
  .openapi(patchApiPatientRiskAssessmentsIdRoute, patchApiPatientRiskAssessmentsIdRouteHandler)
  .openapi(putApiPatientRiskAssessmentsIdRoute, putApiPatientRiskAssessmentsIdRouteHandler)
  .openapi(getApiPatientVaccineRecordsRoute, getApiPatientVaccineRecordsRouteHandler)
  .openapi(postApiPatientVaccineRecordsRoute, postApiPatientVaccineRecordsRouteHandler)
  .openapi(getApiPatientVaccineRecordsIdRoute, getApiPatientVaccineRecordsIdRouteHandler)
  .openapi(patchApiPatientVaccineRecordsIdRoute, patchApiPatientVaccineRecordsIdRouteHandler)
  .openapi(putApiPatientVaccineRecordsIdRoute, putApiPatientVaccineRecordsIdRouteHandler)
  .openapi(getApiPatientsRoute, getApiPatientsRouteHandler)
  .openapi(postApiPatientsRoute, postApiPatientsRouteHandler)
  .openapi(deleteApiPatientsIdRoute, deleteApiPatientsIdRouteHandler)
  .openapi(getApiPatientsIdRoute, getApiPatientsIdRouteHandler)
  .openapi(patchApiPatientsIdRoute, patchApiPatientsIdRouteHandler)
  .openapi(putApiPatientsIdRoute, putApiPatientsIdRouteHandler)
  .openapi(getApiPatientsIdCcdaRoute, getApiPatientsIdCcdaRouteHandler)
  .openapi(deleteApiPatientsIdOnpatientAccessRoute, deleteApiPatientsIdOnpatientAccessRouteHandler)
  .openapi(getApiPatientsIdOnpatientAccessRoute, getApiPatientsIdOnpatientAccessRouteHandler)
  .openapi(postApiPatientsIdOnpatientAccessRoute, postApiPatientsIdOnpatientAccessRouteHandler)
  .openapi(getApiPatientsIdQrda1Route, getApiPatientsIdQrda1RouteHandler)
  .openapi(getApiPatientsSummaryRoute, getApiPatientsSummaryRouteHandler)
  .openapi(postApiPatientsSummaryRoute, postApiPatientsSummaryRouteHandler)
  .openapi(deleteApiPatientsSummaryIdRoute, deleteApiPatientsSummaryIdRouteHandler)
  .openapi(getApiPatientsSummaryIdRoute, getApiPatientsSummaryIdRouteHandler)
  .openapi(patchApiPatientsSummaryIdRoute, patchApiPatientsSummaryIdRouteHandler)
  .openapi(putApiPatientsSummaryIdRoute, putApiPatientsSummaryIdRouteHandler)
  .openapi(getApiPrescriptionMessagesRoute, getApiPrescriptionMessagesRouteHandler)
  .openapi(getApiPrescriptionMessagesIdRoute, getApiPrescriptionMessagesIdRouteHandler)
  .openapi(getApiProblemsRoute, getApiProblemsRouteHandler)
  .openapi(postApiProblemsRoute, postApiProblemsRouteHandler)
  .openapi(getApiProblemsIdRoute, getApiProblemsIdRouteHandler)
  .openapi(patchApiProblemsIdRoute, patchApiProblemsIdRouteHandler)
  .openapi(putApiProblemsIdRoute, putApiProblemsIdRouteHandler)
  .openapi(getApiProceduresRoute, getApiProceduresRouteHandler)
  .openapi(getApiProceduresIdRoute, getApiProceduresIdRouteHandler)
  .openapi(getApiReminderProfilesRoute, getApiReminderProfilesRouteHandler)
  .openapi(postApiReminderProfilesRoute, postApiReminderProfilesRouteHandler)
  .openapi(deleteApiReminderProfilesIdRoute, deleteApiReminderProfilesIdRouteHandler)
  .openapi(getApiReminderProfilesIdRoute, getApiReminderProfilesIdRouteHandler)
  .openapi(patchApiReminderProfilesIdRoute, patchApiReminderProfilesIdRouteHandler)
  .openapi(putApiReminderProfilesIdRoute, putApiReminderProfilesIdRouteHandler)
  .openapi(getApiSublabsRoute, getApiSublabsRouteHandler)
  .openapi(postApiSublabsRoute, postApiSublabsRouteHandler)
  .openapi(deleteApiSublabsIdRoute, deleteApiSublabsIdRouteHandler)
  .openapi(getApiSublabsIdRoute, getApiSublabsIdRouteHandler)
  .openapi(patchApiSublabsIdRoute, patchApiSublabsIdRouteHandler)
  .openapi(putApiSublabsIdRoute, putApiSublabsIdRouteHandler)
  .openapi(getApiTaskCategoriesRoute, getApiTaskCategoriesRouteHandler)
  .openapi(postApiTaskCategoriesRoute, postApiTaskCategoriesRouteHandler)
  .openapi(getApiTaskCategoriesIdRoute, getApiTaskCategoriesIdRouteHandler)
  .openapi(patchApiTaskCategoriesIdRoute, patchApiTaskCategoriesIdRouteHandler)
  .openapi(putApiTaskCategoriesIdRoute, putApiTaskCategoriesIdRouteHandler)
  .openapi(getApiTaskNotesRoute, getApiTaskNotesRouteHandler)
  .openapi(postApiTaskNotesRoute, postApiTaskNotesRouteHandler)
  .openapi(getApiTaskNotesIdRoute, getApiTaskNotesIdRouteHandler)
  .openapi(patchApiTaskNotesIdRoute, patchApiTaskNotesIdRouteHandler)
  .openapi(putApiTaskNotesIdRoute, putApiTaskNotesIdRouteHandler)
  .openapi(getApiTaskStatusesRoute, getApiTaskStatusesRouteHandler)
  .openapi(postApiTaskStatusesRoute, postApiTaskStatusesRouteHandler)
  .openapi(getApiTaskStatusesIdRoute, getApiTaskStatusesIdRouteHandler)
  .openapi(patchApiTaskStatusesIdRoute, patchApiTaskStatusesIdRouteHandler)
  .openapi(putApiTaskStatusesIdRoute, putApiTaskStatusesIdRouteHandler)
  .openapi(getApiTaskTemplatesRoute, getApiTaskTemplatesRouteHandler)
  .openapi(postApiTaskTemplatesRoute, postApiTaskTemplatesRouteHandler)
  .openapi(getApiTaskTemplatesIdRoute, getApiTaskTemplatesIdRouteHandler)
  .openapi(patchApiTaskTemplatesIdRoute, patchApiTaskTemplatesIdRouteHandler)
  .openapi(putApiTaskTemplatesIdRoute, putApiTaskTemplatesIdRouteHandler)
  .openapi(getApiTasksRoute, getApiTasksRouteHandler)
  .openapi(postApiTasksRoute, postApiTasksRouteHandler)
  .openapi(getApiTasksIdRoute, getApiTasksIdRouteHandler)
  .openapi(patchApiTasksIdRoute, patchApiTasksIdRouteHandler)
  .openapi(putApiTasksIdRoute, putApiTasksIdRouteHandler)
  .openapi(getApiTransactionsRoute, getApiTransactionsRouteHandler)
  .openapi(getApiTransactionsIdRoute, getApiTransactionsIdRouteHandler)
  .openapi(getApiUserGroupsRoute, getApiUserGroupsRouteHandler)
  .openapi(getApiUserGroupsIdRoute, getApiUserGroupsIdRouteHandler)
  .openapi(getApiUsersRoute, getApiUsersRouteHandler)
  .openapi(getApiUsersIdRoute, getApiUsersIdRouteHandler)

export default app
