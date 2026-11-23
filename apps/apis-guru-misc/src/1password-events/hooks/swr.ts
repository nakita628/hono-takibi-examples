import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiAuthIntrospectKey() {
  return ['api', '/api/auth/introspect'] as const
}

export function useGetApiAuthIntrospect<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthIntrospectKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth.introspect.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAuthIntrospect<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAuthIntrospectKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.auth.introspect.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1ItemusagesKey() {
  return ['api', '/api/v1/itemusages', 'POST'] as const
}

export function usePostApiV1Itemusages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.itemusages.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.itemusages.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1ItemusagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.itemusages.$post> }) =>
        parseResponse(client.api.v1.itemusages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SigninattemptsKey() {
  return ['api', '/api/v1/signinattempts', 'POST'] as const
}

export function usePostApiV1Signinattempts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.signinattempts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.signinattempts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SigninattemptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.signinattempts.$post> },
      ) => parseResponse(client.api.v1.signinattempts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
