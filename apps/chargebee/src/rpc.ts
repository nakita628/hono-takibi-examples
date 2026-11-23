import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSubscriptionsSubscriptionIdRemoveAdvanceInvoiceSchedule(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_advance_invoice_schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_advance_invoice_schedule.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdUpdateForItems(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['update_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].update_for_items.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRemoveCoupons(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_coupons']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_coupons.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdResume(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].resume.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdCancelForItems(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['cancel_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].cancel_for_items.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRegenerateInvoice(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['regenerate_invoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].regenerate_invoice.$post(args, options),
  )
}

export async function getSubscriptions(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions.$get(args, options))
}

export async function postSubscriptionsSubscriptionIdMove(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].move.$post(args, options))
}

export async function postCustomersCustomerIdImportForItems(
  args: InferRequestType<(typeof client.customers)[':customer-id']['import_for_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].import_for_items.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceSchedule(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_advance_invoice_schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].retrieve_advance_invoice_schedule.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRemoveScheduledCancellation(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_scheduled_cancellation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_scheduled_cancellation.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdRetrieveWithScheduledChanges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['retrieve_with_scheduled_changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].retrieve_with_scheduled_changes.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdReactivate(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['reactivate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].reactivate.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdChargeFutureRenewals(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['charge_future_renewals']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].charge_future_renewals.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdAddChargeAtTermEnd(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['add_charge_at_term_end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].add_charge_at_term_end.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRemoveScheduledChanges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_scheduled_changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_scheduled_changes.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdChangeTermEnd(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['change_term_end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].change_term_end.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdDelete(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].delete.$post(args, options))
}

export async function postCustomersCustomerIdSubscriptionForItems(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['subscription_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].subscription_for_items.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdImportUnbilledCharges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['import_unbilled_charges']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].import_unbilled_charges.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRemoveScheduledResumption(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_scheduled_resumption']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_scheduled_resumption.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionId(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].$get(args, options))
}

export async function postSubscriptionsSubscriptionIdImportContractTerm(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['import_contract_term']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].import_contract_term.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdOverrideBillingProfile(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['override_billing_profile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].override_billing_profile.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRemoveScheduledPause(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['remove_scheduled_pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].remove_scheduled_pause.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdEditAdvanceInvoiceSchedule(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['edit_advance_invoice_schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].edit_advance_invoice_schedule.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdDiscounts(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['discounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].discounts.$get(args, options))
}

export async function getSubscriptionsSubscriptionIdContractTerms(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['contract_terms']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].contract_terms.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdPause(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].pause.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdScheduledChanges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['scheduled_changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].scheduled_changes.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdUpdateScheduledChanges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['update_scheduled_changes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].update_scheduled_changes.$post(args, options),
  )
}

export async function postCustomersCustomerIdRelationships(
  args: InferRequestType<(typeof client.customers)[':customer-id']['relationships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].relationships.$post(args, options))
}

export async function postCustomersCustomerIdDeleteRelationship(
  args: InferRequestType<(typeof client.customers)[':customer-id']['delete_relationship']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].delete_relationship.$post(args, options),
  )
}

export async function postCustomersCustomerIdDeleteContact(
  args: InferRequestType<(typeof client.customers)[':customer-id']['delete_contact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].delete_contact.$post(args, options))
}

export async function postCustomersCustomerIdAssignPaymentRole(
  args: InferRequestType<(typeof client.customers)[':customer-id']['assign_payment_role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].assign_payment_role.$post(args, options),
  )
}

export async function postCustomersMove(
  args: InferRequestType<typeof client.customers.move.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.move.$post(args, options))
}

export async function postCustomersCustomerIdUpdatePaymentMethod(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['update_payment_method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].update_payment_method.$post(args, options),
  )
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

export async function getCustomersCustomerIdContacts(
  args: InferRequestType<(typeof client.customers)[':customer-id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].contacts.$get(args, options))
}

export async function postCustomersCustomerIdClearPersonalData(
  args: InferRequestType<(typeof client.customers)[':customer-id']['clear_personal_data']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].clear_personal_data.$post(args, options),
  )
}

export async function postCustomersCustomerIdRecordExcessPayment(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['record_excess_payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].record_excess_payment.$post(args, options),
  )
}

export async function postCustomersCustomerIdSendPaymentRequest(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['send_payment_request']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].send_payment_request.$post(args, options),
  )
}

export async function postCustomersCustomerIdUpdateHierarchySettings(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['update_hierarchy_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].update_hierarchy_settings.$post(args, options),
  )
}

export async function postCustomersCustomerIdUpdateBillingInfo(
  args: InferRequestType<(typeof client.customers)[':customer-id']['update_billing_info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].update_billing_info.$post(args, options),
  )
}

export async function postCustomersCustomerIdDelete(
  args: InferRequestType<(typeof client.customers)[':customer-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].delete.$post(args, options))
}

export async function getCustomersCustomerIdHierarchy(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].hierarchy.$get(args, options))
}

export async function getCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].$get(args, options))
}

export async function postCustomersCustomerId(
  args: InferRequestType<(typeof client.customers)[':customer-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].$post(args, options))
}

export async function getCustomersCustomerIdHierarchyDetail(
  args: InferRequestType<(typeof client.customers)[':customer-id']['hierarchy_detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].hierarchy_detail.$get(args, options))
}

export async function postCustomersCustomerIdChangeBillingDate(
  args: InferRequestType<(typeof client.customers)[':customer-id']['change_billing_date']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].change_billing_date.$post(args, options),
  )
}

export async function postCustomersCustomerIdAddContact(
  args: InferRequestType<(typeof client.customers)[':customer-id']['add_contact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].add_contact.$post(args, options))
}

export async function postCustomersMerge(
  args: InferRequestType<typeof client.customers.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers.merge.$post(args, options))
}

export async function postCustomersCustomerIdCollectPayment(
  args: InferRequestType<(typeof client.customers)[':customer-id']['collect_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].collect_payment.$post(args, options))
}

export async function postCustomersCustomerIdUpdateContact(
  args: InferRequestType<(typeof client.customers)[':customer-id']['update_contact']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].update_contact.$post(args, options))
}

export async function postTokensCreateUsingTempToken(
  args: InferRequestType<typeof client.tokens.create_using_temp_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.create_using_temp_token.$post(args, options))
}

export async function postTokensCreateForCard(
  args: InferRequestType<typeof client.tokens.create_for_card.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens.create_for_card.$post(args, options))
}

export async function getTokensCbTokenId(
  args: InferRequestType<(typeof client.tokens)[':cb-token-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tokens[':cb-token-id'].$get(args, options))
}

export async function postPaymentSourcesCreateUsingPermanentToken(
  args: InferRequestType<typeof client.payment_sources.create_using_permanent_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources.create_using_permanent_token.$post(args, options),
  )
}

export async function postPaymentSourcesCustPaymentSourceIdDelete(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].delete.$post(args, options),
  )
}

export async function postPaymentSourcesCreateCard(
  args: InferRequestType<typeof client.payment_sources.create_card.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources.create_card.$post(args, options))
}

export async function getPaymentSourcesCustPaymentSourceIdGatewayPaymentMethodTokens(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['gateway_payment_method_tokens']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].gateway_payment_method_tokens.$get(
      args,
      options,
    ),
  )
}

export async function postPaymentSourcesCustPaymentSourceIdVerifyBankAccount(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['verify_bank_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].verify_bank_account.$post(args, options),
  )
}

export async function getPaymentSources(
  args: InferRequestType<typeof client.payment_sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources.$get(args, options))
}

export async function postPaymentSourcesCustPaymentSourceIdExportPaymentSource(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['export_payment_source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].export_payment_source.$post(args, options),
  )
}

export async function postPaymentSourcesCreateUsingPaymentIntent(
  args: InferRequestType<typeof client.payment_sources.create_using_payment_intent.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources.create_using_payment_intent.$post(args, options),
  )
}

export async function getPaymentSourcesCustPaymentSourceId(
  args: InferRequestType<(typeof client.payment_sources)[':cust-payment-source-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources[':cust-payment-source-id'].$get(args, options))
}

export async function postPaymentSourcesCreateVoucherPaymentSource(
  args: InferRequestType<typeof client.payment_sources.create_voucher_payment_source.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources.create_voucher_payment_source.$post(args, options),
  )
}

export async function postPaymentSourcesCreateUsingTempToken(
  args: InferRequestType<typeof client.payment_sources.create_using_temp_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources.create_using_temp_token.$post(args, options))
}

export async function postPaymentSourcesCustPaymentSourceIdUpdateCard(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['update_card']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].update_card.$post(args, options),
  )
}

export async function postPaymentSourcesCustPaymentSourceIdSwitchGatewayAccount(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['switch_gateway_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].switch_gateway_account.$post(args, options),
  )
}

export async function postPaymentSourcesCreateUsingToken(
  args: InferRequestType<typeof client.payment_sources.create_using_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources.create_using_token.$post(args, options))
}

export async function postPaymentSourcesCustPaymentSourceIdDeleteLocal(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['delete_local']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].delete_local.$post(args, options),
  )
}

