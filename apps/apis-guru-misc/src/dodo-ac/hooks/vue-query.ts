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

export function getNhKey() {
  return ['nh'] as const
}

export function getVillagersKey() {
  return ['villagers'] as const
}

export function getNhArtQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.art.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/art', keyArgs] as const
}

export function getNhArtQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.art.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhArtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.art.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhArt<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.art.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
          ReturnType<typeof getNhArtQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.art.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhArtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhArtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.art.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhArtArtworkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.art)[':artwork']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/art/:artwork', keyArgs] as const
}

export function getNhArtArtworkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.art)[':artwork']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhArtArtworkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.art[':artwork'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhArtArtwork<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.art)[':artwork']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
            >
          >,
          ReturnType<typeof getNhArtArtworkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.art)[':artwork']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhArtArtworkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhArtArtworkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.art[':artwork'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhBugsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.bugs.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/bugs', keyArgs] as const
}

export function getNhBugsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.bugs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhBugsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.bugs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhBugs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.bugs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>
          >,
          ReturnType<typeof getNhBugsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.bugs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhBugsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhBugsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.bugs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhBugsBugQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/bugs/:bug', keyArgs] as const
}

export function getNhBugsBugQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhBugsBugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.bugs[':bug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhBugsBug<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.bugs)[':bug']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>
            >
          >,
          ReturnType<typeof getNhBugsBugQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.bugs)[':bug']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhBugsBugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhBugsBugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.bugs[':bug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhClothingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.clothing.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/clothing', keyArgs] as const
}

export function getNhClothingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.clothing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhClothingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.clothing.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhClothing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.clothing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>
          >,
          ReturnType<typeof getNhClothingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.clothing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhClothingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhClothingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.clothing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhClothingClothingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/clothing/:clothing', keyArgs] as const
}

export function getNhClothingClothingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhClothingClothingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.clothing[':clothing'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhClothingClothing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.clothing)[':clothing']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhClothingClothingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.clothing)[':clothing']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhClothingClothingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhClothingClothingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.clothing[':clothing'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/events', keyArgs] as const
}

export function getNhEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>
          >,
          ReturnType<typeof getNhEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFishQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fish.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fish', keyArgs] as const
}

export function getNhFishQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fish.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFishQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fish.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhFish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fish.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>
          >,
          ReturnType<typeof getNhFishQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fish.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhFishQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFishQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fish.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFishFishQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fish)[':fish']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fish/:fish', keyArgs] as const
}

export function getNhFishFishQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fish)[':fish']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFishFishQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fish[':fish'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFishFish<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fish)[':fish']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
            >
          >,
          ReturnType<typeof getNhFishFishQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fish)[':fish']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFishFishQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFishFishQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fish[':fish'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.all.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/all', keyArgs] as const
}

export function getNhFossilsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.all.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsAll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.all.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
          >,
          ReturnType<typeof getNhFossilsAllQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.all.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsAllFossilQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/all/:fossil', keyArgs] as const
}

export function getNhFossilsAllFossilQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsAllFossilQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.all[':fossil'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsAllFossil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.fossils.all)[':fossil']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhFossilsAllFossilQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.fossils.all)[':fossil']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsAllFossilQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsAllFossilQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.all[':fossil'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.groups.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/groups', keyArgs] as const
}

export function getNhFossilsGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>
            >
          >,
          ReturnType<typeof getNhFossilsGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsGroupsFossilGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/groups/:fossil_group', keyArgs] as const
}

export function getNhFossilsGroupsFossilGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsGroupsFossilGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.groups[':fossil_group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsGroupsFossilGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhFossilsGroupsFossilGroupQueryKey>
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
          Awaited<ReturnType<(typeof client.nh.fossils.groups)[':fossil_group']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsGroupsFossilGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsGroupsFossilGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.groups[':fossil_group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsIndividualsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.individuals.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/individuals', keyArgs] as const
}

export function getNhFossilsIndividualsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.individuals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsIndividualsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.individuals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsIndividuals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.fossils.individuals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
            >
          >,
          ReturnType<typeof getNhFossilsIndividualsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.nh.fossils.individuals.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsIndividualsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsIndividualsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.individuals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFossilsIndividualsFossilQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/fossils/individuals/:fossil', keyArgs] as const
}

export function getNhFossilsIndividualsFossilQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFossilsIndividualsFossilQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.fossils.individuals[':fossil'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFossilsIndividualsFossil<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhFossilsIndividualsFossilQueryKey>
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
          Awaited<ReturnType<(typeof client.nh.fossils.individuals)[':fossil']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFossilsIndividualsFossilQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFossilsIndividualsFossilQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.fossils.individuals[':fossil'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFurnitureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.furniture.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/furniture', keyArgs] as const
}

export function getNhFurnitureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.furniture.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFurnitureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.furniture.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhFurniture<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.furniture.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>
          >,
          ReturnType<typeof getNhFurnitureQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.furniture.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhFurnitureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFurnitureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.furniture.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhFurnitureFurnitureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/furniture/:furniture', keyArgs] as const
}

export function getNhFurnitureFurnitureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhFurnitureFurnitureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.furniture[':furniture'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhFurnitureFurniture<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.furniture)[':furniture']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhFurnitureFurnitureQueryKey>
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
          Awaited<ReturnType<(typeof client.nh.furniture)[':furniture']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhFurnitureFurnitureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhFurnitureFurnitureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.furniture[':furniture'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhInteriorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.interior.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/interior', keyArgs] as const
}

export function getNhInteriorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.interior.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhInteriorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.interior.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhInterior<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.interior.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>
          >,
          ReturnType<typeof getNhInteriorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.interior.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhInteriorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhInteriorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.interior.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhInteriorItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.interior)[':item']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/interior/:item', keyArgs] as const
}

export function getNhInteriorItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.interior)[':item']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhInteriorItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.interior[':item'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhInteriorItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.interior)[':item']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhInteriorItemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.interior)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhInteriorItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhInteriorItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.interior[':item'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.items.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/items', keyArgs] as const
}

export function getNhItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.items.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhItems<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>
          >,
          ReturnType<typeof getNhItemsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.items.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhItemsItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.items)[':item']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/items/:item', keyArgs] as const
}

export function getNhItemsItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.items)[':item']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhItemsItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.items[':item'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhItemsItem<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.items)[':item']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
            >
          >,
          ReturnType<typeof getNhItemsItemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.items)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhItemsItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhItemsItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.items[':item'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhPhotosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.photos.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/photos', keyArgs] as const
}

export function getNhPhotosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.photos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhPhotosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.photos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhPhotos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.photos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>
          >,
          ReturnType<typeof getNhPhotosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.photos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhPhotosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhPhotosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.photos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhPhotosItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.photos)[':item']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/photos/:item', keyArgs] as const
}

export function getNhPhotosItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.photos)[':item']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhPhotosItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.photos[':item'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhPhotosItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.photos)[':item']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
            >
          >,
          ReturnType<typeof getNhPhotosItemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.photos)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhPhotosItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhPhotosItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.photos[':item'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhRecipesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.recipes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/recipes', keyArgs] as const
}

export function getNhRecipesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.recipes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhRecipesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.recipes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhRecipes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.recipes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>
          >,
          ReturnType<typeof getNhRecipesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.recipes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhRecipesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhRecipesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.recipes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhRecipesItemQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.recipes)[':item']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/recipes/:item', keyArgs] as const
}

export function getNhRecipesItemQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.recipes)[':item']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhRecipesItemQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.recipes[':item'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhRecipesItem<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.recipes)[':item']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
            >
          >,
          ReturnType<typeof getNhRecipesItemQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.recipes)[':item']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhRecipesItemQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhRecipesItemQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.recipes[':item'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhSeaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.sea.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/sea', keyArgs] as const
}

export function getNhSeaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.sea.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhSeaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.sea.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhSea<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.sea.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
          ReturnType<typeof getNhSeaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.sea.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhSeaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhSeaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.sea.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhSeaSeaCreatureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/sea/:sea_creature', keyArgs] as const
}

export function getNhSeaSeaCreatureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhSeaSeaCreatureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.sea[':sea_creature'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhSeaSeaCreature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.sea)[':sea_creature']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNhSeaSeaCreatureQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.sea)[':sea_creature']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhSeaSeaCreatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhSeaSeaCreatureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.sea[':sea_creature'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhToolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.tools.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/tools', keyArgs] as const
}

export function getNhToolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.tools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhToolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.tools.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNhTools<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nh.tools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>
          >,
          ReturnType<typeof getNhToolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nh.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNhToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhToolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.tools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNhToolsToolQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.tools)[':tool']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['nh', '/nh/tools/:tool', keyArgs] as const
}

export function getNhToolsToolQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.tools)[':tool']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNhToolsToolQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nh.tools[':tool'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNhToolsTool<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nh.tools)[':tool']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
            >
          >,
          ReturnType<typeof getNhToolsToolQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nh.tools)[':tool']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNhToolsToolQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNhToolsToolQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nh.tools[':tool'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVillagersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.villagers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['villagers', '/villagers', keyArgs] as const
}

export function getVillagersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.villagers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVillagersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.villagers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVillagers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.villagers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>
          >,
          ReturnType<typeof getVillagersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.villagers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVillagersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVillagersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.villagers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
