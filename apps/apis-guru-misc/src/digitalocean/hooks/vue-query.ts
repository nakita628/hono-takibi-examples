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

export function getV2Key() {
  return ['v2'] as const
}

export function getV21ClicksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['1-clicks']['$get']>>,
) {
  return ['v2', '/v2/1-clicks', toValue(args)] as const
}

export function getV21ClicksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['1-clicks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV21ClicksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['1-clicks'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV21Clicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['1-clicks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
            >
          >,
          ReturnType<typeof getV21ClicksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV21ClicksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV21ClicksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['1-clicks'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV21ClicksKubernetesMutationKey() {
  return ['v2', '/v2/1-clicks/kubernetes', 'POST'] as const
}

export function getPostV21ClicksKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV21ClicksKubernetesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
    ) {
      return parseResponse(client.v2['1-clicks'].kubernetes.$post(args, options))
    },
  })
}

export function usePostV21ClicksKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
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
  const mutationDefaults = getPostV21ClicksKubernetesMutationOptions<TError, TOnMutateResult>(
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

export function getV2AccountQueryKey() {
  return ['v2', '/v2/account'] as const
}

export function getV2AccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2AccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
          >,
          ReturnType<typeof getV2AccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2AccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AccountKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.keys.$get>>,
) {
  return ['v2', '/v2/account/keys', toValue(args)] as const
}

export function getV2AccountKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>
            >
          >,
          ReturnType<typeof getV2AccountKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AccountKeysMutationKey() {
  return ['v2', '/v2/account/keys', 'POST'] as const
}

export function getPostV2AccountKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.account.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.account.keys.$post>) {
      return parseResponse(client.v2.account.keys.$post(args, options))
    },
  })
}

export function usePostV2AccountKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.account.keys.$post>,
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
  const mutationDefaults = getPostV2AccountKeysMutationOptions<TError, TOnMutateResult>(
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

export function getV2AccountKeysSshKeyIdentifierQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>
  >,
) {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', toValue(args)] as const
}

export function getV2AccountKeysSshKeyIdentifierQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountKeysSshKeyIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.keys[':ssh_key_identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountKeysSshKeyIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AccountKeysSshKeyIdentifierQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountKeysSshKeyIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountKeysSshKeyIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.keys[':ssh_key_identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2AccountKeysSshKeyIdentifierMutationKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'PUT'] as const
}

export function getPutV2AccountKeysSshKeyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AccountKeysSshKeyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
    ) {
      return parseResponse(client.v2.account.keys[':ssh_key_identifier'].$put(args, options))
    },
  })
}

export function usePutV2AccountKeysSshKeyIdentifier<
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
                Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
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
  const mutationDefaults = getPutV2AccountKeysSshKeyIdentifierMutationOptions<
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

export function getDeleteV2AccountKeysSshKeyIdentifierMutationKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'DELETE'] as const
}

export function getDeleteV2AccountKeysSshKeyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AccountKeysSshKeyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
    ) {
      return parseResponse(client.v2.account.keys[':ssh_key_identifier'].$delete(args, options))
    },
  })
}

export function useDeleteV2AccountKeysSshKeyIdentifier<
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
                    ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
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
  const mutationDefaults = getDeleteV2AccountKeysSshKeyIdentifierMutationOptions<
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

export function getV2ActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actions.$get>>,
) {
  return ['v2', '/v2/actions', toValue(args)] as const
}

export function getV2ActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Actions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
          >,
          ReturnType<typeof getV2ActionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ActionsActionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>>,
) {
  return ['v2', '/v2/actions/:action_id', toValue(args)] as const
}

export function getV2ActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ActionsActionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.apps.$get>>,
) {
  return ['v2', '/v2/apps', toValue(args)] as const
}

export function getV2AppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.apps.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.apps.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>
          >,
          ReturnType<typeof getV2AppsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AppsMutationKey() {
  return ['v2', '/v2/apps', 'POST'] as const
}

export function getPostV2AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.$post>) {
      return parseResponse(client.v2.apps.$post(args, options))
    },
  })
}

export function usePostV2Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.apps.$post>,
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
  const mutationDefaults = getPostV2AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2AppsMetricsBandwidthDailyMutationKey() {
  return ['v2', '/v2/apps/metrics/bandwidth_daily', 'POST'] as const
}

export function getPostV2AppsMetricsBandwidthDailyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.apps.metrics.bandwidth_daily.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsMetricsBandwidthDailyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>) {
      return parseResponse(client.v2.apps.metrics.bandwidth_daily.$post(args, options))
    },
  })
}

export function usePostV2AppsMetricsBandwidthDaily<
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
                Awaited<ReturnType<typeof client.v2.apps.metrics.bandwidth_daily.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
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
  const mutationDefaults = getPostV2AppsMetricsBandwidthDailyMutationOptions<
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

export function getPostV2AppsProposeMutationKey() {
  return ['v2', '/v2/apps/propose', 'POST'] as const
}

export function getPostV2AppsProposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.propose.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.apps.propose.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsProposeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.propose.$post>) {
      return parseResponse(client.v2.apps.propose.$post(args, options))
    },
  })
}

export function usePostV2AppsPropose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.propose.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.apps.propose.$post>,
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
  const mutationDefaults = getPostV2AppsProposeMutationOptions<TError, TOnMutateResult>(
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

export function getV2AppsRegionsQueryKey() {
  return ['v2', '/v2/apps/regions'] as const
}

export function getV2AppsRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2AppsRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AppsRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>
            >
          >,
          ReturnType<typeof getV2AppsRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2AppsRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsTiersQueryKey() {
  return ['v2', '/v2/apps/tiers'] as const
}

export function getV2AppsTiersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2AppsTiersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.tiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AppsTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
          >,
          ReturnType<typeof getV2AppsTiersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2AppsTiersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.tiers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsTiersInstanceSizesQueryKey() {
  return ['v2', '/v2/apps/tiers/instance_sizes'] as const
}

export function getV2AppsTiersInstanceSizesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2AppsTiersInstanceSizesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.tiers.instance_sizes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsTiersInstanceSizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>
              >
            >
          >,
          ReturnType<typeof getV2AppsTiersInstanceSizesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersInstanceSizesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2AppsTiersInstanceSizesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.tiers.instance_sizes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsTiersInstanceSizesSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>
  >,
) {
  return ['v2', '/v2/apps/tiers/instance_sizes/:slug', toValue(args)] as const
}

export function getV2AppsTiersInstanceSizesSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsTiersInstanceSizesSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.tiers.instance_sizes[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsTiersInstanceSizesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AppsTiersInstanceSizesSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersInstanceSizesSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsTiersInstanceSizesSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.tiers.instance_sizes[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsTiersSlugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>>,
) {
  return ['v2', '/v2/apps/tiers/:slug', toValue(args)] as const
}

export function getV2AppsTiersSlugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsTiersSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps.tiers[':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsTiersSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AppsTiersSlugQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsTiersSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps.tiers[':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsAppIdAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>,
) {
  return ['v2', '/v2/apps/:app_id/alerts', toValue(args)] as const
}

export function getV2AppsAppIdAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AppsAppIdAlertsAlertIdDestinationsMutationKey() {
  return ['v2', '/v2/apps/:app_id/alerts/:alert_id/destinations', 'POST'] as const
}

export function getPostV2AppsAppIdAlertsAlertIdDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdAlertsAlertIdDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apps[':app_id'].alerts[':alert_id'].destinations.$post(args, options),
      )
    },
  })
}

export function usePostV2AppsAppIdAlertsAlertIdDestinations<
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
                    (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
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
  const mutationDefaults = getPostV2AppsAppIdAlertsAlertIdDestinationsMutationOptions<
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

export function getV2AppsAppIdComponentsComponentNameLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
    >
  >,
) {
  return ['v2', '/v2/apps/:app_id/components/:component_name/logs', toValue(args)] as const
}

export function getV2AppsAppIdComponentsComponentNameLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdComponentsComponentNameLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].components[':component_name'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdComponentsComponentNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdComponentsComponentNameLogsQueryKey>
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
              (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdComponentsComponentNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdComponentsComponentNameLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].components[':component_name'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsAppIdDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments', toValue(args)] as const
}

export function getV2AppsAppIdDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AppsAppIdDeploymentsMutationKey() {
  return ['v2', '/v2/apps/:app_id/deployments', 'POST'] as const
}

export function getPostV2AppsAppIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].deployments.$post(args, options))
    },
  })
}

export function usePostV2AppsAppIdDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
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
  const mutationDefaults = getPostV2AppsAppIdDeploymentsMutationOptions<TError, TOnMutateResult>(
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

export function getV2AppsAppIdDeploymentsDeploymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id', toValue(args)] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdDeploymentsDeploymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdQueryKey>
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
            ReturnType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdDeploymentsDeploymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].deployments[':deployment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationKey() {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/cancel', 'POST'] as const
}

export function getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostV2AppsAppIdDeploymentsDeploymentIdCancel<
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
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
  const mutationDefaults = getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationOptions<
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

export function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/apps/:app_id/deployments/:deployment_id/components/:component_name/logs',
    toValue(args),
  ] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].components[
          ':component_name'
        ].logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey
          >
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
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].deployments[':deployment_id'].components[
            ':component_name'
          ].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
    >
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/logs', toValue(args)] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdLogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdDeploymentsDeploymentIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
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
                    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey>
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
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsAppIdLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>,
) {
  return ['v2', '/v2/apps/:app_id/logs', toValue(args)] as const
}

export function getV2AppsAppIdLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdLogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AppsAppIdMetricsBandwidthDailyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
  >,
) {
  return ['v2', '/v2/apps/:app_id/metrics/bandwidth_daily', toValue(args)] as const
}

