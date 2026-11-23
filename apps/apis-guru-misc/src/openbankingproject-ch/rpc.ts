import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Accounts(
  args: InferRequestType<typeof client.v1.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts.$get(args, options))
}

export async function getV1AccountsAccountId(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-id'].$get(args, options))
}

export async function getV1AccountsAccountIdBalances(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-id'].balances.$get(args, options))
}

export async function getV1AccountsAccountIdTransactions(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.accounts[':account-id'].transactions.$get(args, options))
}

export async function getV1AccountsAccountIdTransactionsTransactionId(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.accounts[':account-id'].transactions[':transactionId'].$get(args, options),
  )
}

export async function postV1Consents(
  args: InferRequestType<typeof client.v1.consents.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents.$post(args, options))
}

export async function getV1ConsentsConsentId(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents[':consentId'].$get(args, options))
}

export async function deleteV1ConsentsConsentId(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents[':consentId'].$delete(args, options))
}

export async function getV1ConsentsConsentIdAuthorisations(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents[':consentId'].authorisations.$get(args, options))
}

export async function postV1ConsentsConsentIdAuthorisations(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents[':consentId'].authorisations.$post(args, options))
}

export async function getV1ConsentsConsentIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(args, options),
  )
}

export async function putV1ConsentsConsentIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.consents[':consentId'].authorisations[':authorisationId'].$put(args, options),
  )
}

export async function getV1ConsentsConsentIdStatus(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.consents[':consentId'].status.$get(args, options))
}

export async function postV1FundsConfirmations(
  args: InferRequestType<(typeof client.v1)['funds-confirmations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['funds-confirmations'].$post(args, options))
}

export async function postV1SigningBaskets(
  args: InferRequestType<(typeof client.v1)['signing-baskets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['signing-baskets'].$post(args, options))
}

export async function getV1SigningBasketsBasketId(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['signing-baskets'][':basketId'].$get(args, options))
}

export async function deleteV1SigningBasketsBasketId(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['signing-baskets'][':basketId'].$delete(args, options))
}

export async function getV1SigningBasketsBasketIdAuthorisations(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['signing-baskets'][':basketId'].authorisations.$get(args, options),
  )
}

export async function postV1SigningBasketsBasketIdAuthorisations(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['signing-baskets'][':basketId'].authorisations.$post(args, options),
  )
}

export async function getV1SigningBasketsBasketIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(
      args,
      options,
    ),
  )
}

export async function putV1SigningBasketsBasketIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$put(
      args,
      options,
    ),
  )
}

export async function getV1SigningBasketsBasketIdStatus(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['signing-baskets'][':basketId'].status.$get(args, options))
}

export async function postV1PaymentServicePaymentProduct(
  args: InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':payment-service'][':payment-product'].$post(args, options))
}

export async function getV1PaymentServicePaymentProductPaymentId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].$get(args, options),
  )
}

export async function deleteV1PaymentServicePaymentProductPaymentId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].$delete(args, options),
  )
}

export async function getV1PaymentServicePaymentProductPaymentIdAuthorisations(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(
      args,
      options,
    ),
  )
}

export async function postV1PaymentServicePaymentProductPaymentIdAuthorisations(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$post(
      args,
      options,
    ),
  )
}

export async function getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
      ':authorisationId'
    ].$get(args, options),
  )
}

export async function putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
      ':authorisationId'
    ].$put(args, options),
  )
}

export async function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'][
      'cancellation-authorisations'
    ].$get(args, options),
  )
}

export async function postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'][
      'cancellation-authorisations'
    ].$post(args, options),
  )
}

export async function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][
      ':authorisationId'
    ].$get(args, options),
  )
}

export async function putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][
      ':authorisationId'
    ].$put(args, options),
  )
}

export async function getV1PaymentServicePaymentProductPaymentIdStatus(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(args, options),
  )
}
