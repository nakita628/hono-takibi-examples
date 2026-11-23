import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getServiceInformation(options?: ClientRequestOptions) {
  return await parseResponse(client.service_information.$get(undefined, options))
}

export async function getV21(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].$get(undefined, options))
}

export async function postV21Accounts(
  args: InferRequestType<(typeof client)['v2.1']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts.$post(args, options))
}

export async function getV21AccountsProvisioning(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].accounts.provisioning.$get(undefined, options))
}

export async function getV21AccountsAccountId(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].$get(args, options))
}

export async function deleteV21AccountsAccountId(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].$delete(args, options))
}

export async function getV21AccountsAccountIdBillingCharges(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_charges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_charges.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingInvoices(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_invoices.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices'][':invoiceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_invoices[':invoiceId'].$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingInvoicesPastDue(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_invoices_past_due']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_invoices_past_due.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingPayments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_payments.$get(args, options),
  )
}

export async function postV21AccountsAccountIdBillingPayments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_payments.$post(args, options),
  )
}

export async function getV21AccountsAccountIdBillingPaymentsPaymentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_payments[':paymentId'].$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingPlan(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].billing_plan.$get(args, options))
}

export async function putV21AccountsAccountIdBillingPlan(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].billing_plan.$put(args, options))
}

export async function getV21AccountsAccountIdBillingPlanCreditCard(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['credit_card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_plan.credit_card.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBillingPlanDowngrade(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_plan.downgrade.$get(args, options),
  )
}

export async function putV21AccountsAccountIdBillingPlanDowngrade(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['downgrade']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_plan.downgrade.$put(args, options),
  )
}

export async function putV21AccountsAccountIdBillingPlanPurchasedEnvelopes(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['billing_plan']['purchased_envelopes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].billing_plan.purchased_envelopes.$put(args, options),
  )
}

export async function getV21AccountsAccountIdBrands(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].brands.$get(args, options))
}

export async function postV21AccountsAccountIdBrands(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].brands.$post(args, options))
}

export async function deleteV21AccountsAccountIdBrands(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['brands']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].brands.$delete(args, options))
}

export async function getV21AccountsAccountIdBrandsBrandId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdBrandsBrandId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdBrandsBrandId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdBrandsBrandIdFile(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].file.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBrandsBrandIdLogosLogoType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdBrandsBrandIdLogosLogoType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdBrandsBrandIdLogosLogoType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['logos'][':logoType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].logos[':logoType'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdBrandsBrandIdResources(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].resources.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].resources[':resourceContentType'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['brands'][':brandId']['resources'][':resourceContentType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].brands[':brandId'].resources[':resourceContentType'].$put(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdBulkSendBatch(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_batch.$get(args, options),
  )
}

export async function getV21AccountsAccountIdBulkSendBatchBulkSendBatchId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdBulkSendBatchBulkSendBatchId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopes(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId']['envelopes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'].envelopes.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkAction(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_batch'][':bulkSendBatchId'][':bulkAction']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_batch[':bulkSendBatchId'][':bulkAction'].$put(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdBulkSendLists(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists.$get(args, options),
  )
}

export async function postV21AccountsAccountIdBulkSendLists(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists.$post(args, options),
  )
}

export async function getV21AccountsAccountIdBulkSendListsBulkSendListId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdBulkSendListsBulkSendListId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdBulkSendListsBulkSendListId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].$delete(args, options),
  )
}

export async function postV21AccountsAccountIdBulkSendListsBulkSendListIdSend(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['send']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].send.$post(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdBulkSendListsBulkSendListIdTest(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['bulk_send_lists'][':bulkSendListId']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].bulk_send_lists[':bulkSendListId'].test.$post(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdCaptiveRecipientsRecipientPart(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['captive_recipients'][':recipientPart']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].captive_recipients[':recipientPart'].$delete(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdChunkedUploads(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].chunked_uploads.$post(args, options),
  )
}

export async function getV21AccountsAccountIdChunkedUploadsChunkedUploadId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdChunkedUploadsChunkedUploadId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdChunkedUploadsChunkedUploadId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'].$delete(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdChunkedUploadsChunkedUploadIdChunkedUploadPartSeq(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['chunked_uploads'][':chunkedUploadId'][':chunkedUploadPartSeq']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].chunked_uploads[':chunkedUploadId'][
      ':chunkedUploadPartSeq'
    ].$put(args, options),
  )
}

