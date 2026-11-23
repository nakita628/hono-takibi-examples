import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config']['$get']>>,
) {
  return ['edge-config', '/edge-config', toValue(args)] as const
}

export function getEdgeConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEdgeConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>
            >
          >,
          ReturnType<typeof getEdgeConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['edge-config']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEdgeConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>,
) {
  return ['edge-config', '/edge-config/:edgeConfigId', toValue(args)] as const
}

export function getEdgeConfigEdgeConfigIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigEdgeConfigIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['edge-config'][':edgeConfigId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEdgeConfigEdgeConfigIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigEdgeConfigIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'][':edgeConfigId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
    >
  >,
) {
  return [
    'edge-config',
    '/edge-config/:edgeConfigId/item/:edgeConfigItemKey',
    toValue(args),
  ] as const
}

export function getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['edge-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigEdgeConfigIdItemEdgeConfigItemKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeConfigEdgeConfigIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/items', toValue(args)] as const
}

export function getEdgeConfigEdgeConfigIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigEdgeConfigIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEdgeConfigEdgeConfigIdItemsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigEdgeConfigIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'][':edgeConfigId'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/token/:token', toValue(args)] as const
}

export function getEdgeConfigEdgeConfigIdTokenTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigEdgeConfigIdTokenTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].token[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['token'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getEdgeConfigEdgeConfigIdTokenTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigEdgeConfigIdTokenTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'][':edgeConfigId'].token[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEdgeConfigEdgeConfigIdTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>
  >,
) {
  return ['edge-config', '/edge-config/:edgeConfigId/tokens', toValue(args)] as const
}

export function getEdgeConfigEdgeConfigIdTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEdgeConfigEdgeConfigIdTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['edge-config'][':edgeConfigId'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['edge-config'][':edgeConfigId']['tokens']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEdgeConfigEdgeConfigIdTokensQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEdgeConfigEdgeConfigIdTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['edge-config'][':edgeConfigId'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.registration.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.verify.$get>>,
) {
  return ['registration', '/registration/verify', toValue(args)] as const
}

export function getRegistrationVerifyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.verify.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegistrationVerifyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.registration.verify.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegistrationVerify<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.registration.verify.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>
            >
          >,
          ReturnType<typeof getRegistrationVerifyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.registration.verify.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegistrationVerifyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegistrationVerifyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.registration.verify.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DeploymentsDeploymentIdChecksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>
  >,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks', toValue(args)] as const
}

export function getV1DeploymentsDeploymentIdChecksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DeploymentsDeploymentIdChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1DeploymentsDeploymentIdChecksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DeploymentsDeploymentIdChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.deployments[':deploymentId'].checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
  >,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', toValue(args)] as const
}

export function getV1DeploymentsDeploymentIdChecksCheckIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DeploymentsDeploymentIdChecksCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.deployments[':deploymentId'].checks[':checkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getV1DeploymentsDeploymentIdChecksCheckIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DeploymentsDeploymentIdChecksCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.deployments[':deploymentId'].checks[':checkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>
  >,
) {
  return ['v1', '/v1/integrations/configuration/:id', toValue(args)] as const
}

export function getV1IntegrationsConfigurationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationsConfigurationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrations.configuration[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IntegrationsConfigurationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationsConfigurationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrations.configuration[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.integrations.configuration)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.configurations.$get>>,
) {
  return ['v1', '/v1/integrations/configurations', toValue(args)] as const
}

export function getV1IntegrationsConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.configurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationsConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrations.configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IntegrationsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.configurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getV1IntegrationsConfigurationsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationsConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrations.configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1IntegrationsGitNamespacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>
  >,
) {
  return ['v1', '/v1/integrations/git-namespaces', toValue(args)] as const
}