export async function postPaymentSourcesCreateBankAccount(
  args: InferRequestType<typeof client.payment_sources.create_bank_account.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_sources.create_bank_account.$post(args, options))
}

export async function postPaymentSourcesCustPaymentSourceIdUpdateBankAccount(
  args: InferRequestType<
    (typeof client.payment_sources)[':cust-payment-source-id']['update_bank_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_sources[':cust-payment-source-id'].update_bank_account.$post(args, options),
  )
}

export async function getVaultedPaymentMethodsVaultedPaymentMethodId(
  args: InferRequestType<
    (typeof client.vaulted_payment_methods)[':vaulted-payment-method-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vaulted_payment_methods[':vaulted-payment-method-id'].$get(args, options),
  )
}

export async function postVirtualBankAccountsVirtualBankAccountIdDeleteLocal(
  args: InferRequestType<
    (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete_local']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtual_bank_accounts[':virtual-bank-account-id'].delete_local.$post(args, options),
  )
}

export async function postVirtualBankAccountsVirtualBankAccountIdDelete(
  args: InferRequestType<
    (typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtual_bank_accounts[':virtual-bank-account-id'].delete.$post(args, options),
  )
}

export async function getVirtualBankAccounts(
  args: InferRequestType<typeof client.virtual_bank_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_bank_accounts.$get(args, options))
}

export async function postVirtualBankAccounts(
  args: InferRequestType<typeof client.virtual_bank_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.virtual_bank_accounts.$post(args, options))
}

export async function getVirtualBankAccountsVirtualBankAccountId(
  args: InferRequestType<(typeof client.virtual_bank_accounts)[':virtual-bank-account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtual_bank_accounts[':virtual-bank-account-id'].$get(args, options),
  )
}

export async function postVirtualBankAccountsCreateUsingPermanentToken(
  args: InferRequestType<typeof client.virtual_bank_accounts.create_using_permanent_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.virtual_bank_accounts.create_using_permanent_token.$post(args, options),
  )
}

export async function postCustomersCustomerIdCopyCard(
  args: InferRequestType<(typeof client.customers)[':customer-id']['copy_card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].copy_card.$post(args, options))
}

export async function getCardsCustomerId(
  args: InferRequestType<(typeof client.cards)[':customer-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':customer-id'].$get(args, options))
}

export async function postCustomersCustomerIdSwitchGateway(
  args: InferRequestType<(typeof client.customers)[':customer-id']['switch_gateway']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].switch_gateway.$post(args, options))
}

export async function postCustomersCustomerIdDeleteCard(
  args: InferRequestType<(typeof client.customers)[':customer-id']['delete_card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].delete_card.$post(args, options))
}

export async function postCustomersCustomerIdCreditCard(
  args: InferRequestType<(typeof client.customers)[':customer-id']['credit_card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].credit_card.$post(args, options))
}

export async function getPromotionalCreditsAccountCreditId(
  args: InferRequestType<(typeof client.promotional_credits)[':account-credit-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_credits[':account-credit-id'].$get(args, options))
}

export async function getPromotionalCredits(
  args: InferRequestType<typeof client.promotional_credits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_credits.$get(args, options))
}

export async function postPromotionalCreditsDeduct(
  args: InferRequestType<typeof client.promotional_credits.deduct.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_credits.deduct.$post(args, options))
}

export async function postPromotionalCreditsSet(
  args: InferRequestType<typeof client.promotional_credits.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_credits.set.$post(args, options))
}

export async function postPromotionalCreditsAdd(
  args: InferRequestType<typeof client.promotional_credits.add.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_credits.add.$post(args, options))
}

export async function getCustomersCustomerIdEmailLogs(
  args: InferRequestType<(typeof client.customers)[':customer-id']['email_logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].email_logs.$get(args, options))
}

export async function getGatewayRequestLogsGatewayRequestLogLogId(
  args: InferRequestType<
    (typeof client.gateway_request_logs)[':gateway-request-log-log-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gateway_request_logs[':gateway-request-log-log-id'].$get(args, options),
  )
}

export async function getGatewayRequestLogs(
  args: InferRequestType<typeof client.gateway_request_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gateway_request_logs.$get(args, options))
}

export async function getGatewayWebhookLogsGatewayWebhookLogWebhookId(
  args: InferRequestType<
    (typeof client.gateway_webhook_logs)[':gateway-webhook-log-webhook-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.gateway_webhook_logs[':gateway-webhook-log-webhook-id'].$get(args, options),
  )
}

export async function getGatewayWebhookLogs(
  args: InferRequestType<typeof client.gateway_webhook_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gateway_webhook_logs.$get(args, options))
}

export async function postInvoicesInvoiceIdDeleteLineItems(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['delete_line_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].delete_line_items.$post(args, options))
}

export async function postInvoicesInvoiceIdRemoveCreditNote(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['remove_credit_note']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].remove_credit_note.$post(args, options))
}

export async function postInvoicesInvoiceIdRemovePayment(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['remove_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].remove_payment.$post(args, options))
}

export async function postInvoicesInvoiceIdStopDunning(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['stop_dunning']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].stop_dunning.$post(args, options))
}

export async function postInvoicesInvoiceIdApplyPayments(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['apply_payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].apply_payments.$post(args, options))
}

export async function postInvoicesInvoiceIdApplyPaymentScheduleScheme(
  args: InferRequestType<
    (typeof client.invoices)[':invoice-id']['apply_payment_schedule_scheme']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices[':invoice-id'].apply_payment_schedule_scheme.$post(args, options),
  )
}

export async function postInvoicesInvoiceIdVoid(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].void.$post(args, options))
}

export async function postInvoicesInvoiceIdAddCharge(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].add_charge.$post(args, options))
}

export async function postInvoicesInvoiceIdSendEinvoice(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['send_einvoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].send_einvoice.$post(args, options))
}

export async function getInvoicesInvoiceIdPaymentSchedules(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].payment_schedules.$get(args, options))
}

export async function postInvoicesInvoiceIdWriteOff(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['write_off']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].write_off.$post(args, options))
}

export async function postInvoicesInvoiceIdAddChargeItem(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['add_charge_item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].add_charge_item.$post(args, options))
}

export async function postInvoicesInvoiceIdPauseDunning(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['pause_dunning']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].pause_dunning.$post(args, options))
}

export async function getInvoices(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.$get(args, options))
}

export async function postInvoicesInvoiceIdVoidBeforeCapture(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['void_before_capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices[':invoice-id'].void_before_capture.$post(args, options),
  )
}

export async function postInvoicesInvoiceIdClose(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].close.$post(args, options))
}

export async function postInvoicesInvoiceIdApplyCredits(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['apply_credits']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].apply_credits.$post(args, options))
}

export async function postInvoicesInvoiceIdSendEmail(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['send_email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].send_email.$post(args, options))
}

export async function getInvoicesInvoiceId(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].$get(args, options))
}

export async function postInvoicesCreateForChargeItemsAndCharges(
  args: InferRequestType<typeof client.invoices.create_for_charge_items_and_charges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices.create_for_charge_items_and_charges.$post(args, options),
  )
}

export async function postInvoicesInvoiceIdUpdateDetails(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['update_details']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].update_details.$post(args, options))
}

export async function postInvoicesInvoiceIdRecordPayment(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['record_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].record_payment.$post(args, options))
}

export async function postInvoicesInvoiceIdDelete(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].delete.$post(args, options))
}

export async function postInvoicesImportInvoice(
  args: InferRequestType<typeof client.invoices.import_invoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.import_invoice.$post(args, options))
}

export async function postInvoicesInvoiceIdResumeDunning(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['resume_dunning']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].resume_dunning.$post(args, options))
}

export async function postInvoicesInvoiceIdRecordTaxWithheld(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['record_tax_withheld']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices[':invoice-id'].record_tax_withheld.$post(args, options),
  )
}

export async function postInvoicesInvoiceIdResendEinvoice(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['resend_einvoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].resend_einvoice.$post(args, options))
}

export async function postInvoicesInvoiceIdRemoveTaxWithheld(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['remove_tax_withheld']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices[':invoice-id'].remove_tax_withheld.$post(args, options),
  )
}

export async function getInvoicesPaymentReferenceNumbers(
  args: InferRequestType<typeof client.invoices.payment_reference_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices.payment_reference_numbers.$get(args, options))
}

export async function postInvoicesInvoiceIdRemovePaymentScheduleScheme(
  args: InferRequestType<
    (typeof client.invoices)[':invoice-id']['remove_payment_schedule_scheme']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.invoices[':invoice-id'].remove_payment_schedule_scheme.$post(args, options),
  )
}

export async function postInvoicesInvoiceIdCollectPayment(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['collect_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].collect_payment.$post(args, options))
}

export async function postInvoicesInvoiceIdSyncUsages(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['sync_usages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].sync_usages.$post(args, options))
}

export async function postInvoicesInvoiceIdRefund(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].refund.$post(args, options))
}

