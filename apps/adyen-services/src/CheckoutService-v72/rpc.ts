import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApplePaySessions(
  args: InferRequestType<typeof client.applePay.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applePay.sessions.$post(args, options))
}

export async function postCancels(
  args: InferRequestType<typeof client.cancels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancels.$post(args, options))
}

export async function postCardDetails(
  args: InferRequestType<typeof client.cardDetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cardDetails.$post(args, options))
}

export async function postDonationCampaigns(
  args: InferRequestType<typeof client.donationCampaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.donationCampaigns.$post(args, options))
}

export async function postDonations(
  args: InferRequestType<typeof client.donations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.donations.$post(args, options))
}

export async function postForward(
  args: InferRequestType<typeof client.forward.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forward.$post(args, options))
}

export async function postOrders(
  args: InferRequestType<typeof client.orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.$post(args, options))
}

export async function postOrdersCancel(
  args: InferRequestType<typeof client.orders.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.cancel.$post(args, options))
}

export async function postOriginKeys(
  args: InferRequestType<typeof client.originKeys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.originKeys.$post(args, options))
}

export async function postPaymentLinks(
  args: InferRequestType<typeof client.paymentLinks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentLinks.$post(args, options))
}

export async function getPaymentLinksLinkId(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentLinks[':linkId'].$get(args, options))
}

export async function patchPaymentLinksLinkId(
  args: InferRequestType<(typeof client.paymentLinks)[':linkId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentLinks[':linkId'].$patch(args, options))
}

export async function postPaymentMethods(
  args: InferRequestType<typeof client.paymentMethods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods.$post(args, options))
}

export async function postPaymentMethodsBalance(
  args: InferRequestType<typeof client.paymentMethods.balance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paymentMethods.balance.$post(args, options))
}

export async function postPayments(
  args: InferRequestType<typeof client.payments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.$post(args, options))
}

export async function postPaymentsDetails(
  args: InferRequestType<typeof client.payments.details.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.details.$post(args, options))
}

export async function postPaymentsPaymentPspReferenceAmountUpdates(
  args: InferRequestType<
    (typeof client.payments)[':paymentPspReference']['amountUpdates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.payments[':paymentPspReference'].amountUpdates.$post(args, options),
  )
}

export async function postPaymentsPaymentPspReferenceCancels(
  args: InferRequestType<(typeof client.payments)[':paymentPspReference']['cancels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':paymentPspReference'].cancels.$post(args, options))
}

export async function postPaymentsPaymentPspReferenceCaptures(
  args: InferRequestType<(typeof client.payments)[':paymentPspReference']['captures']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':paymentPspReference'].captures.$post(args, options))
}

export async function postPaymentsPaymentPspReferenceRefunds(
  args: InferRequestType<(typeof client.payments)[':paymentPspReference']['refunds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':paymentPspReference'].refunds.$post(args, options))
}

export async function postPaymentsPaymentPspReferenceReversals(
  args: InferRequestType<(typeof client.payments)[':paymentPspReference']['reversals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments[':paymentPspReference'].reversals.$post(args, options))
}

export async function postPaypalUpdateOrder(
  args: InferRequestType<typeof client.paypal.updateOrder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.paypal.updateOrder.$post(args, options))
}

export async function postSessions(
  args: InferRequestType<typeof client.sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions.$post(args, options))
}

export async function getSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':sessionId'].$get(args, options))
}

export async function patchSessionsSessionId(
  args: InferRequestType<(typeof client.sessions)[':sessionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sessions[':sessionId'].$patch(args, options))
}

export async function getStoredPaymentMethods(
  args: InferRequestType<typeof client.storedPaymentMethods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storedPaymentMethods.$get(args, options))
}

export async function postStoredPaymentMethods(
  args: InferRequestType<typeof client.storedPaymentMethods.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storedPaymentMethods.$post(args, options))
}

export async function deleteStoredPaymentMethodsStoredPaymentMethodId(
  args: InferRequestType<(typeof client.storedPaymentMethods)[':storedPaymentMethodId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storedPaymentMethods[':storedPaymentMethodId'].$delete(args, options),
  )
}

export async function postCalculateTax(
  args: InferRequestType<typeof client.calculateTax.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.calculateTax.$post(args, options))
}

export async function postValidateShopperId(
  args: InferRequestType<typeof client.validateShopperId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validateShopperId.$post(args, options))
}

export async function postVerifyShopperTaxIdentification(
  args: InferRequestType<typeof client.verifyShopperTaxIdentification.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.verifyShopperTaxIdentification.$post(args, options))
}
