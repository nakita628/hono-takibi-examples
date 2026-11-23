import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAsyncDownload(
  args: InferRequestType<typeof client.async.download.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.async.download.$get(args, options))
}

export async function getBlogs(
  args: InferRequestType<typeof client.blogs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blogs.$get(args, options))
}

export async function deleteCacheKey(
  args: InferRequestType<(typeof client.cache)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':key'].$delete(args, options))
}

export async function getCommissions(options?: ClientRequestOptions) {
  return await parseResponse(client.commissions.$get(undefined, options))
}

export async function postCommissions(
  args: InferRequestType<typeof client.commissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.commissions.$post(args, options))
}

export async function getContinuousProjects(
  args: InferRequestType<typeof client.continuous_projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects.$get(args, options))
}

export async function postContinuousProjects(
  args: InferRequestType<typeof client.continuous_projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects.$post(args, options))
}

export async function getContinuousProjectsId(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].$get(args, options))
}

export async function postContinuousProjectsId(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].$post(args, options))
}

export async function deleteContinuousProjectsId(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].$delete(args, options))
}

export async function getContinuousProjectsIdAnalyticsToken(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['analytics-token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id']['analytics-token'].$get(args, options),
  )
}

export async function postContinuousProjectsIdCollectAnalytics(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['collect-analytics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id']['collect-analytics'].$post(args, options),
  )
}

export async function postContinuousProjectsIdComplete(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].complete.$post(args, options))
}

export async function postContinuousProjectsIdDocumentsQuote(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['documents']['quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].documents.quote.$post(args, options))
}

export async function postContinuousProjectsIdDocumentsDocumentIdComplete(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['documents'][':documentId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].documents[':documentId'].complete.$post(args, options),
  )
}

export async function postContinuousProjectsIdDocumentsDocumentIdQuote(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['documents'][':documentId']['quote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].documents[':documentId'].quote.$post(args, options),
  )
}

export async function postContinuousProjectsIdLanguagesQuote(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['languages']['quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].languages.quote.$post(args, options))
}

export async function postContinuousProjectsIdLanguagesTargetLanguageComplete(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].languages[':targetLanguage'].complete.$post(args, options),
  )
}

export async function postContinuousProjectsIdLanguagesTargetLanguageQuote(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['languages'][':targetLanguage']['quote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].languages[':targetLanguage'].quote.$post(args, options),
  )
}

export async function getContinuousProjectsIdSubscription(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].subscription.$get(args, options))
}

export async function putContinuousProjectsIdSubscription(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].subscription.$put(args, options))
}

export async function postContinuousProjectsIdSubscription(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].subscription.$post(args, options))
}

export async function deleteContinuousProjectsIdSubscription(
  args: InferRequestType<(typeof client.continuous_projects)[':id']['subscription']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':id'].subscription.$delete(args, options))
}

export async function putContinuousProjectsIdSubscriptionPayment(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['subscription']['payment']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].subscription.payment.$put(args, options),
  )
}

export async function postContinuousProjectsIdTranslateTargetLanguage(
  args: InferRequestType<
    (typeof client.continuous_projects)[':id']['translate'][':targetLanguage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':id'].translate[':targetLanguage'].$post(args, options),
  )
}

export async function getContinuousProjectsProjectIdDocuments(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].documents.$get(args, options))
}

export async function postContinuousProjectsProjectIdDocuments(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents.$post(args, options),
  )
}

export async function postContinuousProjectsProjectIdDocumentsProgress(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents']['progress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents.progress.$post(args, options),
  )
}

export async function postContinuousProjectsProjectIdDocumentsStrings(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents']['strings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents.strings.$post(args, options),
  )
}

export async function getContinuousProjectsProjectIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents[':documentId'].$get(args, options),
  )
}

export async function postContinuousProjectsProjectIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents[':documentId'].$post(args, options),
  )
}

export async function getContinuousProjectsProjectIdDocumentsDocumentIdProgress(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['progress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents[':documentId'].progress.$get(args, options),
  )
}

