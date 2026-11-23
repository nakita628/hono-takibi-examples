import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Account(
  args: InferRequestType<typeof client.v1.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.$get(args, options))
}

export async function postV1AccountLinks(
  args: InferRequestType<typeof client.v1.account_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account_links.$post(args, options))
}

export async function getV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$get(args, options))
}

export async function postV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$post(args, options))
}

export async function getV1AccountsAccount(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].$get(args, options))
}

export async function postV1AccountsAccount(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].$post(args, options))
}

export async function deleteV1AccountsAccount(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].$delete(args, options))
}

export async function postV1AccountsAccountBankAccounts(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].bank_accounts.$post(args, options))
}

export async function getV1AccountsAccountBankAccountsId(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].bank_accounts[':id'].$get(args, options),
  )
}

export async function postV1AccountsAccountBankAccountsId(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].bank_accounts[':id'].$post(args, options),
  )
}

export async function deleteV1AccountsAccountBankAccountsId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['bank_accounts'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].bank_accounts[':id'].$delete(args, options),
  )
}

export async function getV1AccountsAccountCapabilities(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].capabilities.$get(args, options))
}

export async function getV1AccountsAccountCapabilitiesCapability(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].capabilities[':capability'].$get(args, options),
  )
}

export async function postV1AccountsAccountCapabilitiesCapability(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['capabilities'][':capability']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].capabilities[':capability'].$post(args, options),
  )
}

export async function getV1AccountsAccountExternalAccounts(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].external_accounts.$get(args, options))
}

export async function postV1AccountsAccountExternalAccounts(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['external_accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].external_accounts.$post(args, options))
}

export async function getV1AccountsAccountExternalAccountsId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].external_accounts[':id'].$get(args, options),
  )
}

export async function postV1AccountsAccountExternalAccountsId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].external_accounts[':id'].$post(args, options),
  )
}

export async function deleteV1AccountsAccountExternalAccountsId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account']['external_accounts'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].external_accounts[':id'].$delete(args, options),
  )
}

export async function postV1AccountsAccountLoginLinks(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['login_links']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].login_links.$post(args, options))
}

export async function getV1AccountsAccountPeople(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].people.$get(args, options))
}

export async function postV1AccountsAccountPeople(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].people.$post(args, options))
}

export async function getV1AccountsAccountPeoplePerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].people[':person'].$get(args, options))
}

export async function postV1AccountsAccountPeoplePerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].people[':person'].$post(args, options))
}

export async function deleteV1AccountsAccountPeoplePerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['people'][':person']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].people[':person'].$delete(args, options),
  )
}

export async function getV1AccountsAccountPersons(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].persons.$get(args, options))
}

export async function postV1AccountsAccountPersons(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].persons.$post(args, options))
}

export async function getV1AccountsAccountPersonsPerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].persons[':person'].$get(args, options))
}

export async function postV1AccountsAccountPersonsPerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].persons[':person'].$post(args, options))
}

export async function deleteV1AccountsAccountPersonsPerson(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['persons'][':person']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account'].persons[':person'].$delete(args, options),
  )
}

export async function postV1AccountsAccountReject(
  args: InferRequestType<(typeof client.v1.accounts)[':account']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account'].reject.$post(args, options))
}

export async function getV1ApplePayDomains(
  args: InferRequestType<typeof client.v1.apple_pay.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apple_pay.domains.$get(args, options))
}

export async function postV1ApplePayDomains(
  args: InferRequestType<typeof client.v1.apple_pay.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apple_pay.domains.$post(args, options))
}

export async function getV1ApplePayDomainsDomain(
  args: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apple_pay.domains[':domain'].$get(args, options))
}

export async function deleteV1ApplePayDomainsDomain(
  args: InferRequestType<(typeof client.v1.apple_pay.domains)[':domain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apple_pay.domains[':domain'].$delete(args, options))
}

export async function getV1ApplicationFees(
  args: InferRequestType<typeof client.v1.application_fees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees.$get(args, options))
}

export async function getV1ApplicationFeesFeeRefundsId(
  args: InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':fee'].refunds[':id'].$get(args, options))
}

export async function postV1ApplicationFeesFeeRefundsId(
  args: InferRequestType<(typeof client.v1.application_fees)[':fee']['refunds'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':fee'].refunds[':id'].$post(args, options))
}

export async function getV1ApplicationFeesId(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':id'].$get(args, options))
}

export async function postV1ApplicationFeesIdRefund(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':id'].refund.$post(args, options))
}

export async function getV1ApplicationFeesIdRefunds(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':id'].refunds.$get(args, options))
}

export async function postV1ApplicationFeesIdRefunds(
  args: InferRequestType<(typeof client.v1.application_fees)[':id']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.application_fees[':id'].refunds.$post(args, options))
}

export async function getV1AppsSecrets(
  args: InferRequestType<typeof client.v1.apps.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.secrets.$get(args, options))
}

export async function postV1AppsSecrets(
  args: InferRequestType<typeof client.v1.apps.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.secrets.$post(args, options))
}

export async function postV1AppsSecretsDelete(
  args: InferRequestType<typeof client.v1.apps.secrets.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.secrets.delete.$post(args, options))
}

export async function getV1AppsSecretsFind(
  args: InferRequestType<typeof client.v1.apps.secrets.find.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.secrets.find.$get(args, options))
}

export async function getV1Balance(
  args: InferRequestType<typeof client.v1.balance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balance.$get(args, options))
}

export async function getV1BalanceHistory(
  args: InferRequestType<typeof client.v1.balance.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balance.history.$get(args, options))
}

export async function getV1BalanceHistoryId(
  args: InferRequestType<(typeof client.v1.balance.history)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balance.history[':id'].$get(args, options))
}

export async function getV1BalanceTransactions(
  args: InferRequestType<typeof client.v1.balance_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balance_transactions.$get(args, options))
}

export async function getV1BalanceTransactionsId(
  args: InferRequestType<(typeof client.v1.balance_transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.balance_transactions[':id'].$get(args, options))
}

export async function getV1BillingPortalConfigurations(
  args: InferRequestType<typeof client.v1.billing_portal.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing_portal.configurations.$get(args, options))
}

export async function postV1BillingPortalConfigurations(
  args: InferRequestType<typeof client.v1.billing_portal.configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing_portal.configurations.$post(args, options))
}

export async function getV1BillingPortalConfigurationsConfiguration(
  args: InferRequestType<
    (typeof client.v1.billing_portal.configurations)[':configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.billing_portal.configurations[':configuration'].$get(args, options),
  )
}

export async function postV1BillingPortalConfigurationsConfiguration(
  args: InferRequestType<
    (typeof client.v1.billing_portal.configurations)[':configuration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.billing_portal.configurations[':configuration'].$post(args, options),
  )
}

export async function postV1BillingPortalSessions(
  args: InferRequestType<typeof client.v1.billing_portal.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.billing_portal.sessions.$post(args, options))
}

export async function getV1Charges(
  args: InferRequestType<typeof client.v1.charges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges.$get(args, options))
}

export async function postV1Charges(
  args: InferRequestType<typeof client.v1.charges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges.$post(args, options))
}

export async function getV1ChargesSearch(
  args: InferRequestType<typeof client.v1.charges.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges.search.$get(args, options))
}

export async function getV1ChargesCharge(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].$get(args, options))
}

export async function postV1ChargesCharge(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].$post(args, options))
}

export async function postV1ChargesChargeCapture(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].capture.$post(args, options))
}

export async function getV1ChargesChargeDispute(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].dispute.$get(args, options))
}

export async function postV1ChargesChargeDispute(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].dispute.$post(args, options))
}

export async function postV1ChargesChargeDisputeClose(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['dispute']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].dispute.close.$post(args, options))
}

export async function postV1ChargesChargeRefund(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].refund.$post(args, options))
}

