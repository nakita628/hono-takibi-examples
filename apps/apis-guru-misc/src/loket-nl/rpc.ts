import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAchmeainsurancecontracts(
  args: InferRequestType<typeof client.achmeainsurancecontracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.achmeainsurancecontracts.$get(args, options))
}

export async function getAchmeainsurancecontractsAchmeaInsuranceContractIdInsuredwagecalculationpercentages(
  args: InferRequestType<
    (typeof client.achmeainsurancecontracts)[':achmeaInsuranceContractId']['insuredwagecalculationpercentages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.achmeainsurancecontracts[
      ':achmeaInsuranceContractId'
    ].insuredwagecalculationpercentages.$get(args, options),
  )
}

export async function getAowDate(
  args: InferRequestType<typeof client.aowDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aowDate.$get(args, options))
}

export async function getApplicationsApplicationIdAuthorizations(
  args: InferRequestType<(typeof client.applications)[':applicationId']['authorizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':applicationId'].authorizations.$get(args, options),
  )
}

export async function getApplicationsApplicationIdLogo(
  args: InferRequestType<(typeof client.applications)[':applicationId']['logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':applicationId'].logo.$get(args, options))
}

export async function getChamberofcommerceChamberOfCommerceNumberCompanyinformation(
  args: InferRequestType<
    (typeof client.chamberofcommerce)[':chamberOfCommerceNumber']['companyinformation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.chamberofcommerce[':chamberOfCommerceNumber'].companyinformation.$get(args, options),
  )
}

export async function getDatanewbusinessFunctions(
  args: InferRequestType<typeof client.datanewbusiness.functions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datanewbusiness.functions.$get(args, options))
}

export async function getDatanewbusinessToken(
  args: InferRequestType<typeof client.datanewbusiness.token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datanewbusiness.token.$get(args, options))
}

export async function getLocationservicesAddress(
  args: InferRequestType<typeof client.locationservices.address.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.locationservices.address.$get(args, options))
}

export async function getProviders(
  args: InferRequestType<typeof client.providers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.$get(args, options))
}

export async function putProvidersApplicationsetsApplicationSetId(
  args: InferRequestType<(typeof client.providers.applicationsets)[':applicationSetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.applicationsets[':applicationSetId'].$put(args, options),
  )
}

export async function deleteProvidersApplicationsetsApplicationSetId(
  args: InferRequestType<(typeof client.providers.applicationsets)[':applicationSetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.applicationsets[':applicationSetId'].$delete(args, options),
  )
}

export async function getProvidersAuthorizationsetsAuthorizationsetid(
  args: InferRequestType<
    (typeof client.providers.authorizationsets)[':authorizationsetid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.authorizationsets[':authorizationsetid'].$get(args, options),
  )
}

export async function deleteProvidersEmailidentitiesEmailIdentityId(
  args: InferRequestType<(typeof client.providers.emailidentities)[':emailIdentityId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.emailidentities[':emailIdentityId'].$delete(args, options),
  )
}

export async function postProvidersEmailidentitiesEmailIdentityIdSendtestemail(
  args: InferRequestType<
    (typeof client.providers.emailidentities)[':emailIdentityId']['sendtestemail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.emailidentities[':emailIdentityId'].sendtestemail.$post(args, options),
  )
}

export async function getProvidersEmployers(
  args: InferRequestType<typeof client.providers.employers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.$get(args, options))
}

export async function patchProvidersEmployersAnnouncements(
  args: InferRequestType<typeof client.providers.employers.announcements.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.announcements.$patch(args, options))
}

export async function getProvidersEmployersBenefitinkindtypesBenefitInKindTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.benefitinkindtypes)[':benefitInKindTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.benefitinkindtypes[':benefitInKindTypeId'].$get(args, options),
  )
}

export async function putProvidersEmployersBenefitinkindtypesBenefitInKindTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.benefitinkindtypes)[':benefitInKindTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.benefitinkindtypes[':benefitInKindTypeId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersBenefitinkindtypesBenefitInKindTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.benefitinkindtypes)[':benefitInKindTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.benefitinkindtypes[':benefitInKindTypeId'].$delete(args, options),
  )
}

export async function patchProvidersEmployersConceptemployeesImportPayrollAdministrationId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees.import)[':payrollAdministrationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees.import[':payrollAdministrationId'].$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersConceptemployeesMetadataPayrollAdministrationPayrollAdministrationIdPayScalePayscaleKeyPaygradePaygradeKey(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees.metadata.payrollAdministration)[':payrollAdministrationId']['payScale'][':payscaleKey']['paygrade'][':paygradeKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees.metadata.payrollAdministration[
      ':payrollAdministrationId'
    ].payScale[':payscaleKey'].paygrade[':paygradeKey'].$get(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesMinimizedConceptEmployeeId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees.minimized)[':conceptEmployeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees.minimized[':conceptEmployeeId'].$get(args, options),
  )
}

export async function putProvidersEmployersConceptemployeesMinimizedConceptEmployeeId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees.minimized)[':conceptEmployeeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees.minimized[':conceptEmployeeId'].$put(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].$get(args, options),
  )
}

