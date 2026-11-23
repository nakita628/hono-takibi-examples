import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAboutReleaseNotes(options?: ClientRequestOptions) {
  return await parseResponse(client.about.release_notes.$get(undefined, options))
}

export async function getAboutVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.about.version.$get(undefined, options))
}

export async function postAuth(
  args: InferRequestType<typeof client.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.$post(args, options))
}

export async function getAuthApiKey(
  args: InferRequestType<(typeof client.auth)['api-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'].$get(args, options))
}

export async function postAuthApiKey(
  args: InferRequestType<(typeof client.auth)['api-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'].$post(args, options))
}

export async function getAuthApiKeyInboxInboxId(
  args: InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'].inbox[':inbox_id'].$get(args, options))
}

export async function postAuthApiKeyInboxInboxId(
  args: InferRequestType<(typeof client.auth)['api-key']['inbox'][':inbox_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'].inbox[':inbox_id'].$post(args, options))
}

export async function getAuthApiKeyKey(
  args: InferRequestType<(typeof client.auth)['api-key'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'][':key'].$get(args, options))
}

export async function deleteAuthApiKeyKey(
  args: InferRequestType<(typeof client.auth)['api-key'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'][':key'].$delete(args, options))
}

export async function patchAuthApiKeyKey(
  args: InferRequestType<(typeof client.auth)['api-key'][':key']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth['api-key'][':key'].$patch(args, options))
}

export async function postAuthEphemeral(
  args: InferRequestType<typeof client.auth.ephemeral.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.ephemeral.$post(args, options))
}

export async function postAuthGetJWT(
  args: InferRequestType<typeof client.auth.get_JWT.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.get_JWT.$post(args, options))
}

export async function postAuthResetPassword(
  args: InferRequestType<typeof client.auth.reset_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.reset_password.$post(args, options))
}

export async function postAuthToken(
  args: InferRequestType<typeof client.auth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.token.$post(args, options))
}

export async function getConnections(
  args: InferRequestType<typeof client.connections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$get(args, options))
}

export async function postConnections(
  args: InferRequestType<typeof client.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections.$post(args, options))
}

export async function getConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$get(args, options))
}

export async function deleteConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$delete(args, options))
}

export async function patchConnectionsConnectionId(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connections[':connection_id'].$patch(args, options))
}

export async function getDataRetentionSettings(
  args: InferRequestType<typeof client.data_retention_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_retention_settings.$get(args, options))
}

export async function getDataRetentionSettingsLevelId(
  args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_retention_settings[':level'][':id'].$get(args, options))
}

export async function deleteDataRetentionSettingsLevelId(
  args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_retention_settings[':level'][':id'].$delete(args, options))
}

export async function patchDataRetentionSettingsLevelId(
  args: InferRequestType<(typeof client.data_retention_settings)[':level'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_retention_settings[':level'][':id'].$patch(args, options))
}

export async function postDocumentsIndex(
  args: InferRequestType<typeof client.documents.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.index.$post(args, options))
}

export async function postDocumentsCustomOutput(
  args: InferRequestType<typeof client.documents.custom_output.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.custom_output.$post(args, options))
}

export async function postDocumentsEnrich(
  args: InferRequestType<typeof client.documents.enrich.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.enrich.$post(args, options))
}

export async function postDocumentsFileQueryDataType(
  args: InferRequestType<(typeof client.documents.file_query)[':data_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.file_query[':data_type'].$post(args, options))
}

export async function postDocumentsQueryQueryType(
  args: InferRequestType<(typeof client.documents.query)[':query_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.query[':query_type'].$post(args, options))
}

export async function getDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':document_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].$get(args, options))
}

export async function deleteDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':document_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].$delete(args, options))
}

export async function postDocumentsDocumentIdCompareVersions(
  args: InferRequestType<(typeof client.documents)[':document_id']['compare_versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].compare_versions.$post(args, options))
}

export async function getDocumentsDocumentIdCustomOutput(
  args: InferRequestType<(typeof client.documents)[':document_id']['custom_output']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].custom_output.$get(args, options))
}

