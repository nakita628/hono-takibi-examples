import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAgentKey() {
  return ['agent'] as const
}

export function getBatchKey() {
  return ['batch'] as const
}

export function getCrawlKey() {
  return ['crawl'] as const
}

export function getExtractKey() {
  return ['extract'] as const
}

export function getFeedbackKey() {
  return ['feedback'] as const
}

export function getInteractKey() {
  return ['interact'] as const
}

export function getMapKey() {
  return ['map'] as const
}

export function getMonitorKey() {
  return ['monitor'] as const
}

export function getParseKey() {
  return ['parse'] as const
}

export function getScrapeKey() {
  return ['scrape'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getMonitorQueryKey(args: InferRequestType<typeof client.monitor.$get>) {
  return ['monitor', '/monitor', args] as const
}

export function getMonitorQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.monitor.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorQueryKey>
  >({
    queryKey: getMonitorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitor.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.monitor.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMonitorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.monitor.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMonitorQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMonitorMutationKey() {
  return ['monitor', '/monitor', 'POST'] as const
}

export function getPostMonitorMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$post>>>>>,
    TError,
    InferRequestType<typeof client.monitor.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.monitor.$post>) {
      return parseResponse(client.monitor.$post(args, options))
    },
  })
}

export function usePostMonitor<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$post>>>>>,
        TError,
        InferRequestType<typeof client.monitor.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMonitorMonitorIdQueryKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId', args] as const
}

export function getMonitorMonitorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdQueryKey>
  >({
    queryKey: getMonitorMonitorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitor[':monitorId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMonitorMonitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMonitorMonitorIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMonitorMonitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMonitorMonitorIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMonitorMonitorIdMutationKey() {
  return ['monitor', '/monitor/:monitorId', 'DELETE'] as const
}

export function getDeleteMonitorMonitorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitor)[':monitorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMonitorMonitorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitor)[':monitorId']['$delete']>) {
      return parseResponse(client.monitor[':monitorId'].$delete(args, options))
    },
  })
}

export function useDeleteMonitorMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.monitor)[':monitorId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMonitorMonitorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchMonitorMonitorIdMutationKey() {
  return ['monitor', '/monitor/:monitorId', 'PATCH'] as const
}

export function getPatchMonitorMonitorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.monitor)[':monitorId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMonitorMonitorIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.monitor)[':monitorId']['$patch']>) {
      return parseResponse(client.monitor[':monitorId'].$patch(args, options))
    },
  })
}

export function usePatchMonitorMonitorId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.monitor)[':monitorId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMonitorMonitorIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMonitorMonitorIdRunMutationKey() {
  return ['monitor', '/monitor/:monitorId/run', 'POST'] as const
}

export function getPostMonitorMonitorIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMonitorMonitorIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']>,
    ) {
      return parseResponse(client.monitor[':monitorId'].run.$post(args, options))
    },
  })
}

export function usePostMonitorMonitorIdRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitor)[':monitorId']['run']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.monitor)[':monitorId']['run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMonitorMonitorIdRunMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMonitorMonitorIdChecksQueryKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId/checks', args] as const
}

export function getMonitorMonitorIdChecksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdChecksQueryKey>
  >({
    queryKey: getMonitorMonitorIdChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitor[':monitorId'].checks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMonitorMonitorIdChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMonitorMonitorIdChecksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMonitorMonitorIdChecks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMonitorMonitorIdChecksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMonitorMonitorIdChecksCheckIdQueryKey(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
) {
  return ['monitor', '/monitor/:monitorId/checks/:checkId', args] as const
}

export function getMonitorMonitorIdChecksCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdChecksCheckIdQueryKey>
  >({
    queryKey: getMonitorMonitorIdChecksCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.monitor[':monitorId'].checks[':checkId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMonitorMonitorIdChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdChecksCheckIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMonitorMonitorIdChecksCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMonitorMonitorIdChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMonitorMonitorIdChecksCheckIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMonitorMonitorIdChecksCheckIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostScrapeMutationKey() {
  return ['scrape', '/scrape', 'POST'] as const
}

export function getPostScrapeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape.$post>>>>>,
    TError,
    InferRequestType<typeof client.scrape.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.scrape.$post>) {
      return parseResponse(client.scrape.$post(args, options))
    },
  })
}

export function usePostScrape<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape.$post>>>>>,
        TError,
        InferRequestType<typeof client.scrape.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScrapeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostScrapeJobIdInteractMutationKey() {
  return ['scrape', '/scrape/:jobId/interact', 'POST'] as const
}

export function getPostScrapeJobIdInteractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScrapeJobIdInteractMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']>,
    ) {
      return parseResponse(client.scrape[':jobId'].interact.$post(args, options))
    },
  })
}

export function usePostScrapeJobIdInteract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrape)[':jobId']['interact']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScrapeJobIdInteractMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteScrapeJobIdInteractMutationKey() {
  return ['scrape', '/scrape/:jobId/interact', 'DELETE'] as const
}

export function getDeleteScrapeJobIdInteractMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteScrapeJobIdInteractMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']>,
    ) {
      return parseResponse(client.scrape[':jobId'].interact.$delete(args, options))
    },
  })
}

export function useDeleteScrapeJobIdInteract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scrape)[':jobId']['interact']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scrape)[':jobId']['interact']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteScrapeJobIdInteractMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostParseMutationKey() {
  return ['parse', '/parse', 'POST'] as const
}

export function getPostParseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
    TError,
    InferRequestType<typeof client.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.parse.$post>) {
      return parseResponse(client.parse.$post(args, options))
    },
  })
}

export function usePostParse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
        TError,
        InferRequestType<typeof client.parse.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostParseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getParseFormatsQueryKey() {
  return ['parse', '/parse/formats'] as const
}

export function getParseFormatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParseFormatsQueryKey>
  >({
    queryKey: getParseFormatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.parse.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useParseFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParseFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getParseFormatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseParseFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParseFormatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getParseFormatsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBatchScrapeMutationKey() {
  return ['batch', '/batch/scrape', 'POST'] as const
}

export function getPostBatchScrapeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.scrape.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.batch.scrape.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchScrapeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.scrape.$post>) {
      return parseResponse(client.batch.scrape.$post(args, options))
    },
  })
}

export function usePostBatchScrape<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.scrape.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.batch.scrape.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchScrapeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchScrapeIdQueryKey(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
) {
  return ['batch', '/batch/scrape/:id', args] as const
}

export function getBatchScrapeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchScrapeIdQueryKey>
  >({
    queryKey: getBatchScrapeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batch.scrape[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBatchScrapeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchScrapeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchScrapeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatchScrapeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchScrapeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchScrapeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBatchScrapeIdMutationKey() {
  return ['batch', '/batch/scrape/:id', 'DELETE'] as const
}

export function getDeleteBatchScrapeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.batch.scrape)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBatchScrapeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.batch.scrape)[':id']['$delete']>) {
      return parseResponse(client.batch.scrape[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBatchScrapeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.batch.scrape)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBatchScrapeIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchScrapeIdErrorsQueryKey(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
) {
  return ['batch', '/batch/scrape/:id/errors', args] as const
}

export function getBatchScrapeIdErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchScrapeIdErrorsQueryKey>
  >({
    queryKey: getBatchScrapeIdErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batch.scrape[':id'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBatchScrapeIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchScrapeIdErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBatchScrapeIdErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBatchScrapeIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBatchScrapeIdErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBatchScrapeIdErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCrawlIdQueryKey(args: InferRequestType<(typeof client.crawl)[':id']['$get']>) {
  return ['crawl', '/crawl/:id', args] as const
}

export function getCrawlIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.crawl)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrawlIdQueryKey>
  >({
    queryKey: getCrawlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crawl[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrawlId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crawl)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrawlIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrawlId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crawl)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrawlIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteCrawlIdMutationKey() {
  return ['crawl', '/crawl/:id', 'DELETE'] as const
}

export function getDeleteCrawlIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.crawl)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrawlIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crawl)[':id']['$delete']>) {
      return parseResponse(client.crawl[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrawlId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.crawl)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrawlIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrawlIdErrorsQueryKey(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
) {
  return ['crawl', '/crawl/:id/errors', args] as const
}

export function getCrawlIdErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrawlIdErrorsQueryKey>
  >({
    queryKey: getCrawlIdErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crawl[':id'].errors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrawlIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlIdErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrawlIdErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrawlIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlIdErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrawlIdErrorsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCrawlMutationKey() {
  return ['crawl', '/crawl', 'POST'] as const
}

export function getPostCrawlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.$post>>>>>,
    TError,
    InferRequestType<typeof client.crawl.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrawlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crawl.$post>) {
      return parseResponse(client.crawl.$post(args, options))
    },
  })
}

export function usePostCrawl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.$post>>>>>,
        TError,
        InferRequestType<typeof client.crawl.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrawlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCrawlParamsPreviewMutationKey() {
  return ['crawl', '/crawl/params-preview', 'POST'] as const
}

export function getPostCrawlParamsPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)['params-preview']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.crawl)['params-preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrawlParamsPreviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crawl)['params-preview']['$post']>) {
      return parseResponse(client.crawl['params-preview'].$post(args, options))
    },
  })
}

