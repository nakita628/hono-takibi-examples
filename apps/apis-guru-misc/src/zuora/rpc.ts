import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChargeMetricsDataChargeMetrics(
  args: InferRequestType<(typeof client)['charge-metrics']['data']['charge-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['charge-metrics'].data['charge-metrics'].$get(args, options))
}

export async function getChargeMetricsDataChargeMetricsDiscountAllocationDetail(
  args: InferRequestType<
    (typeof client)['charge-metrics']['data']['charge-metrics-discount-allocation-detail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['charge-metrics'].data['charge-metrics-discount-allocation-detail'].$get(args, options),
  )
}

export async function getEventsEventTriggers(
  args: InferRequestType<(typeof client.events)['event-triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-triggers'].$get(args, options))
}

export async function postEventsEventTriggers(
  args: InferRequestType<(typeof client.events)['event-triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-triggers'].$post(args, options))
}

export async function getEventsEventTriggersId(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-triggers'][':id'].$get(args, options))
}

export async function putEventsEventTriggersId(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-triggers'][':id'].$put(args, options))
}

export async function deleteEventsEventTriggersId(
  args: InferRequestType<(typeof client.events)['event-triggers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events['event-triggers'][':id'].$delete(args, options))
}

export async function getNotificationsEmailTemplates(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['email-templates'].$get(args, options))
}

export async function postNotificationsEmailTemplates(
  args: InferRequestType<(typeof client.notifications)['email-templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['email-templates'].$post(args, options))
}

export async function getNotificationsEmailTemplatesId(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['email-templates'][':id'].$get(args, options))
}

export async function putNotificationsEmailTemplatesId(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['email-templates'][':id'].$put(args, options))
}

export async function deleteNotificationsEmailTemplatesId(
  args: InferRequestType<(typeof client.notifications)['email-templates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['email-templates'][':id'].$delete(args, options))
}

export async function deleteNotificationsHistory(
  args: InferRequestType<typeof client.notifications.history.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.history.$delete(args, options))
}

export async function getNotificationsHistoryTasksId(
  args: InferRequestType<(typeof client.notifications.history.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.history.tasks[':id'].$get(args, options))
}

export async function getNotificationsNotificationDefinitions(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['notification-definitions'].$get(args, options))
}

export async function postNotificationsNotificationDefinitions(
  args: InferRequestType<(typeof client.notifications)['notification-definitions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications['notification-definitions'].$post(args, options))
}

export async function getNotificationsNotificationDefinitionsId(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications['notification-definitions'][':id'].$get(args, options),
  )
}

export async function putNotificationsNotificationDefinitionsId(
  args: InferRequestType<(typeof client.notifications)['notification-definitions'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications['notification-definitions'][':id'].$put(args, options),
  )
}

export async function deleteNotificationsNotificationDefinitionsId(
  args: InferRequestType<
    (typeof client.notifications)['notification-definitions'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notifications['notification-definitions'][':id'].$delete(args, options),
  )
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function postObjectsBatchDefaultObject(
  args: InferRequestType<(typeof client.objects.batch.default)[':object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.batch.default[':object'].$post(args, options))
}

export async function getObjectsDefinitionsDefault(
  args: InferRequestType<typeof client.objects.definitions.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.definitions.default.$get(args, options))
}

export async function postObjectsDefinitionsDefault(
  args: InferRequestType<typeof client.objects.definitions.default.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.definitions.default.$post(args, options))
}

export async function getObjectsDefinitionsDefaultObject(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.definitions.default[':object'].$get(args, options))
}

export async function deleteObjectsDefinitionsDefaultObject(
  args: InferRequestType<(typeof client.objects.definitions.default)[':object']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.definitions.default[':object'].$delete(args, options))
}

export async function getObjectsJobs(
  args: InferRequestType<typeof client.objects.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.jobs.$get(args, options))
}

export async function postObjectsJobs(
  args: InferRequestType<typeof client.objects.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.jobs.$post(args, options))
}

export async function getObjectsJobsId(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.jobs[':id'].$get(args, options))
}

export async function getObjectsJobsIdErrors(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.jobs[':id'].errors.$get(args, options))
}

export async function postObjectsJobsIdFiles(
  args: InferRequestType<(typeof client.objects.jobs)[':id']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.jobs[':id'].files.$post(args, options))
}

export async function postObjectsMigrations(
  args: InferRequestType<typeof client.objects.migrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.migrations.$post(args, options))
}

export async function getObjectsRecordsDefaultObject(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.records.default[':object'].$get(args, options))
}

export async function postObjectsRecordsDefaultObject(
  args: InferRequestType<(typeof client.objects.records.default)[':object']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.records.default[':object'].$post(args, options))
}

export async function getObjectsRecordsDefaultObjectId(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.records.default[':object'][':id'].$get(args, options))
}

export async function putObjectsRecordsDefaultObjectId(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.records.default[':object'][':id'].$put(args, options))
}

export async function deleteObjectsRecordsDefaultObjectId(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.objects.records.default[':object'][':id'].$delete(args, options),
  )
}

export async function patchObjectsRecordsDefaultObjectId(
  args: InferRequestType<(typeof client.objects.records.default)[':object'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.objects.records.default[':object'][':id'].$patch(args, options))
}

export async function getQueryJobs(
  args: InferRequestType<typeof client.query.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.jobs.$get(args, options))
}

export async function postQueryJobs(
  args: InferRequestType<typeof client.query.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.jobs.$post(args, options))
}

export async function getQueryJobsJobId(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.jobs[':job-id'].$get(args, options))
}

export async function deleteQueryJobsJobId(
  args: InferRequestType<(typeof client.query.jobs)[':job-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.query.jobs[':job-id'].$delete(args, options))
}

export async function postSettingsBatchRequests(
  args: InferRequestType<(typeof client.settings)['batch-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings['batch-requests'].$post(args, options))
}

export async function getSettingsListing(
  args: InferRequestType<typeof client.settings.listing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.listing.$get(args, options))
}

export async function getV1AccountingCodes(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'].$get(args, options))
}

export async function postV1AccountingCodes(
  args: InferRequestType<(typeof client.v1)['accounting-codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'].$post(args, options))
}

export async function getV1AccountingCodesAcId(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'][':ac-id'].$get(args, options))
}

export async function putV1AccountingCodesAcId(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'][':ac-id'].$put(args, options))
}

export async function deleteV1AccountingCodesAcId(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'][':ac-id'].$delete(args, options))
}

export async function putV1AccountingCodesAcIdActivate(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['activate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'][':ac-id'].activate.$put(args, options))
}

export async function putV1AccountingCodesAcIdDeactivate(
  args: InferRequestType<(typeof client.v1)['accounting-codes'][':ac-id']['deactivate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-codes'][':ac-id'].deactivate.$put(args, options))
}

export async function getV1AccountingPeriods(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'].$get(args, options))
}

export async function postV1AccountingPeriods(
  args: InferRequestType<(typeof client.v1)['accounting-periods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'].$post(args, options))
}

export async function getV1AccountingPeriodsApId(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'][':ap-id'].$get(args, options))
}

export async function putV1AccountingPeriodsApId(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'][':ap-id'].$put(args, options))
}

export async function deleteV1AccountingPeriodsApId(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'][':ap-id'].$delete(args, options))
}

export async function putV1AccountingPeriodsApIdClose(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['close']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'][':ap-id'].close.$put(args, options))
}

export async function putV1AccountingPeriodsApIdPendingClose(
  args: InferRequestType<
    (typeof client.v1)['accounting-periods'][':ap-id']['pending-close']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['accounting-periods'][':ap-id']['pending-close'].$put(args, options),
  )
}

