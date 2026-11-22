import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAppsLicensingV1ProductProductIdSkuSkuIdUser(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].user.$post(args, options),
  )
}

export async function getAppsLicensingV1ProductProductIdSkuSkuIdUserUserId(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$get(
      args,
      options,
    ),
  )
}

export async function putAppsLicensingV1ProductProductIdSkuSkuIdUserUserId(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserId(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserId(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['user'][':userId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].user[':userId'].$patch(
      args,
      options,
    ),
  )
}

export async function getAppsLicensingV1ProductProductIdSkuSkuIdUsers(
  args: InferRequestType<
    (typeof client.apps.licensing.v1.product)[':productId']['sku'][':skuId']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].sku[':skuId'].users.$get(args, options),
  )
}

export async function getAppsLicensingV1ProductProductIdUsers(
  args: InferRequestType<(typeof client.apps.licensing.v1.product)[':productId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.licensing.v1.product[':productId'].users.$get(args, options),
  )
}
