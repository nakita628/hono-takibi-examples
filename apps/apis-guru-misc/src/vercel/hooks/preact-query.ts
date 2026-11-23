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

export function getEdgeConfigKey() {
  return ['edge-config'] as const
}

export function getRegistrationKey() {
  return ['registration'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV10Key() {
  return ['v10'] as const
}

export function getV11Key() {
  return ['v11'] as const
}

export function getV12Key() {
  return ['v12'] as const
}

export function getV13Key() {
  return ['v13'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getV5Key() {
  return ['v5'] as const
}

export function getV6Key() {
  return ['v6'] as const
}

export function getV7Key() {
  return ['v7'] as const
}

export function getV8Key() {
  return ['v8'] as const
}

export function getV9Key() {
  return ['v9'] as const
}

export function getEdgeConfigQueryKey(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
) {
  return ['edge-config', '/edge-config', args] as const
}

export function getEdgeConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['edge-config']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigQueryKey>
  >({
    queryKey: getEdgeConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEdgeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEdgeConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEdgeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEdgeConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEdgeConfigMutationKey() {
  return ['edge-config', '/edge-config', 'POST'] as const
}

export function getPostEdgeConfigMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['edge-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeConfigMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['edge-config']['$post']>) {
      return parseResponse(client['edge-config'].$post(args, options))
    },
  })
}

export function usePostEdgeConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['edge-config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEdgeConfigMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEdgeConfigEdgeConfigIdQueryKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId', args] as const
}

export function getEdgeConfigEdgeConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigEdgeConfigIdQueryKey>
  >({
    queryKey: getEdgeConfigEdgeConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEdgeConfigEdgeConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEdgeConfigEdgeConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEdgeConfigEdgeConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEdgeConfigEdgeConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutEdgeConfigEdgeConfigIdMutationKey() {
  return ['edge-config', '/edge-config/:edgeConfigId', 'PUT'] as const
}

export function getPutEdgeConfigEdgeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEdgeConfigEdgeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']>,
    ) {
      return parseResponse(client['edge-config'][':edgeConfigId'].$put(args, options))
    },
  })
}

export function usePutEdgeConfigEdgeConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEdgeConfigEdgeConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEdgeConfigEdgeConfigIdMutationKey() {
  return ['edge-config', '/edge-config/:edgeConfigId', 'DELETE'] as const
}

export function getDeleteEdgeConfigEdgeConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeConfigEdgeConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>,
    ) {
      return parseResponse(client['edge-config'][':edgeConfigId'].$delete(args, options))
    },
  })
}

export function useDeleteEdgeConfigEdgeConfigId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEdgeConfigEdgeConfigIdMutationOptions<TError, TOnMutateResult>(
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

export function getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/item/:edgeConfigItemKey', args] as const
}

export function getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey>
  >({
    queryKey: getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEdgeConfigEdgeConfigIdItemEdgeConfigItemKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEdgeConfigEdgeConfigIdItemEdgeConfigItemKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEdgeConfigEdgeConfigIdItemsQueryKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/items', args] as const
}

export function getEdgeConfigEdgeConfigIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigEdgeConfigIdItemsQueryKey>
  >({
    queryKey: getEdgeConfigEdgeConfigIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEdgeConfigEdgeConfigIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEdgeConfigEdgeConfigIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEdgeConfigEdgeConfigIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEdgeConfigEdgeConfigIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchEdgeConfigEdgeConfigIdItemsMutationKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/items', 'PATCH'] as const
}

export function getPatchEdgeConfigEdgeConfigIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEdgeConfigEdgeConfigIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>,
    ) {
      return parseResponse(client['edge-config'][':edgeConfigId'].items.$patch(args, options))
    },
  })
}

export function usePatchEdgeConfigEdgeConfigIdItems<
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
                ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEdgeConfigEdgeConfigIdItemsMutationOptions<
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

export function getPostEdgeConfigEdgeConfigIdTokenMutationKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/token', 'POST'] as const
}

export function getPostEdgeConfigEdgeConfigIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEdgeConfigEdgeConfigIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>,
    ) {
      return parseResponse(client['edge-config'][':edgeConfigId'].token.$post(args, options))
    },
  })
}

export function usePostEdgeConfigEdgeConfigIdToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEdgeConfigEdgeConfigIdTokenMutationOptions<
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

export function getEdgeConfigEdgeConfigIdTokenTokenQueryKey(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/token/:token', args] as const
}

export function getEdgeConfigEdgeConfigIdTokenTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigEdgeConfigIdTokenTokenQueryKey>
  >({
    queryKey: getEdgeConfigEdgeConfigIdTokenTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].token[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEdgeConfigEdgeConfigIdTokenToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdTokenTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEdgeConfigEdgeConfigIdTokenTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEdgeConfigEdgeConfigIdTokenToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdTokenTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEdgeConfigEdgeConfigIdTokenTokenQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEdgeConfigEdgeConfigIdTokensQueryKey(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/tokens', args] as const
}

export function getEdgeConfigEdgeConfigIdTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigEdgeConfigIdTokensQueryKey>
  >({
    queryKey: getEdgeConfigEdgeConfigIdTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEdgeConfigEdgeConfigIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEdgeConfigEdgeConfigIdTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEdgeConfigEdgeConfigIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEdgeConfigEdgeConfigIdTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEdgeConfigEdgeConfigIdTokensQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteEdgeConfigEdgeConfigIdTokensMutationKey() {
  return ['edge-config', '/edge-config/:edgeConfigId/tokens', 'DELETE'] as const
}

export function getDeleteEdgeConfigEdgeConfigIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEdgeConfigEdgeConfigIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>,
    ) {
      return parseResponse(client['edge-config'][':edgeConfigId'].tokens.$delete(args, options))
    },
  })
}

