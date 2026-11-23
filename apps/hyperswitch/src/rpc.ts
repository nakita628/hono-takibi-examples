import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPayments(
  args: InferRequestType<typeof client.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$post(args, options))
}

export async function getPaymentsPaymentId(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].$get(args, options))
}

export async function postPaymentsPaymentId(
  args: InferRequestType<(typeof client.payments)[':payment_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].$post(args, options))
}

export async function postPaymentsPaymentIdConfirm(
  args: InferRequestType<(typeof client.payments)[':payment_id']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].confirm.$post(args, options))
}

export async function postPaymentsPaymentIdCapture(
  args: InferRequestType<(typeof client.payments)[':payment_id']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].capture.$post(args, options))
}

export async function postPaymentsSessionTokens(
  args: InferRequestType<typeof client.payments.session_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.session_tokens.$post(args, options))
}

export async function postPaymentsPaymentIdCancel(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].cancel.$post(args, options))
}

export async function getPaymentsPaymentIdCancelPostCapture(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].cancel_post_capture.$get(args, options))
}

export async function postPaymentsPaymentIdCancelPostCapture(
  args: InferRequestType<(typeof client.payments)[':payment_id']['cancel_post_capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':payment_id'].cancel_post_capture.$post(args, options),
  )
}

export async function postPaymentsPaymentIdExtendAuthorization(
  args: InferRequestType<(typeof client.payments)[':payment_id']['extend_authorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':payment_id'].extend_authorization.$post(args, options),
  )
}

export async function getPaymentsList(
  args: InferRequestType<typeof client.payments.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.list.$get(args, options))
}

export async function postPaymentsPaymentIdIncrementalAuthorization(
  args: InferRequestType<
    (typeof client.payments)[':payment_id']['incremental_authorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':payment_id'].incremental_authorization.$post(args, options),
  )
}

export async function getPaymentLinkPaymentLinkId(
  args: InferRequestType<(typeof client.payment_link)[':payment_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_link[':payment_link_id'].$get(args, options))
}

export async function postPaymentLinkList(
  args: InferRequestType<typeof client.payment_link.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_link.list.$post(args, options))
}

export async function postPaymentLinkProfileList(
  args: InferRequestType<typeof client.payment_link.profile.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_link.profile.list.$post(args, options))
}

export async function postPaymentsPaymentId3dsAuthentication(
  args: InferRequestType<(typeof client.payments)[':payment_id']['3ds']['authentication']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':payment_id']['3ds'].authentication.$post(args, options),
  )
}

export async function postPaymentsPaymentIdCompleteAuthorize(
  args: InferRequestType<(typeof client.payments)[':payment_id']['complete_authorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].complete_authorize.$post(args, options))
}

export async function postPaymentsPaymentIdPostSessionTokens(
  args: InferRequestType<(typeof client.payments)[':payment_id']['post_session_tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':payment_id'].post_session_tokens.$post(args, options),
  )
}

export async function postPaymentsPaymentIdUpdateMetadata(
  args: InferRequestType<(typeof client.payments)[':payment_id']['update_metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].update_metadata.$post(args, options))
}

export async function postPaymentsPaymentIdEligibilityCheck(
  args: InferRequestType<(typeof client.payments)[':payment_id']['eligibility_check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].eligibility_check.$post(args, options))
}

export async function postPaymentsPaymentIdEligibility(
  args: InferRequestType<(typeof client.payments)[':payment_id']['eligibility']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].eligibility.$post(args, options))
}

export async function postRelay(
  args: InferRequestType<typeof client.relay.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relay.$post(args, options))
}

export async function getRelayRelayId(
  args: InferRequestType<(typeof client.relay)[':relay_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relay[':relay_id'].$get(args, options))
}

export async function postRefunds(
  args: InferRequestType<typeof client.refunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refunds.$post(args, options))
}

export async function getRefundsRefundId(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refunds[':refund_id'].$get(args, options))
}

export async function postRefundsRefundId(
  args: InferRequestType<(typeof client.refunds)[':refund_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refunds[':refund_id'].$post(args, options))
}

export async function postRefundsList(
  args: InferRequestType<typeof client.refunds.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.refunds.list.$post(args, options))
}

