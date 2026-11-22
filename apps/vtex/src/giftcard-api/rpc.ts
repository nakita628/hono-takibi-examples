import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGiftcards(
  args: InferRequestType<typeof client.giftcards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcards.$post(args, options))
}

export async function postGiftcardsSearch(
  args: InferRequestType<typeof client.giftcards._search.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcards._search.$post(args, options))
}

export async function getGiftcardsGiftCardID(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcards[':giftCardID'].$get(args, options))
}

export async function getGiftcardsGiftCardIDTransactions(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcards[':giftCardID'].transactions.$get(args, options))
}

export async function postGiftcardsGiftCardIDTransactions(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.giftcards[':giftCardID'].transactions.$post(args, options))
}

export async function getGiftcardsGiftCardIDTransactionsTransactionID(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].$get(args, options),
  )
}

export async function getGiftcardsGiftCardIDTransactionsTransactionIDAuthorization(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(
      args,
      options,
    ),
  )
}

export async function getGiftcardsGiftCardIDTransactionsTransactionIDCancellations(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(
      args,
      options,
    ),
  )
}

export async function postGiftcardsGiftCardIDTransactionsTransactionIDCancellations(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$post(
      args,
      options,
    ),
  )
}

export async function getGiftcardsGiftCardIDTransactionsTransactionIDSettlements(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(args, options),
  )
}

export async function postGiftcardsGiftCardIDTransactionsTransactionIDSettlements(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$post(args, options),
  )
}
