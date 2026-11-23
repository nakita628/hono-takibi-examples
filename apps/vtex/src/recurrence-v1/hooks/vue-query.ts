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

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'PUT'] as const
}

export function getPutSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$put>) {
      return parseResponse(client.subscriptions.$put(args, options))
    },
  })
}

export function usePutSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$put>,
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
  const mutationDefaults = getPutSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.me.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/me', keyArgs] as const
}

export function getSubscriptionsMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionsMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.settings.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/settings', keyArgs] as const
}

export function getSubscriptionsSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionsSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSubscriptionsSettingsMutationKey() {
  return ['subscriptions', '/subscriptions/settings', 'PUT'] as const
}

export function getPutSubscriptionsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscriptions.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.settings.$put>) {
      return parseResponse(client.subscriptions.settings.$put(args, options))
    },
  })
}

export function usePutSubscriptionsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.subscriptions.settings.$put>,
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
  const mutationDefaults = getPutSubscriptionsSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsRecurrenceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:recurrenceId', keyArgs] as const
}

export function getSubscriptionsRecurrenceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsRecurrenceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':recurrenceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsRecurrenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsRecurrenceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsRecurrenceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':recurrenceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSubscriptionsRecurrenceIdMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId', 'PATCH'] as const
}

export function getPatchSubscriptionsRecurrenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsRecurrenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsRecurrenceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
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
  const mutationDefaults = getPatchSubscriptionsRecurrenceIdMutationOptions<
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

export function getSubscriptionsRecurrenceIdAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:recurrenceId/addresses', keyArgs] as const
}

export function getSubscriptionsRecurrenceIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsRecurrenceIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':recurrenceId'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsRecurrenceIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsRecurrenceIdAddressesQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsRecurrenceIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':recurrenceId'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSubscriptionsRecurrenceIdItemsMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/items', 'POST'] as const
}

export function getPostSubscriptionsRecurrenceIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsRecurrenceIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].items.$post(args, options))
    },
  })
}

export function usePostSubscriptionsRecurrenceIdItems<
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
                  ReturnType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
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
  const mutationDefaults = getPostSubscriptionsRecurrenceIdItemsMutationOptions<
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

export function getPatchSubscriptionsRecurrenceIdReindexMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/reindex', 'PATCH'] as const
}

export function getPatchSubscriptionsRecurrenceIdReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsRecurrenceIdReindexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].reindex.$patch(args, options))
    },
  })
}

export function usePatchSubscriptionsRecurrenceIdReindex<
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
                  ReturnType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
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
  const mutationDefaults = getPatchSubscriptionsRecurrenceIdReindexMutationOptions<
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

export function getSubscriptionsRecurrenceidAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:recurrenceid/accounts', keyArgs] as const
}

export function getSubscriptionsRecurrenceidAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsRecurrenceidAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':recurrenceid'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsRecurrenceidAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
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
                  ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsRecurrenceidAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceidAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsRecurrenceidAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':recurrenceid'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
