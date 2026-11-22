import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAllergies(
  args: InferRequestType<typeof client.api.allergies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.allergies.$get(args, options))
}

export async function postApiAllergies(
  args: InferRequestType<typeof client.api.allergies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.allergies.$post(args, options))
}

export async function getApiAllergiesId(
  args: InferRequestType<(typeof client.api.allergies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.allergies[':id'].$get(args, options))
}

export async function putApiAllergiesId(
  args: InferRequestType<(typeof client.api.allergies)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.allergies[':id'].$put(args, options))
}

export async function patchApiAllergiesId(
  args: InferRequestType<(typeof client.api.allergies)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.allergies[':id'].$patch(args, options))
}

export async function getApiAmendments(
  args: InferRequestType<typeof client.api.amendments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments.$get(args, options))
}

export async function postApiAmendments(
  args: InferRequestType<typeof client.api.amendments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments.$post(args, options))
}

export async function getApiAmendmentsId(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments[':id'].$get(args, options))
}

export async function putApiAmendmentsId(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments[':id'].$put(args, options))
}

export async function deleteApiAmendmentsId(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments[':id'].$delete(args, options))
}

export async function patchApiAmendmentsId(
  args: InferRequestType<(typeof client.api.amendments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.amendments[':id'].$patch(args, options))
}

export async function getApiAppointmentProfiles(
  args: InferRequestType<typeof client.api.appointment_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles.$get(args, options))
}

export async function postApiAppointmentProfiles(
  args: InferRequestType<typeof client.api.appointment_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles.$post(args, options))
}

export async function getApiAppointmentProfilesId(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles[':id'].$get(args, options))
}

export async function putApiAppointmentProfilesId(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles[':id'].$put(args, options))
}

export async function deleteApiAppointmentProfilesId(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles[':id'].$delete(args, options))
}

export async function patchApiAppointmentProfilesId(
  args: InferRequestType<(typeof client.api.appointment_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_profiles[':id'].$patch(args, options))
}

export async function getApiAppointmentTemplates(
  args: InferRequestType<typeof client.api.appointment_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates.$get(args, options))
}

export async function postApiAppointmentTemplates(
  args: InferRequestType<typeof client.api.appointment_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates.$post(args, options))
}

export async function getApiAppointmentTemplatesId(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates[':id'].$get(args, options))
}

export async function putApiAppointmentTemplatesId(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates[':id'].$put(args, options))
}

export async function deleteApiAppointmentTemplatesId(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates[':id'].$delete(args, options))
}

export async function patchApiAppointmentTemplatesId(
  args: InferRequestType<(typeof client.api.appointment_templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointment_templates[':id'].$patch(args, options))
}

export async function getApiAppointments(
  args: InferRequestType<typeof client.api.appointments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments.$get(args, options))
}

export async function postApiAppointments(
  args: InferRequestType<typeof client.api.appointments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments.$post(args, options))
}

export async function getApiAppointmentsId(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments[':id'].$get(args, options))
}

export async function putApiAppointmentsId(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments[':id'].$put(args, options))
}

export async function deleteApiAppointmentsId(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments[':id'].$delete(args, options))
}

export async function patchApiAppointmentsId(
  args: InferRequestType<(typeof client.api.appointments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.appointments[':id'].$patch(args, options))
}

export async function getApiBillingProfiles(
  args: InferRequestType<typeof client.api.billing_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.billing_profiles.$get(args, options))
}

export async function getApiBillingProfilesId(
  args: InferRequestType<(typeof client.api.billing_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.billing_profiles[':id'].$get(args, options))
}

export async function getApiCarePlans(
  args: InferRequestType<typeof client.api.care_plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.care_plans.$get(args, options))
}

export async function getApiCarePlansId(
  args: InferRequestType<(typeof client.api.care_plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.care_plans[':id'].$get(args, options))
}

export async function getApiCareTeamMembers(
  args: InferRequestType<typeof client.api.care_team_members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.care_team_members.$get(args, options))
}

export async function getApiCareTeamMembersId(
  args: InferRequestType<(typeof client.api.care_team_members)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.care_team_members[':id'].$get(args, options))
}