export async function getContinuousProjectsProjectIdDocumentsDocumentIdStrings(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['documents'][':documentId']['strings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].documents[':documentId'].strings.$get(args, options),
  )
}

export async function getContinuousProjectsProjectIdInvoices(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].invoices.$get(args, options))
}

export async function getContinuousProjectsProjectIdProgress(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].progress.$get(args, options))
}

export async function getContinuousProjectsProjectIdStrings(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].strings.$get(args, options))
}

export async function getContinuousProjectsProjectIdStringsCached(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].strings.cached.$get(args, options),
  )
}

export async function deleteContinuousProjectsProjectIdStringsCached(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['cached']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].strings.cached.$delete(args, options),
  )
}

export async function postContinuousProjectsProjectIdStringsRecacheTms(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['strings']['recache-tms']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].strings['recache-tms'].$post(args, options),
  )
}

export async function getContinuousProjectsProjectIdWidgets(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].widgets.$get(args, options))
}

export async function postContinuousProjectsProjectIdWidgets(
  args: InferRequestType<(typeof client.continuous_projects)[':projectId']['widgets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.continuous_projects[':projectId'].widgets.$post(args, options))
}

export async function getContinuousProjectsProjectIdWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].widgets[':widgetId'].$get(args, options),
  )
}

export async function postContinuousProjectsProjectIdWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].widgets[':widgetId'].$post(args, options),
  )
}

export async function deleteContinuousProjectsProjectIdWidgetsWidgetId(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].widgets[':widgetId'].$delete(args, options),
  )
}

export async function postContinuousProjectsProjectIdWidgetsWidgetIdResetToken(
  args: InferRequestType<
    (typeof client.continuous_projects)[':projectId']['widgets'][':widgetId']['reset-token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.continuous_projects[':projectId'].widgets[':widgetId']['reset-token'].$post(
      args,
      options,
    ),
  )
}

export async function getCorporate(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.$get(undefined, options))
}

export async function getCorporatePermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.permissions.$get(undefined, options))
}

export async function getCorporateUserGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate['user-groups'].$get(undefined, options))
}

export async function postCorporateUserGroups(
  args: InferRequestType<(typeof client.corporate)['user-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate['user-groups'].$post(args, options))
}

export async function getCorporateUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.corporate.users.$get(undefined, options))
}

export async function postCorporateUsers(
  args: InferRequestType<typeof client.corporate.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporate.users.$post(args, options))
}

export async function getCorporatesAll(options?: ClientRequestOptions) {
  return await parseResponse(client.corporates.all.$get(undefined, options))
}

export async function getCorporatesCorporateId(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporates[':corporateId'].$get(args, options))
}

export async function getCorporatesCorporateIdPermissions(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporates[':corporateId'].permissions.$get(args, options))
}

export async function getCorporatesCorporateIdUserGroups(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporates[':corporateId']['user-groups'].$get(args, options))
}

export async function postCorporatesCorporateIdUserGroups(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['user-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporates[':corporateId']['user-groups'].$post(args, options))
}

export async function getCorporatesCorporateIdUsers(
  args: InferRequestType<(typeof client.corporates)[':corporateId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.corporates[':corporateId'].users.$get(args, options))
}

export async function deleteDeleteAccount(options?: ClientRequestOptions) {
  return await parseResponse(client['delete-account'].$delete(undefined, options))
}

export async function getDocuments(
  args: InferRequestType<typeof client.documents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents.$get(args, options))
}

export async function getDocumentsSubjects(options?: ClientRequestOptions) {
  return await parseResponse(client.documents.subjects.$get(undefined, options))
}

export async function getDocumentsDocumentId(
  args: InferRequestType<(typeof client.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].$get(args, options))
}

export async function getDocumentsDocumentIdProgress(
  args: InferRequestType<(typeof client.documents)[':documentId']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].progress.$get(args, options))
}

export async function postDocumentsDocumentIdRegeneratePreview(
  args: InferRequestType<(typeof client.documents)[':documentId']['regenerate_preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.documents[':documentId'].regenerate_preview.$post(args, options),
  )
}

export async function getDocumentsDocumentIdSimilars(
  args: InferRequestType<(typeof client.documents)[':documentId']['similars']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].similars.$get(args, options))
}

