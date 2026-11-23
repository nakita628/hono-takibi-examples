import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get3dsecure(
  args: InferRequestType<(typeof client)['3dsecure']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3dsecure'].$get(args, options))
}

export async function post3dsecure(
  args: InferRequestType<(typeof client)['3dsecure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3dsecure'].$post(args, options))
}

export async function get3dsecureId(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['3dsecure'][':id'].$get(args, options))
}

export async function getAml(
  args: InferRequestType<typeof client.aml.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aml.$get(args, options))
}

export async function getAttachments(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments.$get(args, options))
}

export async function postAttachments(
  args: InferRequestType<typeof client.attachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments.$post(args, options))
}

export async function getAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$get(args, options))
}

export async function putAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$put(args, options))
}

export async function deleteAttachmentsId(
  args: InferRequestType<(typeof client.attachments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attachments[':id'].$delete(args, options))
}

export async function getAuthenticationOptions(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-options'].$get(args, options))
}

export async function putAuthenticationOptions(
  args: InferRequestType<(typeof client)['authentication-options']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-options'].$put(args, options))
}

export async function getAuthenticationTokens(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-tokens'].$get(args, options))
}

export async function postAuthenticationTokens(
  args: InferRequestType<(typeof client)['authentication-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-tokens'].$post(args, options))
}

export async function getAuthenticationTokensToken(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-tokens'][':token'].$get(args, options))
}

export async function deleteAuthenticationTokensToken(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['authentication-tokens'][':token'].$delete(args, options))
}

export async function postAuthenticationTokensTokenExchange(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['authentication-tokens'][':token'].exchange.$post(args, options),
  )
}

export async function getBankAccounts(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'].$get(args, options))
}

export async function postBankAccounts(
  args: InferRequestType<(typeof client)['bank-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'].$post(args, options))
}

export async function getBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$get(args, options))
}

export async function putBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$put(args, options))
}

export async function patchBankAccountsId(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].$patch(args, options))
}

export async function postBankAccountsIdDeactivation(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bank-accounts'][':id'].deactivation.$post(args, options))
}

export async function getBlocklists(
  args: InferRequestType<typeof client.blocklists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists.$get(args, options))
}

export async function postBlocklists(
  args: InferRequestType<typeof client.blocklists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists.$post(args, options))
}

export async function getBlocklistsId(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':id'].$get(args, options))
}

export async function putBlocklistsId(
  args: InferRequestType<(typeof client.blocklists)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':id'].$put(args, options))
}

export async function deleteBlocklistsId(
  args: InferRequestType<(typeof client.blocklists)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklists[':id'].$delete(args, options))
}

export async function getCoupons(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$get(args, options))
}

export async function postCoupons(
  args: InferRequestType<typeof client.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$post(args, options))
}

export async function getCouponsRedemptions(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['coupons-redemptions'].$get(args, options))
}

export async function postCouponsRedemptions(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['coupons-redemptions'].$post(args, options))
}

export async function getCouponsRedemptionsId(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['coupons-redemptions'][':id'].$get(args, options))
}

export async function postCouponsRedemptionsIdCancel(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['coupons-redemptions'][':id'].cancel.$post(args, options))
}

export async function getCouponsId(
  args: InferRequestType<(typeof client.coupons)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':id'].$get(args, options))
}

export async function putCouponsId(
  args: InferRequestType<(typeof client.coupons)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':id'].$put(args, options))
}

export async function postCouponsIdExpiration(
  args: InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':id'].expiration.$post(args, options))
}

export async function getCredentials(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.$get(args, options))
}

export async function postCredentials(
  args: InferRequestType<typeof client.credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials.$post(args, options))
}

export async function getCredentialsId(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':id'].$get(args, options))
}

export async function putCredentialsId(
  args: InferRequestType<(typeof client.credentials)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':id'].$put(args, options))
}

export async function deleteCredentialsId(
  args: InferRequestType<(typeof client.credentials)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credentials[':id'].$delete(args, options))
}

export async function getCustomFieldsResource(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-fields'][':resource'].$get(args, options))
}

export async function getCustomFieldsResourceName(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-fields'][':resource'][':name'].$get(args, options))
}