export async function postInvoicesInvoiceIdRecordRefund(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['record_refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].record_refund.$post(args, options))
}

export async function postInvoicesInvoiceIdPdf(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['pdf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].pdf.$post(args, options))
}

export async function getInvoicesInvoiceIdDownloadEinvoice(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['download_einvoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].download_einvoice.$get(args, options))
}

export async function getPaymentSchedules(
  args: InferRequestType<typeof client.payment_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_schedules.$get(args, options))
}

export async function postCreditNotesCreditNoteIdRecordRefund(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['record_refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':credit-note-id'].record_refund.$post(args, options),
  )
}

export async function postCreditNotesImportCreditNote(
  args: InferRequestType<typeof client.credit_notes.import_credit_note.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.import_credit_note.$post(args, options))
}

export async function postCreditNotesCreditNoteIdDelete(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].delete.$post(args, options))
}

export async function postCreditNotesCreditNoteIdPdf(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['pdf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].pdf.$post(args, options))
}

export async function postCreditNotesCreditNoteIdSendEinvoice(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['send_einvoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':credit-note-id'].send_einvoice.$post(args, options),
  )
}

export async function postCreditNotesCreditNoteIdVoid(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].void.$post(args, options))
}

export async function postCreditNotesCreditNoteIdRefund(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].refund.$post(args, options))
}

export async function getCreditNotes(
  args: InferRequestType<typeof client.credit_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.$get(args, options))
}

export async function postCreditNotes(
  args: InferRequestType<typeof client.credit_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes.$post(args, options))
}

export async function postCreditNotesCreditNoteIdUpdate(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].update.$post(args, options))
}

export async function getCreditNotesCreditNoteIdDownloadEinvoice(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['download_einvoice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':credit-note-id'].download_einvoice.$get(args, options),
  )
}

export async function postCreditNotesCreditNoteIdResendEinvoice(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['resend_einvoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':credit-note-id'].resend_einvoice.$post(args, options),
  )
}

export async function postCreditNotesCreditNoteIdRemoveTaxWithheldRefund(
  args: InferRequestType<
    (typeof client.credit_notes)[':credit-note-id']['remove_tax_withheld_refund']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_notes[':credit-note-id'].remove_tax_withheld_refund.$post(args, options),
  )
}

export async function getCreditNotesCreditNoteId(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].$get(args, options))
}

export async function postCreditNotesCreditNoteIdSendEmail(
  args: InferRequestType<(typeof client.credit_notes)[':credit-note-id']['send_email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_notes[':credit-note-id'].send_email.$post(args, options))
}

export async function postUnbilledChargesUnbilledChargeIdDelete(
  args: InferRequestType<
    (typeof client.unbilled_charges)[':unbilled-charge-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unbilled_charges[':unbilled-charge-id'].delete.$post(args, options),
  )
}

export async function postUnbilledChargesInvoiceNowEstimate(
  args: InferRequestType<typeof client.unbilled_charges.invoice_now_estimate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unbilled_charges.invoice_now_estimate.$post(args, options))
}

export async function postUnbilledChargesInvoiceUnbilledCharges(
  args: InferRequestType<typeof client.unbilled_charges.invoice_unbilled_charges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unbilled_charges.invoice_unbilled_charges.$post(args, options))
}

export async function getUnbilledCharges(
  args: InferRequestType<typeof client.unbilled_charges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unbilled_charges.$get(args, options))
}

export async function postUnbilledCharges(
  args: InferRequestType<typeof client.unbilled_charges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unbilled_charges.$post(args, options))
}

export async function getOrders(
  args: InferRequestType<typeof client.orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$get(args, options))
}

export async function postOrders(
  args: InferRequestType<typeof client.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$post(args, options))
}

export async function postOrdersImportOrder(
  args: InferRequestType<typeof client.orders.import_order.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.import_order.$post(args, options))
}

export async function postOrdersOrderIdAssignOrderNumber(
  args: InferRequestType<(typeof client.orders)[':order-id']['assign_order_number']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].assign_order_number.$post(args, options))
}

export async function postOrdersOrderIdResend(
  args: InferRequestType<(typeof client.orders)[':order-id']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].resend.$post(args, options))
}

export async function postOrdersOrderIdReopen(
  args: InferRequestType<(typeof client.orders)[':order-id']['reopen']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].reopen.$post(args, options))
}

export async function postOrdersOrderIdCancel(
  args: InferRequestType<(typeof client.orders)[':order-id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].cancel.$post(args, options))
}

export async function getOrdersOrderId(
  args: InferRequestType<(typeof client.orders)[':order-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].$get(args, options))
}

export async function postOrdersOrderId(
  args: InferRequestType<(typeof client.orders)[':order-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].$post(args, options))
}

export async function postOrdersOrderIdDelete(
  args: InferRequestType<(typeof client.orders)[':order-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders[':order-id'].delete.$post(args, options))
}

export async function postOrdersOrderIdCreateRefundableCreditNote(
  args: InferRequestType<
    (typeof client.orders)[':order-id']['create_refundable_credit_note']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders[':order-id'].create_refundable_credit_note.$post(args, options),
  )
}

export async function postGiftsCreateForItems(
  args: InferRequestType<typeof client.gifts.create_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts.create_for_items.$post(args, options))
}

export async function postGiftsGiftIdCancel(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts[':gift-id'].cancel.$post(args, options))
}

export async function postGiftsGiftIdUpdateGift(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['update_gift']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts[':gift-id'].update_gift.$post(args, options))
}

export async function getGifts(
  args: InferRequestType<typeof client.gifts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts.$get(args, options))
}

export async function getGiftsGiftId(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts[':gift-id'].$get(args, options))
}

export async function postGiftsGiftIdClaim(
  args: InferRequestType<(typeof client.gifts)[':gift-id']['claim']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gifts[':gift-id'].claim.$post(args, options))
}

export async function getTransactions(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.$get(args, options))
}

export async function postTransactionsTransactionIdReconcile(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['reconcile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction-id'].reconcile.$post(args, options))
}

export async function getTransactionsTransactionId(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction-id'].$get(args, options))
}

export async function postTransactionsTransactionIdRefund(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction-id'].refund.$post(args, options))
}

export async function postTransactionsTransactionIdRecordRefund(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['record_refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transaction-id'].record_refund.$post(args, options),
  )
}

export async function postTransactionsTransactionIdVoid(
  args: InferRequestType<(typeof client.transactions)[':transaction-id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions[':transaction-id'].void.$post(args, options))
}

export async function postTransactionsCreateAuthorization(
  args: InferRequestType<typeof client.transactions.create_authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.transactions.create_authorization.$post(args, options))
}

export async function getInvoicesInvoiceIdPayments(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].payments.$get(args, options))
}

export async function postTransactionsTransactionIdDeleteOfflineTransaction(
  args: InferRequestType<
    (typeof client.transactions)[':transaction-id']['delete_offline_transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.transactions[':transaction-id'].delete_offline_transaction.$post(args, options),
  )
}

export async function getDisputesDisputeId(
  args: InferRequestType<(typeof client.disputes)[':dispute-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes[':dispute-id'].$get(args, options))
}

export async function getDisputes(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disputes.$get(args, options))
}

export async function postHostedPagesCheckoutOneTimeForItems(
  args: InferRequestType<typeof client.hosted_pages.checkout_one_time_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.checkout_one_time_for_items.$post(args, options))
}

export async function postHostedPagesExtendSubscription(
  args: InferRequestType<typeof client.hosted_pages.extend_subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.extend_subscription.$post(args, options))
}

export async function postHostedPagesEvents(
  args: InferRequestType<typeof client.hosted_pages.events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.events.$post(args, options))
}

export async function postHostedPagesCheckoutGiftForItems(
  args: InferRequestType<typeof client.hosted_pages.checkout_gift_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.checkout_gift_for_items.$post(args, options))
}

export async function getHostedPages(
  args: InferRequestType<typeof client.hosted_pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.$get(args, options))
}

export async function postHostedPagesViewVoucher(
  args: InferRequestType<typeof client.hosted_pages.view_voucher.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.view_voucher.$post(args, options))
}

export async function postHostedPagesCollectNow(
  args: InferRequestType<typeof client.hosted_pages.collect_now.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.collect_now.$post(args, options))
}

export async function postHostedPagesAcceptQuote(
  args: InferRequestType<typeof client.hosted_pages.accept_quote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.accept_quote.$post(args, options))
}

export async function postHostedPagesCheckoutNewForItems(
  args: InferRequestType<typeof client.hosted_pages.checkout_new_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.checkout_new_for_items.$post(args, options))
}

export async function postHostedPagesClaimGift(
  args: InferRequestType<typeof client.hosted_pages.claim_gift.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.claim_gift.$post(args, options))
}

export async function postHostedPagesCheckoutExistingForItems(
  args: InferRequestType<typeof client.hosted_pages.checkout_existing_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.checkout_existing_for_items.$post(args, options))
}

export async function postHostedPagesPreCancel(
  args: InferRequestType<typeof client.hosted_pages.pre_cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.pre_cancel.$post(args, options))
}

export async function postHostedPagesHostedPageIdAcknowledge(
  args: InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hosted_pages[':hosted-page-id'].acknowledge.$post(args, options),
  )
}

export async function postHostedPagesRetrieveAgreementPdf(
  args: InferRequestType<typeof client.hosted_pages.retrieve_agreement_pdf.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.retrieve_agreement_pdf.$post(args, options))
}