export async function postDocumentsDocumentIdUseAsDraft(
  args: InferRequestType<(typeof client.documents)[':documentId']['use_as_draft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].use_as_draft.$post(args, options))
}

export async function postDocumentsDocumentIdUseAsRegular(
  args: InferRequestType<(typeof client.documents)[':documentId']['use_as_regular']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.documents[':documentId'].use_as_regular.$post(args, options))
}

export async function postDowngradeProofreader(options?: ClientRequestOptions) {
  return await parseResponse(client['downgrade-proofreader'].$post(undefined, options))
}

export async function getEarnings(options?: ClientRequestOptions) {
  return await parseResponse(client.earnings.$get(undefined, options))
}

export async function getFormats(options?: ClientRequestOptions) {
  return await parseResponse(client.formats.$get(undefined, options))
}

export async function postFreezeAccount(options?: ClientRequestOptions) {
  return await parseResponse(client['freeze-account'].$post(undefined, options))
}

export async function getGlossary(options?: ClientRequestOptions) {
  return await parseResponse(client.glossary.$get(undefined, options))
}

export async function postGlossary(
  args: InferRequestType<typeof client.glossary.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.glossary.$post(args, options))
}

export async function getIntegrationsToken(options?: ClientRequestOptions) {
  return await parseResponse(client.integrations.token.$get(undefined, options))
}

export async function postInvitationVendors(
  args: InferRequestType<typeof client.invitation.vendors.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invitation.vendors.$post(args, options))
}

export async function getLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.languages.$get(undefined, options))
}

export async function postLocation(
  args: InferRequestType<typeof client.location.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.location.$post(args, options))
}

export async function postMakeProofreader(options?: ClientRequestOptions) {
  return await parseResponse(client['make-proofreader'].$post(undefined, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function postMe(
  args: InferRequestType<typeof client.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$post(args, options))
}

export async function postMlDeliveryPrediction(
  args: InferRequestType<(typeof client.ml)['delivery-prediction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ml['delivery-prediction'].$post(args, options))
}

export async function postNotificationsSubscribe(
  args: InferRequestType<typeof client.notifications.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.subscribe.$post(args, options))
}

export async function postNotificationsUnsubscribe(
  args: InferRequestType<typeof client.notifications.unsubscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.unsubscribe.$post(args, options))
}

export async function postPamChat(
  args: InferRequestType<typeof client.pam.chat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pam.chat.$post(args, options))
}

export async function getPamProfilesClientClientId(
  args: InferRequestType<(typeof client.pam.profiles.client)[':clientId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pam.profiles.client[':clientId'].$get(args, options))
}

export async function getPamProjectsProjectIdCompletionReport(
  args: InferRequestType<(typeof client.pam.projects)[':projectId']['completion-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pam.projects[':projectId']['completion-report'].$get(args, options),
  )
}

export async function postPassword(
  args: InferRequestType<typeof client.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.password.$post(args, options))
}

export async function getPayment(options?: ClientRequestOptions) {
  return await parseResponse(client.payment.$get(undefined, options))
}

export async function postPayment(
  args: InferRequestType<typeof client.payment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment.$post(args, options))
}

export async function postPaymentResetCorporatePaymentCode(options?: ClientRequestOptions) {
  return await parseResponse(
    client.payment['reset-corporate-payment-code'].$post(undefined, options),
  )
}

export async function postPaymentToggleCorporateAutoCharge(options?: ClientRequestOptions) {
  return await parseResponse(
    client.payment['toggle-corporate-auto-charge'].$post(undefined, options),
  )
}

export async function getPaymentCardId(
  args: InferRequestType<(typeof client.payment)[':cardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment[':cardId'].$get(args, options))
}

export async function deletePaymentCardIdDelete(
  args: InferRequestType<(typeof client.payment)[':cardId']['delete']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment[':cardId'].delete.$delete(args, options))
}

export async function postPaymentCardIdResetPaymentCode(
  args: InferRequestType<(typeof client.payment)[':cardId']['reset-payment-code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment[':cardId']['reset-payment-code'].$post(args, options))
}

export async function getPermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.permissions.$get(undefined, options))
}

