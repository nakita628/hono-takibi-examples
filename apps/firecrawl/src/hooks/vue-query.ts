import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getMonitorQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitor.$get>>,
) {
  return ['monitor', '/monitor', toValue(args)] as const
}

export function getMonitorQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitor.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitor.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMonitor<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.monitor.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>
          >,
          ReturnType<typeof getMonitorQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMonitorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitor.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.monitor.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.monitor.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['$get']>>,
) {
  return ['monitor', '/monitor/:monitorId', toValue(args)] as const
}

export function getMonitorMonitorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorMonitorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitor[':monitorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMonitorMonitorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMonitorMonitorIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)[':monitorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorMonitorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitor[':monitorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>>,
) {
  return ['monitor', '/monitor/:monitorId/checks', toValue(args)] as const
}

export function getMonitorMonitorIdChecksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorMonitorIdChecksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitor[':monitorId'].checks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.monitor)[':monitorId']['checks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMonitorMonitorIdChecksQueryKey>
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
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdChecksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorMonitorIdChecksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitor[':monitorId'].checks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMonitorMonitorIdChecksCheckIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
  >,
) {
  return ['monitor', '/monitor/:monitorId/checks/:checkId', toValue(args)] as const
}

export function getMonitorMonitorIdChecksCheckIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMonitorMonitorIdChecksCheckIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.monitor[':monitorId'].checks[':checkId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMonitorMonitorIdChecksCheckIdQueryKey>
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
          Awaited<ReturnType<(typeof client.monitor)[':monitorId']['checks'][':checkId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMonitorMonitorIdChecksCheckIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMonitorMonitorIdChecksCheckIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.monitor[':monitorId'].checks[':checkId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scrape.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.scrape.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.$post>>>>>,
          TError,
          InferRequestType<typeof client.parse.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getParseFormatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getParseFormatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parse.formats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useParseFormats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
          >,
          ReturnType<typeof getParseFormatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parse.formats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getParseFormatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getParseFormatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.parse.formats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.scrape.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.batch.scrape.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['$get']>>,
) {
  return ['batch', '/batch/scrape/:id', toValue(args)] as const
}

export function getBatchScrapeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchScrapeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batch.scrape[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBatchScrapeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBatchScrapeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.batch.scrape)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchScrapeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchScrapeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batch.scrape[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>>,
) {
  return ['batch', '/batch/scrape/:id/errors', toValue(args)] as const
}

export function getBatchScrapeIdErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchScrapeIdErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batch.scrape[':id'].errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch.scrape)[':id']['errors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBatchScrapeIdErrorsQueryKey>
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
          Awaited<ReturnType<(typeof client.batch.scrape)[':id']['errors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBatchScrapeIdErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchScrapeIdErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batch.scrape[':id'].errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrawlIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['$get']>>,
) {
  return ['crawl', '/crawl/:id', toValue(args)] as const
}

export function getCrawlIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrawlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crawl[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrawlId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrawlIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrawlIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrawlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crawl[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>>,
) {
  return ['crawl', '/crawl/:id/errors', toValue(args)] as const
}

export function getCrawlIdErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrawlIdErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crawl[':id'].errors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrawlIdErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crawl)[':id']['errors']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrawlIdErrorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.crawl)[':id']['errors']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrawlIdErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrawlIdErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crawl[':id'].errors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.$post>>>>>,
          TError,
          InferRequestType<typeof client.crawl.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.map.$post>>>>>,
          TError,
          InferRequestType<typeof client.map.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.extract.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.extract.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extract)[':id']['$get']>>,
) {
  return ['extract', '/extract/:id', toValue(args)] as const
}

export function getExtractIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extract)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExtractIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.extract[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExtractId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.extract)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getExtractIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.extract)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getExtractIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExtractIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.extract[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.$get>>,
) {
  return ['agent', '/agent', toValue(args)] as const
}

export function getAgentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAgent<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.agent.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
          ReturnType<typeof getAgentQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAgentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent.$post>>>>>,
          TError,
          InferRequestType<typeof client.agent.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['$get']>>,
) {
  return ['agent', '/agent/:jobId', toValue(args)] as const
}

export function getAgentJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getAgentJobIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>>,
) {
  return ['agent', '/agent/:jobId/trace', toValue(args)] as const
}

export function getAgentJobIdTraceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentJobIdTraceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent[':jobId'].trace.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAgentJobIdTrace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.agent)[':jobId']['trace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAgentJobIdTraceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.agent)[':jobId']['trace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdTraceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentJobIdTraceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent[':jobId'].trace.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAgentJobIdSnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
  >,
) {
  return ['agent', '/agent/:jobId/snapshots/:snapshotId', toValue(args)] as const
}