export async function putV1AccountingPeriodsApIdReopen(
  args: InferRequestType<(typeof client.v1)['accounting-periods'][':ap-id']['reopen']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['accounting-periods'][':ap-id'].reopen.$put(args, options))
}

export async function putV1AccountingPeriodsApIdRunTrialBalance(
  args: InferRequestType<
    (typeof client.v1)['accounting-periods'][':ap-id']['run-trial-balance']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['accounting-periods'][':ap-id']['run-trial-balance'].$put(args, options),
  )
}

export async function postV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$post(args, options))
}

export async function postV1AccountsBillingDocumentsFilesDeletionJobs(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts['billing-documents'].files['deletion-jobs'].$post(args, options),
  )
}

export async function getV1AccountsBillingDocumentsFilesDeletionJobsJobId(
  args: InferRequestType<
    (typeof client.v1.accounts)['billing-documents']['files']['deletion-jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts['billing-documents'].files['deletion-jobs'][':jobId'].$get(args, options),
  )
}

export async function getV1AccountsAccountKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-key'].$get(args, options))
}

export async function putV1AccountsAccountKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-key'].$put(args, options))
}

export async function getV1AccountsAccountKeySummary(
  args: InferRequestType<(typeof client.v1.accounts)[':account-key']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-key'].summary.$get(args, options))
}

export async function postV1AccountsIdBillingDocumentsGenerate(
  args: InferRequestType<
    (typeof client.v1.accounts)[':id']['billing-documents']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':id']['billing-documents'].generate.$post(args, options),
  )
}

export async function postV1ActionAmend(
  args: InferRequestType<typeof client.v1.action.amend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.amend.$post(args, options))
}

export async function postV1ActionCreate(
  args: InferRequestType<typeof client.v1.action.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.create.$post(args, options))
}

export async function postV1ActionDelete(
  args: InferRequestType<typeof client.v1.action.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.delete.$post(args, options))
}

export async function postV1ActionExecute(
  args: InferRequestType<typeof client.v1.action.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.execute.$post(args, options))
}

export async function postV1ActionGenerate(
  args: InferRequestType<typeof client.v1.action.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.generate.$post(args, options))
}

export async function postV1ActionQuery(
  args: InferRequestType<typeof client.v1.action.query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.query.$post(args, options))
}

export async function postV1ActionQueryMore(
  args: InferRequestType<typeof client.v1.action.queryMore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.queryMore.$post(args, options))
}

export async function postV1ActionSubscribe(
  args: InferRequestType<typeof client.v1.action.subscribe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.subscribe.$post(args, options))
}

export async function postV1ActionUpdate(
  args: InferRequestType<typeof client.v1.action.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.action.update.$post(args, options))
}

export async function getV1AmendmentsSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.v1.amendments.subscriptions)[':subscription-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.amendments.subscriptions[':subscription-id'].$get(args, options),
  )
}

export async function getV1AmendmentsAmendmentKey(
  args: InferRequestType<(typeof client.v1.amendments)[':amendment-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.amendments[':amendment-key'].$get(args, options))
}

export async function getV1AsyncJobsJobId(
  args: InferRequestType<(typeof client.v1)['async-jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['async-jobs'][':jobId'].$get(args, options))
}

export async function postV1AsyncOrders(
  args: InferRequestType<typeof client.v1.async.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.async.orders.$post(args, options))
}

export async function postV1AsyncOrdersPreview(
  args: InferRequestType<typeof client.v1.async.orders.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.async.orders.preview.$post(args, options))
}

export async function postV1Attachments(
  args: InferRequestType<typeof client.v1.attachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attachments.$post(args, options))
}

export async function getV1AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attachments[':attachment-id'].$get(args, options))
}

export async function putV1AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attachments[':attachment-id'].$put(args, options))
}

export async function deleteV1AttachmentsAttachmentId(
  args: InferRequestType<(typeof client.v1.attachments)[':attachment-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.attachments[':attachment-id'].$delete(args, options))
}

export async function getV1AttachmentsObjectTypeObjectKey(
  args: InferRequestType<(typeof client.v1.attachments)[':object-type'][':object-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.attachments[':object-type'][':object-key'].$get(args, options),
  )
}

export async function postV1BillRunsBillRunIdEmails(
  args: InferRequestType<(typeof client.v1)['bill-runs'][':billRunId']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['bill-runs'][':billRunId'].emails.$post(args, options))
}

export async function getV1BillingDocuments(
  args: InferRequestType<(typeof client.v1)['billing-documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['billing-documents'].$get(args, options))
}

export async function postV1BillingPreviewRuns(
  args: InferRequestType<(typeof client.v1)['billing-preview-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['billing-preview-runs'].$post(args, options))
}

export async function getV1BillingPreviewRunsBillingPreviewRunId(
  args: InferRequestType<
    (typeof client.v1)['billing-preview-runs'][':billingPreviewRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['billing-preview-runs'][':billingPreviewRunId'].$get(args, options),
  )
}

export async function postV1Bulk(
  args: InferRequestType<typeof client.v1.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bulk.$post(args, options))
}

export async function getV1BulkBulkKey(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bulk[':bulk-key'].$get(args, options))
}

export async function putV1BulkBulkKeyStop(
  args: InferRequestType<(typeof client.v1.bulk)[':bulk-key']['stop']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bulk[':bulk-key'].stop.$put(args, options))
}

export async function getV1CatalogProductProductId(
  args: InferRequestType<(typeof client.v1.catalog.product)[':product-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalog.product[':product-id'].$get(args, options))
}

export async function getV1CatalogProducts(
  args: InferRequestType<typeof client.v1.catalog.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalog.products.$get(args, options))
}

export async function postV1CatalogProductsProductIdShare(
  args: InferRequestType<(typeof client.v1.catalog.products)[':product-id']['share']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.catalog.products[':product-id'].share.$post(args, options))
}

export async function getV1ChargeRevenueSummariesSubscriptionChargesChargeKey(
  args: InferRequestType<
    (typeof client.v1)['charge-revenue-summaries']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['charge-revenue-summaries']['subscription-charges'][':charge-key'].$get(
      args,
      options,
    ),
  )
}

export async function getV1ChargeRevenueSummariesCrsNumber(
  args: InferRequestType<(typeof client.v1)['charge-revenue-summaries'][':crs-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['charge-revenue-summaries'][':crs-number'].$get(args, options),
  )
}

export async function postV1Connections(
  args: InferRequestType<typeof client.v1.connections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.$post(args, options))
}

export async function putV1ContactsContactIdScrub(
  args: InferRequestType<(typeof client.v1.contacts)[':contactId']['scrub']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.contacts[':contactId'].scrub.$put(args, options))
}

export async function getV1Creditmemos(
  args: InferRequestType<typeof client.v1.creditmemos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos.$get(args, options))
}

export async function postV1Creditmemos(
  args: InferRequestType<typeof client.v1.creditmemos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos.$post(args, options))
}

export async function getV1CreditmemosCreditMemoId(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].$get(args, options))
}

export async function putV1CreditmemosCreditMemoId(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].$put(args, options))
}

export async function deleteV1CreditmemosCreditMemoId(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].$delete(args, options))
}

export async function putV1CreditmemosCreditMemoIdApply(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['apply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].apply.$put(args, options))
}

export async function putV1CreditmemosCreditMemoIdCancel(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].cancel.$put(args, options))
}

export async function postV1CreditmemosCreditMemoIdEmails(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].emails.$post(args, options))
}

export async function postV1CreditmemosCreditMemoIdFiles(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].files.$post(args, options))
}

export async function getV1CreditmemosCreditMemoIdItems(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].items.$get(args, options))
}