export async function getV1ChargesChargeRefunds(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].refunds.$get(args, options))
}

export async function postV1ChargesChargeRefunds(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].refunds.$post(args, options))
}

export async function getV1ChargesChargeRefundsRefund(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].refunds[':refund'].$get(args, options))
}

export async function postV1ChargesChargeRefundsRefund(
  args: InferRequestType<(typeof client.v1.charges)[':charge']['refunds'][':refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.charges[':charge'].refunds[':refund'].$post(args, options))
}

export async function getV1CheckoutSessions(
  args: InferRequestType<typeof client.v1.checkout.sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checkout.sessions.$get(args, options))
}

export async function postV1CheckoutSessions(
  args: InferRequestType<typeof client.v1.checkout.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checkout.sessions.$post(args, options))
}

export async function getV1CheckoutSessionsSession(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checkout.sessions[':session'].$get(args, options))
}

export async function postV1CheckoutSessionsSessionExpire(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['expire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checkout.sessions[':session'].expire.$post(args, options))
}

export async function getV1CheckoutSessionsSessionLineItems(
  args: InferRequestType<(typeof client.v1.checkout.sessions)[':session']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.checkout.sessions[':session'].line_items.$get(args, options))
}

export async function getV1CountrySpecs(
  args: InferRequestType<typeof client.v1.country_specs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.country_specs.$get(args, options))
}

export async function getV1CountrySpecsCountry(
  args: InferRequestType<(typeof client.v1.country_specs)[':country']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.country_specs[':country'].$get(args, options))
}

export async function getV1Coupons(
  args: InferRequestType<typeof client.v1.coupons.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.coupons.$get(args, options))
}

export async function postV1Coupons(
  args: InferRequestType<typeof client.v1.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.coupons.$post(args, options))
}

export async function getV1CouponsCoupon(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.coupons[':coupon'].$get(args, options))
}

export async function postV1CouponsCoupon(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.coupons[':coupon'].$post(args, options))
}

export async function deleteV1CouponsCoupon(
  args: InferRequestType<(typeof client.v1.coupons)[':coupon']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.coupons[':coupon'].$delete(args, options))
}

export async function getV1CreditNotes(
  args: InferRequestType<typeof client.v1.credit_notes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes.$get(args, options))
}

export async function postV1CreditNotes(
  args: InferRequestType<typeof client.v1.credit_notes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes.$post(args, options))
}

export async function getV1CreditNotesPreview(
  args: InferRequestType<typeof client.v1.credit_notes.preview.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes.preview.$get(args, options))
}

export async function getV1CreditNotesPreviewLines(
  args: InferRequestType<typeof client.v1.credit_notes.preview.lines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes.preview.lines.$get(args, options))
}

export async function getV1CreditNotesCreditNoteLines(
  args: InferRequestType<(typeof client.v1.credit_notes)[':credit_note']['lines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes[':credit_note'].lines.$get(args, options))
}

export async function getV1CreditNotesId(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes[':id'].$get(args, options))
}

export async function postV1CreditNotesId(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes[':id'].$post(args, options))
}

export async function postV1CreditNotesIdVoid(
  args: InferRequestType<(typeof client.v1.credit_notes)[':id']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.credit_notes[':id'].void.$post(args, options))
}

export async function getV1Customers(
  args: InferRequestType<typeof client.v1.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.$get(args, options))
}

export async function postV1Customers(
  args: InferRequestType<typeof client.v1.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.$post(args, options))
}

export async function getV1CustomersSearch(
  args: InferRequestType<typeof client.v1.customers.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers.search.$get(args, options))
}

export async function getV1CustomersCustomer(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].$get(args, options))
}

export async function postV1CustomersCustomer(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].$post(args, options))
}

export async function deleteV1CustomersCustomer(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].$delete(args, options))
}

export async function getV1CustomersCustomerBalanceTransactions(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['balance_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].balance_transactions.$get(args, options),
  )
}

export async function postV1CustomersCustomerBalanceTransactions(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].balance_transactions.$post(args, options),
  )
}

export async function getV1CustomersCustomerBalanceTransactionsTransaction(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].balance_transactions[':transaction'].$get(args, options),
  )
}

export async function postV1CustomersCustomerBalanceTransactionsTransaction(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['balance_transactions'][':transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].balance_transactions[':transaction'].$post(args, options),
  )
}

export async function getV1CustomersCustomerBankAccounts(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].bank_accounts.$get(args, options))
}

export async function postV1CustomersCustomerBankAccounts(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].bank_accounts.$post(args, options))
}

export async function getV1CustomersCustomerBankAccountsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].bank_accounts[':id'].$get(args, options),
  )
}

export async function postV1CustomersCustomerBankAccountsId(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].bank_accounts[':id'].$post(args, options),
  )
}

export async function deleteV1CustomersCustomerBankAccountsId(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].bank_accounts[':id'].$delete(args, options),
  )
}

export async function postV1CustomersCustomerBankAccountsIdVerify(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['bank_accounts'][':id']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].bank_accounts[':id'].verify.$post(args, options),
  )
}

export async function getV1CustomersCustomerCards(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cards.$get(args, options))
}

export async function postV1CustomersCustomerCards(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cards.$post(args, options))
}

export async function getV1CustomersCustomerCardsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cards[':id'].$get(args, options))
}

export async function postV1CustomersCustomerCardsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cards[':id'].$post(args, options))
}

export async function deleteV1CustomersCustomerCardsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cards'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cards[':id'].$delete(args, options))
}

export async function getV1CustomersCustomerCashBalance(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cash_balance.$get(args, options))
}

export async function postV1CustomersCustomerCashBalance(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['cash_balance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].cash_balance.$post(args, options))
}

export async function getV1CustomersCustomerCashBalanceTransactions(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].cash_balance_transactions.$get(args, options),
  )
}

export async function getV1CustomersCustomerCashBalanceTransactionsTransaction(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['cash_balance_transactions'][':transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].cash_balance_transactions[':transaction'].$get(args, options),
  )
}

export async function getV1CustomersCustomerDiscount(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].discount.$get(args, options))
}

export async function deleteV1CustomersCustomerDiscount(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['discount']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].discount.$delete(args, options))
}

export async function postV1CustomersCustomerFundingInstructions(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['funding_instructions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].funding_instructions.$post(args, options),
  )
}

export async function getV1CustomersCustomerPaymentMethods(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['payment_methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].payment_methods.$get(args, options))
}

export async function getV1CustomersCustomerPaymentMethodsPaymentMethod(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['payment_methods'][':payment_method']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].payment_methods[':payment_method'].$get(args, options),
  )
}

export async function getV1CustomersCustomerSources(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].sources.$get(args, options))
}

export async function postV1CustomersCustomerSources(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].sources.$post(args, options))
}

export async function getV1CustomersCustomerSourcesId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].sources[':id'].$get(args, options))
}

export async function postV1CustomersCustomerSourcesId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].sources[':id'].$post(args, options))
}

export async function deleteV1CustomersCustomerSourcesId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['sources'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].sources[':id'].$delete(args, options))
}

export async function postV1CustomersCustomerSourcesIdVerify(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['sources'][':id']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].sources[':id'].verify.$post(args, options),
  )
}

export async function getV1CustomersCustomerSubscriptions(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].subscriptions.$get(args, options))
}

export async function postV1CustomersCustomerSubscriptions(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['subscriptions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].subscriptions.$post(args, options))
}

export async function getV1CustomersCustomerSubscriptionsSubscriptionExposedId(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$get(args, options),
  )
}

export async function postV1CustomersCustomerSubscriptionsSubscriptionExposedId(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$post(args, options),
  )
}

export async function deleteV1CustomersCustomerSubscriptionsSubscriptionExposedId(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].discount.$get(
      args,
      options,
    ),
  )
}

