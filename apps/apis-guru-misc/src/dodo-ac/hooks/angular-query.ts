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

export function getNhKey() {
  return ['nh'] as const
}

export function getVillagersKey() {
  return ['villagers'] as const
}

export function getNhArtQueryKey(args: InferRequestType<typeof client.nh.art.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/art', keyArgs] as const
}

export function getNhArtQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.art.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhArtQueryKey>
  >({
    queryKey: getNhArtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.art.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhArt<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.art.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhArtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhArtQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhArtArtworkQueryKey(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/art/:artwork', keyArgs] as const
}

export function getNhArtArtworkQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhArtArtworkQueryKey>
  >({
    queryKey: getNhArtArtworkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.art[':artwork'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhArtArtwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.art)[':artwork']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhArtArtworkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhArtArtworkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhBugsQueryKey(args: InferRequestType<typeof client.nh.bugs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/bugs', keyArgs] as const
}

export function getNhBugsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.bugs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhBugsQueryKey>
  >({
    queryKey: getNhBugsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.bugs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhBugs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.bugs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhBugsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhBugsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhBugsBugQueryKey(
  args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/bugs/:bug', keyArgs] as const
}

export function getNhBugsBugQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhBugsBugQueryKey>
  >({
    queryKey: getNhBugsBugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.bugs[':bug'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhBugsBug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhBugsBugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhBugsBugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhClothingQueryKey(args: InferRequestType<typeof client.nh.clothing.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/clothing', keyArgs] as const
}

export function getNhClothingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.clothing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhClothingQueryKey>
  >({
    queryKey: getNhClothingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.clothing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhClothing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.clothing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhClothingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhClothingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhClothingClothingQueryKey(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/clothing/:clothing', keyArgs] as const
}

export function getNhClothingClothingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhClothingClothingQueryKey>
  >({
    queryKey: getNhClothingClothingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.clothing[':clothing'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhClothingClothing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhClothingClothingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhClothingClothingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhEventsQueryKey(args: InferRequestType<typeof client.nh.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/events', keyArgs] as const
}

export function getNhEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhEventsQueryKey>
  >({
    queryKey: getNhEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFishQueryKey(args: InferRequestType<typeof client.nh.fish.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fish', keyArgs] as const
}

export function getNhFishQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.fish.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhFishQueryKey>
  >({
    queryKey: getNhFishQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fish.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhFish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.fish.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhFishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFishQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFishFishQueryKey(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fish/:fish', keyArgs] as const
}

export function getNhFishFishQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFishFishQueryKey>
  >({
    queryKey: getNhFishFishQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fish[':fish'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhFishFish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.fish)[':fish']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFishFishQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFishFishQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFossilsAllQueryKey(args: InferRequestType<typeof client.nh.fossils.all.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/all', keyArgs] as const
}

export function getNhFossilsAllQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.fossils.all.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsAllQueryKey>
  >({
    queryKey: getNhFossilsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.all.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhFossilsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.fossils.all.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFossilsAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFossilsAllFossilQueryKey(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/all/:fossil', keyArgs] as const
}

export function getNhFossilsAllFossilQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsAllFossilQueryKey>
  >({
    queryKey: getNhFossilsAllFossilQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.all[':fossil'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhFossilsAllFossil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsAllFossilQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFossilsAllFossilQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFossilsGroupsQueryKey(
  args: InferRequestType<typeof client.nh.fossils.groups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/groups', keyArgs] as const
}

export function getNhFossilsGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.fossils.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsGroupsQueryKey>
  >({
    queryKey: getNhFossilsGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhFossilsGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.fossils.groups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFossilsGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFossilsGroupsFossilGroupQueryKey(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/groups/:fossil_group', keyArgs] as const
}

export function getNhFossilsGroupsFossilGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsGroupsFossilGroupQueryKey>
  >({
    queryKey: getNhFossilsGroupsFossilGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.groups[':fossil_group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhFossilsGroupsFossilGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsGroupsFossilGroupQueryKey>
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
      ...getNhFossilsGroupsFossilGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNhFossilsIndividualsQueryKey(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/individuals', keyArgs] as const
}

export function getNhFossilsIndividualsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nh.fossils.individuals.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsIndividualsQueryKey>
  >({
    queryKey: getNhFossilsIndividualsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.individuals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhFossilsIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.fossils.individuals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsIndividualsQueryKey>
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
      ...getNhFossilsIndividualsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNhFossilsIndividualsFossilQueryKey(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/fossils/individuals/:fossil', keyArgs] as const
}

export function getNhFossilsIndividualsFossilQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsIndividualsFossilQueryKey>
  >({
    queryKey: getNhFossilsIndividualsFossilQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.fossils.individuals[':fossil'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhFossilsIndividualsFossil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFossilsIndividualsFossilQueryKey>
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
      ...getNhFossilsIndividualsFossilQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNhFurnitureQueryKey(args: InferRequestType<typeof client.nh.furniture.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/furniture', keyArgs] as const
}

export function getNhFurnitureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.furniture.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhFurnitureQueryKey>
  >({
    queryKey: getNhFurnitureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.furniture.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhFurniture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.furniture.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhFurnitureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhFurnitureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhFurnitureFurnitureQueryKey(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/furniture/:furniture', keyArgs] as const
}

export function getNhFurnitureFurnitureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFurnitureFurnitureQueryKey>
  >({
    queryKey: getNhFurnitureFurnitureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.furniture[':furniture'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhFurnitureFurniture<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhFurnitureFurnitureQueryKey>
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
      ...getNhFurnitureFurnitureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNhInteriorQueryKey(args: InferRequestType<typeof client.nh.interior.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/interior', keyArgs] as const
}

export function getNhInteriorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.interior.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhInteriorQueryKey>
  >({
    queryKey: getNhInteriorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.interior.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhInterior<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.interior.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhInteriorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhInteriorQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhInteriorItemQueryKey(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/interior/:item', keyArgs] as const
}

export function getNhInteriorItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhInteriorItemQueryKey>
  >({
    queryKey: getNhInteriorItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.interior[':item'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhInteriorItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.interior)[':item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhInteriorItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhInteriorItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhItemsQueryKey(args: InferRequestType<typeof client.nh.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/items', keyArgs] as const
}

export function getNhItemsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.items.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhItemsQueryKey>
  >({
    queryKey: getNhItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhItemsItemQueryKey(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/items/:item', keyArgs] as const
}

export function getNhItemsItemQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.items)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhItemsItemQueryKey>
  >({
    queryKey: getNhItemsItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.items[':item'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhItemsItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.items)[':item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhItemsItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhItemsItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhPhotosQueryKey(args: InferRequestType<typeof client.nh.photos.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/photos', keyArgs] as const
}

export function getNhPhotosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.photos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhPhotosQueryKey>
  >({
    queryKey: getNhPhotosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.photos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhPhotos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.photos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhPhotosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhPhotosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhPhotosItemQueryKey(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/photos/:item', keyArgs] as const
}

export function getNhPhotosItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhPhotosItemQueryKey>
  >({
    queryKey: getNhPhotosItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.photos[':item'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhPhotosItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.photos)[':item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhPhotosItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhPhotosItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhRecipesQueryKey(args: InferRequestType<typeof client.nh.recipes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/recipes', keyArgs] as const
}

export function getNhRecipesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.recipes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhRecipesQueryKey>
  >({
    queryKey: getNhRecipesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.recipes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.recipes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNhRecipesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhRecipesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhRecipesItemQueryKey(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/recipes/:item', keyArgs] as const
}

export function getNhRecipesItemQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhRecipesItemQueryKey>
  >({
    queryKey: getNhRecipesItemQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.recipes[':item'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhRecipesItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.recipes)[':item']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhRecipesItemQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhRecipesItemQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhSeaQueryKey(args: InferRequestType<typeof client.nh.sea.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/sea', keyArgs] as const
}

export function getNhSeaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.sea.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhSeaQueryKey>
  >({
    queryKey: getNhSeaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.sea.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhSea<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.sea.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhSeaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhSeaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhSeaSeaCreatureQueryKey(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/sea/:sea_creature', keyArgs] as const
}

export function getNhSeaSeaCreatureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhSeaSeaCreatureQueryKey>
  >({
    queryKey: getNhSeaSeaCreatureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.sea[':sea_creature'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNhSeaSeaCreature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhSeaSeaCreatureQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhSeaSeaCreatureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhToolsQueryKey(args: InferRequestType<typeof client.nh.tools.$get>) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/tools', keyArgs] as const
}

export function getNhToolsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nh.tools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhToolsQueryKey>
  >({
    queryKey: getNhToolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.tools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.nh.tools.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNhToolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhToolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNhToolsToolQueryKey(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['nh', '/nh/tools/:tool', keyArgs] as const
}

export function getNhToolsToolQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhToolsToolQueryKey>
  >({
    queryKey: getNhToolsToolQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nh.tools[':tool'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNhToolsTool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.nh.tools)[':tool']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNhToolsToolQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNhToolsToolQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getVillagersQueryKey(args: InferRequestType<typeof client.villagers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['villagers', '/villagers', keyArgs] as const
}

export function getVillagersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.villagers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVillagersQueryKey>
  >({
    queryKey: getVillagersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.villagers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVillagers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.villagers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVillagersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVillagersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