export async function getApiClaimBillingNotes(
  args: InferRequestType<typeof client.api.claim_billing_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.claim_billing_notes.$get(args, options))
}

export async function postApiClaimBillingNotes(
  args: InferRequestType<typeof client.api.claim_billing_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.claim_billing_notes.$post(args, options))
}

export async function getApiClaimBillingNotesId(
  args: InferRequestType<(typeof client.api.claim_billing_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.claim_billing_notes[':id'].$get(args, options))
}

export async function getApiClinicalNoteFieldTypes(
  args: InferRequestType<typeof client.api.clinical_note_field_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_types.$get(args, options))
}

export async function getApiClinicalNoteFieldTypesId(
  args: InferRequestType<(typeof client.api.clinical_note_field_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_types[':id'].$get(args, options))
}

export async function getApiClinicalNoteFieldValues(
  args: InferRequestType<typeof client.api.clinical_note_field_values.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_values.$get(args, options))
}

export async function postApiClinicalNoteFieldValues(
  args: InferRequestType<typeof client.api.clinical_note_field_values.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_values.$post(args, options))
}

export async function getApiClinicalNoteFieldValuesId(
  args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_values[':id'].$get(args, options))
}

export async function putApiClinicalNoteFieldValuesId(
  args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_values[':id'].$put(args, options))
}

export async function patchApiClinicalNoteFieldValuesId(
  args: InferRequestType<(typeof client.api.clinical_note_field_values)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_field_values[':id'].$patch(args, options))
}

export async function getApiClinicalNoteTemplates(
  args: InferRequestType<typeof client.api.clinical_note_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_templates.$get(args, options))
}

export async function getApiClinicalNoteTemplatesId(
  args: InferRequestType<(typeof client.api.clinical_note_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_note_templates[':id'].$get(args, options))
}

export async function getApiClinicalNotes(
  args: InferRequestType<typeof client.api.clinical_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_notes.$get(args, options))
}

export async function getApiClinicalNotesId(
  args: InferRequestType<(typeof client.api.clinical_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.clinical_notes[':id'].$get(args, options))
}

export async function getApiCommLogs(
  args: InferRequestType<typeof client.api.comm_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comm_logs.$get(args, options))
}

export async function postApiCommLogs(
  args: InferRequestType<typeof client.api.comm_logs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comm_logs.$post(args, options))
}

export async function getApiCommLogsId(
  args: InferRequestType<(typeof client.api.comm_logs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comm_logs[':id'].$get(args, options))
}

export async function putApiCommLogsId(
  args: InferRequestType<(typeof client.api.comm_logs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comm_logs[':id'].$put(args, options))
}

export async function patchApiCommLogsId(
  args: InferRequestType<(typeof client.api.comm_logs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.comm_logs[':id'].$patch(args, options))
}

export async function getApiConsentForms(
  args: InferRequestType<typeof client.api.consent_forms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent_forms.$get(args, options))
}

export async function postApiConsentForms(
  args: InferRequestType<typeof client.api.consent_forms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent_forms.$post(args, options))
}

export async function getApiConsentFormsId(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent_forms[':id'].$get(args, options))
}

export async function putApiConsentFormsId(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent_forms[':id'].$put(args, options))
}

export async function patchApiConsentFormsId(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.consent_forms[':id'].$patch(args, options))
}

export async function postApiConsentFormsIdApplyToAppointment(
  args: InferRequestType<(typeof client.api.consent_forms)[':id']['apply_to_appointment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.consent_forms[':id'].apply_to_appointment.$post(args, options),
  )
}

export async function postApiConsentFormsIdUnapplyFromAppointment(
  args: InferRequestType<
    (typeof client.api.consent_forms)[':id']['unapply_from_appointment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.consent_forms[':id'].unapply_from_appointment.$post(args, options),
  )
}

export async function getApiCustomAppointmentFields(
  args: InferRequestType<typeof client.api.custom_appointment_fields.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_appointment_fields.$get(args, options))
}

export async function postApiCustomAppointmentFields(
  args: InferRequestType<typeof client.api.custom_appointment_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_appointment_fields.$post(args, options))
}

export async function getApiCustomAppointmentFieldsId(
  args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_appointment_fields[':id'].$get(args, options))
}