export async function putProvidersEmployersConceptemployeesConceptEmployeeId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersConceptemployeesConceptEmployeeId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].$delete(args, options),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdAssessmentInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['assessment']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].assessment.initiate.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumber(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['citizenservicenumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].citizenservicenumber.$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumber(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['citizenservicenumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].citizenservicenumber.$put(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersConceptemployeesConceptEmployeeIdConvertToEmployee(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['convertToEmployee']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].convertToEmployee.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDocuments(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents.$get(args, options),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdDocuments(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[':documentId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[':documentId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdAudittrail(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['audittrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].audittrail.$get(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignature(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].signature.$get(args, options),
  )
}

export async function deleteProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignature(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['signature']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].signature.$delete(args, options),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['signature']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].signature.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDocumentsDocumentIdSignatureReport(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documents'][':documentId']['signature']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documents[
      ':documentId'
    ].signature.report.$get(args, options),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocument(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documenttemplates'][':documentId']['generatedocument']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documenttemplates[
      ':documentId'
    ].generatedocument.$post(args, options),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdDocumenttemplatesDocumentIdGeneratedocumentPreview(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['documenttemplates'][':documentId']['generatedocument']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].documenttemplates[
      ':documentId'
    ].generatedocument.preview.$post(args, options),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdDossier(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['dossier"']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId']['dossier"'].$get(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersConceptemployeesConceptEmployeeIdDossier(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['dossier"']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId']['dossier"'].$delete(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectory(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['preboardingtrajectory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].preboardingtrajectory.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersConceptemployeesConceptEmployeeIdPreboardingtrajectory(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['preboardingtrajectory']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].preboardingtrajectory.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersConceptemployeesConceptEmployeeIdSelfservice(
  args: InferRequestType<
    (typeof client.providers.employers.conceptemployees)[':conceptEmployeeId']['selfservice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.conceptemployees[':conceptEmployeeId'].selfservice.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersContractcodesContractCodeId(
  args: InferRequestType<
    (typeof client.providers.employers.contractcodes)[':contractCodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.contractcodes[':contractCodeId'].$get(args, options),
  )
}

export async function putProvidersEmployersContractcodesContractCodeId(
  args: InferRequestType<
    (typeof client.providers.employers.contractcodes)[':contractCodeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.contractcodes[':contractCodeId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersContractcodesContractCodeId(
  args: InferRequestType<
    (typeof client.providers.employers.contractcodes)[':contractCodeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.contractcodes[':contractCodeId'].$delete(args, options),
  )
}

export async function getProvidersEmployersCustomfieldsCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.customfields)[':customFieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customfields[':customFieldId'].$get(args, options),
  )
}

export async function putProvidersEmployersCustomfieldsCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.customfields)[':customFieldId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customfields[':customFieldId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersCustomfieldsCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.customfields)[':customFieldId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customfields[':customFieldId'].$delete(args, options),
  )
}

export async function getProvidersEmployersCustomholidaysCustomHolidayId(
  args: InferRequestType<
    (typeof client.providers.employers.customholidays)[':customHolidayId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customholidays[':customHolidayId'].$get(args, options),
  )
}

export async function putProvidersEmployersCustomholidaysCustomHolidayId(
  args: InferRequestType<
    (typeof client.providers.employers.customholidays)[':customHolidayId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customholidays[':customHolidayId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersCustomholidaysCustomHolidayId(
  args: InferRequestType<
    (typeof client.providers.employers.customholidays)[':customHolidayId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.customholidays[':customHolidayId'].$delete(args, options),
  )
}

export async function getProvidersEmployersDepartmentsDepartmentId(
  args: InferRequestType<(typeof client.providers.employers.departments)[':departmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.departments[':departmentId'].$get(args, options),
  )
}

export async function putProvidersEmployersDepartmentsDepartmentId(
  args: InferRequestType<(typeof client.providers.employers.departments)[':departmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.departments[':departmentId'].$put(args, options),
  )
}

export async function getProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationId(
  args: InferRequestType<
    (typeof client.providers.employers.educationfurtherindications)[':educationFurtherIndicationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationfurtherindications[':educationFurtherIndicationId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationId(
  args: InferRequestType<
    (typeof client.providers.employers.educationfurtherindications)[':educationFurtherIndicationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationfurtherindications[':educationFurtherIndicationId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEducationfurtherindicationsEducationFurtherIndicationId(
  args: InferRequestType<
    (typeof client.providers.employers.educationfurtherindications)[':educationFurtherIndicationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationfurtherindications[':educationFurtherIndicationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEducationtypesEducationTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.educationtypes)[':educationTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationtypes[':educationTypeId'].$get(args, options),
  )
}

export async function putProvidersEmployersEducationtypesEducationTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.educationtypes)[':educationTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationtypes[':educationTypeId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEducationtypesEducationTypeId(
  args: InferRequestType<
    (typeof client.providers.employers.educationtypes)[':educationTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.educationtypes[':educationTypeId'].$delete(args, options),
  )
}

export async function deleteProvidersEmployersEmailidentitiesEmailIdentityId(
  args: InferRequestType<
    (typeof client.providers.employers.emailidentities)[':emailIdentityId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.emailidentities[':emailIdentityId'].$delete(args, options),
  )
}

export async function postProvidersEmployersEmailidentitiesEmailIdentityIdSendtestemail(
  args: InferRequestType<
    (typeof client.providers.employers.emailidentities)[':emailIdentityId']['sendtestemail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.emailidentities[':emailIdentityId'].sendtestemail.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absencecontactHistory)[':absencecontactHistoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absencecontactHistory[
      ':absencecontactHistoryId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absencecontactHistory)[':absencecontactHistoryId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absencecontactHistory[
      ':absencecontactHistoryId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesAbsencesAbsencecontactHistoryAbsencecontactHistoryId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absencecontactHistory)[':absencecontactHistoryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absencecontactHistory[
      ':absencecontactHistoryId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absenceprogress)[':absenceProgressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absenceprogress[':absenceProgressId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absenceprogress)[':absenceProgressId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absenceprogress[':absenceProgressId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesAbsencesAbsenceprogressAbsenceProgressId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences.absenceprogress)[':absenceProgressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences.absenceprogress[':absenceProgressId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesAbsencesAbsenceId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesAbsencesAbsenceId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesAbsencesAbsenceId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistory(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['absencecontactHistory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].absencecontactHistory.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesAbsencesAbsenceIdAbsencecontactHistory(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['absencecontactHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].absencecontactHistory.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogress(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['absenceprogress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].absenceprogress.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesAbsencesAbsenceIdAbsenceprogress(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['absenceprogress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].absenceprogress.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersEmployeesAbsencesAbsenceIdCloseabsence(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['closeabsence']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].closeabsence.$patch(args, options),
  )
}

export async function patchProvidersEmployersEmployeesAbsencesAbsenceIdReopenabsence(
  args: InferRequestType<
    (typeof client.providers.employers.employees.absences)[':absenceId']['reopenabsence']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.absences[':absenceId'].reopenabsence.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployeesChildrenChildId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.children)[':childId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.children[':childId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesChildrenChildId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.children)[':childId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.children[':childId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesChildrenChildId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.children)[':childId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.children[':childId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesContactsContactId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.contacts)[':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.contacts[':contactId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesContactsContactId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.contacts)[':contactId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.contacts[':contactId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesContactsContactId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.contacts)[':contactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.contacts[':contactId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.customfields)[':employeeCustomFieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.customfields[':employeeCustomFieldId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.customfields)[':employeeCustomFieldId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.customfields[':employeeCustomFieldId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesCustomfieldsEmployeeCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.customfields)[':employeeCustomFieldId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.customfields[':employeeCustomFieldId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEducationsEmployeeEducationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.educations)[':employeeEducationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.educations[':employeeEducationId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEducationsEmployeeEducationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.educations)[':employeeEducationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.educations[':employeeEducationId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEducationsEmployeeEducationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.educations)[':employeeEducationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.educations[':employeeEducationId'].$delete(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsWageProposals(
  args: InferRequestType<
    typeof client.providers.employers.employees.employments.WageProposals.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.WageProposals.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.abpfunds)[':abpFundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.abpfunds[':abpFundId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.abpfunds)[':abpFundId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.abpfunds[':abpFundId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsAbpfundsAbpFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.abpfunds)[':abpFundId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.abpfunds[':abpFundId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.attachmentsofearnings)[':attachmentOfEarningsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.attachmentsofearnings[
      ':attachmentOfEarningsId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.attachmentsofearnings)[':attachmentOfEarningsId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.attachmentsofearnings[
      ':attachmentOfEarningsId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.attachmentsofearnings)[':attachmentOfEarningsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.attachmentsofearnings[
      ':attachmentOfEarningsId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforcalculation)[':baseforcalculationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforcalculation[
      ':baseforcalculationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforcalculation)[':baseforcalculationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforcalculation[
      ':baseforcalculationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsBasesforcalculationBaseforcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforcalculation)[':baseforcalculationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforcalculation[
      ':baseforcalculationId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforemploymentfundcalculation)[':baseforemploymentfundcalculationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforemploymentfundcalculation[
      ':baseforemploymentfundcalculationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforemploymentfundcalculation)[':baseforemploymentfundcalculationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforemploymentfundcalculation[
      ':baseforemploymentfundcalculationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.basesforemploymentfundcalculation)[':baseforemploymentfundcalculationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.basesforemploymentfundcalculation[
      ':baseforemploymentfundcalculationId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsAndDeductions)[':benefitsanddeductionsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsAndDeductions[
      ':benefitsanddeductionsId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsAndDeductions)[':benefitsanddeductionsId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsAndDeductions[
      ':benefitsanddeductionsId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsBenefitsAndDeductionsBenefitsanddeductionsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsAndDeductions)[':benefitsanddeductionsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsAndDeductions[
      ':benefitsanddeductionsId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsinkind)[':benefitInKindId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsinkind[':benefitInKindId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsinkind)[':benefitInKindId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsinkind[':benefitInKindId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsBenefitsinkindBenefitInKindId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.benefitsinkind)[':benefitInKindId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.benefitsinkind[':benefitInKindId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.companycars)[':companyCarId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.companycars[':companyCarId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.companycars)[':companyCarId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.companycars[':companyCarId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsCompanycarsCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.companycars)[':companyCarId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.companycars[':companyCarId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsCostperhourCostperhourId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.costperhour)[':costperhourId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.costperhour[':costperhourId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsCostperhourCostperhourId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.costperhour)[':costperhourId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.costperhour[':costperhourId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsCostperhourCostperhourId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.costperhour)[':costperhourId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.costperhour[':costperhourId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customfields)[':employmentCustomFieldId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customfields[':employmentCustomFieldId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customfields)[':employmentCustomFieldId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customfields[':employmentCustomFieldId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customfields)[':employmentCustomFieldId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customfields[
      ':employmentCustomFieldId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customnotifications)[':customNotificationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customnotifications[
      ':customNotificationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customnotifications)[':customNotificationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customnotifications[
      ':customNotificationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.customnotifications)[':customNotificationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.customnotifications[
      ':customNotificationId'
    ].$delete(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsDeclarationsProcess(
  args: InferRequestType<
    typeof client.providers.employers.employees.employments.declarations.process.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.declarations.process.$patch(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsDeclarationsReview(
  args: InferRequestType<
    typeof client.providers.employers.employees.employments.declarations.review.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.declarations.review.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.declarations)[':declarationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.declarations[':declarationId'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAttachment(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.declarations)[':declarationId']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.declarations[':declarationId'].attachment.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsDeclarationsDeclarationIdAudittrail(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.declarations)[':declarationId']['audittrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.declarations[':declarationId'].audittrail.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatingawfcontributions)[':deviatingAwfContributionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatingawfcontributions[
      ':deviatingAwfContributionId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatingawfcontributions)[':deviatingAwfContributionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatingawfcontributions[
      ':deviatingAwfContributionId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatingawfcontributions)[':deviatingAwfContributionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatingawfcontributions[
      ':deviatingAwfContributionId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatinghourlywages)[':deviatingHourlyWageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatinghourlywages[
      ':deviatingHourlyWageId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatinghourlywages)[':deviatingHourlyWageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatinghourlywages[
      ':deviatingHourlyWageId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsDeviatinghourlywagesDeviatingHourlyWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.deviatinghourlywages)[':deviatingHourlyWageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.deviatinghourlywages[
      ':deviatingHourlyWageId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.employmentfunds)[':employmentFundId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.employmentfunds[':employmentFundId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.employmentfunds)[':employmentFundId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.employmentfunds[':employmentFundId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsEmploymentfundsEmploymentFundId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.employmentfunds)[':employmentFundId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.employmentfunds[':employmentFundId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalcompanycars)[':fiscalCompanyCarId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalcompanycars[':fiscalCompanyCarId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalcompanycars)[':fiscalCompanyCarId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalcompanycars[':fiscalCompanyCarId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsFiscalcompanycarsFiscalCompanyCarId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalcompanycars)[':fiscalCompanyCarId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalcompanycars[
      ':fiscalCompanyCarId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalproperties)[':fiscalPropertiesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalproperties[':fiscalPropertiesId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalproperties)[':fiscalPropertiesId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalproperties[':fiscalPropertiesId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.fiscalproperties)[':fiscalPropertiesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.fiscalproperties[
      ':fiscalPropertiesId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.healthcareinsuranceactconfigurations)[':healthcareInsuranceActConfigurationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.healthcareinsuranceactconfigurations[
      ':healthcareInsuranceActConfigurationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.healthcareinsuranceactconfigurations)[':healthcareInsuranceActConfigurationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.healthcareinsuranceactconfigurations[
      ':healthcareInsuranceActConfigurationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsHealthcareinsuranceactconfigurationsHealthcareInsuranceActConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.healthcareinsuranceactconfigurations)[':healthcareInsuranceActConfigurationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.healthcareinsuranceactconfigurations[
      ':healthcareInsuranceActConfigurationId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.journalallocations)[':journalAllocationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.journalallocations[
      ':journalAllocationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.journalallocations)[':journalAllocationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.journalallocations[
      ':journalAllocationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.journalallocations)[':journalAllocationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.journalallocations[
      ':journalAllocationId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsLeaveLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leave)[':leaveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leave[':leaveId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsLeaveLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leave)[':leaveId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leave[':leaveId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsLeaveLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leave)[':leaveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leave[':leaveId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsLeaveLeaveIdMetadata(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leave)[':leaveId']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leave[':leaveId'].metadata.$get(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsLeaverequests(
  args: InferRequestType<
    typeof client.providers.employers.employees.employments.leaverequests.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leaverequests.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leaverequests)[':leaveRequestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leaverequests[':leaveRequestId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsLeaverequestsLeaveRequestId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.leaverequests)[':leaveRequestId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.leaverequests[':leaveRequestId'].$put(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.notes)[':noteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.notes[':noteId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.notes)[':noteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.notes[':noteId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.notes)[':noteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.notes[':noteId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.organizationalentities)[':organizationalEntityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.organizationalentities[
      ':organizationalEntityId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.organizationalentities)[':organizationalEntityId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.organizationalentities[
      ':organizationalEntityId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.organizationalentities)[':organizationalEntityId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.organizationalentities[
      ':organizationalEntityId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.otherPayrollVariables)[':otherPayrollVariablesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.otherPayrollVariables[
      ':otherPayrollVariablesId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.otherPayrollVariables)[':otherPayrollVariablesId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.otherPayrollVariables[
      ':otherPayrollVariablesId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsOtherPayrollVariablesOtherPayrollVariablesId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.otherPayrollVariables)[':otherPayrollVariablesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.otherPayrollVariables[
      ':otherPayrollVariablesId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationnonsepa)[':paymentInformationNonSepaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationnonsepa[
      ':paymentInformationNonSepaId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationnonsepa)[':paymentInformationNonSepaId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationnonsepa[
      ':paymentInformationNonSepaId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationnonsepa)[':paymentInformationNonSepaId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationnonsepa[
      ':paymentInformationNonSepaId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepa)[':paymentInformationSepaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepa[
      ':paymentInformationSepaId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepa)[':paymentInformationSepaId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepa[
      ':paymentInformationSepaId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepa)[':paymentInformationSepaId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepa[
      ':paymentInformationSepaId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepaseparatepayments)[':paymentInformationSepaSeparatePaymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepaseparatepayments[
      ':paymentInformationSepaSeparatePaymentId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepaseparatepayments)[':paymentInformationSepaSeparatePaymentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepaseparatepayments[
      ':paymentInformationSepaSeparatePaymentId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.paymentinformationsepaseparatepayments)[':paymentInformationSepaSeparatePaymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.paymentinformationsepaseparatepayments[
      ':paymentInformationSepaSeparatePaymentId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.payrollperioddata)[':payrollperioddataId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.payrollperioddata[':payrollperioddataId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.payrollperioddata)[':payrollperioddataId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.payrollperioddata[':payrollperioddataId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsPayrollperioddataPayrollperioddataId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.payrollperioddata)[':payrollperioddataId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.payrollperioddata[
      ':payrollperioddataId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.pensionbenefits)[':pensionBenefitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.pensionbenefits[':pensionBenefitId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.pensionbenefits)[':pensionBenefitId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.pensionbenefits[':pensionBenefitId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsPensionbenefitsPensionBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.pensionbenefits)[':pensionBenefitId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.pensionbenefits[':pensionBenefitId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.protectedearnings)[':protectedEarningsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.protectedearnings[':protectedEarningsId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.protectedearnings)[':protectedEarningsId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.protectedearnings[':protectedEarningsId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.protectedearnings)[':protectedEarningsId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.protectedearnings[
      ':protectedEarningsId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecuritybenefits)[':socialSecurityBenefitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecuritybenefits[
      ':socialSecurityBenefitId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecuritybenefits)[':socialSecurityBenefitId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecuritybenefits[
      ':socialSecurityBenefitId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsSocialsecuritybenefitsSocialSecurityBenefitId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecuritybenefits)[':socialSecurityBenefitId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecuritybenefits[
      ':socialSecurityBenefitId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecurityconfigurations)[':socialSecurityConfigurationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecurityconfigurations[
      ':socialSecurityConfigurationId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecurityconfigurations)[':socialSecurityConfigurationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecurityconfigurations[
      ':socialSecurityConfigurationId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsSocialsecurityconfigurationsSocialSecurityConfigurationId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.socialsecurityconfigurations)[':socialSecurityConfigurationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.socialsecurityconfigurations[
      ':socialSecurityConfigurationId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wachtgeld)[':wachtegeldenId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wachtgeld[':wachtegeldenId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wachtgeld)[':wachtegeldenId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wachtgeld[':wachtegeldenId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wachtgeld)[':wachtegeldenId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wachtgeld[':wachtegeldenId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsWagesWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wages)[':wageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wages[':wageId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsWagesWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wages)[':wageId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wages[':wageId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsWagesWageId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.wages)[':wageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.wages[':wageId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.workinghours)[':workinghoursId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.workinghours[':workinghoursId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.workinghours)[':workinghoursId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.workinghours[':workinghoursId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsWorkinghoursWorkinghoursId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments.workinghours)[':workinghoursId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments.workinghours[':workinghoursId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsEmploymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].$put(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].$patch(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfunds(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['abpfunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].abpfunds.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdAbpfunds(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['abpfunds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].abpfunds.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearnings(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['attachmentsofearnings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].attachmentsofearnings.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearnings(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['attachmentsofearnings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].attachmentsofearnings.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculation(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['basesforcalculation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].basesforcalculation.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforcalculation(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['basesforcalculation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].basesforcalculation.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculation(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['basesforemploymentfundcalculation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].basesforemploymentfundcalculation.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculation(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['basesforemploymentfundcalculation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].basesforemploymentfundcalculation.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKind(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['benefitsInKind']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].benefitsInKind.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsInKind(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['benefitsInKind']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].benefitsInKind.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductions(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['benefitsanddeductions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].benefitsanddeductions.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdBenefitsanddeductions(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['benefitsanddeductions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].benefitsanddeductions.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycars(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['companycars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].companycars.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdCompanycars(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['companycars']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].companycars.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdCorrectstartdate(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['correctstartdate']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].correctstartdate.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhour(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['costperhour']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].costperhour.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhour(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['costperhour']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].costperhour.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['customfields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].customfields.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['customfields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].customfields.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotifications(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['customnotifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].customnotifications.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotifications(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['customnotifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].customnotifications.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDeclarations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].declarations.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributions(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['deviatingawfcontributions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].deviatingawfcontributions.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributions(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['deviatingawfcontributions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].deviatingawfcontributions.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywages(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['deviatinghourlywages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].deviatinghourlywages.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatinghourlywages(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['deviatinghourlywages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].deviatinghourlywages.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDocuments(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDocuments(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[':documentId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[':documentId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdAudittrail(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['audittrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].audittrail.$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignature(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].signature.$get(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignature(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['signature']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].signature.$delete(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['signature']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].signature.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdDocumentsDocumentIdSignatureReport(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documents'][':documentId']['signature']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documents[
      ':documentId'
    ].signature.report.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocument(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documenttemplates'][':documentId']['generatedocument']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documenttemplates[
      ':documentId'
    ].generatedocument.$post(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdDocumenttemplatesDocumentIdGeneratedocumentPreview(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['documenttemplates'][':documentId']['generatedocument']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].documenttemplates[
      ':documentId'
    ].generatedocument.preview.$post(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdEmployeeprofile(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['employeeprofile']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].employeeprofile.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfunds(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['employmentfunds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].employmentfunds.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdEmploymentfunds(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['employmentfunds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].employmentfunds.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycars(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['fiscalcompanycars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].fiscalcompanycars.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalcompanycars(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['fiscalcompanycars']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].fiscalcompanycars.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalproperties(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['fiscalproperties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].fiscalproperties.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalproperties(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['fiscalproperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].fiscalproperties.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['healthcareinsuranceactconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].healthcareinsuranceactconfigurations.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdHealthcareinsuranceactconfigurations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['healthcareinsuranceactconfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].healthcareinsuranceactconfigurations.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['journalallocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].journalallocations.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['journalallocations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].journalallocations.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeave(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdLeave(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveDefaults(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.defaults.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveMetadata(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.metadata.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveOverviewYear(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['overview'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.overview[':year'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaveProposedleavehours(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leave']['proposedleavehours']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leave.proposedleavehours.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavebalances(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leavebalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leavebalances.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepolicies(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leavepolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leavepolicies.$get(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepolicies(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leavepolicies']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leavepolicies.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdLeaverequests(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['leaverequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].leaverequests.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].notes.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].notes.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentities(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['organizationalentities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].organizationalentities.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentities(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['organizationalentities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].organizationalentities.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariables(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['otherPayrollVariables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].otherPayrollVariables.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdOtherPayrollVariables(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['otherPayrollVariables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].otherPayrollVariables.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepa(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationnonsepa']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].paymentinformationnonsepa.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepa(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationnonsepa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].paymentinformationnonsepa.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepa(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationsepa']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].paymentinformationsepa.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepa(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationsepa']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].paymentinformationsepa.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepayments(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationsepaseparatepayments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].paymentinformationsepaseparatepayments.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepayments(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['paymentinformationsepaseparatepayments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].paymentinformationsepaseparatepayments.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollSimulatorData(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payrollSimulatorData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payrollSimulatorData.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddata(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payrollperioddata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payrollperioddata.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddata(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payrollperioddata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payrollperioddata.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperioddata(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payrollperioddata']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payrollperioddata.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayrollperiodresultsYearYear(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payrollperiodresults']['year'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payrollperiodresults.year[
      ':year'
    ].$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslips(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payslips']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payslips.$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsSummaryPayrollPeriodId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payslips']['summary'][':payrollPeriodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payslips.summary[
      ':payrollPeriodId'
    ].$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsPayrollrunId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payslips'][':payrollrunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payslips[
      ':payrollrunId'
    ].$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPayslipsYear(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['payslips'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].payslips[':year'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefits(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['pensionbenefits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].pensionbenefits.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdPensionbenefits(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['pensionbenefits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].pensionbenefits.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearnings(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['protectedearnings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].protectedearnings.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearnings(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['protectedearnings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].protectedearnings.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdReinstate(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['reinstate']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].reinstate.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefits(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['socialsecuritybenefits']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].socialsecuritybenefits.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecuritybenefits(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['socialsecuritybenefits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].socialsecuritybenefits.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['socialsecurityconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].socialsecurityconfigurations.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdSocialsecurityconfigurations(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['socialsecurityconfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].socialsecurityconfigurations.$post(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmploymentsEmploymentIdTerminate(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['terminate']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].terminate.$patch(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensation(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['transitioncompensation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].transitioncompensation.$post(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculate(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['transitioncompensation']['calculate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].transitioncompensation.calculate.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdTransitioncompensationCalculateDefaults(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['transitioncompensation']['calculate']['defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].transitioncompensation.calculate.defaults.$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeld(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wachtgeld']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wachtgeld.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeld(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wachtgeld']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wachtgeld.$post(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojection(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wageprojection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wageprojection.$post(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdWageprojectionBasedOnDefaultClaConfiguration(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wageprojection']['basedOnDefaultClaConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[
      ':employmentId'
    ].wageprojection.basedOnDefaultClaConfiguration.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdWages(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wages.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdWages(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wages.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdWagesheetYear(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['wagesheet'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].wagesheet[':year'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghours(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['workinghours']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].workinghours.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployeesEmploymentsEmploymentIdWorkinghours(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['workinghours']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].workinghours.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatements(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['yearendstatements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].yearendstatements.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmploymentsEmploymentIdYearendstatementsYear(
  args: InferRequestType<
    (typeof client.providers.employers.employees.employments)[':employmentId']['yearendstatements'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.employments[':employmentId'].yearendstatements[
      ':year'
    ].$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.employees.notes)[':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.notes[':noteId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.employees.notes)[':noteId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.notes[':noteId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.employees.notes)[':noteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.notes[':noteId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesPartnersPartnerId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.partners)[':partnerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.partners[':partnerId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesPartnersPartnerId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.partners)[':partnerId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.partners[':partnerId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesPartnersPartnerId(
  args: InferRequestType<
    (typeof client.providers.employers.employees.partners)[':partnerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees.partners[':partnerId'].$delete(args, options),
  )
}

export async function patchProvidersEmployersEmployeesSelfservice(
  args: InferRequestType<typeof client.providers.employers.employees.selfservice.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.employees.selfservice.$patch(args, options))
}

export async function getProvidersEmployersEmployeesEmployeeId(
  args: InferRequestType<(typeof client.providers.employers.employees)[':employeeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmployeeId(
  args: InferRequestType<(typeof client.providers.employers.employees)[':employeeId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].$put(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdAbsences(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['absences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].absences.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdAbsences(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['absences']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].absences.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdAbsencesOverview(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['absences']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].absences.overview.$get(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdBenifyurl(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['benifyurl']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].benifyurl.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdChangeaddressrequest(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['changeaddressrequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].changeaddressrequest.$post(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdChangecontactinformationrequest(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['changecontactinformationrequest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].changecontactinformationrequest.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdChildren(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['children']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].children.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdChildren(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['children']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].children.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdCitizenservicenumber(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['citizenservicenumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].citizenservicenumber.$get(args, options),
  )
}

export async function putProvidersEmployersEmployeesEmployeeIdCitizenservicenumber(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['citizenservicenumber']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].citizenservicenumber.$put(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdContacts(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['contacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].contacts.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdContacts(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['contacts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].contacts.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['customfields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].customfields.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['customfields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].customfields.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdEducations(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['educations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].educations.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdEducations(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['educations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].educations.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdEmployments(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['employments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].employments.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdEmployments(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['employments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].employments.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].notes.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].notes.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdOccupationaldisabilities(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['occupationaldisabilities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].occupationaldisabilities.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdPartners(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['partners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].partners.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdPartners(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['partners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].partners.$post(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdPhoto(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['photo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].photo.$get(args, options),
  )
}

export async function postProvidersEmployersEmployeesEmployeeIdPhoto(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['photo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].photo.$post(args, options),
  )
}

export async function deleteProvidersEmployersEmployeesEmployeeIdPhoto(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['photo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].photo.$delete(args, options),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdPhotoVersion(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['photo'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].photo[':version'].$get(args, options),
  )
}

export async function patchProvidersEmployersEmployeesEmployeeIdRevokeEmployeeSelfServiceAccess(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['revokeEmployeeSelfServiceAccess']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].revokeEmployeeSelfServiceAccess.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployeesEmployeeIdSelfservice(
  args: InferRequestType<
    (typeof client.providers.employers.employees)[':employeeId']['selfservice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.employees[':employeeId'].selfservice.$get(args, options),
  )
}

export async function getProvidersEmployersFunctionsFunctionId(
  args: InferRequestType<(typeof client.providers.employers.functions)[':functionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.functions[':functionId'].$get(args, options),
  )
}

export async function putProvidersEmployersFunctionsFunctionId(
  args: InferRequestType<(typeof client.providers.employers.functions)[':functionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.functions[':functionId'].$put(args, options),
  )
}

export async function getProvidersEmployersLastmodifiedversionnumbers(
  args: InferRequestType<typeof client.providers.employers.lastmodifiedversionnumbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.lastmodifiedversionnumbers.$get(args, options),
  )
}

export async function getProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.agebasedleave)[':ageBasedLeaveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.agebasedleave[':ageBasedLeaveId'].$get(args, options),
  )
}

export async function putProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.agebasedleave)[':ageBasedLeaveId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.agebasedleave[':ageBasedLeaveId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.agebasedleave)[':ageBasedLeaveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.agebasedleave[':ageBasedLeaveId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.wagebasedleave)[':wageBasedLeaveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.wagebasedleave[':wageBasedLeaveId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.wagebasedleave)[':wageBasedLeaveId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.wagebasedleave[':wageBasedLeaveId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.wagebasedleave)[':wageBasedLeaveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.wagebasedleave[':wageBasedLeaveId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.yearsofservicebasedleave)[':yearsOfServiceBasedLeaveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.yearsofservicebasedleave[
      ':yearsOfServiceBasedLeaveId'
    ].$get(args, options),
  )
}

export async function putProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.yearsofservicebasedleave)[':yearsOfServiceBasedLeaveId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.yearsofservicebasedleave[
      ':yearsOfServiceBasedLeaveId'
    ].$put(args, options),
  )
}

export async function deleteProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies.yearsofservicebasedleave)[':yearsOfServiceBasedLeaveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies.yearsofservicebasedleave[
      ':yearsOfServiceBasedLeaveId'
    ].$delete(args, options),
  )
}

export async function getProvidersEmployersLeavePoliciesLeavePolicyId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].$get(args, options),
  )
}

export async function putProvidersEmployersLeavePoliciesLeavePolicyId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersLeavePoliciesLeavePolicyId(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].$delete(args, options),
  )
}

export async function getProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['agebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].agebasedleave.$get(args, options),
  )
}

export async function postProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['agebasedleave']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].agebasedleave.$post(args, options),
  )
}

export async function getProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['wagebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].wagebasedleave.$get(args, options),
  )
}

export async function postProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['wagebasedleave']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].wagebasedleave.$post(args, options),
  )
}

export async function getProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['yearsofservicebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].yearsofservicebasedleave.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleave(
  args: InferRequestType<
    (typeof client.providers.employers.leavePolicies)[':leavePolicyId']['yearsofservicebasedleave']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavePolicies[':leavePolicyId'].yearsofservicebasedleave.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersLeavepoliciesLeavePolicyIdEmployments(
  args: InferRequestType<
    (typeof client.providers.employers.leavepolicies)[':leavePolicyId']['employments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavepolicies[':leavePolicyId'].employments.$get(args, options),
  )
}

export async function patchProvidersEmployersLeavepoliciesLeavePolicyIdEmployments(
  args: InferRequestType<
    (typeof client.providers.employers.leavepolicies)[':leavePolicyId']['employments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.leavepolicies[':leavePolicyId'].employments.$patch(args, options),
  )
}

export async function getProvidersEmployersMinimized(
  args: InferRequestType<typeof client.providers.employers.minimized.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.minimized.$get(args, options))
}

export async function getProvidersEmployersNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.notes)[':noteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.notes[':noteId'].$get(args, options))
}

export async function putProvidersEmployersNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.notes)[':noteId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.notes[':noteId'].$put(args, options))
}

export async function deleteProvidersEmployersNotesNoteId(
  args: InferRequestType<(typeof client.providers.employers.notes)[':noteId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.notes[':noteId'].$delete(args, options))
}

export async function patchProvidersEmployersNotifications(
  args: InferRequestType<typeof client.providers.employers.notifications.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.notifications.$patch(args, options))
}

export async function patchProvidersEmployersPayrollAdministrationsPayrollAdministrationIdMdvNotifications(
  args: InferRequestType<
    (typeof client.providers.employers.payrollAdministrations)[':payrollAdministrationId']['mdvNotifications']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrollAdministrations[
      ':payrollAdministrationId'
    ].mdvNotifications.$patch(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.apgpensiondeclarations)[':apgPensionDeclarationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.apgpensiondeclarations[
      ':apgPensionDeclarationId'
    ].$get(args, options),
  )
}

export async function patchProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.apgpensiondeclarations)[':apgPensionDeclarationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.apgpensiondeclarations[
      ':apgPensionDeclarationId'
    ].$patch(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdMessage(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.apgpensiondeclarations)[':apgPensionDeclarationId']['message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.apgpensiondeclarations[
      ':apgPensionDeclarationId'
    ].message.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdOverview(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.apgpensiondeclarations)[':apgPensionDeclarationId']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.apgpensiondeclarations[
      ':apgPensionDeclarationId'
    ].overview.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].$get(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersPayrolladministrationsJournalrunsJournalrunId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].$patch(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdDownload(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['download']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].download.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdErrors(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['errors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].errors.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdExportAuditTrail(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['exportAuditTrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[
      ':journalrunId'
    ].exportAuditTrail.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdResults(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].results.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverview(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['runoverview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].runoverview.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverviewperemployment(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['runoverviewperemployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[
      ':journalrunId'
    ].runoverviewperemployment.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdSend(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.journalruns)[':journalrunId']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.journalruns[':journalrunId'].send.$post(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersPayrolladministrationsPayrollruns(
  args: InferRequestType<
    typeof client.providers.employers.payrolladministrations.payrollruns.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns.$patch(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns.notes)[':noteId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns.notes[':noteId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns.notes)[':noteId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns.notes[':noteId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersPayrolladministrationsPayrollrunsNotesNoteId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns.notes)[':noteId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns.notes[':noteId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsSepafilesSepafileId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns.sepafiles)[':sepafileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns.sepafiles[':sepafileId'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdBalanceSheet(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['BalanceSheet']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].BalanceSheet.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdDefaultset(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['defaultset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].defaultset.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdErrorsandwarnings(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['errorsandwarnings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].errorsandwarnings.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdJournalentriesperdistributionunitoverviews(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['journalentriesperdistributionunitoverviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].journalentriesperdistributionunitoverviews.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].notes.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdNotes(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['notes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].notes.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPaymentoverviews(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['paymentoverviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].paymentoverviews.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayrollcontrolregister(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['payrollcontrolregister']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].payrollcontrolregister.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdPayslips(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['payslips']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].payslips.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdResults(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].results.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdRunoverviews(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['runoverviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].runoverviews.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdSepafiles(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['sepafiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].sepafiles.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdTotalsepafile(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['totalsepafile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[
      ':payrollrunId'
    ].totalsepafile.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdUndo(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['undo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].undo.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollrunsPayrollrunIdWagesheets(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrollruns)[':payrollrunId']['wagesheets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrollruns[':payrollrunId'].wagesheets.$get(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersPayrolladministrationsPayrolltaxreturns(
  args: InferRequestType<
    typeof client.providers.employers.payrolladministrations.payrolltaxreturns.$patch
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns.$patch(args, options),
  )
}

export async function patchProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReference(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':messageReference']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[':messageReference'].$patch(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReferenceSendresponsemessagebymessagereference(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':messageReference']['sendresponsemessagebymessagereference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':messageReference'
    ].sendresponsemessagebymessagereference.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[':payrolltaxreturnId'].$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdeal(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['ideal']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':payrolltaxreturnId'
    ].ideal.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdIdealPaymentStatus(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['idealPaymentStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':payrolltaxreturnId'
    ].idealPaymentStatus.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdMessage(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':payrolltaxreturnId'
    ].message.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdOverview(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':payrolltaxreturnId'
    ].overview.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdSendresponsemessage(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.payrolltaxreturns)[':payrolltaxreturnId']['sendresponsemessage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.payrolltaxreturns[
      ':payrolltaxreturnId'
    ].sendresponsemessage.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.upapensiondeclarations)[':upaPensionDeclarationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.upapensiondeclarations[
      ':upaPensionDeclarationId'
    ].$get(args, options),
  )
}

export async function patchProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationId(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.upapensiondeclarations)[':upaPensionDeclarationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.upapensiondeclarations[
      ':upaPensionDeclarationId'
    ].$patch(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdMessage(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations.upapensiondeclarations)[':upaPensionDeclarationId']['message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations.upapensiondeclarations[
      ':upaPensionDeclarationId'
    ].message.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulatedbasicjournalresultsreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['accumulatedbasicjournalresultsreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].accumulatedbasicjournalresultsreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulationsandbalancesreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['accumulationsandbalancesreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].accumulationsandbalancesreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualpayrolltaxreturnreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['annualpayrolltaxreturnreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].annualpayrolltaxreturnreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualwagesheetreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['annualwagesheetreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].annualwagesheetreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarations(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['apgpensiondeclarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].apgpensiondeclarations.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarationsInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['apgpensiondeclarations']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].apgpensiondeclarations.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAttachmentsofearningsreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['attachmentsofearningsreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].attachmentsofearningsreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAuditTrailPayrollPeriodData(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['auditTrail']['PayrollPeriodData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].auditTrail.PayrollPeriodData.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAvailablepayrollcomponentsets(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['availablepayrollcomponentsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].availablepayrollcomponentsets.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdDeviatingpremiumswab(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['deviatingpremiumswab']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].deviatingpremiumswab.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdEmploymentPayrollDataAuditTrail(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['employmentPayrollDataAuditTrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].employmentPayrollDataAuditTrail.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalruns(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['journalruns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].journalruns.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdJournalrunsInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['journalruns']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].journalruns.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodDataAuditTrail(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollPeriodDataAuditTrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollPeriodDataAuditTrail.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollPeriodsPayrollPeriodIdPayrollperioddata(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollPeriods'][':payrollPeriodId']['payrollperioddata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].payrollPeriods[
      ':payrollPeriodId'
    ].payrollperioddata.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolladministrationsettingsreport(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrolladministrationsettingsreport']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrolladministrationsettingsreport.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollcomponentsYearYear(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollcomponents']['year'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollcomponents.year[':year'].$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiods(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollperiods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollperiods.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsCompare(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollperiods']['compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollperiods.compare.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsInitialise(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollperiods']['initialise']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollperiods.initialise.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsMinimized(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollperiods']['minimized']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollperiods.minimized.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollperiodsPayrollPeriodIdPayrollresults(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollperiods'][':payrollPeriodId']['payrollresults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].payrollperiods[
      ':payrollPeriodId'
    ].payrollresults.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollprocessoverview(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollprocessoverview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollprocessoverview.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollruns(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollruns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].payrollruns.$get(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollruns']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrollruns.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrollrunsPeriodIdInitiationvalues(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrollruns'][':periodId']['initiationvalues']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].payrollruns[
      ':periodId'
    ].initiationvalues.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturns(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrolltaxreturns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrolltaxreturns.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrolltaxreturns']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].payrolltaxreturns.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolltaxreturnsPayrolltaxreturnIdSepafile(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['payrolltaxreturns'][':payrolltaxreturnId']['sepafile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].payrolltaxreturns[
      ':payrolltaxreturnId'
    ].sepafile.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdPeriodreadyforpayroll(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['periodreadyforpayroll']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].periodreadyforpayroll.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarations(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['upapensiondeclarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].upapensiondeclarations.$get(args, options),
  )
}

export async function postProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarationsInitiate(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['upapensiondeclarations']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].upapensiondeclarations.initiate.$post(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatements(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['yearendstatements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[
      ':payrollAdministrationId'
    ].yearendstatements.$get(args, options),
  )
}

export async function getProvidersEmployersPayrolladministrationsPayrollAdministrationIdYearendstatementsYear(
  args: InferRequestType<
    (typeof client.providers.employers.payrolladministrations)[':payrollAdministrationId']['yearendstatements'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.payrolladministrations[':payrollAdministrationId'].yearendstatements[
      ':year'
    ].$get(args, options),
  )
}

export async function getProvidersEmployersUsersDownloadrequests(
  args: InferRequestType<typeof client.providers.employers.users.downloadrequests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users.downloadrequests.$get(args, options))
}

export async function postProvidersEmployersUsersDownloadrequests(
  args: InferRequestType<typeof client.providers.employers.users.downloadrequests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users.downloadrequests.$post(args, options))
}

export async function getProvidersEmployersUsersDownloadrequestsDownloadRequestId(
  args: InferRequestType<
    (typeof client.providers.employers.users.downloadrequests)[':downloadRequestId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users.downloadrequests[':downloadRequestId'].$get(args, options),
  )
}

export async function deleteProvidersEmployersUsersDownloadrequestsDownloadRequestId(
  args: InferRequestType<
    (typeof client.providers.employers.users.downloadrequests)[':downloadRequestId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users.downloadrequests[':downloadRequestId'].$delete(args, options),
  )
}

export async function getProvidersEmployersUsersDownloadrequestsDownloadRequestIdFile(
  args: InferRequestType<
    (typeof client.providers.employers.users.downloadrequests)[':downloadRequestId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users.downloadrequests[':downloadRequestId'].file.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersUsersEmployerUserIdConfiguredexternaltenant(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':employerUserId']['configuredexternaltenant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':employerUserId'].configuredexternaltenant.$get(
      args,
      options,
    ),
  )
}

export async function patchProvidersEmployersUsersEmployerUserIdConfiguredexternaltenant(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':employerUserId']['configuredexternaltenant']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':employerUserId'].configuredexternaltenant.$patch(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersUsersUserId(
  args: InferRequestType<(typeof client.providers.employers.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users[':userId'].$get(args, options))
}

export async function putProvidersEmployersUsersUserId(
  args: InferRequestType<(typeof client.providers.employers.users)[':userId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users[':userId'].$put(args, options))
}

export async function deleteProvidersEmployersUsersUserId(
  args: InferRequestType<(typeof client.providers.employers.users)[':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users[':userId'].$delete(args, options))
}

export async function patchProvidersEmployersUsersUserId(
  args: InferRequestType<(typeof client.providers.employers.users)[':userId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers.users[':userId'].$patch(args, options))
}

export async function getProvidersEmployersUsersUserIdEmployers(
  args: InferRequestType<(typeof client.providers.employers.users)[':userId']['employers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].employers.$get(args, options),
  )
}

export async function getProvidersEmployersUsersUserIdIntegrations(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['integrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].integrations.$get(args, options),
  )
}

export async function putProvidersEmployersUsersUserIdIntegrationsApplicationId(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['integrations'][':applicationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].integrations[':applicationId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersUsersUserIdIntegrationsApplicationId(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['integrations'][':applicationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].integrations[':applicationId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersUsersUserIdIntegrationsApplicationIdLogo(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['integrations'][':applicationId']['logo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].integrations[':applicationId'].logo.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersUsersUserIdNotificationsettings(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['notificationsettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].notificationsettings.$get(args, options),
  )
}

export async function patchProvidersEmployersUsersUserIdNotificationsettings(
  args: InferRequestType<
    (typeof client.providers.employers.users)[':userId']['notificationsettings']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.users[':userId'].notificationsettings.$patch(args, options),
  )
}

export async function getProvidersEmployersWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.providers.employers.workflows)[':workflowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflows[':workflowId'].$get(args, options),
  )
}

export async function putProvidersEmployersWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.providers.employers.workflows)[':workflowId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflows[':workflowId'].$put(args, options),
  )
}

export async function postProvidersEmployersWorkflowsWorkflowIdTransition(
  args: InferRequestType<
    (typeof client.providers.employers.workflows)[':workflowId']['transition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflows[':workflowId'].transition.$post(args, options),
  )
}

export async function getProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingId(
  args: InferRequestType<
    (typeof client.providers.employers.workflowtriggermappings)[':workflowTriggerMappingId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflowtriggermappings[':workflowTriggerMappingId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingId(
  args: InferRequestType<
    (typeof client.providers.employers.workflowtriggermappings)[':workflowTriggerMappingId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflowtriggermappings[':workflowTriggerMappingId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersWorkflowtriggermappingsWorkflowTriggerMappingId(
  args: InferRequestType<
    (typeof client.providers.employers.workflowtriggermappings)[':workflowTriggerMappingId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers.workflowtriggermappings[':workflowTriggerMappingId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerId(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].$get(args, options))
}

export async function putProvidersEmployersEmployerId(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].$put(args, options))
}

export async function getProvidersEmployersEmployerIdActualorganizationalentities(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['actualorganizationalentities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].actualorganizationalentities.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdActualwages(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['actualwages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].actualwages.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdActualworkinghours(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['actualworkinghours']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].actualworkinghours.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdAdministrations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['administrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].administrations.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdAnnouncements(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['announcements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].announcements.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdApplications(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].applications.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdApplicationsApplicationIdUsers(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['applications'][':applicationId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].applications[':applicationId'].users.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdAssessments(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['assessments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].assessments.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdAssignedworkflows(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['assignedworkflows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].assignedworkflows.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdAuditTrailEmployeeData(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['auditTrail']['EmployeeData']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].auditTrail.EmployeeData.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdAuthorizations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['authorizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].authorizations.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdBenefitinkindtypes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['benefitinkindtypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].benefitinkindtypes.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdBenefitinkindtypes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['benefitinkindtypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].benefitinkindtypes.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdBillableitems(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['billableitems']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].billableitems.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdConceptemployees(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['conceptemployees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].conceptemployees.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdConceptemployees(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['conceptemployees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].conceptemployees.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdConceptemployeesSelfservice(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['conceptemployees']['selfservice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].conceptemployees.selfservice.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdContractcodes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['contractcodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].contractcodes.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdContractcodes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['contractcodes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].contractcodes.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['customfields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].customfields.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdCustomfields(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['customfields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].customfields.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdCustomholidays(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['customholidays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].customholidays.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdCustomholidays(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['customholidays']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].customholidays.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDashboard(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].dashboard.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDashboardLicenses(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['dashboardLicenses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].dashboardLicenses.$get(args, options),
  )
}

export async function putProvidersEmployersEmployerIdDashboardLicenses(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['dashboardLicenses']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].dashboardLicenses.$put(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDatanewbusinesstoken(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['datanewbusinesstoken']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].datanewbusinesstoken.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDepartments(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['departments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].departments.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdDepartments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['departments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].departments.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDocuments(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdDocuments(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDocumentsAuthorizations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents']['authorizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.authorizations.$get(args, options),
  )
}

export async function putProvidersEmployersEmployerIdDocumentsAuthorizations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents']['authorizations']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.authorizations.$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployerIdDocumentsCompletedossier(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents']['completedossier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.completedossier.$delete(args, options),
  )
}

export async function postProvidersEmployersEmployerIdDocumentsCompletedossierInitiate(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents']['completedossier']['initiate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents.completedossier.initiate.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents[':documentId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployerIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents[':documentId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployerIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents[':documentId'].$delete(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDocumentsDocumentIdAudittrail(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documents'][':documentId']['audittrail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documents[':documentId'].audittrail.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdDocumenttemplates(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdDocumenttemplates(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdDocumenttemplatesDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates[':documentId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployerIdDocumenttemplatesDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates[':documentId'].$put(args, options),
  )
}

export async function deleteProvidersEmployersEmployerIdDocumenttemplatesDocumentId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates[':documentId'].$delete(
      args,
      options,
    ),
  )
}

export async function postProvidersEmployersEmployerIdDocumenttemplatesDocumentIdGeneratedocuments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['documenttemplates'][':documentId']['generatedocuments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].documenttemplates[
      ':documentId'
    ].generatedocuments.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEducationfurtherindications(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['educationfurtherindications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].educationfurtherindications.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEducationfurtherindications(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['educationfurtherindications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].educationfurtherindications.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEducationtypes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['educationtypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].educationtypes.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEducationtypes(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['educationtypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].educationtypes.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmailidentities(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailidentities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailidentities.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEmailidentities(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailidentities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailidentities.$post(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEmailidentitiesVerify(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailidentities']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailidentities.verify.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmailtemplates(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailtemplates.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmailtemplatesEmailTemplateId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailtemplates'][':emailTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailtemplates[':emailTemplateId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployerIdEmailtemplatesEmailTemplateId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailtemplates'][':emailTemplateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailtemplates[':emailTemplateId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteProvidersEmployersEmployerIdEmailtemplatesEmailTemplateId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['emailtemplates'][':emailTemplateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].emailtemplates[':emailTemplateId'].$delete(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployees(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesActualpartners(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['actualpartners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.actualpartners.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesChildren(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['children']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.children.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesContacts(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['contacts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.contacts.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmployments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsWageProposals(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['WageProposals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.WageProposals.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsActualbenefitsanddeductions(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['actualbenefitsanddeductions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[
      ':employerId'
    ].employees.employments.actualbenefitsanddeductions.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEmployeesEmploymentsBenefitsanddeductions(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['benefitsanddeductions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.benefitsanddeductions.$post(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAbsences(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['calendar']['absences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.calendar.absences.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAvailablehours(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['calendar']['availablehours']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.calendar.availablehours.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeave(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['calendar']['leave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.calendar.leave.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeaverequests(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['calendar']['leaverequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.calendar.leaverequests.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsComprehensive(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['comprehensive']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.comprehensive.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['declarations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.declarations.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsDeclarationsWithattachment(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['declarations']['withattachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[
      ':employerId'
    ].employees.employments.declarations.withattachment.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsLastmodifiedversionnumbers(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['lastmodifiedversionnumbers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.lastmodifiedversionnumbers.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsLeaverequests(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['leaverequests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.leaverequests.$get(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesEmploymentsMinimized(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['minimized']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.minimized.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdEmployeesEmploymentsWages(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['employments']['wages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.employments.wages.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmployeesSelfservice(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['selfservice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.selfservice.$get(args, options),
  )
}

export async function patchProvidersEmployersEmployerIdEmployeesSelfservice(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employees']['selfservice']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employees.selfservice.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployerIdEmploymenttemplates(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['employmenttemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].employmenttemplates.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdExternaltenants(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['externaltenants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].externaltenants.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdFunctions(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['functions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].functions.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdFunctions(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['functions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].functions.$post(args, options),
  )
}

export async function postProvidersEmployersEmployerIdLeave(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].leave.$post(args, options))
}

export async function getProvidersEmployersEmployerIdLeaveProposedleavehours(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leave']['proposedleavehours']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leave.proposedleavehours.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLeavePolicies(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavePolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavePolicies.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdLeavePolicies(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavePolicies.$post(args, options),
  )
}

export async function patchProvidersEmployersEmployerIdLeavePolicies(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavePolicies']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavePolicies.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLeavebalances(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavebalances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavebalances.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLeavebalancesGrouped(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavebalances']['grouped']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavebalances.grouped.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLeavetypes(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['leavetypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavetypes.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLeavetypesLeaveTypeId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavetypes'][':leaveTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavetypes[':leaveTypeId'].$get(args, options),
  )
}

export async function putProvidersEmployersEmployerIdLeavetypesLeaveTypeId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['leavetypes'][':leaveTypeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].leavetypes[':leaveTypeId'].$put(args, options),
  )
}

export async function getProvidersEmployersEmployerIdLogo(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].logo.$get(args, options))
}

export async function postProvidersEmployersEmployerIdLogo(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['logo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].logo.$post(args, options))
}

export async function deleteProvidersEmployersEmployerIdLogo(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['logo']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].logo.$delete(args, options))
}

export async function getProvidersEmployersEmployerIdLogoVersion(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['logo'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].logo[':version'].$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdModules(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['modules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].modules.$get(args, options))
}

export async function getProvidersEmployersEmployerIdNationalholidays(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['nationalholidays']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].nationalholidays.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdNationalholidaysNationalHolidayId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['nationalholidays'][':nationalHolidayId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].nationalholidays[':nationalHolidayId'].$get(
      args,
      options,
    ),
  )
}

export async function putProvidersEmployersEmployerIdNationalholidaysNationalHolidayId(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['nationalholidays'][':nationalHolidayId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].nationalholidays[':nationalHolidayId'].$put(
      args,
      options,
    ),
  )
}

export async function getProvidersEmployersEmployerIdNotes(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].notes.$get(args, options))
}

export async function postProvidersEmployersEmployerIdNotes(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].notes.$post(args, options))
}

export async function getProvidersEmployersEmployerIdNotifications(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['notifications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].notifications.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdPayrolladministrations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['payrolladministrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].payrolladministrations.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdProforma(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['proforma']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].proforma.$get(args, options))
}

export async function postProvidersEmployersEmployerIdProformaInitialize(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['proforma']['initialize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].proforma.initialize.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdProviderlogo(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['providerlogo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].providerlogo.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdProviderlogoVersion(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['providerlogo'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].providerlogo[':version'].$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdUseraccessibledepartments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['useraccessibledepartments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].useraccessibledepartments.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdUsers(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].users.$get(args, options))
}

export async function postProvidersEmployersEmployerIdUsers(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.employers[':employerId'].users.$post(args, options))
}

export async function getProvidersEmployersEmployerIdUsersDepartments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users']['departments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users.departments.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdUsersInvite(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users.invite.$post(args, options),
  )
}

export async function postProvidersEmployersEmployerIdUsersLink(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users']['link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users.link.$post(args, options),
  )
}

export async function getProvidersEmployersEmployerIdUsersUserIdAuthorizations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users'][':userId']['authorizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users[':userId'].authorizations.$get(args, options),
  )
}

export async function patchProvidersEmployersEmployerIdUsersUserIdAuthorizations(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users'][':userId']['authorizations']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users[':userId'].authorizations.$patch(args, options),
  )
}

export async function patchProvidersEmployersEmployerIdUsersUserIdDepartments(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['users'][':userId']['departments']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].users[':userId'].departments.$patch(args, options),
  )
}

export async function getProvidersEmployersEmployerIdWorkflows(
  args: InferRequestType<(typeof client.providers.employers)[':employerId']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].workflows.$get(args, options),
  )
}

export async function getProvidersEmployersEmployerIdWorkflowtriggermappings(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['workflowtriggermappings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].workflowtriggermappings.$get(args, options),
  )
}

export async function postProvidersEmployersEmployerIdWorkflowtriggermappings(
  args: InferRequestType<
    (typeof client.providers.employers)[':employerId']['workflowtriggermappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.employers[':employerId'].workflowtriggermappings.$post(args, options),
  )
}

export async function getProvidersLeavePoliciesLeavePolicyId(
  args: InferRequestType<(typeof client.providers.leavePolicies)[':leavePolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers.leavePolicies[':leavePolicyId'].$get(args, options))
}

export async function getProvidersLeavePoliciesLeavePolicyIdAgebasedleave(
  args: InferRequestType<
    (typeof client.providers.leavePolicies)[':leavePolicyId']['agebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.leavePolicies[':leavePolicyId'].agebasedleave.$get(args, options),
  )
}

export async function getProvidersLeavePoliciesLeavePolicyIdWagebasedleave(
  args: InferRequestType<
    (typeof client.providers.leavePolicies)[':leavePolicyId']['wagebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.leavePolicies[':leavePolicyId'].wagebasedleave.$get(args, options),
  )
}

export async function getProvidersLeavePoliciesLeavePolicyIdYearsofservicebasedleave(
  args: InferRequestType<
    (typeof client.providers.leavePolicies)[':leavePolicyId']['yearsofservicebasedleave']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.leavePolicies[':leavePolicyId'].yearsofservicebasedleave.$get(args, options),
  )
}

export async function getProvidersNotificationsetsNotificationSetId(
  args: InferRequestType<(typeof client.providers.notificationsets)[':notificationSetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.notificationsets[':notificationSetId'].$get(args, options),
  )
}

export async function getProvidersUsersProviderUserIdConfiguredexternaltenant(
  args: InferRequestType<
    (typeof client.providers.users)[':providerUserId']['configuredexternaltenant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.users[':providerUserId'].configuredexternaltenant.$get(args, options),
  )
}

export async function patchProvidersUsersProviderUserIdConfiguredexternaltenant(
  args: InferRequestType<
    (typeof client.providers.users)[':providerUserId']['configuredexternaltenant']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers.users[':providerUserId'].configuredexternaltenant.$patch(args, options),
  )
}

export async function getProvidersProviderIdApplicationsets(
  args: InferRequestType<(typeof client.providers)[':providerId']['applicationsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].applicationsets.$get(args, options))
}

export async function postProvidersProviderIdApplicationsets(
  args: InferRequestType<(typeof client.providers)[':providerId']['applicationsets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].applicationsets.$post(args, options))
}

export async function getProvidersProviderIdAuthorizations(
  args: InferRequestType<(typeof client.providers)[':providerId']['authorizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].authorizations.$get(args, options))
}

export async function getProvidersProviderIdAuthorizationsets(
  args: InferRequestType<(typeof client.providers)[':providerId']['authorizationsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].authorizationsets.$get(args, options))
}

export async function getProvidersProviderIdBillableitems(
  args: InferRequestType<(typeof client.providers)[':providerId']['billableitems']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].billableitems.$get(args, options))
}

export async function getProvidersProviderIdEmailidentities(
  args: InferRequestType<(typeof client.providers)[':providerId']['emailidentities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].emailidentities.$get(args, options))
}

export async function postProvidersProviderIdEmailidentities(
  args: InferRequestType<(typeof client.providers)[':providerId']['emailidentities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].emailidentities.$post(args, options))
}

export async function postProvidersProviderIdEmailidentitiesVerify(
  args: InferRequestType<
    (typeof client.providers)[':providerId']['emailidentities']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':providerId'].emailidentities.verify.$post(args, options),
  )
}

export async function getProvidersProviderIdEmailtemplates(
  args: InferRequestType<(typeof client.providers)[':providerId']['emailtemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].emailtemplates.$get(args, options))
}

export async function getProvidersProviderIdEmailtemplatesEmailTemplateId(
  args: InferRequestType<
    (typeof client.providers)[':providerId']['emailtemplates'][':emailTemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':providerId'].emailtemplates[':emailTemplateId'].$get(args, options),
  )
}

export async function postProvidersProviderIdEmployers(
  args: InferRequestType<(typeof client.providers)[':providerId']['employers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].employers.$post(args, options))
}

export async function getProvidersProviderIdExternaltenants(
  args: InferRequestType<(typeof client.providers)[':providerId']['externaltenants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].externaltenants.$get(args, options))
}

export async function getProvidersProviderIdLeavePolicies(
  args: InferRequestType<(typeof client.providers)[':providerId']['leavePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].leavePolicies.$get(args, options))
}

export async function getProvidersProviderIdLogo(
  args: InferRequestType<(typeof client.providers)[':providerId']['logo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].logo.$get(args, options))
}

export async function getProvidersProviderIdLogoVersion(
  args: InferRequestType<(typeof client.providers)[':providerId']['logo'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].logo[':version'].$get(args, options))
}

export async function getProvidersProviderIdNotificationsets(
  args: InferRequestType<(typeof client.providers)[':providerId']['notificationsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.providers[':providerId'].notificationsets.$get(args, options))
}

export async function getProvidersProviderIdPayrollprocessstatus(
  args: InferRequestType<(typeof client.providers)[':providerId']['payrollprocessstatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.providers[':providerId'].payrollprocessstatus.$get(args, options),
  )
}

export async function getQwoaterEmployers(
  args: InferRequestType<typeof client.qwoater.employers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qwoater.employers.$get(args, options))
}

export async function getRdwservicesAdditionaltaxliability(
  args: InferRequestType<typeof client.rdwservices.additionaltaxliability.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rdwservices.additionaltaxliability.$get(args, options))
}

export async function getUser(
  args: InferRequestType<typeof client.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$get(args, options))
}

export async function putUser(
  args: InferRequestType<typeof client.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$put(args, options))
}

export async function getUserFiltersettingsEmployerId(
  args: InferRequestType<(typeof client.user.filtersettings)[':employerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.filtersettings[':employerId'].$get(args, options))
}

export async function putUserFiltersettingsEmployerId(
  args: InferRequestType<(typeof client.user.filtersettings)[':employerId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.filtersettings[':employerId'].$put(args, options))
}

export async function getUserPhoto(
  args: InferRequestType<typeof client.user.photo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.photo.$get(args, options))
}

export async function postUserPhoto(
  args: InferRequestType<typeof client.user.photo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.photo.$post(args, options))
}

export async function deleteUserPhoto(
  args: InferRequestType<typeof client.user.photo.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.photo.$delete(args, options))
}

export async function putUsersApplicationsetsApplicationSetId(
  args: InferRequestType<(typeof client.users.applicationsets)[':applicationSetId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.applicationsets[':applicationSetId'].$put(args, options))
}

export async function deleteUsersApplicationsetsApplicationSetId(
  args: InferRequestType<(typeof client.users.applicationsets)[':applicationSetId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users.applicationsets[':applicationSetId'].$delete(args, options),
  )
}

export async function getUsersInitiatedworkflows(
  args: InferRequestType<typeof client.users.initiatedworkflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.initiatedworkflows.$get(args, options))
}

export async function getUsersIntegrations(
  args: InferRequestType<typeof client.users.integrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.integrations.$get(args, options))
}

export async function getUsersUserIdApplicationsets(
  args: InferRequestType<(typeof client.users)[':userId']['applicationsets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].applicationsets.$get(args, options))
}

export async function postUsersUserIdApplicationsets(
  args: InferRequestType<(typeof client.users)[':userId']['applicationsets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].applicationsets.$post(args, options))
}

export async function getUsersUserIdYourcampusurl(
  args: InferRequestType<(typeof client.users)[':userId']['yourcampusurl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':userId'].yourcampusurl.$get(args, options))
}

export async function getWageprojectionCladataCollectiveLaborAgreementId(
  args: InferRequestType<
    (typeof client.wageprojection.cladata)[':collectiveLaborAgreementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.wageprojection.cladata[':collectiveLaborAgreementId'].$get(args, options),
  )
}

export async function getWageprojectionCollectivelaboragreements(
  args: InferRequestType<typeof client.wageprojection.collectivelaboragreements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wageprojection.collectivelaboragreements.$get(args, options))
}