export async function getV1CreditmemosCreditMemoIdItemsCmitemid(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].items[':cmitemid'].$get(args, options),
  )
}

export async function getV1CreditmemosCreditMemoIdItemsCmitemidTaxationItems(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['items'][':cmitemid']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].items[':cmitemid']['taxation-items'].$get(args, options),
  )
}

export async function getV1CreditmemosCreditMemoIdParts(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].parts.$get(args, options))
}

export async function getV1CreditmemosCreditMemoIdPartsPartid(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].parts[':partid'].$get(args, options),
  )
}

export async function getV1CreditmemosCreditMemoIdPartsPartidItemparts(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts.$get(args, options),
  )
}

export async function getV1CreditmemosCreditMemoIdPartsPartidItempartsItempartid(
  args: InferRequestType<
    (typeof client.v1.creditmemos)[':creditMemoId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].parts[':partid'].itemparts[':itempartid'].$get(
      args,
      options,
    ),
  )
}

export async function postV1CreditmemosCreditMemoIdPdfs(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['pdfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].pdfs.$post(args, options))
}

export async function putV1CreditmemosCreditMemoIdPost(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['post']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].post.$put(args, options))
}

export async function postV1CreditmemosCreditMemoIdTaxationitems(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['taxationitems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.creditmemos[':creditMemoId'].taxationitems.$post(args, options),
  )
}

export async function putV1CreditmemosCreditMemoIdUnapply(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unapply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].unapply.$put(args, options))
}

export async function putV1CreditmemosCreditMemoIdUnpost(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditMemoId']['unpost']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditMemoId'].unpost.$put(args, options))
}

export async function postV1CreditmemosCreditmemoIdRefunds(
  args: InferRequestType<(typeof client.v1.creditmemos)[':creditmemoId']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.creditmemos[':creditmemoId'].refunds.$post(args, options))
}

export async function getV1CustomExchangeRatesCurrency(
  args: InferRequestType<(typeof client.v1)['custom-exchange-rates'][':currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['custom-exchange-rates'][':currency'].$get(args, options))
}

export async function getV1Debitmemos(
  args: InferRequestType<typeof client.v1.debitmemos.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos.$get(args, options))
}

export async function putV1Debitmemos(
  args: InferRequestType<typeof client.v1.debitmemos.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos.$put(args, options))
}

export async function postV1Debitmemos(
  args: InferRequestType<typeof client.v1.debitmemos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos.$post(args, options))
}

export async function getV1DebitmemosDebitMemoId(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].$get(args, options))
}

export async function putV1DebitmemosDebitMemoId(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].$put(args, options))
}

export async function deleteV1DebitmemosDebitMemoId(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].$delete(args, options))
}

export async function getV1DebitmemosDebitMemoIdApplicationParts(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['application-parts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.debitmemos[':debitMemoId']['application-parts'].$get(args, options),
  )
}

export async function putV1DebitmemosDebitMemoIdCancel(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].cancel.$put(args, options))
}

export async function postV1DebitmemosDebitMemoIdCollect(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['collect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].collect.$post(args, options))
}

export async function postV1DebitmemosDebitMemoIdEmails(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].emails.$post(args, options))
}

export async function postV1DebitmemosDebitMemoIdFiles(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].files.$post(args, options))
}

export async function getV1DebitmemosDebitMemoIdItems(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].items.$get(args, options))
}

export async function getV1DebitmemosDebitMemoIdItemsDmitemid(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.debitmemos[':debitMemoId'].items[':dmitemid'].$get(args, options),
  )
}

export async function getV1DebitmemosDebitMemoIdItemsDmitemidTaxationItems(
  args: InferRequestType<
    (typeof client.v1.debitmemos)[':debitMemoId']['items'][':dmitemid']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.debitmemos[':debitMemoId'].items[':dmitemid']['taxation-items'].$get(args, options),
  )
}

export async function postV1DebitmemosDebitMemoIdPdfs(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['pdfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].pdfs.$post(args, options))
}

export async function putV1DebitmemosDebitMemoIdPost(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['post']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].post.$put(args, options))
}

export async function postV1DebitmemosDebitMemoIdTaxationitems(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['taxationitems']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.debitmemos[':debitMemoId'].taxationitems.$post(args, options),
  )
}

export async function putV1DebitmemosDebitMemoIdUnpost(
  args: InferRequestType<(typeof client.v1.debitmemos)[':debitMemoId']['unpost']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.debitmemos[':debitMemoId'].unpost.$put(args, options))
}

export async function getV1DescribeObject(
  args: InferRequestType<(typeof client.v1.describe)[':object']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describe[':object'].$get(args, options))
}

export async function postV1DocumentProperties(
  args: InferRequestType<(typeof client.v1)['document-properties']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['document-properties'].$post(args, options))
}

export async function putV1DocumentPropertiesDocumentPropertiesId(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentPropertiesId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['document-properties'][':documentPropertiesId'].$put(args, options),
  )
}

export async function deleteV1DocumentPropertiesDocumentPropertiesId(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentPropertiesId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['document-properties'][':documentPropertiesId'].$delete(args, options),
  )
}

export async function getV1DocumentPropertiesDocumentTypeDocumentId(
  args: InferRequestType<
    (typeof client.v1)['document-properties'][':documentType'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['document-properties'][':documentType'][':documentId'].$get(args, options),
  )
}

export async function getV1Entities(
  args: InferRequestType<typeof client.v1.entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities.$get(args, options))
}

export async function postV1Entities(
  args: InferRequestType<typeof client.v1.entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities.$post(args, options))
}

export async function getV1EntitiesId(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities[':id'].$get(args, options))
}

export async function putV1EntitiesId(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities[':id'].$put(args, options))
}

export async function deleteV1EntitiesId(
  args: InferRequestType<(typeof client.v1.entities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities[':id'].$delete(args, options))
}

export async function putV1EntitiesIdProvision(
  args: InferRequestType<(typeof client.v1.entities)[':id']['provision']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entities[':id'].provision.$put(args, options))
}

export async function getV1EntityConnections(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['entity-connections'].$get(args, options))
}

export async function postV1EntityConnections(
  args: InferRequestType<(typeof client.v1)['entity-connections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['entity-connections'].$post(args, options))
}

export async function putV1EntityConnectionsConnectionIdAccept(
  args: InferRequestType<
    (typeof client.v1)['entity-connections'][':connection-id']['accept']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['entity-connections'][':connection-id'].accept.$put(args, options),
  )
}

export async function putV1EntityConnectionsConnectionIdDeny(
  args: InferRequestType<
    (typeof client.v1)['entity-connections'][':connection-id']['deny']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['entity-connections'][':connection-id'].deny.$put(args, options),
  )
}

export async function putV1EntityConnectionsConnectionIdDisconnect(
  args: InferRequestType<
    (typeof client.v1)['entity-connections'][':connection-id']['disconnect']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['entity-connections'][':connection-id'].disconnect.$put(args, options),
  )
}

export async function getV1FilesFileId(
  args: InferRequestType<(typeof client.v1.files)[':file-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file-id'].$get(args, options))
}

export async function postV1GatewaySettlementPaymentsPaymentIdChargeback(
  args: InferRequestType<
    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['chargeback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-settlement'].payments[':payment-id'].chargeback.$post(args, options),
  )
}

export async function postV1GatewaySettlementPaymentsPaymentIdReject(
  args: InferRequestType<
    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['reject']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-settlement'].payments[':payment-id'].reject.$post(args, options),
  )
}

export async function postV1GatewaySettlementPaymentsPaymentIdSettle(
  args: InferRequestType<
    (typeof client.v1)['gateway-settlement']['payments'][':payment-id']['settle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-settlement'].payments[':payment-id'].settle.$post(args, options),
  )
}

