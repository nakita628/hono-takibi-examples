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
  getApiConsentFormsIdRoute,
  getApiConsentFormsRoute,
  getApiCustomAppointmentFieldsIdRoute,
  getApiCustomAppointmentFieldsRoute,
  getApiCustomDemographicsIdRoute,
  getApiCustomDemographicsRoute,
  getApiCustomVitalsIdRoute,
  getApiCustomVitalsRoute,
  getApiDocumentsIdRoute,
  getApiDocumentsRoute,
  getApiEobsIdRoute,
  getApiEobsRoute,
  getApiFeeSchedulesIdRoute,
  getApiFeeSchedulesRoute,
  getApiImplantableDevicesIdRoute,
  getApiImplantableDevicesRoute,
  getApiInsurancesIdRoute,
  getApiInsurancesRoute,
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
  getApiMedicationsIdRoute,
  getApiMedicationsRoute,
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
  getApiReminderProfilesIdRoute,
  getApiReminderProfilesRoute,
  getApiSublabsIdRoute,
  getApiSublabsRoute,
  patchApiAllergiesIdRoute,
  patchApiAmendmentsIdRoute,
  patchApiAppointmentProfilesIdRoute,
  patchApiAppointmentsIdRoute,
  patchApiAppointmentTemplatesIdRoute,
  patchApiClinicalNoteFieldValuesIdRoute,
  patchApiConsentFormsIdRoute,
  patchApiCustomAppointmentFieldsIdRoute,
  patchApiCustomDemographicsIdRoute,
  patchApiDocumentsIdRoute,
  patchApiLabDocumentsIdRoute,
  patchApiLabOrdersIdRoute,
  patchApiLabResultsIdRoute,
  patchApiLabTestsIdRoute,
  patchApiMedicationsIdAppendToPharmacyNoteRoute,
  patchApiMedicationsIdRoute,
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
  postApiAllergiesRoute,
  postApiAmendmentsRoute,
  postApiAppointmentProfilesRoute,
  postApiAppointmentsRoute,
  postApiAppointmentTemplatesRoute,
  postApiClaimBillingNotesRoute,
  postApiClinicalNoteFieldValuesRoute,
  postApiConsentFormsIdApplyToAppointmentRoute,
  postApiConsentFormsIdUnapplyFromAppointmentRoute,
  postApiConsentFormsRoute,
  postApiCustomAppointmentFieldsRoute,
  postApiCustomDemographicsRoute,
  postApiDocumentsRoute,
  postApiEobsRoute,
  postApiLabDocumentsRoute,
  postApiLabOrdersRoute,
  postApiLabResultsRoute,
  postApiLabTestsRoute,
  postApiMedicationsRoute,
  postApiPatientCommunicationsRoute,
  postApiPatientFlagTypesRoute,
  postApiPatientInterventionsRoute,
  postApiPatientLabResultsRoute,
  postApiPatientMessagesRoute,
  postApiPatientPhysicalExamsRoute,
  postApiPatientRiskAssessmentsRoute,
  postApiPatientsIdOnpatientAccessRoute,
  postApiPatientsRoute,
  postApiPatientsSummaryRoute,
  postApiPatientVaccineRecordsRoute,
  postApiProblemsRoute,
  postApiReminderProfilesRoute,
  postApiSublabsRoute,
  putApiAllergiesIdRoute,
  putApiAmendmentsIdRoute,
  putApiAppointmentProfilesIdRoute,
  putApiAppointmentsIdRoute,
  putApiAppointmentTemplatesIdRoute,
  putApiClinicalNoteFieldValuesIdRoute,
  putApiConsentFormsIdRoute,
  putApiCustomAppointmentFieldsIdRoute,
  putApiCustomDemographicsIdRoute,
  putApiDocumentsIdRoute,
  putApiLabDocumentsIdRoute,
  putApiLabOrdersIdRoute,
  putApiLabResultsIdRoute,
  putApiLabTestsIdRoute,
  putApiMedicationsIdRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const clinicalHandler = app
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
  .openapi(getApiCustomVitalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomVitalsIdRoute, (c) => {
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