export async function deleteV1CustomersCustomerSubscriptionsSubscriptionExposedIdDiscount(
  args: InferRequestType<
    (typeof client.v1.customers)[':customer']['subscriptions'][':subscription_exposed_id']['discount']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.customers[':customer'].subscriptions[':subscription_exposed_id'].discount.$delete(
      args,
      options,
    ),
  )
}

export async function getV1CustomersCustomerTaxIds(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].tax_ids.$get(args, options))
}

export async function postV1CustomersCustomerTaxIds(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].tax_ids.$post(args, options))
}

export async function getV1CustomersCustomerTaxIdsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].tax_ids[':id'].$get(args, options))
}

export async function deleteV1CustomersCustomerTaxIdsId(
  args: InferRequestType<(typeof client.v1.customers)[':customer']['tax_ids'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.customers[':customer'].tax_ids[':id'].$delete(args, options))
}

export async function getV1Disputes(
  args: InferRequestType<typeof client.v1.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes.$get(args, options))
}

export async function getV1DisputesDispute(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute'].$get(args, options))
}

export async function postV1DisputesDispute(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute'].$post(args, options))
}

export async function postV1DisputesDisputeClose(
  args: InferRequestType<(typeof client.v1.disputes)[':dispute']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.disputes[':dispute'].close.$post(args, options))
}

export async function postV1EphemeralKeys(
  args: InferRequestType<typeof client.v1.ephemeral_keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ephemeral_keys.$post(args, options))
}

export async function deleteV1EphemeralKeysKey(
  args: InferRequestType<(typeof client.v1.ephemeral_keys)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ephemeral_keys[':key'].$delete(args, options))
}

export async function getV1Events(
  args: InferRequestType<typeof client.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events.$get(args, options))
}

export async function getV1EventsId(
  args: InferRequestType<(typeof client.v1.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.events[':id'].$get(args, options))
}

export async function getV1ExchangeRates(
  args: InferRequestType<typeof client.v1.exchange_rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.exchange_rates.$get(args, options))
}

export async function getV1ExchangeRatesRateId(
  args: InferRequestType<(typeof client.v1.exchange_rates)[':rate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.exchange_rates[':rate_id'].$get(args, options))
}

export async function getV1FileLinks(
  args: InferRequestType<typeof client.v1.file_links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.file_links.$get(args, options))
}

export async function postV1FileLinks(
  args: InferRequestType<typeof client.v1.file_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.file_links.$post(args, options))
}

export async function getV1FileLinksLink(
  args: InferRequestType<(typeof client.v1.file_links)[':link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.file_links[':link'].$get(args, options))
}

export async function postV1FileLinksLink(
  args: InferRequestType<(typeof client.v1.file_links)[':link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.file_links[':link'].$post(args, options))
}

export async function getV1Files(
  args: InferRequestType<typeof client.v1.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files.$get(args, options))
}

export async function postV1Files(
  args: InferRequestType<typeof client.v1.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files.$post(args, options))
}

export async function getV1FilesFile(
  args: InferRequestType<(typeof client.v1.files)[':file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.files[':file'].$get(args, options))
}

export async function getV1FinancialConnectionsAccounts(
  args: InferRequestType<typeof client.v1.financial_connections.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.financial_connections.accounts.$get(args, options))
}

export async function getV1FinancialConnectionsAccountsAccount(
  args: InferRequestType<(typeof client.v1.financial_connections.accounts)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_connections.accounts[':account'].$get(args, options),
  )
}

export async function postV1FinancialConnectionsAccountsAccountDisconnect(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['disconnect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_connections.accounts[':account'].disconnect.$post(args, options),
  )
}

export async function getV1FinancialConnectionsAccountsAccountOwners(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['owners']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_connections.accounts[':account'].owners.$get(args, options),
  )
}

export async function postV1FinancialConnectionsAccountsAccountRefresh(
  args: InferRequestType<
    (typeof client.v1.financial_connections.accounts)[':account']['refresh']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_connections.accounts[':account'].refresh.$post(args, options),
  )
}

export async function postV1FinancialConnectionsSessions(
  args: InferRequestType<typeof client.v1.financial_connections.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.financial_connections.sessions.$post(args, options))
}

export async function getV1FinancialConnectionsSessionsSession(
  args: InferRequestType<(typeof client.v1.financial_connections.sessions)[':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.financial_connections.sessions[':session'].$get(args, options),
  )
}

export async function getV1IdentityVerificationReports(
  args: InferRequestType<typeof client.v1.identity.verification_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.identity.verification_reports.$get(args, options))
}

export async function getV1IdentityVerificationReportsReport(
  args: InferRequestType<(typeof client.v1.identity.verification_reports)[':report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.identity.verification_reports[':report'].$get(args, options))
}

export async function getV1IdentityVerificationSessions(
  args: InferRequestType<typeof client.v1.identity.verification_sessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.identity.verification_sessions.$get(args, options))
}

export async function postV1IdentityVerificationSessions(
  args: InferRequestType<typeof client.v1.identity.verification_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.identity.verification_sessions.$post(args, options))
}

export async function getV1IdentityVerificationSessionsSession(
  args: InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.identity.verification_sessions[':session'].$get(args, options),
  )
}

export async function postV1IdentityVerificationSessionsSession(
  args: InferRequestType<(typeof client.v1.identity.verification_sessions)[':session']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.identity.verification_sessions[':session'].$post(args, options),
  )
}

export async function postV1IdentityVerificationSessionsSessionCancel(
  args: InferRequestType<
    (typeof client.v1.identity.verification_sessions)[':session']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.identity.verification_sessions[':session'].cancel.$post(args, options),
  )
}

export async function postV1IdentityVerificationSessionsSessionRedact(
  args: InferRequestType<
    (typeof client.v1.identity.verification_sessions)[':session']['redact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.identity.verification_sessions[':session'].redact.$post(args, options),
  )
}

export async function getV1Invoiceitems(
  args: InferRequestType<typeof client.v1.invoiceitems.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoiceitems.$get(args, options))
}

export async function postV1Invoiceitems(
  args: InferRequestType<typeof client.v1.invoiceitems.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoiceitems.$post(args, options))
}

export async function getV1InvoiceitemsInvoiceitem(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoiceitems[':invoiceitem'].$get(args, options))
}

export async function postV1InvoiceitemsInvoiceitem(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoiceitems[':invoiceitem'].$post(args, options))
}

export async function deleteV1InvoiceitemsInvoiceitem(
  args: InferRequestType<(typeof client.v1.invoiceitems)[':invoiceitem']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoiceitems[':invoiceitem'].$delete(args, options))
}

export async function getV1Invoices(
  args: InferRequestType<typeof client.v1.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.$get(args, options))
}

export async function postV1Invoices(
  args: InferRequestType<typeof client.v1.invoices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.$post(args, options))
}

export async function getV1InvoicesSearch(
  args: InferRequestType<typeof client.v1.invoices.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.search.$get(args, options))
}

export async function getV1InvoicesUpcoming(
  args: InferRequestType<typeof client.v1.invoices.upcoming.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.upcoming.$get(args, options))
}

export async function getV1InvoicesUpcomingLines(
  args: InferRequestType<typeof client.v1.invoices.upcoming.lines.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices.upcoming.lines.$get(args, options))
}

export async function getV1InvoicesInvoice(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].$get(args, options))
}

export async function postV1InvoicesInvoice(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].$post(args, options))
}

export async function deleteV1InvoicesInvoice(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].$delete(args, options))
}

export async function postV1InvoicesInvoiceFinalize(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].finalize.$post(args, options))
}

export async function getV1InvoicesInvoiceLines(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['lines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].lines.$get(args, options))
}

export async function postV1InvoicesInvoiceMarkUncollectible(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['mark_uncollectible']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].mark_uncollectible.$post(args, options))
}

export async function postV1InvoicesInvoicePay(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['pay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].pay.$post(args, options))
}

export async function postV1InvoicesInvoiceSend(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].send.$post(args, options))
}

