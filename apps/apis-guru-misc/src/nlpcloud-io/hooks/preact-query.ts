import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EnCoreWebSmIndexQueryKey() {
  return ['v1', '/v1/en_core_web_sm/'] as const
}

export function getV1EnCoreWebSmIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnCoreWebSmIndexQueryKey>
  >({
    queryKey: getV1EnCoreWebSmIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.en_core_web_sm.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnCoreWebSmIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnCoreWebSmIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EnCoreWebSmIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EnCoreWebSmIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnCoreWebSmIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EnCoreWebSmIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1EnCoreWebSmDependenciesMutationKey() {
  return ['v1', '/v1/en_core_web_sm/dependencies', 'POST'] as const
}

export function getPostV1EnCoreWebSmDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.en_core_web_sm.dependencies.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnCoreWebSmDependenciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post>) {
      return parseResponse(client.v1.en_core_web_sm.dependencies.$post(args, options))
    },
  })
}

export function usePostV1EnCoreWebSmDependencies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.en_core_web_sm.dependencies.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.en_core_web_sm.dependencies.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EnCoreWebSmDependenciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1EnCoreWebSmEntitiesMutationKey() {
  return ['v1', '/v1/en_core_web_sm/entities', 'POST'] as const
}

export function getPostV1EnCoreWebSmEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.entities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.en_core_web_sm.entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnCoreWebSmEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.en_core_web_sm.entities.$post>) {
      return parseResponse(client.v1.en_core_web_sm.entities.$post(args, options))
    },
  })
}

export function usePostV1EnCoreWebSmEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.en_core_web_sm.entities.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v1.en_core_web_sm.entities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EnCoreWebSmEntitiesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1EnCoreWebSmSentenceDependenciesMutationKey() {
  return ['v1', '/v1/en_core_web_sm/sentence-dependencies', 'POST'] as const
}

export function getPostV1EnCoreWebSmSentenceDependenciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EnCoreWebSmSentenceDependenciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>,
    ) {
      return parseResponse(client.v1.en_core_web_sm['sentence-dependencies'].$post(args, options))
    },
  })
}

export function usePostV1EnCoreWebSmSentenceDependencies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.en_core_web_sm)['sentence-dependencies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EnCoreWebSmSentenceDependenciesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1EnCoreWebSmVersionQueryKey() {
  return ['v1', '/v1/en_core_web_sm/version'] as const
}

export function getV1EnCoreWebSmVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EnCoreWebSmVersionQueryKey>
  >({
    queryKey: getV1EnCoreWebSmVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.en_core_web_sm.version.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1EnCoreWebSmVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnCoreWebSmVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EnCoreWebSmVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1EnCoreWebSmVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.en_core_web_sm.version.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EnCoreWebSmVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EnCoreWebSmVersionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