export async function postV1HmacSignatures(
  args: InferRequestType<(typeof client.v1)['hmac-signatures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['hmac-signatures'].$post(args, options))
}

export async function getV1Hostedpages(
  args: InferRequestType<typeof client.v1.hostedpages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hostedpages.$get(args, options))
}

export async function putV1Invoices(
  args: InferRequestType<typeof client.v1.invoices.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.$put(args, options))
}

export async function postV1Invoices(
  args: InferRequestType<typeof client.v1.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.$post(args, options))
}

export async function putV1InvoicesInvoiceId(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].$put(args, options))
}

export async function getV1InvoicesInvoiceIdApplicationParts(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['application-parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.invoices[':invoiceId']['application-parts'].$get(args, options),
  )
}

export async function postV1InvoicesInvoiceIdCreditmemos(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['creditmemos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].creditmemos.$post(args, options))
}

export async function postV1InvoicesInvoiceIdDebitmemos(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['debitmemos']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].debitmemos.$post(args, options))
}

export async function postV1InvoicesInvoiceIdEmails(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['emails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].emails.$post(args, options))
}

export async function getV1InvoicesInvoiceIdFiles(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].files.$get(args, options))
}

export async function postV1InvoicesInvoiceIdFiles(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['files']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].files.$post(args, options))
}

export async function getV1InvoicesInvoiceIdItems(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].items.$get(args, options))
}

export async function getV1InvoicesInvoiceIdItemsItemIdTaxationItems(
  args: InferRequestType<
    (typeof client.v1.invoices)[':invoiceId']['items'][':itemId']['taxation-items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.invoices[':invoiceId'].items[':itemId']['taxation-items'].$get(args, options),
  )
}

export async function putV1InvoicesInvoiceIdReverse(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['reverse']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId'].reverse.$put(args, options))
}

export async function putV1InvoicesInvoiceIdWriteOff(
  args: InferRequestType<(typeof client.v1.invoices)[':invoiceId']['write-off']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoiceId']['write-off'].$put(args, options))
}

export async function postV1JournalEntries(
  args: InferRequestType<(typeof client.v1)['journal-entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-entries'].$post(args, options))
}

export async function getV1JournalEntriesJournalRunsJrNumber(
  args: InferRequestType<
    (typeof client.v1)['journal-entries']['journal-runs'][':jr-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['journal-entries']['journal-runs'][':jr-number'].$get(args, options),
  )
}

export async function getV1JournalEntriesJeNumber(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-entries'][':je-number'].$get(args, options))
}

export async function deleteV1JournalEntriesJeNumber(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-entries'][':je-number'].$delete(args, options))
}

export async function putV1JournalEntriesJeNumberBasicInformation(
  args: InferRequestType<
    (typeof client.v1)['journal-entries'][':je-number']['basic-information']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['journal-entries'][':je-number']['basic-information'].$put(args, options),
  )
}

export async function putV1JournalEntriesJeNumberCancel(
  args: InferRequestType<(typeof client.v1)['journal-entries'][':je-number']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-entries'][':je-number'].cancel.$put(args, options))
}

export async function postV1JournalRuns(
  args: InferRequestType<(typeof client.v1)['journal-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-runs'].$post(args, options))
}

export async function getV1JournalRunsJrNumber(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-runs'][':jr-number'].$get(args, options))
}

export async function deleteV1JournalRunsJrNumber(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-runs'][':jr-number'].$delete(args, options))
}

export async function putV1JournalRunsJrNumberCancel(
  args: InferRequestType<(typeof client.v1)['journal-runs'][':jr-number']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['journal-runs'][':jr-number'].cancel.$put(args, options))
}

export async function getV1NotificationHistoryCallout(
  args: InferRequestType<(typeof client.v1)['notification-history']['callout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['notification-history'].callout.$get(args, options))
}

export async function getV1NotificationHistoryEmail(
  args: InferRequestType<(typeof client.v1)['notification-history']['email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['notification-history'].email.$get(args, options))
}

export async function postV1ObjectAccount(
  args: InferRequestType<typeof client.v1.object.account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.account.$post(args, options))
}

export async function getV1ObjectAccountId(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.account[':id'].$get(args, options))
}

export async function putV1ObjectAccountId(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.account[':id'].$put(args, options))
}

export async function deleteV1ObjectAccountId(
  args: InferRequestType<(typeof client.v1.object.account)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.account[':id'].$delete(args, options))
}

export async function getV1ObjectAmendmentId(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.amendment[':id'].$get(args, options))
}

export async function putV1ObjectAmendmentId(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.amendment[':id'].$put(args, options))
}

export async function deleteV1ObjectAmendmentId(
  args: InferRequestType<(typeof client.v1.object.amendment)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.amendment[':id'].$delete(args, options))
}

export async function postV1ObjectBillRun(
  args: InferRequestType<(typeof client.v1.object)['bill-run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['bill-run'].$post(args, options))
}

export async function getV1ObjectBillRunId(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['bill-run'][':id'].$get(args, options))
}

export async function putV1ObjectBillRunId(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['bill-run'][':id'].$put(args, options))
}

export async function deleteV1ObjectBillRunId(
  args: InferRequestType<(typeof client.v1.object)['bill-run'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['bill-run'][':id'].$delete(args, options))
}

export async function getV1ObjectCommunicationProfileId(
  args: InferRequestType<(typeof client.v1.object)['communication-profile'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['communication-profile'][':id'].$get(args, options))
}

export async function postV1ObjectContact(
  args: InferRequestType<typeof client.v1.object.contact.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.contact.$post(args, options))
}

export async function getV1ObjectContactId(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.contact[':id'].$get(args, options))
}

export async function putV1ObjectContactId(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.contact[':id'].$put(args, options))
}

export async function deleteV1ObjectContactId(
  args: InferRequestType<(typeof client.v1.object.contact)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.contact[':id'].$delete(args, options))
}

export async function postV1ObjectCreditBalanceAdjustment(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['credit-balance-adjustment'].$post(args, options))
}

export async function getV1ObjectCreditBalanceAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['credit-balance-adjustment'][':id'].$get(args, options),
  )
}

export async function putV1ObjectCreditBalanceAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['credit-balance-adjustment'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['credit-balance-adjustment'][':id'].$put(args, options),
  )
}

export async function postV1ObjectExport(
  args: InferRequestType<typeof client.v1.object.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.export.$post(args, options))
}

export async function getV1ObjectExportId(
  args: InferRequestType<(typeof client.v1.object.export)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.export[':id'].$get(args, options))
}

export async function postV1ObjectFeature(
  args: InferRequestType<typeof client.v1.object.feature.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.feature.$post(args, options))
}

export async function getV1ObjectFeatureId(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.feature[':id'].$get(args, options))
}

export async function putV1ObjectFeatureId(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.feature[':id'].$put(args, options))
}

export async function deleteV1ObjectFeatureId(
  args: InferRequestType<(typeof client.v1.object.feature)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.feature[':id'].$delete(args, options))
}

export async function postV1ObjectImport(
  args: InferRequestType<typeof client.v1.object.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.import.$post(args, options))
}

export async function getV1ObjectImportId(
  args: InferRequestType<(typeof client.v1.object.import)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.import[':id'].$get(args, options))
}

export async function postV1ObjectInvoiceAdjustment(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-adjustment'].$post(args, options))
}

export async function getV1ObjectInvoiceAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-adjustment'][':id'].$get(args, options))
}

export async function putV1ObjectInvoiceAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-adjustment'][':id'].$put(args, options))
}

export async function deleteV1ObjectInvoiceAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-adjustment'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-adjustment'][':id'].$delete(args, options))
}