export function usePostCrawlParamsPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.crawl)['params-preview']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crawl)['params-preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrawlParamsPreviewMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMapMutationKey() {
  return ['map', '/map', 'POST'] as const
}

export function getPostMapMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$post>>>>>,
    TError,
    InferRequestType<typeof client.map.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMapMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.map.$post>) {
      return parseResponse(client.map.$post(args, options))
    },
  })
}

export function usePostMap<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$post>>>>>,
        TError,
        InferRequestType<typeof client.map.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMapMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExtractMutationKey() {
  return ['extract', '/extract', 'POST'] as const
}

export function getPostExtractMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extract.$post>>>>>,
    TError,
    InferRequestType<typeof client.extract.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtractMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.extract.$post>) {
      return parseResponse(client.extract.$post(args, options))
    },
  })
}

export function usePostExtract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extract.$post>>>>>,
        TError,
        InferRequestType<typeof client.extract.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtractMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExtractIdQueryKey(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
) {
  return ['extract', '/extract/:id', args] as const
}

export function getExtractIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.extract)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtractIdQueryKey>
  >({
    queryKey: getExtractIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.extract[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useExtractId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtractIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getExtractIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseExtractId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.extract)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExtractIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getExtractIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentQueryKey(args: InferRequestType<typeof client.agent.$get>) {
  return ['agent', '/agent', args] as const
}

export function getAgentQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.agent.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentQueryKey>
  >({
    queryKey: getAgentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.agent.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAgentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAgentMutationKey() {
  return ['agent', '/agent', 'POST'] as const
}

export function getPostAgentMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
    TError,
    InferRequestType<typeof client.agent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAgentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.agent.$post>) {
      return parseResponse(client.agent.$post(args, options))
    },
  })
}

export function usePostAgent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
        TError,
        InferRequestType<typeof client.agent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAgentMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentJobIdQueryKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
) {
  return ['agent', '/agent/:jobId', args] as const
}

export function getAgentJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.agent)[':jobId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdQueryKey>
  >({
    queryKey: getAgentJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAgentJobIdMutationKey() {
  return ['agent', '/agent/:jobId', 'DELETE'] as const
}

export function getDeleteAgentJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.agent)[':jobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAgentJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.agent)[':jobId']['$delete']>) {
      return parseResponse(client.agent[':jobId'].$delete(args, options))
    },
  })
}

export function useDeleteAgentJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.agent)[':jobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAgentJobIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAgentJobIdTraceQueryKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
) {
  return ['agent', '/agent/:jobId/trace', args] as const
}

