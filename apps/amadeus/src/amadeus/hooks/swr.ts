import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShoppingKey() {
  return ['shopping'] as const
}

export function getGetShoppingFlightOffersKey(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
) {
  return ['shopping', '/shopping/flight-offers', args] as const
}

export function useGetShoppingFlightOffers<TError = unknown>(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShoppingFlightOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shopping['flight-offers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShoppingFlightOffers<TError = unknown>(
  args: InferRequestType<(typeof client.shopping)['flight-offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetShoppingFlightOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shopping['flight-offers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShoppingFlightOffersKey() {
  return ['shopping', '/shopping/flight-offers', 'POST'] as const
}

export function usePostShoppingFlightOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shopping)['flight-offers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shopping)['flight-offers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShoppingFlightOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.shopping)['flight-offers']['$post']> },
      ) => parseResponse(client.shopping['flight-offers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