export function useDeleteEdgeConfigEdgeConfigIdTokens<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEdgeConfigEdgeConfigIdTokensMutationOptions<
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

export function getPostRegistrationMutationKey() {
  return ['registration', '/registration', 'POST'] as const
}

export function getPostRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.registration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.registration.$post>) {
      return parseResponse(client.registration.$post(args, options))
    },
  })
}

export function usePostRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.registration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getRegistrationVerifyQueryKey(
  args: InferRequestType<typeof client.registration.verify.$get>,
) {
  return ['registration', '/registration/verify', args] as const
}

export function getRegistrationVerifyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.registration.verify.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationVerifyQueryKey>
  >({
    queryKey: getRegistrationVerifyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.registration.verify.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegistrationVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registration.verify.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegistrationVerifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegistrationVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.registration.verify.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRegistrationVerifyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegistrationVerifyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1DeploymentsDeploymentIdChecksQueryKey(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks', args] as const
}

export function getV1DeploymentsDeploymentIdChecksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeploymentsDeploymentIdChecksQueryKey>
  >({
    queryKey: getV1DeploymentsDeploymentIdChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DeploymentsDeploymentIdChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeploymentsDeploymentIdChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1DeploymentsDeploymentIdChecksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DeploymentsDeploymentIdChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeploymentsDeploymentIdChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1DeploymentsDeploymentIdChecksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1DeploymentsDeploymentIdChecksMutationKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks', 'POST'] as const
}

export function getPostV1DeploymentsDeploymentIdChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeploymentsDeploymentIdChecksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>,
    ) {
      return parseResponse(client.v1.deployments[':deploymentId'].checks.$post(args, options))
    },
  })
}

export function usePostV1DeploymentsDeploymentIdChecks<
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
                ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeploymentsDeploymentIdChecksMutationOptions<
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

export function getV1DeploymentsDeploymentIdChecksCheckIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', args] as const
}

export function getV1DeploymentsDeploymentIdChecksCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeploymentsDeploymentIdChecksCheckIdQueryKey>
  >({
    queryKey: getV1DeploymentsDeploymentIdChecksCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DeploymentsDeploymentIdChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeploymentsDeploymentIdChecksCheckIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1DeploymentsDeploymentIdChecksCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DeploymentsDeploymentIdChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeploymentsDeploymentIdChecksCheckIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1DeploymentsDeploymentIdChecksCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV1DeploymentsDeploymentIdChecksCheckIdMutationKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', 'PATCH'] as const
}

export function getPatchV1DeploymentsDeploymentIdChecksCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DeploymentsDeploymentIdChecksCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks[':checkId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV1DeploymentsDeploymentIdChecksCheckId<
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
                ReturnType<
                  (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DeploymentsDeploymentIdChecksCheckIdMutationOptions<
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

export function getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestMutationKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId/rerequest', 'POST'] as const
}

export function getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks[':checkId'].rerequest.$post(args, options),
      )
    },
  })
}

export function usePostV1DeploymentsDeploymentIdChecksCheckIdRerequest<
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
                ReturnType<
                  (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestMutationOptions<
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

export function getPatchV1DomainsRecordsRecordIdMutationKey() {
  return ['v1', '/v1/domains/records/:recordId', 'PATCH'] as const
}

export function getPatchV1DomainsRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains.records)[':recordId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1DomainsRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>,
    ) {
      return parseResponse(client.v1.domains.records[':recordId'].$patch(args, options))
    },
  })
}

export function usePatchV1DomainsRecordsRecordId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.domains.records)[':recordId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1DomainsRecordsRecordIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1IntegrationsConfigurationIdQueryKey(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
) {
  return ['v1', '/v1/integrations/configuration/:id', args] as const
}

