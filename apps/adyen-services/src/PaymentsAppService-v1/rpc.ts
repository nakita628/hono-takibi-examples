import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMerchantsMerchantIdGeneratePaymentsAppBoardingToken(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['generatePaymentsAppBoardingToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].generatePaymentsAppBoardingToken.$post(args, options),
  )
}

export async function getMerchantsMerchantIdPaymentsApps(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentsApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merchants[':merchantId'].paymentsApps.$get(args, options))
}

export async function postMerchantsMerchantIdPaymentsAppsInstallationIdRevoke(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentsApps'][':installationId']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].paymentsApps[':installationId'].revoke.$post(args, options),
  )
}

export async function postMerchantsMerchantIdStoresStoreIdGeneratePaymentsAppBoardingToken(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['generatePaymentsAppBoardingToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':storeId'].generatePaymentsAppBoardingToken.$post(
      args,
      options,
    ),
  )
}

export async function getMerchantsMerchantIdStoresStoreIdPaymentsApps(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':storeId']['paymentsApps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.merchants[':merchantId'].stores[':storeId'].paymentsApps.$get(args, options),
  )
}
