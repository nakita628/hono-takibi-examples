import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putAssessmentsAssessmentIdAssociateToAssessmentReport(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['associateToAssessmentReport']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].associateToAssessmentReport.$put(args, options),
  )
}

export async function putAssessmentsAssessmentIdBatchAssociateToAssessmentReport(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['batchAssociateToAssessmentReport']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].batchAssociateToAssessmentReport.$put(args, options),
  )
}

export async function putAssessmentsAssessmentIdDelegations(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].delegations.$put(args, options))
}

export async function postAssessmentsAssessmentIdDelegations(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['delegations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].delegations.$post(args, options))
}

export async function putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReport(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['batchDisassociateFromAssessmentReport']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].batchDisassociateFromAssessmentReport.$put(args, options),
  )
}

export async function postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidence(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['evidence']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[
      ':controlId'
    ].evidence.$post(args, options),
  )
}

export async function getAssessments(
  args: InferRequestType<typeof client.assessments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments.$get(args, options))
}

export async function postAssessments(
  args: InferRequestType<typeof client.assessments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments.$post(args, options))
}

export async function postAssessmentFrameworks(
  args: InferRequestType<typeof client.assessmentFrameworks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentFrameworks.$post(args, options))
}

export async function postAssessmentsAssessmentIdReports(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].reports.$post(args, options))
}

export async function postControls(
  args: InferRequestType<typeof client.controls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.controls.$post(args, options))
}

export async function getAssessmentsAssessmentId(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].$get(args, options))
}

export async function putAssessmentsAssessmentId(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].$put(args, options))
}

export async function deleteAssessmentsAssessmentId(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].$delete(args, options))
}

export async function getAssessmentFrameworksFrameworkId(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentFrameworks[':frameworkId'].$get(args, options))
}

export async function putAssessmentFrameworksFrameworkId(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentFrameworks[':frameworkId'].$put(args, options))
}

export async function deleteAssessmentFrameworksFrameworkId(
  args: InferRequestType<(typeof client.assessmentFrameworks)[':frameworkId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentFrameworks[':frameworkId'].$delete(args, options))
}

export async function deleteAssessmentFrameworkShareRequestsRequestIdRequestType(
  args: InferRequestType<
    (typeof client.assessmentFrameworkShareRequests)[':requestId#requestType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessmentFrameworkShareRequests[':requestId#requestType'].$delete(args, options),
  )
}

export async function deleteAssessmentsAssessmentIdReportsAssessmentReportId(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].reports[':assessmentReportId'].$delete(args, options),
  )
}

export async function getControlsControlId(
  args: InferRequestType<(typeof client.controls)[':controlId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.controls[':controlId'].$get(args, options))
}

export async function putControlsControlId(
  args: InferRequestType<(typeof client.controls)[':controlId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.controls[':controlId'].$put(args, options))
}

export async function deleteControlsControlId(
  args: InferRequestType<(typeof client.controls)[':controlId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.controls[':controlId'].$delete(args, options))
}

export async function postAccountDeregisterAccount(
  args: InferRequestType<typeof client.account.deregisterAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.deregisterAccount.$post(args, options))
}

export async function postAccountDeregisterOrganizationAdminAccount(
  args: InferRequestType<typeof client.account.deregisterOrganizationAdminAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.deregisterOrganizationAdminAccount.$post(args, options))
}

export async function putAssessmentsAssessmentIdDisassociateFromAssessmentReport(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['disassociateFromAssessmentReport']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].disassociateFromAssessmentReport.$put(args, options),
  )
}

export async function getAccountStatus(
  args: InferRequestType<typeof client.account.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.status.$get(args, options))
}

export async function getAssessmentsAssessmentIdReportsAssessmentReportIdUrl(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['reports'][':assessmentReportId']['url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].reports[':assessmentReportId'].url.$get(args, options),
  )
}

export async function getAssessmentsAssessmentIdChangelogs(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['changelogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].changelogs.$get(args, options))
}

export async function getDelegations(
  args: InferRequestType<typeof client.delegations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delegations.$get(args, options))
}

export async function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceId(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence'][':evidenceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
      ':evidenceFolderId'
    ].evidence[':evidenceId'].$get(args, options),
  )
}

export async function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidence(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['evidence']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
      ':evidenceFolderId'
    ].evidence.$get(args, options),
  )
}

export async function getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderId(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['evidenceFolders'][':evidenceFolderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].evidenceFolders[
      ':evidenceFolderId'
    ].$get(args, options),
  )
}

