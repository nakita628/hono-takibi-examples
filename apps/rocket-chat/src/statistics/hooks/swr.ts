import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV1StatisticsListKey(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/statistics.list', keyArgs] as const
}

export function useGetApiV1StatisticsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1StatisticsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['statistics.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1StatisticsList<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1)['statistics.list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1StatisticsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1)['statistics.list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['statistics.list'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1StatisticsKey(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/statistics', keyArgs] as const
}

export function useGetApiV1Statistics<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1StatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Statistics<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1StatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statistics.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1StatisticsTelemetryKey() {
  return ['api', '/api/v1/statistics.telemetry', 'POST'] as const
}

export function usePostApiV1StatisticsTelemetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['statistics.telemetry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StatisticsTelemetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1)['statistics.telemetry']['$post']> },
      ) => parseResponse(client.api.v1['statistics.telemetry'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardUsersNewUsersKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/new-users', keyArgs] as const
}

export function useGetApiV1EngagementDashboardUsersNewUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersNewUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['new-users'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardUsersNewUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['new-users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersNewUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['new-users'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardUsersActiveUsersKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/active-users', keyArgs] as const
}

export function useGetApiV1EngagementDashboardUsersActiveUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersActiveUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['active-users'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardUsersActiveUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['active-users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersActiveUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['active-users'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekKey(
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

export function useGetApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeek<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeek<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['users-by-time-of-the-day-in-a-week']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersUsersByTimeOfTheDayInAWeekKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['users-by-time-of-the-day-in-a-week'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardUsersChatBusierHourlyDataKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/hourly-data', keyArgs] as const
}

export function useGetApiV1EngagementDashboardUsersChatBusierHourlyData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersChatBusierHourlyDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardUsersChatBusierHourlyData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['hourly-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersChatBusierHourlyDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['hourly-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardUsersChatBusierWeeklyDataKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/users/chat-busier/weekly-data', keyArgs] as const
}

export function useGetApiV1EngagementDashboardUsersChatBusierWeeklyData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersChatBusierWeeklyDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardUsersChatBusierWeeklyData<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['users']['chat-busier']['weekly-data']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardUsersChatBusierWeeklyDataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].users['chat-busier']['weekly-data'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardMessagesMessagesSentKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/messages/messages-sent', keyArgs] as const
}

export function useGetApiV1EngagementDashboardMessagesMessagesSent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesMessagesSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardMessagesMessagesSent<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['messages-sent']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesMessagesSentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages['messages-sent'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardMessagesOriginKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/messages/origin', keyArgs] as const
}

export function useGetApiV1EngagementDashboardMessagesOrigin<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesOriginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages.origin.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardMessagesOrigin<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['origin']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesOriginKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages.origin.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardMessagesTopFivePopularChannelsKey(
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

export function useGetApiV1EngagementDashboardMessagesTopFivePopularChannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesTopFivePopularChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardMessagesTopFivePopularChannels<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['messages']['top-five-popular-channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardMessagesTopFivePopularChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].messages['top-five-popular-channels'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EngagementDashboardChannelsListKey(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/engagement-dashboard/channels/list', keyArgs] as const
}

export function useGetApiV1EngagementDashboardChannelsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardChannelsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].channels.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EngagementDashboardChannelsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1EngagementDashboardChannelsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1)['engagement-dashboard']['channels']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1['engagement-dashboard'].channels.list.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
