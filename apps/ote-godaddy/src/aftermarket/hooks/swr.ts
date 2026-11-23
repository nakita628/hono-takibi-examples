import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getDeleteV1AftermarketListingsKey() {
  return ['v1', '/v1/aftermarket/listings', 'DELETE'] as const
}

export function useDeleteV1AftermarketListings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.aftermarket.listings.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.aftermarket.listings.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AftermarketListingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.aftermarket.listings.$delete> },
      ) => parseResponse(client.v1.aftermarket.listings.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AftermarketListingsExpiryKey() {
  return ['v1', '/v1/aftermarket/listings/expiry', 'POST'] as const
}

export function usePostV1AftermarketListingsExpiry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.aftermarket.listings.expiry.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AftermarketListingsExpiryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post> },
      ) => parseResponse(client.v1.aftermarket.listings.expiry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