export async function getV21AccountsAccountIdConnect(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].connect.$get(args, options))
}

export async function putV21AccountsAccountIdConnect(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].connect.$put(args, options))
}

export async function postV21AccountsAccountIdConnect(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['connect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].connect.$post(args, options))
}

export async function postV21AccountsAccountIdConnectEnvelopesPublishHistorical(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['publish']['historical']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.envelopes.publish.historical.$post(args, options),
  )
}

export async function putV21AccountsAccountIdConnectEnvelopesRetryQueue(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes']['retry_queue']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.envelopes.retry_queue.$put(args, options),
  )
}

export async function putV21AccountsAccountIdConnectEnvelopesEnvelopeIdRetryQueue(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['envelopes'][':envelopeId']['retry_queue']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.envelopes[':envelopeId'].retry_queue.$put(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdConnectFailures(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.failures.$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdConnectFailuresFailureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['failures'][':failureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.failures[':failureId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdConnectLogs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].connect.logs.$get(args, options))
}

export async function deleteV21AccountsAccountIdConnectLogs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.logs.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdConnectLogsLogId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.logs[':logId'].$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdConnectLogsLogId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['logs'][':logId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.logs[':logId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdConnectOauth(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.oauth.$get(args, options),
  )
}

export async function putV21AccountsAccountIdConnectOauth(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.oauth.$put(args, options),
  )
}

export async function postV21AccountsAccountIdConnectOauth(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.oauth.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdConnectOauth(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect']['oauth']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect.oauth.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdConnectConnectId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect[':connectId'].$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdConnectConnectId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect[':connectId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdConnectConnectIdAllUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['all']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect[':connectId'].all.users.$get(args, options),
  )
}

export async function getV21AccountsAccountIdConnectConnectIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['connect'][':connectId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].connect[':connectId'].users.$get(args, options),
  )
}

export async function getV21AccountsAccountIdConsumerDisclosure(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].consumer_disclosure.$get(args, options),
  )
}

export async function getV21AccountsAccountIdConsumerDisclosureLangCode(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].consumer_disclosure[':langCode'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdConsumerDisclosureLangCode(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['consumer_disclosure'][':langCode']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].consumer_disclosure[':langCode'].$put(args, options),
  )
}

export async function putV21AccountsAccountIdContacts(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].contacts.$put(args, options))
}

export async function postV21AccountsAccountIdContacts(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].contacts.$post(args, options))
}

export async function deleteV21AccountsAccountIdContacts(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['contacts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].contacts.$delete(args, options))
}

export async function getV21AccountsAccountIdContactsContactId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].contacts[':contactId'].$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdContactsContactId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['contacts'][':contactId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].contacts[':contactId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].custom_fields.$get(args, options),
  )
}

export async function postV21AccountsAccountIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].custom_fields.$post(args, options),
  )
}

export async function putV21AccountsAccountIdCustomFieldsCustomFieldId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].custom_fields[':customFieldId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdCustomFieldsCustomFieldId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['custom_fields'][':customFieldId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].custom_fields[':customFieldId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopes(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].envelopes.$get(args, options))
}