export async function putApiCustomAppointmentFieldsId(
  args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_appointment_fields[':id'].$put(args, options))
}

export async function patchApiCustomAppointmentFieldsId(
  args: InferRequestType<(typeof client.api.custom_appointment_fields)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_appointment_fields[':id'].$patch(args, options))
}

export async function getApiCustomDemographics(
  args: InferRequestType<typeof client.api.custom_demographics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_demographics.$get(args, options))
}

export async function postApiCustomDemographics(
  args: InferRequestType<typeof client.api.custom_demographics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_demographics.$post(args, options))
}

export async function getApiCustomDemographicsId(
  args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_demographics[':id'].$get(args, options))
}

export async function putApiCustomDemographicsId(
  args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_demographics[':id'].$put(args, options))
}

export async function patchApiCustomDemographicsId(
  args: InferRequestType<(typeof client.api.custom_demographics)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_demographics[':id'].$patch(args, options))
}

export async function getApiCustomInsurancePlanNames(
  args: InferRequestType<typeof client.api.custom_insurance_plan_names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_insurance_plan_names.$get(args, options))
}

export async function getApiCustomInsurancePlanNamesId(
  args: InferRequestType<(typeof client.api.custom_insurance_plan_names)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_insurance_plan_names[':id'].$get(args, options))
}

export async function getApiCustomVitals(
  args: InferRequestType<typeof client.api.custom_vitals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_vitals.$get(args, options))
}

export async function getApiCustomVitalsId(
  args: InferRequestType<(typeof client.api.custom_vitals)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.custom_vitals[':id'].$get(args, options))
}

export async function getApiDoctors(
  args: InferRequestType<typeof client.api.doctors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.doctors.$get(args, options))
}

export async function getApiDoctorsId(
  args: InferRequestType<(typeof client.api.doctors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.doctors[':id'].$get(args, options))
}

export async function getApiDocuments(
  args: InferRequestType<typeof client.api.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents.$get(args, options))
}

export async function postApiDocuments(
  args: InferRequestType<typeof client.api.documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents.$post(args, options))
}

export async function getApiDocumentsId(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].$get(args, options))
}

export async function putApiDocumentsId(
  args: InferRequestType<(typeof client.api.documents)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].$put(args, options))
}

export async function deleteApiDocumentsId(
  args: InferRequestType<(typeof client.api.documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].$delete(args, options))
}

export async function patchApiDocumentsId(
  args: InferRequestType<(typeof client.api.documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.documents[':id'].$patch(args, options))
}

export async function getApiEligibilityChecks(
  args: InferRequestType<typeof client.api.eligibility_checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.eligibility_checks.$get(args, options))
}

export async function getApiEligibilityChecksId(
  args: InferRequestType<(typeof client.api.eligibility_checks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.eligibility_checks[':id'].$get(args, options))
}

export async function getApiEobs(
  args: InferRequestType<typeof client.api.eobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.eobs.$get(args, options))
}

export async function postApiEobs(
  args: InferRequestType<typeof client.api.eobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.eobs.$post(args, options))
}

export async function getApiEobsId(
  args: InferRequestType<(typeof client.api.eobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.eobs[':id'].$get(args, options))
}

export async function getApiFeeSchedules(
  args: InferRequestType<typeof client.api.fee_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fee_schedules.$get(args, options))
}

export async function getApiFeeSchedulesId(
  args: InferRequestType<(typeof client.api.fee_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.fee_schedules[':id'].$get(args, options))
}

export async function getApiImplantableDevices(
  args: InferRequestType<typeof client.api.implantable_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.implantable_devices.$get(args, options))
}

export async function getApiImplantableDevicesId(
  args: InferRequestType<(typeof client.api.implantable_devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.implantable_devices[':id'].$get(args, options))
}

export async function getApiInsurances(
  args: InferRequestType<typeof client.api.insurances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.insurances.$get(args, options))
}

export async function getApiInsurancesId(
  args: InferRequestType<(typeof client.api.insurances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.insurances[':id'].$get(args, options))
}

export async function getApiInventoryCategories(
  args: InferRequestType<typeof client.api.inventory_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.inventory_categories.$get(args, options))
}