export function getAgentJobIdTraceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdTraceQueryKey>
  >({
    queryKey: getAgentJobIdTraceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent[':jobId'].trace.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAgentJobIdTrace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdTraceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAgentJobIdTraceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAgentJobIdTrace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdTraceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAgentJobIdTraceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAgentJobIdSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
) {
  return ['agent', '/agent/:jobId/snapshots/:snapshotId', args] as const
}

export function getAgentJobIdSnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdSnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getAgentJobIdSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.agent[':jobId'].snapshots[':snapshotId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAgentJobIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdSnapshotsSnapshotIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAgentJobIdSnapshotsSnapshotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAgentJobIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAgentJobIdSnapshotsSnapshotIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAgentJobIdSnapshotsSnapshotIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrawlActiveQueryKey() {
  return ['crawl', '/crawl/active'] as const
}

export function getCrawlActiveQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrawlActiveQueryKey>
  >({
    queryKey: getCrawlActiveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.crawl.active.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCrawlActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlActiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCrawlActiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCrawlActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCrawlActiveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCrawlActiveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamCreditUsageQueryKey() {
  return ['team', '/team/credit-usage'] as const
}

export function getTeamCreditUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamCreditUsageQueryKey>
  >({
    queryKey: getTeamCreditUsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team['credit-usage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamCreditUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamCreditUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamCreditUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamCreditUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamCreditUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamCreditUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamCreditUsageHistoricalQueryKey(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
) {
  return ['team', '/team/credit-usage/historical', args] as const
}

export function getTeamCreditUsageHistoricalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamCreditUsageHistoricalQueryKey>
  >({
    queryKey: getTeamCreditUsageHistoricalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team['credit-usage'].historical.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamCreditUsageHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamCreditUsageHistoricalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamCreditUsageHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamCreditUsageHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamCreditUsageHistoricalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamCreditUsageHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamTokenUsageQueryKey() {
  return ['team', '/team/token-usage'] as const
}

export function getTeamTokenUsageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTokenUsageQueryKey>
  >({
    queryKey: getTeamTokenUsageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team['token-usage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTokenUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTokenUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamTokenUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamTokenUsage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTokenUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamTokenUsageQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamTokenUsageHistoricalQueryKey(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
) {
  return ['team', '/team/token-usage/historical', args] as const
}

export function getTeamTokenUsageHistoricalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTokenUsageHistoricalQueryKey>
  >({
    queryKey: getTeamTokenUsageHistoricalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team['token-usage'].historical.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamTokenUsageHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTokenUsageHistoricalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamTokenUsageHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamTokenUsageHistorical<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamTokenUsageHistoricalQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamTokenUsageHistoricalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTeamQueueStatusQueryKey() {
  return ['team', '/team/queue-status'] as const
}

export function getTeamQueueStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamQueueStatusQueryKey>
  >({
    queryKey: getTeamQueueStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team['queue-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamQueueStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamQueueStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamQueueStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamQueueStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamQueueStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamQueueStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamActivityQueryKey(args: InferRequestType<typeof client.team.activity.$get>) {
  return ['team', '/team/activity', args] as const
}

export function getTeamActivityQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.team.activity.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamActivityQueryKey>
  >({
    queryKey: getTeamActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.team.activity.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTeamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team.activity.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.team.activity.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamActivityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSearchMutationKey() {
  return ['search', '/search', 'POST'] as const
}

export function getPostSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
    TError,
    InferRequestType<typeof client.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.$post>) {
      return parseResponse(client.search.$post(args, options))
    },
  })
}

export function usePostSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>>,
        TError,
        InferRequestType<typeof client.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInteractQueryKey(args: InferRequestType<typeof client.interact.$get>) {
  return ['interact', '/interact', args] as const
}

export function getInteractQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.interact.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInteractQueryKey>
  >({
    queryKey: getInteractQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.interact.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInteract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.interact.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInteractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInteractQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInteract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.interact.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInteractQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInteractQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInteractMutationKey() {
  return ['interact', '/interact', 'POST'] as const
}

export function getPostInteractMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$post>>>>>,
    TError,
    InferRequestType<typeof client.interact.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInteractMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.interact.$post>) {
      return parseResponse(client.interact.$post(args, options))
    },
  })
}

export function usePostInteract<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.interact.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInteractMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInteractSessionIdExecuteMutationKey() {
  return ['interact', '/interact/:sessionId/execute', 'POST'] as const
}

export function getPostInteractSessionIdExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.interact)[':sessionId']['execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInteractSessionIdExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']>,
    ) {
      return parseResponse(client.interact[':sessionId'].execute.$post(args, options))
    },
  })
}

export function usePostInteractSessionIdExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.interact)[':sessionId']['execute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.interact)[':sessionId']['execute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInteractSessionIdExecuteMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteInteractSessionIdMutationKey() {
  return ['interact', '/interact/:sessionId', 'DELETE'] as const
}

export function getDeleteInteractSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.interact)[':sessionId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.interact)[':sessionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInteractSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.interact)[':sessionId']['$delete']>) {
      return parseResponse(client.interact[':sessionId'].$delete(args, options))
    },
  })
}

export function useDeleteInteractSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.interact)[':sessionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.interact)[':sessionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteInteractSessionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getScrapeJobIdQueryKey(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
) {
  return ['scrape', '/scrape/:jobId', args] as const
}

export function getScrapeJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapeJobIdQueryKey>
  >({
    queryKey: getScrapeJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.scrape[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useScrapeJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapeJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getScrapeJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseScrapeJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.scrape)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScrapeJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getScrapeJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSearchJobIdFeedbackMutationKey() {
  return ['search', '/search/:jobId/feedback', 'POST'] as const
}

export function getPostSearchJobIdFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)[':jobId']['feedback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchJobIdFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']>,
    ) {
      return parseResponse(client.search[':jobId'].feedback.$post(args, options))
    },
  })
}