export async function postOrganization(
  args: InferRequestType<typeof client.organization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization.$post(args, options))
}

export async function getOrganizationId(
  args: InferRequestType<(typeof client.organization)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':id'].$get(args, options))
}

export async function putOrganizationId(
  args: InferRequestType<(typeof client.organization)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization[':id'].$put(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function getAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$get(args, options))
}

export async function postAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$post(args, options))
}

export async function deleteAccountsAccountId(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].$delete(args, options))
}

export async function postAccountsAccountIdKv(
  args: InferRequestType<(typeof client.accounts)[':account_id']['kv']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':account_id'].kv.$post(args, options))
}

export async function getAccountAccountIdConnectors(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].connectors.$get(args, options))
}

export async function postAccountAccountIdConnectors(
  args: InferRequestType<(typeof client.account)[':account_id']['connectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].connectors.$post(args, options))
}

export async function getAccountAccountIdConnectorsMerchantConnectorId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].connectors[':merchant_connector_id'].$get(args, options),
  )
}

export async function postAccountAccountIdConnectorsMerchantConnectorId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].connectors[':merchant_connector_id'].$post(args, options),
  )
}

export async function deleteAccountAccountIdConnectorsMerchantConnectorId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['connectors'][':merchant_connector_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].connectors[':merchant_connector_id'].$delete(args, options),
  )
}

export async function postAccountAccountIdWebhooksMerchantConnectorId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['webhooks'][':merchant_connector_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].webhooks[':merchant_connector_id'].$post(args, options),
  )
}

export async function postGsm(
  args: InferRequestType<typeof client.gsm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsm.$post(args, options))
}

export async function postGsmGet(
  args: InferRequestType<typeof client.gsm.get.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsm.get.$post(args, options))
}

export async function postGsmUpdate(
  args: InferRequestType<typeof client.gsm.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsm.update.$post(args, options))
}

export async function postGsmDelete(
  args: InferRequestType<typeof client.gsm.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsm.delete.$post(args, options))
}

export async function getMandatesMandateId(
  args: InferRequestType<(typeof client.mandates)[':mandate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates[':mandate_id'].$get(args, options))
}

export async function postMandatesRevokeMandateId(
  args: InferRequestType<(typeof client.mandates.revoke)[':mandate_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mandates.revoke[':mandate_id'].$post(args, options))
}

export async function getCustomersCustomerIdMandates(
  args: InferRequestType<(typeof client.customers)[':customer_id']['mandates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].mandates.$get(args, options))
}

export async function postCustomers(
  args: InferRequestType<typeof client.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.$post(args, options))
}

export async function getCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].$get(args, options))
}

export async function postCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].$post(args, options))
}

export async function deleteCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].$delete(args, options))
}

export async function getV1CustomersReferenceMerchantReferenceId(
  args: InferRequestType<(typeof client.v1.customers.reference)[':merchant_reference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers.reference[':merchant_reference_id'].$get(args, options),
  )
}

export async function getCustomersList(
  args: InferRequestType<typeof client.customers.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.list.$get(args, options))
}

export async function postPaymentMethods(
  args: InferRequestType<typeof client.payment_methods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_methods.$post(args, options))
}

export async function getAccountPaymentMethods(
  args: InferRequestType<typeof client.account.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.payment_methods.$get(args, options))
}

export async function getCustomersCustomerIdPaymentMethods(
  args: InferRequestType<(typeof client.customers)[':customer_id']['payment_methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer_id'].payment_methods.$get(args, options))
}

export async function getCustomersPaymentMethods(
  args: InferRequestType<typeof client.customers.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.payment_methods.$get(args, options))
}

export async function getPaymentsPaymentIdClient(
  args: InferRequestType<(typeof client.payments)[':payment_id']['client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':payment_id'].client.$get(args, options))
}

export async function postCustomerIdPaymentMethodsPaymentMethodIdDefault(
  args: InferRequestType<
    (typeof client)[':customer_id']['payment_methods'][':payment_method_id']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':customer_id'].payment_methods[':payment_method_id'].default.$post(args, options),
  )
}

export async function getPaymentMethodsMethodId(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_methods[':method_id'].$get(args, options))
}