export async function getApiInventoryCategoriesId(
  args: InferRequestType<(typeof client.api.inventory_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.inventory_categories[':id'].$get(args, options))
}

export async function getApiInventoryVaccines(
  args: InferRequestType<typeof client.api.inventory_vaccines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.inventory_vaccines.$get(args, options))
}

export async function postApiInventoryVaccines(
  args: InferRequestType<typeof client.api.inventory_vaccines.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.inventory_vaccines.$post(args, options))
}

export async function getApiInventoryVaccinesId(
  args: InferRequestType<(typeof client.api.inventory_vaccines)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.inventory_vaccines[':id'].$get(args, options))
}

export async function getApiLabDocuments(
  args: InferRequestType<typeof client.api.lab_documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents.$get(args, options))
}

export async function postApiLabDocuments(
  args: InferRequestType<typeof client.api.lab_documents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents.$post(args, options))
}

export async function getApiLabDocumentsId(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents[':id'].$get(args, options))
}

export async function putApiLabDocumentsId(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents[':id'].$put(args, options))
}

export async function deleteApiLabDocumentsId(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents[':id'].$delete(args, options))
}

export async function patchApiLabDocumentsId(
  args: InferRequestType<(typeof client.api.lab_documents)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_documents[':id'].$patch(args, options))
}

export async function getApiLabOrders(
  args: InferRequestType<typeof client.api.lab_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders.$get(args, options))
}

export async function postApiLabOrders(
  args: InferRequestType<typeof client.api.lab_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders.$post(args, options))
}

export async function getApiLabOrdersId(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders[':id'].$get(args, options))
}

export async function putApiLabOrdersId(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders[':id'].$put(args, options))
}

export async function deleteApiLabOrdersId(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders[':id'].$delete(args, options))
}

export async function patchApiLabOrdersId(
  args: InferRequestType<(typeof client.api.lab_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders[':id'].$patch(args, options))
}

export async function getApiLabOrdersSummary(
  args: InferRequestType<typeof client.api.lab_orders_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders_summary.$get(args, options))
}

export async function getApiLabOrdersSummaryId(
  args: InferRequestType<(typeof client.api.lab_orders_summary)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_orders_summary[':id'].$get(args, options))
}

export async function getApiLabResults(
  args: InferRequestType<typeof client.api.lab_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results.$get(args, options))
}

export async function postApiLabResults(
  args: InferRequestType<typeof client.api.lab_results.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results.$post(args, options))
}

export async function getApiLabResultsId(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results[':id'].$get(args, options))
}

export async function putApiLabResultsId(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results[':id'].$put(args, options))
}

export async function deleteApiLabResultsId(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results[':id'].$delete(args, options))
}

export async function patchApiLabResultsId(
  args: InferRequestType<(typeof client.api.lab_results)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_results[':id'].$patch(args, options))
}

export async function getApiLabTests(
  args: InferRequestType<typeof client.api.lab_tests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests.$get(args, options))
}

export async function postApiLabTests(
  args: InferRequestType<typeof client.api.lab_tests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests.$post(args, options))
}

export async function getApiLabTestsId(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests[':id'].$get(args, options))
}

export async function putApiLabTestsId(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests[':id'].$put(args, options))
}

export async function deleteApiLabTestsId(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests[':id'].$delete(args, options))
}

export async function patchApiLabTestsId(
  args: InferRequestType<(typeof client.api.lab_tests)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.lab_tests[':id'].$patch(args, options))
}

export async function getApiLineItems(
  args: InferRequestType<typeof client.api.line_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items.$get(args, options))
}

export async function postApiLineItems(
  args: InferRequestType<typeof client.api.line_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items.$post(args, options))
}

export async function getApiLineItemsId(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items[':id'].$get(args, options))
}

export async function putApiLineItemsId(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items[':id'].$put(args, options))
}

export async function deleteApiLineItemsId(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items[':id'].$delete(args, options))
}

export async function patchApiLineItemsId(
  args: InferRequestType<(typeof client.api.line_items)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.line_items[':id'].$patch(args, options))
}

export async function getApiMedications(
  args: InferRequestType<typeof client.api.medications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.medications.$get(args, options))
}

export async function postApiMedications(
  args: InferRequestType<typeof client.api.medications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.medications.$post(args, options))
}

