import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1EnCoreWebSmIndexKey() {
  return ['v1', '/v1/en_core_web_sm/'] as const
}

export function useGetV1EnCoreWebSmIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnCoreWebSmIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.en_core_web_sm.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnCoreWebSmIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnCoreWebSmIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.en_core_web_sm.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1EnCoreWebSmDependenciesKey() {
  return ['v1', '/v1/en_core_web_sm/dependencies', 'POST'] as const
}

export function usePostV1EnCoreWebSmDependencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.en_core_web_sm.dependencies.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnCoreWebSmDependenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post> },
      ) => parseResponse(client.v1.en_core_web_sm.dependencies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EnCoreWebSmEntitiesKey() {
  return ['v1', '/v1/en_core_web_sm/entities', 'POST'] as const
}

export function usePostV1EnCoreWebSmEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.entities.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.en_core_web_sm.entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnCoreWebSmEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.en_core_web_sm.entities.$post> },
      ) => parseResponse(client.v1.en_core_web_sm.entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EnCoreWebSmSentenceDependenciesKey() {
  return ['v1', '/v1/en_core_web_sm/sentence-dependencies', 'POST'] as const
}

export function usePostV1EnCoreWebSmSentenceDependencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnCoreWebSmSentenceDependenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>
        },
      ) =>
        parseResponse(client.v1.en_core_web_sm['sentence-dependencies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnCoreWebSmVersionKey() {
  return ['v1', '/v1/en_core_web_sm/version'] as const
}

export function useGetV1EnCoreWebSmVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnCoreWebSmVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.en_core_web_sm.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnCoreWebSmVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1EnCoreWebSmVersionKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.en_core_web_sm.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