export function getV1IntegrationsConfigurationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsConfigurationIdQueryKey>
  >({
    queryKey: getV1IntegrationsConfigurationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations.configuration[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IntegrationsConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsConfigurationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1IntegrationsConfigurationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1IntegrationsConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsConfigurationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1IntegrationsConfigurationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1IntegrationsConfigurationIdMutationKey() {
  return ['v1', '/v1/integrations/configuration/:id', 'DELETE'] as const
}

export function getDeleteV1IntegrationsConfigurationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IntegrationsConfigurationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.integrations.configuration[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1IntegrationsConfigurationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IntegrationsConfigurationIdMutationOptions<
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

export function getV1IntegrationsConfigurationsQueryKey(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
) {
  return ['v1', '/v1/integrations/configurations', args] as const
}

export function getV1IntegrationsConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsConfigurationsQueryKey>
  >({
    queryKey: getV1IntegrationsConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations.configurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IntegrationsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1IntegrationsConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1IntegrationsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1IntegrationsConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1IntegrationsGitNamespacesQueryKey(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
) {
  return ['v1', '/v1/integrations/git-namespaces', args] as const
}

export function getV1IntegrationsGitNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsGitNamespacesQueryKey>
  >({
    queryKey: getV1IntegrationsGitNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations['git-namespaces'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IntegrationsGitNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsGitNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1IntegrationsGitNamespacesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1IntegrationsGitNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsGitNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1IntegrationsGitNamespacesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1IntegrationsLogDrainsIdMutationKey() {
  return ['v1', '/v1/integrations/log-drains/:id', 'DELETE'] as const
}

export function getDeleteV1IntegrationsLogDrainsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IntegrationsLogDrainsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.integrations['log-drains'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1IntegrationsLogDrainsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IntegrationsLogDrainsIdMutationOptions<
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

export function getV1IntegrationsSearchRepoQueryKey(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
) {
  return ['v1', '/v1/integrations/search-repo', args] as const
}

export function getV1IntegrationsSearchRepoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsSearchRepoQueryKey>
  >({
    queryKey: getV1IntegrationsSearchRepoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations['search-repo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1IntegrationsSearchRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsSearchRepoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1IntegrationsSearchRepoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1IntegrationsSearchRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsSearchRepoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1IntegrationsSearchRepoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1LogDrainsQueryKey(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
) {
  return ['v1', '/v1/log-drains', args] as const
}

export function getV1LogDrainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogDrainsQueryKey>
  >({
    queryKey: getV1LogDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['log-drains'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1LogDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LogDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LogDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LogDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LogDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LogDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1LogDrainsMutationKey() {
  return ['v1', '/v1/log-drains', 'POST'] as const
}

export function getPostV1LogDrainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['log-drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LogDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['log-drains']['$post']>) {
      return parseResponse(client.v1['log-drains'].$post(args, options))
    },
  })
}

export function usePostV1LogDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['log-drains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1LogDrainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1LogDrainsIdQueryKey(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
) {
  return ['v1', '/v1/log-drains/:id', args] as const
}

export function getV1LogDrainsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogDrainsIdQueryKey>
  >({
    queryKey: getV1LogDrainsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['log-drains'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LogDrainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LogDrainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LogDrainsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LogDrainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LogDrainsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LogDrainsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1LogDrainsIdMutationKey() {
  return ['v1', '/v1/log-drains/:id', 'DELETE'] as const
}

export function getDeleteV1LogDrainsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LogDrainsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>) {
      return parseResponse(client.v1['log-drains'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1LogDrainsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1LogDrainsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProjectsIdOrNameEnvIdQueryKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/env/:id', args] as const
}

export function getV1ProjectsIdOrNameEnvIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProjectsIdOrNameEnvIdQueryKey>
  >({
    queryKey: getV1ProjectsIdOrNameEnvIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.projects[':idOrName'].env[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ProjectsIdOrNameEnvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsIdOrNameEnvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1ProjectsIdOrNameEnvIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ProjectsIdOrNameEnvId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProjectsIdOrNameEnvIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1ProjectsIdOrNameEnvIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1TeamsMutationKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function getPostV1TeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.teams.$post>) {
      return parseResponse(client.v1.teams.$post(args, options))
    },
  })
}

export function usePostV1Teams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.teams.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1TeamsTeamIdMutationKey() {
  return ['v1', '/v1/teams/:teamId', 'DELETE'] as const
}

export function getDeleteV1TeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>) {
      return parseResponse(client.v1.teams[':teamId'].$delete(args, options))
    },
  })
}

export function useDeleteV1TeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TeamsTeamIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1TeamsTeamIdInvitesInviteIdMutationKey() {
  return ['v1', '/v1/teams/:teamId/invites/:inviteId', 'DELETE'] as const
}

export function getDeleteV1TeamsTeamIdInvitesInviteIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TeamsTeamIdInvitesInviteIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']
      >,
    ) {
      return parseResponse(client.v1.teams[':teamId'].invites[':inviteId'].$delete(args, options))
    },
  })
}

export function useDeleteV1TeamsTeamIdInvitesInviteId<
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
                ReturnType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TeamsTeamIdInvitesInviteIdMutationOptions<
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

export function getPostV1TeamsTeamIdMembersMutationKey() {
  return ['v1', '/v1/teams/:teamId/members', 'POST'] as const
}

export function getPostV1TeamsTeamIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsTeamIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']>,
    ) {
      return parseResponse(client.v1.teams[':teamId'].members.$post(args, options))
    },
  })
}

export function usePostV1TeamsTeamIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsTeamIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TeamsTeamIdMembersTeamsJoinMutationKey() {
  return ['v1', '/v1/teams/:teamId/members/teams/join', 'POST'] as const
}

export function getPostV1TeamsTeamIdMembersTeamsJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsTeamIdMembersTeamsJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']
      >,
    ) {
      return parseResponse(client.v1.teams[':teamId'].members.teams.join.$post(args, options))
    },
  })
}

export function usePostV1TeamsTeamIdMembersTeamsJoin<
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
                ReturnType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsTeamIdMembersTeamsJoinMutationOptions<
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

export function getDeleteV1TeamsTeamIdMembersUidMutationKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'DELETE'] as const
}

export function getDeleteV1TeamsTeamIdMembersUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TeamsTeamIdMembersUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>,
    ) {
      return parseResponse(client.v1.teams[':teamId'].members[':uid'].$delete(args, options))
    },
  })
}

export function useDeleteV1TeamsTeamIdMembersUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1TeamsTeamIdMembersUidMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1TeamsTeamIdMembersUidMutationKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'PATCH'] as const
}

export function getPatchV1TeamsTeamIdMembersUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1TeamsTeamIdMembersUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>,
    ) {
      return parseResponse(client.v1.teams[':teamId'].members[':uid'].$patch(args, options))
    },
  })
}

export function usePatchV1TeamsTeamIdMembersUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1TeamsTeamIdMembersUidMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TeamsTeamIdRequestMutationKey() {
  return ['v1', '/v1/teams/:teamId/request', 'POST'] as const
}

export function getPostV1TeamsTeamIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TeamsTeamIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>,
    ) {
      return parseResponse(client.v1.teams[':teamId'].request.$post(args, options))
    },
  })
}

export function usePostV1TeamsTeamIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1TeamsTeamIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getV1TeamsTeamIdRequestUserIdQueryKey(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
) {
  return ['v1', '/v1/teams/:teamId/request/:userId', args] as const
}

export function getV1TeamsTeamIdRequestUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TeamsTeamIdRequestUserIdQueryKey>
  >({
    queryKey: getV1TeamsTeamIdRequestUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.teams[':teamId'].request[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1TeamsTeamIdRequestUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdRequestUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1TeamsTeamIdRequestUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1TeamsTeamIdRequestUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TeamsTeamIdRequestUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1TeamsTeamIdRequestUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1UserMutationKey() {
  return ['v1', '/v1/user', 'DELETE'] as const
}

export function getDeleteV1UserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$delete>>>>>,
    TError,
    InferRequestType<typeof client.v1.user.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1UserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.user.$delete>) {
      return parseResponse(client.v1.user.$delete(args, options))
    },
  })
}

export function useDeleteV1User<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.user.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1UserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksQueryKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function getV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >({
    queryKey: getV1WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1WebhooksMutationKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function getPostV1WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webhooks.$post>) {
      return parseResponse(client.v1.webhooks.$post(args, options))
    },
  })
}

export function usePostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksIdQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function getV1WebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >({
    queryKey: getV1WebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1WebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1WebhooksIdMutationKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function getDeleteV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>) {
      return parseResponse(client.v1.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV10ProjectsIdOrNameEnvMutationKey() {
  return ['v10', '/v10/projects/:idOrName/env', 'POST'] as const
}

export function getPostV10ProjectsIdOrNameEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV10ProjectsIdOrNameEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>,
    ) {
      return parseResponse(client.v10.projects[':idOrName'].env.$post(args, options))
    },
  })
}

export function usePostV10ProjectsIdOrNameEnv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV10ProjectsIdOrNameEnvMutationOptions<TError, TOnMutateResult>(
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

export function getV11DeploymentsDeploymentIdBuildsQueryKey(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
) {
  return ['v11', '/v11/deployments/:deploymentId/builds', args] as const
}

export function getV11DeploymentsDeploymentIdBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV11DeploymentsDeploymentIdBuildsQueryKey>
  >({
    queryKey: getV11DeploymentsDeploymentIdBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v11.deployments[':deploymentId'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV11DeploymentsDeploymentIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV11DeploymentsDeploymentIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV11DeploymentsDeploymentIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV11DeploymentsDeploymentIdBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV11DeploymentsDeploymentIdBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV11DeploymentsDeploymentIdBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV12DeploymentsIdCancelMutationKey() {
  return ['v12', '/v12/deployments/:id/cancel', 'PATCH'] as const
}

export function getPatchV12DeploymentsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV12DeploymentsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>,
    ) {
      return parseResponse(client.v12.deployments[':id'].cancel.$patch(args, options))
    },
  })
}

export function usePatchV12DeploymentsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV12DeploymentsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV13DeploymentsMutationKey() {
  return ['v13', '/v13/deployments', 'POST'] as const
}

export function getPostV13DeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v13.deployments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v13.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV13DeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v13.deployments.$post>) {
      return parseResponse(client.v13.deployments.$post(args, options))
    },
  })
}

export function usePostV13Deployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v13.deployments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v13.deployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV13DeploymentsMutationOptions<TError, TOnMutateResult>(
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

export function getV13DeploymentsIdOrUrlQueryKey(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
) {
  return ['v13', '/v13/deployments/:idOrUrl', args] as const
}

export function getV13DeploymentsIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV13DeploymentsIdOrUrlQueryKey>
  >({
    queryKey: getV13DeploymentsIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v13.deployments[':idOrUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV13DeploymentsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV13DeploymentsIdOrUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV13DeploymentsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV13DeploymentsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV13DeploymentsIdOrUrlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV13DeploymentsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV13DeploymentsIdMutationKey() {
  return ['v13', '/v13/deployments/:id', 'DELETE'] as const
}

export function getDeleteV13DeploymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV13DeploymentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>) {
      return parseResponse(client.v13.deployments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV13DeploymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v13.deployments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV13DeploymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2AliasesAliasIdMutationKey() {
  return ['v2', '/v2/aliases/:aliasId', 'DELETE'] as const
}

export function getDeleteV2AliasesAliasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.aliases)[':aliasId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AliasesAliasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>) {
      return parseResponse(client.v2.aliases[':aliasId'].$delete(args, options))
    },
  })
}

export function useDeleteV2AliasesAliasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.aliases)[':aliasId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2AliasesAliasIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2DeploymentsIdOrUrlEventsQueryKey(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
) {
  return ['v2', '/v2/deployments/:idOrUrl/events', args] as const
}

export function getV2DeploymentsIdOrUrlEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DeploymentsIdOrUrlEventsQueryKey>
  >({
    queryKey: getV2DeploymentsIdOrUrlEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.deployments[':idOrUrl'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DeploymentsIdOrUrlEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DeploymentsIdOrUrlEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2DeploymentsIdOrUrlEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DeploymentsIdOrUrlEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DeploymentsIdOrUrlEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2DeploymentsIdOrUrlEventsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2DeploymentsIdAliasesQueryKey(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
) {
  return ['v2', '/v2/deployments/:id/aliases', args] as const
}

export function getV2DeploymentsIdAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DeploymentsIdAliasesQueryKey>
  >({
    queryKey: getV2DeploymentsIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.deployments[':id'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2DeploymentsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DeploymentsIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2DeploymentsIdAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2DeploymentsIdAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DeploymentsIdAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2DeploymentsIdAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2DeploymentsIdAliasesMutationKey() {
  return ['v2', '/v2/deployments/:id/aliases', 'POST'] as const
}

export function getPostV2DeploymentsIdAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DeploymentsIdAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>,
    ) {
      return parseResponse(client.v2.deployments[':id'].aliases.$post(args, options))
    },
  })
}

export function usePostV2DeploymentsIdAliases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DeploymentsIdAliasesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2DomainsDomainRecordsMutationKey() {
  return ['v2', '/v2/domains/:domain/records', 'POST'] as const
}

export function getPostV2DomainsDomainRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainsDomainRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>,
    ) {
      return parseResponse(client.v2.domains[':domain'].records.$post(args, options))
    },
  })
}

