import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNhKey() {
  return ['nh'] as const
}

export function getVillagersKey() {
  return ['villagers'] as const
}

export function getGetNhArtKey(args: InferRequestType<typeof client.nh.art.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/art', keyArgs] as const
}

export function useGetNhArt<TError = unknown>(
  args: InferRequestType<typeof client.nh.art.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhArtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.art.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhArt<TError = unknown>(
  args: InferRequestType<typeof client.nh.art.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhArtKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.art.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhArtArtworkKey(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/art/:artwork', keyArgs] as const
}

export function useGetNhArtArtwork<TError = unknown>(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhArtArtworkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.art[':artwork'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhArtArtwork<TError = unknown>(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhArtArtworkKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.art[':artwork'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhBugsKey(args: InferRequestType<typeof client.nh.bugs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/bugs', keyArgs] as const
}

export function useGetNhBugs<TError = unknown>(
  args: InferRequestType<typeof client.nh.bugs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhBugsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.bugs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhBugs<TError = unknown>(
  args: InferRequestType<typeof client.nh.bugs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhBugsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.bugs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhBugsBugKey(
  args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/bugs/:bug', keyArgs] as const
}

export function useGetNhBugsBug<TError = unknown>(
  args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhBugsBugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.bugs[':bug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhBugsBug<TError = unknown>(
  args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhBugsBugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.bugs[':bug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhClothingKey(args: InferRequestType<typeof client.nh.clothing.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/clothing', keyArgs] as const
}

export function useGetNhClothing<TError = unknown>(
  args: InferRequestType<typeof client.nh.clothing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhClothingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.clothing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhClothing<TError = unknown>(
  args: InferRequestType<typeof client.nh.clothing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhClothingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.clothing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhClothingClothingKey(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/clothing/:clothing', keyArgs] as const
}

export function useGetNhClothingClothing<TError = unknown>(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
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
        ? getGetNhClothingClothingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.clothing[':clothing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhClothingClothing<TError = unknown>(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
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
        ? getGetNhClothingClothingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.clothing[':clothing'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhEventsKey(args: InferRequestType<typeof client.nh.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/events', keyArgs] as const
}

export function useGetNhEvents<TError = unknown>(
  args: InferRequestType<typeof client.nh.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhEvents<TError = unknown>(
  args: InferRequestType<typeof client.nh.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFishKey(args: InferRequestType<typeof client.nh.fish.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fish', keyArgs] as const
}

export function useGetNhFish<TError = unknown>(
  args: InferRequestType<typeof client.nh.fish.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.fish.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhFish<TError = unknown>(
  args: InferRequestType<typeof client.nh.fish.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.fish.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhFishFishKey(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fish/:fish', keyArgs] as const
}

export function useGetNhFishFish<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhFishFishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fish[':fish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFishFish<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhFishFishKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fish[':fish'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsAllKey(args: InferRequestType<typeof client.nh.fossils.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/all', keyArgs] as const
}

export function useGetNhFossilsAll<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFossilsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsAll<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.all.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFossilsAllKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsAllFossilKey(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/all/:fossil', keyArgs] as const
}

export function useGetNhFossilsAllFossil<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
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
        ? getGetNhFossilsAllFossilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.all[':fossil'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsAllFossil<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
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
        ? getGetNhFossilsAllFossilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.all[':fossil'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsGroupsKey(
  args: InferRequestType<typeof client.nh.fossils.groups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/groups', keyArgs] as const
}

export function useGetNhFossilsGroups<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
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
        ? getGetNhFossilsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsGroups<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
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
        ? getGetNhFossilsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsGroupsFossilGroupKey(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/groups/:fossil_group', keyArgs] as const
}

export function useGetNhFossilsGroupsFossilGroup<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
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
        ? getGetNhFossilsGroupsFossilGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nh.fossils.groups[':fossil_group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsGroupsFossilGroup<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
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
        ? getGetNhFossilsGroupsFossilGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nh.fossils.groups[':fossil_group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsIndividualsKey(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/individuals', keyArgs] as const
}

export function useGetNhFossilsIndividuals<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
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
        ? getGetNhFossilsIndividualsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.individuals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsIndividuals<TError = unknown>(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
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
        ? getGetNhFossilsIndividualsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.individuals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFossilsIndividualsFossilKey(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/individuals/:fossil', keyArgs] as const
}

export function useGetNhFossilsIndividualsFossil<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
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
        ? getGetNhFossilsIndividualsFossilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.individuals[':fossil'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFossilsIndividualsFossil<TError = unknown>(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
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
        ? getGetNhFossilsIndividualsFossilKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.fossils.individuals[':fossil'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFurnitureKey(args: InferRequestType<typeof client.nh.furniture.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/furniture', keyArgs] as const
}

export function useGetNhFurniture<TError = unknown>(
  args: InferRequestType<typeof client.nh.furniture.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFurnitureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.furniture.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFurniture<TError = unknown>(
  args: InferRequestType<typeof client.nh.furniture.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhFurnitureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.furniture.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhFurnitureFurnitureKey(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/furniture/:furniture', keyArgs] as const
}

export function useGetNhFurnitureFurniture<TError = unknown>(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
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
        ? getGetNhFurnitureFurnitureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.furniture[':furniture'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhFurnitureFurniture<TError = unknown>(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
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
        ? getGetNhFurnitureFurnitureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.furniture[':furniture'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhInteriorKey(args: InferRequestType<typeof client.nh.interior.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/interior', keyArgs] as const
}

export function useGetNhInterior<TError = unknown>(
  args: InferRequestType<typeof client.nh.interior.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhInteriorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.interior.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhInterior<TError = unknown>(
  args: InferRequestType<typeof client.nh.interior.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhInteriorKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.interior.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhInteriorItemKey(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/interior/:item', keyArgs] as const
}

export function useGetNhInteriorItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhInteriorItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.interior[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhInteriorItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhInteriorItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.interior[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhItemsKey(args: InferRequestType<typeof client.nh.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/items', keyArgs] as const
}

export function useGetNhItems<TError = unknown>(
  args: InferRequestType<typeof client.nh.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhItems<TError = unknown>(
  args: InferRequestType<typeof client.nh.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.items.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhItemsItemKey(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/items/:item', keyArgs] as const
}

export function useGetNhItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhItemsItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhItemsItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhItemsItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.items[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhPhotosKey(args: InferRequestType<typeof client.nh.photos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/photos', keyArgs] as const
}

export function useGetNhPhotos<TError = unknown>(
  args: InferRequestType<typeof client.nh.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhPhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhPhotos<TError = unknown>(
  args: InferRequestType<typeof client.nh.photos.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhPhotosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.photos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhPhotosItemKey(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/photos/:item', keyArgs] as const
}

export function useGetNhPhotosItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhPhotosItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.photos[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhPhotosItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhPhotosItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.photos[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhRecipesKey(args: InferRequestType<typeof client.nh.recipes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/recipes', keyArgs] as const
}

export function useGetNhRecipes<TError = unknown>(
  args: InferRequestType<typeof client.nh.recipes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhRecipesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.recipes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhRecipes<TError = unknown>(
  args: InferRequestType<typeof client.nh.recipes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhRecipesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.recipes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhRecipesItemKey(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/recipes/:item', keyArgs] as const
}

export function useGetNhRecipesItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhRecipesItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.recipes[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhRecipesItem<TError = unknown>(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhRecipesItemKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.recipes[':item'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhSeaKey(args: InferRequestType<typeof client.nh.sea.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/sea', keyArgs] as const
}

export function useGetNhSea<TError = unknown>(
  args: InferRequestType<typeof client.nh.sea.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhSeaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.sea.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhSea<TError = unknown>(
  args: InferRequestType<typeof client.nh.sea.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhSeaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.sea.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhSeaSeaCreatureKey(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/sea/:sea_creature', keyArgs] as const
}

export function useGetNhSeaSeaCreature<TError = unknown>(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
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
        ? getGetNhSeaSeaCreatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.sea[':sea_creature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhSeaSeaCreature<TError = unknown>(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
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
        ? getGetNhSeaSeaCreatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.sea[':sea_creature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNhToolsKey(args: InferRequestType<typeof client.nh.tools.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/tools', keyArgs] as const
}

export function useGetNhTools<TError = unknown>(
  args: InferRequestType<typeof client.nh.tools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhToolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.tools.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNhTools<TError = unknown>(
  args: InferRequestType<typeof client.nh.tools.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNhToolsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nh.tools.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetNhToolsToolKey(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/tools/:tool', keyArgs] as const
}

export function useGetNhToolsTool<TError = unknown>(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhToolsToolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.tools[':tool'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNhToolsTool<TError = unknown>(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetNhToolsToolKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nh.tools[':tool'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVillagersKey(args: InferRequestType<typeof client.villagers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['villagers', '/villagers', keyArgs] as const
}

export function useGetVillagers<TError = unknown>(
  args: InferRequestType<typeof client.villagers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVillagersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.villagers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVillagers<TError = unknown>(
  args: InferRequestType<typeof client.villagers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVillagersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.villagers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