export async function getHostedPagesHostedPageId(
  args: InferRequestType<(typeof client.hosted_pages)[':hosted-page-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages[':hosted-page-id'].$get(args, options))
}

export async function postHostedPagesManagePaymentSources(
  args: InferRequestType<typeof client.hosted_pages.manage_payment_sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hosted_pages.manage_payment_sources.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdRenewalEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['renewal_estimate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].renewal_estimate.$get(args, options),
  )
}

export async function postEstimatesCreateSubscriptionForItems(
  args: InferRequestType<typeof client.estimates.create_subscription_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.create_subscription_for_items.$post(args, options))
}

export async function postEstimatesPaymentSchedules(
  args: InferRequestType<typeof client.estimates.payment_schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.payment_schedules.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['cancel_subscription_for_items_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].cancel_subscription_for_items_estimate.$post(
      args,
      options,
    ),
  )
}

export async function postSubscriptionsSubscriptionIdResumeSubscriptionEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['resume_subscription_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].resume_subscription_estimate.$post(args, options),
  )
}

export async function postEstimatesCreateInvoiceForItems(
  args: InferRequestType<typeof client.estimates.create_invoice_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.create_invoice_for_items.$post(args, options))
}

export async function postEstimatesGiftSubscriptionForItems(
  args: InferRequestType<typeof client.estimates.gift_subscription_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.gift_subscription_for_items.$post(args, options))
}

export async function postEstimatesUpdateSubscriptionForItems(
  args: InferRequestType<typeof client.estimates.update_subscription_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.estimates.update_subscription_for_items.$post(args, options))
}

export async function getCustomersCustomerIdUpcomingInvoicesEstimate(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['upcoming_invoices_estimate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].upcoming_invoices_estimate.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdRegenerateInvoiceEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['regenerate_invoice_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].regenerate_invoice_estimate.$post(args, options),
  )
}

export async function postCustomersCustomerIdCreateSubscriptionForItemsEstimate(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['create_subscription_for_items_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].create_subscription_for_items_estimate.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdChangeTermEndEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['change_term_end_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].change_term_end_estimate.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdPauseSubscriptionEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['pause_subscription_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].pause_subscription_estimate.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdAdvanceInvoiceEstimate(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['advance_invoice_estimate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].advance_invoice_estimate.$post(args, options),
  )
}

export async function postCustomersCustomerIdCreateSubscriptionQuoteForItems(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['create_subscription_quote_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].create_subscription_quote_for_items.$post(args, options),
  )
}

export async function getQuotesQuoteId(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].$get(args, options))
}

export async function postQuotesQuoteIdUpdateStatus(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['update_status']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].update_status.$post(args, options))
}

export async function postQuotesQuoteIdExtendExpiryDate(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['extend_expiry_date']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].extend_expiry_date.$post(args, options))
}

export async function postQuotesQuoteIdEditUpdateSubscriptionQuoteForItems(
  args: InferRequestType<
    (typeof client.quotes)[':quote-id']['edit_update_subscription_quote_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quote-id'].edit_update_subscription_quote_for_items.$post(args, options),
  )
}

export async function getQuotes(
  args: InferRequestType<typeof client.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes.$get(args, options))
}

export async function postQuotesQuoteIdConvert(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['convert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].convert.$post(args, options))
}

export async function postQuotesQuoteIdDelete(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].delete.$post(args, options))
}

export async function postQuotesQuoteIdEditCreateSubscriptionQuoteForItems(
  args: InferRequestType<
    (typeof client.quotes)[':quote-id']['edit_create_subscription_quote_for_items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quote-id'].edit_create_subscription_quote_for_items.$post(args, options),
  )
}

export async function postQuotesUpdateSubscriptionQuoteForItems(
  args: InferRequestType<typeof client.quotes.update_subscription_quote_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes.update_subscription_quote_for_items.$post(args, options))
}

export async function getQuotesQuoteIdQuoteLineGroups(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_line_groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].quote_line_groups.$get(args, options))
}

export async function postQuotesQuoteIdEditForChargeItemsAndCharges(
  args: InferRequestType<
    (typeof client.quotes)[':quote-id']['edit_for_charge_items_and_charges']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.quotes[':quote-id'].edit_for_charge_items_and_charges.$post(args, options),
  )
}

export async function postQuotesQuoteIdPdf(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['pdf']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].pdf.$post(args, options))
}

export async function postQuotesCreateForChargeItemsAndCharges(
  args: InferRequestType<typeof client.quotes.create_for_charge_items_and_charges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes.create_for_charge_items_and_charges.$post(args, options))
}

export async function getQuotesQuoteIdQuoteEntitlements(
  args: InferRequestType<(typeof client.quotes)[':quote-id']['quote_entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotes[':quote-id'].quote_entitlements.$get(args, options))
}

export async function getCoupons(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.$get(args, options))
}

export async function postCouponsCouponIdUpdateForItems(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['update_for_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':coupon-id'].update_for_items.$post(args, options))
}

export async function postCouponsCouponIdUnarchive(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['unarchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':coupon-id'].unarchive.$post(args, options))
}

export async function postCouponsCouponIdDelete(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':coupon-id'].delete.$post(args, options))
}

export async function postCouponsCopy(
  args: InferRequestType<typeof client.coupons.copy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.copy.$post(args, options))
}

export async function getCouponsCouponId(
  args: InferRequestType<(typeof client.coupons)[':coupon-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons[':coupon-id'].$get(args, options))
}

export async function postCouponsCreateForItems(
  args: InferRequestType<typeof client.coupons.create_for_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupons.create_for_items.$post(args, options))
}

export async function getCouponSets(
  args: InferRequestType<typeof client.coupon_sets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_sets.$get(args, options))
}

export async function postCouponSets(
  args: InferRequestType<typeof client.coupon_sets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_sets.$post(args, options))
}

export async function postCouponSetsCouponSetIdUpdate(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_sets[':coupon-set-id'].update.$post(args, options))
}

export async function getCouponSetsCouponSetId(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_sets[':coupon-set-id'].$get(args, options))
}

export async function postCouponSetsCouponSetIdAddCouponCodes(
  args: InferRequestType<
    (typeof client.coupon_sets)[':coupon-set-id']['add_coupon_codes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.coupon_sets[':coupon-set-id'].add_coupon_codes.$post(args, options),
  )
}

export async function postCouponSetsCouponSetIdDeleteUnusedCouponCodes(
  args: InferRequestType<
    (typeof client.coupon_sets)[':coupon-set-id']['delete_unused_coupon_codes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.coupon_sets[':coupon-set-id'].delete_unused_coupon_codes.$post(args, options),
  )
}

export async function postCouponSetsCouponSetIdDelete(
  args: InferRequestType<(typeof client.coupon_sets)[':coupon-set-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_sets[':coupon-set-id'].delete.$post(args, options))
}

export async function getCouponCodes(
  args: InferRequestType<typeof client.coupon_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_codes.$get(args, options))
}

export async function getCouponCodesCouponCodeCode(
  args: InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_codes[':coupon-code-code'].$get(args, options))
}

export async function postCouponCodesCouponCodeCodeArchive(
  args: InferRequestType<(typeof client.coupon_codes)[':coupon-code-code']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.coupon_codes[':coupon-code-code'].archive.$post(args, options))
}

export async function getAddresses(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$get(args, options))
}

export async function postAddresses(
  args: InferRequestType<typeof client.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$post(args, options))
}

export async function postUsagesPdf(
  args: InferRequestType<typeof client.usages.pdf.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usages.pdf.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdUsages(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].usages.$get(args, options))
}

export async function postSubscriptionsSubscriptionIdUsages(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['usages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.subscriptions[':subscription-id'].usages.$post(args, options))
}

export async function postSubscriptionsSubscriptionIdDeleteUsage(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['delete_usage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].delete_usage.$post(args, options),
  )
}

export async function getUsages(
  args: InferRequestType<typeof client.usages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usages.$get(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':event-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event-id'].$get(args, options))
}

export async function postCommentsCommentIdDelete(
  args: InferRequestType<(typeof client.comments)[':comment-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment-id'].delete.$post(args, options))
}

export async function getCommentsCommentId(
  args: InferRequestType<(typeof client.comments)[':comment-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment-id'].$get(args, options))
}

export async function getComments(
  args: InferRequestType<typeof client.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$get(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function postPortalSessions(
  args: InferRequestType<typeof client.portal_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portal_sessions.$post(args, options))
}

export async function postPortalSessionsPortalSessionIdActivate(
  args: InferRequestType<
    (typeof client.portal_sessions)[':portal-session-id']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portal_sessions[':portal-session-id'].activate.$post(args, options),
  )
}

export async function postPortalSessionsPortalSessionIdLogout(
  args: InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['logout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.portal_sessions[':portal-session-id'].logout.$post(args, options),
  )
}

export async function getPortalSessionsPortalSessionId(
  args: InferRequestType<(typeof client.portal_sessions)[':portal-session-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portal_sessions[':portal-session-id'].$get(args, options))
}

export async function getSiteMigrationDetails(
  args: InferRequestType<typeof client.site_migration_details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site_migration_details.$get(args, options))
}