export async function postV1InvoicesInvoiceVoid(
  args: InferRequestType<(typeof client.v1.invoices)[':invoice']['void']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.invoices[':invoice'].void.$post(args, options))
}

export async function getV1IssuingAuthorizations(
  args: InferRequestType<typeof client.v1.issuing.authorizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.authorizations.$get(args, options))
}

export async function getV1IssuingAuthorizationsAuthorization(
  args: InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.authorizations[':authorization'].$get(args, options))
}

export async function postV1IssuingAuthorizationsAuthorization(
  args: InferRequestType<(typeof client.v1.issuing.authorizations)[':authorization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.issuing.authorizations[':authorization'].$post(args, options),
  )
}

export async function postV1IssuingAuthorizationsAuthorizationApprove(
  args: InferRequestType<
    (typeof client.v1.issuing.authorizations)[':authorization']['approve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.issuing.authorizations[':authorization'].approve.$post(args, options),
  )
}

export async function postV1IssuingAuthorizationsAuthorizationDecline(
  args: InferRequestType<
    (typeof client.v1.issuing.authorizations)[':authorization']['decline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.issuing.authorizations[':authorization'].decline.$post(args, options),
  )
}

export async function getV1IssuingCardholders(
  args: InferRequestType<typeof client.v1.issuing.cardholders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cardholders.$get(args, options))
}

export async function postV1IssuingCardholders(
  args: InferRequestType<typeof client.v1.issuing.cardholders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cardholders.$post(args, options))
}

export async function getV1IssuingCardholdersCardholder(
  args: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cardholders[':cardholder'].$get(args, options))
}

export async function postV1IssuingCardholdersCardholder(
  args: InferRequestType<(typeof client.v1.issuing.cardholders)[':cardholder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cardholders[':cardholder'].$post(args, options))
}

export async function getV1IssuingCards(
  args: InferRequestType<typeof client.v1.issuing.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cards.$get(args, options))
}

export async function postV1IssuingCards(
  args: InferRequestType<typeof client.v1.issuing.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cards.$post(args, options))
}

export async function getV1IssuingCardsCard(
  args: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cards[':card'].$get(args, options))
}

export async function postV1IssuingCardsCard(
  args: InferRequestType<(typeof client.v1.issuing.cards)[':card']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.cards[':card'].$post(args, options))
}

export async function getV1IssuingDisputes(
  args: InferRequestType<typeof client.v1.issuing.disputes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.disputes.$get(args, options))
}

export async function postV1IssuingDisputes(
  args: InferRequestType<typeof client.v1.issuing.disputes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.disputes.$post(args, options))
}

export async function getV1IssuingDisputesDispute(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.disputes[':dispute'].$get(args, options))
}

export async function postV1IssuingDisputesDispute(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.disputes[':dispute'].$post(args, options))
}

export async function postV1IssuingDisputesDisputeSubmit(
  args: InferRequestType<(typeof client.v1.issuing.disputes)[':dispute']['submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.disputes[':dispute'].submit.$post(args, options))
}

export async function getV1IssuingSettlements(
  args: InferRequestType<typeof client.v1.issuing.settlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.settlements.$get(args, options))
}

export async function getV1IssuingSettlementsSettlement(
  args: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.settlements[':settlement'].$get(args, options))
}

export async function postV1IssuingSettlementsSettlement(
  args: InferRequestType<(typeof client.v1.issuing.settlements)[':settlement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.settlements[':settlement'].$post(args, options))
}

export async function getV1IssuingTransactions(
  args: InferRequestType<typeof client.v1.issuing.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.transactions.$get(args, options))
}

export async function getV1IssuingTransactionsTransaction(
  args: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.transactions[':transaction'].$get(args, options))
}

export async function postV1IssuingTransactionsTransaction(
  args: InferRequestType<(typeof client.v1.issuing.transactions)[':transaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.issuing.transactions[':transaction'].$post(args, options))
}

export async function postV1LinkAccountSessions(
  args: InferRequestType<typeof client.v1.link_account_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.link_account_sessions.$post(args, options))
}

export async function getV1LinkAccountSessionsSession(
  args: InferRequestType<(typeof client.v1.link_account_sessions)[':session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.link_account_sessions[':session'].$get(args, options))
}

export async function getV1LinkedAccounts(
  args: InferRequestType<typeof client.v1.linked_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.linked_accounts.$get(args, options))
}

export async function getV1LinkedAccountsAccount(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.linked_accounts[':account'].$get(args, options))
}

export async function postV1LinkedAccountsAccountDisconnect(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['disconnect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.linked_accounts[':account'].disconnect.$post(args, options))
}

export async function getV1LinkedAccountsAccountOwners(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['owners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.linked_accounts[':account'].owners.$get(args, options))
}

export async function postV1LinkedAccountsAccountRefresh(
  args: InferRequestType<(typeof client.v1.linked_accounts)[':account']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.linked_accounts[':account'].refresh.$post(args, options))
}

export async function getV1MandatesMandate(
  args: InferRequestType<(typeof client.v1.mandates)[':mandate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.mandates[':mandate'].$get(args, options))
}

export async function getV1PaymentIntents(
  args: InferRequestType<typeof client.v1.payment_intents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents.$get(args, options))
}

export async function postV1PaymentIntents(
  args: InferRequestType<typeof client.v1.payment_intents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents.$post(args, options))
}

export async function getV1PaymentIntentsSearch(
  args: InferRequestType<typeof client.v1.payment_intents.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents.search.$get(args, options))
}

export async function getV1PaymentIntentsIntent(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents[':intent'].$get(args, options))
}

export async function postV1PaymentIntentsIntent(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents[':intent'].$post(args, options))
}

export async function postV1PaymentIntentsIntentApplyCustomerBalance(
  args: InferRequestType<
    (typeof client.v1.payment_intents)[':intent']['apply_customer_balance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_intents[':intent'].apply_customer_balance.$post(args, options),
  )
}

export async function postV1PaymentIntentsIntentCancel(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents[':intent'].cancel.$post(args, options))
}

export async function postV1PaymentIntentsIntentCapture(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['capture']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents[':intent'].capture.$post(args, options))
}

export async function postV1PaymentIntentsIntentConfirm(
  args: InferRequestType<(typeof client.v1.payment_intents)[':intent']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_intents[':intent'].confirm.$post(args, options))
}

export async function postV1PaymentIntentsIntentIncrementAuthorization(
  args: InferRequestType<
    (typeof client.v1.payment_intents)[':intent']['increment_authorization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_intents[':intent'].increment_authorization.$post(args, options),
  )
}

export async function postV1PaymentIntentsIntentVerifyMicrodeposits(
  args: InferRequestType<
    (typeof client.v1.payment_intents)[':intent']['verify_microdeposits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_intents[':intent'].verify_microdeposits.$post(args, options),
  )
}

export async function getV1PaymentLinks(
  args: InferRequestType<typeof client.v1.payment_links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_links.$get(args, options))
}

export async function postV1PaymentLinks(
  args: InferRequestType<typeof client.v1.payment_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_links.$post(args, options))
}

export async function getV1PaymentLinksPaymentLink(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_links[':payment_link'].$get(args, options))
}

export async function postV1PaymentLinksPaymentLink(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_links[':payment_link'].$post(args, options))
}

export async function getV1PaymentLinksPaymentLinkLineItems(
  args: InferRequestType<(typeof client.v1.payment_links)[':payment_link']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_links[':payment_link'].line_items.$get(args, options),
  )
}

export async function getV1PaymentMethods(
  args: InferRequestType<typeof client.v1.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_methods.$get(args, options))
}

export async function postV1PaymentMethods(
  args: InferRequestType<typeof client.v1.payment_methods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_methods.$post(args, options))
}