export async function getApiMedicationsId(
  args: InferRequestType<(typeof client.api.medications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.medications[':id'].$get(args, options))
}

export async function putApiMedicationsId(
  args: InferRequestType<(typeof client.api.medications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.medications[':id'].$put(args, options))
}

export async function patchApiMedicationsId(
  args: InferRequestType<(typeof client.api.medications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.medications[':id'].$patch(args, options))
}

export async function patchApiMedicationsIdAppendToPharmacyNote(
  args: InferRequestType<
    (typeof client.api.medications)[':id']['append_to_pharmacy_note']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.medications[':id'].append_to_pharmacy_note.$patch(args, options),
  )
}

export async function getApiMessages(
  args: InferRequestType<typeof client.api.messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages.$get(args, options))
}

export async function postApiMessages(
  args: InferRequestType<typeof client.api.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages.$post(args, options))
}

export async function getApiMessagesId(
  args: InferRequestType<(typeof client.api.messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages[':id'].$get(args, options))
}

export async function putApiMessagesId(
  args: InferRequestType<(typeof client.api.messages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages[':id'].$put(args, options))
}

export async function deleteApiMessagesId(
  args: InferRequestType<(typeof client.api.messages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages[':id'].$delete(args, options))
}

export async function patchApiMessagesId(
  args: InferRequestType<(typeof client.api.messages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.messages[':id'].$patch(args, options))
}

export async function getApiOffices(
  args: InferRequestType<typeof client.api.offices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.offices.$get(args, options))
}

export async function getApiOfficesId(
  args: InferRequestType<(typeof client.api.offices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.offices[':id'].$get(args, options))
}

export async function putApiOfficesId(
  args: InferRequestType<(typeof client.api.offices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.offices[':id'].$put(args, options))
}

export async function patchApiOfficesId(
  args: InferRequestType<(typeof client.api.offices)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.offices[':id'].$patch(args, options))
}

export async function postApiOfficesIdAddExamRoom(
  args: InferRequestType<(typeof client.api.offices)[':id']['add_exam_room']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.offices[':id'].add_exam_room.$post(args, options))
}

export async function getApiPatientCommunications(
  args: InferRequestType<typeof client.api.patient_communications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_communications.$get(args, options))
}

export async function postApiPatientCommunications(
  args: InferRequestType<typeof client.api.patient_communications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_communications.$post(args, options))
}

export async function getApiPatientCommunicationsId(
  args: InferRequestType<(typeof client.api.patient_communications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_communications[':id'].$get(args, options))
}

export async function putApiPatientCommunicationsId(
  args: InferRequestType<(typeof client.api.patient_communications)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_communications[':id'].$put(args, options))
}

export async function patchApiPatientCommunicationsId(
  args: InferRequestType<(typeof client.api.patient_communications)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_communications[':id'].$patch(args, options))
}

export async function getApiPatientFlagTypes(
  args: InferRequestType<typeof client.api.patient_flag_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_flag_types.$get(args, options))
}

export async function postApiPatientFlagTypes(
  args: InferRequestType<typeof client.api.patient_flag_types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_flag_types.$post(args, options))
}

export async function getApiPatientFlagTypesId(
  args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_flag_types[':id'].$get(args, options))
}

export async function putApiPatientFlagTypesId(
  args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_flag_types[':id'].$put(args, options))
}

export async function patchApiPatientFlagTypesId(
  args: InferRequestType<(typeof client.api.patient_flag_types)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_flag_types[':id'].$patch(args, options))
}

export async function getApiPatientInterventions(
  args: InferRequestType<typeof client.api.patient_interventions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_interventions.$get(args, options))
}

export async function postApiPatientInterventions(
  args: InferRequestType<typeof client.api.patient_interventions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_interventions.$post(args, options))
}

export async function getApiPatientInterventionsId(
  args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_interventions[':id'].$get(args, options))
}

export async function putApiPatientInterventionsId(
  args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_interventions[':id'].$put(args, options))
}

export async function patchApiPatientInterventionsId(
  args: InferRequestType<(typeof client.api.patient_interventions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_interventions[':id'].$patch(args, options))
}

