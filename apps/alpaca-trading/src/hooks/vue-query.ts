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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV2beta1Key() {
  return ['v2beta1'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV1LocatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.$get>>,
) {
  return ['v1', '/v1/locates', toValue(args)] as const
}

export function getV1LocatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Locates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
          >,
          ReturnType<typeof getV1LocatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1LocatesMutationKey() {
  return ['v1', '/v1/locates', 'POST'] as const
}

export function getPostV1LocatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.locates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LocatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.locates.$post>) {
      return parseResponse(client.v1.locates.$post(args, options))
    },
  })
}

export function usePostV1Locates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.locates.$post>,
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
  const mutationDefaults = getPostV1LocatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1LocatesLocateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>>,
) {
  return ['v1', '/v1/locates/:locate_id', toValue(args)] as const
}

export function getV1LocatesLocateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocatesLocateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locates[':locate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LocatesLocateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1LocatesLocateIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocatesLocateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocatesLocateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locates[':locate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1LocatesQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.quotes.$get>>,
) {
  return ['v1', '/v1/locates/quotes', toValue(args)] as const
}

export function getV1LocatesQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1LocatesQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.locates.quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1LocatesQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.locates.quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>
            >
          >,
          ReturnType<typeof getV1LocatesQuotesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocatesQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1LocatesQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.locates.quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2beta1EventsActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
) {
  return ['v2beta1', '/v2beta1/events/activities', toValue(args)] as const
}

export function getV2beta1EventsActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2beta1EventsActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta1.events.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2beta1EventsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2beta1.events.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>
              >
            >
          >,
          ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2beta1EventsActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta1.events.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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

export function getV2AccountActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.activities.$get>>,
) {
  return ['v2', '/v2/account/activities', toValue(args)] as const
}

export function getV2AccountActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
            >
          >,
          ReturnType<typeof getV2AccountActivitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AccountActivitiesActivityTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>
  >,
) {
  return ['v2', '/v2/account/activities/:activity_type', toValue(args)] as const
}

export function getV2AccountActivitiesActivityTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountActivitiesActivityTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.activities[':activity_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountActivitiesActivityType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AccountActivitiesActivityTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountActivitiesActivityTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountActivitiesActivityTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.activities[':activity_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AccountConfigurationsQueryKey() {
  return ['v2', '/v2/account/configurations'] as const
}

export function getV2AccountConfigurationsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2AccountConfigurationsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.configurations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
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
                Awaited<ReturnType<typeof client.v2.account.configurations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.account.configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getV2AccountConfigurationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2AccountConfigurationsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.configurations.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2AccountConfigurationsMutationKey() {
  return ['v2', '/v2/account/configurations', 'PATCH'] as const
}

export function getPatchV2AccountConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.account.configurations.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AccountConfigurationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.account.configurations.$patch>) {
      return parseResponse(client.v2.account.configurations.$patch(args, options))
    },
  })
}

export function usePatchV2AccountConfigurations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.account.configurations.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.account.configurations.$patch>,
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
  const mutationDefaults = getPatchV2AccountConfigurationsMutationOptions<TError, TOnMutateResult>(
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

export function getV2AccountPortfolioHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.portfolio.history.$get>>,
) {
  return ['v2', '/v2/account/portfolio/history', toValue(args)] as const
}

export function getV2AccountPortfolioHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.portfolio.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AccountPortfolioHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.account.portfolio.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AccountPortfolioHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.account.portfolio.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>
              >
            >
          >,
          ReturnType<typeof getV2AccountPortfolioHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountPortfolioHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AccountPortfolioHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.account.portfolio.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AssetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.assets.$get>>,
) {
  return ['v2', '/v2/assets', toValue(args)] as const
}

export function getV2AssetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.assets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.assets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.assets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
          >,
          ReturnType<typeof getV2AssetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AssetsSymbolOrAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>
  >,
) {
  return ['v2', '/v2/assets/:symbol_or_asset_id', toValue(args)] as const
}

export function getV2AssetsSymbolOrAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AssetsSymbolOrAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.assets[':symbol_or_asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AssetsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AssetsSymbolOrAssetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AssetsSymbolOrAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AssetsSymbolOrAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.assets[':symbol_or_asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CalendarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.calendar.$get>>,
) {
  return ['v2', '/v2/calendar', toValue(args)] as const
}

export function getV2CalendarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.calendar.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CalendarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.calendar.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.calendar.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
          >,
          ReturnType<typeof getV2CalendarQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CalendarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CalendarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.calendar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ClockQueryKey() {
  return ['v2', '/v2/clock'] as const
}