export async function getV1PaymentMethodsPaymentMethod(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_methods[':payment_method'].$get(args, options))
}

export async function postV1PaymentMethodsPaymentMethod(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payment_methods[':payment_method'].$post(args, options))
}

export async function postV1PaymentMethodsPaymentMethodAttach(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_methods[':payment_method'].attach.$post(args, options),
  )
}

export async function postV1PaymentMethodsPaymentMethodDetach(
  args: InferRequestType<(typeof client.v1.payment_methods)[':payment_method']['detach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.payment_methods[':payment_method'].detach.$post(args, options),
  )
}

export async function getV1Payouts(
  args: InferRequestType<typeof client.v1.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts.$get(args, options))
}

export async function postV1Payouts(
  args: InferRequestType<typeof client.v1.payouts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts.$post(args, options))
}

export async function getV1PayoutsPayout(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts[':payout'].$get(args, options))
}

export async function postV1PayoutsPayout(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts[':payout'].$post(args, options))
}

export async function postV1PayoutsPayoutCancel(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts[':payout'].cancel.$post(args, options))
}

export async function postV1PayoutsPayoutReverse(
  args: InferRequestType<(typeof client.v1.payouts)[':payout']['reverse']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.payouts[':payout'].reverse.$post(args, options))
}

export async function getV1Plans(
  args: InferRequestType<typeof client.v1.plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.plans.$get(args, options))
}

export async function postV1Plans(
  args: InferRequestType<typeof client.v1.plans.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.plans.$post(args, options))
}

export async function getV1PlansPlan(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.plans[':plan'].$get(args, options))
}

export async function postV1PlansPlan(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.plans[':plan'].$post(args, options))
}

export async function deleteV1PlansPlan(
  args: InferRequestType<(typeof client.v1.plans)[':plan']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.plans[':plan'].$delete(args, options))
}

export async function getV1Prices(
  args: InferRequestType<typeof client.v1.prices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prices.$get(args, options))
}

export async function postV1Prices(
  args: InferRequestType<typeof client.v1.prices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prices.$post(args, options))
}

export async function getV1PricesSearch(
  args: InferRequestType<typeof client.v1.prices.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prices.search.$get(args, options))
}

export async function getV1PricesPrice(
  args: InferRequestType<(typeof client.v1.prices)[':price']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prices[':price'].$get(args, options))
}

export async function postV1PricesPrice(
  args: InferRequestType<(typeof client.v1.prices)[':price']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.prices[':price'].$post(args, options))
}

export async function getV1Products(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.$get(args, options))
}

export async function postV1Products(
  args: InferRequestType<typeof client.v1.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.$post(args, options))
}

export async function getV1ProductsSearch(
  args: InferRequestType<typeof client.v1.products.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products.search.$get(args, options))
}

export async function getV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$get(args, options))
}

export async function postV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$post(args, options))
}

export async function deleteV1ProductsId(
  args: InferRequestType<(typeof client.v1.products)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':id'].$delete(args, options))
}

export async function getV1PromotionCodes(
  args: InferRequestType<typeof client.v1.promotion_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.promotion_codes.$get(args, options))
}

export async function postV1PromotionCodes(
  args: InferRequestType<typeof client.v1.promotion_codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.promotion_codes.$post(args, options))
}

export async function getV1PromotionCodesPromotionCode(
  args: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.promotion_codes[':promotion_code'].$get(args, options))
}

export async function postV1PromotionCodesPromotionCode(
  args: InferRequestType<(typeof client.v1.promotion_codes)[':promotion_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.promotion_codes[':promotion_code'].$post(args, options))
}

export async function getV1Quotes(
  args: InferRequestType<typeof client.v1.quotes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.$get(args, options))
}

export async function postV1Quotes(
  args: InferRequestType<typeof client.v1.quotes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes.$post(args, options))
}

export async function getV1QuotesQuote(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].$get(args, options))
}

export async function postV1QuotesQuote(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].$post(args, options))
}

export async function postV1QuotesQuoteAccept(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].accept.$post(args, options))
}

export async function postV1QuotesQuoteCancel(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].cancel.$post(args, options))
}

export async function getV1QuotesQuoteComputedUpfrontLineItems(
  args: InferRequestType<
    (typeof client.v1.quotes)[':quote']['computed_upfront_line_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.quotes[':quote'].computed_upfront_line_items.$get(args, options),
  )
}

export async function postV1QuotesQuoteFinalize(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].finalize.$post(args, options))
}

export async function getV1QuotesQuoteLineItems(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].line_items.$get(args, options))
}

export async function getV1QuotesQuotePdf(
  args: InferRequestType<(typeof client.v1.quotes)[':quote']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.quotes[':quote'].pdf.$get(args, options))
}

export async function getV1RadarEarlyFraudWarnings(
  args: InferRequestType<typeof client.v1.radar.early_fraud_warnings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.early_fraud_warnings.$get(args, options))
}

export async function getV1RadarEarlyFraudWarningsEarlyFraudWarning(
  args: InferRequestType<
    (typeof client.v1.radar.early_fraud_warnings)[':early_fraud_warning']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.radar.early_fraud_warnings[':early_fraud_warning'].$get(args, options),
  )
}

export async function getV1RadarValueListItems(
  args: InferRequestType<typeof client.v1.radar.value_list_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_list_items.$get(args, options))
}

export async function postV1RadarValueListItems(
  args: InferRequestType<typeof client.v1.radar.value_list_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_list_items.$post(args, options))
}

export async function getV1RadarValueListItemsItem(
  args: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_list_items[':item'].$get(args, options))
}

export async function deleteV1RadarValueListItemsItem(
  args: InferRequestType<(typeof client.v1.radar.value_list_items)[':item']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_list_items[':item'].$delete(args, options))
}

export async function getV1RadarValueLists(
  args: InferRequestType<typeof client.v1.radar.value_lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_lists.$get(args, options))
}

export async function postV1RadarValueLists(
  args: InferRequestType<typeof client.v1.radar.value_lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_lists.$post(args, options))
}

export async function getV1RadarValueListsValueList(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_lists[':value_list'].$get(args, options))
}

export async function postV1RadarValueListsValueList(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_lists[':value_list'].$post(args, options))
}

export async function deleteV1RadarValueListsValueList(
  args: InferRequestType<(typeof client.v1.radar.value_lists)[':value_list']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.radar.value_lists[':value_list'].$delete(args, options))
}

export async function getV1Refunds(
  args: InferRequestType<typeof client.v1.refunds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds.$get(args, options))
}

export async function postV1Refunds(
  args: InferRequestType<typeof client.v1.refunds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds.$post(args, options))
}

export async function getV1RefundsRefund(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refund'].$get(args, options))
}

export async function postV1RefundsRefund(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refund'].$post(args, options))
}

export async function postV1RefundsRefundCancel(
  args: InferRequestType<(typeof client.v1.refunds)[':refund']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.refunds[':refund'].cancel.$post(args, options))
}

export async function getV1ReportingReportRuns(
  args: InferRequestType<typeof client.v1.reporting.report_runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.report_runs.$get(args, options))
}

export async function postV1ReportingReportRuns(
  args: InferRequestType<typeof client.v1.reporting.report_runs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.report_runs.$post(args, options))
}

export async function getV1ReportingReportRunsReportRun(
  args: InferRequestType<(typeof client.v1.reporting.report_runs)[':report_run']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.report_runs[':report_run'].$get(args, options))
}

export async function getV1ReportingReportTypes(
  args: InferRequestType<typeof client.v1.reporting.report_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.report_types.$get(args, options))
}

export async function getV1ReportingReportTypesReportType(
  args: InferRequestType<(typeof client.v1.reporting.report_types)[':report_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reporting.report_types[':report_type'].$get(args, options))
}

export async function getV1Reviews(
  args: InferRequestType<typeof client.v1.reviews.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reviews.$get(args, options))
}

