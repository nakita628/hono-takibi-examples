import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getGiftcardproviders(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcardproviders.$get(args, options))
}

export async function putGiftcardprovidersGiftCardProviderID(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcardproviders[':giftCardProviderID'].$put(args, options))
}

export async function deleteGiftcardprovidersGiftCardProviderID(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcardproviders[':giftCardProviderID'].$delete(args, options))
}

export async function postGiftcardprovidersGiftCardProviderIDGiftcards(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards.$post(args, options),
  )
}

export async function postGiftcardprovidersGiftCardProviderIDGiftcardsSearch(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards._search.$post(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$get(
      args,
      options,
    ),
  )
}

export async function postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$post(
      args,
      options,
    ),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':tId'
    ].cancellations.$get(args, options),
  )
}

export async function postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':tId'
    ].cancellations.$post(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':tId'
    ].settlements.$get(args, options),
  )
}

export async function postGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':tId'
    ].settlements.$post(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':transactionID'
    ].$get(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
      ':transactionID'
    ].authorization.$get(args, options),
  )
}

export async function getGiftcardprovidersGiftCardProviderId(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcardproviders[':giftCardProviderId'].$get(args, options))
}