export async function putCustomFieldsResourceName(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['custom-fields'][':resource'][':name'].$put(args, options))
}

export async function getCustomerTimelineCustomEvents(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-timeline-custom-events'].$get(args, options))
}

export async function postCustomerTimelineCustomEvents(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-timeline-custom-events'].$post(args, options))
}

export async function getCustomerTimelineCustomEventsId(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-timeline-custom-events'][':id'].$get(args, options))
}

export async function getCustomerTimelineEvents(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer-timeline-events'].$get(args, options))
}

export async function getCustomers(
  args: InferRequestType<typeof client.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$get(args, options))
}

export async function postCustomers(
  args: InferRequestType<typeof client.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$post(args, options))
}

export async function getCustomersId(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].$get(args, options))
}

export async function putCustomersId(
  args: InferRequestType<(typeof client.customers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].$put(args, options))
}

export async function deleteCustomersId(
  args: InferRequestType<(typeof client.customers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].$delete(args, options))
}

export async function getCustomersIdLeadSource(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id']['lead-source'].$get(args, options))
}

export async function putCustomersIdLeadSource(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id']['lead-source'].$put(args, options))
}

export async function deleteCustomersIdLeadSource(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id']['lead-source'].$delete(args, options))
}

export async function getCustomersIdTimeline(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].timeline.$get(args, options))
}

export async function postCustomersIdTimeline(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].timeline.$post(args, options))
}

export async function getCustomersIdTimelineMessageId(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].timeline[':messageId'].$get(args, options))
}

export async function deleteCustomersIdTimelineMessageId(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id'].timeline[':messageId'].$delete(args, options))
}

export async function getCustomersIdUpcomingInvoices(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':id']['upcoming-invoices'].$get(args, options))
}

export async function postDigitalWalletsValidation(
  args: InferRequestType<(typeof client)['digital-wallets']['validation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['digital-wallets'].validation.$post(args, options))
}

export async function getDisputes(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.$get(args, options))
}

export async function postDisputes(
  args: InferRequestType<typeof client.disputes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.$post(args, options))
}

export async function getDisputesId(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':id'].$get(args, options))
}

export async function putDisputesId(
  args: InferRequestType<(typeof client.disputes)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':id'].$put(args, options))
}

export async function getFiles(
  args: InferRequestType<typeof client.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$get(args, options))
}

export async function putFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$put(args, options))
}

export async function deleteFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$delete(args, options))
}

export async function getFilesIdDownload(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].download.$get(args, options))
}

export async function getFilesIdDownloadExtension(
  args: InferRequestType<(typeof client.files)[':id']['download{extension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id']['download{extension}'].$get(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function postInvoices(
  args: InferRequestType<typeof client.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$post(args, options))
}

export async function getInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$get(args, options))
}

export async function putInvoicesId(
  args: InferRequestType<(typeof client.invoices)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].$put(args, options))
}

export async function postInvoicesIdAbandon(
  args: InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].abandon.$post(args, options))
}

export async function postInvoicesIdIssue(
  args: InferRequestType<(typeof client.invoices)[':id']['issue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].issue.$post(args, options))
}

export async function getInvoicesIdItems(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].items.$get(args, options))
}

export async function postInvoicesIdItems(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].items.$post(args, options))
}

export async function postInvoicesIdRecalculate(
  args: InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].recalculate.$post(args, options))
}

export async function postInvoicesIdReissue(
  args: InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].reissue.$post(args, options))
}

export async function getInvoicesIdTimeline(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].timeline.$get(args, options))
}

export async function postInvoicesIdTimeline(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].timeline.$post(args, options))
}

export async function getInvoicesIdTimelineMessageId(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].timeline[':messageId'].$get(args, options))
}

export async function deleteInvoicesIdTimelineMessageId(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].timeline[':messageId'].$delete(args, options))
}

export async function postInvoicesIdTransaction(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].transaction.$post(args, options))
}

export async function getInvoicesIdTransactionAllocations(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id']['transaction-allocations'].$get(args, options))
}

export async function postInvoicesIdVoid(
  args: InferRequestType<(typeof client.invoices)[':id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':id'].void.$post(args, options))
}

export async function getKycDocuments(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'].$get(args, options))
}

export async function postKycDocuments(
  args: InferRequestType<(typeof client)['kyc-documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'].$post(args, options))
}