export function getV2AppsAppIdMetricsBandwidthDailyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsAppIdMetricsBandwidthDailyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsAppIdMetricsBandwidthDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
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
                    (typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']
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
                    (typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AppsAppIdMetricsBandwidthDailyQueryKey>
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
            ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdMetricsBandwidthDailyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsAppIdMetricsBandwidthDailyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AppsAppIdRollbackMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.$post(args, options))
    },
  })
}

export function usePostV2AppsAppIdRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
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
  const mutationDefaults = getPostV2AppsAppIdRollbackMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2AppsAppIdRollbackCommitMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/commit', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.commit.$post(args, options))
    },
  })
}

export function usePostV2AppsAppIdRollbackCommit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
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
  const mutationDefaults = getPostV2AppsAppIdRollbackCommitMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2AppsAppIdRollbackRevertMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/revert', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.revert.$post(args, options))
    },
  })
}

export function usePostV2AppsAppIdRollbackRevert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
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
  const mutationDefaults = getPostV2AppsAppIdRollbackRevertMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2AppsAppIdRollbackValidateMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/validate', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.validate.$post(args, options))
    },
  })
}

export function usePostV2AppsAppIdRollbackValidate<
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
                  ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
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
  const mutationDefaults = getPostV2AppsAppIdRollbackValidateMutationOptions<
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

export function getV2AppsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':id']['$get']>>,
) {
  return ['v2', '/v2/apps/:id', toValue(args)] as const
}

export function getV2AppsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AppsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.apps[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AppsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.apps)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2AppsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AppsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.apps[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2AppsIdMutationKey() {
  return ['v2', '/v2/apps/:id', 'PUT'] as const
}

export function getPutV2AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apps)[':id']['$put']>) {
      return parseResponse(client.v2.apps[':id'].$put(args, options))
    },
  })
}

export function usePutV2AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
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
  const mutationDefaults = getPutV2AppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2AppsIdMutationKey() {
  return ['v2', '/v2/apps/:id', 'DELETE'] as const
}

export function getDeleteV2AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apps)[':id']['$delete']>) {
      return parseResponse(client.v2.apps[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2AppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CdnEndpointsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cdn.endpoints.$get>>,
) {
  return ['v2', '/v2/cdn/endpoints', toValue(args)] as const
}

export function getV2CdnEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cdn.endpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CdnEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cdn.endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CdnEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cdn.endpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>
            >
          >,
          ReturnType<typeof getV2CdnEndpointsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CdnEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CdnEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cdn.endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CdnEndpointsMutationKey() {
  return ['v2', '/v2/cdn/endpoints', 'POST'] as const
}

export function getPostV2CdnEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.cdn.endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CdnEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.cdn.endpoints.$post>) {
      return parseResponse(client.v2.cdn.endpoints.$post(args, options))
    },
  })
}

export function usePostV2CdnEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.cdn.endpoints.$post>,
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
  const mutationDefaults = getPostV2CdnEndpointsMutationOptions<TError, TOnMutateResult>(
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

export function getV2CdnEndpointsCdnIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>,
) {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', toValue(args)] as const
}

export function getV2CdnEndpointsCdnIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CdnEndpointsCdnIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cdn.endpoints[':cdn_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CdnEndpointsCdnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CdnEndpointsCdnIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CdnEndpointsCdnIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CdnEndpointsCdnIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cdn.endpoints[':cdn_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2CdnEndpointsCdnIdMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'PUT'] as const
}

export function getPutV2CdnEndpointsCdnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CdnEndpointsCdnIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].$put(args, options))
    },
  })
}

export function usePutV2CdnEndpointsCdnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
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
  const mutationDefaults = getPutV2CdnEndpointsCdnIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2CdnEndpointsCdnIdMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'DELETE'] as const
}

export function getDeleteV2CdnEndpointsCdnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CdnEndpointsCdnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
    ) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CdnEndpointsCdnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2CdnEndpointsCdnIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2CdnEndpointsCdnIdCacheMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id/cache', 'DELETE'] as const
}

export function getDeleteV2CdnEndpointsCdnIdCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CdnEndpointsCdnIdCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
    ) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].cache.$delete(args, options))
    },
  })
}

export function useDeleteV2CdnEndpointsCdnIdCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
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
  const mutationDefaults = getDeleteV2CdnEndpointsCdnIdCacheMutationOptions<
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

export function getV2CertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.certificates.$get>>,
) {
  return ['v2', '/v2/certificates', toValue(args)] as const
}

export function getV2CertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.certificates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>
            >
          >,
          ReturnType<typeof getV2CertificatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CertificatesMutationKey() {
  return ['v2', '/v2/certificates', 'POST'] as const
}

export function getPostV2CertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.certificates.$post>) {
      return parseResponse(client.v2.certificates.$post(args, options))
    },
  })
}

export function usePostV2Certificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.certificates.$post>,
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
  const mutationDefaults = getPostV2CertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getV2CertificatesCertificateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>
  >,
) {
  return ['v2', '/v2/certificates/:certificate_id', toValue(args)] as const
}

export function getV2CertificatesCertificateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CertificatesCertificateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.certificates[':certificate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CertificatesCertificateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesCertificateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CertificatesCertificateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.certificates[':certificate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2CertificatesCertificateIdMutationKey() {
  return ['v2', '/v2/certificates/:certificate_id', 'DELETE'] as const
}

export function getDeleteV2CertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
    ) {
      return parseResponse(client.v2.certificates[':certificate_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CertificatesCertificateId<
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
                  Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2CertificatesCertificateIdMutationOptions<
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

export function getV2CustomersMyBalanceQueryKey() {
  return ['v2', '/v2/customers/my/balance'] as const
}

export function getV2CustomersMyBalanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2CustomersMyBalanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.balance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
            >
          >,
          ReturnType<typeof getV2CustomersMyBalanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2CustomersMyBalanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.balance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyBillingHistoryQueryKey() {
  return ['v2', '/v2/customers/my/billing_history'] as const
}

export function getV2CustomersMyBillingHistoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2CustomersMyBillingHistoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.billing_history.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyBillingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
              >
            >
          >,
          ReturnType<typeof getV2CustomersMyBillingHistoryQueryKey>
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
          Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyBillingHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2CustomersMyBillingHistoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.billing_history.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.my.invoices.$get>>,
) {
  return ['v2', '/v2/customers/my/invoices', toValue(args)] as const
}

export function getV2CustomersMyInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.my.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersMyInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customers.my.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
            >
          >,
          ReturnType<typeof getV2CustomersMyInvoicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersMyInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyInvoicesInvoiceUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid', toValue(args)] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyInvoicesInvoiceUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>
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
                  ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/csv', toValue(args)] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyInvoicesInvoiceUuidCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey>
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
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/pdf', toValue(args)] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidPdfQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyInvoicesInvoiceUuidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey>
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
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/summary', toValue(args)] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomersMyInvoicesInvoiceUuidSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
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
                    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey>
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
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DatabasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.databases.$get>>,
) {
  return ['v2', '/v2/databases', toValue(args)] as const
}

export function getV2DatabasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.databases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Databases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.databases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
          >,
          ReturnType<typeof getV2DatabasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatabasesMutationKey() {
  return ['v2', '/v2/databases', 'POST'] as const
}

export function getPostV2DatabasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.databases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.databases.$post>) {
      return parseResponse(client.v2.databases.$post(args, options))
    },
  })
}

export function usePostV2Databases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.databases.$post>,
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
  const mutationDefaults = getPostV2DatabasesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2DatabasesOptionsQueryKey() {
  return ['v2', '/v2/databases/options'] as const
}

export function getV2DatabasesOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2DatabasesOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>
            >
          >,
          ReturnType<typeof getV2DatabasesOptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2DatabasesOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases.options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DatabasesDatabaseClusterUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DatabasesDatabaseClusterUuidMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuid<
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
                    ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
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
  const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/backups', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidBackupsQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DatabasesDatabaseClusterUuidCaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/ca', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidCaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidCaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].ca.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
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
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidCaQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidCaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidCaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].ca.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DatabasesDatabaseClusterUuidConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidConfigQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2DatabasesDatabaseClusterUuidConfigMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', 'PATCH'] as const
}

export function getPatchV2DatabasesDatabaseClusterUuidConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DatabasesDatabaseClusterUuidConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].config.$patch(args, options),
      )
    },
  })
}

export function usePatchV2DatabasesDatabaseClusterUuidConfig<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
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
  const mutationDefaults = getPatchV2DatabasesDatabaseClusterUuidConfigMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidDbsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidDbsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidDbsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidDbs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
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
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidDbsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].dbs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatabasesDatabaseClusterUuidDbsMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidDbsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidDbsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$post(args, options))
    },
  })
}

export function usePostV2DatabasesDatabaseClusterUuidDbs<
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
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
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
  const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidDbsMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
    >
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidDbsDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseName<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
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
  const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
    >
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidEvictionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].eviction_policy.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidEvictionPolicy<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidFirewallQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidFirewallQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidFirewallQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].firewall.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidFirewall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidFirewallQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidFirewallQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidFirewallQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].firewall.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DatabasesDatabaseClusterUuidFirewallMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].firewall.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidFirewall<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidFirewallMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/maintenance', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].maintenance.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidMaintenance<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidMigrateMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/migrate', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].migrate.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidMigrate<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidMigrateMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
    >
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidOnlineMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid']['online-migration'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'].$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidOnlineMigration<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationOptions<
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

export function getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/online-migration/:migration_id',
    'DELETE',
  ] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'][':migration_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationId<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
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
  const mutationDefaults =
    getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidPoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidPoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatabasesDatabaseClusterUuidPoolsMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].pools.$post(args, options))
    },
  })
}

export function usePostV2DatabasesDatabaseClusterUuidPools<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']
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
  const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidPoolsMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
    >
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidPoolsPoolName<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
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