export async function getV1ObjectInvoiceItemAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-item-adjustment'][':id'].$get(args, options))
}

export async function deleteV1ObjectInvoiceItemAdjustmentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-item-adjustment'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['invoice-item-adjustment'][':id'].$delete(args, options),
  )
}

export async function getV1ObjectInvoiceItemId(
  args: InferRequestType<(typeof client.v1.object)['invoice-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-item'][':id'].$get(args, options))
}

export async function postV1ObjectInvoicePayment(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-payment'].$post(args, options))
}

export async function getV1ObjectInvoicePaymentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-payment'][':id'].$get(args, options))
}

export async function putV1ObjectInvoicePaymentId(
  args: InferRequestType<(typeof client.v1.object)['invoice-payment'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-payment'][':id'].$put(args, options))
}

export async function getV1ObjectInvoiceSplitItemId(
  args: InferRequestType<(typeof client.v1.object)['invoice-split-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-split-item'][':id'].$get(args, options))
}

export async function getV1ObjectInvoiceSplitId(
  args: InferRequestType<(typeof client.v1.object)['invoice-split'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['invoice-split'][':id'].$get(args, options))
}

export async function getV1ObjectInvoiceId(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.invoice[':id'].$get(args, options))
}

export async function putV1ObjectInvoiceId(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.invoice[':id'].$put(args, options))
}

export async function deleteV1ObjectInvoiceId(
  args: InferRequestType<(typeof client.v1.object.invoice)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.invoice[':id'].$delete(args, options))
}

export async function postV1ObjectPayment(
  args: InferRequestType<typeof client.v1.object.payment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.payment.$post(args, options))
}

export async function postV1ObjectPaymentMethod(
  args: InferRequestType<(typeof client.v1.object)['payment-method']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-method'].$post(args, options))
}

export async function getV1ObjectPaymentMethodSnapshotId(
  args: InferRequestType<(typeof client.v1.object)['payment-method-snapshot'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-method-snapshot'][':id'].$get(args, options))
}

export async function getV1ObjectPaymentMethodTransactionLogId(
  args: InferRequestType<
    (typeof client.v1.object)['payment-method-transaction-log'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['payment-method-transaction-log'][':id'].$get(args, options),
  )
}

export async function getV1ObjectPaymentMethodId(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-method'][':id'].$get(args, options))
}

export async function putV1ObjectPaymentMethodId(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-method'][':id'].$put(args, options))
}

export async function deleteV1ObjectPaymentMethodId(
  args: InferRequestType<(typeof client.v1.object)['payment-method'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-method'][':id'].$delete(args, options))
}

export async function getV1ObjectPaymentTransactionLogId(
  args: InferRequestType<(typeof client.v1.object)['payment-transaction-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['payment-transaction-log'][':id'].$get(args, options))
}

export async function getV1ObjectPaymentId(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.payment[':id'].$get(args, options))
}

export async function putV1ObjectPaymentId(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.payment[':id'].$put(args, options))
}

export async function deleteV1ObjectPaymentId(
  args: InferRequestType<(typeof client.v1.object.payment)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.payment[':id'].$delete(args, options))
}

export async function postV1ObjectProduct(
  args: InferRequestType<typeof client.v1.object.product.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.product.$post(args, options))
}

export async function getV1ObjectProductFeatureId(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-feature'][':id'].$get(args, options))
}

export async function deleteV1ObjectProductFeatureId(
  args: InferRequestType<(typeof client.v1.object)['product-feature'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-feature'][':id'].$delete(args, options))
}

export async function postV1ObjectProductRatePlan(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-rate-plan'].$post(args, options))
}

export async function postV1ObjectProductRatePlanCharge(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-rate-plan-charge'].$post(args, options))
}

export async function getV1ObjectProductRatePlanChargeTierId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['product-rate-plan-charge-tier'][':id'].$get(args, options),
  )
}

export async function putV1ObjectProductRatePlanChargeTierId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge-tier'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['product-rate-plan-charge-tier'][':id'].$put(args, options),
  )
}

export async function getV1ObjectProductRatePlanChargeId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['product-rate-plan-charge'][':id'].$get(args, options),
  )
}

export async function putV1ObjectProductRatePlanChargeId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['product-rate-plan-charge'][':id'].$put(args, options),
  )
}

export async function deleteV1ObjectProductRatePlanChargeId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan-charge'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['product-rate-plan-charge'][':id'].$delete(args, options),
  )
}

export async function getV1ObjectProductRatePlanId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-rate-plan'][':id'].$get(args, options))
}

export async function putV1ObjectProductRatePlanId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-rate-plan'][':id'].$put(args, options))
}

export async function deleteV1ObjectProductRatePlanId(
  args: InferRequestType<(typeof client.v1.object)['product-rate-plan'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['product-rate-plan'][':id'].$delete(args, options))
}

export async function getV1ObjectProductId(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.product[':id'].$get(args, options))
}

export async function putV1ObjectProductId(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.product[':id'].$put(args, options))
}

export async function deleteV1ObjectProductId(
  args: InferRequestType<(typeof client.v1.object.product)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.product[':id'].$delete(args, options))
}

export async function getV1ObjectRatePlanChargeTierId(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge-tier'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['rate-plan-charge-tier'][':id'].$get(args, options))
}

export async function getV1ObjectRatePlanChargeId(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['rate-plan-charge'][':id'].$get(args, options))
}

export async function putV1ObjectRatePlanChargeId(
  args: InferRequestType<(typeof client.v1.object)['rate-plan-charge'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['rate-plan-charge'][':id'].$put(args, options))
}

export async function getV1ObjectRatePlanId(
  args: InferRequestType<(typeof client.v1.object)['rate-plan'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['rate-plan'][':id'].$get(args, options))
}

export async function postV1ObjectRefund(
  args: InferRequestType<typeof client.v1.object.refund.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.refund.$post(args, options))
}

export async function getV1ObjectRefundInvoicePaymentId(
  args: InferRequestType<(typeof client.v1.object)['refund-invoice-payment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['refund-invoice-payment'][':id'].$get(args, options))
}

export async function getV1ObjectRefundTransactionLogId(
  args: InferRequestType<(typeof client.v1.object)['refund-transaction-log'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['refund-transaction-log'][':id'].$get(args, options))
}

export async function getV1ObjectRefundId(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.refund[':id'].$get(args, options))
}

export async function putV1ObjectRefundId(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.refund[':id'].$put(args, options))
}

export async function deleteV1ObjectRefundId(
  args: InferRequestType<(typeof client.v1.object.refund)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.refund[':id'].$delete(args, options))
}

export async function getV1ObjectSubscriptionProductFeatureId(
  args: InferRequestType<(typeof client.v1.object)['subscription-product-feature'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.object['subscription-product-feature'][':id'].$get(args, options),
  )
}

export async function getV1ObjectSubscriptionId(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.subscription[':id'].$get(args, options))
}

export async function putV1ObjectSubscriptionId(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.subscription[':id'].$put(args, options))
}

export async function deleteV1ObjectSubscriptionId(
  args: InferRequestType<(typeof client.v1.object.subscription)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.subscription[':id'].$delete(args, options))
}

export async function postV1ObjectTaxationItem(
  args: InferRequestType<(typeof client.v1.object)['taxation-item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['taxation-item'].$post(args, options))
}

export async function getV1ObjectTaxationItemId(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['taxation-item'][':id'].$get(args, options))
}

export async function putV1ObjectTaxationItemId(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['taxation-item'][':id'].$put(args, options))
}

export async function deleteV1ObjectTaxationItemId(
  args: InferRequestType<(typeof client.v1.object)['taxation-item'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['taxation-item'][':id'].$delete(args, options))
}