export async function getApiPatientLabResults(
  args: InferRequestType<typeof client.api.patient_lab_results.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results.$get(args, options))
}

export async function postApiPatientLabResults(
  args: InferRequestType<typeof client.api.patient_lab_results.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results.$post(args, options))
}

export async function getApiPatientLabResultsId(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results[':id'].$get(args, options))
}

export async function putApiPatientLabResultsId(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results[':id'].$put(args, options))
}

export async function deleteApiPatientLabResultsId(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results[':id'].$delete(args, options))
}

export async function patchApiPatientLabResultsId(
  args: InferRequestType<(typeof client.api.patient_lab_results)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_lab_results[':id'].$patch(args, options))
}

export async function getApiPatientMessages(
  args: InferRequestType<typeof client.api.patient_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_messages.$get(args, options))
}

export async function postApiPatientMessages(
  args: InferRequestType<typeof client.api.patient_messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_messages.$post(args, options))
}

export async function getApiPatientMessagesId(
  args: InferRequestType<(typeof client.api.patient_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_messages[':id'].$get(args, options))
}

export async function putApiPatientMessagesId(
  args: InferRequestType<(typeof client.api.patient_messages)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_messages[':id'].$put(args, options))
}

export async function patchApiPatientMessagesId(
  args: InferRequestType<(typeof client.api.patient_messages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_messages[':id'].$patch(args, options))
}

export async function getApiPatientPaymentLog(
  args: InferRequestType<typeof client.api.patient_payment_log.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_payment_log.$get(args, options))
}

export async function getApiPatientPaymentLogId(
  args: InferRequestType<(typeof client.api.patient_payment_log)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_payment_log[':id'].$get(args, options))
}

export async function getApiPatientPayments(
  args: InferRequestType<typeof client.api.patient_payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_payments.$get(args, options))
}

export async function postApiPatientPayments(
  args: InferRequestType<typeof client.api.patient_payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_payments.$post(args, options))
}

export async function getApiPatientPaymentsId(
  args: InferRequestType<(typeof client.api.patient_payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_payments[':id'].$get(args, options))
}

export async function getApiPatientPhysicalExams(
  args: InferRequestType<typeof client.api.patient_physical_exams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_physical_exams.$get(args, options))
}

export async function postApiPatientPhysicalExams(
  args: InferRequestType<typeof client.api.patient_physical_exams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_physical_exams.$post(args, options))
}

export async function getApiPatientPhysicalExamsId(
  args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_physical_exams[':id'].$get(args, options))
}

export async function putApiPatientPhysicalExamsId(
  args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_physical_exams[':id'].$put(args, options))
}

export async function patchApiPatientPhysicalExamsId(
  args: InferRequestType<(typeof client.api.patient_physical_exams)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_physical_exams[':id'].$patch(args, options))
}

export async function getApiPatientRiskAssessments(
  args: InferRequestType<typeof client.api.patient_risk_assessments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_risk_assessments.$get(args, options))
}

export async function postApiPatientRiskAssessments(
  args: InferRequestType<typeof client.api.patient_risk_assessments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_risk_assessments.$post(args, options))
}

export async function getApiPatientRiskAssessmentsId(
  args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_risk_assessments[':id'].$get(args, options))
}

export async function putApiPatientRiskAssessmentsId(
  args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_risk_assessments[':id'].$put(args, options))
}

export async function patchApiPatientRiskAssessmentsId(
  args: InferRequestType<(typeof client.api.patient_risk_assessments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_risk_assessments[':id'].$patch(args, options))
}

export async function getApiPatientVaccineRecords(
  args: InferRequestType<typeof client.api.patient_vaccine_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_vaccine_records.$get(args, options))
}

export async function postApiPatientVaccineRecords(
  args: InferRequestType<typeof client.api.patient_vaccine_records.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_vaccine_records.$post(args, options))
}

export async function getApiPatientVaccineRecordsId(
  args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_vaccine_records[':id'].$get(args, options))
}

export async function putApiPatientVaccineRecordsId(
  args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_vaccine_records[':id'].$put(args, options))
}

export async function patchApiPatientVaccineRecordsId(
  args: InferRequestType<(typeof client.api.patient_vaccine_records)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patient_vaccine_records[':id'].$patch(args, options))
}