export async function postDocumentsDocumentIdFeedback(
  args: InferRequestType<(typeof client.documents)[':document_id']['feedback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].feedback.$post(args, options))
}

export async function getDocumentsDocumentIdLastVersion(
  args: InferRequestType<(typeof client.documents)[':document_id']['last_version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].last_version.$get(args, options))
}

export async function getDocumentsDocumentIdOriginalFile(
  args: InferRequestType<(typeof client.documents)[':document_id']['original_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].original_file.$get(args, options))
}

export async function getDocumentsDocumentIdPagePageRange(
  args: InferRequestType<(typeof client.documents)[':document_id']['page'][':page_range']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.documents[':document_id'].page[':page_range'].$get(args, options),
  )
}

export async function getDocumentsDocumentIdPageThumbnailPageRange(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['page_thumbnail'][':page_range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.documents[':document_id'].page_thumbnail[':page_range'].$get(args, options),
  )
}

export async function postDocumentsDocumentIdProcessTableAnnotation(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['process_table_annotation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.documents[':document_id'].process_table_annotation.$post(args, options),
  )
}

export async function postDocumentsDocumentIdReprocess(
  args: InferRequestType<(typeof client.documents)[':document_id']['reprocess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].reprocess.$post(args, options))
}

export async function getDocumentsDocumentIdReversePageRange(
  args: InferRequestType<
    (typeof client.documents)[':document_id']['reverse'][':page_range']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.documents[':document_id'].reverse[':page_range'].$get(args, options),
  )
}

export async function postDocumentsDocumentIdStatusData(
  args: InferRequestType<(typeof client.documents)[':document_id']['status_data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].status_data.$post(args, options))
}

export async function getDocumentsDocumentIdText(
  args: InferRequestType<(typeof client.documents)[':document_id']['text']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].text.$get(args, options))
}

export async function getDocumentsDocumentIdWorkflow(
  args: InferRequestType<(typeof client.documents)[':document_id']['workflow']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':document_id'].workflow.$get(args, options))
}

export async function postDocumentsInboxId(
  args: InferRequestType<(typeof client.documents)[':inbox_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':inbox_id'].$post(args, options))
}

export async function patchDocumentsInboxIdCopyInbox(
  args: InferRequestType<(typeof client.documents)[':inbox_id']['copy_inbox']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':inbox_id'].copy_inbox.$patch(args, options))
}

export async function patchDocumentsInboxIdMoveInbox(
  args: InferRequestType<(typeof client.documents)[':inbox_id']['move_inbox']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':inbox_id'].move_inbox.$patch(args, options))
}

export async function getFormats(options?: ClientRequestOptions) {
  return await parseResponse(client.formats.$get(undefined, options))
}

export async function postFormats(
  args: InferRequestType<typeof client.formats.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats.$post(args, options))
}

export async function getFormatsDocumentTypes(
  args: InferRequestType<typeof client.formats.document_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats.document_types.$get(args, options))
}

export async function getFormatsFormatId(
  args: InferRequestType<(typeof client.formats)[':format_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats[':format_id'].$get(args, options))
}

export async function deleteFormatsFormatId(
  args: InferRequestType<(typeof client.formats)[':format_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats[':format_id'].$delete(args, options))
}

export async function patchFormatsFormatId(
  args: InferRequestType<(typeof client.formats)[':format_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats[':format_id'].$patch(args, options))
}

export async function getFormatsScopeTagFields(
  args: InferRequestType<(typeof client.formats)[':scope']['tag_fields']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.formats[':scope'].tag_fields.$get(args, options))
}

export async function getInboxes(
  args: InferRequestType<typeof client.inboxes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes.$get(args, options))
}

export async function postInboxes(
  args: InferRequestType<typeof client.inboxes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes.$post(args, options))
}

export async function getInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$get(args, options))
}

export async function deleteInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$delete(args, options))
}

export async function patchInboxesInboxId(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].$patch(args, options))
}

export async function getInboxesInboxIdDocumentVersions(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['document_versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].document_versions.$get(args, options))
}

export async function getInboxesInboxIdDocuments(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].documents.$get(args, options))
}

export async function deleteInboxesInboxIdDocuments(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['documents']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].documents.$delete(args, options))
}

