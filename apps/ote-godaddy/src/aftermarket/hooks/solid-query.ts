import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getDeleteV1AftermarketListingsMutationKey() {
  return ['v1', '/v1/aftermarket/listings', 'DELETE'] as const
}

export function getDeleteV1AftermarketListingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.aftermarket.listings.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.aftermarket.listings.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1AftermarketListingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.aftermarket.listings.$delete>) {
      return parseResponse(client.v1.aftermarket.listings.$delete(args, options))
    },
  })
}

export function createDeleteV1AftermarketListings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.aftermarket.listings.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.aftermarket.listings.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1AftermarketListingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AftermarketListingsExpiryMutationKey() {
  return ['v1', '/v1/aftermarket/listings/expiry', 'POST'] as const
}

export function getPostV1AftermarketListingsExpiryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.aftermarket.listings.expiry.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AftermarketListingsExpiryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post>) {
      return parseResponse(client.v1.aftermarket.listings.expiry.$post(args, options))
    },
  })
}

export function createPostV1AftermarketListingsExpiry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.aftermarket.listings.expiry.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.aftermarket.listings.expiry.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1AftermarketListingsExpiryMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