export function usePostV2DomainsDomainRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domains)[':domain']['records']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2DomainsDomainRecordsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2DomainsDomainRecordsRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain/records/:recordId', 'DELETE'] as const
}

export function getDeleteV2DomainsDomainRecordsRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainsDomainRecordsRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']
      >,
    ) {
      return parseResponse(client.v2.domains[':domain'].records[':recordId'].$delete(args, options))
    },
  })
}

export function useDeleteV2DomainsDomainRecordsRecordId<
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
                ReturnType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2DomainsDomainRecordsRecordIdMutationOptions<
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

export function getPostV2FilesMutationKey() {
  return ['v2', '/v2/files', 'POST'] as const
}

export function getPostV2FilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.files.$post>) {
      return parseResponse(client.v2.files.$post(args, options))
    },
  })
}

export function usePostV2Files<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.files.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.files.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2FilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2IntegrationsLogDrainsQueryKey(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
) {
  return ['v2', '/v2/integrations/log-drains', args] as const
}

export function getV2IntegrationsLogDrainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2IntegrationsLogDrainsQueryKey>
  >({
    queryKey: getV2IntegrationsLogDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.integrations['log-drains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2IntegrationsLogDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2IntegrationsLogDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2IntegrationsLogDrainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2IntegrationsLogDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2IntegrationsLogDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2IntegrationsLogDrainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2IntegrationsLogDrainsMutationKey() {
  return ['v2', '/v2/integrations/log-drains', 'POST'] as const
}

export function getPostV2IntegrationsLogDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2IntegrationsLogDrainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>,
    ) {
      return parseResponse(client.v2.integrations['log-drains'].$post(args, options))
    },
  })
}

export function usePostV2IntegrationsLogDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2IntegrationsLogDrainsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2SecretsIdOrNameMutationKey() {
  return ['v2', '/v2/secrets/:idOrName', 'DELETE'] as const
}

export function getDeleteV2SecretsIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.secrets)[':idOrName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SecretsIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']>) {
      return parseResponse(client.v2.secrets[':idOrName'].$delete(args, options))
    },
  })
}

export function useDeleteV2SecretsIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.secrets)[':idOrName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.secrets)[':idOrName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2SecretsIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SecretsNameMutationKey() {
  return ['v2', '/v2/secrets/:name', 'POST'] as const
}

export function getPostV2SecretsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.secrets)[':name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SecretsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.secrets)[':name']['$post']>) {
      return parseResponse(client.v2.secrets[':name'].$post(args, options))
    },
  })
}

export function usePostV2SecretsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.secrets)[':name']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SecretsNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2SecretsNameMutationKey() {
  return ['v2', '/v2/secrets/:name', 'PATCH'] as const
}

export function getPatchV2SecretsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SecretsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>) {
      return parseResponse(client.v2.secrets[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2SecretsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2SecretsNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2TeamsQueryKey(args: InferRequestType<typeof client.v2.teams.$get>) {
  return ['v2', '/v2/teams', args] as const
}

export function getV2TeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.teams.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TeamsQueryKey>
  >({
    queryKey: getV2TeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Teams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2TeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Teams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2TeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TeamsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2TeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId', args] as const
}

export function getV2TeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamsTeamIdQueryKey>
  >({
    queryKey: getV2TeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.teams[':teamId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TeamsTeamIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchV2TeamsTeamIdMutationKey() {
  return ['v2', '/v2/teams/:teamId', 'PATCH'] as const
}

export function getPatchV2TeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2TeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>) {
      return parseResponse(client.v2.teams[':teamId'].$patch(args, options))
    },
  })
}

export function usePatchV2TeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2TeamsTeamIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2TeamsTeamIdMembersQueryKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId/members', args] as const
}

export function getV2TeamsTeamIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamsTeamIdMembersQueryKey>
  >({
    queryKey: getV2TeamsTeamIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.teams[':teamId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TeamsTeamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TeamsTeamIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2TeamsTeamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TeamsTeamIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TeamsTeamIdMembersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2UserQueryKey() {
  return ['v2', '/v2/user'] as const
}

export function getV2UserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UserQueryKey>
  >({
    queryKey: getV2UserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2UserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2UserQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3EventsQueryKey(args: InferRequestType<typeof client.v3.events.$get>) {
  return ['v3', '/v3/events', args] as const
}

export function getV3EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3EventsQueryKey>
  >({
    queryKey: getV3EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3EventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3EventsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3SecretsQueryKey(args: InferRequestType<typeof client.v3.secrets.$get>) {
  return ['v3', '/v3/secrets', args] as const
}

export function getV3SecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3SecretsQueryKey>
  >({
    queryKey: getV3SecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.secrets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3SecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3SecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.secrets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3SecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3SecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3SecretsIdOrNameQueryKey(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
) {
  return ['v3', '/v3/secrets/:idOrName', args] as const
}

export function getV3SecretsIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SecretsIdOrNameQueryKey>
  >({
    queryKey: getV3SecretsIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.secrets[':idOrName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3SecretsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SecretsIdOrNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3SecretsIdOrNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3SecretsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SecretsIdOrNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3SecretsIdOrNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3UserTokensMutationKey() {
  return ['v3', '/v3/user/tokens', 'POST'] as const
}

export function getPostV3UserTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.user.tokens.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.user.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3UserTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.user.tokens.$post>) {
      return parseResponse(client.v3.user.tokens.$post(args, options))
    },
  })
}

export function usePostV3UserTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.user.tokens.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.user.tokens.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3UserTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV3UserTokensTokenIdMutationKey() {
  return ['v3', '/v3/user/tokens/:tokenId', 'DELETE'] as const
}

export function getDeleteV3UserTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3UserTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>,
    ) {
      return parseResponse(client.v3.user.tokens[':tokenId'].$delete(args, options))
    },
  })
}

export function useDeleteV3UserTokensTokenId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3UserTokensTokenIdMutationOptions<TError, TOnMutateResult>(
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

export function getV4AliasesQueryKey(args: InferRequestType<typeof client.v4.aliases.$get>) {
  return ['v4', '/v4/aliases', args] as const
}

export function getV4AliasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.aliases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4AliasesQueryKey>
  >({
    queryKey: getV4AliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.aliases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4Aliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4AliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4Aliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4AliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4AliasesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4AliasesIdOrAliasQueryKey(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
) {
  return ['v4', '/v4/aliases/:idOrAlias', args] as const
}

export function getV4AliasesIdOrAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AliasesIdOrAliasQueryKey>
  >({
    queryKey: getV4AliasesIdOrAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.aliases[':idOrAlias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4AliasesIdOrAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AliasesIdOrAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4AliasesIdOrAliasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4AliasesIdOrAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AliasesIdOrAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4AliasesIdOrAliasQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV4DomainsMutationKey() {
  return ['v4', '/v4/domains', 'POST'] as const
}

export function getPostV4DomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4DomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.domains.$post>) {
      return parseResponse(client.v4.domains.$post(args, options))
    },
  })
}

export function usePostV4Domains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.domains.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4DomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV4DomainsBuyMutationKey() {
  return ['v4', '/v4/domains/buy', 'POST'] as const
}

export function getPostV4DomainsBuyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.buy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.domains.buy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4DomainsBuyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.domains.buy.$post>) {
      return parseResponse(client.v4.domains.buy.$post(args, options))
    },
  })
}

