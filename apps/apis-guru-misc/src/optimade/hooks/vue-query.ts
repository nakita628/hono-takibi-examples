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

export function getInfoKey() {
  return ['info'] as const
}

export function getLinksKey() {
  return ['links'] as const
}

export function getReferencesKey() {
  return ['references'] as const
}

export function getStructuresKey() {
  return ['structures'] as const
}

export function getVersionsKey() {
  return ['versions'] as const
}

export function getInfoQueryKey() {
  return ['info', '/info'] as const
}

export function getInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          ReturnType<typeof getInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoEntryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':entry']['$get']>>,
) {
  return ['info', '/info/:entry', toValue(args)] as const
}

export function getInfoEntryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':entry']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoEntryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info[':entry'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoEntry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':entry']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>
            >
          >,
          ReturnType<typeof getInfoEntryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoEntryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoEntryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info[':entry'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
) {
  return ['links', '/links', toValue(args)] as const
}

export function getLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.links.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLinks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.links.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
          ReturnType<typeof getLinksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.references.$get>>,
) {
  return ['references', '/references', toValue(args)] as const
}

export function getReferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.references.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.references.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
          >,
          ReturnType<typeof getReferencesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesEntryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references)[':entry_id']['$get']>>,
) {
  return ['references', '/references/:entry_id', toValue(args)] as const
}

export function getReferencesEntryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references)[':entry_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesEntryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references[':entry_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.references)[':entry_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReferencesEntryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesEntryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesEntryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references[':entry_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStructuresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.structures.$get>>,
) {
  return ['structures', '/structures', toValue(args)] as const
}

export function getStructuresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.structures.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStructuresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.structures.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStructures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.structures.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
          >,
          ReturnType<typeof getStructuresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStructuresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStructuresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.structures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStructuresEntryIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.structures)[':entry_id']['$get']>>,
) {
  return ['structures', '/structures/:entry_id', toValue(args)] as const
}

export function getStructuresEntryIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.structures)[':entry_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStructuresEntryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.structures[':entry_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStructuresEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.structures)[':entry_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getStructuresEntryIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStructuresEntryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStructuresEntryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.structures[':entry_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVersionsQueryKey() {
  return ['versions', '/versions'] as const
}

export function getVersionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.versions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
          >,
          ReturnType<typeof getVersionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.versions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