export async function postV1ObjectUnitOfMeasure(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['unit-of-measure'].$post(args, options))
}

export async function getV1ObjectUnitOfMeasureId(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['unit-of-measure'][':id'].$get(args, options))
}

export async function putV1ObjectUnitOfMeasureId(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['unit-of-measure'][':id'].$put(args, options))
}

export async function deleteV1ObjectUnitOfMeasureId(
  args: InferRequestType<(typeof client.v1.object)['unit-of-measure'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object['unit-of-measure'][':id'].$delete(args, options))
}

export async function postV1ObjectUsage(
  args: InferRequestType<typeof client.v1.object.usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.usage.$post(args, options))
}

export async function getV1ObjectUsageId(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.usage[':id'].$get(args, options))
}

export async function putV1ObjectUsageId(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.usage[':id'].$put(args, options))
}

export async function deleteV1ObjectUsageId(
  args: InferRequestType<(typeof client.v1.object.usage)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.object.usage[':id'].$delete(args, options))
}

export async function postV1OperationsBillingPreview(
  args: InferRequestType<(typeof client.v1.operations)['billing-preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations['billing-preview'].$post(args, options))
}

export async function postV1OperationsInvoiceCollect(
  args: InferRequestType<(typeof client.v1.operations)['invoice-collect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations['invoice-collect'].$post(args, options))
}

export async function postV1OrderLineItemsBulk(
  args: InferRequestType<(typeof client.v1)['order-line-items']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['order-line-items'].bulk.$post(args, options))
}

export async function getV1OrderLineItemsItemId(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['order-line-items'][':itemId'].$get(args, options))
}

export async function putV1OrderLineItemsItemId(
  args: InferRequestType<(typeof client.v1)['order-line-items'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['order-line-items'][':itemId'].$put(args, options))
}

export async function getV1Orders(
  args: InferRequestType<typeof client.v1.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.$get(args, options))
}

export async function postV1Orders(
  args: InferRequestType<typeof client.v1.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.$post(args, options))
}

export async function getV1OrdersInvoiceOwnerAccountNumber(
  args: InferRequestType<(typeof client.v1.orders.invoiceOwner)[':accountNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.invoiceOwner[':accountNumber'].$get(args, options))
}

export async function postV1OrdersPreview(
  args: InferRequestType<typeof client.v1.orders.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.preview.$post(args, options))
}

export async function getV1OrdersSubscriptionSubscriptionNumber(
  args: InferRequestType<(typeof client.v1.orders.subscription)[':subscriptionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.orders.subscription[':subscriptionNumber'].$get(args, options),
  )
}

export async function getV1OrdersSubscriptionOwnerAccountNumber(
  args: InferRequestType<(typeof client.v1.orders.subscriptionOwner)[':accountNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.orders.subscriptionOwner[':accountNumber'].$get(args, options),
  )
}

export async function getV1OrdersTermSubscriptionNumber(
  args: InferRequestType<(typeof client.v1.orders.term)[':subscriptionNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders.term[':subscriptionNumber'].$get(args, options))
}

export async function getV1OrdersOrderNumber(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderNumber'].$get(args, options))
}

export async function deleteV1OrdersOrderNumber(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderNumber'].$delete(args, options))
}

export async function putV1OrdersOrderNumberCustomFields(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['customFields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderNumber'].customFields.$put(args, options))
}

export async function getV1OrdersOrderNumberEvergreenMetricsSubscriptionNumber(
  args: InferRequestType<
    (typeof client.v1.orders)[':orderNumber']['evergreenMetrics'][':subscriptionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.orders[':orderNumber'].evergreenMetrics[':subscriptionNumber'].$get(args, options),
  )
}

export async function getV1OrdersOrderNumberRampMetrics(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['ramp-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderNumber']['ramp-metrics'].$get(args, options))
}

export async function putV1OrdersOrderNumberTriggerDates(
  args: InferRequestType<(typeof client.v1.orders)[':orderNumber']['triggerDates']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.orders[':orderNumber'].triggerDates.$put(args, options))
}

export async function postV1PaymentMethods(
  args: InferRequestType<(typeof client.v1)['payment-methods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-methods'].$post(args, options))
}

export async function postV1PaymentMethodsCreditCards(
  args: InferRequestType<(typeof client.v1)['payment-methods']['credit-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-methods']['credit-cards'].$post(args, options))
}

export async function getV1PaymentMethodsCreditCardsAccountsAccountKey(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards']['accounts'][':account-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods']['credit-cards'].accounts[':account-key'].$get(args, options),
  )
}

export async function putV1PaymentMethodsCreditCardsPaymentMethodId(
  args: InferRequestType<
    (typeof client.v1)['payment-methods']['credit-cards'][':payment-method-id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods']['credit-cards'][':payment-method-id'].$put(args, options),
  )
}

export async function postV1PaymentMethodsDecryption(
  args: InferRequestType<(typeof client.v1)['payment-methods']['decryption']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-methods'].decryption.$post(args, options))
}

export async function getV1PaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-methods'][':payment-method-id'].$get(args, options))
}

export async function putV1PaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-methods'][':payment-method-id'].$put(args, options))
}

export async function deleteV1PaymentMethodsPaymentMethodId(
  args: InferRequestType<(typeof client.v1)['payment-methods'][':payment-method-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].$delete(args, options),
  )
}

export async function postV1PaymentMethodsPaymentMethodIdAuthorize(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['authorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].authorize.$post(args, options),
  )
}

export async function getV1PaymentMethodsPaymentMethodIdProfiles(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].profiles.$get(args, options),
  )
}

export async function postV1PaymentMethodsPaymentMethodIdProfiles(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].profiles.$post(args, options),
  )
}

export async function postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberCancel(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].profiles[':profile-number'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function postV1PaymentMethodsPaymentMethodIdProfilesProfileNumberExpire(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['profiles'][':profile-number']['expire']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].profiles[':profile-number'].expire.$post(
      args,
      options,
    ),
  )
}

export async function putV1PaymentMethodsPaymentMethodIdScrub(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['scrub']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].scrub.$put(args, options),
  )
}

export async function putV1PaymentMethodsPaymentMethodIdVerify(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['verify']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].verify.$put(args, options),
  )
}

export async function postV1PaymentMethodsPaymentMethodIdVoidAuthorize(
  args: InferRequestType<
    (typeof client.v1)['payment-methods'][':payment-method-id']['voidAuthorize']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['payment-methods'][':payment-method-id'].voidAuthorize.$post(args, options),
  )
}

export async function getV1PaymentRuns(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'].$get(args, options))
}

export async function postV1PaymentRuns(
  args: InferRequestType<(typeof client.v1)['payment-runs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'].$post(args, options))
}

export async function getV1PaymentRunsPaymentRunId(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'][':paymentRunId'].$get(args, options))
}

export async function putV1PaymentRunsPaymentRunId(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'][':paymentRunId'].$put(args, options))
}

export async function deleteV1PaymentRunsPaymentRunId(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'][':paymentRunId'].$delete(args, options))
}

export async function getV1PaymentRunsPaymentRunIdData(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'][':paymentRunId'].data.$get(args, options))
}

export async function getV1PaymentRunsPaymentRunIdSummary(
  args: InferRequestType<(typeof client.v1)['payment-runs'][':paymentRunId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['payment-runs'][':paymentRunId'].summary.$get(args, options))
}

export async function getV1Paymentgateways(
  args: InferRequestType<typeof client.v1.paymentgateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.paymentgateways.$get(args, options))
}

export async function getV1Payments(
  args: InferRequestType<typeof client.v1.payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$get(args, options))
}