export function getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuidPoolsPoolName<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
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
  const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidReplicasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidReplicasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidReplicasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidReplicasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatabasesDatabaseClusterUuidReplicasMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidReplicasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidReplicasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas.$post(args, options),
      )
    },
  })
}

export function usePostV2DatabasesDatabaseClusterUuidReplicas<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
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
  const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidReplicasMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/replicas/:replica_name',
    toValue(args),
  ] as const
}

export function getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidReplicasReplicaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas/:replica_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaName<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
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
  const mutationDefaults =
    getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/replicas/:replica_name/promote',
    'PUT',
  ] as const
}

export function getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].promote.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromote<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
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
  const mutationDefaults =
    getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidResizeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/resize', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].resize.$put(args, options))
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidResize<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidResizeMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidSqlModeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidSqlModeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidSqlModeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].sql_mode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidSqlMode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidSqlModeQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidSqlModeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidSqlModeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].sql_mode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DatabasesDatabaseClusterUuidSqlModeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidSqlModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidSqlModeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].sql_mode.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidSqlMode<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidSqlModeMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidUpgradeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/upgrade', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].upgrade.$put(args, options),
      )
    },
  })
}

export function usePutV2DatabasesDatabaseClusterUuidUpgrade<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
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
  const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidUpgradeMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersQueryKey>
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
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DatabasesDatabaseClusterUuidUsersMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].users.$post(args, options))
    },
  })
}

export function usePostV2DatabasesDatabaseClusterUuidUsers<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']
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
  const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidUsersMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
    >
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', toValue(args)] as const
}

export function getV2DatabasesDatabaseClusterUuidUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DatabasesDatabaseClusterUuidUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey>
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
              (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.databases[':database_cluster_uuid'].users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DatabasesDatabaseClusterUuidUsersUsername<
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
                    ReturnType<
                      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
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
  const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationOptions<
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

export function getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username/reset_auth', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].reset_auth.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuth<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
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
  const mutationDefaults =
    getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationOptions<
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

export function getV2DomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.$get>>,
) {
  return ['v2', '/v2/domains', toValue(args)] as const
}

export function getV2DomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
          >,
          ReturnType<typeof getV2DomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DomainsMutationKey() {
  return ['v2', '/v2/domains', 'POST'] as const
}

export function getPostV2DomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.domains.$post>) {
      return parseResponse(client.v2.domains.$post(args, options))
    },
  })
}

export function usePostV2Domains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.domains.$post>,
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
  const mutationDefaults = getPostV2DomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2DomainsDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>>,
) {
  return ['v2', '/v2/domains/:domain_name', toValue(args)] as const
}

export function getV2DomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains[':domain_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DomainsDomainNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains[':domain_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DomainsDomainNameMutationKey() {
  return ['v2', '/v2/domains/:domain_name', 'DELETE'] as const
}

export function getDeleteV2DomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
    ) {
      return parseResponse(client.v2.domains[':domain_name'].$delete(args, options))
    },
  })
}

export function useDeleteV2DomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
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
  const mutationDefaults = getDeleteV2DomainsDomainNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2DomainsDomainNameRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>
  >,
) {
  return ['v2', '/v2/domains/:domain_name/records', toValue(args)] as const
}

export function getV2DomainsDomainNameRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsDomainNameRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains[':domain_name'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DomainsDomainNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DomainsDomainNameRecordsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsDomainNameRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains[':domain_name'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DomainsDomainNameRecordsMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records', 'POST'] as const
}

export function getPostV2DomainsDomainNameRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainsDomainNameRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
    ) {
      return parseResponse(client.v2.domains[':domain_name'].records.$post(args, options))
    },
  })
}

export function usePostV2DomainsDomainNameRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
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
  const mutationDefaults = getPostV2DomainsDomainNameRecordsMutationOptions<
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

export function getV2DomainsDomainNameRecordsDomainRecordIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', toValue(args)] as const
}

export function getV2DomainsDomainNameRecordsDomainRecordIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DomainsDomainNameRecordsDomainRecordIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DomainsDomainNameRecordsDomainRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
                    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
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
                    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DomainsDomainNameRecordsDomainRecordIdQueryKey>
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
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameRecordsDomainRecordIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DomainsDomainNameRecordsDomainRecordIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.domains[':domain_name'].records[':domain_record_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PUT'] as const
}

export function getPutV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$put(args, options),
      )
    },
  })
}

export function usePutV2DomainsDomainNameRecordsDomainRecordId<
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
                    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
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
  const mutationDefaults = getPutV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'DELETE'] as const
}

export function getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2DomainsDomainNameRecordsDomainRecordId<
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
                    ReturnType<
                      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
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
  const mutationDefaults = getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PATCH'] as const
}

export function getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2DomainsDomainNameRecordsDomainRecordId<
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
                    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
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
  const mutationDefaults = getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getV2DropletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.droplets.$get>>,
) {
  return ['v2', '/v2/droplets', toValue(args)] as const
}

export function getV2DropletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.droplets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Droplets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.droplets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
          >,
          ReturnType<typeof getV2DropletsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DropletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DropletsMutationKey() {
  return ['v2', '/v2/droplets', 'POST'] as const
}

export function getPostV2DropletsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.droplets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.$post>) {
      return parseResponse(client.v2.droplets.$post(args, options))
    },
  })
}

export function usePostV2Droplets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.droplets.$post>,
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
  const mutationDefaults = getPostV2DropletsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2DropletsMutationKey() {
  return ['v2', '/v2/droplets', 'DELETE'] as const
}

export function getDeleteV2DropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.droplets.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.$delete>) {
      return parseResponse(client.v2.droplets.$delete(args, options))
    },
  })
}

export function useDeleteV2Droplets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.droplets.$delete>,
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
  const mutationDefaults = getDeleteV2DropletsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2DropletsActionsMutationKey() {
  return ['v2', '/v2/droplets/actions', 'POST'] as const
}

export function getPostV2DropletsActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.droplets.actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.actions.$post>) {
      return parseResponse(client.v2.droplets.actions.$post(args, options))
    },
  })
}

export function usePostV2DropletsActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.actions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.droplets.actions.$post>,
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
  const mutationDefaults = getPostV2DropletsActionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2DropletsDropletIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>>,
) {
  return ['v2', '/v2/droplets/:droplet_id', toValue(args)] as const
}

export function getV2DropletsDropletIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DropletsDropletIdMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id', 'DELETE'] as const
}

export function getDeleteV2DropletsDropletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
    ) {
      return parseResponse(client.v2.droplets[':droplet_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2DropletsDropletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2DropletsDropletIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2DropletsDropletIdActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions', toValue(args)] as const
}

export function getV2DropletsDropletIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2DropletsDropletIdActionsMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id/actions', 'POST'] as const
}

export function getPostV2DropletsDropletIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsDropletIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.droplets[':droplet_id'].actions.$post(args, options))
    },
  })
}

export function usePostV2DropletsDropletIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
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
  const mutationDefaults = getPostV2DropletsDropletIdActionsMutationOptions<
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

export function getV2DropletsDropletIdActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions/:action_id', toValue(args)] as const
}

export function getV2DropletsDropletIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
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
                    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
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
                    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdActionsActionIdQueryKey>
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
            ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdBackupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/backups', toValue(args)] as const
}

export function getV2DropletsDropletIdBackupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdBackupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].backups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdBackupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdBackupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdBackupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].backups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources',
    toValue(args),
  ] as const
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdDestroyWithAssociatedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey>
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
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.dangerous.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerous<
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
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
  const mutationDefaults =
    getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationOptions<
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

export function getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources/retry', 'POST'] as const
}

export function getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.retry.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2DropletsDropletIdDestroyWithAssociatedResourcesRetry<
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
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
  const mutationDefaults =
    getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationOptions<
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

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.selective.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelective<
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
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
  const mutationDefaults =
    getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
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

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/status',
    toValue(args),
  ] as const
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2DropletsDropletIdDestroyWithAssociatedResourcesStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
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
                    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey>
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
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdFirewallsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/firewalls', toValue(args)] as const
}

export function getV2DropletsDropletIdFirewallsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdFirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].firewalls.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdFirewallsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdFirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdKernelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/kernels', toValue(args)] as const
}

export function getV2DropletsDropletIdKernelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdKernelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].kernels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdKernels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdKernelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdKernelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdKernelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].kernels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdNeighborsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/neighbors', toValue(args)] as const
}

export function getV2DropletsDropletIdNeighborsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdNeighborsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].neighbors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdNeighbors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdNeighborsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdNeighborsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdNeighborsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].neighbors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2DropletsDropletIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/snapshots', toValue(args)] as const
}

export function getV2DropletsDropletIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2DropletsDropletIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2DropletsDropletIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2DropletsDropletIdSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2DropletsDropletIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.droplets[':droplet_id'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FirewallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firewalls.$get>>,
) {
  return ['v2', '/v2/firewalls', toValue(args)] as const
}

export function getV2FirewallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firewalls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.firewalls.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Firewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firewalls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
          >,
          ReturnType<typeof getV2FirewallsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2FirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FirewallsMutationKey() {
  return ['v2', '/v2/firewalls', 'POST'] as const
}

export function getPostV2FirewallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.firewalls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.firewalls.$post>) {
      return parseResponse(client.v2.firewalls.$post(args, options))
    },
  })
}

export function usePostV2Firewalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.firewalls.$post>,
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
  const mutationDefaults = getPostV2FirewallsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2FirewallsFirewallIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>,
) {
  return ['v2', '/v2/firewalls/:firewall_id', toValue(args)] as const
}

