import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Products(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.$get(args, options))
}

export async function getV1AccountListSubscribers(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':account:listSubscribers'].$get(args, options))
}

export async function postV1AccountRegister(
  args: InferRequestType<(typeof client.v1)[':account:register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':account:register'].$post(args, options))
}

export async function postV1AccountUnregister(
  args: InferRequestType<(typeof client.v1)[':account:unregister']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':account:unregister'].$post(args, options))
}

export async function getV1CustomerListPurchasableOffers(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':customer:listPurchasableOffers'].$get(args, options))
}

export async function getV1CustomerListPurchasableSkus(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':customer:listPurchasableSkus'].$get(args, options))
}

export async function postV1CustomerProvisionCloudIdentity(
  args: InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':customer:provisionCloudIdentity'].$post(args, options))
}

export async function getV1EntitlementLookupOffer(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':entitlement:lookupOffer'].$get(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameActivate(
  args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:activate'].$post(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function postV1NameChangeOffer(
  args: InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:changeOffer'].$post(args, options))
}

export async function postV1NameChangeParameters(
  args: InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:changeParameters'].$post(args, options))
}

export async function postV1NameChangeRenewalSettings(
  args: InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:changeRenewalSettings'].$post(args, options))
}

export async function postV1NameRun(
  args: InferRequestType<(typeof client.v1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:run'].$post(args, options))
}

export async function postV1NameStartPaidService(
  args: InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:startPaidService'].$post(args, options))
}

export async function postV1NameSuspend(
  args: InferRequestType<(typeof client.v1)[':name:suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:suspend'].$post(args, options))
}

export async function getV1ParentChannelPartnerLinks(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].channelPartnerLinks.$get(args, options))
}

export async function postV1ParentChannelPartnerLinks(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].channelPartnerLinks.$post(args, options))
}

export async function getV1ParentChannelPartnerRepricingConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].channelPartnerRepricingConfigs.$get(args, options),
  )
}

export async function postV1ParentChannelPartnerRepricingConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent'].channelPartnerRepricingConfigs.$post(args, options),
  )
}

export async function getV1ParentCustomerRepricingConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customerRepricingConfigs.$get(args, options))
}

export async function postV1ParentCustomerRepricingConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customerRepricingConfigs.$post(args, options))
}

export async function getV1ParentCustomers(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customers.$get(args, options))
}

export async function postV1ParentCustomers(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].customers.$post(args, options))
}

export async function postV1ParentCustomersImport(
  args: InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['customers:import'].$post(args, options))
}

export async function getV1ParentEntitlements(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entitlements.$get(args, options))
}

export async function postV1ParentEntitlements(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].entitlements.$post(args, options))
}

export async function getV1ParentOffers(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].offers.$get(args, options))
}

export async function getV1ParentReports(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].reports.$get(args, options))
}

export async function getV1ParentSkus(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].skus.$get(args, options))
}

export async function postV1ParentCheckCloudIdentityAccountsExist(
  args: InferRequestType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':parent:checkCloudIdentityAccountsExist'].$post(args, options),
  )
}

export async function getV1ParentListEntitlementChanges(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:listEntitlementChanges'].$get(args, options))
}

export async function postV1ParentListTransferableOffers(
  args: InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:listTransferableOffers'].$post(args, options))
}

export async function postV1ParentListTransferableSkus(
  args: InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:listTransferableSkus'].$post(args, options))
}

export async function postV1ParentTransferEntitlements(
  args: InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:transferEntitlements'].$post(args, options))
}

export async function postV1ParentTransferEntitlementsToGoogle(
  args: InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent:transferEntitlementsToGoogle'].$post(args, options))
}

export async function postV1ReportJobFetchReportResults(
  args: InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':reportJob:fetchReportResults'].$post(args, options))
}
