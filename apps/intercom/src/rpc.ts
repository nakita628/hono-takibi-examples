import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMe(
  args: InferRequestType<typeof client.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$get(args, options))
}

export async function getMacrosId(
  args: InferRequestType<(typeof client.macros)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macros[':id'].$get(args, options))
}

export async function getMacros(
  args: InferRequestType<typeof client.macros.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.macros.$get(args, options))
}

export async function putAdminsAdminIdAway(
  args: InferRequestType<(typeof client.admins)[':admin_id']['away']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins[':admin_id'].away.$put(args, options))
}

export async function getAdminsActivityLogs(
  args: InferRequestType<typeof client.admins.activity_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins.activity_logs.$get(args, options))
}

export async function postAdminsActivityLogsSearch(
  args: InferRequestType<typeof client.admins.activity_logs.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins.activity_logs.search.$post(args, options))
}

export async function getAdminsActivityLogEventTypes(
  args: InferRequestType<typeof client.admins.activity_log_event_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins.activity_log_event_types.$get(args, options))
}

export async function getAdmins(
  args: InferRequestType<typeof client.admins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins.$get(args, options))
}

export async function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[':id'].$get(
      args,
      options,
    ),
  )
}

export async function putOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[':id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptionsId(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions[
      ':id'
    ].$delete(args, options),
  )
}

export async function getOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$get(
      args,
      options,
    ),
  )
}

export async function postOfficeHoursSchedulesOfficeHoursScheduleIdOfficeHoursExceptions(
  args: InferRequestType<
    (typeof client.office_hours_schedules)[':office_hours_schedule_id']['office_hours_exceptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.office_hours_schedules[':office_hours_schedule_id'].office_hours_exceptions.$post(
      args,
      options,
    ),
  )
}

export async function getOfficeHoursSchedulesId(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.office_hours_schedules[':id'].$get(args, options))
}

export async function putOfficeHoursSchedulesId(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.office_hours_schedules[':id'].$put(args, options))
}

export async function deleteOfficeHoursSchedulesId(
  args: InferRequestType<(typeof client.office_hours_schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.office_hours_schedules[':id'].$delete(args, options))
}

export async function getOfficeHoursSchedules(
  args: InferRequestType<typeof client.office_hours_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.office_hours_schedules.$get(args, options))
}

export async function postOfficeHoursSchedules(
  args: InferRequestType<typeof client.office_hours_schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.office_hours_schedules.$post(args, options))
}

export async function getAdminsAdminId(
  args: InferRequestType<(typeof client.admins)[':admin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins[':admin_id'].$get(args, options))
}

export async function deleteAdminsRemove(
  args: InferRequestType<typeof client.admins.remove.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admins.remove.$delete(args, options))
}

export async function getAiContentImportSources(
  args: InferRequestType<typeof client.ai.content_import_sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.content_import_sources.$get(args, options))
}

export async function postAiContentImportSources(
  args: InferRequestType<typeof client.ai.content_import_sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.content_import_sources.$post(args, options))
}

export async function getAiContentImportSourcesSourceId(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.content_import_sources[':source_id'].$get(args, options))
}

export async function putAiContentImportSourcesSourceId(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.content_import_sources[':source_id'].$put(args, options))
}

export async function deleteAiContentImportSourcesSourceId(
  args: InferRequestType<(typeof client.ai.content_import_sources)[':source_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.content_import_sources[':source_id'].$delete(args, options))
}

export async function getAiExternalPages(
  args: InferRequestType<typeof client.ai.external_pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.external_pages.$get(args, options))
}

export async function postAiExternalPages(
  args: InferRequestType<typeof client.ai.external_pages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.external_pages.$post(args, options))
}

export async function getAiExternalPagesPageId(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.external_pages[':page_id'].$get(args, options))
}

export async function putAiExternalPagesPageId(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.external_pages[':page_id'].$put(args, options))
}

export async function deleteAiExternalPagesPageId(
  args: InferRequestType<(typeof client.ai.external_pages)[':page_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ai.external_pages[':page_id'].$delete(args, options))
}

export async function postAiExternalPagesExternalPageIdTags(
  args: InferRequestType<(typeof client.ai.external_pages)[':external_page_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.external_pages[':external_page_id'].tags.$post(args, options),
  )
}

export async function deleteAiExternalPagesExternalPageIdTagsId(
  args: InferRequestType<
    (typeof client.ai.external_pages)[':external_page_id']['tags'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ai.external_pages[':external_page_id'].tags[':id'].$delete(args, options),
  )
}

export async function getArticles(
  args: InferRequestType<typeof client.articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.$get(args, options))
}