export function getV2FirewallsFirewallIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FirewallsFirewallIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.firewalls[':firewall_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FirewallsFirewallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FirewallsFirewallIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FirewallsFirewallIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FirewallsFirewallIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.firewalls[':firewall_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2FirewallsFirewallIdMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'PUT'] as const
}

export function getPutV2FirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2FirewallsFirewallIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>) {
      return parseResponse(client.v2.firewalls[':firewall_id'].$put(args, options))
    },
  })
}

export function usePutV2FirewallsFirewallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
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
  const mutationDefaults = getPutV2FirewallsFirewallIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2FirewallsFirewallIdMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2FirewallsFirewallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2FirewallsFirewallIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2FirewallsFirewallIdDropletsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].droplets.$post(args, options))
    },
  })
}

export function usePostV2FirewallsFirewallIdDroplets<
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
                    ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
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
  const mutationDefaults = getPostV2FirewallsFirewallIdDropletsMutationOptions<
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

export function getDeleteV2FirewallsFirewallIdDropletsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].droplets.$delete(args, options))
    },
  })
}

export function useDeleteV2FirewallsFirewallIdDroplets<
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
                    ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
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
  const mutationDefaults = getDeleteV2FirewallsFirewallIdDropletsMutationOptions<
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

export function getPostV2FirewallsFirewallIdRulesMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].rules.$post(args, options))
    },
  })
}

export function usePostV2FirewallsFirewallIdRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
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
  const mutationDefaults = getPostV2FirewallsFirewallIdRulesMutationOptions<
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

export function getDeleteV2FirewallsFirewallIdRulesMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].rules.$delete(args, options))
    },
  })
}

export function useDeleteV2FirewallsFirewallIdRules<
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
                    ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
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
  const mutationDefaults = getDeleteV2FirewallsFirewallIdRulesMutationOptions<
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

export function getPostV2FirewallsFirewallIdTagsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].tags.$post(args, options))
    },
  })
}

export function usePostV2FirewallsFirewallIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
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
  const mutationDefaults = getPostV2FirewallsFirewallIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2FirewallsFirewallIdTagsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].tags.$delete(args, options))
    },
  })
}

export function useDeleteV2FirewallsFirewallIdTags<
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
                    ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
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
  const mutationDefaults = getDeleteV2FirewallsFirewallIdTagsMutationOptions<
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

export function getV2FloatingIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.floating_ips.$get>>,
) {
  return ['v2', '/v2/floating_ips', toValue(args)] as const
}

export function getV2FloatingIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.floating_ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FloatingIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.floating_ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FloatingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.floating_ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>
            >
          >,
          ReturnType<typeof getV2FloatingIpsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FloatingIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.floating_ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FloatingIpsMutationKey() {
  return ['v2', '/v2/floating_ips', 'POST'] as const
}

export function getPostV2FloatingIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.floating_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FloatingIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.floating_ips.$post>) {
      return parseResponse(client.v2.floating_ips.$post(args, options))
    },
  })
}

export function usePostV2FloatingIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.floating_ips.$post>,
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
  const mutationDefaults = getPostV2FloatingIpsMutationOptions<TError, TOnMutateResult>(
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

export function getV2FloatingIpsFloatingIpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>,
) {
  return ['v2', '/v2/floating_ips/:floating_ip', toValue(args)] as const
}

export function getV2FloatingIpsFloatingIpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FloatingIpsFloatingIpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FloatingIpsFloatingIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FloatingIpsFloatingIpQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FloatingIpsFloatingIpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.floating_ips[':floating_ip'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2FloatingIpsFloatingIpMutationKey() {
  return ['v2', '/v2/floating_ips/:floating_ip', 'DELETE'] as const
}

export function getDeleteV2FloatingIpsFloatingIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FloatingIpsFloatingIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
    ) {
      return parseResponse(client.v2.floating_ips[':floating_ip'].$delete(args, options))
    },
  })
}

export function useDeleteV2FloatingIpsFloatingIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
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
  const mutationDefaults = getDeleteV2FloatingIpsFloatingIpMutationOptions<TError, TOnMutateResult>(
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

export function getV2FloatingIpsFloatingIpActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
  >,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', toValue(args)] as const
}

export function getV2FloatingIpsFloatingIpActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FloatingIpsFloatingIpActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FloatingIpsFloatingIpActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
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
                  ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2FloatingIpsFloatingIpActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FloatingIpsFloatingIpActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.floating_ips[':floating_ip'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FloatingIpsFloatingIpActionsMutationKey() {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', 'POST'] as const
}

export function getPostV2FloatingIpsFloatingIpActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FloatingIpsFloatingIpActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.floating_ips[':floating_ip'].actions.$post(args, options))
    },
  })
}

export function usePostV2FloatingIpsFloatingIpActions<
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
                  ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
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
  const mutationDefaults = getPostV2FloatingIpsFloatingIpActionsMutationOptions<
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

export function getV2FloatingIpsFloatingIpActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions/:action_id', toValue(args)] as const
}

export function getV2FloatingIpsFloatingIpActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FloatingIpsFloatingIpActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FloatingIpsFloatingIpActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
                    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
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
                    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2FloatingIpsFloatingIpActionsActionIdQueryKey>
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
              (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FloatingIpsFloatingIpActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FunctionsNamespacesQueryKey() {
  return ['v2', '/v2/functions/namespaces'] as const
}

export function getV2FunctionsNamespacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2FunctionsNamespacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.functions.namespaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FunctionsNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
            >
          >,
          ReturnType<typeof getV2FunctionsNamespacesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2FunctionsNamespacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.functions.namespaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FunctionsNamespacesMutationKey() {
  return ['v2', '/v2/functions/namespaces', 'POST'] as const
}

export function getPostV2FunctionsNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.functions.namespaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FunctionsNamespacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.functions.namespaces.$post>) {
      return parseResponse(client.v2.functions.namespaces.$post(args, options))
    },
  })
}

export function usePostV2FunctionsNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.functions.namespaces.$post>,
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
  const mutationDefaults = getPostV2FunctionsNamespacesMutationOptions<TError, TOnMutateResult>(
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

export function getV2FunctionsNamespacesNamespaceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id', toValue(args)] as const
}

export function getV2FunctionsNamespacesNamespaceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FunctionsNamespacesNamespaceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FunctionsNamespacesNamespaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>
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
                  ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2FunctionsNamespacesNamespaceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FunctionsNamespacesNamespaceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.functions.namespaces[':namespace_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2FunctionsNamespacesNamespaceIdMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id', 'DELETE'] as const
}

export function getDeleteV2FunctionsNamespacesNamespaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FunctionsNamespacesNamespaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
    ) {
      return parseResponse(client.v2.functions.namespaces[':namespace_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2FunctionsNamespacesNamespaceId<
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
                    ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2FunctionsNamespacesNamespaceIdMutationOptions<
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

export function getV2FunctionsNamespacesNamespaceIdTriggersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', toValue(args)] as const
}

export function getV2FunctionsNamespacesNamespaceIdTriggersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FunctionsNamespacesNamespaceIdTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FunctionsNamespacesNamespaceIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersQueryKey>
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
            ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FunctionsNamespacesNamespaceIdTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.functions.namespaces[':namespace_id'].triggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FunctionsNamespacesNamespaceIdTriggersMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', 'POST'] as const
}

export function getPostV2FunctionsNamespacesNamespaceIdTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FunctionsNamespacesNamespaceIdTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers.$post(args, options),
      )
    },
  })
}

export function usePostV2FunctionsNamespacesNamespaceIdTriggers<
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
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
  const mutationDefaults = getPostV2FunctionsNamespacesNamespaceIdTriggersMutationOptions<
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

export function getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name',
    toValue(args),
  ] as const
}

export function getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey>
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
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'PUT'] as const
}

export function getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
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
  const mutationDefaults = getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
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

export function getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'DELETE'] as const
}

export function getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
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
                    ReturnType<
                      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
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
  const mutationDefaults =
    getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
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

export function getV2ImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
) {
  return ['v2', '/v2/images', toValue(args)] as const
}

export function getV2ImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Images<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
          >,
          ReturnType<typeof getV2ImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesMutationKey() {
  return ['v2', '/v2/images', 'POST'] as const
}

export function getPostV2ImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.$post>) {
      return parseResponse(client.v2.images.$post(args, options))
    },
  })
}

export function usePostV2Images<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.images.$post>,
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
  const mutationDefaults = getPostV2ImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ImagesImageIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':image_id']['$get']>>,
) {
  return ['v2', '/v2/images/:image_id', toValue(args)] as const
}

export function getV2ImagesImageIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':image_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesImageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images[':image_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':image_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesImageIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesImageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images[':image_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ImagesImageIdMutationKey() {
  return ['v2', '/v2/images/:image_id', 'PUT'] as const
}

export function getPutV2ImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.images)[':image_id']['$put']>) {
      return parseResponse(client.v2.images[':image_id'].$put(args, options))
    },
  })
}

export function usePutV2ImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
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
  const mutationDefaults = getPutV2ImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ImagesImageIdMutationKey() {
  return ['v2', '/v2/images/:image_id', 'DELETE'] as const
}

export function getDeleteV2ImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>) {
      return parseResponse(client.v2.images[':image_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2ImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2ImagesImageIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ImagesImageIdActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>
  >,
) {
  return ['v2', '/v2/images/:image_id/actions', toValue(args)] as const
}

export function getV2ImagesImageIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesImageIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images[':image_id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesImageIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesImageIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesImageIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images[':image_id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesImageIdActionsMutationKey() {
  return ['v2', '/v2/images/:image_id/actions', 'POST'] as const
}

export function getPostV2ImagesImageIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesImageIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.images[':image_id'].actions.$post(args, options))
    },
  })
}