export async function postV1Payments(
  args: InferRequestType<typeof client.v1.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments.$post(args, options))
}

export async function getV1PaymentsPaymentId(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].$get(args, options))
}

export async function putV1PaymentsPaymentId(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].$put(args, options))
}

export async function deleteV1PaymentsPaymentId(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].$delete(args, options))
}

export async function putV1PaymentsPaymentIdApply(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['apply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].apply.$put(args, options))
}

export async function putV1PaymentsPaymentIdCancel(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].cancel.$put(args, options))
}

export async function getV1PaymentsPaymentIdParts(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].parts.$get(args, options))
}

export async function getV1PaymentsPaymentIdPartsPartid(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['parts'][':partid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].parts[':partid'].$get(args, options))
}

export async function getV1PaymentsPaymentIdPartsPartidItemparts(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payments[':paymentId'].parts[':partid'].itemparts.$get(args, options),
  )
}

export async function getV1PaymentsPaymentIdPartsPartidItempartsItempartid(
  args: InferRequestType<
    (typeof client.v1.payments)[':paymentId']['parts'][':partid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payments[':paymentId'].parts[':partid'].itemparts[':itempartid'].$get(args, options),
  )
}

export async function postV1PaymentsPaymentIdRefunds(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].refunds.$post(args, options))
}

export async function putV1PaymentsPaymentIdTransfer(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['transfer']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].transfer.$put(args, options))
}

export async function putV1PaymentsPaymentIdUnapply(
  args: InferRequestType<(typeof client.v1.payments)[':paymentId']['unapply']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payments[':paymentId'].unapply.$put(args, options))
}

export async function postV1QuotesDocument(
  args: InferRequestType<typeof client.v1.quotes.document.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.document.$post(args, options))
}

export async function getV1RampsRampNumber(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ramps[':rampNumber'].$get(args, options))
}

export async function getV1RampsRampNumberRampMetrics(
  args: InferRequestType<(typeof client.v1.ramps)[':rampNumber']['ramp-metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ramps[':rampNumber']['ramp-metrics'].$get(args, options))
}

export async function getV1RateplanProductIdProductRatePlan(
  args: InferRequestType<(typeof client.v1.rateplan)[':product_id']['productRatePlan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rateplan[':product_id'].productRatePlan.$get(args, options))
}

export async function getV1Refunds(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds.$get(args, options))
}

export async function postV1RefundsRefundIdReconcile(
  args: InferRequestType<(typeof client.v1.refunds)[':refund-id']['reconcile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refund-id'].reconcile.$post(args, options))
}

export async function getV1RefundsRefundId(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refundId'].$get(args, options))
}

export async function putV1RefundsRefundId(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refundId'].$put(args, options))
}

export async function deleteV1RefundsRefundId(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refundId'].$delete(args, options))
}

export async function putV1RefundsRefundIdCancel(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refundId'].cancel.$put(args, options))
}

export async function getV1RefundsRefundIdParts(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refundId'].parts.$get(args, options))
}

export async function getV1RefundsRefundIdPartsRefundpartid(
  args: InferRequestType<(typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.refunds[':refundId'].parts[':refundpartid'].$get(args, options),
  )
}

export async function getV1RefundsRefundIdPartsRefundpartidItemparts(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts.$get(args, options),
  )
}

export async function getV1RefundsRefundIdPartsRefundpartidItempartsItempartid(
  args: InferRequestType<
    (typeof client.v1.refunds)[':refundId']['parts'][':refundpartid']['itemparts'][':itempartid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.refunds[':refundId'].parts[':refundpartid'].itemparts[':itempartid'].$get(
      args,
      options,
    ),
  )
}

export async function getV1RevenueEventsRevenueSchedulesRsNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-events']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-events']['revenue-schedules'][':rs-number'].$get(args, options),
  )
}

export async function getV1RevenueEventsEventNumber(
  args: InferRequestType<(typeof client.v1)['revenue-events'][':event-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['revenue-events'][':event-number'].$get(args, options))
}

export async function getV1RevenueItemsChargeRevenueSummariesCrsNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['charge-revenue-summaries'][':crs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-items']['charge-revenue-summaries'][':crs-number'].$get(args, options),
  )
}

export async function getV1RevenueItemsRevenueEventsEventNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-items']['revenue-events'][':event-number'].$get(args, options),
  )
}

export async function putV1RevenueItemsRevenueEventsEventNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-events'][':event-number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-items']['revenue-events'][':event-number'].$put(args, options),
  )
}

export async function getV1RevenueItemsRevenueSchedulesRsNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-items']['revenue-schedules'][':rs-number'].$get(args, options),
  )
}

export async function putV1RevenueItemsRevenueSchedulesRsNumber(
  args: InferRequestType<
    (typeof client.v1)['revenue-items']['revenue-schedules'][':rs-number']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-items']['revenue-schedules'][':rs-number'].$put(args, options),
  )
}

export async function getV1RevenueRecognitionRulesProductChargesChargeKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['product-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-recognition-rules']['product-charges'][':charge-key'].$get(args, options),
  )
}

export async function getV1RevenueRecognitionRulesSubscriptionChargesChargeKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-recognition-rules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-recognition-rules']['subscription-charges'][':charge-key'].$get(
      args,
      options,
    ),
  )
}

export async function getV1RevenueSchedulesCreditMemoItemsCmiId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$get(args, options),
  )
}

export async function postV1RevenueSchedulesCreditMemoItemsCmiId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'].$post(args, options),
  )
}

export async function postV1RevenueSchedulesCreditMemoItemsCmiIdDistributeRevenueWithDateRange(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['credit-memo-items'][':cmi-id']['distribute-revenue-with-date-range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['credit-memo-items'][':cmi-id'][
      'distribute-revenue-with-date-range'
    ].$post(args, options),
  )
}

export async function getV1RevenueSchedulesDebitMemoItemsDmiId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$get(args, options),
  )
}

export async function postV1RevenueSchedulesDebitMemoItemsDmiId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'].$post(args, options),
  )
}

export async function postV1RevenueSchedulesDebitMemoItemsDmiIdDistributeRevenueWithDateRange(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['debit-memo-items'][':dmi-id']['distribute-revenue-with-date-range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['debit-memo-items'][':dmi-id'][
      'distribute-revenue-with-date-range'
    ].$post(args, options),
  )
}

export async function getV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$get(
      args,
      options,
    ),
  )
}

export async function postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'].$post(
      args,
      options,
    ),
  )
}

export async function postV1RevenueSchedulesInvoiceItemAdjustmentsInvoiceItemAdjKeyDistributeRevenueWithDateRange(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key']['distribute-revenue-with-date-range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-item-adjustments'][':invoice-item-adj-key'][
      'distribute-revenue-with-date-range'
    ].$post(args, options),
  )
}

export async function getV1RevenueSchedulesInvoiceItemsInvoiceItemId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$get(args, options),
  )
}

export async function postV1RevenueSchedulesInvoiceItemsInvoiceItemId(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'].$post(args, options),
  )
}

export async function postV1RevenueSchedulesInvoiceItemsInvoiceItemIdDistributeRevenueWithDateRange(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['invoice-items'][':invoice-item-id']['distribute-revenue-with-date-range']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['invoice-items'][':invoice-item-id'][
      'distribute-revenue-with-date-range'
    ].$post(args, options),
  )
}

export async function getV1RevenueSchedulesProductChargesChargeKeyAccountKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['product-charges'][':charge-key'][':account-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['product-charges'][':charge-key'][':account-key'].$get(
      args,
      options,
    ),
  )
}

export async function getV1RevenueSchedulesSubscriptionChargesChargeKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$get(args, options),
  )
}