export function usePostSearchJobIdFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search)[':jobId']['feedback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.search)[':jobId']['feedback']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchJobIdFeedbackMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSupportAskMutationKey() {
  return ['support', '/support/ask', 'POST'] as const
}

export function getPostSupportAskMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.ask.$post>>>>>,
    TError,
    InferRequestType<typeof client.support.ask.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSupportAskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.support.ask.$post>) {
      return parseResponse(client.support.ask.$post(args, options))
    },
  })
}

export function usePostSupportAsk<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.ask.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.support.ask.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSupportAskMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchResearchPapersQueryKey(
  args: InferRequestType<typeof client.search.research.papers.$get>,
) {
  return ['search', '/search/research/papers', args] as const
}

export function getSearchResearchPapersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersQueryKey>
  >({
    queryKey: getSearchResearchPapersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.research.papers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchResearchPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchResearchPapersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchResearchPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.research.papers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchResearchPapersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSearchResearchPapersIdQueryKey(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
) {
  return ['search', '/search/research/papers/:id', args] as const
}

export function getSearchResearchPapersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersIdQueryKey>
  >({
    queryKey: getSearchResearchPapersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.research.papers[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchResearchPapersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSearchResearchPapersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchResearchPapersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSearchResearchPapersIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchResearchPapersIdSimilarQueryKey(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
) {
  return ['search', '/search/research/papers/:id/similar', args] as const
}

export function getSearchResearchPapersIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersIdSimilarQueryKey>
  >({
    queryKey: getSearchResearchPapersIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.research.papers[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSearchResearchPapersIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSearchResearchPapersIdSimilarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSearchResearchPapersIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchResearchPapersIdSimilarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSearchResearchPapersIdSimilarQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSearchDeveloperQueryKey(
  args: InferRequestType<typeof client.search.developer.$get>,
) {
  return ['search', '/search/developer', args] as const
}

export function getSearchDeveloperQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.developer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchDeveloperQueryKey>
  >({
    queryKey: getSearchDeveloperQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.developer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchDeveloper<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.developer.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchDeveloperQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchDeveloperQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchDeveloper<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.developer.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchDeveloperQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchDeveloperQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSearchDeveloperMutationKey() {
  return ['search', '/search/developer', 'POST'] as const
}

export function getPostSearchDeveloperMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.search.developer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchDeveloperMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.developer.$post>) {
      return parseResponse(client.search.developer.$post(args, options))
    },
  })
}

export function usePostSearchDeveloper<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.search.developer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchDeveloperMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchGovQueryKey(args: InferRequestType<typeof client.search.gov.$get>) {
  return ['search', '/search/gov', args] as const
}

export function getSearchGovQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.gov.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchGovQueryKey>
  >({
    queryKey: getSearchGovQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.gov.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSearchGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.gov.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchGovQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSearchGovQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSearchGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.search.gov.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchGovQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSearchGovQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSearchGovMutationKey() {
  return ['search', '/search/gov', 'POST'] as const
}

export function getPostSearchGovMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$post>>>>>,
    TError,
    InferRequestType<typeof client.search.gov.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchGovMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.search.gov.$post>) {
      return parseResponse(client.search.gov.$post(args, options))
    },
  })
}

export function usePostSearchGov<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.search.gov.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchGovMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFeedbackMutationKey() {
  return ['feedback', '/feedback', 'POST'] as const
}

export function getPostFeedbackMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>>,
    TError,
    InferRequestType<typeof client.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feedback.$post>) {
      return parseResponse(client.feedback.$post(args, options))
    },
  })
}

export function usePostFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeedbackMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamThreatProtectionQueryKey() {
  return ['team', '/team/threat-protection'] as const
}

export function getTeamThreatProtectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamThreatProtectionQueryKey>
  >({
    queryKey: getTeamThreatProtectionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.team['threat-protection'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamThreatProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamThreatProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamThreatProtectionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamThreatProtection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamThreatProtectionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamThreatProtectionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTeamThreatProtectionMutationKey() {
  return ['team', '/team/threat-protection', 'PUT'] as const
}

export function getPutTeamThreatProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.team)['threat-protection']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamThreatProtectionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.team)['threat-protection']['$put']>) {
      return parseResponse(client.team['threat-protection'].$put(args, options))
    },
  })
}

export function usePutTeamThreatProtection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.team)['threat-protection']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.team)['threat-protection']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamThreatProtectionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
