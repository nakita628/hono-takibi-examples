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

export function getCleanKey() {
  return ['clean'] as const
}

export function getGetfindingsKey() {
  return ['getfindings'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getLivenessKey() {
  return ['liveness'] as const
}

export function getReadinessKey() {
  return ['readiness'] as const
}

export function getReloadconfigKey() {
  return ['reloadconfig'] as const
}

export function getStartscanKey() {
  return ['startscan'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getStopKey() {
  return ['stop'] as const
}

export function getStopscansKey() {
  return ['stopscans'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCleanQueryKey() {
  return ['clean', '/clean'] as const
}

export function getCleanQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCleanQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clean.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useClean<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
          ReturnType<typeof getCleanQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCleanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCleanQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.clean.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCleanScanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clean)[':scanId']['$get']>>,
) {
  return ['clean', '/clean/:scanId', toValue(args)] as const
}

export function getCleanScanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clean)[':scanId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCleanScanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clean[':scanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCleanScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.clean)[':scanId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
            >
          >,
          ReturnType<typeof getCleanScanIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCleanScanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCleanScanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clean[':scanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetfindingsScanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getfindings)[':scanId']['$get']>>,
) {
  return ['getfindings', '/getfindings/:scanId', toValue(args)] as const
}

export function getGetfindingsScanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getfindings)[':scanId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetfindingsScanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getfindings[':scanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetfindingsScanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.getfindings)[':scanId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGetfindingsScanIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetfindingsScanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetfindingsScanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getfindings[':scanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function getLivenessQueryKey() {
  return ['liveness', '/liveness'] as const
}

export function getLivenessQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLivenessQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.liveness.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLiveness<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>
          >,
          ReturnType<typeof getLivenessQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivenessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLivenessQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.liveness.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadinessQueryKey() {
  return ['readiness', '/readiness'] as const
}

export function getReadinessQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadinessQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.readiness.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReadiness<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
          >,
          ReturnType<typeof getReadinessQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadinessQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadinessQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.readiness.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReloadconfigQueryKey() {
  return ['reloadconfig', '/reloadconfig'] as const
}

export function getReloadconfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReloadconfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reloadconfig.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReloadconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
          >,
          ReturnType<typeof getReloadconfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReloadconfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReloadconfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reloadconfig.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostStartscanMutationKey() {
  return ['startscan', '/startscan', 'POST'] as const
}

export function getPostStartscanMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startscan.$post>>>>>,
    TError,
    InferRequestType<typeof client.startscan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartscanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.startscan.$post>) {
      return parseResponse(client.startscan.$post(args, options))
    },
  })
}

export function usePostStartscan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startscan.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.startscan.$post>,
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
  const mutationDefaults = getPostStartscanMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatusScanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':scanId']['$get']>>,
) {
  return ['status', '/status/:scanId', toValue(args)] as const
}

export function getStatusScanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':scanId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatusScanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status[':scanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStatusScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.status)[':scanId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
            >
          >,
          ReturnType<typeof getStatusScanIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusScanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatusScanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.status[':scanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopScanIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stop)[':scanId']['$get']>>,
) {
  return ['stop', '/stop/:scanId', toValue(args)] as const
}

export function getStopScanIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stop)[':scanId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStopScanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stop[':scanId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useStopScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.stop)[':scanId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
            >
          >,
          ReturnType<typeof getStopScanIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopScanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStopScanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stop[':scanId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStopscansQueryKey() {
  return ['stopscans', '/stopscans'] as const
}

export function getStopscansQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStopscansQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stopscans.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStopscans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
          >,
          ReturnType<typeof getStopscansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStopscansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStopscansQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stopscans.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestQueryKey() {
  return ['test', '/test'] as const
}

export function getTestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.test.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTest<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
          ReturnType<typeof getTestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.test.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