export async function postV21AccountsAccountIdEnvelopes(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['envelopes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].envelopes.$post(args, options))
}

export async function putV21AccountsAccountIdEnvelopesStatus(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.status.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesTransferRules(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesTransferRules(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesTransferRules(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.transfer_rules.$post(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.transfer_rules[':envelopeTransferRuleId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesTransferRulesEnvelopeTransferRuleId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes']['transfer_rules'][':envelopeTransferRuleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes.transfer_rules[
      ':envelopeTransferRuleId'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdAttachments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdAttachments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdAttachments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments.$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments[
      ':attachmentId'
    ].$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdAttachmentsAttachmentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['attachments'][':attachmentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].attachments[
      ':attachmentId'
    ].$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEvents(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['audit_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].audit_events.$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscript(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['comments']['transcript']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].comments.transcript.$get(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$put(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$post(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['custom_fields']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].custom_fields.$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].$put(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].fields.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].fields.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].fields.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['fields']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].fields.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdHtmlDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].html_definitions.$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPages(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].pages.$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumber(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].pages[
      ':pageNumber'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].pages[
      ':pageNumber'
    ].page_image.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].pages[
      ':pageNumber'
    ].page_image.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[':documentId'].pages[
      ':pageNumber'
    ].tabs.$get(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdResponsiveHtmlPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['responsive_html_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].responsive_html_preview.$post(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].tabs.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].tabs.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].tabs.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['tabs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].tabs.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].templates.$get(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].templates.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['documents'][':documentId']['templates'][':templateId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].documents[
      ':documentId'
    ].templates[':templateId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$put(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$post(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['email_settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].email_settings.$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdFormData(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['form_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].form_data.$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdHtmlDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['html_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].html_definitions.$get(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].lock.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdNotification(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].notification.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdNotification(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['notification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].notification.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients.$delete(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients']['document_visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[
      ':envelopeId'
    ].recipients.document_visibility.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosure(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].consumer_disclosure.$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCode(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['consumer_disclosure'][':langCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].consumer_disclosure[':langCode'].$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].document_visibility.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['document_visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].document_visibility.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofToken(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['identity_proof_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].identity_proof_token.$post(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].initials_image.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['initials_image']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].initials_image.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignature(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].signature.$get(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].signature_image.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['signature_image']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].signature_image.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].tabs.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].tabs.$put(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].tabs.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['tabs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].tabs.$delete(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['recipients'][':recipientId']['views']['identity_manual_review']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].recipients[
      ':recipientId'
    ].views.identity_manual_review.$post(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdResponsiveHtmlPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['responsive_html_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].responsive_html_preview.$post(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlob(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].tabs_blob.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlob(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['tabs_blob']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].tabs_blob.$put(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].templates.$get(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['templates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].templates.$post(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrect(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.correct.$post(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrect(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['correct']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.correct.$delete(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEdit(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['edit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.edit.$post(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipient(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.recipient.$post(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['recipient_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.recipient_preview.$post(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSender(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['sender']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.sender.$post(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdViewsShared(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['views']['shared']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].views.shared.$post(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.scheduledSending.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.scheduledSending.$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['scheduledSending']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[
      ':envelopeId'
    ].workflow.scheduledSending.$delete(args, options),
  )
}

export async function postV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowSteps(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps.$post(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$get(args, options),
  )
}

export async function putV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdEnvelopesEnvelopeIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['envelopes'][':envelopeId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].envelopes[':envelopeId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdFavoriteTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].favorite_templates.$get(args, options),
  )
}

export async function putV21AccountsAccountIdFavoriteTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].favorite_templates.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdFavoriteTemplates(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['favorite_templates']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].favorite_templates.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdFolders(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].folders.$get(args, options))
}

export async function getV21AccountsAccountIdFoldersFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].folders[':folderId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdFoldersFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['folders'][':folderId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].folders[':folderId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdGroups(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].groups.$get(args, options))
}

export async function putV21AccountsAccountIdGroups(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].groups.$put(args, options))
}

export async function postV21AccountsAccountIdGroups(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].groups.$post(args, options))
}

export async function deleteV21AccountsAccountIdGroups(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].groups.$delete(args, options))
}

export async function getV21AccountsAccountIdGroupsGroupIdBrands(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$get(args, options),
  )
}

export async function putV21AccountsAccountIdGroupsGroupIdBrands(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdGroupsGroupIdBrands(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['brands']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].brands.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdGroupsGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$get(args, options),
  )
}

export async function putV21AccountsAccountIdGroupsGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdGroupsGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['groups'][':groupId']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].groups[':groupId'].users.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdIdentityVerification(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['identity_verification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].identity_verification.$get(args, options),
  )
}

export async function getV21AccountsAccountIdPaymentGatewayAccounts(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['payment_gateway_accounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].payment_gateway_accounts.$get(args, options),
  )
}

export async function getV21AccountsAccountIdPermissionProfiles(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].permission_profiles.$get(args, options),
  )
}

export async function postV21AccountsAccountIdPermissionProfiles(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].permission_profiles.$post(args, options),
  )
}

export async function getV21AccountsAccountIdPermissionProfilesPermissionProfileId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdPermissionProfilesPermissionProfileId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdPermissionProfilesPermissionProfileId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['permission_profiles'][':permissionProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].permission_profiles[':permissionProfileId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdPowerforms(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$get(args, options))
}

export async function postV21AccountsAccountIdPowerforms(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].powerforms.$post(args, options))
}

export async function deleteV21AccountsAccountIdPowerforms(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdPowerformsSenders(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms']['senders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms.senders.$get(args, options),
  )
}