export function usePostV2ImagesImageIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
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
  const mutationDefaults = getPostV2ImagesImageIdActionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ImagesImageIdActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
  >,
) {
  return ['v2', '/v2/images/:image_id/actions/:action_id', toValue(args)] as const
}

export function getV2ImagesImageIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesImageIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images[':image_id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesImageIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
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
                    (typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']
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
                    (typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ImagesImageIdActionsActionIdQueryKey>
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
            ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesImageIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images[':image_id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KubernetesClustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.kubernetes.clusters.$get>>,
) {
  return ['v2', '/v2/kubernetes/clusters', toValue(args)] as const
}

export function getV2KubernetesClustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.kubernetes.clusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.kubernetes.clusters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
            >
          >,
          ReturnType<typeof getV2KubernetesClustersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KubernetesClustersMutationKey() {
  return ['v2', '/v2/kubernetes/clusters', 'POST'] as const
}

export function getPostV2KubernetesClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.clusters.$post>) {
      return parseResponse(client.v2.kubernetes.clusters.$post(args, options))
    },
  })
}

export function usePostV2KubernetesClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
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
  const mutationDefaults = getPostV2KubernetesClustersMutationOptions<TError, TOnMutateResult>(
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

export function getV2KubernetesClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2KubernetesClustersClusterIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'PUT'] as const
}

export function getPutV2KubernetesClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2KubernetesClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
    ) {
      return parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$put(args, options))
    },
  })
}

export function usePutV2KubernetesClustersClusterId<
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
                Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
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
  const mutationDefaults = getPutV2KubernetesClustersClusterIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'DELETE'] as const
}

export function getDeleteV2KubernetesClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
    ) {
      return parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2KubernetesClustersClusterId<
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
                    ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2KubernetesClustersClusterIdMutationOptions<
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

export function getV2KubernetesClustersClusterIdClusterlintQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdClusterlintQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdClusterlintQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdClusterlint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdClusterlintQueryKey>
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
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdClusterlintQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdClusterlintQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KubernetesClustersClusterIdClusterlintMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdClusterlintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdClusterlintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$post(args, options),
      )
    },
  })
}

export function usePostV2KubernetesClustersClusterIdClusterlint<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
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
  const mutationDefaults = getPostV2KubernetesClustersClusterIdClusterlintMutationOptions<
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

export function getV2KubernetesClustersClusterIdCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/credentials', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdCredentialsQueryKey>
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
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources',
    toValue(args),
  ] as const
}

export function getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdDestroyWithAssociatedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey>
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
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[
          ':cluster_id'
        ].destroy_with_associated_resources.dangerous.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerous<
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
                    ReturnType<
                      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
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
  const mutationDefaults =
    getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[
          ':cluster_id'
        ].destroy_with_associated_resources.selective.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelective<
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
                    ReturnType<
                      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
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
  const mutationDefaults =
    getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
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

export function getV2KubernetesClustersClusterIdKubeconfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/kubeconfig', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdKubeconfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdKubeconfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdKubeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdKubeconfigQueryKey>
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
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdKubeconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdKubeconfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KubernetesClustersClusterIdNodePoolsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdNodePoolsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdNodePoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdNodePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsQueryKey>
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
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdNodePoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KubernetesClustersClusterIdNodePoolsMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdNodePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdNodePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools.$post(args, options),
      )
    },
  })
}

export function usePostV2KubernetesClustersClusterIdNodePools<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
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
  const mutationDefaults = getPostV2KubernetesClustersClusterIdNodePoolsMutationOptions<
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

export function getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id',
    toValue(args),
  ] as const
}

export function getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdNodePoolsNodePoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey>
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
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'PUT'] as const
}

export function getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2KubernetesClustersClusterIdNodePoolsNodePoolId<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
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
  const mutationDefaults = getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'DELETE'] as const
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolId<
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
                    ReturnType<
                      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
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
  const mutationDefaults = getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/nodes/:node_id',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].nodes[
          ':node_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeId<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
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
  const mutationDefaults =
    getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationOptions<
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

export function getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/recycle',
    'POST',
  ] as const
}

export function getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].recycle.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycle<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
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
  const mutationDefaults =
    getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationOptions<
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

export function getPostV2KubernetesClustersClusterIdUpgradeMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrade', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].upgrade.$post(args, options),
      )
    },
  })
}

export function usePostV2KubernetesClustersClusterIdUpgrade<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
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
  const mutationDefaults = getPostV2KubernetesClustersClusterIdUpgradeMutationOptions<
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

export function getV2KubernetesClustersClusterIdUpgradesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrades', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdUpgradesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdUpgradesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdUpgrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdUpgradesQueryKey>
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
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdUpgradesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdUpgradesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KubernetesClustersClusterIdUserQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/user', toValue(args)] as const
}

export function getV2KubernetesClustersClusterIdUserQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KubernetesClustersClusterIdUserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].user.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesClustersClusterIdUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
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
                  ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2KubernetesClustersClusterIdUserQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KubernetesClustersClusterIdUserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.clusters[':cluster_id'].user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KubernetesOptionsQueryKey() {
  return ['v2', '/v2/kubernetes/options'] as const
}

export function getV2KubernetesOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2KubernetesOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.kubernetes.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KubernetesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
            >
          >,
          ReturnType<typeof getV2KubernetesOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2KubernetesOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.kubernetes.options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KubernetesRegistryMutationKey() {
  return ['v2', '/v2/kubernetes/registry', 'POST'] as const
}

export function getPostV2KubernetesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.kubernetes.registry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.registry.$post>) {
      return parseResponse(client.v2.kubernetes.registry.$post(args, options))
    },
  })
}

export function usePostV2KubernetesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v2.kubernetes.registry.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.kubernetes.registry.$post>,
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
  const mutationDefaults = getPostV2KubernetesRegistryMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2KubernetesRegistryMutationKey() {
  return ['v2', '/v2/kubernetes/registry', 'DELETE'] as const
}

export function getDeleteV2KubernetesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.registry.$delete>) {
      return parseResponse(client.v2.kubernetes.registry.$delete(args, options))
    },
  })
}

export function useDeleteV2KubernetesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v2.kubernetes.registry.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
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
  const mutationDefaults = getDeleteV2KubernetesRegistryMutationOptions<TError, TOnMutateResult>(
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

export function getV2LoadBalancersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.load_balancers.$get>>,
) {
  return ['v2', '/v2/load_balancers', toValue(args)] as const
}

export function getV2LoadBalancersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.load_balancers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.load_balancers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LoadBalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.load_balancers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>
            >
          >,
          ReturnType<typeof getV2LoadBalancersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoadBalancersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.load_balancers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2LoadBalancersMutationKey() {
  return ['v2', '/v2/load_balancers', 'POST'] as const
}

export function getPostV2LoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.load_balancers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.load_balancers.$post>) {
      return parseResponse(client.v2.load_balancers.$post(args, options))
    },
  })
}

export function usePostV2LoadBalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.load_balancers.$post>,
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
  const mutationDefaults = getPostV2LoadBalancersMutationOptions<TError, TOnMutateResult>(
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

export function getV2LoadBalancersLbIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>,
) {
  return ['v2', '/v2/load_balancers/:lb_id', toValue(args)] as const
}

export function getV2LoadBalancersLbIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2LoadBalancersLbIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.load_balancers[':lb_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2LoadBalancersLbId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2LoadBalancersLbIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoadBalancersLbIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2LoadBalancersLbIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.load_balancers[':lb_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2LoadBalancersLbIdMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'PUT'] as const
}

export function getPutV2LoadBalancersLbIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LoadBalancersLbIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>) {
      return parseResponse(client.v2.load_balancers[':lb_id'].$put(args, options))
    },
  })
}

export function usePutV2LoadBalancersLbId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
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
  const mutationDefaults = getPutV2LoadBalancersLbIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2LoadBalancersLbIdMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2LoadBalancersLbId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2LoadBalancersLbIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2LoadBalancersLbIdDropletsMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'POST'] as const
}

export function getPostV2LoadBalancersLbIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersLbIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].droplets.$post(args, options))
    },
  })
}

export function usePostV2LoadBalancersLbIdDroplets<
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
                    ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
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
  const mutationDefaults = getPostV2LoadBalancersLbIdDropletsMutationOptions<
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

export function getDeleteV2LoadBalancersLbIdDropletsMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].droplets.$delete(args, options))
    },
  })
}

export function useDeleteV2LoadBalancersLbIdDroplets<
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
                    ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
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
  const mutationDefaults = getDeleteV2LoadBalancersLbIdDropletsMutationOptions<
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

export function getPostV2LoadBalancersLbIdForwardingRulesMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'POST'] as const
}

export function getPostV2LoadBalancersLbIdForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersLbIdForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
      >,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].forwarding_rules.$post(args, options))
    },
  })
}

export function usePostV2LoadBalancersLbIdForwardingRules<
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
                    ReturnType<
                      (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
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
  const mutationDefaults = getPostV2LoadBalancersLbIdForwardingRulesMutationOptions<
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

export function getDeleteV2LoadBalancersLbIdForwardingRulesMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.load_balancers[':lb_id'].forwarding_rules.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2LoadBalancersLbIdForwardingRules<
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
                    ReturnType<
                      (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
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
  const mutationDefaults = getDeleteV2LoadBalancersLbIdForwardingRulesMutationOptions<
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

export function getV2MonitoringAlertsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.alerts.$get>>,
) {
  return ['v2', '/v2/monitoring/alerts', toValue(args)] as const
}

export function getV2MonitoringAlertsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.alerts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringAlerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.alerts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
            >
          >,
          ReturnType<typeof getV2MonitoringAlertsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2MonitoringAlertsMutationKey() {
  return ['v2', '/v2/monitoring/alerts', 'POST'] as const
}

export function getPostV2MonitoringAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.monitoring.alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MonitoringAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.monitoring.alerts.$post>) {
      return parseResponse(client.v2.monitoring.alerts.$post(args, options))
    },
  })
}