export async function postArticles(
  args: InferRequestType<typeof client.articles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.$post(args, options))
}

export async function getArticlesArticleId(
  args: InferRequestType<(typeof client.articles)[':article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].$get(args, options))
}

export async function putArticlesArticleId(
  args: InferRequestType<(typeof client.articles)[':article_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].$put(args, options))
}

export async function deleteArticlesArticleId(
  args: InferRequestType<(typeof client.articles)[':article_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].$delete(args, options))
}

export async function getArticlesIdDraft(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':id'].draft.$get(args, options))
}

export async function putArticlesIdDraft(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':id'].draft.$put(args, options))
}

export async function postArticlesIdDraftPublish(
  args: InferRequestType<(typeof client.articles)[':id']['draft']['publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':id'].draft.publish.$post(args, options))
}

export async function postArticlesArticleIdTags(
  args: InferRequestType<(typeof client.articles)[':article_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].tags.$post(args, options))
}

export async function deleteArticlesArticleIdTagsId(
  args: InferRequestType<(typeof client.articles)[':article_id']['tags'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].tags[':id'].$delete(args, options))
}

export async function getArticlesArticleIdVersions(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].versions.$get(args, options))
}

export async function getArticlesArticleIdVersionsId(
  args: InferRequestType<(typeof client.articles)[':article_id']['versions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles[':article_id'].versions[':id'].$get(args, options))
}

export async function getArticlesSearch(
  args: InferRequestType<typeof client.articles.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.articles.search.$get(args, options))
}

export async function getAwayStatusReasons(
  args: InferRequestType<typeof client.away_status_reasons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.away_status_reasons.$get(args, options))
}

export async function getAudiences(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences.$get(args, options))
}

export async function postAudiences(
  args: InferRequestType<typeof client.audiences.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences.$post(args, options))
}

export async function getAudiencesId(
  args: InferRequestType<(typeof client.audiences)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':id'].$get(args, options))
}

export async function putAudiencesId(
  args: InferRequestType<(typeof client.audiences)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':id'].$put(args, options))
}

export async function deleteAudiencesId(
  args: InferRequestType<(typeof client.audiences)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audiences[':id'].$delete(args, options))
}

export async function postExportReportingDataEnqueue(
  args: InferRequestType<typeof client.export.reporting_data.enqueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.reporting_data.enqueue.$post(args, options))
}

export async function getExportReportingDataJobIdentifier(
  args: InferRequestType<(typeof client.export.reporting_data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.reporting_data[':job_identifier'].$get(args, options))
}

export async function getExportReportingDataGetDatasets(
  args: InferRequestType<typeof client.export.reporting_data.get_datasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.reporting_data.get_datasets.$get(args, options))
}

export async function getDownloadReportingDataJobIdentifier(
  args: InferRequestType<(typeof client.download.reporting_data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.download.reporting_data[':job_identifier'].$get(args, options))
}

export async function postFinStart(
  args: InferRequestType<typeof client.fin.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.start.$post(args, options))
}

export async function postFinReply(
  args: InferRequestType<typeof client.fin.reply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.reply.$post(args, options))
}

export async function postFinCsat(
  args: InferRequestType<typeof client.fin.csat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.csat.$post(args, options))
}

export async function postFinCapabilities(
  args: InferRequestType<typeof client.fin.capabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.capabilities.$post(args, options))
}

export async function postFinAsk(
  args: InferRequestType<typeof client.fin.ask.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.ask.$post(args, options))
}

export async function postFinProceduresProcedureIdRun(
  args: InferRequestType<(typeof client.fin.procedures)[':procedure_id']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.procedures[':procedure_id'].run.$post(args, options))
}

export async function postFinEscalate(
  args: InferRequestType<typeof client.fin.escalate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin.escalate.$post(args, options))
}

export async function getHelpCenterHelpCentersHelpCenterIdRedirects(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.help_center.help_centers[':help_center_id'].redirects.$get(args, options),
  )
}

export async function postHelpCenterHelpCentersHelpCenterIdRedirects(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.help_center.help_centers[':help_center_id'].redirects.$post(args, options),
  )
}

