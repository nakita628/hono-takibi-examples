import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCatalogPvtSkusellersSkuId(
  args: InferRequestType<(typeof client.catalog.pvt.skusellers)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catalog.pvt.skusellers[':skuId'].$get(args, options))
}

export async function postSkuBindingPvtSkusellerActivateSellerIdSkuSellerId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['activate'][':sellerId'][':skuSellerId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.activate[':sellerId'][':skuSellerId'].$post(args, options),
  )
}

export async function getSkuBindingPvtSkusellerAdmin(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['admin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sku-binding'].pvt.skuseller.admin.$get(args, options))
}

export async function postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':sellerId'][':sellerSkuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.changenotification[':sellerId'][':sellerSkuId'].$post(
      args,
      options,
    ),
  )
}

export async function postSkuBindingPvtSkusellerChangenotificationSkuId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['changenotification'][':skuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.changenotification[':skuId'].$post(args, options),
  )
}

export async function postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['inactivate'][':sellerId'][':skuSellerId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.inactivate[':sellerId'][':skuSellerId'].$post(
      args,
      options,
    ),
  )
}

export async function postSkuBindingPvtSkusellerInsertion(
  args: InferRequestType<(typeof client)['sku-binding']['pvt']['skuseller']['insertion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sku-binding'].pvt.skuseller.insertion.$post(args, options))
}

export async function getSkuBindingPvtSkusellerListBysellerIdSellerId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['list']['bysellerId'][':sellerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.list.bysellerId[':sellerId'].$get(args, options),
  )
}

export async function getSkuBindingPvtSkusellerPagedSelleridSellerId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['paged']['sellerid'][':sellerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.paged.sellerid[':sellerId'].$get(args, options),
  )
}

export async function postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller']['remove'][':sellerId'][':sellerSkuId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller.remove[':sellerId'][':sellerSkuId'].$post(args, options),
  )
}

export async function getSkuBindingPvtSkusellerSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$get(args, options),
  )
}

export async function putSkuBindingPvtSkusellerSellerIdSellerSkuId(
  args: InferRequestType<
    (typeof client)['sku-binding']['pvt']['skuseller'][':sellerId'][':sellerSkuId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['sku-binding'].pvt.skuseller[':sellerId'][':sellerSkuId'].$put(args, options),
  )
}