export function usePostV4DomainsBuy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.buy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.domains.buy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV4DomainsBuyMutationOptions<TError, TOnMutateResult>(
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

export function getV4DomainsPriceQueryKey(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
) {
  return ['v4', '/v4/domains/price', args] as const
}

export function getV4DomainsPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.domains.price.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsPriceQueryKey>
  >({
    queryKey: getV4DomainsPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.domains.price.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4DomainsPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4DomainsPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4DomainsPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.domains.price.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4DomainsPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4DomainsStatusQueryKey(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
) {
  return ['v4', '/v4/domains/status', args] as const
}

export function getV4DomainsStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.domains.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsStatusQueryKey>
  >({
    queryKey: getV4DomainsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.domains.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4DomainsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV4DomainsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV4DomainsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.domains.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV4DomainsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV4DomainsDomainRecordsQueryKey(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
) {
  return ['v4', '/v4/domains/:domain/records', args] as const
}

export function getV4DomainsDomainRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsDomainRecordsQueryKey>
  >({
    queryKey: getV4DomainsDomainRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.domains[':domain'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4DomainsDomainRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsDomainRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV4DomainsDomainRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4DomainsDomainRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsDomainRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV4DomainsDomainRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV5DomainsQueryKey(args: InferRequestType<typeof client.v5.domains.$get>) {
  return ['v5', '/v5/domains', args] as const
}

export function getV5DomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v5.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV5DomainsQueryKey>
  >({
    queryKey: getV5DomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v5.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV5Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV5DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV5DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV5Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV5DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV5DomainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV5DomainsDomainQueryKey(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
) {
  return ['v5', '/v5/domains/:domain', args] as const
}

export function getV5DomainsDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV5DomainsDomainQueryKey>
  >({
    queryKey: getV5DomainsDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v5.domains[':domain'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV5DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV5DomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV5DomainsDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV5DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV5DomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV5DomainsDomainQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV5UserTokensQueryKey() {
  return ['v5', '/v5/user/tokens'] as const
}

export function getV5UserTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV5UserTokensQueryKey>
  >({
    queryKey: getV5UserTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v5.user.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV5UserTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV5UserTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV5UserTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV5UserTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV5UserTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV5UserTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV5UserTokensTokenIdQueryKey(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
) {
  return ['v5', '/v5/user/tokens/:tokenId', args] as const
}

export function getV5UserTokensTokenIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV5UserTokensTokenIdQueryKey>
  >({
    queryKey: getV5UserTokensTokenIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v5.user.tokens[':tokenId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV5UserTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV5UserTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV5UserTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV5UserTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV5UserTokensTokenIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV5UserTokensTokenIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV6DeploymentsQueryKey(
  args: InferRequestType<typeof client.v6.deployments.$get>,
) {
  return ['v6', '/v6/deployments', args] as const
}

export function getV6DeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v6.deployments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV6DeploymentsQueryKey>
  >({
    queryKey: getV6DeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v6.deployments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV6Deployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v6.deployments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV6DeploymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV6Deployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v6.deployments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV6DeploymentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV6DeploymentsIdFilesQueryKey(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
) {
  return ['v6', '/v6/deployments/:id/files', args] as const
}

export function getV6DeploymentsIdFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV6DeploymentsIdFilesQueryKey>
  >({
    queryKey: getV6DeploymentsIdFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v6.deployments[':id'].files.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV6DeploymentsIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV6DeploymentsIdFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV6DeploymentsIdFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsIdFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV6DeploymentsIdFilesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV6DeploymentsIdFilesFileIdQueryKey(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
) {
  return ['v6', '/v6/deployments/:id/files/:fileId', args] as const
}

export function getV6DeploymentsIdFilesFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV6DeploymentsIdFilesFileIdQueryKey>
  >({
    queryKey: getV6DeploymentsIdFilesFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v6.deployments[':id'].files[':fileId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV6DeploymentsIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsIdFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV6DeploymentsIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV6DeploymentsIdFilesFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DeploymentsIdFilesFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV6DeploymentsIdFilesFileIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV6DomainsDomainMutationKey() {
  return ['v6', '/v6/domains/:domain', 'DELETE'] as const
}

export function getDeleteV6DomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v6.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV6DomainsDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>) {
      return parseResponse(client.v6.domains[':domain'].$delete(args, options))
    },
  })
}

export function useDeleteV6DomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.domains)[':domain']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV6DomainsDomainMutationOptions<TError, TOnMutateResult>(
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

export function getV6DomainsDomainConfigQueryKey(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
) {
  return ['v6', '/v6/domains/:domain/config', args] as const
}

export function getV6DomainsDomainConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV6DomainsDomainConfigQueryKey>
  >({
    queryKey: getV6DomainsDomainConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v6.domains[':domain'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV6DomainsDomainConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DomainsDomainConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV6DomainsDomainConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV6DomainsDomainConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV6DomainsDomainConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV6DomainsDomainConfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV7CertsMutationKey() {
  return ['v7', '/v7/certs', 'PUT'] as const
}

export function getPutV7CertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$put>>>>>,
    TError,
    InferRequestType<typeof client.v7.certs.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV7CertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v7.certs.$put>) {
      return parseResponse(client.v7.certs.$put(args, options))
    },
  })
}

export function usePutV7Certs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$put>>>>>,
        TError,
        InferRequestType<typeof client.v7.certs.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV7CertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV7CertsMutationKey() {
  return ['v7', '/v7/certs', 'POST'] as const
}

export function getPostV7CertsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v7.certs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV7CertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v7.certs.$post>) {
      return parseResponse(client.v7.certs.$post(args, options))
    },
  })
}

export function usePostV7Certs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v7.certs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV7CertsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV7CertsIdQueryKey(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
) {
  return ['v7', '/v7/certs/:id', args] as const
}

export function getV7CertsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV7CertsIdQueryKey>
  >({
    queryKey: getV7CertsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v7.certs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV7CertsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV7CertsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV7CertsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV7CertsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v7.certs)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV7CertsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV7CertsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV7CertsIdMutationKey() {
  return ['v7', '/v7/certs/:id', 'DELETE'] as const
}

export function getDeleteV7CertsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v7.certs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV7CertsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v7.certs)[':id']['$delete']>) {
      return parseResponse(client.v7.certs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV7CertsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v7.certs)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV7CertsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV8ArtifactsMutationKey() {
  return ['v8', '/v8/artifacts', 'POST'] as const
}

export function getPostV8ArtifactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v8.artifacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV8ArtifactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v8.artifacts.$post>) {
      return parseResponse(client.v8.artifacts.$post(args, options))
    },
  })
}

export function usePostV8Artifacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v8.artifacts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV8ArtifactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV8ArtifactsEventsMutationKey() {
  return ['v8', '/v8/artifacts/events', 'POST'] as const
}

export function getPostV8ArtifactsEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.events.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v8.artifacts.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV8ArtifactsEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v8.artifacts.events.$post>) {
      return parseResponse(client.v8.artifacts.events.$post(args, options))
    },
  })
}

export function usePostV8ArtifactsEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.events.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v8.artifacts.events.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV8ArtifactsEventsMutationOptions<TError, TOnMutateResult>(
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

export function getV8ArtifactsStatusQueryKey(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
) {
  return ['v8', '/v8/artifacts/status', args] as const
}

export function getV8ArtifactsStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v8.artifacts.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV8ArtifactsStatusQueryKey>
  >({
    queryKey: getV8ArtifactsStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v8.artifacts.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV8ArtifactsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV8ArtifactsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV8ArtifactsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV8ArtifactsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV8ArtifactsStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV8ArtifactsStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV8ArtifactsHashQueryKey(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v8', '/v8/artifacts/:hash', keyArgs] as const
}

export function getV8ArtifactsHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV8ArtifactsHashQueryKey>
  >({
    queryKey: getV8ArtifactsHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v8.artifacts[':hash'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV8ArtifactsHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV8ArtifactsHashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV8ArtifactsHashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV8ArtifactsHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV8ArtifactsHashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV8ArtifactsHashQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV8ArtifactsHashMutationKey() {
  return ['v8', '/v8/artifacts/:hash', 'PUT'] as const
}

export function getPutV8ArtifactsHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV8ArtifactsHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>) {
      return parseResponse(client.v8.artifacts[':hash'].$put(args, options))
    },
  })
}

export function usePutV8ArtifactsHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV8ArtifactsHashMutationOptions<TError, TOnMutateResult>(
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

export function getHeadV8ArtifactsHashMutationKey() {
  return ['v8', '/v8/artifacts/:hash', 'HEAD'] as const
}

export function getHeadV8ArtifactsHashMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$head']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadV8ArtifactsHashMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>) {
      return parseResponse(client.v8.artifacts[':hash'].$head(args, options))
    },
  })
}

export function useHeadV8ArtifactsHash<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$head']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getHeadV8ArtifactsHashMutationOptions<TError, TOnMutateResult>(
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

export function getV9ProjectsQueryKey(args: InferRequestType<typeof client.v9.projects.$get>) {
  return ['v9', '/v9/projects', args] as const
}

export function getV9ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v9.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsQueryKey>
  >({
    queryKey: getV9ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v9.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV9Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v9.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV9ProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV9Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v9.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV9ProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV9ProjectsMutationKey() {
  return ['v9', '/v9/projects', 'POST'] as const
}

export function getPostV9ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v9.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV9ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v9.projects.$post>) {
      return parseResponse(client.v9.projects.$post(args, options))
    },
  })
}

export function usePostV9Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v9.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV9ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV9ProjectsIdOrNameQueryKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName', args] as const
}

export function getV9ProjectsIdOrNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsIdOrNameQueryKey>
  >({
    queryKey: getV9ProjectsIdOrNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v9.projects[':idOrName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV9ProjectsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV9ProjectsIdOrNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV9ProjectsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV9ProjectsIdOrNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV9ProjectsIdOrNameMutationKey() {
  return ['v9', '/v9/projects/:idOrName', 'DELETE'] as const
}

export function getDeleteV9ProjectsIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV9ProjectsIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>) {
      return parseResponse(client.v9.projects[':idOrName'].$delete(args, options))
    },
  })
}