export async function postProfilePicture(
  args: InferRequestType<(typeof client)['profile-picture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['profile-picture'].$post(args, options))
}

export async function getProjects(
  args: InferRequestType<typeof client.projects.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$get(args, options))
}

export async function postProjects(
  args: InferRequestType<typeof client.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.$post(args, options))
}

export async function getProjectsFromInternalIdProjectId(
  args: InferRequestType<(typeof client.projects)['from-internal-id'][':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects['from-internal-id'][':projectId'].$get(args, options))
}

export async function getProjectsVendor(
  args: InferRequestType<typeof client.projects.vendor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects.vendor.$get(args, options))
}

export async function getProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$get(args, options))
}

export async function putProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$put(args, options))
}

export async function deleteProjectsId(
  args: InferRequestType<(typeof client.projects)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].$delete(args, options))
}

export async function postProjectsIdAssignCm(
  args: InferRequestType<(typeof client.projects)[':id']['assign-cm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['assign-cm'].$post(args, options))
}

export async function getProjectsIdCallbackActionType(
  args: InferRequestType<(typeof client.projects)[':id']['callback'][':actionType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].callback[':actionType'].$get(args, options))
}

export async function postProjectsIdCancel(
  args: InferRequestType<(typeof client.projects)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].cancel.$post(args, options))
}

export async function postProjectsIdDeliver(
  args: InferRequestType<(typeof client.projects)[':id']['deliver']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].deliver.$post(args, options))
}

export async function getProjectsIdDownload(
  args: InferRequestType<(typeof client.projects)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].download.$get(args, options))
}

export async function getProjectsIdDownloadLanguage(
  args: InferRequestType<(typeof client.projects)[':id']['download'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].download[':language'].$get(args, options))
}

export async function postProjectsIdEmailQuote(
  args: InferRequestType<(typeof client.projects)[':id']['email-quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['email-quote'].$post(args, options))
}

export async function getProjectsIdInvoice(
  args: InferRequestType<(typeof client.projects)[':id']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].invoice.$get(args, options))
}

export async function getProjectsIdInvoiceHtml(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.html']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['invoice.html'].$get(args, options))
}

export async function getProjectsIdInvoicePdf(
  args: InferRequestType<(typeof client.projects)[':id']['invoice.pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id']['invoice.pdf'].$get(args, options))
}

export async function postProjectsIdLaunch(
  args: InferRequestType<(typeof client.projects)[':id']['launch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].launch.$post(args, options))
}

export async function postProjectsIdPackage(
  args: InferRequestType<(typeof client.projects)[':id']['package']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].package.$post(args, options))
}

export async function getProjectsIdPackageCheck(
  args: InferRequestType<(typeof client.projects)[':id']['package']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].package.check.$get(args, options))
}

export async function postProjectsIdPackageLanguage(
  args: InferRequestType<(typeof client.projects)[':id']['package'][':language']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].package[':language'].$post(args, options))
}

export async function getProjectsIdProgress(
  args: InferRequestType<(typeof client.projects)[':id']['progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].progress.$get(args, options))
}

export async function postProjectsIdRecreate(
  args: InferRequestType<(typeof client.projects)[':id']['recreate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].recreate.$post(args, options))
}

export async function postProjectsIdReports(
  args: InferRequestType<(typeof client.projects)[':id']['reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].reports.$post(args, options))
}

export async function getProjectsIdSalesActivities(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].sales.activities.$get(args, options))
}

export async function postProjectsIdSalesActivities(
  args: InferRequestType<(typeof client.projects)[':id']['sales']['activities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].sales.activities.$post(args, options))
}

export async function getProjectsIdWebhooks(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].webhooks.$get(args, options))
}

export async function putProjectsIdWebhooks(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].webhooks.$put(args, options))
}

export async function postProjectsIdWebhooks(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].webhooks.$post(args, options))
}

export async function deleteProjectsIdWebhooks(
  args: InferRequestType<(typeof client.projects)[':id']['webhooks']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':id'].webhooks.$delete(args, options))
}