export function getV2ClockQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2ClockQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
          >,
          ReturnType<typeof getV2ClockQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ClockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2ClockQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.clock.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CorporateActionsAnnouncementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.corporate_actions.announcements.$get>>,
) {
  return ['v2', '/v2/corporate_actions/announcements', toValue(args)] as const
}

export function getV2CorporateActionsAnnouncementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.corporate_actions.announcements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CorporateActionsAnnouncementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.corporate_actions.announcements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CorporateActionsAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.corporate_actions.announcements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
              >
            >
          >,
          ReturnType<typeof getV2CorporateActionsAnnouncementsQueryKey>
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
          Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CorporateActionsAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CorporateActionsAnnouncementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.corporate_actions.announcements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CorporateActionsAnnouncementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>
  >,
) {
  return ['v2', '/v2/corporate_actions/announcements/:id', toValue(args)] as const
}

export function getV2CorporateActionsAnnouncementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CorporateActionsAnnouncementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.corporate_actions.announcements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CorporateActionsAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>
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
                  ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CorporateActionsAnnouncementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CorporateActionsAnnouncementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CorporateActionsAnnouncementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.corporate_actions.announcements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2OptionsContractsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.options.contracts.$get>>,
) {
  return ['v2', '/v2/options/contracts', toValue(args)] as const
}

export function getV2OptionsContractsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.options.contracts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OptionsContractsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.options.contracts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OptionsContracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.options.contracts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
            >
          >,
          ReturnType<typeof getV2OptionsContractsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OptionsContractsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OptionsContractsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.options.contracts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2OptionsContractsSymbolOrIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>
  >,
) {
  return ['v2', '/v2/options/contracts/:symbol_or_id', toValue(args)] as const
}

export function getV2OptionsContractsSymbolOrIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OptionsContractsSymbolOrIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.options.contracts[':symbol_or_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OptionsContractsSymbolOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2OptionsContractsSymbolOrIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OptionsContractsSymbolOrIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OptionsContractsSymbolOrIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.options.contracts[':symbol_or_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2OrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.orders.$get>>,
) {
  return ['v2', '/v2/orders', toValue(args)] as const
}

export function getV2OrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
          >,
          ReturnType<typeof getV2OrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2OrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2OrdersMutationKey() {
  return ['v2', '/v2/orders', 'POST'] as const
}

export function getPostV2OrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.orders.$post>) {
      return parseResponse(client.v2.orders.$post(args, options))
    },
  })
}

export function usePostV2Orders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.orders.$post>,
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
  const mutationDefaults = getPostV2OrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2OrdersMutationKey() {
  return ['v2', '/v2/orders', 'DELETE'] as const
}

export function getDeleteV2OrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OrdersMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.orders.$delete(undefined, options))
    },
  })
}

export function useDeleteV2Orders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$delete>>>>
          >,
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
  const mutationDefaults = getDeleteV2OrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2OrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
) {
  return ['v2', '/v2/orders/:order_id', toValue(args)] as const
}

export function getV2OrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.orders[':order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2OrdersOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.orders[':order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2OrdersOrderIdMutationKey() {
  return ['v2', '/v2/orders/:order_id', 'DELETE'] as const
}

export function getDeleteV2OrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2OrdersOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']>) {
      return parseResponse(client.v2.orders[':order_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2OrdersOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.orders)[':order_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2OrdersOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2OrdersOrderIdMutationKey() {
  return ['v2', '/v2/orders/:order_id', 'PATCH'] as const
}

export function getPatchV2OrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2OrdersOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']>) {
      return parseResponse(client.v2.orders[':order_id'].$patch(args, options))
    },
  })
}

export function usePatchV2OrdersOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.orders)[':order_id']['$patch']>,
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
  const mutationDefaults = getPatchV2OrdersOrderIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2OrdersByClientOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>>,
) {
  return ['v2', '/v2/orders:by_client_order_id', toValue(args)] as const
}

export function getV2OrdersByClientOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OrdersByClientOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['orders:by_client_order_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OrdersByClientOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2OrdersByClientOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrdersByClientOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OrdersByClientOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['orders:by_client_order_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PositionsQueryKey() {
  return ['v2', '/v2/positions'] as const
}

export function getV2PositionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2PositionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.positions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Positions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
          >,
          ReturnType<typeof getV2PositionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PositionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2PositionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.positions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2PositionsMutationKey() {
  return ['v2', '/v2/positions', 'DELETE'] as const
}

export function getDeleteV2PositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.positions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PositionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.positions.$delete>) {
      return parseResponse(client.v2.positions.$delete(args, options))
    },
  })
}

