import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCommercePriceBooks202609PriceBooks(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'].$get(args, options),
  )
}

export async function postCommercePriceBooks202609PriceBooks(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'].$post(args, options),
  )
}

export async function getCommercePriceBooks202609PriceBooksPriceBookId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$get(args, options),
  )
}

export async function deleteCommercePriceBooks202609PriceBooksPriceBookId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$delete(args, options),
  )
}

export async function patchCommercePriceBooks202609PriceBooksPriceBookId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$patch(args, options),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdActivate(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].activate.$post(
      args,
      options,
    ),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdDeactivate(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].deactivate.$post(
      args,
      options,
    ),
  )
}

export async function getCommercePriceBooks202609PriceBooksPriceBookIdItems(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$get(
      args,
      options,
    ),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdItems(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$post(
      args,
      options,
    ),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchive(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][
      ':priceBookId'
    ].items.batch.archive.$post(args, options),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreate(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][
      ':priceBookId'
    ].items.batch.create.$post(args, options),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdate(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][
      ':priceBookId'
    ].items.batch.update.$post(args, options),
  )
}

export async function getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
      ':priceBookItemId'
    ].$get(args, options),
  )
}

export async function deleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
      ':priceBookItemId'
    ].$delete(args, options),
  )
}

export async function patchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
      ':priceBookItemId'
    ].$patch(args, options),
  )
}

export async function postCommercePriceBooks202609PriceBooksPriceBookIdValidate(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].validate.$post(
      args,
      options,
    ),
  )
}