export async function getProjectsProjectIdActivities(
  args: InferRequestType<(typeof client.projects)[':projectId']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].activities.$get(args, options))
}

export async function getProjectsProjectIdActivitiesActivityId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].activities[':activityId'].$get(args, options),
  )
}

export async function postProjectsProjectIdActivitiesActivityId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].activities[':activityId'].$post(args, options),
  )
}

export async function getProjectsProjectIdActivitiesActivityIdComments(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['activities'][':activityId']['comments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].activities[':activityId'].comments.$get(args, options),
  )
}

export async function getProjectsProjectIdComments(
  args: InferRequestType<(typeof client.projects)[':projectId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].comments.$get(args, options))
}

export async function getProjectsProjectIdDocuments(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].documents.$get(args, options))
}

export async function postProjectsProjectIdDocuments(
  args: InferRequestType<(typeof client.projects)[':projectId']['documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].documents.$post(args, options))
}

export async function getProjectsProjectIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].$get(args, options),
  )
}

export async function postProjectsProjectIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].$post(args, options),
  )
}

export async function deleteProjectsProjectIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].$delete(args, options),
  )
}

export async function getProjectsProjectIdDocumentsDocumentIdDownload(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].download.$get(args, options),
  )
}

export async function getProjectsProjectIdDocumentsDocumentIdTranslations(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].translations.$get(args, options),
  )
}

export async function getProjectsProjectIdDocumentsDocumentIdTranslationsDownloadLanguage(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations']['download'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].translations.download[':language'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdDocumentsDocumentIdTranslationsLanguage(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['documents'][':documentId']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].documents[':documentId'].translations[':language'].$get(
      args,
      options,
    ),
  )
}

export async function getProjectsProjectIdGlossaries(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].glossaries.$get(args, options))
}

export async function postProjectsProjectIdGlossaries(
  args: InferRequestType<(typeof client.projects)[':projectId']['glossaries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].glossaries.$post(args, options))
}

export async function getProjectsProjectIdGlossariesGlossaryId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].glossaries[':glossaryId'].$get(args, options),
  )
}

export async function putProjectsProjectIdGlossariesGlossaryId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].glossaries[':glossaryId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdGlossariesGlossaryId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].glossaries[':glossaryId'].$delete(args, options),
  )
}

export async function getProjectsProjectIdGlossariesGlossaryIdDownload(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['glossaries'][':glossaryId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].glossaries[':glossaryId'].download.$get(args, options),
  )
}

export async function getProjectsProjectIdStrings(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].strings.$get(args, options))
}

export async function postProjectsProjectIdStringsPackage(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings']['package']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].strings.package.$post(args, options))
}

export async function getProjectsProjectIdStringsPackageStatus(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings']['package']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].strings.package.status.$get(args, options),
  )
}

export async function postProjectsProjectIdStringsLanguageCodePackage(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].strings[':languageCode'].package.$post(args, options),
  )
}

export async function getProjectsProjectIdStringsLanguageCodePackageStatus(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['strings'][':languageCode']['package']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].strings[':languageCode'].package.status.$get(args, options),
  )
}

export async function getProjectsProjectIdStringsLanguage(
  args: InferRequestType<(typeof client.projects)[':projectId']['strings'][':language']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].strings[':language'].$get(args, options))
}

export async function getProjectsProjectIdStyleguides(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].styleguides.$get(args, options))
}

export async function postProjectsProjectIdStyleguides(
  args: InferRequestType<(typeof client.projects)[':projectId']['styleguides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].styleguides.$post(args, options))
}

export async function getProjectsProjectIdStyleguidesStyleGuideId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].styleguides[':styleGuideId'].$get(args, options),
  )
}

export async function putProjectsProjectIdStyleguidesStyleGuideId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].styleguides[':styleGuideId'].$put(args, options),
  )
}

export async function deleteProjectsProjectIdStyleguidesStyleGuideId(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].styleguides[':styleGuideId'].$delete(args, options),
  )
}

export async function getProjectsProjectIdStyleguidesStyleGuideIdDownload(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['styleguides'][':styleGuideId']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].styleguides[':styleGuideId'].download.$get(args, options),
  )
}

