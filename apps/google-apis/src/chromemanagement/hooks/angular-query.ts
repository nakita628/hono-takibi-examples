import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1CustomerAppsCountChromeAppRequestsQueryKey(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
) {
  return ['v1', '/v1/:customer/apps:countChromeAppRequests', args] as const
}

export function getV1CustomerAppsCountChromeAppRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerAppsCountChromeAppRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['apps:countChromeAppRequests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerAppsCountChromeAppRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerAppsCountChromeAppRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeBrowsersNeedingAttention', args] as const
}

export function getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountChromeBrowsersNeedingAttention<
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
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountChromeBrowsersNeedingAttentionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeDevicesReachingAutoExpirationDate', args] as const
}

export function getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountChromeDevicesReachingAutoExpirationDate<
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
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeDevicesThatNeedAttention', args] as const
}

export function getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountChromeDevicesThatNeedAttention<
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
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountChromeDevicesThatNeedAttentionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeHardwareFleetDevices', args] as const
}

export function getV1CustomerReportsCountChromeHardwareFleetDevicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountChromeHardwareFleetDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountChromeHardwareFleetDevices<
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
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountChromeHardwareFleetDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountChromeVersionsQueryKey(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
) {
  return ['v1', '/v1/:customer/reports:countChromeVersions', args] as const
}

export function getV1CustomerReportsCountChromeVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountChromeVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countChromeVersions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountChromeVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeVersions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountChromeVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsCountInstalledAppsQueryKey(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
) {
  return ['v1', '/v1/:customer/reports:countInstalledApps', args] as const
}

export function getV1CustomerReportsCountInstalledAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsCountInstalledAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:countInstalledApps'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsCountInstalledApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:countInstalledApps']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1CustomerReportsCountInstalledAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsCountInstalledAppsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1CustomerReportsFindInstalledAppDevicesQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:findInstalledAppDevices', args] as const
}

export function getV1CustomerReportsFindInstalledAppDevicesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1CustomerReportsFindInstalledAppDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer']['reports:findInstalledAppDevices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1CustomerReportsFindInstalledAppDevices<
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
  args: () => InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV1CustomerReportsFindInstalledAppDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1CustomerReportsFindInstalledAppDevicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ParentTelemetryDevicesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/devices', args] as const
}

export function getV1ParentTelemetryDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ParentTelemetryDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].telemetry.devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentTelemetryDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentTelemetryDevicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentTelemetryEventsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/events', args] as const
}

export function getV1ParentTelemetryEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ParentTelemetryEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].telemetry.events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentTelemetryEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentTelemetryEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ParentTelemetryUsersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/users', args] as const
}

export function getV1ParentTelemetryUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1ParentTelemetryUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].telemetry.users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentTelemetryUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ParentTelemetryUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