export function usePostV2MonitoringAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.monitoring.alerts.$post>,
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
  const mutationDefaults = getPostV2MonitoringAlertsMutationOptions<TError, TOnMutateResult>(
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

export function getV2MonitoringAlertsAlertUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>
  >,
) {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', toValue(args)] as const
}

export function getV2MonitoringAlertsAlertUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringAlertsAlertUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.alerts[':alert_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringAlertsAlertUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringAlertsAlertUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringAlertsAlertUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringAlertsAlertUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.alerts[':alert_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2MonitoringAlertsAlertUuidMutationKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'PUT'] as const
}

export function getPutV2MonitoringAlertsAlertUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2MonitoringAlertsAlertUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
    ) {
      return parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$put(args, options))
    },
  })
}

export function usePutV2MonitoringAlertsAlertUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
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
  const mutationDefaults = getPutV2MonitoringAlertsAlertUuidMutationOptions<
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

export function getDeleteV2MonitoringAlertsAlertUuidMutationKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'DELETE'] as const
}

export function getDeleteV2MonitoringAlertsAlertUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2MonitoringAlertsAlertUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
    ) {
      return parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteV2MonitoringAlertsAlertUuid<
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
                    ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
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
  const mutationDefaults = getDeleteV2MonitoringAlertsAlertUuidMutationOptions<
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

export function getV2MonitoringMetricsDropletBandwidthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/bandwidth', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletBandwidthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletBandwidthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.bandwidth.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletBandwidthQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletBandwidthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletBandwidthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.bandwidth.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletCpuQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/cpu', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletCpuQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletCpuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.cpu.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletCpu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletCpuQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletCpuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletCpuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.cpu.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletFilesystemFreeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_free', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletFilesystemFreeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletFilesystemFreeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.filesystem_free.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletFilesystemFree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>
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
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletFilesystemFreeQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletFilesystemFreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletFilesystemFreeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_free.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletFilesystemSizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_size', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletFilesystemSizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletFilesystemSizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.filesystem_size.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletFilesystemSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>
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
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletFilesystemSizeQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletFilesystemSizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletFilesystemSizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.filesystem_size.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletLoad1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_1', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletLoad1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletLoad1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_1.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletLoad1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletLoad1QueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletLoad1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.load_1.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletLoad15QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_15', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletLoad15QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletLoad15QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_15.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletLoad15<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletLoad15QueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad15QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletLoad15QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.load_15.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletLoad5QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_5', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletLoad5QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletLoad5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_5.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletLoad5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletLoad5QueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletLoad5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.load_5.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletMemoryAvailableQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_available', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletMemoryAvailableQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletMemoryAvailableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_available.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletMemoryAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>
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
                  ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>
                >
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletMemoryAvailableQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryAvailableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletMemoryAvailableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.memory_available.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletMemoryCachedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_cached', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletMemoryCachedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletMemoryCachedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_cached.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletMemoryCached<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletMemoryCachedQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryCachedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletMemoryCachedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.memory_cached.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletMemoryFreeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_free', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletMemoryFreeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletMemoryFreeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_free.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletMemoryFree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletMemoryFreeQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryFreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletMemoryFreeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.memory_free.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2MonitoringMetricsDropletMemoryTotalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>
  >,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_total', toValue(args)] as const
}

export function getV2MonitoringMetricsDropletMemoryTotalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoringMetricsDropletMemoryTotalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_total.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoringMetricsDropletMemoryTotal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoringMetricsDropletMemoryTotalQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryTotalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoringMetricsDropletMemoryTotalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoring.metrics.droplet.memory_total.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ProjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
) {
  return ['v2', '/v2/projects', toValue(args)] as const
}

export function getV2ProjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.projects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
          >,
          ReturnType<typeof getV2ProjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ProjectsMutationKey() {
  return ['v2', '/v2/projects', 'POST'] as const
}

export function getPostV2ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.$post>) {
      return parseResponse(client.v2.projects.$post(args, options))
    },
  })
}

export function usePostV2Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.projects.$post>,
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
  const mutationDefaults = getPostV2ProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ProjectsDefaultQueryKey() {
  return ['v2', '/v2/projects/default'] as const
}

export function getV2ProjectsDefaultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ProjectsDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>
            >
          >,
          ReturnType<typeof getV2ProjectsDefaultQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ProjectsDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ProjectsDefaultMutationKey() {
  return ['v2', '/v2/projects/default', 'PUT'] as const
}

export function getPutV2ProjectsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.$put>) {
      return parseResponse(client.v2.projects.default.$put(args, options))
    },
  })
}

export function usePutV2ProjectsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.projects.default.$put>,
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
  const mutationDefaults = getPutV2ProjectsDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2ProjectsDefaultMutationKey() {
  return ['v2', '/v2/projects/default', 'PATCH'] as const
}

export function getPatchV2ProjectsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ProjectsDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.$patch>) {
      return parseResponse(client.v2.projects.default.$patch(args, options))
    },
  })
}

export function usePatchV2ProjectsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.projects.default.$patch>,
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
  const mutationDefaults = getPatchV2ProjectsDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getV2ProjectsDefaultResourcesQueryKey() {
  return ['v2', '/v2/projects/default/resources'] as const
}

export function getV2ProjectsDefaultResourcesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ProjectsDefaultResourcesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects.default.resources.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsDefaultResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsDefaultResourcesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsDefaultResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ProjectsDefaultResourcesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects.default.resources.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ProjectsDefaultResourcesMutationKey() {
  return ['v2', '/v2/projects/default/resources', 'POST'] as const
}

export function getPostV2ProjectsDefaultResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsDefaultResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.resources.$post>) {
      return parseResponse(client.v2.projects.default.resources.$post(args, options))
    },
  })
}

export function usePostV2ProjectsDefaultResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.projects.default.resources.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.projects.default.resources.$post>,
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
  const mutationDefaults = getPostV2ProjectsDefaultResourcesMutationOptions<
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

export function getV2ProjectsProjectIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
) {
  return ['v2', '/v2/projects/:project_id', toValue(args)] as const
}

export function getV2ProjectsProjectIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':project_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':project_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>) {
      return parseResponse(client.v2.projects[':project_id'].$put(args, options))
    },
  })
}

export function usePutV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
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
  const mutationDefaults = getPutV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'DELETE'] as const
}

export function getDeleteV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
    ) {
      return parseResponse(client.v2.projects[':project_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'PATCH'] as const
}

export function getPatchV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>) {
      return parseResponse(client.v2.projects[':project_id'].$patch(args, options))
    },
  })
}

export function usePatchV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
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
  const mutationDefaults = getPatchV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ProjectsProjectIdResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>
  >,
) {
  return ['v2', '/v2/projects/:project_id/resources', toValue(args)] as const
}

export function getV2ProjectsProjectIdResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ProjectsProjectIdResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.projects[':project_id'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ProjectsProjectIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ProjectsProjectIdResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ProjectsProjectIdResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.projects[':project_id'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ProjectsProjectIdResourcesMutationKey() {
  return ['v2', '/v2/projects/:project_id/resources', 'POST'] as const
}

export function getPostV2ProjectsProjectIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.projects[':project_id'].resources.$post(args, options))
    },
  })
}

export function usePostV2ProjectsProjectIdResources<
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
                  ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
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
  const mutationDefaults = getPostV2ProjectsProjectIdResourcesMutationOptions<
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

export function getV2RegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.regions.$get>>,
) {
  return ['v2', '/v2/regions', toValue(args)] as const
}

export function getV2RegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.regions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Regions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
          >,
          ReturnType<typeof getV2RegionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistryQueryKey() {
  return ['v2', '/v2/registry'] as const
}

export function getV2RegistryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2RegistryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
          >,
          ReturnType<typeof getV2RegistryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RegistryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2RegistryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2RegistryMutationKey() {
  return ['v2', '/v2/registry', 'POST'] as const
}

export function getPostV2RegistryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.registry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.registry.$post>) {
      return parseResponse(client.v2.registry.$post(args, options))
    },
  })
}

export function usePostV2Registry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.registry.$post>,
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
  const mutationDefaults = getPostV2RegistryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2RegistryMutationKey() {
  return ['v2', '/v2/registry', 'DELETE'] as const
}

export function getDeleteV2RegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.registry.$delete(undefined, options))
    },
  })
}

export function useDeleteV2Registry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$delete>>>
              >
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getDeleteV2RegistryMutationOptions<TError, TOnMutateResult>(
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

export function getV2RegistryDockerCredentialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>
  >,
) {
  return ['v2', '/v2/registry/docker-credentials', toValue(args)] as const
}

export function getV2RegistryDockerCredentialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryDockerCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry['docker-credentials'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryDockerCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2RegistryDockerCredentialsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryDockerCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryDockerCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry['docker-credentials'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistryOptionsQueryKey() {
  return ['v2', '/v2/registry/options'] as const
}

export function getV2RegistryOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2RegistryOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>
            >
          >,
          ReturnType<typeof getV2RegistryOptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2RegistryOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry.options.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistrySubscriptionQueryKey() {
  return ['v2', '/v2/registry/subscription'] as const
}

export function getV2RegistrySubscriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2RegistrySubscriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistrySubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
            >
          >,
          ReturnType<typeof getV2RegistrySubscriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistrySubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2RegistrySubscriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry.subscription.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2RegistrySubscriptionMutationKey() {
  return ['v2', '/v2/registry/subscription', 'POST'] as const
}

export function getPostV2RegistrySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.registry.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistrySubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.registry.subscription.$post>) {
      return parseResponse(client.v2.registry.subscription.$post(args, options))
    },
  })
}