export function getV1IntegrationsGitNamespacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationsGitNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrations['git-namespaces'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IntegrationsGitNamespacesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationsGitNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrations['git-namespaces'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>>,
) {
  return ['v1', '/v1/integrations/search-repo', toValue(args)] as const
}

export function getV1IntegrationsSearchRepoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationsSearchRepoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrations['search-repo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1IntegrationsSearchRepoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationsSearchRepoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrations['search-repo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LogDrainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains']['$get']>>,
) {
  return ['v1', '/v1/log-drains', toValue(args)] as const
}

export function getV1LogDrainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LogDrainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['log-drains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LogDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
            >
          >,
          ReturnType<typeof getV1LogDrainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogDrainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LogDrainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['log-drains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>>,
) {
  return ['v1', '/v1/log-drains/:id', toValue(args)] as const
}

export function getV1LogDrainsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LogDrainsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['log-drains'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LogDrainsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LogDrainsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LogDrainsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LogDrainsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['log-drains'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/projects/:idOrName/env/:id', toValue(args)] as const
}

export function getV1ProjectsIdOrNameEnvIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProjectsIdOrNameEnvIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.projects[':idOrName'].env[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProjectsIdOrNameEnvIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProjectsIdOrNameEnvIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.projects[':idOrName'].env[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.teams.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>
  >,
) {
  return ['v1', '/v1/teams/:teamId/request/:userId', toValue(args)] as const
}

export function getV1TeamsTeamIdRequestUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TeamsTeamIdRequestUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.teams[':teamId'].request[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1TeamsTeamIdRequestUserIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TeamsTeamIdRequestUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.teams[':teamId'].request[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.user.$delete>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getV1WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
) {
  return ['v1', '/v1/webhooks', toValue(args)] as const
}

export function getV1WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          ReturnType<typeof getV1WebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
) {
  return ['v1', '/v1/webhooks/:id', toValue(args)] as const
}

export function getV1WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1WebhooksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
  >,
) {
  return ['v11', '/v11/deployments/:deploymentId/builds', toValue(args)] as const
}

export function getV11DeploymentsDeploymentIdBuildsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV11DeploymentsDeploymentIdBuildsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v11.deployments[':deploymentId'].builds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v11.deployments)[':deploymentId']['builds']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV11DeploymentsDeploymentIdBuildsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV11DeploymentsDeploymentIdBuildsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v11.deployments[':deploymentId'].builds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v13.deployments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v13.deployments.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>,
) {
  return ['v13', '/v13/deployments/:idOrUrl', toValue(args)] as const
}

export function getV13DeploymentsIdOrUrlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV13DeploymentsIdOrUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v13.deployments[':idOrUrl'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV13DeploymentsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV13DeploymentsIdOrUrlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV13DeploymentsIdOrUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v13.deployments[':idOrUrl'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>
  >,
) {
  return ['v2', '/v2/deployments/:idOrUrl/events', toValue(args)] as const
}

export function getV2DeploymentsIdOrUrlEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DeploymentsIdOrUrlEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.deployments[':idOrUrl'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.deployments)[':idOrUrl']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DeploymentsIdOrUrlEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DeploymentsIdOrUrlEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.deployments[':idOrUrl'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DeploymentsIdAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>
  >,
) {
  return ['v2', '/v2/deployments/:id/aliases', toValue(args)] as const
}

export function getV2DeploymentsIdAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DeploymentsIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.deployments[':id'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DeploymentsIdAliasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DeploymentsIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.deployments[':id'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.files.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>>,
) {
  return ['v2', '/v2/integrations/log-drains', toValue(args)] as const
}

export function getV2IntegrationsLogDrainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2IntegrationsLogDrainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.integrations['log-drains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2IntegrationsLogDrainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2IntegrationsLogDrainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.integrations['log-drains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.secrets)[':name']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.secrets)[':name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.secrets)[':name']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getV2TeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.teams.$get>>,
) {
  return ['v2', '/v2/teams', toValue(args)] as const
}

export function getV2TeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.teams.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.teams.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Teams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.teams.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>
          >,
          ReturnType<typeof getV2TeamsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>>,
) {
  return ['v2', '/v2/teams/:teamId', toValue(args)] as const
}

export function getV2TeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.teams[':teamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TeamsTeamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2TeamsTeamIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.teams[':teamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>>,
) {
  return ['v2', '/v2/teams/:teamId/members', toValue(args)] as const
}

export function getV2TeamsTeamIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TeamsTeamIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.teams[':teamId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2TeamsTeamIdMembersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TeamsTeamIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.teams[':teamId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UserQueryKey() {
  return ['v2', '/v2/user'] as const
}

export function getV2UserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
          >,
          ReturnType<typeof getV2UserQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.events.$get>>,
) {
  return ['v3', '/v3/events', toValue(args)] as const
}

export function getV3EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>
          >,
          ReturnType<typeof getV3EventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.secrets.$get>>,
) {
  return ['v3', '/v3/secrets', toValue(args)] as const
}