export async function getHelpCenterHelpCentersHelpCenterIdRedirectsId(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.help_center.help_centers[':help_center_id'].redirects[':id'].$get(args, options),
  )
}

export async function deleteHelpCenterHelpCentersHelpCenterIdRedirectsId(
  args: InferRequestType<
    (typeof client.help_center.help_centers)[':help_center_id']['redirects'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.help_center.help_centers[':help_center_id'].redirects[':id'].$delete(args, options),
  )
}

export async function getHelpCenterCollections(
  args: InferRequestType<typeof client.help_center.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.collections.$get(args, options))
}

export async function postHelpCenterCollections(
  args: InferRequestType<typeof client.help_center.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.collections.$post(args, options))
}

export async function getHelpCenterCollectionsCollectionId(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.collections[':collection_id'].$get(args, options))
}

export async function putHelpCenterCollectionsCollectionId(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.collections[':collection_id'].$put(args, options))
}

export async function deleteHelpCenterCollectionsCollectionId(
  args: InferRequestType<(typeof client.help_center.collections)[':collection_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.help_center.collections[':collection_id'].$delete(args, options),
  )
}

export async function getHelpCenterHelpCentersHelpCenterId(
  args: InferRequestType<(typeof client.help_center.help_centers)[':help_center_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.help_centers[':help_center_id'].$get(args, options))
}

export async function getHelpCenterHelpCenters(
  args: InferRequestType<typeof client.help_center.help_centers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help_center.help_centers.$get(args, options))
}

export async function getInternalArticles(
  args: InferRequestType<typeof client.internal_articles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal_articles.$get(args, options))
}

export async function postInternalArticles(
  args: InferRequestType<typeof client.internal_articles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal_articles.$post(args, options))
}

export async function getInternalArticlesInternalArticleId(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal_articles[':internal_article_id'].$get(args, options))
}

export async function putInternalArticlesInternalArticleId(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal_articles[':internal_article_id'].$put(args, options))
}

export async function deleteInternalArticlesInternalArticleId(
  args: InferRequestType<(typeof client.internal_articles)[':internal_article_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal_articles[':internal_article_id'].$delete(args, options),
  )
}

export async function postInternalArticlesInternalArticleIdTags(
  args: InferRequestType<
    (typeof client.internal_articles)[':internal_article_id']['tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal_articles[':internal_article_id'].tags.$post(args, options),
  )
}

export async function deleteInternalArticlesInternalArticleIdTagsId(
  args: InferRequestType<
    (typeof client.internal_articles)[':internal_article_id']['tags'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.internal_articles[':internal_article_id'].tags[':id'].$delete(args, options),
  )
}

export async function getInternalArticlesSearch(
  args: InferRequestType<typeof client.internal_articles.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.internal_articles.search.$get(args, options))
}

export async function getFolders(
  args: InferRequestType<typeof client.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$get(args, options))
}

export async function postFolders(
  args: InferRequestType<typeof client.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$post(args, options))
}

export async function getFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$get(args, options))
}

export async function putFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$put(args, options))
}

export async function deleteFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$delete(args, options))
}

export async function getIpAllowlist(
  args: InferRequestType<typeof client.ip_allowlist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allowlist.$get(args, options))
}

export async function putIpAllowlist(
  args: InferRequestType<typeof client.ip_allowlist.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ip_allowlist.$put(args, options))
}

export async function getCompanies(
  args: InferRequestType<typeof client.companies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.$get(args, options))
}

export async function postCompanies(
  args: InferRequestType<typeof client.companies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.$post(args, options))
}

export async function getCompaniesCompanyId(
  args: InferRequestType<(typeof client.companies)[':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].$get(args, options))
}

export async function putCompaniesCompanyId(
  args: InferRequestType<(typeof client.companies)[':company_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].$put(args, options))
}

export async function deleteCompaniesCompanyId(
  args: InferRequestType<(typeof client.companies)[':company_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].$delete(args, options))
}

export async function getCompaniesCompanyIdContacts(
  args: InferRequestType<(typeof client.companies)[':company_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].contacts.$get(args, options))
}

export async function getCompaniesCompanyIdSegments(
  args: InferRequestType<(typeof client.companies)[':company_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].segments.$get(args, options))
}

export async function getCompaniesCompanyIdNotes(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].notes.$get(args, options))
}

export async function postCompaniesCompanyIdNotes(
  args: InferRequestType<(typeof client.companies)[':company_id']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies[':company_id'].notes.$post(args, options))
}

export async function postCompaniesSearch(
  args: InferRequestType<typeof client.companies.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.search.$post(args, options))
}

export async function postCompaniesList(
  args: InferRequestType<typeof client.companies.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.list.$post(args, options))
}

