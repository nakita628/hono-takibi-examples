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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1StatisticsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/statistics.list', keyArgs] as const
}

export function getApiV1StatisticsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatisticsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['statistics.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatisticsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatisticsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatisticsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatisticsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['statistics.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statistics.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/statistics', keyArgs] as const
}

export function getApiV1StatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Statistics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>
            >
          >,
          ReturnType<typeof getApiV1StatisticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/users/new-users', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersNewUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardUsersNewUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['new-users'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardUsersNewUsersQueryKey>
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
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersNewUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardUsersNewUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].users['new-users'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersActiveUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/users/active-users', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersActiveUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardUsersActiveUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['active-users'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardUsersActiveUsersQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersActiveUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardUsersActiveUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].users['active-users'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week',
    keyArgs,
  ] as const
}

export function getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/hourly-data', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardUsersChatBusierHourlyDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/weekly-data', keyArgs] as const
}

export function getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardUsersChatBusierWeeklyDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesMessagesSentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/messages/messages-sent', keyArgs] as const
}

export function getApiV1EngagementDashboardMessagesMessagesSentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardMessagesMessagesSentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardMessagesMessagesSentQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesMessagesSentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardMessagesMessagesSentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesOriginQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/messages/origin', keyArgs] as const
}

export function getApiV1EngagementDashboardMessagesOriginQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardMessagesOriginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages.origin.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardMessagesOriginQueryKey>
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
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesOriginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardMessagesOriginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].messages.origin.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'api',
    '/api/v1/engagement-dashboard/messages/top-five-popular-channels',
    keyArgs,
  ] as const
}

export function getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey>
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
              (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1EngagementDashboardMessagesTopFivePopularChannelsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1EngagementDashboardChannelsListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/engagement-dashboard/channels/list', keyArgs] as const
}

export function getApiV1EngagementDashboardChannelsListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EngagementDashboardChannelsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['engagement-dashboard'].channels.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
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
                    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
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
                    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1EngagementDashboardChannelsListQueryKey>
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
            ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EngagementDashboardChannelsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EngagementDashboardChannelsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['engagement-dashboard'].channels.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