export function getV3SecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.secrets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Secrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>
          >,
          ReturnType<typeof getV3SecretsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3SecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SecretsIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>>,
) {
  return ['v3', '/v3/secrets/:idOrName', toValue(args)] as const
}

export function getV3SecretsIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SecretsIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.secrets[':idOrName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SecretsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.secrets)[':idOrName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3SecretsIdOrNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.secrets)[':idOrName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SecretsIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SecretsIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.secrets[':idOrName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.user.tokens.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v3.user.tokens.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV4AliasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.aliases.$get>>,
) {
  return ['v4', '/v4/aliases', toValue(args)] as const
}

export function getV4AliasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.aliases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.aliases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Aliases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.aliases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>
          >,
          ReturnType<typeof getV4AliasesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4AliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4AliasesIdOrAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>,
) {
  return ['v4', '/v4/aliases/:idOrAlias', toValue(args)] as const
}

export function getV4AliasesIdOrAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4AliasesIdOrAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.aliases[':idOrAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4AliasesIdOrAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4AliasesIdOrAliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AliasesIdOrAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4AliasesIdOrAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.aliases[':idOrAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.domains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.buy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v4.domains.buy.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.price.$get>>,
) {
  return ['v4', '/v4/domains/price', toValue(args)] as const
}

export function getV4DomainsPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.price.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4DomainsPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.domains.price.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4DomainsPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.price.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>
            >
          >,
          ReturnType<typeof getV4DomainsPriceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.price.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4DomainsPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.domains.price.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4DomainsStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.status.$get>>,
) {
  return ['v4', '/v4/domains/status', toValue(args)] as const
}

export function getV4DomainsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4DomainsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.domains.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4DomainsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>
            >
          >,
          ReturnType<typeof getV4DomainsStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4DomainsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.domains.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4DomainsDomainRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>
  >,
) {
  return ['v4', '/v4/domains/:domain/records', toValue(args)] as const
}

export function getV4DomainsDomainRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4DomainsDomainRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.domains[':domain'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.domains)[':domain']['records']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.domains)[':domain']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4DomainsDomainRecordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4DomainsDomainRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.domains[':domain'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV5DomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v5.domains.$get>>,
) {
  return ['v5', '/v5/domains', toValue(args)] as const
}

export function getV5DomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v5.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV5DomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v5.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV5Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v5.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>
          >,
          ReturnType<typeof getV5DomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV5DomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV5DomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v5.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV5DomainsDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.domains)[':domain']['$get']>>,
) {
  return ['v5', '/v5/domains/:domain', toValue(args)] as const
}

export function getV5DomainsDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.domains)[':domain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV5DomainsDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v5.domains[':domain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV5DomainsDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.domains)[':domain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV5DomainsDomainQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV5DomainsDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV5DomainsDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v5.domains[':domain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV5UserTokensQueryKey() {
  return ['v5', '/v5/user/tokens'] as const
}

export function getV5UserTokensQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV5UserTokensQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v5.user.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV5UserTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
          >,
          ReturnType<typeof getV5UserTokensQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.user.tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV5UserTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV5UserTokensQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v5.user.tokens.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV5UserTokensTokenIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>,
) {
  return ['v5', '/v5/user/tokens/:tokenId', toValue(args)] as const
}

export function getV5UserTokensTokenIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV5UserTokensTokenIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v5.user.tokens[':tokenId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV5UserTokensTokenId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV5UserTokensTokenIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV5UserTokensTokenIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v5.user.tokens[':tokenId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV6DeploymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v6.deployments.$get>>,
) {
  return ['v6', '/v6/deployments', toValue(args)] as const
}