export async function getInboxesInboxIdPaginated(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['paginated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].paginated.$get(args, options))
}

export async function postInboxesInboxIdReprocess(
  args: InferRequestType<(typeof client.inboxes)[':inbox_id']['reprocess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inboxes[':inbox_id'].reprocess.$post(args, options))
}

export async function getIntegrationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.index.$get(undefined, options))
}

export async function postIntegrationsIndex(
  args: InferRequestType<typeof client.integrations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.index.$post(args, options))
}

export async function getIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':integration_id'].$get(args, options))
}

export async function deleteIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':integration_id'].$delete(args, options))
}

export async function patchIntegrationsIntegrationId(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':integration_id'].$patch(args, options))
}

export async function getIntegrationsIntegrationIdActivate(
  args: InferRequestType<(typeof client.integrations)[':integration_id']['activate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations[':integration_id'].activate.$get(args, options))
}

export async function getPredictorSettings(
  args: InferRequestType<typeof client.predictor_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictor_settings.$get(args, options))
}

export async function getPredictorSettingsScope(
  args: InferRequestType<(typeof client.predictor_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictor_settings[':scope'].$get(args, options))
}

export async function deletePredictorSettingsScope(
  args: InferRequestType<(typeof client.predictor_settings)[':scope']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictor_settings[':scope'].$delete(args, options))
}

export async function patchPredictorSettingsScope(
  args: InferRequestType<(typeof client.predictor_settings)[':scope']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predictor_settings[':scope'].$patch(args, options))
}

export async function getProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.projects.$get(undefined, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$get(args, options))
}

export async function deleteProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$delete(args, options))
}

export async function patchProjectsProjectId(
  args: InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':project_id'].$patch(args, options))
}

export async function getReports(
  args: InferRequestType<typeof client.reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$get(args, options))
}

export async function postReports(
  args: InferRequestType<typeof client.reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.$post(args, options))
}

export async function postReportsGenerate(
  args: InferRequestType<typeof client.reports.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.generate.$post(args, options))
}

export async function getReportsReportId(
  args: InferRequestType<(typeof client.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id'].$get(args, options))
}

export async function deleteReportsReportId(
  args: InferRequestType<(typeof client.reports)[':report_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id'].$delete(args, options))
}

export async function patchReportsReportId(
  args: InferRequestType<(typeof client.reports)[':report_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id'].$patch(args, options))
}

export async function postReportsReportIdGenerate(
  args: InferRequestType<(typeof client.reports)[':report_id']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports[':report_id'].generate.$post(args, options))
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function getRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':role_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_id'].$get(args, options))
}

export async function deleteRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':role_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_id'].$delete(args, options))
}

export async function patchRolesRoleId(
  args: InferRequestType<(typeof client.roles)[':role_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':role_id'].$patch(args, options))
}

export async function getRuleConfig(
  args: InferRequestType<typeof client.rule_config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config.$get(args, options))
}

export async function postRuleConfigRuleEntityIndex(
  args: InferRequestType<typeof client.rule_config.rule_entity.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config.rule_entity.index.$post(args, options))
}

export async function postRuleConfigRuleEntityDocumentId(
  args: InferRequestType<(typeof client.rule_config.rule_entity)[':document_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config.rule_entity[':document_id'].$post(args, options))
}

export async function postRuleConfigWhereToSearchDocumentId(
  args: InferRequestType<(typeof client.rule_config.where_to_search)[':document_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rule_config.where_to_search[':document_id'].$post(args, options),
  )
}

export async function getRuleConfigScope(
  args: InferRequestType<(typeof client.rule_config)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config[':scope'].$get(args, options))
}

export async function deleteRuleConfigScope(
  args: InferRequestType<(typeof client.rule_config)[':scope']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config[':scope'].$delete(args, options))
}

export async function patchRuleConfigScope(
  args: InferRequestType<(typeof client.rule_config)[':scope']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_config[':scope'].$patch(args, options))
}

export async function getSamplingSettings(
  args: InferRequestType<typeof client.sampling_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sampling_settings.$get(args, options))
}

export async function getSamplingSettingsScope(
  args: InferRequestType<(typeof client.sampling_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sampling_settings[':scope'].$get(args, options))
}