export async function deletePaymentMethodsMethodId(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_methods[':method_id'].$delete(args, options))
}

export async function postPaymentMethodsMethodIdUpdate(
  args: InferRequestType<(typeof client.payment_methods)[':method_id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_methods[':method_id'].update.$post(args, options))
}

export async function getAccountAccountIdBusinessProfile(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].business_profile.$get(args, options))
}

export async function postAccountAccountIdBusinessProfile(
  args: InferRequestType<(typeof client.account)[':account_id']['business_profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account[':account_id'].business_profile.$post(args, options))
}

export async function getAccountAccountIdBusinessProfileProfileId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[':profile_id'].$get(args, options),
  )
}

export async function postAccountAccountIdBusinessProfileProfileId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[':profile_id'].$post(args, options),
  )
}

export async function deleteAccountAccountIdBusinessProfileProfileId(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[':profile_id'].$delete(args, options),
  )
}

export async function getDisputesDisputeId(
  args: InferRequestType<(typeof client.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':dispute_id'].$get(args, options))
}

export async function getDisputesList(
  args: InferRequestType<typeof client.disputes.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.list.$get(args, options))
}

export async function getDisputesProfileList(
  args: InferRequestType<typeof client.disputes.profile.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.profile.list.$get(args, options))
}

export async function getDisputesFilter(
  args: InferRequestType<typeof client.disputes.filter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.filter.$get(args, options))
}

export async function getDisputesProfileFilter(
  args: InferRequestType<typeof client.disputes.profile.filter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.profile.filter.$get(args, options))
}

export async function postDisputesAcceptDisputeId(
  args: InferRequestType<(typeof client.disputes.accept)[':dispute_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.accept[':dispute_id'].$post(args, options))
}

export async function putDisputesEvidence(
  args: InferRequestType<typeof client.disputes.evidence.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.evidence.$put(args, options))
}

export async function postDisputesEvidence(
  args: InferRequestType<typeof client.disputes.evidence.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.evidence.$post(args, options))
}

export async function deleteDisputesEvidence(
  args: InferRequestType<typeof client.disputes.evidence.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.evidence.$delete(args, options))
}

export async function getDisputesEvidenceDisputeId(
  args: InferRequestType<(typeof client.disputes.evidence)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.evidence[':dispute_id'].$get(args, options))
}

export async function getDisputesAggregate(
  args: InferRequestType<typeof client.disputes.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.aggregate.$get(args, options))
}

export async function getDisputesProfileAggregate(
  args: InferRequestType<typeof client.disputes.profile.aggregate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.profile.aggregate.$get(args, options))
}

export async function getRouting(
  args: InferRequestType<typeof client.routing.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.$get(args, options))
}

export async function postRouting(
  args: InferRequestType<typeof client.routing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.$post(args, options))
}

export async function postRoutingRoutingAlgorithmIdActivate(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing[':routing_algorithm_id'].activate.$post(args, options))
}

export async function getRoutingRoutingAlgorithmId(
  args: InferRequestType<(typeof client.routing)[':routing_algorithm_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing[':routing_algorithm_id'].$get(args, options))
}

export async function postRoutingDeactivate(
  args: InferRequestType<typeof client.routing.deactivate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.deactivate.$post(args, options))
}

export async function getRoutingDefault(
  args: InferRequestType<typeof client.routing.default.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.default.$get(args, options))
}

export async function postRoutingDefault(
  args: InferRequestType<typeof client.routing.default.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.default.$post(args, options))
}

export async function getRoutingActive(
  args: InferRequestType<typeof client.routing.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.active.$get(args, options))
}

export async function getRoutingDefaultProfile(
  args: InferRequestType<typeof client.routing.default.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.default.profile.$get(args, options))
}

export async function postRoutingDefaultProfileProfileId(
  args: InferRequestType<(typeof client.routing.default.profile)[':profile_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routing.default.profile[':profile_id'].$post(args, options))
}

export async function postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggle(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['toggle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[
      ':profile_id'
    ].dynamic_routing.success_based.toggle.$post(args, options),
  )
}

export async function postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggle(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['toggle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[
      ':profile_id'
    ].dynamic_routing.elimination.toggle.$post(args, options),
  )
}