export async function getKycDocumentsId(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].$get(args, options))
}

export async function putKycDocumentsId(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].$put(args, options))
}

export async function postKycDocumentsIdAcceptance(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].acceptance.$post(args, options))
}

export async function postKycDocumentsIdMatches(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].matches.$post(args, options))
}

export async function postKycDocumentsIdRejection(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].rejection.$post(args, options))
}

export async function postKycDocumentsIdReview(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-documents'][':id'].review.$post(args, options))
}

export async function getKycRequests(
  args: InferRequestType<(typeof client)['kyc-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-requests'].$get(args, options))
}

export async function postKycRequests(
  args: InferRequestType<(typeof client)['kyc-requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-requests'].$post(args, options))
}

export async function getKycRequestsId(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-requests'][':id'].$get(args, options))
}

export async function deleteKycRequestsId(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-requests'][':id'].$delete(args, options))
}

export async function patchKycRequestsId(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['kyc-requests'][':id'].$patch(args, options))
}

export async function getPasswordTokens(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['password-tokens'].$get(args, options))
}

export async function postPasswordTokens(
  args: InferRequestType<(typeof client)['password-tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['password-tokens'].$post(args, options))
}

export async function getPasswordTokensId(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['password-tokens'][':id'].$get(args, options))
}

export async function deletePasswordTokensId(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['password-tokens'][':id'].$delete(args, options))
}

export async function getPaymentCards(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'].$get(args, options))
}

export async function postPaymentCards(
  args: InferRequestType<(typeof client)['payment-cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'].$post(args, options))
}

export async function getPaymentCardsId(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'][':id'].$get(args, options))
}

export async function putPaymentCardsId(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'][':id'].$put(args, options))
}

export async function patchPaymentCardsId(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'][':id'].$patch(args, options))
}

export async function postPaymentCardsIdDeactivation(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-cards'][':id'].deactivation.$post(args, options))
}

export async function getPaymentInstruments(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-instruments'].$get(args, options))
}

export async function postPaymentInstruments(
  args: InferRequestType<(typeof client)['payment-instruments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-instruments'].$post(args, options))
}

export async function getPaymentInstrumentsId(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-instruments'][':id'].$get(args, options))
}

export async function patchPaymentInstrumentsId(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-instruments'][':id'].$patch(args, options))
}

export async function postPaymentInstrumentsIdDeactivation(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-instruments'][':id'].deactivation.$post(args, options))
}

export async function postPayouts(
  args: InferRequestType<typeof client.payouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts.$post(args, options))
}

export async function getPaypalAccounts(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['paypal-accounts'].$get(args, options))
}

export async function postPaypalAccounts(
  args: InferRequestType<(typeof client)['paypal-accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['paypal-accounts'].$post(args, options))
}

export async function getPaypalAccountsId(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['paypal-accounts'][':id'].$get(args, options))
}

export async function putPaypalAccountsId(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['paypal-accounts'][':id'].$put(args, options))
}

export async function postPaypalAccountsIdDeactivation(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['paypal-accounts'][':id'].deactivation.$post(args, options))
}

export async function getPlans(
  args: InferRequestType<typeof client.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$get(args, options))
}

export async function postPlans(
  args: InferRequestType<typeof client.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans.$post(args, options))
}

export async function getPlansId(
  args: InferRequestType<(typeof client.plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':id'].$get(args, options))
}

export async function putPlansId(
  args: InferRequestType<(typeof client.plans)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':id'].$put(args, options))
}

export async function deletePlansId(
  args: InferRequestType<(typeof client.plans)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plans[':id'].$delete(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function postProducts(
  args: InferRequestType<typeof client.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$post(args, options))
}

export async function getProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$get(args, options))
}

export async function putProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$put(args, options))
}

export async function deleteProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$delete(args, options))
}

export async function postReadyToPay(
  args: InferRequestType<(typeof client)['ready-to-pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ready-to-pay'].$post(args, options))
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getShippingZones(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipping-zones'].$get(args, options))
}

export async function postShippingZones(
  args: InferRequestType<(typeof client)['shipping-zones']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipping-zones'].$post(args, options))
}