export async function getV1ReviewsReview(
  args: InferRequestType<(typeof client.v1.reviews)[':review']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reviews[':review'].$get(args, options))
}

export async function postV1ReviewsReviewApprove(
  args: InferRequestType<(typeof client.v1.reviews)[':review']['approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reviews[':review'].approve.$post(args, options))
}

export async function getV1SetupAttempts(
  args: InferRequestType<typeof client.v1.setup_attempts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_attempts.$get(args, options))
}

export async function getV1SetupIntents(
  args: InferRequestType<typeof client.v1.setup_intents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents.$get(args, options))
}

export async function postV1SetupIntents(
  args: InferRequestType<typeof client.v1.setup_intents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents.$post(args, options))
}

export async function getV1SetupIntentsIntent(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents[':intent'].$get(args, options))
}

export async function postV1SetupIntentsIntent(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents[':intent'].$post(args, options))
}

export async function postV1SetupIntentsIntentCancel(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents[':intent'].cancel.$post(args, options))
}

export async function postV1SetupIntentsIntentConfirm(
  args: InferRequestType<(typeof client.v1.setup_intents)[':intent']['confirm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.setup_intents[':intent'].confirm.$post(args, options))
}

export async function postV1SetupIntentsIntentVerifyMicrodeposits(
  args: InferRequestType<
    (typeof client.v1.setup_intents)[':intent']['verify_microdeposits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.setup_intents[':intent'].verify_microdeposits.$post(args, options),
  )
}

export async function getV1ShippingRates(
  args: InferRequestType<typeof client.v1.shipping_rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping_rates.$get(args, options))
}

export async function postV1ShippingRates(
  args: InferRequestType<typeof client.v1.shipping_rates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping_rates.$post(args, options))
}

export async function getV1ShippingRatesShippingRateToken(
  args: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping_rates[':shipping_rate_token'].$get(args, options))
}

export async function postV1ShippingRatesShippingRateToken(
  args: InferRequestType<(typeof client.v1.shipping_rates)[':shipping_rate_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipping_rates[':shipping_rate_token'].$post(args, options))
}

export async function getV1SigmaScheduledQueryRuns(
  args: InferRequestType<typeof client.v1.sigma.scheduled_query_runs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sigma.scheduled_query_runs.$get(args, options))
}

export async function getV1SigmaScheduledQueryRunsScheduledQueryRun(
  args: InferRequestType<
    (typeof client.v1.sigma.scheduled_query_runs)[':scheduled_query_run']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sigma.scheduled_query_runs[':scheduled_query_run'].$get(args, options),
  )
}

export async function postV1Sources(
  args: InferRequestType<typeof client.v1.sources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources.$post(args, options))
}

export async function getV1SourcesSource(
  args: InferRequestType<(typeof client.v1.sources)[':source']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':source'].$get(args, options))
}

export async function postV1SourcesSource(
  args: InferRequestType<(typeof client.v1.sources)[':source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':source'].$post(args, options))
}

export async function getV1SourcesSourceMandateNotificationsMandateNotification(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['mandate_notifications'][':mandate_notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sources[':source'].mandate_notifications[':mandate_notification'].$get(args, options),
  )
}

export async function getV1SourcesSourceSourceTransactions(
  args: InferRequestType<(typeof client.v1.sources)[':source']['source_transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':source'].source_transactions.$get(args, options))
}

export async function getV1SourcesSourceSourceTransactionsSourceTransaction(
  args: InferRequestType<
    (typeof client.v1.sources)[':source']['source_transactions'][':source_transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.sources[':source'].source_transactions[':source_transaction'].$get(args, options),
  )
}

export async function postV1SourcesSourceVerify(
  args: InferRequestType<(typeof client.v1.sources)[':source']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.sources[':source'].verify.$post(args, options))
}

export async function getV1SubscriptionItems(
  args: InferRequestType<typeof client.v1.subscription_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_items.$get(args, options))
}

export async function postV1SubscriptionItems(
  args: InferRequestType<typeof client.v1.subscription_items.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_items.$post(args, options))
}

export async function getV1SubscriptionItemsItem(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_items[':item'].$get(args, options))
}

export async function postV1SubscriptionItemsItem(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_items[':item'].$post(args, options))
}

export async function deleteV1SubscriptionItemsItem(
  args: InferRequestType<(typeof client.v1.subscription_items)[':item']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_items[':item'].$delete(args, options))
}

export async function getV1SubscriptionItemsSubscriptionItemUsageRecordSummaries(
  args: InferRequestType<
    (typeof client.v1.subscription_items)[':subscription_item']['usage_record_summaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscription_items[':subscription_item'].usage_record_summaries.$get(args, options),
  )
}

export async function postV1SubscriptionItemsSubscriptionItemUsageRecords(
  args: InferRequestType<
    (typeof client.v1.subscription_items)[':subscription_item']['usage_records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscription_items[':subscription_item'].usage_records.$post(args, options),
  )
}

export async function getV1SubscriptionSchedules(
  args: InferRequestType<typeof client.v1.subscription_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_schedules.$get(args, options))
}

export async function postV1SubscriptionSchedules(
  args: InferRequestType<typeof client.v1.subscription_schedules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_schedules.$post(args, options))
}

export async function getV1SubscriptionSchedulesSchedule(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_schedules[':schedule'].$get(args, options))
}

export async function postV1SubscriptionSchedulesSchedule(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscription_schedules[':schedule'].$post(args, options))
}

export async function postV1SubscriptionSchedulesScheduleCancel(
  args: InferRequestType<(typeof client.v1.subscription_schedules)[':schedule']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscription_schedules[':schedule'].cancel.$post(args, options),
  )
}

export async function postV1SubscriptionSchedulesScheduleRelease(
  args: InferRequestType<
    (typeof client.v1.subscription_schedules)[':schedule']['release']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscription_schedules[':schedule'].release.$post(args, options),
  )
}

export async function getV1Subscriptions(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.$get(args, options))
}

export async function postV1Subscriptions(
  args: InferRequestType<typeof client.v1.subscriptions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.$post(args, options))
}

export async function getV1SubscriptionsSearch(
  args: InferRequestType<typeof client.v1.subscriptions.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions.search.$get(args, options))
}

export async function getV1SubscriptionsSubscriptionExposedId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription_exposed_id'].$get(args, options),
  )
}

export async function postV1SubscriptionsSubscriptionExposedId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription_exposed_id'].$post(args, options),
  )
}

export async function deleteV1SubscriptionsSubscriptionExposedId(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription_exposed_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription_exposed_id'].$delete(args, options),
  )
}

export async function deleteV1SubscriptionsSubscriptionExposedIdDiscount(
  args: InferRequestType<
    (typeof client.v1.subscriptions)[':subscription_exposed_id']['discount']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.subscriptions[':subscription_exposed_id'].discount.$delete(args, options),
  )
}

export async function postV1SubscriptionsSubscriptionResume(
  args: InferRequestType<(typeof client.v1.subscriptions)[':subscription']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.subscriptions[':subscription'].resume.$post(args, options))
}

export async function getV1TaxCodes(
  args: InferRequestType<typeof client.v1.tax_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_codes.$get(args, options))
}

export async function getV1TaxCodesId(
  args: InferRequestType<(typeof client.v1.tax_codes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_codes[':id'].$get(args, options))
}

export async function getV1TaxRates(
  args: InferRequestType<typeof client.v1.tax_rates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_rates.$get(args, options))
}

export async function postV1TaxRates(
  args: InferRequestType<typeof client.v1.tax_rates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_rates.$post(args, options))
}

export async function getV1TaxRatesTaxRate(
  args: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_rates[':tax_rate'].$get(args, options))
}