export async function getV21AccountsAccountIdPowerformsPowerFormId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdPowerformsPowerFormId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdPowerformsPowerFormId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdPowerformsPowerFormIdFormData(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['powerforms'][':powerFormId']['form_data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].powerforms[':powerFormId'].form_data.$get(args, options),
  )
}

export async function getV21AccountsAccountIdRecipientNames(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['recipient_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].recipient_names.$get(args, options),
  )
}

export async function getV21AccountsAccountIdSeals(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['seals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].seals.$get(args, options))
}

export async function getV21AccountsAccountIdSearchFoldersSearchFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['search_folders'][':searchFolderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].search_folders[':searchFolderId'].$get(args, options),
  )
}

export async function getV21AccountsAccountIdSettings(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].settings.$get(args, options))
}

export async function putV21AccountsAccountIdSettings(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].settings.$put(args, options))
}

export async function getV21AccountsAccountIdSettingsBccEmailArchives(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.bcc_email_archives.$get(args, options),
  )
}

export async function postV21AccountsAccountIdSettingsBccEmailArchives(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.bcc_email_archives.$post(args, options),
  )
}

export async function getV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.bcc_email_archives[':bccEmailArchiveId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdSettingsBccEmailArchivesBccEmailArchiveId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['bcc_email_archives'][':bccEmailArchiveId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.bcc_email_archives[':bccEmailArchiveId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdSettingsEnoteConfiguration(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.enote_configuration.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSettingsEnoteConfiguration(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.enote_configuration.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdSettingsEnoteConfiguration(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['enote_configuration']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.enote_configuration.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdSettingsEnvelopePurgeConfiguration(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.envelope_purge_configuration.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSettingsEnvelopePurgeConfiguration(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['envelope_purge_configuration']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.envelope_purge_configuration.$put(args, options),
  )
}

export async function getV21AccountsAccountIdSettingsNotificationDefaults(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.notification_defaults.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSettingsNotificationDefaults(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['notification_defaults']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.notification_defaults.$put(args, options),
  )
}

export async function getV21AccountsAccountIdSettingsPasswordRules(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.password_rules.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSettingsPasswordRules(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['password_rules']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.password_rules.$put(args, options),
  )
}

export async function getV21AccountsAccountIdSettingsTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.tabs.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSettingsTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['settings']['tabs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].settings.tabs.$put(args, options),
  )
}

export async function getV21AccountsAccountIdSharedAccess(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].shared_access.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSharedAccess(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['shared_access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].shared_access.$put(args, options),
  )
}

export async function getV21AccountsAccountIdSignatureProviders(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatureProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatureProviders.$get(args, options),
  )
}

export async function getV21AccountsAccountIdSignatures(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].signatures.$get(args, options))
}

export async function putV21AccountsAccountIdSignatures(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].signatures.$put(args, options))
}

export async function postV21AccountsAccountIdSignatures(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['signatures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].signatures.$post(args, options))
}

export async function getV21AccountsAccountIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signatures'][':signatureId'][':imageType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signatures[':signatureId'][':imageType'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdSigningGroups(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups.$get(args, options),
  )
}

export async function putV21AccountsAccountIdSigningGroups(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups.$put(args, options),
  )
}

export async function postV21AccountsAccountIdSigningGroups(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdSigningGroups(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdSigningGroupsSigningGroupId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdSigningGroupsSigningGroupId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdSigningGroupsSigningGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdSigningGroupsSigningGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdSigningGroupsSigningGroupIdUsers(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['signing_groups'][':signingGroupId']['users']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].signing_groups[':signingGroupId'].users.$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdSupportedLanguages(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['supported_languages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].supported_languages.$get(args, options),
  )
}

export async function getV21AccountsAccountIdTabDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].tab_definitions.$get(args, options),
  )
}

export async function postV21AccountsAccountIdTabDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].tab_definitions.$post(args, options),
  )
}

export async function getV21AccountsAccountIdTabDefinitionsCustomTabId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdTabDefinitionsCustomTabId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTabDefinitionsCustomTabId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['tab_definitions'][':customTabId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].tab_definitions[':customTabId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplates(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].templates.$get(args, options))
}

export async function postV21AccountsAccountIdTemplates(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].templates.$post(args, options))
}