export async function getResourceMigrationsRetrieveLatest(
  args: InferRequestType<typeof client.resource_migrations.retrieve_latest.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_migrations.retrieve_latest.$get(args, options))
}

export async function getTimeMachinesTimeMachineName(
  args: InferRequestType<(typeof client.time_machines)[':time-machine-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.time_machines[':time-machine-name'].$get(args, options))
}

export async function postTimeMachinesTimeMachineNameTravelForward(
  args: InferRequestType<
    (typeof client.time_machines)[':time-machine-name']['travel_forward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_machines[':time-machine-name'].travel_forward.$post(args, options),
  )
}

export async function postTimeMachinesTimeMachineNameStartAfresh(
  args: InferRequestType<
    (typeof client.time_machines)[':time-machine-name']['start_afresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.time_machines[':time-machine-name'].start_afresh.$post(args, options),
  )
}

export async function postExportsCustomers(
  args: InferRequestType<typeof client.exports.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.customers.$post(args, options))
}

export async function postExportsAttachedItems(
  args: InferRequestType<typeof client.exports.attached_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.attached_items.$post(args, options))
}

export async function postExportsTransactions(
  args: InferRequestType<typeof client.exports.transactions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.transactions.$post(args, options))
}

export async function postExportsRamps(
  args: InferRequestType<typeof client.exports.ramps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.ramps.$post(args, options))
}

export async function postExportsDifferentialPrices(
  args: InferRequestType<typeof client.exports.differential_prices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.differential_prices.$post(args, options))
}

export async function postExportsItemFamilies(
  args: InferRequestType<typeof client.exports.item_families.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.item_families.$post(args, options))
}

export async function postExportsInvoices(
  args: InferRequestType<typeof client.exports.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.invoices.$post(args, options))
}

export async function getExportsExportId(
  args: InferRequestType<(typeof client.exports)[':export-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':export-id'].$get(args, options))
}

export async function postExportsPriceVariants(
  args: InferRequestType<typeof client.exports.price_variants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.price_variants.$post(args, options))
}

export async function postExportsItems(
  args: InferRequestType<typeof client.exports.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.items.$post(args, options))
}

export async function postExportsDeferredRevenue(
  args: InferRequestType<typeof client.exports.deferred_revenue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.deferred_revenue.$post(args, options))
}

export async function postExportsRevenueRecognition(
  args: InferRequestType<typeof client.exports.revenue_recognition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.revenue_recognition.$post(args, options))
}

export async function postExportsCreditNotes(
  args: InferRequestType<typeof client.exports.credit_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.credit_notes.$post(args, options))
}

export async function postExportsCoupons(
  args: InferRequestType<typeof client.exports.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.coupons.$post(args, options))
}

export async function postExportsOrders(
  args: InferRequestType<typeof client.exports.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.orders.$post(args, options))
}

export async function postExportsItemPrices(
  args: InferRequestType<typeof client.exports.item_prices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.item_prices.$post(args, options))
}

export async function postExportsSubscriptions(
  args: InferRequestType<typeof client.exports.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.subscriptions.$post(args, options))
}

export async function getFullExportsStatus(
  args: InferRequestType<typeof client.full_exports.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.full_exports.status.$get(args, options))
}

export async function getPaymentIntentsPaymentIntentId(
  args: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_intents[':payment-intent-id'].$get(args, options))
}

export async function postPaymentIntentsPaymentIntentId(
  args: InferRequestType<(typeof client.payment_intents)[':payment-intent-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_intents[':payment-intent-id'].$post(args, options))
}

export async function postPaymentIntents(
  args: InferRequestType<typeof client.payment_intents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_intents.$post(args, options))
}

export async function getCustomFieldConfigsRetrieve(
  args: InferRequestType<typeof client.custom_field_configs.retrieve.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_field_configs.retrieve.$get(args, options))
}

export async function getCustomFieldConfigs(
  args: InferRequestType<typeof client.custom_field_configs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_field_configs.$get(args, options))
}

export async function postItemFamiliesItemFamilyIdDelete(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_families[':item-family-id'].delete.$post(args, options))
}

export async function getItemFamilies(
  args: InferRequestType<typeof client.item_families.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_families.$get(args, options))
}

export async function postItemFamilies(
  args: InferRequestType<typeof client.item_families.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_families.$post(args, options))
}

export async function getItemFamiliesItemFamilyId(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_families[':item-family-id'].$get(args, options))
}

export async function postItemFamiliesItemFamilyId(
  args: InferRequestType<(typeof client.item_families)[':item-family-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_families[':item-family-id'].$post(args, options))
}

export async function getProductsProductId(
  args: InferRequestType<(typeof client.products)[':product-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].$get(args, options))
}

export async function postProductsProductId(
  args: InferRequestType<(typeof client.products)[':product-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].$post(args, options))
}

export async function postProductsProductIdDelete(
  args: InferRequestType<(typeof client.products)[':product-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].delete.$post(args, options))
}

export async function postProductsProductIdUpdateOptions(
  args: InferRequestType<(typeof client.products)[':product-id']['update_options']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].update_options.$post(args, options))
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

export async function getProductsProductIdVariants(
  args: InferRequestType<(typeof client.products)[':product-id']['variants']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].variants.$get(args, options))
}

export async function postProductsProductIdVariants(
  args: InferRequestType<(typeof client.products)[':product-id']['variants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':product-id'].variants.$post(args, options))
}

export async function getVariantsProductVariantId(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variants[':product-variant-id'].$get(args, options))
}

export async function postVariantsProductVariantId(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variants[':product-variant-id'].$post(args, options))
}

export async function postVariantsProductVariantIdDelete(
  args: InferRequestType<(typeof client.variants)[':product-variant-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.variants[':product-variant-id'].delete.$post(args, options))
}

export async function getItems(
  args: InferRequestType<typeof client.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$get(args, options))
}

export async function postItems(
  args: InferRequestType<typeof client.items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items.$post(args, options))
}

export async function postItemsItemIdDelete(
  args: InferRequestType<(typeof client.items)[':item-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].delete.$post(args, options))
}

export async function getItemsItemId(
  args: InferRequestType<(typeof client.items)[':item-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].$get(args, options))
}

export async function postItemsItemId(
  args: InferRequestType<(typeof client.items)[':item-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].$post(args, options))
}

export async function postPriceVariantsPriceVariantIdDelete(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_variants[':price-variant-id'].delete.$post(args, options))
}

export async function getPriceVariants(
  args: InferRequestType<typeof client.price_variants.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_variants.$get(args, options))
}

export async function postPriceVariants(
  args: InferRequestType<typeof client.price_variants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_variants.$post(args, options))
}

export async function getPriceVariantsPriceVariantId(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_variants[':price-variant-id'].$get(args, options))
}

export async function postPriceVariantsPriceVariantId(
  args: InferRequestType<(typeof client.price_variants)[':price-variant-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_variants[':price-variant-id'].$post(args, options))
}

export async function getItemPricesItemPriceId(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_prices[':item-price-id'].$get(args, options))
}

export async function postItemPricesItemPriceId(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_prices[':item-price-id'].$post(args, options))
}

export async function postItemPricesItemPriceIdDelete(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_prices[':item-price-id'].delete.$post(args, options))
}

export async function getItemPricesItemPriceIdApplicableItemPrices(
  args: InferRequestType<
    (typeof client.item_prices)[':item-price-id']['applicable_item_prices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.item_prices[':item-price-id'].applicable_item_prices.$get(args, options),
  )
}

export async function getItemPricesItemPriceIdApplicableItems(
  args: InferRequestType<(typeof client.item_prices)[':item-price-id']['applicable_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.item_prices[':item-price-id'].applicable_items.$get(args, options),
  )
}

export async function getItemPrices(
  args: InferRequestType<typeof client.item_prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_prices.$get(args, options))
}

export async function postItemPrices(
  args: InferRequestType<typeof client.item_prices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.item_prices.$post(args, options))
}

export async function getAttachedItemsAttachedItemId(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attached_items[':attached-item-id'].$get(args, options))
}

export async function postAttachedItemsAttachedItemId(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attached_items[':attached-item-id'].$post(args, options))
}

export async function getItemsItemIdAttachedItems(
  args: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].attached_items.$get(args, options))
}

export async function postItemsItemIdAttachedItems(
  args: InferRequestType<(typeof client.items)[':item-id']['attached_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].attached_items.$post(args, options))
}

export async function postAttachedItemsAttachedItemIdDelete(
  args: InferRequestType<(typeof client.attached_items)[':attached-item-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attached_items[':attached-item-id'].delete.$post(args, options))
}

export async function postDifferentialPricesDifferentialPriceIdDelete(
  args: InferRequestType<
    (typeof client.differential_prices)[':differential-price-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.differential_prices[':differential-price-id'].delete.$post(args, options),
  )
}

export async function postItemPricesItemPriceIdDifferentialPrices(
  args: InferRequestType<
    (typeof client.item_prices)[':item-price-id']['differential_prices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.item_prices[':item-price-id'].differential_prices.$post(args, options),
  )
}

export async function getDifferentialPrices(
  args: InferRequestType<typeof client.differential_prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.differential_prices.$get(args, options))
}

export async function getDifferentialPricesDifferentialPriceId(
  args: InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.differential_prices[':differential-price-id'].$get(args, options),
  )
}