export async function getShippingZonesId(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipping-zones'][':id'].$get(args, options))
}

export async function putShippingZonesId(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipping-zones'][':id'].$put(args, options))
}

export async function deleteShippingZonesId(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shipping-zones'][':id'].$delete(args, options))
}

export async function getSubscriptionCancellations(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-cancellations'].$get(args, options))
}

export async function postSubscriptionCancellations(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-cancellations'].$post(args, options))
}

export async function getSubscriptionCancellationsId(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-cancellations'][':id'].$get(args, options))
}

export async function putSubscriptionCancellationsId(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-cancellations'][':id'].$put(args, options))
}

export async function deleteSubscriptionCancellationsId(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-cancellations'][':id'].$delete(args, options))
}

export async function getSubscriptionReactivations(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-reactivations'].$get(args, options))
}

export async function postSubscriptionReactivations(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-reactivations'].$post(args, options))
}

export async function getSubscriptionReactivationsId(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscription-reactivations'][':id'].$get(args, options))
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function getSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$get(args, options))
}

export async function putSubscriptionsId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].$put(args, options))
}

export async function postSubscriptionsIdChangeItems(
  args: InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id']['change-items'].$post(args, options))
}

export async function postSubscriptionsIdInterimInvoice(
  args: InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id']['interim-invoice'].$post(args, options))
}

export async function getSubscriptionsIdTimeline(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].timeline.$get(args, options))
}

export async function postSubscriptionsIdTimeline(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].timeline.$post(args, options))
}

export async function getSubscriptionsIdTimelineMessageId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id'].timeline[':messageId'].$get(args, options))
}

export async function deleteSubscriptionsIdTimelineMessageId(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':id'].timeline[':messageId'].$delete(args, options),
  )
}

export async function getSubscriptionsIdUpcomingInvoices(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':id']['upcoming-invoices'].$get(args, options))
}

export async function postSubscriptionsIdUpcomingInvoicesInvoiceIdIssue(
  args: InferRequestType<
    (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':id']['upcoming-invoices'][':invoiceId'].issue.$post(args, options),
  )
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

export async function getTagsTag(
  args: InferRequestType<(typeof client.tags)[':tag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].$get(args, options))
}

export async function deleteTagsTag(
  args: InferRequestType<(typeof client.tags)[':tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].$delete(args, options))
}

export async function patchTagsTag(
  args: InferRequestType<(typeof client.tags)[':tag']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].$patch(args, options))
}

export async function postTagsTagCustomers(
  args: InferRequestType<(typeof client.tags)[':tag']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].customers.$post(args, options))
}

export async function deleteTagsTagCustomers(
  args: InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].customers.$delete(args, options))
}

export async function postTagsTagCustomersCustomerId(
  args: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].customers[':customerId'].$post(args, options))
}

export async function deleteTagsTagCustomersCustomerId(
  args: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tag'].customers[':customerId'].$delete(args, options))
}

export async function getTokens(
  args: InferRequestType<typeof client.tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.$get(args, options))
}

export async function postTokens(
  args: InferRequestType<typeof client.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.$post(args, options))
}

export async function getTokensToken(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':token'].$get(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function postTransactions(
  args: InferRequestType<typeof client.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$post(args, options))
}

export async function getTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$get(args, options))
}

export async function patchTransactionsId(
  args: InferRequestType<(typeof client.transactions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].$patch(args, options))
}

export async function postTransactionsIdQuery(
  args: InferRequestType<(typeof client.transactions)[':id']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].query.$post(args, options))
}

export async function postTransactionsIdRefund(
  args: InferRequestType<(typeof client.transactions)[':id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].refund.$post(args, options))
}

export async function getTransactionsIdTimeline(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].timeline.$get(args, options))
}

export async function postTransactionsIdTimeline(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].timeline.$post(args, options))
}

export async function getTransactionsIdTimelineMessageId(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].timeline[':messageId'].$get(args, options))
}

export async function deleteTransactionsIdTimelineMessageId(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':id'].timeline[':messageId'].$delete(args, options),
  )
}

export async function postTransactionsIdUpdate(
  args: InferRequestType<(typeof client.transactions)[':id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':id'].update.$post(args, options))
}