export async function postV1TaxRatesTaxRate(
  args: InferRequestType<(typeof client.v1.tax_rates)[':tax_rate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tax_rates[':tax_rate'].$post(args, options))
}

export async function getV1TerminalConfigurations(
  args: InferRequestType<typeof client.v1.terminal.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.configurations.$get(args, options))
}

export async function postV1TerminalConfigurations(
  args: InferRequestType<typeof client.v1.terminal.configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.configurations.$post(args, options))
}

export async function getV1TerminalConfigurationsConfiguration(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.configurations[':configuration'].$get(args, options),
  )
}

export async function postV1TerminalConfigurationsConfiguration(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.configurations[':configuration'].$post(args, options),
  )
}

export async function deleteV1TerminalConfigurationsConfiguration(
  args: InferRequestType<(typeof client.v1.terminal.configurations)[':configuration']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.configurations[':configuration'].$delete(args, options),
  )
}

export async function postV1TerminalConnectionTokens(
  args: InferRequestType<typeof client.v1.terminal.connection_tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.connection_tokens.$post(args, options))
}

export async function getV1TerminalLocations(
  args: InferRequestType<typeof client.v1.terminal.locations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.locations.$get(args, options))
}

export async function postV1TerminalLocations(
  args: InferRequestType<typeof client.v1.terminal.locations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.locations.$post(args, options))
}

export async function getV1TerminalLocationsLocation(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.locations[':location'].$get(args, options))
}

export async function postV1TerminalLocationsLocation(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.locations[':location'].$post(args, options))
}

export async function deleteV1TerminalLocationsLocation(
  args: InferRequestType<(typeof client.v1.terminal.locations)[':location']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.locations[':location'].$delete(args, options))
}

export async function getV1TerminalReaders(
  args: InferRequestType<typeof client.v1.terminal.readers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.readers.$get(args, options))
}

export async function postV1TerminalReaders(
  args: InferRequestType<typeof client.v1.terminal.readers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.readers.$post(args, options))
}

export async function getV1TerminalReadersReader(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.readers[':reader'].$get(args, options))
}

export async function postV1TerminalReadersReader(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.readers[':reader'].$post(args, options))
}

export async function deleteV1TerminalReadersReader(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminal.readers[':reader'].$delete(args, options))
}

export async function postV1TerminalReadersReaderCancelAction(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['cancel_action']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.readers[':reader'].cancel_action.$post(args, options),
  )
}

export async function postV1TerminalReadersReaderProcessPaymentIntent(
  args: InferRequestType<
    (typeof client.v1.terminal.readers)[':reader']['process_payment_intent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.readers[':reader'].process_payment_intent.$post(args, options),
  )
}

export async function postV1TerminalReadersReaderProcessSetupIntent(
  args: InferRequestType<
    (typeof client.v1.terminal.readers)[':reader']['process_setup_intent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.readers[':reader'].process_setup_intent.$post(args, options),
  )
}

export async function postV1TerminalReadersReaderRefundPayment(
  args: InferRequestType<(typeof client.v1.terminal.readers)[':reader']['refund_payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.readers[':reader'].refund_payment.$post(args, options),
  )
}

export async function postV1TerminalReadersReaderSetReaderDisplay(
  args: InferRequestType<
    (typeof client.v1.terminal.readers)[':reader']['set_reader_display']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.terminal.readers[':reader'].set_reader_display.$post(args, options),
  )
}

export async function postV1TestHelpersCustomersCustomerFundCashBalance(
  args: InferRequestType<
    (typeof client.v1.test_helpers.customers)[':customer']['fund_cash_balance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.customers[':customer'].fund_cash_balance.$post(args, options),
  )
}

export async function postV1TestHelpersIssuingCardsCardShippingDeliver(
  args: InferRequestType<
    (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['deliver']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.issuing.cards[':card'].shipping.deliver.$post(args, options),
  )
}

export async function postV1TestHelpersIssuingCardsCardShippingFail(
  args: InferRequestType<
    (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.issuing.cards[':card'].shipping.fail.$post(args, options),
  )
}

export async function postV1TestHelpersIssuingCardsCardShippingReturn(
  args: InferRequestType<
    (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.issuing.cards[':card'].shipping.return.$post(args, options),
  )
}

export async function postV1TestHelpersIssuingCardsCardShippingShip(
  args: InferRequestType<
    (typeof client.v1.test_helpers.issuing.cards)[':card']['shipping']['ship']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.issuing.cards[':card'].shipping.ship.$post(args, options),
  )
}

export async function postV1TestHelpersRefundsRefundExpire(
  args: InferRequestType<(typeof client.v1.test_helpers.refunds)[':refund']['expire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.refunds[':refund'].expire.$post(args, options))
}

export async function postV1TestHelpersTerminalReadersReaderPresentPaymentMethod(
  args: InferRequestType<
    (typeof client.v1.test_helpers.terminal.readers)[':reader']['present_payment_method']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.terminal.readers[':reader'].present_payment_method.$post(args, options),
  )
}

export async function getV1TestHelpersTestClocks(
  args: InferRequestType<typeof client.v1.test_helpers.test_clocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.test_clocks.$get(args, options))
}

export async function postV1TestHelpersTestClocks(
  args: InferRequestType<typeof client.v1.test_helpers.test_clocks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.test_clocks.$post(args, options))
}

export async function getV1TestHelpersTestClocksTestClock(
  args: InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.test_clocks[':test_clock'].$get(args, options))
}

export async function deleteV1TestHelpersTestClocksTestClock(
  args: InferRequestType<(typeof client.v1.test_helpers.test_clocks)[':test_clock']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.test_clocks[':test_clock'].$delete(args, options),
  )
}

export async function postV1TestHelpersTestClocksTestClockAdvance(
  args: InferRequestType<
    (typeof client.v1.test_helpers.test_clocks)[':test_clock']['advance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.test_clocks[':test_clock'].advance.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryInboundTransfersIdFail(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.inbound_transfers[':id'].fail.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryInboundTransfersIdReturn(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.inbound_transfers[':id'].return.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryInboundTransfersIdSucceed(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.inbound_transfers)[':id']['succeed']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.inbound_transfers[':id'].succeed.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryOutboundPaymentsIdFail(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_payments[':id'].fail.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryOutboundPaymentsIdPost(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['post']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_payments[':id'].post.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryOutboundPaymentsIdReturn(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_payments)[':id']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_payments[':id'].return.$post(args, options),
  )
}

export async function postV1TestHelpersTreasuryOutboundTransfersOutboundTransferFail(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['fail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].fail.$post(
      args,
      options,
    ),
  )
}

export async function postV1TestHelpersTreasuryOutboundTransfersOutboundTransferPost(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['post']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].post.$post(
      args,
      options,
    ),
  )
}

export async function postV1TestHelpersTreasuryOutboundTransfersOutboundTransferReturn(
  args: InferRequestType<
    (typeof client.v1.test_helpers.treasury.outbound_transfers)[':outbound_transfer']['return']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.test_helpers.treasury.outbound_transfers[':outbound_transfer'].return.$post(
      args,
      options,
    ),
  )
}

export async function postV1TestHelpersTreasuryReceivedCredits(
  args: InferRequestType<typeof client.v1.test_helpers.treasury.received_credits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.treasury.received_credits.$post(args, options))
}

export async function postV1TestHelpersTreasuryReceivedDebits(
  args: InferRequestType<typeof client.v1.test_helpers.treasury.received_debits.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.test_helpers.treasury.received_debits.$post(args, options))
}

export async function postV1Tokens(
  args: InferRequestType<typeof client.v1.tokens.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.$post(args, options))
}

export async function getV1TokensToken(
  args: InferRequestType<(typeof client.v1.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens[':token'].$get(args, options))
}

export async function getV1Topups(
  args: InferRequestType<typeof client.v1.topups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topups.$get(args, options))
}

export async function postV1Topups(
  args: InferRequestType<typeof client.v1.topups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topups.$post(args, options))
}