export async function getV21AccountsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$put(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$post(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdCustomFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['custom_fields']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].custom_fields.$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdDocuments(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].$put(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].fields.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].fields.$put(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].fields.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFields(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['fields']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].fields.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdHtmlDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['html_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].html_definitions.$get(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPages(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].pages.$get(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumber(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].pages[
      ':pageNumber'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].pages[
      ':pageNumber'
    ].page_image.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['page_image']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].pages[
      ':pageNumber'
    ].page_image.$put(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['pages'][':pageNumber']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[':documentId'].pages[
      ':pageNumber'
    ].tabs.$get(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdResponsiveHtmlPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['responsive_html_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].responsive_html_preview.$post(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].tabs.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].tabs.$put(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].tabs.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['documents'][':documentId']['tabs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].documents[
      ':documentId'
    ].tabs.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdHtmlDefinitions(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['html_definitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].html_definitions.$get(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$put(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdLock(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['lock']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].lock.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdNotification(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].notification.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdNotification(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['notification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].notification.$put(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$put(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients.$delete(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients']['document_visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[
      ':templateId'
    ].recipients.document_visibility.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].$delete(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipients(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['bulk_recipients']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].bulk_recipients.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].document_visibility.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibility(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['document_visibility']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].document_visibility.$put(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].tabs.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].tabs.$put(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].tabs.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabs(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['recipients'][':recipientId']['tabs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].recipients[
      ':recipientId'
    ].tabs.$delete(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdResponsiveHtmlPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['responsive_html_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].responsive_html_preview.$post(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdViewsEdit(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['edit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].views.edit.$post(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['views']['recipient_preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].views.recipient_preview.$post(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdWorkflow(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.scheduledSending.$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.scheduledSending.$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowScheduledSending(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['scheduledSending']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[
      ':templateId'
    ].workflow.scheduledSending.$delete(args, options),
  )
}

export async function postV21AccountsAccountIdTemplatesTemplateIdWorkflowSteps(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps.$post(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$get(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdWorkflowStepsWorkflowStepIdDelayedRouting(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId']['workflow']['steps'][':workflowStepId']['delayedRouting']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'].workflow.steps[
      ':workflowStepId'
    ].delayedRouting.$delete(args, options),
  )
}

export async function putV21AccountsAccountIdTemplatesTemplateIdTemplatePart(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'][':templatePart'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePart(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['templates'][':templateId'][':templatePart']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].templates[':templateId'][':templatePart'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdUnsupportedFileTypes(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['unsupported_file_types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].unsupported_file_types.$get(args, options),
  )
}

export async function getV21AccountsAccountIdUsers(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].users.$get(args, options))
}

export async function putV21AccountsAccountIdUsers(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].users.$put(args, options))
}

export async function postV21AccountsAccountIdUsers(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].users.$post(args, options))
}

export async function deleteV21AccountsAccountIdUsers(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].users.$delete(args, options))
}

export async function getV21AccountsAccountIdUsersUserId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].$put(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdCloudStorage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$get(args, options),
  )
}

export async function postV21AccountsAccountIdUsersUserIdCloudStorage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$post(args, options),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdCloudStorage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdCloudStorageServiceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdCloudStorageServiceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFolders(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].folders.$get(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdUsersUserIdCloudStorageServiceIdFoldersFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['cloud_storage'][':serviceId']['folders'][':folderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].cloud_storage[':serviceId'].folders[
      ':folderId'
    ].$get(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdCustomSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdCustomSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdCustomSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['custom_settings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].custom_settings.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdProfile(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].profile.$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdProfile(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].profile.$put(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdProfileImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdProfileImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdProfileImage(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['profile']['image']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].profile.image.$delete(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].settings.$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdSettings(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].settings.$put(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdSignatures(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdSignatures(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$put(args, options),
  )
}

export async function postV21AccountsAccountIdUsersUserIdSignatures(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures.$post(args, options),
  )
}

export async function getV21AccountsAccountIdUsersUserIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$get(
      args,
      options,
    ),
  )
}

export async function putV21AccountsAccountIdUsersUserIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'].$delete(
      args,
      options,
    ),
  )
}

export async function getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
      ':imageType'
    ].$get(args, options),
  )
}

export async function putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
      ':imageType'
    ].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageType(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['users'][':userId']['signatures'][':signatureId'][':imageType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].users[':userId'].signatures[':signatureId'][
      ':imageType'
    ].$delete(args, options),
  )
}

export async function postV21AccountsAccountIdViewsConsole(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['views']['console']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].views.console.$post(args, options),
  )
}

export async function getV21AccountsAccountIdWatermark(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].watermark.$get(args, options))
}