export function usePostV2RegistrySubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.registry.subscription.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.registry.subscription.$post>,
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
  const mutationDefaults = getPostV2RegistrySubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2RegistryValidateNameMutationKey() {
  return ['v2', '/v2/registry/validate-name', 'POST'] as const
}

export function getPostV2RegistryValidateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['validate-name']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryValidateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
    ) {
      return parseResponse(client.v2.registry['validate-name'].$post(args, options))
    },
  })
}

export function usePostV2RegistryValidateName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.registry)['validate-name']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
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
  const mutationDefaults = getPostV2RegistryValidateNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2RegistryRegistryNameGarbageCollectionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', toValue(args)] as const
}

export function getV2RegistryRegistryNameGarbageCollectionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameGarbageCollectionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameGarbageCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionQueryKey>
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
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameGarbageCollectionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name']['garbage-collection'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2RegistryRegistryNameGarbageCollectionMutationKey() {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', 'POST'] as const
}

export function getPostV2RegistryRegistryNameGarbageCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryRegistryNameGarbageCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'].$post(args, options),
      )
    },
  })
}

export function usePostV2RegistryRegistryNameGarbageCollection<
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
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
  const mutationDefaults = getPostV2RegistryRegistryNameGarbageCollectionMutationOptions<
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

export function getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/garbage-collection/:garbage_collection_uuid',
    'PUT',
  ] as const
}

export function getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'][':garbage_collection_uuid'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuid<
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
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
  const mutationDefaults =
    getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationOptions<
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

export function getV2RegistryRegistryNameGarbageCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collections', toValue(args)] as const
}

export function getV2RegistryRegistryNameGarbageCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameGarbageCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collections'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameGarbageCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
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
                    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionsQueryKey>
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
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameGarbageCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name']['garbage-collections'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistryRegistryNameRepositoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
  >,
) {
  return ['v2', '/v2/registry/:registry_name/repositories', toValue(args)] as const
}

export function getV2RegistryRegistryNameRepositoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name'].repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
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
                  ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameRepositoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name'].repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistryRegistryNameRepositoriesV2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
  >,
) {
  return ['v2', '/v2/registry/:registry_name/repositoriesV2', toValue(args)] as const
}

export function getV2RegistryRegistryNameRepositoriesV2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameRepositoriesV2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name'].repositoriesV2.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameRepositoriesV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
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
                    (typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']
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
                    (typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameRepositoriesV2QueryKey>
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
            ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoriesV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameRepositoriesV2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name'].repositoriesV2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2RegistryRegistryNameRepositoryNameDigestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
    >
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/digests', toValue(args)] as const
}

export function getV2RegistryRegistryNameRepositoryNameDigestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameRepositoryNameDigestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].digests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameRepositoryNameDigests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameRepositoryNameDigestsQueryKey>
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
              (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoryNameDigestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameRepositoryNameDigestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name'][':repository_name'].digests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/digests/:manifest_digest',
    'DELETE',
  ] as const
}

export function getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].digests[
          ':manifest_digest'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigest<
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
                    ReturnType<
                      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
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
  const mutationDefaults =
    getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationOptions<
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

export function getV2RegistryRegistryNameRepositoryNameTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
    >
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/tags', toValue(args)] as const
}

export function getV2RegistryRegistryNameRepositoryNameTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2RegistryRegistryNameRepositoryNameTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2RegistryRegistryNameRepositoryNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2RegistryRegistryNameRepositoryNameTagsQueryKey>
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
              (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoryNameTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2RegistryRegistryNameRepositoryNameTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.registry[':registry_name'][':repository_name'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/tags/:repository_tag',
    'DELETE',
  ] as const
}

export function getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].tags[':repository_tag'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTag<
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
                    ReturnType<
                      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
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
  const mutationDefaults =
    getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationOptions<
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

export function getV2ReportsDropletNeighborsIdsQueryKey() {
  return ['v2', '/v2/reports/droplet_neighbors_ids'] as const
}

export function getV2ReportsDropletNeighborsIdsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ReportsDropletNeighborsIdsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reports.droplet_neighbors_ids.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReportsDropletNeighborsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
              >
            >
          >,
          ReturnType<typeof getV2ReportsDropletNeighborsIdsQueryKey>
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
          Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsDropletNeighborsIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ReportsDropletNeighborsIdsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reports.droplet_neighbors_ids.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ReservedIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reserved_ips.$get>>,
) {
  return ['v2', '/v2/reserved_ips', toValue(args)] as const
}

export function getV2ReservedIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reserved_ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReservedIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reserved_ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReservedIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reserved_ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>
            >
          >,
          ReturnType<typeof getV2ReservedIpsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReservedIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reserved_ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ReservedIpsMutationKey() {
  return ['v2', '/v2/reserved_ips', 'POST'] as const
}

export function getPostV2ReservedIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.reserved_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReservedIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.reserved_ips.$post>) {
      return parseResponse(client.v2.reserved_ips.$post(args, options))
    },
  })
}

export function usePostV2ReservedIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.reserved_ips.$post>,
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
  const mutationDefaults = getPostV2ReservedIpsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ReservedIpsReservedIpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip', toValue(args)] as const
}

export function getV2ReservedIpsReservedIpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReservedIpsReservedIpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReservedIpsReservedIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ReservedIpsReservedIpQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReservedIpsReservedIpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reserved_ips[':reserved_ip'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2ReservedIpsReservedIpMutationKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip', 'DELETE'] as const
}

export function getDeleteV2ReservedIpsReservedIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ReservedIpsReservedIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
    ) {
      return parseResponse(client.v2.reserved_ips[':reserved_ip'].$delete(args, options))
    },
  })
}

export function useDeleteV2ReservedIpsReservedIp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
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
  const mutationDefaults = getDeleteV2ReservedIpsReservedIpMutationOptions<TError, TOnMutateResult>(
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

export function getV2ReservedIpsReservedIpActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
  >,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', toValue(args)] as const
}

export function getV2ReservedIpsReservedIpActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReservedIpsReservedIpActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReservedIpsReservedIpActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
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
                  ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ReservedIpsReservedIpActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReservedIpsReservedIpActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reserved_ips[':reserved_ip'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ReservedIpsReservedIpActionsMutationKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', 'POST'] as const
}

export function getPostV2ReservedIpsReservedIpActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReservedIpsReservedIpActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$post(args, options))
    },
  })
}

export function usePostV2ReservedIpsReservedIpActions<
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
                  ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
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
  const mutationDefaults = getPostV2ReservedIpsReservedIpActionsMutationOptions<
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

export function getV2ReservedIpsReservedIpActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
    >
  >,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions/:action_id', toValue(args)] as const
}

export function getV2ReservedIpsReservedIpActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReservedIpsReservedIpActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReservedIpsReservedIpActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
                    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
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
                    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ReservedIpsReservedIpActionsActionIdQueryKey>
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
              (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReservedIpsReservedIpActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SizesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sizes.$get>>,
) {
  return ['v2', '/v2/sizes', toValue(args)] as const
}

export function getV2SizesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sizes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SizesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sizes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Sizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sizes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>
          >,
          ReturnType<typeof getV2SizesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SizesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SizesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sizes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.snapshots.$get>>,
) {
  return ['v2', '/v2/snapshots', toValue(args)] as const
}

export function getV2SnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.snapshots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshots.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Snapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.snapshots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
          >,
          ReturnType<typeof getV2SnapshotsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>,
) {
  return ['v2', '/v2/snapshots/:snapshot_id', toValue(args)] as const
}

export function getV2SnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.snapshots[':snapshot_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SnapshotsSnapshotIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.snapshots[':snapshot_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2SnapshotsSnapshotIdMutationKey() {
  return ['v2', '/v2/snapshots/:snapshot_id', 'DELETE'] as const
}

export function getDeleteV2SnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
    ) {
      return parseResponse(client.v2.snapshots[':snapshot_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2SnapshotsSnapshotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2SnapshotsSnapshotIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2TagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tags.$get>>,
) {
  return ['v2', '/v2/tags', toValue(args)] as const
}

export function getV2TagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>
          >,
          ReturnType<typeof getV2TagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2TagsMutationKey() {
  return ['v2', '/v2/tags', 'POST'] as const
}

export function getPostV2TagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.tags.$post>) {
      return parseResponse(client.v2.tags.$post(args, options))
    },
  })
}

export function usePostV2Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.tags.$post>,
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
  const mutationDefaults = getPostV2TagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TagsTagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>>,
) {
  return ['v2', '/v2/tags/:tag_id', toValue(args)] as const
}

export function getV2TagsTagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TagsTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tags[':tag_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2TagsTagIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TagsTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TagsTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tags[':tag_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2TagsTagIdMutationKey() {
  return ['v2', '/v2/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteV2TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>) {
      return parseResponse(client.v2.tags[':tag_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2TagsTagIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2TagsTagIdResourcesMutationKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'POST'] as const
}

export function getPostV2TagsTagIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TagsTagIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.tags[':tag_id'].resources.$post(args, options))
    },
  })
}

export function usePostV2TagsTagIdResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
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
  const mutationDefaults = getPostV2TagsTagIdResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2TagsTagIdResourcesMutationKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'DELETE'] as const
}

export function getDeleteV2TagsTagIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TagsTagIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
    ) {
      return parseResponse(client.v2.tags[':tag_id'].resources.$delete(args, options))
    },
  })
}

export function useDeleteV2TagsTagIdResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
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
  const mutationDefaults = getDeleteV2TagsTagIdResourcesMutationOptions<TError, TOnMutateResult>(
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

export function getV2UptimeChecksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.uptime.checks.$get>>,
) {
  return ['v2', '/v2/uptime/checks', toValue(args)] as const
}