export async function getApiPatients(
  args: InferRequestType<typeof client.api.patients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients.$get(args, options))
}

export async function postApiPatients(
  args: InferRequestType<typeof client.api.patients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients.$post(args, options))
}

export async function getApiPatientsId(
  args: InferRequestType<(typeof client.api.patients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].$get(args, options))
}

export async function putApiPatientsId(
  args: InferRequestType<(typeof client.api.patients)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].$put(args, options))
}

export async function deleteApiPatientsId(
  args: InferRequestType<(typeof client.api.patients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].$delete(args, options))
}

export async function patchApiPatientsId(
  args: InferRequestType<(typeof client.api.patients)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].$patch(args, options))
}

export async function getApiPatientsIdCcda(
  args: InferRequestType<(typeof client.api.patients)[':id']['ccda']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].ccda.$get(args, options))
}

export async function getApiPatientsIdOnpatientAccess(
  args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].onpatient_access.$get(args, options))
}

export async function postApiPatientsIdOnpatientAccess(
  args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].onpatient_access.$post(args, options))
}

export async function deleteApiPatientsIdOnpatientAccess(
  args: InferRequestType<(typeof client.api.patients)[':id']['onpatient_access']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].onpatient_access.$delete(args, options))
}

export async function getApiPatientsIdQrda1(
  args: InferRequestType<(typeof client.api.patients)[':id']['qrda1']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients[':id'].qrda1.$get(args, options))
}

export async function getApiPatientsSummary(
  args: InferRequestType<typeof client.api.patients_summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary.$get(args, options))
}

export async function postApiPatientsSummary(
  args: InferRequestType<typeof client.api.patients_summary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary.$post(args, options))
}

export async function getApiPatientsSummaryId(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary[':id'].$get(args, options))
}

export async function putApiPatientsSummaryId(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary[':id'].$put(args, options))
}

export async function deleteApiPatientsSummaryId(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary[':id'].$delete(args, options))
}

export async function patchApiPatientsSummaryId(
  args: InferRequestType<(typeof client.api.patients_summary)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.patients_summary[':id'].$patch(args, options))
}

export async function getApiPrescriptionMessages(
  args: InferRequestType<typeof client.api.prescription_messages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.prescription_messages.$get(args, options))
}

export async function getApiPrescriptionMessagesId(
  args: InferRequestType<(typeof client.api.prescription_messages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.prescription_messages[':id'].$get(args, options))
}

export async function getApiProblems(
  args: InferRequestType<typeof client.api.problems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.problems.$get(args, options))
}

export async function postApiProblems(
  args: InferRequestType<typeof client.api.problems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.problems.$post(args, options))
}

export async function getApiProblemsId(
  args: InferRequestType<(typeof client.api.problems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.problems[':id'].$get(args, options))
}

export async function putApiProblemsId(
  args: InferRequestType<(typeof client.api.problems)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.problems[':id'].$put(args, options))
}

export async function patchApiProblemsId(
  args: InferRequestType<(typeof client.api.problems)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.problems[':id'].$patch(args, options))
}

export async function getApiProcedures(
  args: InferRequestType<typeof client.api.procedures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.procedures.$get(args, options))
}

export async function getApiProceduresId(
  args: InferRequestType<(typeof client.api.procedures)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.procedures[':id'].$get(args, options))
}

export async function getApiReminderProfiles(
  args: InferRequestType<typeof client.api.reminder_profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles.$get(args, options))
}

export async function postApiReminderProfiles(
  args: InferRequestType<typeof client.api.reminder_profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles.$post(args, options))
}

export async function getApiReminderProfilesId(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles[':id'].$get(args, options))
}

export async function putApiReminderProfilesId(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles[':id'].$put(args, options))
}

export async function deleteApiReminderProfilesId(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles[':id'].$delete(args, options))
}

export async function patchApiReminderProfilesId(
  args: InferRequestType<(typeof client.api.reminder_profiles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.reminder_profiles[':id'].$patch(args, options))
}

export async function getApiSublabs(
  args: InferRequestType<typeof client.api.sublabs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.sublabs.$get(args, options))
}

export async function postApiSublabs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.sublabs.$post(undefined, options))
}

export async function getApiSublabsId(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.sublabs[':id'].$get(args, options))
}

