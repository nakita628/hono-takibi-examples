import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
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

export function getV1CustomerAppsCountChromeAppRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
  >,
) {
  return ['v1', '/v1/:customer/apps:countChromeAppRequests', toValue(args)] as const
}

export function getV1CustomerAppsCountChromeAppRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerAppsCountChromeAppRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['apps:countChromeAppRequests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerAppsCountChromeAppRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
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
                  ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerAppsCountChromeAppRequestsQueryKey>
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
            ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerAppsCountChromeAppRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomerAppsCountChromeAppRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['apps:countChromeAppRequests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
    >
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeBrowsersNeedingAttention', toValue(args)] as const
}

export function getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsCountChromeBrowsersNeedingAttention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey>
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
              (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/:customer/reports:countChromeDevicesReachingAutoExpirationDate',
    toValue(args),
  ] as const
}

export function getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1CustomerReportsCountChromeDevicesReachingAutoExpirationDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey
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
              (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
    >
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeDevicesThatNeedAttention', toValue(args)] as const
}

export function getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsCountChromeDevicesThatNeedAttention<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey>
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
              (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
    >
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeHardwareFleetDevices', toValue(args)] as const
}

export function getV1CustomerReportsCountChromeHardwareFleetDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsCountChromeHardwareFleetDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
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
                    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey>
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
              (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountChromeVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeVersions', toValue(args)] as const
}

export function getV1CustomerReportsCountChromeVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsCountChromeVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeVersions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsCountChromeVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
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
                  ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsCountChromeVersionsQueryKey>
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
            ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountChromeVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomerReportsCountChromeVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countChromeVersions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsCountInstalledAppsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
  >,
) {
  return ['v1', '/v1/:customer/reports:countInstalledApps', toValue(args)] as const
}

export function getV1CustomerReportsCountInstalledAppsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsCountInstalledAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:countInstalledApps'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsCountInstalledApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
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
                  ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsCountInstalledAppsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsCountInstalledAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomerReportsCountInstalledAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:countInstalledApps'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1CustomerReportsFindInstalledAppDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
  >,
) {
  return ['v1', '/v1/:customer/reports:findInstalledAppDevices', toValue(args)] as const
}

export function getV1CustomerReportsFindInstalledAppDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CustomerReportsFindInstalledAppDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':customer']['reports:findInstalledAppDevices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1CustomerReportsFindInstalledAppDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
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
                    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
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
                    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1CustomerReportsFindInstalledAppDevicesQueryKey>
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
            ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerReportsFindInstalledAppDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CustomerReportsFindInstalledAppDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':customer']['reports:findInstalledAppDevices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentTelemetryDevicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>
  >,
) {
  return ['v1', '/v1/:parent/telemetry/devices', toValue(args)] as const
}

export function getV1ParentTelemetryDevicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentTelemetryDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].telemetry.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentTelemetryDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentTelemetryDevicesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTelemetryDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentTelemetryDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].telemetry.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentTelemetryEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>
  >,
) {
  return ['v1', '/v1/:parent/telemetry/events', toValue(args)] as const
}

export function getV1ParentTelemetryEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentTelemetryEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].telemetry.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentTelemetryEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentTelemetryEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTelemetryEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentTelemetryEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].telemetry.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentTelemetryUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>
  >,
) {
  return ['v1', '/v1/:parent/telemetry/users', toValue(args)] as const
}

export function getV1ParentTelemetryUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentTelemetryUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].telemetry.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentTelemetryUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentTelemetryUsersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTelemetryUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentTelemetryUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].telemetry.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