export async function getV1TopupsTopup(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topups[':topup'].$get(args, options))
}

export async function postV1TopupsTopup(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topups[':topup'].$post(args, options))
}

export async function postV1TopupsTopupCancel(
  args: InferRequestType<(typeof client.v1.topups)[':topup']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.topups[':topup'].cancel.$post(args, options))
}

export async function getV1Transfers(
  args: InferRequestType<typeof client.v1.transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers.$get(args, options))
}

export async function postV1Transfers(
  args: InferRequestType<typeof client.v1.transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers.$post(args, options))
}

export async function getV1TransfersIdReversals(
  args: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':id'].reversals.$get(args, options))
}

export async function postV1TransfersIdReversals(
  args: InferRequestType<(typeof client.v1.transfers)[':id']['reversals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':id'].reversals.$post(args, options))
}

export async function getV1TransfersTransfer(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':transfer'].$get(args, options))
}

export async function postV1TransfersTransfer(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':transfer'].$post(args, options))
}

export async function getV1TransfersTransferReversalsId(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':transfer'].reversals[':id'].$get(args, options))
}

export async function postV1TransfersTransferReversalsId(
  args: InferRequestType<(typeof client.v1.transfers)[':transfer']['reversals'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.transfers[':transfer'].reversals[':id'].$post(args, options))
}

export async function getV1TreasuryCreditReversals(
  args: InferRequestType<typeof client.v1.treasury.credit_reversals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.credit_reversals.$get(args, options))
}

export async function postV1TreasuryCreditReversals(
  args: InferRequestType<typeof client.v1.treasury.credit_reversals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.credit_reversals.$post(args, options))
}

export async function getV1TreasuryCreditReversalsCreditReversal(
  args: InferRequestType<(typeof client.v1.treasury.credit_reversals)[':credit_reversal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.credit_reversals[':credit_reversal'].$get(args, options),
  )
}

export async function getV1TreasuryDebitReversals(
  args: InferRequestType<typeof client.v1.treasury.debit_reversals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.debit_reversals.$get(args, options))
}

export async function postV1TreasuryDebitReversals(
  args: InferRequestType<typeof client.v1.treasury.debit_reversals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.debit_reversals.$post(args, options))
}

export async function getV1TreasuryDebitReversalsDebitReversal(
  args: InferRequestType<(typeof client.v1.treasury.debit_reversals)[':debit_reversal']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.debit_reversals[':debit_reversal'].$get(args, options),
  )
}

export async function getV1TreasuryFinancialAccounts(
  args: InferRequestType<typeof client.v1.treasury.financial_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.financial_accounts.$get(args, options))
}

export async function postV1TreasuryFinancialAccounts(
  args: InferRequestType<typeof client.v1.treasury.financial_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.financial_accounts.$post(args, options))
}

export async function getV1TreasuryFinancialAccountsFinancialAccount(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.financial_accounts[':financial_account'].$get(args, options),
  )
}

export async function postV1TreasuryFinancialAccountsFinancialAccount(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.financial_accounts[':financial_account'].$post(args, options),
  )
}

export async function getV1TreasuryFinancialAccountsFinancialAccountFeatures(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.financial_accounts[':financial_account'].features.$get(args, options),
  )
}

export async function postV1TreasuryFinancialAccountsFinancialAccountFeatures(
  args: InferRequestType<
    (typeof client.v1.treasury.financial_accounts)[':financial_account']['features']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.financial_accounts[':financial_account'].features.$post(args, options),
  )
}

export async function getV1TreasuryInboundTransfers(
  args: InferRequestType<typeof client.v1.treasury.inbound_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.inbound_transfers.$get(args, options))
}

export async function postV1TreasuryInboundTransfers(
  args: InferRequestType<typeof client.v1.treasury.inbound_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.inbound_transfers.$post(args, options))
}

export async function getV1TreasuryInboundTransfersId(
  args: InferRequestType<(typeof client.v1.treasury.inbound_transfers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.inbound_transfers[':id'].$get(args, options))
}

export async function postV1TreasuryInboundTransfersInboundTransferCancel(
  args: InferRequestType<
    (typeof client.v1.treasury.inbound_transfers)[':inbound_transfer']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.inbound_transfers[':inbound_transfer'].cancel.$post(args, options),
  )
}

export async function getV1TreasuryOutboundPayments(
  args: InferRequestType<typeof client.v1.treasury.outbound_payments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.outbound_payments.$get(args, options))
}

export async function postV1TreasuryOutboundPayments(
  args: InferRequestType<typeof client.v1.treasury.outbound_payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.outbound_payments.$post(args, options))
}

export async function getV1TreasuryOutboundPaymentsId(
  args: InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.outbound_payments[':id'].$get(args, options))
}

export async function postV1TreasuryOutboundPaymentsIdCancel(
  args: InferRequestType<(typeof client.v1.treasury.outbound_payments)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.outbound_payments[':id'].cancel.$post(args, options),
  )
}

export async function getV1TreasuryOutboundTransfers(
  args: InferRequestType<typeof client.v1.treasury.outbound_transfers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.outbound_transfers.$get(args, options))
}

export async function postV1TreasuryOutboundTransfers(
  args: InferRequestType<typeof client.v1.treasury.outbound_transfers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.outbound_transfers.$post(args, options))
}

export async function getV1TreasuryOutboundTransfersOutboundTransfer(
  args: InferRequestType<
    (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.outbound_transfers[':outbound_transfer'].$get(args, options),
  )
}

export async function postV1TreasuryOutboundTransfersOutboundTransferCancel(
  args: InferRequestType<
    (typeof client.v1.treasury.outbound_transfers)[':outbound_transfer']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.treasury.outbound_transfers[':outbound_transfer'].cancel.$post(args, options),
  )
}

export async function getV1TreasuryReceivedCredits(
  args: InferRequestType<typeof client.v1.treasury.received_credits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.received_credits.$get(args, options))
}

export async function getV1TreasuryReceivedCreditsId(
  args: InferRequestType<(typeof client.v1.treasury.received_credits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.received_credits[':id'].$get(args, options))
}

export async function getV1TreasuryReceivedDebits(
  args: InferRequestType<typeof client.v1.treasury.received_debits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.received_debits.$get(args, options))
}

export async function getV1TreasuryReceivedDebitsId(
  args: InferRequestType<(typeof client.v1.treasury.received_debits)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.received_debits[':id'].$get(args, options))
}

export async function getV1TreasuryTransactionEntries(
  args: InferRequestType<typeof client.v1.treasury.transaction_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.transaction_entries.$get(args, options))
}

export async function getV1TreasuryTransactionEntriesId(
  args: InferRequestType<(typeof client.v1.treasury.transaction_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.transaction_entries[':id'].$get(args, options))
}

export async function getV1TreasuryTransactions(
  args: InferRequestType<typeof client.v1.treasury.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.transactions.$get(args, options))
}

export async function getV1TreasuryTransactionsId(
  args: InferRequestType<(typeof client.v1.treasury.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.treasury.transactions[':id'].$get(args, options))
}

export async function getV1WebhookEndpoints(
  args: InferRequestType<typeof client.v1.webhook_endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhook_endpoints.$get(args, options))
}

export async function postV1WebhookEndpoints(
  args: InferRequestType<typeof client.v1.webhook_endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhook_endpoints.$post(args, options))
}

export async function getV1WebhookEndpointsWebhookEndpoint(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$get(args, options))
}

export async function postV1WebhookEndpointsWebhookEndpoint(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.webhook_endpoints[':webhook_endpoint'].$post(args, options))
}

export async function deleteV1WebhookEndpointsWebhookEndpoint(
  args: InferRequestType<(typeof client.v1.webhook_endpoints)[':webhook_endpoint']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.webhook_endpoints[':webhook_endpoint'].$delete(args, options),
  )
}