export function getV6DeploymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v6.deployments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV6DeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v6.deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV6Deployments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v6.deployments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
          >,
          ReturnType<typeof getV6DeploymentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.deployments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV6DeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV6DeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v6.deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV6DeploymentsIdFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>>,
) {
  return ['v6', '/v6/deployments/:id/files', toValue(args)] as const
}

export function getV6DeploymentsIdFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV6DeploymentsIdFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v6.deployments[':id'].files.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV6DeploymentsIdFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV6DeploymentsIdFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v6.deployments[':id'].files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV6DeploymentsIdFilesFileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>
  >,
) {
  return ['v6', '/v6/deployments/:id/files/:fileId', toValue(args)] as const
}

export function getV6DeploymentsIdFilesFileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV6DeploymentsIdFilesFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v6.deployments[':id'].files[':fileId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v6.deployments)[':id']['files'][':fileId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV6DeploymentsIdFilesFileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV6DeploymentsIdFilesFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v6.deployments[':id'].files[':fileId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>>,
) {
  return ['v6', '/v6/domains/:domain/config', toValue(args)] as const
}

export function getV6DomainsDomainConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV6DomainsDomainConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v6.domains[':domain'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV6DomainsDomainConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV6DomainsDomainConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v6.domains[':domain'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.v7.certs.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.certs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v7.certs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v7.certs)[':id']['$get']>>,
) {
  return ['v7', '/v7/certs/:id', toValue(args)] as const
}

export function getV7CertsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v7.certs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV7CertsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v7.certs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV7CertsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v7.certs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV7CertsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v7.certs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV7CertsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV7CertsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v7.certs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v8.artifacts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.v8.artifacts.status.$get>>,
) {
  return ['v8', '/v8/artifacts/status', toValue(args)] as const
}

export function getV8ArtifactsStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v8.artifacts.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV8ArtifactsStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v8.artifacts.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV8ArtifactsStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v8.artifacts.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
            >
          >,
          ReturnType<typeof getV8ArtifactsStatusQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV8ArtifactsStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV8ArtifactsStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v8.artifacts.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV8ArtifactsHashQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v8', '/v8/artifacts/:hash', keyArgs] as const
}

export function getV8ArtifactsHashQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV8ArtifactsHashQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v8.artifacts[':hash'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV8ArtifactsHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV8ArtifactsHashQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV8ArtifactsHashQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV8ArtifactsHashQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v8.artifacts[':hash'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getV9ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v9.projects.$get>>,
) {
  return ['v9', '/v9/projects', toValue(args)] as const
}

export function getV9ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v9.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV9ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v9.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV9Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v9.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>
          >,
          ReturnType<typeof getV9ProjectsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV9ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v9.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v9.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v9.projects.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>>,
) {
  return ['v9', '/v9/projects/:idOrName', toValue(args)] as const
}

export function getV9ProjectsIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV9ProjectsIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v9.projects[':idOrName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV9ProjectsIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV9ProjectsIdOrNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV9ProjectsIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV9ProjectsIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v9.projects[':idOrName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>
  >,
) {
  return ['v9', '/v9/projects/:idOrName/domains', toValue(args)] as const
}

export function getV9ProjectsIdOrNameDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV9ProjectsIdOrNameDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV9ProjectsIdOrNameDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV9ProjectsIdOrNameDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v9.projects[':idOrName'].domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
  >,
) {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', toValue(args)] as const
}

export function getV9ProjectsIdOrNameDomainsDomainQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV9ProjectsIdOrNameDomainsDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v9.projects[':idOrName'].domains[':domain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV9ProjectsIdOrNameDomainsDomainQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV9ProjectsIdOrNameDomainsDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>,
) {
  return ['v9', '/v9/projects/:idOrName/env', toValue(args)] as const
}

export function getV9ProjectsIdOrNameEnvQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV9ProjectsIdOrNameEnvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v9.projects[':idOrName'].env.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV9ProjectsIdOrNameEnvQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV9ProjectsIdOrNameEnvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v9.projects[':idOrName'].env.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