export function getV2UptimeChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.uptime.checks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UptimeChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.uptime.checks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UptimeChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.uptime.checks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>
            >
          >,
          ReturnType<typeof getV2UptimeChecksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UptimeChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.uptime.checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2UptimeChecksMutationKey() {
  return ['v2', '/v2/uptime/checks', 'POST'] as const
}

export function getPostV2UptimeChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.uptime.checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UptimeChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.uptime.checks.$post>) {
      return parseResponse(client.v2.uptime.checks.$post(args, options))
    },
  })
}

export function usePostV2UptimeChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.uptime.checks.$post>,
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
  const mutationDefaults = getPostV2UptimeChecksMutationOptions<TError, TOnMutateResult>(
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

export function getV2UptimeChecksCheckIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>,
) {
  return ['v2', '/v2/uptime/checks/:check_id', toValue(args)] as const
}

export function getV2UptimeChecksCheckIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UptimeChecksCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UptimeChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2UptimeChecksCheckIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UptimeChecksCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.uptime.checks[':check_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2UptimeChecksCheckIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'PUT'] as const
}

export function getPutV2UptimeChecksCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UptimeChecksCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].$put(args, options))
    },
  })
}

export function usePutV2UptimeChecksCheckId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
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
  const mutationDefaults = getPutV2UptimeChecksCheckIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2UptimeChecksCheckIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'DELETE'] as const
}

export function getDeleteV2UptimeChecksCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UptimeChecksCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2UptimeChecksCheckId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2UptimeChecksCheckIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2UptimeChecksCheckIdAlertsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>
  >,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', toValue(args)] as const
}

export function getV2UptimeChecksCheckIdAlertsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UptimeChecksCheckIdAlertsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UptimeChecksCheckIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2UptimeChecksCheckIdAlertsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdAlertsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UptimeChecksCheckIdAlertsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.uptime.checks[':check_id'].alerts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2UptimeChecksCheckIdAlertsMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', 'POST'] as const
}

export function getPostV2UptimeChecksCheckIdAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UptimeChecksCheckIdAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].alerts.$post(args, options))
    },
  })
}

export function usePostV2UptimeChecksCheckIdAlerts<
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
                  ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
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
  const mutationDefaults = getPostV2UptimeChecksCheckIdAlertsMutationOptions<
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

export function getV2UptimeChecksCheckIdAlertsAlertIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
  >,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', toValue(args)] as const
}

export function getV2UptimeChecksCheckIdAlertsAlertIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UptimeChecksCheckIdAlertsAlertIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UptimeChecksCheckIdAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
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
                    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
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
                    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2UptimeChecksCheckIdAlertsAlertIdQueryKey>
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
            ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdAlertsAlertIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UptimeChecksCheckIdAlertsAlertIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2UptimeChecksCheckIdAlertsAlertIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'PUT'] as const
}

export function getPutV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UptimeChecksCheckIdAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$put(args, options),
      )
    },
  })
}

export function usePutV2UptimeChecksCheckIdAlertsAlertId<
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
                    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
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
  const mutationDefaults = getPutV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
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

export function getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'DELETE'] as const
}

export function getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2UptimeChecksCheckIdAlertsAlertId<
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
                    ReturnType<
                      (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
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
  const mutationDefaults = getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
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

export function getV2UptimeChecksCheckIdStateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>
  >,
) {
  return ['v2', '/v2/uptime/checks/:check_id/state', toValue(args)] as const
}

export function getV2UptimeChecksCheckIdStateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UptimeChecksCheckIdStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UptimeChecksCheckIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2UptimeChecksCheckIdStateQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UptimeChecksCheckIdStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.uptime.checks[':check_id'].state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.volumes.$get>>,
) {
  return ['v2', '/v2/volumes', toValue(args)] as const
}

export function getV2VolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Volumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
          >,
          ReturnType<typeof getV2VolumesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VolumesMutationKey() {
  return ['v2', '/v2/volumes', 'POST'] as const
}

export function getPostV2VolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.$post>) {
      return parseResponse(client.v2.volumes.$post(args, options))
    },
  })
}

export function usePostV2Volumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.volumes.$post>,
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
  const mutationDefaults = getPostV2VolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2VolumesMutationKey() {
  return ['v2', '/v2/volumes', 'DELETE'] as const
}

export function getDeleteV2VolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.volumes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.$delete>) {
      return parseResponse(client.v2.volumes.$delete(args, options))
    },
  })
}

export function useDeleteV2Volumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.volumes.$delete>,
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
  const mutationDefaults = getDeleteV2VolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV2VolumesActionsMutationKey() {
  return ['v2', '/v2/volumes/actions', 'POST'] as const
}

export function getPostV2VolumesActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.volumes.actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.actions.$post>) {
      return parseResponse(client.v2.volumes.actions.$post(args, options))
    },
  })
}

export function usePostV2VolumesActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.actions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.volumes.actions.$post>,
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
  const mutationDefaults = getPostV2VolumesActionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2VolumesSnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>
  >,
) {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', toValue(args)] as const
}

export function getV2VolumesSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesSnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes.snapshots[':snapshot_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VolumesSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VolumesSnapshotsSnapshotIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesSnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes.snapshots[':snapshot_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2VolumesSnapshotsSnapshotIdMutationKey() {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', 'DELETE'] as const
}

export function getDeleteV2VolumesSnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesSnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
    ) {
      return parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2VolumesSnapshotsSnapshotId<
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
                    ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2VolumesSnapshotsSnapshotIdMutationOptions<
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

export function getV2VolumesVolumeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>>,
) {
  return ['v2', '/v2/volumes/:volume_id', toValue(args)] as const
}

export function getV2VolumesVolumeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesVolumeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes[':volume_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VolumesVolumeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesVolumeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes[':volume_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2VolumesVolumeIdMutationKey() {
  return ['v2', '/v2/volumes/:volume_id', 'DELETE'] as const
}

export function getDeleteV2VolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>) {
      return parseResponse(client.v2.volumes[':volume_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2VolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2VolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2VolumesVolumeIdActionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>
  >,
) {
  return ['v2', '/v2/volumes/:volume_id/actions', toValue(args)] as const
}

export function getV2VolumesVolumeIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesVolumeIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes[':volume_id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VolumesVolumeIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VolumesVolumeIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesVolumeIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes[':volume_id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VolumesVolumeIdActionsMutationKey() {
  return ['v2', '/v2/volumes/:volume_id/actions', 'POST'] as const
}

export function getPostV2VolumesVolumeIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesVolumeIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.volumes[':volume_id'].actions.$post(args, options))
    },
  })
}

export function usePostV2VolumesVolumeIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
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
  const mutationDefaults = getPostV2VolumesVolumeIdActionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2VolumesVolumeIdActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
  >,
) {
  return ['v2', '/v2/volumes/:volume_id/actions/:action_id', toValue(args)] as const
}

export function getV2VolumesVolumeIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesVolumeIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes[':volume_id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VolumesVolumeIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
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
                    (typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']
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
                    (typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2VolumesVolumeIdActionsActionIdQueryKey>
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
            ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesVolumeIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes[':volume_id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VolumesVolumeIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>
  >,
) {
  return ['v2', '/v2/volumes/:volume_id/snapshots', toValue(args)] as const
}

export function getV2VolumesVolumeIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VolumesVolumeIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.volumes[':volume_id'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VolumesVolumeIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VolumesVolumeIdSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VolumesVolumeIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.volumes[':volume_id'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VolumesVolumeIdSnapshotsMutationKey() {
  return ['v2', '/v2/volumes/:volume_id/snapshots', 'POST'] as const
}

export function getPostV2VolumesVolumeIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesVolumeIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
    ) {
      return parseResponse(client.v2.volumes[':volume_id'].snapshots.$post(args, options))
    },
  })
}

export function usePostV2VolumesVolumeIdSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
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
  const mutationDefaults = getPostV2VolumesVolumeIdSnapshotsMutationOptions<
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

export function getV2VpcsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vpcs.$get>>,
) {
  return ['v2', '/v2/vpcs', toValue(args)] as const
}

export function getV2VpcsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vpcs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VpcsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vpcs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Vpcs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.vpcs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>
          >,
          ReturnType<typeof getV2VpcsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VpcsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VpcsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vpcs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VpcsMutationKey() {
  return ['v2', '/v2/vpcs', 'POST'] as const
}

export function getPostV2VpcsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.vpcs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VpcsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vpcs.$post>) {
      return parseResponse(client.v2.vpcs.$post(args, options))
    },
  })
}

export function usePostV2Vpcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.vpcs.$post>,
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
  const mutationDefaults = getPostV2VpcsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2VpcsVpcIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>,
) {
  return ['v2', '/v2/vpcs/:vpc_id', toValue(args)] as const
}

export function getV2VpcsVpcIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VpcsVpcIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vpcs[':vpc_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VpcsVpcId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2VpcsVpcIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VpcsVpcIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VpcsVpcIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vpcs[':vpc_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PUT'] as const
}

export function getPutV2VpcsVpcIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$put(args, options))
    },
  })
}

export function usePutV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
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
  const mutationDefaults = getPutV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'DELETE'] as const
}

export function getDeleteV2VpcsVpcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PATCH'] as const
}

export function getPatchV2VpcsVpcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$patch(args, options))
    },
  })
}

export function usePatchV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
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
  const mutationDefaults = getPatchV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2VpcsVpcIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>,
) {
  return ['v2', '/v2/vpcs/:vpc_id/members', toValue(args)] as const
}

export function getV2VpcsVpcIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VpcsVpcIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.vpcs[':vpc_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VpcsVpcIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VpcsVpcIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VpcsVpcIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VpcsVpcIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.vpcs[':vpc_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