export function useDeleteV9ProjectsIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV9ProjectsIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV9ProjectsIdOrNameMutationKey() {
  return ['v9', '/v9/projects/:idOrName', 'PATCH'] as const
}

export function getPatchV9ProjectsIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV9ProjectsIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>) {
      return parseResponse(client.v9.projects[':idOrName'].$patch(args, options))
    },
  })
}

export function usePatchV9ProjectsIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV9ProjectsIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getV9ProjectsIdOrNameDomainsQueryKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains', args] as const
}

export function getV9ProjectsIdOrNameDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsIdOrNameDomainsQueryKey>
  >({
    queryKey: getV9ProjectsIdOrNameDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV9ProjectsIdOrNameDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV9ProjectsIdOrNameDomainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV9ProjectsIdOrNameDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV9ProjectsIdOrNameDomainsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV9ProjectsIdOrNameDomainsMutationKey() {
  return ['v9', '/v9/projects/:idOrName/domains', 'POST'] as const
}

export function getPostV9ProjectsIdOrNameDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV9ProjectsIdOrNameDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>,
    ) {
      return parseResponse(client.v9.projects[':idOrName'].domains.$post(args, options))
    },
  })
}

export function usePostV9ProjectsIdOrNameDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV9ProjectsIdOrNameDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getV9ProjectsIdOrNameDomainsDomainQueryKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', args] as const
}

export function getV9ProjectsIdOrNameDomainsDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsIdOrNameDomainsDomainQueryKey>
  >({
    queryKey: getV9ProjectsIdOrNameDomainsDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains[':domain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV9ProjectsIdOrNameDomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameDomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV9ProjectsIdOrNameDomainsDomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV9ProjectsIdOrNameDomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameDomainsDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV9ProjectsIdOrNameDomainsDomainQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV9ProjectsIdOrNameDomainsDomainMutationKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'DELETE'] as const
}

export function getDeleteV9ProjectsIdOrNameDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV9ProjectsIdOrNameDomainsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV9ProjectsIdOrNameDomainsDomain<
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
                ReturnType<
                  (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV9ProjectsIdOrNameDomainsDomainMutationOptions<
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

export function getPatchV9ProjectsIdOrNameDomainsDomainMutationKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'PATCH'] as const
}

export function getPatchV9ProjectsIdOrNameDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV9ProjectsIdOrNameDomainsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']
      >,
    ) {
      return parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$patch(args, options))
    },
  })
}

export function usePatchV9ProjectsIdOrNameDomainsDomain<
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
                ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV9ProjectsIdOrNameDomainsDomainMutationOptions<
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

export function getPostV9ProjectsIdOrNameDomainsDomainVerifyMutationKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain/verify', 'POST'] as const
}

export function getPostV9ProjectsIdOrNameDomainsDomainVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV9ProjectsIdOrNameDomainsDomainVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
      >,
    ) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains[':domain'].verify.$post(args, options),
      )
    },
  })
}

export function usePostV9ProjectsIdOrNameDomainsDomainVerify<
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
                ReturnType<
                  (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV9ProjectsIdOrNameDomainsDomainVerifyMutationOptions<
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

export function getV9ProjectsIdOrNameEnvQueryKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/env', args] as const
}

export function getV9ProjectsIdOrNameEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsIdOrNameEnvQueryKey>
  >({
    queryKey: getV9ProjectsIdOrNameEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v9.projects[':idOrName'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV9ProjectsIdOrNameEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV9ProjectsIdOrNameEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV9ProjectsIdOrNameEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV9ProjectsIdOrNameEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV9ProjectsIdOrNameEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV9ProjectsIdOrNameEnvIdMutationKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'DELETE'] as const
}

export function getDeleteV9ProjectsIdOrNameEnvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV9ProjectsIdOrNameEnvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>,
    ) {
      return parseResponse(client.v9.projects[':idOrName'].env[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV9ProjectsIdOrNameEnvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV9ProjectsIdOrNameEnvIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV9ProjectsIdOrNameEnvIdMutationKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'PATCH'] as const
}

export function getPatchV9ProjectsIdOrNameEnvIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV9ProjectsIdOrNameEnvIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>,
    ) {
      return parseResponse(client.v9.projects[':idOrName'].env[':id'].$patch(args, options))
    },
  })
}

export function usePatchV9ProjectsIdOrNameEnvId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV9ProjectsIdOrNameEnvIdMutationOptions<TError, TOnMutateResult>(
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