export async function getCompaniesScroll(
  args: InferRequestType<typeof client.companies.scroll.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.companies.scroll.$get(args, options))
}

export async function getContactsContactIdCompanies(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].companies.$get(args, options))
}

export async function postContactsContactIdCompanies(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['companies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].companies.$post(args, options))
}

export async function deleteContactsContactIdCompaniesCompanyId(
  args: InferRequestType<
    (typeof client.contacts)[':contact_id']['companies'][':company_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts[':contact_id'].companies[':company_id'].$delete(args, options),
  )
}

export async function getContactsContactIdNotes(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].notes.$get(args, options))
}

export async function postContactsContactIdNotes(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['notes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].notes.$post(args, options))
}

export async function getContactsContactIdSegments(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].segments.$get(args, options))
}

export async function getContactsContactIdSubscriptions(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].subscriptions.$get(args, options))
}

export async function postContactsContactIdSubscriptions(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].subscriptions.$post(args, options))
}

export async function deleteContactsContactIdSubscriptionsSubscriptionId(
  args: InferRequestType<
    (typeof client.contacts)[':contact_id']['subscriptions'][':subscription_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts[':contact_id'].subscriptions[':subscription_id'].$delete(args, options),
  )
}

export async function getContactsContactIdTags(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].tags.$get(args, options))
}

export async function postContactsContactIdTags(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].tags.$post(args, options))
}

export async function deleteContactsContactIdTagsTagId(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['tags'][':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].tags[':tag_id'].$delete(args, options))
}

export async function getContactsDeleted(
  args: InferRequestType<typeof client.contacts.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.deleted.$get(args, options))
}

export async function getContactsContactId(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].$get(args, options))
}

export async function putContactsContactId(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].$put(args, options))
}

export async function deleteContactsContactId(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].$delete(args, options))
}

export async function postContactsMerge(
  args: InferRequestType<typeof client.contacts.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.merge.$post(args, options))
}

export async function postContactsMergePreview(
  args: InferRequestType<typeof client.contacts.merge.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.merge.preview.$post(args, options))
}

export async function postContactsSearch(
  args: InferRequestType<typeof client.contacts.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.search.$post(args, options))
}

export async function getContactsActivities(
  args: InferRequestType<typeof client.contacts.activities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.activities.$get(args, options))
}

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function postContacts(
  args: InferRequestType<typeof client.contacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$post(args, options))
}

export async function getContactsFindByExternalIdExternalId(
  args: InferRequestType<(typeof client.contacts.find_by_external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts.find_by_external_id[':external_id'].$get(args, options),
  )
}

export async function postContactsContactIdArchive(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].archive.$post(args, options))
}

export async function postContactsContactIdUnarchive(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].unarchive.$post(args, options))
}

export async function getContactsIdBanners(
  args: InferRequestType<(typeof client.contacts)[':id']['banners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].banners.$get(args, options))
}

export async function postContactsIdBannersViewIdDismiss(
  args: InferRequestType<
    (typeof client.contacts)[':id']['banners'][':view_id']['dismiss']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.contacts[':id'].banners[':view_id'].dismiss.$post(args, options),
  )
}

export async function postContactsContactIdBlock(
  args: InferRequestType<(typeof client.contacts)[':contact_id']['block']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':contact_id'].block.$post(args, options))
}

export async function getContactsIdMergeHistories(
  args: InferRequestType<(typeof client.contacts)[':id']['merge_histories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].merge_histories.$get(args, options))
}

export async function putContactsBulk(
  args: InferRequestType<typeof client.contacts.bulk.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.bulk.$put(args, options))
}

export async function postContactsBulk(
  args: InferRequestType<typeof client.contacts.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.bulk.$post(args, options))
}

export async function postContactsBulkDelete(
  args: InferRequestType<typeof client.contacts.bulk.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.bulk.delete.$post(args, options))
}

export async function getContactsBulkId(
  args: InferRequestType<(typeof client.contacts.bulk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.bulk[':id'].$get(args, options))
}