export function useDeleteV2Positions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.positions.$delete>,
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
  const mutationDefaults = getDeleteV2PositionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2PositionsSymbolOrAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>
  >,
) {
  return ['v2', '/v2/positions/:symbol_or_asset_id', toValue(args)] as const
}

export function getV2PositionsSymbolOrAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PositionsSymbolOrAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.positions[':symbol_or_asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PositionsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PositionsSymbolOrAssetIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PositionsSymbolOrAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PositionsSymbolOrAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.positions[':symbol_or_asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2PositionsSymbolOrAssetIdMutationKey() {
  return ['v2', '/v2/positions/:symbol_or_asset_id', 'DELETE'] as const
}

export function getDeleteV2PositionsSymbolOrAssetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PositionsSymbolOrAssetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>,
    ) {
      return parseResponse(client.v2.positions[':symbol_or_asset_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2PositionsSymbolOrAssetId<
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
                Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2PositionsSymbolOrAssetIdMutationOptions<
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

export function getPostV2PositionsSymbolOrContractIdDoNotExerciseMutationKey() {
  return ['v2', '/v2/positions/:symbol_or_contract_id/do-not-exercise', 'POST'] as const
}

export function getPostV2PositionsSymbolOrContractIdDoNotExerciseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PositionsSymbolOrContractIdDoNotExerciseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.positions[':symbol_or_contract_id']['do-not-exercise'].$post(args, options),
      )
    },
  })
}

export function usePostV2PositionsSymbolOrContractIdDoNotExercise<
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
                    (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.positions)[':symbol_or_contract_id']['do-not-exercise']['$post']
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
  const mutationDefaults = getPostV2PositionsSymbolOrContractIdDoNotExerciseMutationOptions<
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

export function getPostV2PositionsSymbolOrContractIdExerciseMutationKey() {
  return ['v2', '/v2/positions/:symbol_or_contract_id/exercise', 'POST'] as const
}

export function getPostV2PositionsSymbolOrContractIdExerciseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PositionsSymbolOrContractIdExerciseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.positions[':symbol_or_contract_id'].exercise.$post(args, options),
      )
    },
  })
}

export function usePostV2PositionsSymbolOrContractIdExercise<
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
                    (typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.positions)[':symbol_or_contract_id']['exercise']['$post']
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
  const mutationDefaults = getPostV2PositionsSymbolOrContractIdExerciseMutationOptions<
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

export function getPostV2TokenizationMintMutationKey() {
  return ['v2', '/v2/tokenization/mint', 'POST'] as const
}

export function getPostV2TokenizationMintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.mint.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.tokenization.mint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TokenizationMintMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.tokenization.mint.$post>) {
      return parseResponse(client.v2.tokenization.mint.$post(args, options))
    },
  })
}

export function usePostV2TokenizationMint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.mint.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.tokenization.mint.$post>,
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
  const mutationDefaults = getPostV2TokenizationMintMutationOptions<TError, TOnMutateResult>(
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

export function getV2TokenizationRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tokenization.requests.$get>>,
) {
  return ['v2', '/v2/tokenization/requests', toValue(args)] as const
}

export function getV2TokenizationRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tokenization.requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TokenizationRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tokenization.requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TokenizationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.tokenization.requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
            >
          >,
          ReturnType<typeof getV2TokenizationRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TokenizationRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TokenizationRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tokenization.requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TokenizationRequestsTokenizationRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']>
  >,
) {
  return ['v2', '/v2/tokenization/requests/:tokenization_request_id', toValue(args)] as const
}

export function getV2TokenizationRequestsTokenizationRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TokenizationRequestsTokenizationRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tokenization.requests[':tokenization_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TokenizationRequestsTokenizationRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']>
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
                    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
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
                    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2TokenizationRequestsTokenizationRequestIdQueryKey>
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
            ReturnType<(typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TokenizationRequestsTokenizationRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TokenizationRequestsTokenizationRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tokenization.requests[':tokenization_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TokenizationRequestsByClientRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
  >,
) {
  return ['v2', '/v2/tokenization/requests:by_client_request_id', toValue(args)] as const
}

export function getV2TokenizationRequestsByClientRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TokenizationRequestsByClientRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.tokenization['requests:by_client_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TokenizationRequestsByClientRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
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
                    (typeof client.v2.tokenization)['requests:by_client_request_id']['$get']
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
                    (typeof client.v2.tokenization)['requests:by_client_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2TokenizationRequestsByClientRequestIdQueryKey>
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
            ReturnType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TokenizationRequestsByClientRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TokenizationRequestsByClientRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.tokenization['requests:by_client_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.$get>>,
) {
  return ['v2', '/v2/wallets', toValue(args)] as const
}

export function getV2WalletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WalletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Wallets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
          >,
          ReturnType<typeof getV2WalletsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WalletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WalletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsFeesEstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.fees.estimate.$get>>,
) {
  return ['v2', '/v2/wallets/fees/estimate', toValue(args)] as const
}

export function getV2WalletsFeesEstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.fees.estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WalletsFeesEstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets.fees.estimate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WalletsFeesEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.wallets.fees.estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
            >
          >,
          ReturnType<typeof getV2WalletsFeesEstimateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsFeesEstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WalletsFeesEstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets.fees.estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsTransfersQueryKey() {
  return ['v2', '/v2/wallets/transfers'] as const
}

export function getV2WalletsTransfersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2WalletsTransfersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets.transfers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WalletsTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
            >
          >,
          ReturnType<typeof getV2WalletsTransfersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2WalletsTransfersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets.transfers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsTransfersTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>
  >,
) {
  return ['v2', '/v2/wallets/transfers/:transfer_id', toValue(args)] as const
}

export function getV2WalletsTransfersTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WalletsTransfersTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets.transfers[':transfer_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WalletsTransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WalletsTransfersTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsTransfersTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WalletsTransfersTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets.transfers[':transfer_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsTravelRuleVaspsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>
  >,
) {
  return ['v2', '/v2/wallets/travel-rule/vasps', toValue(args)] as const
}

export function getV2WalletsTravelRuleVaspsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WalletsTravelRuleVaspsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets['travel-rule'].vasps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WalletsTravelRuleVasps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WalletsTravelRuleVaspsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsTravelRuleVaspsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WalletsTravelRuleVaspsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets['travel-rule'].vasps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WalletsWhitelistsQueryKey() {
  return ['v2', '/v2/wallets/whitelists'] as const
}

export function getV2WalletsWhitelistsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2WalletsWhitelistsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.wallets.whitelists.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WalletsWhitelists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
            >
          >,
          ReturnType<typeof getV2WalletsWhitelistsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsWhitelistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2WalletsWhitelistsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.wallets.whitelists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2WalletsWhitelistsMutationKey() {
  return ['v2', '/v2/wallets/whitelists', 'POST'] as const
}

export function getPostV2WalletsWhitelistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.wallets.whitelists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WalletsWhitelistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.wallets.whitelists.$post>) {
      return parseResponse(client.v2.wallets.whitelists.$post(args, options))
    },
  })
}

export function usePostV2WalletsWhitelists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.wallets.whitelists.$post>,
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
  const mutationDefaults = getPostV2WalletsWhitelistsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WalletsWhitelistsWhitelistedAddressIdMutationKey() {
  return ['v2', '/v2/wallets/whitelists/:whitelisted_address_id', 'DELETE'] as const
}

export function getDeleteV2WalletsWhitelistsWhitelistedAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WalletsWhitelistsWhitelistedAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.wallets.whitelists[':whitelisted_address_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2WalletsWhitelistsWhitelistedAddressId<
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
                    (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['$delete']
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
  const mutationDefaults = getDeleteV2WalletsWhitelistsWhitelistedAddressIdMutationOptions<
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

export function getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationKey() {
  return ['v2', '/v2/wallets/whitelists/:whitelisted_address_id/travel-rule-info', 'PATCH'] as const
}

export function getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.wallets.whitelists[':whitelisted_address_id']['travel-rule-info'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfo<
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
                    (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.wallets.whitelists)[':whitelisted_address_id']['travel-rule-info']['$patch']
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
    getPatchV2WalletsWhitelistsWhitelistedAddressIdTravelRuleInfoMutationOptions<
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

export function getV2WatchlistsQueryKey() {
  return ['v2', '/v2/watchlists'] as const
}

export function getV2WatchlistsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2WatchlistsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.watchlists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Watchlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
          >,
          ReturnType<typeof getV2WatchlistsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WatchlistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2WatchlistsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.watchlists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2WatchlistsMutationKey() {
  return ['v2', '/v2/watchlists', 'POST'] as const
}

export function getPostV2WatchlistsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.watchlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WatchlistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.watchlists.$post>) {
      return parseResponse(client.v2.watchlists.$post(args, options))
    },
  })
}

export function usePostV2Watchlists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.watchlists.$post>,
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
  const mutationDefaults = getPostV2WatchlistsMutationOptions<TError, TOnMutateResult>(
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

export function getV2WatchlistsWatchlistIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>,
) {
  return ['v2', '/v2/watchlists/:watchlist_id', toValue(args)] as const
}

