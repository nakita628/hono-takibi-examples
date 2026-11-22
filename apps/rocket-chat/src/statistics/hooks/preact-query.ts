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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1StatisticsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/statistics.list', keyArgs] as const
}

export function getApiV1StatisticsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatisticsListQueryKey>
  >({
    queryKey: getApiV1StatisticsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['statistics.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1StatisticsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatisticsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1StatisticsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1StatisticsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatisticsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1StatisticsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1StatisticsQueryKey(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/statistics', keyArgs] as const
}

export function getApiV1StatisticsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.statistics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatisticsQueryKey>
  >({
    queryKey: getApiV1StatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.statistics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Statistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1StatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Statistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatisticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1StatisticsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1StatisticsTelemetryMutationKey() {
  return ['api', '/api/v1/statistics.telemetry', 'POST'] as const
}

export function getPostApiV1StatisticsTelemetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['statistics.telemetry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatisticsTelemetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']>,
    ) {
      return parseResponse(client.api.v1['statistics.telemetry'].$post(args, options))
    },
  })
}

export function usePostApiV1StatisticsTelemetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['statistics.telemetry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatisticsTelemetryMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EngagementDashboardUsersNewUsersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/new-users', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersNewUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersNewUsersQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardUsersNewUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['new-users'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardUsersNewUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersNewUsersQueryKey>
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
      ...getApiV1EngagementDashboardUsersNewUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardUsersNewUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersNewUsersQueryKey>
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
      ...getApiV1EngagementDashboardUsersNewUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersActiveUsersQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/active-users', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersActiveUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersActiveUsersQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardUsersActiveUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['active-users'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardUsersActiveUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersActiveUsersQueryKey>
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
      ...getApiV1EngagementDashboardUsersActiveUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardUsersActiveUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersActiveUsersQueryKey>
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
      ...getApiV1EngagementDashboardUsersActiveUsersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week',
    keyArgs,
  ] as const
}

export function getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey>
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
      ...getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeek<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey>
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
      ...getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/hourly-data', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardUsersChatBusierHourlyData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey>
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
      ...getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardUsersChatBusierHourlyData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey>
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
      ...getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/weekly-data', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardUsersChatBusierWeeklyData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey>
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
      ...getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardUsersChatBusierWeeklyData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey>
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
      ...getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesMessagesSentQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/messages/messages-sent', keyArgs] as const
}

export function getApiV1EngagementDashboardMessagesMessagesSentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesMessagesSentQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardMessagesMessagesSentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardMessagesMessagesSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesMessagesSentQueryKey>
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
      ...getApiV1EngagementDashboardMessagesMessagesSentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardMessagesMessagesSent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesMessagesSentQueryKey>
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
      ...getApiV1EngagementDashboardMessagesMessagesSentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesOriginQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/messages/origin', keyArgs] as const
}

export function getApiV1EngagementDashboardMessagesOriginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesOriginQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardMessagesOriginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages.origin.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardMessagesOrigin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesOriginQueryKey>
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
      ...getApiV1EngagementDashboardMessagesOriginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardMessagesOrigin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesOriginQueryKey>
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
      ...getApiV1EngagementDashboardMessagesOriginQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/v1/engagement-dashboard/messages/top-five-popular-channels',
    keyArgs,
  ] as const
}

export function getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardMessagesTopFivePopularChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey>
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
      ...getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardMessagesTopFivePopularChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey>
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
      ...getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardChannelsListQueryKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/channels/list', keyArgs] as const
}

export function getApiV1EngagementDashboardChannelsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardChannelsListQueryKey>
  >({
    queryKey: getApiV1EngagementDashboardChannelsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].channels.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1EngagementDashboardChannelsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardChannelsListQueryKey>
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
      ...getApiV1EngagementDashboardChannelsListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1EngagementDashboardChannelsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EngagementDashboardChannelsListQueryKey>
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
      ...getApiV1EngagementDashboardChannelsListQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