export async function postContentBulkActions(
  args: InferRequestType<typeof client.content.bulk_actions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content.bulk_actions.$post(args, options))
}

export async function getContentSearch(
  args: InferRequestType<typeof client.content.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content.search.$get(args, options))
}

export async function getContentSnippets(
  args: InferRequestType<typeof client.content_snippets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_snippets.$get(args, options))
}

export async function postContentSnippets(
  args: InferRequestType<typeof client.content_snippets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_snippets.$post(args, options))
}

export async function getContentSnippetsId(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_snippets[':id'].$get(args, options))
}

export async function putContentSnippetsId(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_snippets[':id'].$put(args, options))
}

export async function deleteContentSnippetsId(
  args: InferRequestType<(typeof client.content_snippets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.content_snippets[':id'].$delete(args, options))
}

export async function postContentSnippetsContentSnippetIdTags(
  args: InferRequestType<(typeof client.content_snippets)[':content_snippet_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.content_snippets[':content_snippet_id'].tags.$post(args, options),
  )
}

export async function deleteContentSnippetsContentSnippetIdTagsId(
  args: InferRequestType<
    (typeof client.content_snippets)[':content_snippet_id']['tags'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.content_snippets[':content_snippet_id'].tags[':id'].$delete(args, options),
  )
}

export async function getDynamicContents(
  args: InferRequestType<typeof client.dynamic_contents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_contents.$get(args, options))
}

export async function postDynamicContents(
  args: InferRequestType<typeof client.dynamic_contents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_contents.$post(args, options))
}

export async function getDynamicContentsId(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_contents[':id'].$get(args, options))
}

export async function putDynamicContentsId(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_contents[':id'].$put(args, options))
}

export async function deleteDynamicContentsId(
  args: InferRequestType<(typeof client.dynamic_contents)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dynamic_contents[':id'].$delete(args, options))
}

export async function postConversationsConversationIdTags(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].tags.$post(args, options))
}

export async function deleteConversationsConversationIdTagsTagId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['tags'][':tag_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].tags[':tag_id'].$delete(args, options),
  )
}

export async function getConversations(
  args: InferRequestType<typeof client.conversations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$get(args, options))
}

export async function postConversations(
  args: InferRequestType<typeof client.conversations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.$post(args, options))
}

export async function getConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$get(args, options))
}

export async function putConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$put(args, options))
}

export async function deleteConversationsConversationId(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].$delete(args, options))
}

export async function postConversationsSearch(
  args: InferRequestType<typeof client.conversations.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.search.$post(args, options))
}

export async function postConversationsConversationIdReply(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].reply.$post(args, options))
}

export async function postConversationsConversationIdParts(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['parts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].parts.$post(args, options))
}

export async function postConversationsConversationIdCustomers(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].customers.$post(args, options),
  )
}

export async function deleteConversationsConversationIdCustomersContactId(
  args: InferRequestType<
    (typeof client.conversations)[':conversation_id']['customers'][':contact_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations[':conversation_id'].customers[':contact_id'].$delete(args, options),
  )
}

export async function getConversationsIdHandlingEvents(
  args: InferRequestType<(typeof client.conversations)[':id']['handling_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':id'].handling_events.$get(args, options))
}

export async function getConversationsIdHitlEvents(
  args: InferRequestType<(typeof client.conversations)[':id']['hitl_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':id'].hitl_events.$get(args, options))
}

export async function getConversationsIdSideConversations(
  args: InferRequestType<(typeof client.conversations)[':id']['side_conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':id'].side_conversations.$get(args, options))
}

export async function postConversationsConversationIdRating(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['rating']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].rating.$post(args, options))
}

export async function postConversationsRedact(
  args: InferRequestType<typeof client.conversations.redact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.redact.$post(args, options))
}

export async function postConversationsIdMerge(
  args: InferRequestType<(typeof client.conversations)[':id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':id'].merge.$post(args, options))
}

export async function postConversationsConversationIdConvert(
  args: InferRequestType<(typeof client.conversations)[':conversation_id']['convert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations[':conversation_id'].convert.$post(args, options))
}

export async function getConversationsDeleted(
  args: InferRequestType<typeof client.conversations.deleted.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.deleted.$get(args, options))
}

export async function postConversationsStreamToken(
  args: InferRequestType<typeof client.conversations.stream.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.stream.token.$post(args, options))
}