export async function putApiSublabsId(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.sublabs[':id'].$put(args, options))
}

export async function deleteApiSublabsId(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.sublabs[':id'].$delete(args, options))
}

export async function patchApiSublabsId(
  args: InferRequestType<(typeof client.api.sublabs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.sublabs[':id'].$patch(args, options))
}

export async function getApiTaskCategories(
  args: InferRequestType<typeof client.api.task_categories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_categories.$get(args, options))
}

export async function postApiTaskCategories(
  args: InferRequestType<typeof client.api.task_categories.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_categories.$post(args, options))
}

export async function getApiTaskCategoriesId(
  args: InferRequestType<(typeof client.api.task_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_categories[':id'].$get(args, options))
}

export async function putApiTaskCategoriesId(
  args: InferRequestType<(typeof client.api.task_categories)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_categories[':id'].$put(args, options))
}

export async function patchApiTaskCategoriesId(
  args: InferRequestType<(typeof client.api.task_categories)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_categories[':id'].$patch(args, options))
}

export async function getApiTaskNotes(
  args: InferRequestType<typeof client.api.task_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_notes.$get(args, options))
}

export async function postApiTaskNotes(
  args: InferRequestType<typeof client.api.task_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_notes.$post(args, options))
}

export async function getApiTaskNotesId(
  args: InferRequestType<(typeof client.api.task_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_notes[':id'].$get(args, options))
}

export async function putApiTaskNotesId(
  args: InferRequestType<(typeof client.api.task_notes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_notes[':id'].$put(args, options))
}

export async function patchApiTaskNotesId(
  args: InferRequestType<(typeof client.api.task_notes)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_notes[':id'].$patch(args, options))
}

export async function getApiTaskStatuses(
  args: InferRequestType<typeof client.api.task_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_statuses.$get(args, options))
}

export async function postApiTaskStatuses(
  args: InferRequestType<typeof client.api.task_statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_statuses.$post(args, options))
}

export async function getApiTaskStatusesId(
  args: InferRequestType<(typeof client.api.task_statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_statuses[':id'].$get(args, options))
}

export async function putApiTaskStatusesId(
  args: InferRequestType<(typeof client.api.task_statuses)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_statuses[':id'].$put(args, options))
}

export async function patchApiTaskStatusesId(
  args: InferRequestType<(typeof client.api.task_statuses)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_statuses[':id'].$patch(args, options))
}

export async function getApiTaskTemplates(
  args: InferRequestType<typeof client.api.task_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_templates.$get(args, options))
}

export async function postApiTaskTemplates(
  args: InferRequestType<typeof client.api.task_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_templates.$post(args, options))
}

export async function getApiTaskTemplatesId(
  args: InferRequestType<(typeof client.api.task_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_templates[':id'].$get(args, options))
}

export async function putApiTaskTemplatesId(
  args: InferRequestType<(typeof client.api.task_templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_templates[':id'].$put(args, options))
}

export async function patchApiTaskTemplatesId(
  args: InferRequestType<(typeof client.api.task_templates)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.task_templates[':id'].$patch(args, options))
}

export async function getApiTasks(
  args: InferRequestType<typeof client.api.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.$get(args, options))
}

export async function postApiTasks(
  args: InferRequestType<typeof client.api.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks.$post(args, options))
}

export async function getApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$get(args, options))
}

export async function putApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$put(args, options))
}

export async function patchApiTasksId(
  args: InferRequestType<(typeof client.api.tasks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.tasks[':id'].$patch(args, options))
}

export async function getApiTransactions(
  args: InferRequestType<typeof client.api.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions.$get(args, options))
}

export async function getApiTransactionsId(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.transactions[':id'].$get(args, options))
}

export async function getApiUserGroups(
  args: InferRequestType<typeof client.api.user_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user_groups.$get(args, options))
}

export async function getApiUserGroupsId(
  args: InferRequestType<(typeof client.api.user_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.user_groups[':id'].$get(args, options))
}

export async function getApiUsers(
  args: InferRequestType<typeof client.api.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users.$get(args, options))
}

export async function getApiUsersId(
  args: InferRequestType<(typeof client.api.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.users[':id'].$get(args, options))
}
