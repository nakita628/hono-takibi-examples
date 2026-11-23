import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDiscoveryKey() {
  return ['discovery'] as const
}

export function getGetDiscoveryV2AttractionsKey(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
) {
  return ['discovery', '/discovery/v2/attractions', args] as const
}

export function useGetDiscoveryV2Attractions<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
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
        ? getGetDiscoveryV2AttractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.attractions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2Attractions<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.attractions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
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
        ? getGetDiscoveryV2AttractionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.attractions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.attractions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2AttractionsIdKey(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/attractions/:id', args] as const
}

export function useGetDiscoveryV2AttractionsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
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
        ? getGetDiscoveryV2AttractionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.attractions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2AttractionsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.attractions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
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
        ? getGetDiscoveryV2AttractionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.attractions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.attractions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2ClassificationsKey(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
) {
  return ['discovery', '/discovery/v2/classifications', args] as const
}

export function useGetDiscoveryV2Classifications<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
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
        ? getGetDiscoveryV2ClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2Classifications<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.classifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
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
        ? getGetDiscoveryV2ClassificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.classifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.classifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2ClassificationsGenresIdKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/genres/:id', args] as const
}

export function useGetDiscoveryV2ClassificationsGenresId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
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
        ? getGetDiscoveryV2ClassificationsGenresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discovery.v2.classifications.genres[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2ClassificationsGenresId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
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
        ? getGetDiscoveryV2ClassificationsGenresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications.genres)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discovery.v2.classifications.genres[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2ClassificationsSegmentsIdKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/segments/:id', args] as const
}

export function useGetDiscoveryV2ClassificationsSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
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
        ? getGetDiscoveryV2ClassificationsSegmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.discovery.v2.classifications.segments[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2ClassificationsSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
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
        ? getGetDiscoveryV2ClassificationsSegmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.segments)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.discovery.v2.classifications.segments[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2ClassificationsSubgenresIdKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/subgenres/:id', args] as const
}

export function useGetDiscoveryV2ClassificationsSubgenresId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
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
        ? getGetDiscoveryV2ClassificationsSubgenresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.discovery.v2.classifications.subgenres[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2ClassificationsSubgenresId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
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
        ? getGetDiscoveryV2ClassificationsSubgenresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.discovery.v2.classifications.subgenres)[':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.discovery.v2.classifications.subgenres[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2ClassificationsIdKey(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/classifications/:id', args] as const
}

export function useGetDiscoveryV2ClassificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
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
        ? getGetDiscoveryV2ClassificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discovery.v2.classifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2ClassificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.classifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
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
        ? getGetDiscoveryV2ClassificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.classifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.discovery.v2.classifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2EventsKey(
  args: InferRequestType<typeof client.discovery.v2.events.$get>,
) {
  return ['discovery', '/discovery/v2/events', args] as const
}

export function useGetDiscoveryV2Events<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
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
        ? getGetDiscoveryV2EventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2Events<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
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
        ? getGetDiscoveryV2EventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2EventsIdKey(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/events/:id', args] as const
}

export function useGetDiscoveryV2EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
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
        ? getGetDiscoveryV2EventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2EventsId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
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
        ? getGetDiscoveryV2EventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2EventsIdImagesKey(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
) {
  return ['discovery', '/discovery/v2/events/:id/images', args] as const
}

export function useGetDiscoveryV2EventsIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
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
        ? getGetDiscoveryV2EventsIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events[':id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2EventsIdImages<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.events)[':id']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
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
        ? getGetDiscoveryV2EventsIdImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.events)[':id']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.events[':id'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2SuggestKey(
  args: InferRequestType<typeof client.discovery.v2.suggest.$get>,
) {
  return ['discovery', '/discovery/v2/suggest', args] as const
}

export function useGetDiscoveryV2Suggest<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
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
        ? getGetDiscoveryV2SuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2Suggest<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.suggest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
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
        ? getGetDiscoveryV2SuggestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.suggest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.suggest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2VenuesKey(
  args: InferRequestType<typeof client.discovery.v2.venues.$get>,
) {
  return ['discovery', '/discovery/v2/venues', args] as const
}

export function useGetDiscoveryV2Venues<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.venues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
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
        ? getGetDiscoveryV2VenuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.venues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2Venues<TError = unknown>(
  args: InferRequestType<typeof client.discovery.v2.venues.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
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
        ? getGetDiscoveryV2VenuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.discovery.v2.venues.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.venues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDiscoveryV2VenuesIdKey(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
) {
  return ['discovery', '/discovery/v2/venues/:id', args] as const
}

export function useGetDiscoveryV2VenuesId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
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
        ? getGetDiscoveryV2VenuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.venues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDiscoveryV2VenuesId<TError = unknown>(
  args: InferRequestType<(typeof client.discovery.v2.venues)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
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
        ? getGetDiscoveryV2VenuesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.discovery.v2.venues)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.discovery.v2.venues[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