export async function deleteConversationsStreamToken(
  args: InferRequestType<typeof client.conversations.stream.token.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.stream.token.$delete(args, options))
}

export async function getConversationsAttributes(
  args: InferRequestType<typeof client.conversations.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes.$get(args, options))
}

export async function postConversationsAttributes(
  args: InferRequestType<typeof client.conversations.attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes.$post(args, options))
}

export async function getConversationsAttributesId(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes[':id'].$get(args, options))
}

export async function putConversationsAttributesId(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes[':id'].$put(args, options))
}

export async function deleteConversationsAttributesId(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes[':id'].$delete(args, options))
}

export async function postConversationsAttributesIdOptions(
  args: InferRequestType<(typeof client.conversations.attributes)[':id']['options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.conversations.attributes[':id'].options.$post(args, options))
}

export async function putConversationsAttributesIdOptionsOptionId(
  args: InferRequestType<
    (typeof client.conversations.attributes)[':id']['options'][':option_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.attributes[':id'].options[':option_id'].$put(args, options),
  )
}

export async function deleteConversationsAttributesIdOptionsOptionId(
  args: InferRequestType<
    (typeof client.conversations.attributes)[':id']['options'][':option_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.conversations.attributes[':id'].options[':option_id'].$delete(args, options),
  )
}

export async function getCustomObjectInstancesCustomObjectTypeIdentifier(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_object_instances[':custom_object_type_identifier'].$get(args, options),
  )
}

export async function postCustomObjectInstancesCustomObjectTypeIdentifier(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_object_instances[':custom_object_type_identifier'].$post(args, options),
  )
}

export async function deleteCustomObjectInstancesCustomObjectTypeIdentifier(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_object_instances[':custom_object_type_identifier'].$delete(args, options),
  )
}

export async function getCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_object_instances[':custom_object_type_identifier'][
      ':custom_object_instance_id'
    ].$get(args, options),
  )
}

export async function deleteCustomObjectInstancesCustomObjectTypeIdentifierCustomObjectInstanceId(
  args: InferRequestType<
    (typeof client.custom_object_instances)[':custom_object_type_identifier'][':custom_object_instance_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.custom_object_instances[':custom_object_type_identifier'][
      ':custom_object_instance_id'
    ].$delete(args, options),
  )
}

export async function getDataAttributes(
  args: InferRequestType<typeof client.data_attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_attributes.$get(args, options))
}

export async function postDataAttributes(
  args: InferRequestType<typeof client.data_attributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_attributes.$post(args, options))
}

export async function putDataAttributesDataAttributeId(
  args: InferRequestType<(typeof client.data_attributes)[':data_attribute_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_attributes[':data_attribute_id'].$put(args, options))
}

export async function getDataConnectors(
  args: InferRequestType<typeof client.data_connectors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors.$get(args, options))
}

export async function postDataConnectors(
  args: InferRequestType<typeof client.data_connectors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors.$post(args, options))
}

export async function getDataConnectorsId(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors[':id'].$get(args, options))
}

export async function deleteDataConnectorsId(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors[':id'].$delete(args, options))
}

export async function patchDataConnectorsId(
  args: InferRequestType<(typeof client.data_connectors)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors[':id'].$patch(args, options))
}

export async function getDataConnectorsDataConnectorIdExecutionResults(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data_connectors[':data_connector_id'].execution_results.$get(args, options),
  )
}

export async function getDataConnectorsDataConnectorIdExecutionResultsId(
  args: InferRequestType<
    (typeof client.data_connectors)[':data_connector_id']['execution_results'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data_connectors[':data_connector_id'].execution_results[':id'].$get(args, options),
  )
}

export async function getDataConnectorsIdVersions(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_connectors[':id'].versions.$get(args, options))
}

export async function getDataConnectorsIdVersionsVersionId(
  args: InferRequestType<(typeof client.data_connectors)[':id']['versions'][':version_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data_connectors[':id'].versions[':version_id'].$get(args, options),
  )
}

export async function patchDataConnectorsIdVersionsVersionId(
  args: InferRequestType<
    (typeof client.data_connectors)[':id']['versions'][':version_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.data_connectors[':id'].versions[':version_id'].$patch(args, options),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function postEvents(
  args: InferRequestType<typeof client.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$post(args, options))
}

