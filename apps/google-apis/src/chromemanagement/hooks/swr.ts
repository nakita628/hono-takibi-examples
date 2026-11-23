import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1CustomerAppsCountChromeAppRequestsKey(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
) {
  return ['v1', '/v1/:customer/apps:countChromeAppRequests', args] as const
}

export function useGetV1CustomerAppsCountChromeAppRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
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
        ? getGetV1CustomerAppsCountChromeAppRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['apps:countChromeAppRequests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerAppsCountChromeAppRequests<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
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
        ? getGetV1CustomerAppsCountChromeAppRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['apps:countChromeAppRequests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['apps:countChromeAppRequests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountChromeBrowsersNeedingAttentionKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeBrowsersNeedingAttention', args] as const
}

export function useGetV1CustomerReportsCountChromeBrowsersNeedingAttention<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeBrowsersNeedingAttentionKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
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
          client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountChromeBrowsersNeedingAttention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeBrowsersNeedingAttentionKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeBrowsersNeedingAttention']['$get']
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
          client.v1[':customer']['reports:countChromeBrowsersNeedingAttention'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeDevicesReachingAutoExpirationDate', args] as const
}

export function useGetV1CustomerReportsCountChromeDevicesReachingAutoExpirationDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
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
          client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountChromeDevicesReachingAutoExpirationDate<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeDevicesReachingAutoExpirationDate']['$get']
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
          client.v1[':customer']['reports:countChromeDevicesReachingAutoExpirationDate'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountChromeDevicesThatNeedAttentionKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeDevicesThatNeedAttention', args] as const
}

export function useGetV1CustomerReportsCountChromeDevicesThatNeedAttention<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeDevicesThatNeedAttentionKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
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
          client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountChromeDevicesThatNeedAttention<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeDevicesThatNeedAttentionKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeDevicesThatNeedAttention']['$get']
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
          client.v1[':customer']['reports:countChromeDevicesThatNeedAttention'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountChromeHardwareFleetDevicesKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:countChromeHardwareFleetDevices', args] as const
}

export function useGetV1CustomerReportsCountChromeHardwareFleetDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeHardwareFleetDevicesKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
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
          client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountChromeHardwareFleetDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV1CustomerReportsCountChromeHardwareFleetDevicesKey(args)
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
                (typeof client.v1)[':customer']['reports:countChromeHardwareFleetDevices']['$get']
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
          client.v1[':customer']['reports:countChromeHardwareFleetDevices'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountChromeVersionsKey(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
) {
  return ['v1', '/v1/:customer/reports:countChromeVersions', args] as const
}

export function useGetV1CustomerReportsCountChromeVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
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
        ? getGetV1CustomerReportsCountChromeVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:countChromeVersions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountChromeVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
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
        ? getGetV1CustomerReportsCountChromeVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countChromeVersions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:countChromeVersions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsCountInstalledAppsKey(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
) {
  return ['v1', '/v1/:customer/reports:countInstalledApps', args] as const
}

export function useGetV1CustomerReportsCountInstalledApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
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
        ? getGetV1CustomerReportsCountInstalledAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:countInstalledApps'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsCountInstalledApps<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
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
        ? getGetV1CustomerReportsCountInstalledAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:countInstalledApps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:countInstalledApps'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerReportsFindInstalledAppDevicesKey(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
) {
  return ['v1', '/v1/:customer/reports:findInstalledAppDevices', args] as const
}

export function useGetV1CustomerReportsFindInstalledAppDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
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
        ? getGetV1CustomerReportsFindInstalledAppDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:findInstalledAppDevices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerReportsFindInstalledAppDevices<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
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
        ? getGetV1CustomerReportsFindInstalledAppDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':customer']['reports:findInstalledAppDevices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':customer']['reports:findInstalledAppDevices'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1NameKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function useGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentTelemetryDevicesKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/devices', args] as const
}

export function useGetV1ParentTelemetryDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
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
        ? getGetV1ParentTelemetryDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentTelemetryDevices<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
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
        ? getGetV1ParentTelemetryDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['devices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentTelemetryEventsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/events', args] as const
}

export function useGetV1ParentTelemetryEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
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
        ? getGetV1ParentTelemetryEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentTelemetryEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
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
        ? getGetV1ParentTelemetryEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentTelemetryUsersKey(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
) {
  return ['v1', '/v1/:parent/telemetry/users', args] as const
}

export function useGetV1ParentTelemetryUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
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
        ? getGetV1ParentTelemetryUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentTelemetryUsers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
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
        ? getGetV1ParentTelemetryUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['telemetry']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].telemetry.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