export async function deleteSamplingSettingsScope(
  args: InferRequestType<(typeof client.sampling_settings)[':scope']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sampling_settings[':scope'].$delete(args, options))
}

export async function patchSamplingSettingsScope(
  args: InferRequestType<(typeof client.sampling_settings)[':scope']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sampling_settings[':scope'].$patch(args, options))
}

export async function getSettingsDashboard(
  args: InferRequestType<typeof client.settings.dashboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.dashboard.$get(args, options))
}

export async function patchSettingsDashboard(
  args: InferRequestType<typeof client.settings.dashboard.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.dashboard.$patch(args, options))
}

export async function getSettingsReview(
  args: InferRequestType<typeof client.settings.review.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.review.$get(args, options))
}

export async function patchSettingsReview(
  args: InferRequestType<typeof client.settings.review.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.review.$patch(args, options))
}

export async function getSsoConfig(
  args: InferRequestType<typeof client.sso.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.config.$get(args, options))
}

export async function postSsoConfig(
  args: InferRequestType<typeof client.sso.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.config.$post(args, options))
}

export async function deleteSsoConfigSsoConfigId(
  args: InferRequestType<(typeof client.sso.config)[':sso_config_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.config[':sso_config_id'].$delete(args, options))
}

export async function postSsoLogin(
  args: InferRequestType<typeof client.sso.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sso.login.$post(args, options))
}

export async function getStatsUsage(
  args: InferRequestType<typeof client.stats.usage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.usage.$get(args, options))
}

export async function getStatsInboxId(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].$get(args, options))
}

export async function getStatsInboxIdAutomationBlockers(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['automation_blockers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].automation_blockers.$get(args, options))
}

export async function postStatsInboxIdBlueDots(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['blue_dots']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].blue_dots.$post(args, options))
}

export async function getStatsInboxIdEvaluatedVersions(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['evaluated_versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].evaluated_versions.$get(args, options))
}

export async function getStatsInboxIdProcessing(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['processing']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].processing.$get(args, options))
}

export async function getStatsInboxIdVolume(
  args: InferRequestType<(typeof client.stats)[':inbox_id']['volume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':inbox_id'].volume.$get(args, options))
}

export async function getStatsScopeAccuracy(
  args: InferRequestType<(typeof client.stats)[':scope']['accuracy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':scope'].accuracy.$get(args, options))
}

export async function getStatsScopeStp(
  args: InferRequestType<(typeof client.stats)[':scope']['stp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats[':scope'].stp.$get(args, options))
}

export async function getStyleCustomCss(options?: ClientRequestOptions) {
  return await parseResponse(client.style['custom.css'].$get(undefined, options))
}

export async function postStyleCustomCss(
  args: InferRequestType<(typeof client.style)['custom.css']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.style['custom.css'].$post(args, options))
}

export async function getStyleLogoPng(options?: ClientRequestOptions) {
  return await parseResponse(client.style['logo.png'].$get(undefined, options))
}

export async function postStyleLogoPng(
  args: InferRequestType<(typeof client.style)['logo.png']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.style['logo.png'].$post(args, options))
}

export async function deleteTenant(options?: ClientRequestOptions) {
  return await parseResponse(client.tenant.$delete(undefined, options))
}

export async function patchTenantActivate(
  args: InferRequestType<typeof client.tenant.activate.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tenant.activate.$patch(args, options))
}

export async function getThresholdSettings(
  args: InferRequestType<typeof client.threshold_settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threshold_settings.$get(args, options))
}

export async function getThresholdSettingsScope(
  args: InferRequestType<(typeof client.threshold_settings)[':scope']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threshold_settings[':scope'].$get(args, options))
}

export async function deleteThresholdSettingsScope(
  args: InferRequestType<(typeof client.threshold_settings)[':scope']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threshold_settings[':scope'].$delete(args, options))
}

export async function patchThresholdSettingsScope(
  args: InferRequestType<(typeof client.threshold_settings)[':scope']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.threshold_settings[':scope'].$patch(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersMe(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$get(args, options))
}

export async function postUsersMeChangePassword(
  args: InferRequestType<typeof client.users.me.change_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.change_password.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function patchUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$patch(args, options))
}
