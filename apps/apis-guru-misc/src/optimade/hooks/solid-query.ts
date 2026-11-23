import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function getInfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >({
    queryKey: getInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getInfoQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getInfoEntryQueryKey(
  args: InferRequestType<(typeof client.info)[':entry']['$get']>,
) {
  return ['info', '/info/:entry', args] as const
}

export function getInfoEntryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.info)[':entry']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInfoEntryQueryKey>
  >({
    queryKey: getInfoEntryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info[':entry'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInfoEntry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.info)[':entry']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':entry']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInfoEntryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoEntryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLinksQueryKey(args: InferRequestType<typeof client.links.$get>) {
  return ['links', '/links', args] as const
}

export function getLinksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.links.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLinksQueryKey>
  >({
    queryKey: getLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.links.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLinks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.links.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.links.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getLinksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReferencesQueryKey(args: InferRequestType<typeof client.references.$get>) {
  return ['references', '/references', args] as const
}

export function getReferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.references.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReferencesQueryKey>
  >({
    queryKey: getReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.references.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.references.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReferencesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReferencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getReferencesEntryIdQueryKey(
  args: InferRequestType<(typeof client.references)[':entry_id']['$get']>,
) {
  return ['references', '/references/:entry_id', args] as const
}

export function getReferencesEntryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.references)[':entry_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesEntryIdQueryKey>
  >({
    queryKey: getReferencesEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references[':entry_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReferencesEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.references)[':entry_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.references)[':entry_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReferencesEntryIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReferencesEntryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStructuresQueryKey(args: InferRequestType<typeof client.structures.$get>) {
  return ['structures', '/structures', args] as const
}

export function getStructuresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.structures.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStructuresQueryKey>
  >({
    queryKey: getStructuresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.structures.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStructures<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.structures.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.structures.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStructuresQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStructuresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStructuresEntryIdQueryKey(
  args: InferRequestType<(typeof client.structures)[':entry_id']['$get']>,
) {
  return ['structures', '/structures/:entry_id', args] as const
}

export function getStructuresEntryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.structures)[':entry_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStructuresEntryIdQueryKey>
  >({
    queryKey: getStructuresEntryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.structures[':entry_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createStructuresEntryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.structures)[':entry_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.structures)[':entry_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getStructuresEntryIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStructuresEntryIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getVersionsQueryKey() {
  return ['versions', '/versions'] as const
}

export function getVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionsQueryKey>
  >({
    queryKey: getVersionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.versions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.versions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getVersionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