export async function postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreate(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['success_based']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[
      ':profile_id'
    ].dynamic_routing.success_based.create.$post(args, options),
  )
}

export async function postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreate(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['elimination']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[
      ':profile_id'
    ].dynamic_routing.elimination.create.$post(args, options),
  )
}

export async function postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggle(
  args: InferRequestType<
    (typeof client.account)[':account_id']['business_profile'][':profile_id']['dynamic_routing']['contracts']['toggle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account[':account_id'].business_profile[
      ':profile_id'
    ].dynamic_routing.contracts.toggle.$post(args, options),
  )
}

export async function postOfferEngineOffersList(
  args: InferRequestType<typeof client.offer_engine.offers.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offer_engine.offers.list.$post(args, options))
}

export async function getBlocklist(
  args: InferRequestType<typeof client.blocklist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.$get(args, options))
}

export async function postBlocklist(
  args: InferRequestType<typeof client.blocklist.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.$post(args, options))
}

export async function deleteBlocklist(
  args: InferRequestType<typeof client.blocklist.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.$delete(args, options))
}

export async function postBlocklistToggle(
  args: InferRequestType<typeof client.blocklist.toggle.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.toggle.$post(args, options))
}

export async function getBlocklistCount(
  args: InferRequestType<typeof client.blocklist.count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.count.$get(args, options))
}

export async function getBlocklistLookup(
  args: InferRequestType<typeof client.blocklist.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.lookup.$get(args, options))
}

export async function getBlocklistBatch(
  args: InferRequestType<typeof client.blocklist.batch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.batch.$get(args, options))
}

export async function postBlocklistBatch(
  args: InferRequestType<typeof client.blocklist.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.batch.$post(args, options))
}

export async function getBlocklistBatchJobId(
  args: InferRequestType<(typeof client.blocklist.batch)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.batch[':job_id'].$get(args, options))
}

export async function postBlocklistExport(
  args: InferRequestType<typeof client.blocklist.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.export.$post(args, options))
}

export async function postBlocklistClone(
  args: InferRequestType<typeof client.blocklist.clone.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.blocklist.clone.$post(args, options))
}

export async function postPayoutsCreate(
  args: InferRequestType<typeof client.payouts.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts.create.$post(args, options))
}

export async function getPayoutsPayoutId(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts[':payout_id'].$get(args, options))
}

export async function postPayoutsPayoutId(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts[':payout_id'].$post(args, options))
}

export async function postPayoutsPayoutIdCancel(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts[':payout_id'].cancel.$post(args, options))
}

export async function postPayoutsPayoutIdFulfill(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['fulfill']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts[':payout_id'].fulfill.$post(args, options))
}

export async function getPayoutsList(
  args: InferRequestType<typeof client.payouts.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts.list.$get(args, options))
}

export async function postPayoutsList(
  args: InferRequestType<typeof client.payouts.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts.list.$post(args, options))
}

export async function postPayoutsPayoutIdConfirm(
  args: InferRequestType<(typeof client.payouts)[':payout_id']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts[':payout_id'].confirm.$post(args, options))
}

export async function postPayoutsFilter(
  args: InferRequestType<typeof client.payouts.filter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payouts.filter.$post(args, options))
}

export async function postApiKeysMerchantId(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':merchant_id'].$post(args, options))
}

export async function getApiKeysMerchantIdKeyId(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':merchant_id'][':key_id'].$get(args, options))
}

export async function postApiKeysMerchantIdKeyId(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':merchant_id'][':key_id'].$post(args, options))
}

export async function deleteApiKeysMerchantIdKeyId(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id'][':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':merchant_id'][':key_id'].$delete(args, options))
}

export async function getApiKeysMerchantIdList(
  args: InferRequestType<(typeof client.api_keys)[':merchant_id']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_keys[':merchant_id'].list.$get(args, options))
}

export async function postEventsMerchantId(
  args: InferRequestType<(typeof client.events)[':merchant_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':merchant_id'].$post(args, options))
}

export async function postEventsProfileList(
  args: InferRequestType<typeof client.events.profile.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.profile.list.$post(args, options))
}