export async function getProjectsProjectIdTranslations(
  args: InferRequestType<(typeof client.projects)[':projectId']['translations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].translations.$get(args, options))
}

export async function getProjectsProjectIdTranslationsLanguage(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['translations'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.projects[':projectId'].translations[':language'].$get(args, options),
  )
}

export async function getProjectsProjectIdVendors(
  args: InferRequestType<(typeof client.projects)[':projectId']['vendors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.projects[':projectId'].vendors.$get(args, options))
}

export async function postReportsFilter(
  args: InferRequestType<typeof client.reports.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.filter.$post(args, options))
}

export async function postReportsLanguagePairs(
  args: InferRequestType<(typeof client.reports)['language-pairs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports['language-pairs'].$post(args, options))
}

export async function postReportsProjects(
  args: InferRequestType<typeof client.reports.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.projects.$post(args, options))
}

export async function postReportsQa(
  args: InferRequestType<typeof client.reports.qa.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.qa.$post(args, options))
}

export async function postReportsUsers(
  args: InferRequestType<typeof client.reports.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reports.users.$post(args, options))
}

export async function postResendEmailConfirmation(options?: ClientRequestOptions) {
  return await parseResponse(client['resend-email-confirmation'].$post(undefined, options))
}

export async function getResponsivity(
  args: InferRequestType<typeof client.responsivity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.responsivity.$get(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function postSearchDocumentsReindex(options?: ClientRequestOptions) {
  return await parseResponse(client.search.documents.reindex.$post(undefined, options))
}

export async function getSearchDocumentsReindexStatus(
  args: InferRequestType<typeof client.search.documents.reindex.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.documents.reindex.status.$get(args, options))
}

export async function getStats(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.$get(undefined, options))
}

export async function getStatsCommissions(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.commissions.$get(undefined, options))
}

export async function postStatsCommissions(
  args: InferRequestType<typeof client.stats.commissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.commissions.$post(args, options))
}

export async function getStatsPopularPairs(options?: ClientRequestOptions) {
  return await parseResponse(client.stats['popular-pairs'].$get(undefined, options))
}

export async function getStatsProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.projects.$get(undefined, options))
}

export async function getStatsStrings(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.strings.$get(undefined, options))
}

export async function getStrings(
  args: InferRequestType<typeof client.strings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strings.$get(args, options))
}

export async function putStrings(
  args: InferRequestType<typeof client.strings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strings.$put(args, options))
}

export async function postStrings(
  args: InferRequestType<typeof client.strings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strings.$post(args, options))
}

export async function postStringsLanguageCodePackage(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strings[':languageCode'].package.$post(args, options))
}

export async function getStringsLanguageCodePackageStatus(
  args: InferRequestType<(typeof client.strings)[':languageCode']['package']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.strings[':languageCode'].package.status.$get(args, options))
}

export async function getStyleguide(options?: ClientRequestOptions) {
  return await parseResponse(client.styleguide.$get(undefined, options))
}

export async function postStyleguide(
  args: InferRequestType<typeof client.styleguide.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.styleguide.$post(args, options))
}

export async function getSurveysScopeType(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.surveys[':scope'][':type'].$get(args, options))
}

export async function postSurveysScopeType(
  args: InferRequestType<(typeof client.surveys)[':scope'][':type']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.surveys[':scope'][':type'].$post(args, options))
}

export async function getSwagger(options?: ClientRequestOptions) {
  return await parseResponse(client.swagger.$get(undefined, options))
}

export async function postToken(
  args: InferRequestType<typeof client.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.token.$post(args, options))
}

export async function postUnfreezeAccount(options?: ClientRequestOptions) {
  return await parseResponse(client['unfreeze-account'].$post(undefined, options))
}