export function getV2WatchlistsWatchlistIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WatchlistsWatchlistIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.watchlists[':watchlist_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WatchlistsWatchlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WatchlistsWatchlistIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WatchlistsWatchlistIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WatchlistsWatchlistIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.watchlists[':watchlist_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2WatchlistsWatchlistIdMutationKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'PUT'] as const
}

export function getPutV2WatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>,
    ) {
      return parseResponse(client.v2.watchlists[':watchlist_id'].$put(args, options))
    },
  })
}

export function usePutV2WatchlistsWatchlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$put']>,
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
  const mutationDefaults = getPutV2WatchlistsWatchlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WatchlistsWatchlistIdMutationKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'POST'] as const
}

export function getPostV2WatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>,
    ) {
      return parseResponse(client.v2.watchlists[':watchlist_id'].$post(args, options))
    },
  })
}

export function usePostV2WatchlistsWatchlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$post']>,
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
  const mutationDefaults = getPostV2WatchlistsWatchlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WatchlistsWatchlistIdMutationKey() {
  return ['v2', '/v2/watchlists/:watchlist_id', 'DELETE'] as const
}

export function getDeleteV2WatchlistsWatchlistIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WatchlistsWatchlistIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>,
    ) {
      return parseResponse(client.v2.watchlists[':watchlist_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2WatchlistsWatchlistId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2WatchlistsWatchlistIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WatchlistsWatchlistIdSymbolMutationKey() {
  return ['v2', '/v2/watchlists/:watchlist_id/:symbol', 'DELETE'] as const
}

export function getDeleteV2WatchlistsWatchlistIdSymbolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WatchlistsWatchlistIdSymbolMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>,
    ) {
      return parseResponse(client.v2.watchlists[':watchlist_id'][':symbol'].$delete(args, options))
    },
  })
}

export function useDeleteV2WatchlistsWatchlistIdSymbol<
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
                  ReturnType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.watchlists)[':watchlist_id'][':symbol']['$delete']>,
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
  const mutationDefaults = getDeleteV2WatchlistsWatchlistIdSymbolMutationOptions<
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

export function getV2WatchlistsByNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>>,
) {
  return ['v2', '/v2/watchlists:by_name', toValue(args)] as const
}

export function getV2WatchlistsByNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WatchlistsByNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2['watchlists:by_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WatchlistsByName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WatchlistsByNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WatchlistsByNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WatchlistsByNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2['watchlists:by_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2WatchlistsByNameMutationKey() {
  return ['v2', '/v2/watchlists:by_name', 'PUT'] as const
}

export function getPutV2WatchlistsByNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2WatchlistsByNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']>) {
      return parseResponse(client.v2['watchlists:by_name'].$put(args, options))
    },
  })
}

export function usePutV2WatchlistsByName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['watchlists:by_name']['$put']>,
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
  const mutationDefaults = getPutV2WatchlistsByNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WatchlistsByNameMutationKey() {
  return ['v2', '/v2/watchlists:by_name', 'POST'] as const
}

export function getPostV2WatchlistsByNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WatchlistsByNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']>) {
      return parseResponse(client.v2['watchlists:by_name'].$post(args, options))
    },
  })
}

export function usePostV2WatchlistsByName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['watchlists:by_name']['$post']>,
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
  const mutationDefaults = getPostV2WatchlistsByNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WatchlistsByNameMutationKey() {
  return ['v2', '/v2/watchlists:by_name', 'DELETE'] as const
}

export function getDeleteV2WatchlistsByNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WatchlistsByNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']>) {
      return parseResponse(client.v2['watchlists:by_name'].$delete(args, options))
    },
  })
}

export function useDeleteV2WatchlistsByName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2)['watchlists:by_name']['$delete']>,
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
  const mutationDefaults = getDeleteV2WatchlistsByNameMutationOptions<TError, TOnMutateResult>(
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

export function getV3CalendarMarketQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.calendar)[':market']['$get']>>,
) {
  return ['v3', '/v3/calendar/:market', toValue(args)] as const
}

export function getV3CalendarMarketQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.calendar)[':market']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3CalendarMarketQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.calendar[':market'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3CalendarMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.calendar)[':market']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3CalendarMarketQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3CalendarMarketQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3CalendarMarketQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.calendar[':market'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ClockQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.clock.$get>>,
) {
  return ['v3', '/v3/clock', toValue(args)] as const
}

export function getV3ClockQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.clock.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ClockQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.clock.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.clock.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
          >,
          ReturnType<typeof getV3ClockQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ClockQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ClockQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.clock.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