export async function getEventsMerchantIdEventIdAttempts(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['attempts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events[':merchant_id'][':event_id'].attempts.$get(args, options),
  )
}

export async function postEventsMerchantIdEventIdRetry(
  args: InferRequestType<(typeof client.events)[':merchant_id'][':event_id']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':merchant_id'][':event_id'].retry.$post(args, options))
}

export async function getPollStatusPollId(
  args: InferRequestType<(typeof client.poll.status)[':poll_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.poll.status[':poll_id'].$get(args, options))
}

export async function postProfileAcquirers(
  args: InferRequestType<typeof client.profile_acquirers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.profile_acquirers.$post(args, options))
}

export async function postProfileAcquirersProfileIdProfileAcquirerId(
  args: InferRequestType<
    (typeof client.profile_acquirers)[':profile_id'][':profile_acquirer_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.profile_acquirers[':profile_id'][':profile_acquirer_id'].$post(args, options),
  )
}

export async function postThreeDsDecisionExecute(
  args: InferRequestType<typeof client.three_ds_decision.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.three_ds_decision.execute.$post(args, options))
}

export async function postAuthentication(
  args: InferRequestType<typeof client.authentication.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication.$post(args, options))
}

export async function postAuthenticationAuthenticationIdEligibility(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id'].eligibility.$post(args, options),
  )
}

export async function postAuthenticationAuthenticationIdAuthenticate(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['authenticate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id'].authenticate.$post(args, options),
  )
}

export async function postAuthenticationAuthenticationIdRedirect(
  args: InferRequestType<(typeof client.authentication)[':authentication_id']['redirect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id'].redirect.$post(args, options),
  )
}

export async function postAuthenticationAuthenticationIdSync(
  args: InferRequestType<(typeof client.authentication)[':authentication_id']['sync']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authentication[':authentication_id'].sync.$post(args, options))
}

export async function postAuthenticationAuthenticationIdEnabledAuthnMethodsToken(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['enabled_authn_methods_token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id'].enabled_authn_methods_token.$post(args, options),
  )
}

export async function getAuthenticationAuthenticationIdEligibilityCheck(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id']['eligibility-check'].$get(args, options),
  )
}

export async function postAuthenticationAuthenticationIdEligibilityCheck(
  args: InferRequestType<
    (typeof client.authentication)[':authentication_id']['eligibility-check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.authentication[':authentication_id']['eligibility-check'].$post(args, options),
  )
}

export async function postUserCreatePlatform(
  args: InferRequestType<typeof client.user.create_platform.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.create_platform.$post(args, options))
}

export async function postSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$post(args, options))
}

export async function postSubscriptionsCreate(
  args: InferRequestType<typeof client.subscriptions.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.create.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdConfirm(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].confirm.$post(args, options))
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].$get(args, options))
}

export async function putSubscriptionsSubscriptionIdUpdate(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['update']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].update.$put(args, options))
}

export async function getSubscriptionsItems(
  args: InferRequestType<typeof client.subscriptions.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.items.$get(args, options))
}

export async function getSubscriptionsEstimate(
  args: InferRequestType<typeof client.subscriptions.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.estimate.$get(args, options))
}

export async function postSubscriptionsSubscriptionIdPause(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].pause.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdResume(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].resume.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdCancel(
  args: InferRequestType<(typeof client.subscriptions)[':subscription_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription_id'].cancel.$post(args, options))
}

export async function getCardIssuers(options?: ClientRequestOptions) {
  return await parseResponse(client.card_issuers.$get(undefined, options))
}

export async function postCardIssuers(
  args: InferRequestType<typeof client.card_issuers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_issuers.$post(args, options))
}

export async function putCardIssuersId(
  args: InferRequestType<(typeof client.card_issuers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_issuers[':id'].$put(args, options))
}

export async function deleteCardIssuersId(
  args: InferRequestType<(typeof client.card_issuers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.card_issuers[':id'].$delete(args, options))
}

export async function postTelephoneOrderMerchantIdProvider(
  args: InferRequestType<(typeof client.telephone_order)[':merchant_id'][':provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.telephone_order[':merchant_id'][':provider'].$post(args, options),
  )
}