export async function getAssessmentsAssessmentIdEvidenceFolders(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['evidenceFolders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].evidenceFolders.$get(args, options),
  )
}

export async function getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlId(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][':controlId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId']['evidenceFolders-by-assessment-control'][':controlSetId'][
      ':controlId'
    ].$get(args, options),
  )
}

export async function getInsights(
  args: InferRequestType<typeof client.insights.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.$get(args, options))
}

export async function getInsightsAssessmentsAssessmentId(
  args: InferRequestType<(typeof client.insights.assessments)[':assessmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights.assessments[':assessmentId'].$get(args, options))
}

export async function getAccountOrganizationAdminAccount(
  args: InferRequestType<typeof client.account.organizationAdminAccount.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.organizationAdminAccount.$get(args, options))
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function getSettingsAttribute(
  args: InferRequestType<(typeof client.settings)[':attribute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings[':attribute'].$get(args, options))
}

export async function getInsightsControlsByAssessmentControlDomainIdAssessmentId(
  args: InferRequestType<
    (typeof client.insights)['controls-by-assessment#controlDomainId&assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights['controls-by-assessment#controlDomainId&assessmentId'].$get(args, options),
  )
}

export async function getAssessmentFrameworkShareRequestsRequestType(
  args: InferRequestType<(typeof client)['assessmentFrameworkShareRequests#requestType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['assessmentFrameworkShareRequests#requestType'].$get(args, options),
  )
}

export async function getAssessmentFrameworksFrameworkType(
  args: InferRequestType<(typeof client)['assessmentFrameworks#frameworkType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['assessmentFrameworks#frameworkType'].$get(args, options))
}

export async function getAssessmentReports(
  args: InferRequestType<typeof client.assessmentReports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentReports.$get(args, options))
}

export async function getInsightsControlDomains(
  args: InferRequestType<(typeof client.insights)['control-domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights['control-domains'].$get(args, options))
}

export async function getInsightsControlDomainsByAssessmentAssessmentId(
  args: InferRequestType<
    (typeof client.insights)['control-domains-by-assessment#assessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.insights['control-domains-by-assessment#assessmentId'].$get(args, options),
  )
}

export async function getInsightsControlsControlDomainId(
  args: InferRequestType<(typeof client.insights)['controls#controlDomainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.insights['controls#controlDomainId'].$get(args, options))
}

export async function getControlsControlType(
  args: InferRequestType<(typeof client)['controls#controlType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['controls#controlType'].$get(args, options))
}

export async function getDataSourceKeywordsSource(
  args: InferRequestType<(typeof client)['dataSourceKeywords#source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataSourceKeywords#source'].$get(args, options))
}

export async function getNotifications(
  args: InferRequestType<typeof client.notifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postAccountRegisterAccount(
  args: InferRequestType<typeof client.account.registerAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.registerAccount.$post(args, options))
}

export async function postAccountRegisterOrganizationAdminAccount(
  args: InferRequestType<typeof client.account.registerOrganizationAdminAccount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.registerOrganizationAdminAccount.$post(args, options))
}

export async function postAssessmentFrameworksFrameworkIdShareRequests(
  args: InferRequestType<
    (typeof client.assessmentFrameworks)[':frameworkId']['shareRequests']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessmentFrameworks[':frameworkId'].shareRequests.$post(args, options),
  )
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlId(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['controls'][':controlId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].controls[':controlId'].$put(
      args,
      options,
    ),
  )
}

export async function putAssessmentsAssessmentIdControlSetsControlSetIdStatus(
  args: InferRequestType<
    (typeof client.assessments)[':assessmentId']['controlSets'][':controlSetId']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessments[':assessmentId'].controlSets[':controlSetId'].status.$put(args, options),
  )
}

export async function putAssessmentFrameworkShareRequestsRequestId(
  args: InferRequestType<(typeof client.assessmentFrameworkShareRequests)[':requestId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.assessmentFrameworkShareRequests[':requestId'].$put(args, options),
  )
}

export async function putAssessmentsAssessmentIdStatus(
  args: InferRequestType<(typeof client.assessments)[':assessmentId']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessments[':assessmentId'].status.$put(args, options))
}

export async function putSettings(
  args: InferRequestType<typeof client.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$put(args, options))
}

export async function postAssessmentReportsIntegrity(
  args: InferRequestType<typeof client.assessmentReports.integrity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assessmentReports.integrity.$post(args, options))
}