export async function postDifferentialPricesDifferentialPriceId(
  args: InferRequestType<(typeof client.differential_prices)[':differential-price-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.differential_prices[':differential-price-id'].$post(args, options),
  )
}

export async function getPriceRamps(
  args: InferRequestType<typeof client.price_ramps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_ramps.$get(args, options))
}

export async function postPriceRamps(
  args: InferRequestType<typeof client.price_ramps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_ramps.$post(args, options))
}

export async function postPriceRampsPriceRampIdDelete(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_ramps[':price-ramp-id'].delete.$post(args, options))
}

export async function getPriceRampsPriceRampId(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_ramps[':price-ramp-id'].$get(args, options))
}

export async function postPriceRampsPriceRampId(
  args: InferRequestType<(typeof client.price_ramps)[':price-ramp-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.price_ramps[':price-ramp-id'].$post(args, options))
}

export async function getConfigurations(
  args: InferRequestType<typeof client.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configurations.$get(args, options))
}

export async function getFeatures(
  args: InferRequestType<typeof client.features.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features.$get(args, options))
}

export async function postFeatures(
  args: InferRequestType<typeof client.features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features.$post(args, options))
}

export async function postFeaturesFeatureIdDelete(
  args: InferRequestType<(typeof client.features)[':feature-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].delete.$post(args, options))
}

export async function getFeaturesFeatureId(
  args: InferRequestType<(typeof client.features)[':feature-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].$get(args, options))
}

export async function postFeaturesFeatureId(
  args: InferRequestType<(typeof client.features)[':feature-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].$post(args, options))
}

export async function postFeaturesFeatureIdArchiveCommand(
  args: InferRequestType<(typeof client.features)[':feature-id']['archive_command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].archive_command.$post(args, options))
}

export async function postFeaturesFeatureIdActivateCommand(
  args: InferRequestType<(typeof client.features)[':feature-id']['activate_command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].activate_command.$post(args, options))
}

export async function postFeaturesFeatureIdReactivateCommand(
  args: InferRequestType<(typeof client.features)[':feature-id']['reactivate_command']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].reactivate_command.$post(args, options))
}

export async function getCreditUnits(
  args: InferRequestType<typeof client.credit_units.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_units.$get(args, options))
}

export async function postCreditUnits(
  args: InferRequestType<typeof client.credit_units.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_units.$post(args, options))
}

export async function postCreditUnitsCreditUnitIdArchiveCommand(
  args: InferRequestType<
    (typeof client.credit_units)[':credit-unit-id']['archive_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_units[':credit-unit-id'].archive_command.$post(args, options),
  )
}

export async function postCreditUnitsCreditUnitId(
  args: InferRequestType<(typeof client.credit_units)[':credit-unit-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_units[':credit-unit-id'].$post(args, options))
}

export async function postCreditUnitsCreditUnitIdReactivateCommand(
  args: InferRequestType<
    (typeof client.credit_units)[':credit-unit-id']['reactivate_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.credit_units[':credit-unit-id'].reactivate_command.$post(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailability(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['set_availability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].subscription_entitlements.set_availability.$post(
      args,
      options,
    ),
  )
}

export async function getSubscriptionsSubscriptionIdSubscriptionEntitlements(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['subscription_entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].subscription_entitlements.$get(args, options),
  )
}

export async function getCustomersCustomerIdCustomerEntitlements(
  args: InferRequestType<
    (typeof client.customers)[':customer-id']['customer_entitlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.customers[':customer-id'].customer_entitlements.$get(args, options),
  )
}

export async function getFeaturesFeatureIdItemEntitlements(
  args: InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].item_entitlements.$get(args, options))
}

export async function postFeaturesFeatureIdItemEntitlements(
  args: InferRequestType<(typeof client.features)[':feature-id']['item_entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.features[':feature-id'].item_entitlements.$post(args, options))
}

export async function getItemsItemIdItemEntitlements(
  args: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].item_entitlements.$get(args, options))
}

export async function postItemsItemIdItemEntitlements(
  args: InferRequestType<(typeof client.items)[':item-id']['item_entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':item-id'].item_entitlements.$post(args, options))
}

export async function getEntitlements(
  args: InferRequestType<typeof client.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entitlements.$get(args, options))
}

export async function postEntitlements(
  args: InferRequestType<typeof client.entitlements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.entitlements.$post(args, options))
}

export async function postInAppSubscriptionsInAppSubscriptionAppIdRetrieve(
  args: InferRequestType<
    (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['retrieve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.in_app_subscriptions[':in-app-subscription-app-id'].retrieve.$post(args, options),
  )
}

export async function postInAppSubscriptionsInAppSubscriptionAppIdImportReceipt(
  args: InferRequestType<
    (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_receipt']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.in_app_subscriptions[':in-app-subscription-app-id'].import_receipt.$post(args, options),
  )
}

export async function postInAppSubscriptionsInAppSubscriptionAppIdImportSubscription(
  args: InferRequestType<
    (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['import_subscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.in_app_subscriptions[':in-app-subscription-app-id'].import_subscription.$post(
      args,
      options,
    ),
  )
}

export async function postInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommand(
  args: InferRequestType<
    (typeof client.in_app_subscriptions)[':in-app-subscription-app-id']['process_purchase_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.in_app_subscriptions[':in-app-subscription-app-id'].process_purchase_command.$post(
      args,
      options,
    ),
  )
}

export async function postNonSubscriptionsNonSubscriptionAppIdOneTimePurchase(
  args: InferRequestType<
    (typeof client.non_subscriptions)[':non-subscription-app-id']['one_time_purchase']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.non_subscriptions[':non-subscription-app-id'].one_time_purchase.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdEntitlementOverrides(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].entitlement_overrides.$get(args, options),
  )
}

export async function postSubscriptionsSubscriptionIdEntitlementOverrides(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['entitlement_overrides']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].entitlement_overrides.$post(args, options),
  )
}

export async function getBusinessEntitiesBusinessEntityId(
  args: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities[':business-entity-id'].$get(args, options))
}

export async function postBusinessEntitiesBusinessEntityId(
  args: InferRequestType<(typeof client.business_entities)[':business-entity-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities[':business-entity-id'].$post(args, options))
}

export async function getBusinessEntities(
  args: InferRequestType<typeof client.business_entities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities.$get(args, options))
}

export async function postBusinessEntities(
  args: InferRequestType<typeof client.business_entities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities.$post(args, options))
}

export async function getBusinessEntitiesTransfers(
  args: InferRequestType<typeof client.business_entities.transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities.transfers.$get(args, options))
}

export async function postBusinessEntitiesTransfers(
  args: InferRequestType<typeof client.business_entities.transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_entities.transfers.$post(args, options))
}

export async function postPurchases(
  args: InferRequestType<typeof client.purchases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchases.$post(args, options))
}

export async function postPurchasesEstimate(
  args: InferRequestType<typeof client.purchases.estimate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchases.estimate.$post(args, options))
}

export async function getCustomersCustomerIdPaymentVouchers(
  args: InferRequestType<(typeof client.customers)[':customer-id']['payment_vouchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.customers[':customer-id'].payment_vouchers.$get(args, options))
}

export async function getInvoicesInvoiceIdPaymentVouchers(
  args: InferRequestType<(typeof client.invoices)[':invoice-id']['payment_vouchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invoices[':invoice-id'].payment_vouchers.$get(args, options))
}

export async function getPaymentVouchersPaymentVoucherId(
  args: InferRequestType<(typeof client.payment_vouchers)[':payment-voucher-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_vouchers[':payment-voucher-id'].$get(args, options))
}

export async function postPaymentVouchers(
  args: InferRequestType<typeof client.payment_vouchers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_vouchers.$post(args, options))
}

export async function postCsvTaxRules(
  args: InferRequestType<typeof client.csv_tax_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.csv_tax_rules.$post(args, options))
}

export async function getOrganizationDetails(
  args: InferRequestType<typeof client.organization_details.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_details.$get(args, options))
}

export async function postOrganizationDetails(
  args: InferRequestType<typeof client.organization_details.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.organization_details.$post(args, options))
}

export async function getOrganizationDetailsOrganizationDetailId(
  args: InferRequestType<(typeof client.organization_details)[':organization-detail-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.organization_details[':organization-detail-id'].$get(args, options),
  )
}

export async function postCurrenciesSiteCurrencyIdAddSchedule(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['add_schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.currencies[':site-currency-id'].add_schedule.$post(args, options),
  )
}

export async function postCurrencies(
  args: InferRequestType<typeof client.currencies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies.$post(args, options))
}

export async function getCurrenciesSiteCurrencyId(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies[':site-currency-id'].$get(args, options))
}

export async function postCurrenciesSiteCurrencyId(
  args: InferRequestType<(typeof client.currencies)[':site-currency-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies[':site-currency-id'].$post(args, options))
}

export async function postCurrenciesSiteCurrencyIdRemoveSchedule(
  args: InferRequestType<
    (typeof client.currencies)[':site-currency-id']['remove_schedule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.currencies[':site-currency-id'].remove_schedule.$post(args, options),
  )
}

export async function getCurrenciesList(
  args: InferRequestType<typeof client.currencies.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.currencies.list.$get(args, options))
}