export async function postEventsSummaries(
  args: InferRequestType<typeof client.events.summaries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.summaries.$post(args, options))
}

export async function postExportContentData(
  args: InferRequestType<typeof client.export.content.data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.content.data.$post(args, options))
}

export async function getExportContentDataJobIdentifier(
  args: InferRequestType<(typeof client.export.content.data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.content.data[':job_identifier'].$get(args, options))
}

export async function postExportCancelJobIdentifier(
  args: InferRequestType<(typeof client.export.cancel)[':job_identifier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.cancel[':job_identifier'].$post(args, options))
}

export async function getDownloadContentDataJobIdentifier(
  args: InferRequestType<(typeof client.download.content.data)[':job_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.download.content.data[':job_identifier'].$get(args, options))
}

export async function getJobsStatusJobId(
  args: InferRequestType<(typeof client.jobs.status)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.status[':job_id'].$get(args, options))
}

export async function postMessages(
  args: InferRequestType<typeof client.messages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.$post(args, options))
}

export async function getMessagesWhatsappStatus(
  args: InferRequestType<typeof client.messages.whatsapp.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.whatsapp.status.$get(args, options))
}

export async function getMessagesStatus(
  args: InferRequestType<typeof client.messages.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.messages.status.$get(args, options))
}

export async function getNewsNewsItems(
  args: InferRequestType<typeof client.news.news_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.news_items.$get(args, options))
}

export async function postNewsNewsItems(
  args: InferRequestType<typeof client.news.news_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.news_items.$post(args, options))
}

export async function getNewsNewsItemsNewsItemId(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.news_items[':news_item_id'].$get(args, options))
}

export async function putNewsNewsItemsNewsItemId(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.news_items[':news_item_id'].$put(args, options))
}

export async function deleteNewsNewsItemsNewsItemId(
  args: InferRequestType<(typeof client.news.news_items)[':news_item_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.news_items[':news_item_id'].$delete(args, options))
}

export async function getNewsNewsfeedsNewsfeedIdItems(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.newsfeeds[':newsfeed_id'].items.$get(args, options))
}

export async function getNewsNewsfeeds(
  args: InferRequestType<typeof client.news.newsfeeds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.newsfeeds.$get(args, options))
}

export async function getNewsNewsfeedsNewsfeedId(
  args: InferRequestType<(typeof client.news.newsfeeds)[':newsfeed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.news.newsfeeds[':newsfeed_id'].$get(args, options))
}

export async function getNotesNoteId(
  args: InferRequestType<(typeof client.notes)[':note_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes[':note_id'].$get(args, options))
}

export async function deleteNotesNoteId(
  args: InferRequestType<(typeof client.notes)[':note_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notes[':note_id'].$delete(args, options))
}

export async function getSegments(
  args: InferRequestType<typeof client.segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments.$get(args, options))
}

export async function getSegmentsSegmentId(
  args: InferRequestType<(typeof client.segments)[':segment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.segments[':segment_id'].$get(args, options))
}

export async function getSubscriptionTypes(
  args: InferRequestType<typeof client.subscription_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription_types.$get(args, options))
}

export async function getSubscriptionTypesId(
  args: InferRequestType<(typeof client.subscription_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription_types[':id'].$get(args, options))
}

export async function postPhoneCallRedirects(
  args: InferRequestType<typeof client.phone_call_redirects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_call_redirects.$post(args, options))
}

export async function getCalls(
  args: InferRequestType<typeof client.calls.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.$get(args, options))
}

export async function getCallsCallId(
  args: InferRequestType<(typeof client.calls)[':call_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_id'].$get(args, options))
}

export async function getCallsCallIdRecording(
  args: InferRequestType<(typeof client.calls)[':call_id']['recording']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':call_id'].recording.$get(args, options))
}

export async function getCallsIdTranscript(
  args: InferRequestType<(typeof client.calls)[':id']['transcript']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls[':id'].transcript.$get(args, options))
}

export async function postCallsSearch(
  args: InferRequestType<typeof client.calls.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calls.search.$post(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function getTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_id'].$get(args, options))
}

export async function deleteTagsTagId(
  args: InferRequestType<(typeof client.tags)[':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag_id'].$delete(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function getTeamsTeamId(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].$get(args, options))
}

export async function getTeamsTeamIdMetrics(
  args: InferRequestType<(typeof client.teams)[':team_id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':team_id'].metrics.$get(args, options))
}

export async function getTicketStates(
  args: InferRequestType<typeof client.ticket_states.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_states.$get(args, options))
}

export async function postTicketTypesTicketTypeIdAttributes(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_types[':ticket_type_id'].attributes.$post(args, options))
}

