import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWaybackKey() {
  return ['wayback'] as const
}

export function getGetWaybackV1AvailableKey(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
) {
  return ['wayback', '/wayback/v1/available', args] as const
}

export function useGetWaybackV1Available<TError = unknown>(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
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
        ? getGetWaybackV1AvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wayback.v1.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWaybackV1Available<TError = unknown>(
  args: InferRequestType<typeof client.wayback.v1.available.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
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
        ? getGetWaybackV1AvailableKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.wayback.v1.available.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWaybackV1AvailableKey() {
  return ['wayback', '/wayback/v1/available', 'POST'] as const
}

export function usePostWaybackV1Available<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.wayback.v1.available.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.wayback.v1.available.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWaybackV1AvailableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.wayback.v1.available.$post> },
      ) => parseResponse(client.wayback.v1.available.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