export async function getRampsRampId(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ramps[':ramp-id'].$get(args, options))
}

export async function postSubscriptionsSubscriptionIdCreateRamp(
  args: InferRequestType<(typeof client.subscriptions)[':subscription-id']['create_ramp']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].create_ramp.$post(args, options),
  )
}

export async function getRamps(
  args: InferRequestType<typeof client.ramps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ramps.$get(args, options))
}

export async function postRampsRampIdUpdate(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ramps[':ramp-id'].update.$post(args, options))
}

export async function postRampsRampIdDelete(
  args: InferRequestType<(typeof client.ramps)[':ramp-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ramps[':ramp-id'].delete.$post(args, options))
}

export async function getPaymentScheduleSchemesPaymentScheduleSchemeId(
  args: InferRequestType<
    (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_schedule_schemes[':payment-schedule-scheme-id'].$get(args, options),
  )
}

export async function getPaymentScheduleSchemes(
  args: InferRequestType<typeof client.payment_schedule_schemes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_schedule_schemes.$get(args, options))
}

export async function postPaymentScheduleSchemes(
  args: InferRequestType<typeof client.payment_schedule_schemes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payment_schedule_schemes.$post(args, options))
}

export async function postPaymentScheduleSchemesPaymentScheduleSchemeIdDelete(
  args: InferRequestType<
    (typeof client.payment_schedule_schemes)[':payment-schedule-scheme-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payment_schedule_schemes[':payment-schedule-scheme-id'].delete.$post(args, options),
  )
}

export async function postPc2MigrationsPc2MigrationIdContactSupport(
  args: InferRequestType<
    (typeof client.pc2_migrations)[':pc2-migration-id']['contact_support']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migrations[':pc2-migration-id'].contact_support.$post(args, options),
  )
}

export async function getPc2MigrationsPc2MigrationId(
  args: InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migrations[':pc2-migration-id'].$get(args, options))
}

export async function postPc2Migrations(
  args: InferRequestType<typeof client.pc2_migrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migrations.$post(args, options))
}

export async function postPc2MigrationsPc2MigrationIdInitiate(
  args: InferRequestType<(typeof client.pc2_migrations)[':pc2-migration-id']['initiate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migrations[':pc2-migration-id'].initiate.$post(args, options),
  )
}

export async function postPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDelete(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_families[':pc2-migration-item-family-id'].delete.$post(args, options),
  )
}

export async function getPc2MigrationItemFamiliesPc2MigrationItemFamilyId(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_families[':pc2-migration-item-family-id'].$get(args, options),
  )
}

export async function postPc2MigrationItemFamiliesPc2MigrationItemFamilyId(
  args: InferRequestType<
    (typeof client.pc2_migration_item_families)[':pc2-migration-item-family-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_families[':pc2-migration-item-family-id'].$post(args, options),
  )
}

export async function getPc2MigrationItemFamilies(
  args: InferRequestType<typeof client.pc2_migration_item_families.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_item_families.$get(args, options))
}

export async function postPc2MigrationItemFamilies(
  args: InferRequestType<typeof client.pc2_migration_item_families.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_item_families.$post(args, options))
}

export async function getPc2MigrationItemsPc2MigrationItemId(
  args: InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_items[':pc2-migration-item-id'].$get(args, options),
  )
}

export async function postPc2MigrationItemsPc2MigrationItemId(
  args: InferRequestType<(typeof client.pc2_migration_items)[':pc2-migration-item-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_items[':pc2-migration-item-id'].$post(args, options),
  )
}

export async function postPc2MigrationItemsPc2MigrationItemIdDelete(
  args: InferRequestType<
    (typeof client.pc2_migration_items)[':pc2-migration-item-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_items[':pc2-migration-item-id'].delete.$post(args, options),
  )
}

export async function getPc2MigrationItems(
  args: InferRequestType<typeof client.pc2_migration_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_items.$get(args, options))
}

export async function postPc2MigrationItems(
  args: InferRequestType<typeof client.pc2_migration_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_items.$post(args, options))
}

export async function getPc2MigrationItemsApplicableItems(
  args: InferRequestType<typeof client.pc2_migration_items.applicable_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_items.applicable_items.$get(args, options))
}

export async function getPc2MigrationItemPrices(
  args: InferRequestType<typeof client.pc2_migration_item_prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pc2_migration_item_prices.$get(args, options))
}

export async function postPc2MigrationItemPricesPc2MigrationItemPriceIdDelete(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_prices[':pc2-migration-item-price-id'].delete.$post(args, options),
  )
}

export async function getPc2MigrationItemPricesPc2MigrationItemPriceId(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_prices[':pc2-migration-item-price-id'].$get(args, options),
  )
}

export async function postPc2MigrationItemPricesPc2MigrationItemPriceId(
  args: InferRequestType<
    (typeof client.pc2_migration_item_prices)[':pc2-migration-item-price-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pc2_migration_item_prices[':pc2-migration-item-price-id'].$post(args, options),
  )
}

export async function postPricingPageSessionsCreateForExistingSubscription(
  args: InferRequestType<
    typeof client.pricing_page_sessions.create_for_existing_subscription.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing_page_sessions.create_for_existing_subscription.$post(args, options),
  )
}

export async function postPricingPageSessionsCreateForNewSubscription(
  args: InferRequestType<typeof client.pricing_page_sessions.create_for_new_subscription.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.pricing_page_sessions.create_for_new_subscription.$post(args, options),
  )
}

export async function getSitePcMetaRecords(
  args: InferRequestType<typeof client.site_pc_meta_records.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.site_pc_meta_records.$get(args, options))
}

export async function postOmnichannelSubscriptionsOmnichannelSubscriptionIdMove(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['move']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.omnichannel_subscriptions[':omnichannel-subscription-id'].move.$post(args, options),
  )
}

export async function getOmnichannelSubscriptionsOmnichannelSubscriptionId(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.omnichannel_subscriptions[':omnichannel-subscription-id'].$get(args, options),
  )
}

export async function getOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactions(
  args: InferRequestType<
    (typeof client.omnichannel_subscriptions)[':omnichannel-subscription-id']['omnichannel_transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.omnichannel_subscriptions[':omnichannel-subscription-id'].omnichannel_transactions.$get(
      args,
      options,
    ),
  )
}

export async function getOmnichannelSubscriptions(
  args: InferRequestType<typeof client.omnichannel_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.omnichannel_subscriptions.$get(args, options))
}

export async function getOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChanges(
  args: InferRequestType<
    (typeof client.omnichannel_subscription_items)[':omnichannel-subscription-item-id']['scheduled_changes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.omnichannel_subscription_items[
      ':omnichannel-subscription-item-id'
    ].scheduled_changes.$get(args, options),
  )
}

export async function getRecordedPurchasesRecordedPurchaseId(
  args: InferRequestType<(typeof client.recorded_purchases)[':recorded-purchase-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recorded_purchases[':recorded-purchase-id'].$get(args, options))
}

export async function postRecordedPurchases(
  args: InferRequestType<typeof client.recorded_purchases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recorded_purchases.$post(args, options))
}

export async function getOmnichannelOneTimeOrders(
  args: InferRequestType<typeof client.omnichannel_one_time_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.omnichannel_one_time_orders.$get(args, options))
}

export async function getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderId(
  args: InferRequestType<
    (typeof client.omnichannel_one_time_orders)[':omnichannel-one-time-order-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.omnichannel_one_time_orders[':omnichannel-one-time-order-id'].$get(args, options),
  )
}

export async function getRulesRuleId(
  args: InferRequestType<(typeof client.rules)[':rule-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':rule-id'].$get(args, options))
}

export async function getRetrySegmentsRetrySegmentId(
  args: InferRequestType<(typeof client.retry_segments)[':retry-segment-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retry_segments[':retry-segment-id'].$get(args, options))
}

export async function getMeters(
  args: InferRequestType<typeof client.meters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.meters.$get(args, options))
}

export async function postUsageEvents(
  args: InferRequestType<typeof client.usage_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_events.$post(args, options))
}

export async function postBatchUsageEvents(
  args: InferRequestType<typeof client.batch.usage_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.batch.usage_events.$post(args, options))
}

export async function postMeteredFeaturesMeteredFeatureIdReactivateCommand(
  args: InferRequestType<
    (typeof client.metered_features)[':metered-feature-id']['reactivate_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metered_features[':metered-feature-id'].reactivate_command.$post(args, options),
  )
}

export async function postMeteredFeaturesMeteredFeatureIdDelete(
  args: InferRequestType<
    (typeof client.metered_features)[':metered-feature-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metered_features[':metered-feature-id'].delete.$post(args, options),
  )
}

export async function postMeteredFeatures(
  args: InferRequestType<typeof client.metered_features.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metered_features.$post(args, options))
}

export async function postMeteredFeaturesMeteredFeatureIdArchiveCommand(
  args: InferRequestType<
    (typeof client.metered_features)[':metered-feature-id']['archive_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metered_features[':metered-feature-id'].archive_command.$post(args, options),
  )
}