export async function getUserGroups(options?: ClientRequestOptions) {
  return await parseResponse(client['user-groups'].$get(undefined, options))
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

export async function postUsersAvailableVendors(
  args: InferRequestType<(typeof client.users)['available-vendors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['available-vendors'].$post(args, options))
}

export async function postUsersFilter(
  args: InferRequestType<typeof client.users.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.filter.$post(args, options))
}

export async function postUsersSendPasswordReminder(
  args: InferRequestType<(typeof client.users)['send-password-reminder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users['send-password-reminder'].$post(args, options))
}

export async function getUsersTags(options?: ClientRequestOptions) {
  return await parseResponse(client.users.tags.$get(undefined, options))
}

export async function getUserId(
  args: InferRequestType<(typeof client)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].$get(args, options))
}

export async function postUserId(
  args: InferRequestType<(typeof client)[':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].$post(args, options))
}

export async function postUserIdApprove(
  args: InferRequestType<(typeof client)[':userId']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].approve.$post(args, options))
}

export async function deleteUserIdDeleteAccount(
  args: InferRequestType<(typeof client)[':userId']['delete-account']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['delete-account'].$delete(args, options))
}

export async function getUserIdDocuments(
  args: InferRequestType<(typeof client)[':userId']['documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].documents.$get(args, options))
}

export async function postUserIdDowngradeProofreader(
  args: InferRequestType<(typeof client)[':userId']['downgrade-proofreader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['downgrade-proofreader'].$post(args, options))
}

export async function getUserIdEarnings(
  args: InferRequestType<(typeof client)[':userId']['earnings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].earnings.$get(args, options))
}

export async function postUserIdFreezeAccount(
  args: InferRequestType<(typeof client)[':userId']['freeze-account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['freeze-account'].$post(args, options))
}

export async function postUserIdMakeProofreader(
  args: InferRequestType<(typeof client)[':userId']['make-proofreader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['make-proofreader'].$post(args, options))
}

export async function postUserIdNotificationsSubscribe(
  args: InferRequestType<(typeof client)[':userId']['notifications']['subscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].notifications.subscribe.$post(args, options))
}

export async function postUserIdNotificationsUnsubscribe(
  args: InferRequestType<(typeof client)[':userId']['notifications']['unsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].notifications.unsubscribe.$post(args, options))
}

export async function getUserIdPayment(
  args: InferRequestType<(typeof client)[':userId']['payment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].payment.$get(args, options))
}

export async function postUserIdPayment(
  args: InferRequestType<(typeof client)[':userId']['payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].payment.$post(args, options))
}

export async function getUserIdPermissions(
  args: InferRequestType<(typeof client)[':userId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].permissions.$get(args, options))
}

export async function postUserIdProfilePicture(
  args: InferRequestType<(typeof client)[':userId']['profile-picture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['profile-picture'].$post(args, options))
}

export async function getUserIdProjectsVendor(
  args: InferRequestType<(typeof client)[':userId']['projects']['vendor']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].projects.vendor.$get(args, options))
}

export async function postUserIdReject(
  args: InferRequestType<(typeof client)[':userId']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].reject.$post(args, options))
}

export async function postUserIdResendEmailConfirmation(
  args: InferRequestType<(typeof client)[':userId']['resend-email-confirmation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['resend-email-confirmation'].$post(args, options))
}

export async function getUserIdResponsivity(
  args: InferRequestType<(typeof client)[':userId']['responsivity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].responsivity.$get(args, options))
}

export async function getUserIdStats(
  args: InferRequestType<(typeof client)[':userId']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].stats.$get(args, options))
}

export async function getUserIdStatsPopularPairs(
  args: InferRequestType<(typeof client)[':userId']['stats']['popular-pairs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].stats['popular-pairs'].$get(args, options))
}

export async function getUserIdStatsProjects(
  args: InferRequestType<(typeof client)[':userId']['stats']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].stats.projects.$get(args, options))
}

export async function postUserIdSuspend(
  args: InferRequestType<(typeof client)[':userId']['suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId'].suspend.$post(args, options))
}

export async function postUserIdUnfreezeAccount(
  args: InferRequestType<(typeof client)[':userId']['unfreeze-account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['unfreeze-account'].$post(args, options))
}

export async function getUserIdUserGroups(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['user-groups'].$get(args, options))
}

export async function postUserIdUserGroups(
  args: InferRequestType<(typeof client)[':userId']['user-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':userId']['user-groups'].$post(args, options))
}
