import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getIpKey() {
  return ['ip'] as const
}

export function getIpTxtKey() {
  return ['ip.txt'] as const
}

export function getTimezoneKey() {
  return ['timezone'] as const
}

export function getTimezoneTxtKey() {
  return ['timezone.txt'] as const
}

export function getGetIpKey() {
  return ['ip', '/ip'] as const
}

export function useGetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ip.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ip.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ip.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetIpTxtKey() {
  return ['ip.txt', '/ip.txt'] as const
}

export function useGetIpTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetIpTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip.txt']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ip.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpIpv4Key(args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>) {
  return ['ip', '/ip/:ipv4', args] as const
}

export function useGetIpIpv4<TError = unknown>(
  args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpIpv4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip[':ipv4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpIpv4<TError = unknown>(
  args: InferRequestType<(typeof client.ip)[':ipv4']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpIpv4Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip[':ipv4'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpIpv4TxtKey(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
) {
  return ['ip', '/ip/:ipv4.txt', args] as const
}

export function useGetIpIpv4Txt<TError = unknown>(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIpIpv4TxtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip[':ipv4.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpIpv4Txt<TError = unknown>(
  args: InferRequestType<(typeof client.ip)[':ipv4.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIpIpv4TxtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ip)[':ipv4.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ip[':ipv4.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneKey() {
  return ['timezone', '/timezone'] as const
}

export function useGetTimezone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezone<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezoneKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timezone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneTxtKey() {
  return ['timezone.txt', '/timezone.txt'] as const
}

export function useGetTimezoneTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezoneTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['timezone.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneTxt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTimezoneTxtKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['timezone.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['timezone.txt'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaKey(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
) {
  return ['timezone', '/timezone/:area', args] as const
}

export function useGetTimezoneArea<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTimezoneAreaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneArea<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTimezoneAreaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaTxtKey(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area.txt', args] as const
}

export function useGetTimezoneAreaTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
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
        ? getGetTimezoneAreaTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneAreaTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
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
        ? getGetTimezoneAreaTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.timezone)[':area.txt']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaLocationKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location', args] as const
}

export function useGetTimezoneAreaLocation<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
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
        ? getGetTimezoneAreaLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area'][':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneAreaLocation<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
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
        ? getGetTimezoneAreaLocationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.timezone[':area'][':location'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaLocationTxtKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location.txt', args] as const
}

export function useGetTimezoneAreaLocationTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
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
        ? getGetTimezoneAreaLocationTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.timezone[':area'][':location.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneAreaLocationTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
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
        ? getGetTimezoneAreaLocationTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location.txt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.timezone[':area'][':location.txt'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaLocationRegionKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location/:region', args] as const
}

export function useGetTimezoneAreaLocationRegion<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
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
        ? getGetTimezoneAreaLocationRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.timezone[':area'][':location'][':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneAreaLocationRegion<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
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
        ? getGetTimezoneAreaLocationRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.timezone)[':area'][':location'][':region']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.timezone[':area'][':location'][':region'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTimezoneAreaLocationRegionTxtKey(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
) {
  return ['timezone', '/timezone/:area/:location/:region.txt', args] as const
}

export function useGetTimezoneAreaLocationRegionTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
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
        ? getGetTimezoneAreaLocationRegionTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.timezone[':area'][':location'][':region.txt'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTimezoneAreaLocationRegionTxt<TError = unknown>(
  args: InferRequestType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
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
        ? getGetTimezoneAreaLocationRegionTxtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.timezone)[':area'][':location'][':region.txt']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.timezone[':area'][':location'][':region.txt'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