export async function getUsageFilesUsageFileIdProcessingStatus(
  args: InferRequestType<
    (typeof client.usage_files)[':usage-file-id']['processing_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.usage_files[':usage-file-id'].processing_status.$get(args, options),
  )
}

export async function postUsageFilesUploadUrl(
  args: InferRequestType<typeof client.usage_files.upload_url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usage_files.upload_url.$post(args, options))
}

export async function getEinvoices(
  args: InferRequestType<typeof client.einvoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.einvoices.$get(args, options))
}

export async function getEinvoicesEinvoiceId(
  args: InferRequestType<(typeof client.einvoices)[':einvoice-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.einvoices[':einvoice-id'].$get(args, options))
}

export async function postPersonalizedOffers(
  args: InferRequestType<typeof client.personalized_offers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.personalized_offers.$post(args, options))
}

export async function postOfferFulfillments(
  args: InferRequestType<typeof client.offer_fulfillments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offer_fulfillments.$post(args, options))
}

export async function getOfferFulfillmentsOfferFulfillmentId(
  args: InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offer_fulfillments[':offer-fulfillment-id'].$get(args, options))
}

export async function postOfferFulfillmentsOfferFulfillmentId(
  args: InferRequestType<(typeof client.offer_fulfillments)[':offer-fulfillment-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.offer_fulfillments[':offer-fulfillment-id'].$post(args, options),
  )
}

export async function postOfferEvents(
  args: InferRequestType<typeof client.offer_events.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offer_events.$post(args, options))
}

export async function postWebhookEndpointsWebhookEndpointIdDelete(
  args: InferRequestType<
    (typeof client.webhook_endpoints)[':webhook-endpoint-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.webhook_endpoints[':webhook-endpoint-id'].delete.$post(args, options),
  )
}

export async function getWebhookEndpointsWebhookEndpointId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':webhook-endpoint-id'].$get(args, options))
}

export async function postWebhookEndpointsWebhookEndpointId(
  args: InferRequestType<(typeof client.webhook_endpoints)[':webhook-endpoint-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints[':webhook-endpoint-id'].$post(args, options))
}

export async function getWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$get(args, options))
}

export async function postWebhookEndpoints(
  args: InferRequestType<typeof client.webhook_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhook_endpoints.$post(args, options))
}

export async function postBusinessRulesApplyRules(
  args: InferRequestType<typeof client.business_rules.apply_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules.apply_rules.$post(args, options))
}

export async function postBusinessRulesBusinessRuleIdDeleteDraft(
  args: InferRequestType<
    (typeof client.business_rules)[':business-rule-id']['delete_draft']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rules[':business-rule-id'].delete_draft.$post(args, options),
  )
}

export async function postBusinessRulesBusinessRuleIdRelease(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['release']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rules[':business-rule-id'].release.$post(args, options),
  )
}

export async function postBusinessRulesBusinessRuleIdActivate(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rules[':business-rule-id'].activate.$post(args, options),
  )
}

export async function getBusinessRulesBusinessRuleIdDraft(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules[':business-rule-id'].draft.$get(args, options))
}

export async function postBusinessRulesBusinessRuleIdDraft(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['draft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules[':business-rule-id'].draft.$post(args, options))
}

export async function postBusinessRulesBusinessRuleIdDelete(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules[':business-rule-id'].delete.$post(args, options))
}

export async function postBusinessRulesBusinessRuleIdDeactivate(
  args: InferRequestType<
    (typeof client.business_rules)[':business-rule-id']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rules[':business-rule-id'].deactivate.$post(args, options),
  )
}

export async function getBusinessRulesBusinessRuleId(
  args: InferRequestType<(typeof client.business_rules)[':business-rule-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules[':business-rule-id'].$get(args, options))
}

export async function getBusinessRules(
  args: InferRequestType<typeof client.business_rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules.$get(args, options))
}

export async function postBusinessRules(
  args: InferRequestType<typeof client.business_rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rules.$post(args, options))
}

export async function getBusinessRulesetsBusinessRulesetId(
  args: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rulesets[':business-ruleset-id'].$get(args, options))
}

export async function postBusinessRulesetsBusinessRulesetId(
  args: InferRequestType<(typeof client.business_rulesets)[':business-ruleset-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rulesets[':business-ruleset-id'].$post(args, options))
}

export async function postBusinessRulesetsBusinessRulesetIdRemoveRules(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['remove_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].remove_rules.$post(args, options),
  )
}

export async function postBusinessRulesetsBusinessRulesetIdDelete(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].delete.$post(args, options),
  )
}

export async function postBusinessRulesetsBusinessRulesetIdDeactivate(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].deactivate.$post(args, options),
  )
}

export async function getBusinessRulesetsBusinessRulesetIdRules(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].rules.$get(args, options),
  )
}

export async function getBusinessRulesets(
  args: InferRequestType<typeof client.business_rulesets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rulesets.$get(args, options))
}

export async function postBusinessRulesets(
  args: InferRequestType<typeof client.business_rulesets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.business_rulesets.$post(args, options))
}

export async function postBusinessRulesetsBusinessRulesetIdActivate(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].activate.$post(args, options),
  )
}

export async function postBusinessRulesetsBusinessRulesetIdAddRules(
  args: InferRequestType<
    (typeof client.business_rulesets)[':business-ruleset-id']['add_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.business_rulesets[':business-ruleset-id'].add_rules.$post(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdUsageSummary(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].usage_summary.$get(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdUsageCharges(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['usage_charges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].usage_charges.$get(args, options),
  )
}

export async function getSubscriptionsSubscriptionIdApplicableAlerts(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['applicable_alerts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].applicable_alerts.$get(args, options),
  )
}

export async function getAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert-id'].$get(args, options))
}

export async function postAlertsAlertId(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert-id'].$post(args, options))
}

export async function postAlertsAlertIdDelete(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert-id'].delete.$post(args, options))
}

export async function getAlerts(
  args: InferRequestType<typeof client.alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$get(args, options))
}

export async function postAlerts(
  args: InferRequestType<typeof client.alerts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts.$post(args, options))
}

export async function getSubscriptionsSubscriptionIdAlertStatuses(
  args: InferRequestType<
    (typeof client.subscriptions)[':subscription-id']['alert_statuses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.subscriptions[':subscription-id'].alert_statuses.$get(args, options),
  )
}

export async function getAlertsAlertIdAlertStatuses(
  args: InferRequestType<(typeof client.alerts)[':alert-id']['alert_statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alerts[':alert-id'].alert_statuses.$get(args, options))
}

export async function getCollectionsPaymentPromises(
  args: InferRequestType<typeof client.collections_payment_promises.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections_payment_promises.$get(args, options))
}

export async function postCollectionsPaymentPromises(
  args: InferRequestType<typeof client.collections_payment_promises.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections_payment_promises.$post(args, options))
}

export async function postCollectionsPaymentPromisesCollectionsPaymentPromiseIdCancel(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections_payment_promises[':collections-payment-promise-id'].cancel.$post(
      args,
      options,
    ),
  )
}

export async function getCollectionsPaymentPromisesCollectionsPaymentPromiseId(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections_payment_promises[':collections-payment-promise-id'].$get(args, options),
  )
}

export async function postCollectionsPaymentPromisesCollectionsPaymentPromiseId(
  args: InferRequestType<
    (typeof client.collections_payment_promises)[':collections-payment-promise-id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections_payment_promises[':collections-payment-promise-id'].$post(args, options),
  )
}

export async function postLedgerAccountBalancesUpdateOverdraftLimit(
  args: InferRequestType<typeof client.ledger_account_balances.update_overdraft_limit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ledger_account_balances.update_overdraft_limit.$post(args, options),
  )
}

export async function getLedgerAccountBalances(
  args: InferRequestType<typeof client.ledger_account_balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_account_balances.$get(args, options))
}

export async function postLedgerOperationsReleaseAuthorization(
  args: InferRequestType<typeof client.ledger_operations.release_authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.release_authorization.$post(args, options))
}

export async function postLedgerOperationsCapture(
  args: InferRequestType<typeof client.ledger_operations.capture.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.capture.$post(args, options))
}

export async function postLedgerOperationsAllocate(
  args: InferRequestType<typeof client.ledger_operations.allocate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.allocate.$post(args, options))
}

export async function postLedgerOperationsAuthorize(
  args: InferRequestType<typeof client.ledger_operations.authorize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.authorize.$post(args, options))
}

export async function getLedgerOperations(
  args: InferRequestType<typeof client.ledger_operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.$get(args, options))
}

export async function postLedgerOperationsCaptureAuthorization(
  args: InferRequestType<typeof client.ledger_operations.capture_authorization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations.capture_authorization.$post(args, options))
}

export async function getLedgerOperationsLedgerOperationId(
  args: InferRequestType<(typeof client.ledger_operations)[':ledger-operation-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ledger_operations[':ledger-operation-id'].$get(args, options))
}

export async function getGrantBlocks(
  args: InferRequestType<typeof client.grant_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.grant_blocks.$get(args, options))
}

export async function postPromotionalGrants(
  args: InferRequestType<typeof client.promotional_grants.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_grants.$post(args, options))
}
