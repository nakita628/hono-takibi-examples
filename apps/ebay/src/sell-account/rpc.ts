import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdvertisingEligibility(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advertising_eligibility.$get(args, options))
}

export async function getCustomPolicyIndex(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_policy.index.$get(args, options))
}

export async function postCustomPolicyIndex(
  args: InferRequestType<typeof client.custom_policy.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_policy.index.$post(args, options))
}

export async function getCustomPolicyCustomPolicyId(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_policy[':custom_policy_id'].$get(args, options))
}

export async function putCustomPolicyCustomPolicyId(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_policy[':custom_policy_id'].$put(args, options))
}

export async function getFulfillmentPolicy(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fulfillment_policy.$get(args, options))
}

export async function postFulfillmentPolicyIndex(
  args: InferRequestType<typeof client.fulfillment_policy.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fulfillment_policy.index.$post(args, options))
}

export async function getFulfillmentPolicyGetByPolicyName(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fulfillment_policy.get_by_policy_name.$get(args, options))
}

export async function getFulfillmentPolicyFulfillmentPolicyId(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$get(args, options))
}

export async function putFulfillmentPolicyFulfillmentPolicyId(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$put(args, options))
}

export async function deleteFulfillmentPolicyFulfillmentPolicyId(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.fulfillment_policy[':fulfillmentPolicyId'].$delete(args, options),
  )
}

export async function getKyc(options?: ClientRequestOptions) {
  return await parseResponse(client.kyc.$get(undefined, options))
}

export async function getPaymentPolicy(
  args: InferRequestType<typeof client.payment_policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy.$get(args, options))
}

export async function postPaymentPolicy(
  args: InferRequestType<typeof client.payment_policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy.$post(args, options))
}

export async function getPaymentPolicyGetByPolicyName(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy.get_by_policy_name.$get(args, options))
}

export async function getPaymentPolicyPaymentPolicyId(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy[':payment_policy_id'].$get(args, options))
}

export async function putPaymentPolicyPaymentPolicyId(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy[':payment_policy_id'].$put(args, options))
}

export async function deletePaymentPolicyPaymentPolicyId(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_policy[':payment_policy_id'].$delete(args, options))
}

export async function getPaymentsProgramMarketplaceIdPaymentsProgramType(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments_program[':marketplace_id'][':payments_program_type'].$get(args, options),
  )
}

export async function getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboarding(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(
      args,
      options,
    ),
  )
}

export async function getPrivilege(options?: ClientRequestOptions) {
  return await parseResponse(client.privilege.$get(undefined, options))
}

export async function getProgramGetOptedInPrograms(options?: ClientRequestOptions) {
  return await parseResponse(client.program.get_opted_in_programs.$get(undefined, options))
}

export async function postProgramOptIn(
  args: InferRequestType<typeof client.program.opt_in.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.program.opt_in.$post(args, options))
}

export async function postProgramOptOut(
  args: InferRequestType<typeof client.program.opt_out.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.program.opt_out.$post(args, options))
}

export async function getRateTable(
  args: InferRequestType<typeof client.rate_table.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rate_table.$get(args, options))
}

export async function getReturnPolicy(
  args: InferRequestType<typeof client.return_policy.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy.$get(args, options))
}

export async function postReturnPolicy(
  args: InferRequestType<typeof client.return_policy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy.$post(args, options))
}

export async function getReturnPolicyGetByPolicyName(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy.get_by_policy_name.$get(args, options))
}

export async function getReturnPolicyReturnPolicyId(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy[':return_policy_id'].$get(args, options))
}

export async function putReturnPolicyReturnPolicyId(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy[':return_policy_id'].$put(args, options))
}

export async function deleteReturnPolicyReturnPolicyId(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.return_policy[':return_policy_id'].$delete(args, options))
}

export async function getSalesTax(
  args: InferRequestType<typeof client.sales_tax.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_tax.$get(args, options))
}

export async function getSalesTaxCountryCodeJurisdictionId(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sales_tax[':countryCode'][':jurisdictionId'].$get(args, options),
  )
}

export async function putSalesTaxCountryCodeJurisdictionId(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sales_tax[':countryCode'][':jurisdictionId'].$put(args, options),
  )
}

export async function deleteSalesTaxCountryCodeJurisdictionId(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.sales_tax[':countryCode'][':jurisdictionId'].$delete(args, options),
  )
}

export async function getSubscription(
  args: InferRequestType<typeof client.subscription.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscription.$get(args, options))
}