export async function putTicketTypesTicketTypeIdAttributesAttributeId(
  args: InferRequestType<
    (typeof client.ticket_types)[':ticket_type_id']['attributes'][':attribute_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ticket_types[':ticket_type_id'].attributes[':attribute_id'].$put(args, options),
  )
}

export async function getTicketTypes(
  args: InferRequestType<typeof client.ticket_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_types.$get(args, options))
}

export async function postTicketTypes(
  args: InferRequestType<typeof client.ticket_types.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_types.$post(args, options))
}

export async function getTicketTypesTicketTypeId(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_types[':ticket_type_id'].$get(args, options))
}

export async function putTicketTypesTicketTypeId(
  args: InferRequestType<(typeof client.ticket_types)[':ticket_type_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ticket_types[':ticket_type_id'].$put(args, options))
}

export async function postTicketsTicketIdReply(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['reply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].reply.$post(args, options))
}

export async function postTicketsTicketIdTags(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].tags.$post(args, options))
}

export async function deleteTicketsTicketIdTagsTagId(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['tags'][':tag_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].tags[':tag_id'].$delete(args, options))
}

export async function postTicketsTicketIdLinkedConversations(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['linked_conversations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].linked_conversations.$post(args, options))
}

export async function deleteTicketsTicketIdLinkedConversationsId(
  args: InferRequestType<
    (typeof client.tickets)[':ticket_id']['linked_conversations'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.tickets[':ticket_id'].linked_conversations[':id'].$delete(args, options),
  )
}

export async function postTickets(
  args: InferRequestType<typeof client.tickets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets.$post(args, options))
}

export async function postTicketsEnqueue(
  args: InferRequestType<typeof client.tickets.enqueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets.enqueue.$post(args, options))
}

export async function getTicketsTicketId(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].$get(args, options))
}

export async function putTicketsTicketId(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].$put(args, options))
}

export async function deleteTicketsTicketId(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].$delete(args, options))
}

export async function postTicketsTicketIdChangeType(
  args: InferRequestType<(typeof client.tickets)[':ticket_id']['change_type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets[':ticket_id'].change_type.$post(args, options))
}

export async function postTicketsSearch(
  args: InferRequestType<typeof client.tickets.search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tickets.search.$post(args, options))
}

export async function getVisitors(
  args: InferRequestType<typeof client.visitors.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.visitors.$get(args, options))
}

export async function putVisitors(
  args: InferRequestType<typeof client.visitors.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.visitors.$put(args, options))
}

export async function postVisitorsConvert(
  args: InferRequestType<typeof client.visitors.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.visitors.convert.$post(args, options))
}

export async function getBrands(
  args: InferRequestType<typeof client.brands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.brands.$get(args, options))
}

export async function getBrandsId(
  args: InferRequestType<(typeof client.brands)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.brands[':id'].$get(args, options))
}

export async function getEmails(
  args: InferRequestType<typeof client.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.$get(args, options))
}

export async function getEmailsId(
  args: InferRequestType<(typeof client.emails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails[':id'].$get(args, options))
}

export async function postFinVoiceRegister(
  args: InferRequestType<typeof client.fin_voice.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin_voice.register.$post(args, options))
}

export async function getFinVoiceCollectId(
  args: InferRequestType<(typeof client.fin_voice.collect)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin_voice.collect[':id'].$get(args, options))
}

export async function getFinVoiceExternalIdExternalId(
  args: InferRequestType<(typeof client.fin_voice.external_id)[':external_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin_voice.external_id[':external_id'].$get(args, options))
}

export async function getFinVoicePhoneNumberPhoneNumber(
  args: InferRequestType<(typeof client.fin_voice.phone_number)[':phone_number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin_voice.phone_number[':phone_number'].$get(args, options))
}

export async function getFinVoiceConversationConversationId(
  args: InferRequestType<(typeof client.fin_voice.conversation)[':conversation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fin_voice.conversation[':conversation_id'].$get(args, options))
}

export async function getExportWorkflowsId(
  args: InferRequestType<(typeof client.export.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.workflows[':id'].$get(args, options))
}