export async function postV1RevenueSchedulesSubscriptionChargesChargeKey(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules']['subscription-charges'][':charge-key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules']['subscription-charges'][':charge-key'].$post(args, options),
  )
}

export async function getV1RevenueSchedulesRsNumber(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['revenue-schedules'][':rs-number'].$get(args, options))
}

export async function deleteV1RevenueSchedulesRsNumber(
  args: InferRequestType<(typeof client.v1)['revenue-schedules'][':rs-number']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['revenue-schedules'][':rs-number'].$delete(args, options))
}

export async function putV1RevenueSchedulesRsNumberBasicInformation(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules'][':rs-number']['basic-information']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules'][':rs-number']['basic-information'].$put(args, options),
  )
}

export async function putV1RevenueSchedulesRsNumberDistributeRevenueAcrossAccountingPeriods(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-across-accounting-periods']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules'][':rs-number'][
      'distribute-revenue-across-accounting-periods'
    ].$put(args, options),
  )
}

export async function putV1RevenueSchedulesRsNumberDistributeRevenueOnSpecificDate(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules'][':rs-number']['distribute-revenue-on-specific-date'].$put(
      args,
      options,
    ),
  )
}

export async function putV1RevenueSchedulesRsNumberDistributeRevenueWithDateRange(
  args: InferRequestType<
    (typeof client.v1)['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['revenue-schedules'][':rs-number']['distribute-revenue-with-date-range'].$put(
      args,
      options,
    ),
  )
}

export async function putV1RevproAccountingCodes(
  args: InferRequestType<(typeof client.v1)['revpro-accounting-codes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['revpro-accounting-codes'].$put(args, options))
}

export async function postV1RsaSignatures(
  args: InferRequestType<(typeof client.v1)['rsa-signatures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['rsa-signatures'].$post(args, options))
}

export async function postV1RsaSignaturesDecrypt(
  args: InferRequestType<(typeof client.v1)['rsa-signatures']['decrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['rsa-signatures'].decrypt.$post(args, options))
}

export async function getV1SequenceSets(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sequence-sets'].$get(args, options))
}

export async function postV1SequenceSets(
  args: InferRequestType<(typeof client.v1)['sequence-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sequence-sets'].$post(args, options))
}

export async function getV1SequenceSetsId(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sequence-sets'][':id'].$get(args, options))
}

export async function putV1SequenceSetsId(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sequence-sets'][':id'].$put(args, options))
}

export async function deleteV1SequenceSetsId(
  args: InferRequestType<(typeof client.v1)['sequence-sets'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['sequence-sets'][':id'].$delete(args, options))
}

export async function getV1SettingsFinanceRevenueAutomationStartDate(
  args: InferRequestType<
    (typeof client.v1.settings.finance)['revenue-automation-start-date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.settings.finance['revenue-automation-start-date'].$get(args, options),
  )
}

export async function postV1Subscriptions(
  args: InferRequestType<typeof client.v1.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.$post(args, options))
}

export async function getV1SubscriptionsAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.subscriptions.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.accounts[':account-key'].$get(args, options))
}

export async function postV1SubscriptionsPreview(
  args: InferRequestType<typeof client.v1.subscriptions.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.preview.$post(args, options))
}

export async function getV1SubscriptionsSubscriptionKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscription-key'].$get(args, options))
}

export async function putV1SubscriptionsSubscriptionKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscription-key'].$put(args, options))
}

export async function putV1SubscriptionsSubscriptionKeyCancel(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription-key'].cancel.$put(args, options),
  )
}

export async function putV1SubscriptionsSubscriptionKeyRenew(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['renew']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscription-key'].renew.$put(args, options))
}

export async function putV1SubscriptionsSubscriptionKeyResume(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['resume']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription-key'].resume.$put(args, options),
  )
}

export async function putV1SubscriptionsSubscriptionKeySuspend(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription-key']['suspend']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription-key'].suspend.$put(args, options),
  )
}

export async function getV1SubscriptionsSubscriptionKeyVersionsVersion(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription-key']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription-key'].versions[':version'].$get(args, options),
  )
}

export async function getV1SubscriptionsSubscriptionKeyRampMetrics(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionKey']['ramp-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscriptionKey']['ramp-metrics'].$get(args, options),
  )
}

export async function getV1SubscriptionsSubscriptionKeyRamps(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscriptionKey']['ramps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscriptionKey'].ramps.$get(args, options))
}

export async function putV1SubscriptionsSubscriptionNumberCustomFields(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionNumber']['customFields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscriptionNumber'].customFields.$put(args, options),
  )
}

export async function putV1SubscriptionsSubscriptionNumberVersionsVersionCustomFields(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscriptionNumber']['versions'][':version']['customFields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscriptionNumber'].versions[':version'].customFields.$put(
      args,
      options,
    ),
  )
}

export async function getV1TaxationitemsId(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxationitems[':id'].$get(args, options))
}

export async function putV1TaxationitemsId(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxationitems[':id'].$put(args, options))
}

export async function deleteV1TaxationitemsId(
  args: InferRequestType<(typeof client.v1.taxationitems)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.taxationitems[':id'].$delete(args, options))
}

export async function getV1TransactionsInvoicesAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.transactions.invoices.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions.invoices.accounts[':account-key'].$get(args, options),
  )
}

export async function getV1TransactionsPaymentsAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.transactions.payments.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.transactions.payments.accounts[':account-key'].$get(args, options),
  )
}

export async function postV1Usage(
  args: InferRequestType<typeof client.v1.usage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.usage.$post(args, options))
}

export async function getV1UsageAccountsAccountKey(
  args: InferRequestType<(typeof client.v1.usage.accounts)[':account-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.usage.accounts[':account-key'].$get(args, options))
}

export async function putV1UsersUsernameAcceptAccess(
  args: InferRequestType<(typeof client.v1.users)[':username']['accept-access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':username']['accept-access'].$put(args, options))
}

export async function getV1UsersUsernameAccessibleEntities(
  args: InferRequestType<(typeof client.v1.users)[':username']['accessible-entities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':username']['accessible-entities'].$get(args, options),
  )
}

export async function putV1UsersUsernameDenyAccess(
  args: InferRequestType<(typeof client.v1.users)[':username']['deny-access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':username']['deny-access'].$put(args, options))
}

export async function putV1UsersUsernameRequestAccess(
  args: InferRequestType<(typeof client.v1.users)[':username']['request-access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':username']['request-access'].$put(args, options))
}

export async function getWorkflows(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$get(args, options))
}

export async function postWorkflowsImport(
  args: InferRequestType<typeof client.workflows.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.import.$post(args, options))
}

export async function getWorkflowsMetricsJson(
  args: InferRequestType<(typeof client.workflows)['metrics.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows['metrics.json'].$get(args, options))
}

export async function getWorkflowsTasks(
  args: InferRequestType<typeof client.workflows.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.tasks.$get(args, options))
}

export async function putWorkflowsTasksBatchUpdate(
  args: InferRequestType<typeof client.workflows.tasks.batch_update.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.tasks.batch_update.$put(args, options))
}

export async function getWorkflowsTasksTaskId(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.tasks[':task_id'].$get(args, options))
}

export async function postWorkflowsTasksTaskIdRerun(
  args: InferRequestType<(typeof client.workflows.tasks)[':task_id']['rerun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.tasks[':task_id'].rerun.$post(args, options))
}

export async function getWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].$get(args, options))
}

export async function deleteWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].$delete(args, options))
}

export async function patchWorkflowsWorkflowId(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].$patch(args, options))
}

export async function getWorkflowsWorkflowIdExport(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].export.$get(args, options))
}

export async function postWorkflowsWorkflowIdRun(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].run.$post(args, options))
}