export function getAgentJobIdSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAgentJobIdSnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.agent[':jobId'].snapshots[':snapshotId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAgentJobIdSnapshotsSnapshotIdQueryKey>
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
          Awaited<ReturnType<(typeof client.agent)[':jobId']['snapshots'][':snapshotId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAgentJobIdSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAgentJobIdSnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.agent[':jobId'].snapshots[':snapshotId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrawlActiveQueryKey() {
  return ['crawl', '/crawl/active'] as const
}

export function getCrawlActiveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrawlActiveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crawl.active.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrawlActive<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>
          >,
          ReturnType<typeof getCrawlActiveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crawl.active.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrawlActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrawlActiveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crawl.active.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamCreditUsageQueryKey() {
  return ['team', '/team/credit-usage'] as const
}

export function getTeamCreditUsageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamCreditUsageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['credit-usage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamCreditUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['credit-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamCreditUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamCreditUsageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team['credit-usage'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamCreditUsageHistoricalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>
  >,
) {
  return ['team', '/team/credit-usage/historical', toValue(args)] as const
}

export function getTeamCreditUsageHistoricalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamCreditUsageHistoricalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['credit-usage'].historical.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['credit-usage']['historical']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamCreditUsageHistoricalQueryKey>
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
          Awaited<ReturnType<(typeof client.team)['credit-usage']['historical']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamCreditUsageHistoricalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamCreditUsageHistoricalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team['credit-usage'].historical.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTokenUsageQueryKey() {
  return ['team', '/team/token-usage'] as const
}

export function getTeamTokenUsageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamTokenUsageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['token-usage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamTokenUsageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['token-usage']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTokenUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamTokenUsageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team['token-usage'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamTokenUsageHistoricalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>
  >,
) {
  return ['team', '/team/token-usage/historical', toValue(args)] as const
}

export function getTeamTokenUsageHistoricalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamTokenUsageHistoricalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['token-usage'].historical.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.team)['token-usage']['historical']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamTokenUsageHistoricalQueryKey>
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
          Awaited<ReturnType<(typeof client.team)['token-usage']['historical']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamTokenUsageHistoricalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamTokenUsageHistoricalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team['token-usage'].historical.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamQueueStatusQueryKey() {
  return ['team', '/team/queue-status'] as const
}

export function getTeamQueueStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamQueueStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['queue-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamQueueStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['queue-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamQueueStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamQueueStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team['queue-status'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamActivityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.activity.$get>>,
) {
  return ['team', '/team/activity', toValue(args)] as const
}

export function getTeamActivityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.activity.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team.activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamActivity<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.team.activity.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
          >,
          ReturnType<typeof getTeamActivityQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.activity.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.team.activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getInteractQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interact.$get>>,
) {
  return ['interact', '/interact', toValue(args)] as const
}

export function getInteractQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interact.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInteractQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.interact.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInteract<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.interact.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>
          >,
          ReturnType<typeof getInteractQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInteractQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInteractQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.interact.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.interact.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.interact.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrape)[':jobId']['$get']>>,
) {
  return ['scrape', '/scrape/:jobId', toValue(args)] as const
}

export function getScrapeJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrape)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getScrapeJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.scrape[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useScrapeJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.scrape)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getScrapeJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.scrape)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScrapeJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getScrapeJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.scrape[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.ask.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.support.ask.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.research.papers.$get>>,
) {
  return ['search', '/search/research/papers', toValue(args)] as const
}

export function getSearchResearchPapersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.research.papers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchResearchPapersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.research.papers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchResearchPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.research.papers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
            >
          >,
          ReturnType<typeof getSearchResearchPapersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.search.research.papers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchResearchPapersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.research.papers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchResearchPapersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.research.papers)[':id']['$get']>>,
) {
  return ['search', '/search/research/papers/:id', toValue(args)] as const
}

export function getSearchResearchPapersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.research.papers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchResearchPapersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.research.papers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.search.research.papers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSearchResearchPapersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.search.research.papers)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchResearchPapersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.research.papers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchResearchPapersIdSimilarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>
  >,
) {
  return ['search', '/search/research/papers/:id/similar', toValue(args)] as const
}

export function getSearchResearchPapersIdSimilarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchResearchPapersIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.research.papers[':id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search.research.papers)[':id']['similar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSearchResearchPapersIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.search.research.papers)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchResearchPapersIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchResearchPapersIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.research.papers[':id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchDeveloperQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.developer.$get>>,
) {
  return ['search', '/search/developer', toValue(args)] as const
}

export function getSearchDeveloperQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.developer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchDeveloperQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.developer.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchDeveloper<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.developer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>
            >
          >,
          ReturnType<typeof getSearchDeveloperQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.developer.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchDeveloperQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchDeveloperQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.developer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSearchGovQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.gov.$get>>,
) {
  return ['search', '/search/gov', toValue(args)] as const
}

export function getSearchGovQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.gov.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchGovQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.gov.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchGov<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.gov.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>
          >,
          ReturnType<typeof getSearchGovQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchGovQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchGovQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.gov.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.gov.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.search.gov.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feedback.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.feedback.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getTeamThreatProtectionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTeamThreatProtectionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.team['threat-protection'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamThreatProtectionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.team)['threat-protection']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamThreatProtectionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTeamThreatProtectionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.team['threat-protection'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
