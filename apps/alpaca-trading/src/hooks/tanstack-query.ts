import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function getV1LocatesQueryKey(args: InferRequestType<typeof client.v1.locates.$get>) {
  return ['v1', '/v1/locates', args] as const
}

export function getV1LocatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.locates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LocatesQueryKey>
  >({
    queryKey: getV1LocatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Locates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Locates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.locates.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
) {
  return ['v1', '/v1/locates/:locate_id', args] as const
}

export function getV1LocatesLocateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocatesLocateIdQueryKey>
  >({
    queryKey: getV1LocatesLocateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locates[':locate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LocatesLocateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV1LocatesLocateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocatesLocateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LocatesLocateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.locates)[':locate_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.locates)[':locate_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocatesLocateIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocatesLocateIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1LocatesQuotesQueryKey(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
) {
  return ['v1', '/v1/locates/quotes', args] as const
}

export function getV1LocatesQuotesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.locates.quotes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1LocatesQuotesQueryKey>
  >({
    queryKey: getV1LocatesQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.locates.quotes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1LocatesQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocatesQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LocatesQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1LocatesQuotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.locates.quotes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.locates.quotes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LocatesQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LocatesQuotesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2beta1EventsActivitiesQueryKey(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
) {
  return ['v2beta1', '/v2beta1/events/activities', args] as const
}

export function getV2beta1EventsActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
  >({
    queryKey: getV2beta1EventsActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta1.events.activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta1EventsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
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
      ...getV2beta1EventsActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2beta1EventsActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2beta1.events.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2beta1.events.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta1EventsActivitiesQueryKey>
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
      ...getV2beta1EventsActivitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2AccountQueryKey() {
  return ['v2', '/v2/account'] as const
}

export function getV2AccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AccountQueryKey>
  >({
    queryKey: getV2AccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AccountQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2AccountActivitiesQueryKey(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
) {
  return ['v2', '/v2/account/activities', args] as const
}

export function getV2AccountActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountActivitiesQueryKey>
  >({
    queryKey: getV2AccountActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.activities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2AccountActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AccountActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2AccountActivities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.activities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.activities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountActivitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AccountActivitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2AccountActivitiesActivityTypeQueryKey(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
) {
  return ['v2', '/v2/account/activities/:activity_type', args] as const
}

export function getV2AccountActivitiesActivityTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AccountActivitiesActivityTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.activities[':activity_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2AccountActivitiesActivityTypeQueryKey>
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
      ...getV2AccountActivitiesActivityTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2AccountActivitiesActivityType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.activities)[':activity_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.account.activities)[':activity_type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2AccountActivitiesActivityTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2AccountConfigurationsQueryKey() {
  return ['v2', '/v2/account/configurations'] as const
}

export function getV2AccountConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountConfigurationsQueryKey>
  >({
    queryKey: getV2AccountConfigurationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.configurations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AccountConfigurationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2AccountConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.configurations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AccountConfigurationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
) {
  return ['v2', '/v2/account/portfolio/history', args] as const
}

export function getV2AccountPortfolioHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountPortfolioHistoryQueryKey>
  >({
    queryKey: getV2AccountPortfolioHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.portfolio.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2AccountPortfolioHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2AccountPortfolioHistoryQueryKey>
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
      ...getV2AccountPortfolioHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2AccountPortfolioHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.account.portfolio.history.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.account.portfolio.history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountPortfolioHistoryQueryKey>
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
      ...getV2AccountPortfolioHistoryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2AssetsQueryKey(args: InferRequestType<typeof client.v2.assets.$get>) {
  return ['v2', '/v2/assets', args] as const
}

export function getV2AssetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.assets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AssetsQueryKey>
  >({
    queryKey: getV2AssetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.assets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.assets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Assets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.assets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.assets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AssetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2AssetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2AssetsSymbolOrAssetIdQueryKey(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
) {
  return ['v2', '/v2/assets/:symbol_or_asset_id', args] as const
}

export function getV2AssetsSymbolOrAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AssetsSymbolOrAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.assets[':symbol_or_asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2AssetsSymbolOrAssetIdQueryKey>
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
      ...getV2AssetsSymbolOrAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2AssetsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.assets)[':symbol_or_asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2AssetsSymbolOrAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CalendarQueryKey(args: InferRequestType<typeof client.v2.calendar.$get>) {
  return ['v2', '/v2/calendar', args] as const
}

export function getV2CalendarQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.calendar.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2CalendarQueryKey>
  >({
    queryKey: getV2CalendarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.calendar.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.calendar.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2CalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Calendar<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.calendar.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.calendar.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CalendarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2CalendarQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2ClockQueryKey() {
  return ['v2', '/v2/clock'] as const
}

export function getV2ClockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ClockQueryKey>
  >({
    queryKey: getV2ClockQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.clock.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2ClockQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2ClockQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2CorporateActionsAnnouncementsQueryKey(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
) {
  return ['v2', '/v2/corporate_actions/announcements', args] as const
}

export function getV2CorporateActionsAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CorporateActionsAnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.corporate_actions.announcements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2CorporateActionsAnnouncementsQueryKey>
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
      ...getV2CorporateActionsAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CorporateActionsAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.corporate_actions.announcements.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.corporate_actions.announcements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2CorporateActionsAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2CorporateActionsAnnouncementsIdQueryKey(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
) {
  return ['v2', '/v2/corporate_actions/announcements/:id', args] as const
}

export function getV2CorporateActionsAnnouncementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CorporateActionsAnnouncementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.corporate_actions.announcements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getV2CorporateActionsAnnouncementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2CorporateActionsAnnouncementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.corporate_actions.announcements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2CorporateActionsAnnouncementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2OptionsContractsQueryKey(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
) {
  return ['v2', '/v2/options/contracts', args] as const
}

export function getV2OptionsContractsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.options.contracts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OptionsContractsQueryKey>
  >({
    queryKey: getV2OptionsContractsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.options.contracts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2OptionsContracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OptionsContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OptionsContractsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2OptionsContracts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.options.contracts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.options.contracts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OptionsContractsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OptionsContractsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2OptionsContractsSymbolOrIdQueryKey(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
) {
  return ['v2', '/v2/options/contracts/:symbol_or_id', args] as const
}

export function getV2OptionsContractsSymbolOrIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2OptionsContractsSymbolOrIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.options.contracts[':symbol_or_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2OptionsContractsSymbolOrIdQueryKey>
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
      ...getV2OptionsContractsSymbolOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2OptionsContractsSymbolOrId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.options.contracts)[':symbol_or_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2OptionsContractsSymbolOrIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2OrdersQueryKey(args: InferRequestType<typeof client.v2.orders.$get>) {
  return ['v2', '/v2/orders', args] as const
}

export function getV2OrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2OrdersQueryKey>
  >({
    queryKey: getV2OrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Orders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.orders.$post>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.orders.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
) {
  return ['v2', '/v2/orders/:order_id', args] as const
}

export function getV2OrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2OrdersOrderIdQueryKey>
  >({
    queryKey: getV2OrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.orders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2OrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.orders)[':order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.orders)[':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2OrdersOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
) {
  return ['v2', '/v2/orders:by_client_order_id', args] as const
}

export function getV2OrdersByClientOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2OrdersByClientOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['orders:by_client_order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2OrdersByClientOrderIdQueryKey>
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
      ...getV2OrdersByClientOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2OrdersByClientOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)['orders:by_client_order_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['orders:by_client_order_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2OrdersByClientOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2PositionsQueryKey() {
  return ['v2', '/v2/positions'] as const
}

export function getV2PositionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PositionsQueryKey>
  >({
    queryKey: getV2PositionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.positions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Positions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2PositionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Positions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PositionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2PositionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.positions.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.positions.$delete>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
) {
  return ['v2', '/v2/positions/:symbol_or_asset_id', args] as const
}

export function getV2PositionsSymbolOrAssetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PositionsSymbolOrAssetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.positions[':symbol_or_asset_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2PositionsSymbolOrAssetIdQueryKey>
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
      ...getV2PositionsSymbolOrAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2PositionsSymbolOrAssetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.positions)[':symbol_or_asset_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2PositionsSymbolOrAssetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
) {
  return ['v2', '/v2/tokenization/requests', args] as const
}

export function getV2TokenizationRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TokenizationRequestsQueryKey>
  >({
    queryKey: getV2TokenizationRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tokenization.requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TokenizationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TokenizationRequestsQueryKey>
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
      ...getV2TokenizationRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TokenizationRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.tokenization.requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.tokenization.requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TokenizationRequestsQueryKey>
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
      ...getV2TokenizationRequestsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TokenizationRequestsTokenizationRequestIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
) {
  return ['v2', '/v2/tokenization/requests/:tokenization_request_id', args] as const
}

export function getV2TokenizationRequestsTokenizationRequestIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TokenizationRequestsTokenizationRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tokenization.requests[':tokenization_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2TokenizationRequestsTokenizationRequestIdQueryKey>
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
      ...getV2TokenizationRequestsTokenizationRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TokenizationRequestsTokenizationRequestId<
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
  args: InferRequestType<
    (typeof client.v2.tokenization.requests)[':tokenization_request_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getV2TokenizationRequestsTokenizationRequestIdQueryKey>
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
      ...getV2TokenizationRequestsTokenizationRequestIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2TokenizationRequestsByClientRequestIdQueryKey(
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
) {
  return ['v2', '/v2/tokenization/requests:by_client_request_id', args] as const
}

export function getV2TokenizationRequestsByClientRequestIdQueryOptions<
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
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TokenizationRequestsByClientRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tokenization['requests:by_client_request_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getV2TokenizationRequestsByClientRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TokenizationRequestsByClientRequestId<
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
  args: InferRequestType<(typeof client.v2.tokenization)['requests:by_client_request_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2TokenizationRequestsByClientRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2WalletsQueryKey(args: InferRequestType<typeof client.v2.wallets.$get>) {
  return ['v2', '/v2/wallets', args] as const
}

export function getV2WalletsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.wallets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2WalletsQueryKey>
  >({
    queryKey: getV2WalletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Wallets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.wallets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WalletsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Wallets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.wallets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WalletsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2WalletsFeesEstimateQueryKey(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
) {
  return ['v2', '/v2/wallets/fees/estimate', args] as const
}

export function getV2WalletsFeesEstimateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsFeesEstimateQueryKey>
  >({
    queryKey: getV2WalletsFeesEstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets.fees.estimate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WalletsFeesEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsFeesEstimateQueryKey>
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
      ...getV2WalletsFeesEstimateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WalletsFeesEstimate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.wallets.fees.estimate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.fees.estimate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsFeesEstimateQueryKey>
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
      ...getV2WalletsFeesEstimateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2WalletsTransfersQueryKey() {
  return ['v2', '/v2/wallets/transfers'] as const
}

export function getV2WalletsTransfersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsTransfersQueryKey>
  >({
    queryKey: getV2WalletsTransfersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets.transfers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WalletsTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WalletsTransfersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2WalletsTransfers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.transfers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsTransfersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WalletsTransfersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV2WalletsTransfersTransferIdQueryKey(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
) {
  return ['v2', '/v2/wallets/transfers/:transfer_id', args] as const
}

export function getV2WalletsTransfersTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2WalletsTransfersTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets.transfers[':transfer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2WalletsTransfersTransferIdQueryKey>
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
      ...getV2WalletsTransfersTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WalletsTransfersTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.wallets.transfers)[':transfer_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2WalletsTransfersTransferIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2WalletsTravelRuleVaspsQueryKey(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
) {
  return ['v2', '/v2/wallets/travel-rule/vasps', args] as const
}

export function getV2WalletsTravelRuleVaspsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2WalletsTravelRuleVaspsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets['travel-rule'].vasps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2WalletsTravelRuleVaspsQueryKey>
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
      ...getV2WalletsTravelRuleVaspsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WalletsTravelRuleVasps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.wallets)['travel-rule']['vasps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2WalletsTravelRuleVaspsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2WalletsWhitelistsQueryKey() {
  return ['v2', '/v2/wallets/whitelists'] as const
}

export function getV2WalletsWhitelistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WalletsWhitelistsQueryKey>
  >({
    queryKey: getV2WalletsWhitelistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.wallets.whitelists.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WalletsWhitelists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsWhitelistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WalletsWhitelistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2WalletsWhitelists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.wallets.whitelists.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WalletsWhitelistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WalletsWhitelistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function getV2WatchlistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WatchlistsQueryKey>
  >({
    queryKey: getV2WatchlistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.watchlists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Watchlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WatchlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WatchlistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Watchlists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2WatchlistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WatchlistsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.watchlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.watchlists.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
) {
  return ['v2', '/v2/watchlists/:watchlist_id', args] as const
}

export function getV2WatchlistsWatchlistIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2WatchlistsWatchlistIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.watchlists[':watchlist_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2WatchlistsWatchlistIdQueryKey>
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
      ...getV2WatchlistsWatchlistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2WatchlistsWatchlistId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.watchlists)[':watchlist_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getV2WatchlistsWatchlistIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
) {
  return ['v2', '/v2/watchlists:by_name', args] as const
}

export function getV2WatchlistsByNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WatchlistsByNameQueryKey>
  >({
    queryKey: getV2WatchlistsByNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['watchlists:by_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2WatchlistsByName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV2WatchlistsByNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2WatchlistsByNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2WatchlistsByName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2)['watchlists:by_name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['watchlists:by_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2WatchlistsByNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2WatchlistsByNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
) {
  return ['v3', '/v3/calendar/:market', args] as const
}

export function getV3CalendarMarketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3CalendarMarketQueryKey>
  >({
    queryKey: getV3CalendarMarketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.calendar[':market'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3CalendarMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getV3CalendarMarketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3CalendarMarketQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3CalendarMarket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.calendar)[':market']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.calendar)[':market']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3CalendarMarketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3CalendarMarketQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3ClockQueryKey(args: InferRequestType<typeof client.v3.clock.$get>) {
  return ['v3', '/v3/clock', args] as const
}

export function getV3ClockQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.clock.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3ClockQueryKey>
  >({
    queryKey: getV3ClockQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.clock.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.clock.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV3ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3ClockQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3Clock<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.clock.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.clock.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV3ClockQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3ClockQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