export async function putV21AccountsAccountIdWatermark(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['watermark']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].watermark.$put(args, options))
}

export async function putV21AccountsAccountIdWatermarkPreview(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['watermark']['preview']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].watermark.preview.$put(args, options),
  )
}

export async function getV21AccountsAccountIdWorkspaces(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].workspaces.$get(args, options))
}

export async function postV21AccountsAccountIdWorkspaces(
  args: InferRequestType<(typeof client)['v2.1']['accounts'][':accountId']['workspaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].accounts[':accountId'].workspaces.$post(args, options))
}

export async function getV21AccountsAccountIdWorkspacesWorkspaceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$get(args, options),
  )
}

export async function putV21AccountsAccountIdWorkspacesWorkspaceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$put(args, options),
  )
}

export async function deleteV21AccountsAccountIdWorkspacesWorkspaceId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].$delete(args, options),
  )
}

export async function getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[':folderId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[':folderId'].$delete(
      args,
      options,
    ),
  )
}

export async function postV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFiles(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[
      ':folderId'
    ].files.$post(args, options),
  )
}

export async function getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[':folderId'].files[
      ':fileId'
    ].$get(args, options),
  )
}

export async function putV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileId(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[':folderId'].files[
      ':fileId'
    ].$put(args, options),
  )
}

export async function getV21AccountsAccountIdWorkspacesWorkspaceIdFoldersFolderIdFilesFileIdPages(
  args: InferRequestType<
    (typeof client)['v2.1']['accounts'][':accountId']['workspaces'][':workspaceId']['folders'][':folderId']['files'][':fileId']['pages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].accounts[':accountId'].workspaces[':workspaceId'].folders[':folderId'].files[
      ':fileId'
    ].pages.$get(args, options),
  )
}

export async function getV21BillingPlans(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].billing_plans.$get(undefined, options))
}

export async function getV21BillingPlansBillingPlanId(
  args: InferRequestType<(typeof client)['v2.1']['billing_plans'][':billingPlanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].billing_plans[':billingPlanId'].$get(args, options))
}

export async function getV21CurrentUserNotary(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].current_user.notary.$get(args, options))
}

export async function putV21CurrentUserNotary(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].current_user.notary.$put(args, options))
}

export async function postV21CurrentUserNotary(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].current_user.notary.$post(args, options))
}

export async function getV21CurrentUserNotaryJournals(
  args: InferRequestType<(typeof client)['v2.1']['current_user']['notary']['journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].current_user.notary.journals.$get(args, options))
}

export async function getV21CurrentUserNotaryJurisdictions(options?: ClientRequestOptions) {
  return await parseResponse(
    client['v2.1'].current_user.notary.jurisdictions.$get(undefined, options),
  )
}

export async function postV21CurrentUserNotaryJurisdictions(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].current_user.notary.jurisdictions.$post(args, options))
}

export async function getV21CurrentUserNotaryJurisdictionsJurisdictionId(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$get(args, options),
  )
}

export async function putV21CurrentUserNotaryJurisdictionsJurisdictionId(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$put(args, options),
  )
}

export async function deleteV21CurrentUserNotaryJurisdictionsJurisdictionId(
  args: InferRequestType<
    (typeof client)['v2.1']['current_user']['notary']['jurisdictions'][':jurisdictionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].current_user.notary.jurisdictions[':jurisdictionId'].$delete(args, options),
  )
}

export async function getV21CurrentUserPasswordRules(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].current_user.password_rules.$get(undefined, options))
}

export async function getV21DiagnosticsRequestLogs(
  args: InferRequestType<(typeof client)['v2.1']['diagnostics']['request_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].diagnostics.request_logs.$get(args, options))
}

export async function deleteV21DiagnosticsRequestLogs(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].diagnostics.request_logs.$delete(undefined, options))
}

export async function getV21DiagnosticsRequestLogsRequestLogId(
  args: InferRequestType<
    (typeof client)['v2.1']['diagnostics']['request_logs'][':requestLogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['v2.1'].diagnostics.request_logs[':requestLogId'].$get(args, options),
  )
}

export async function getV21DiagnosticsSettings(options?: ClientRequestOptions) {
  return await parseResponse(client['v2.1'].diagnostics.settings.$get(undefined, options))
}

export async function putV21DiagnosticsSettings(
  args: InferRequestType<(typeof client)['v2.1']['diagnostics']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['v2.1'].diagnostics.settings.$put(args, options))
}
