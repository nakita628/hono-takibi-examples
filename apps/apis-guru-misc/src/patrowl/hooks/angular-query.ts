import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCleanQueryKey() {
  return ['clean', '/clean'] as const
}

export function getCleanQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCleanQueryKey>
  >({
    queryKey: getCleanQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.clean.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectClean<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.clean.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCleanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCleanQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCleanScanIdQueryKey(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
) {
  return ['clean', '/clean/:scanId', args] as const
}

export function getCleanScanIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clean)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCleanScanIdQueryKey>
  >({
    queryKey: getCleanScanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clean[':scanId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCleanScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.clean)[':scanId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.clean)[':scanId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCleanScanIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCleanScanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGetfindingsScanIdQueryKey(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
) {
  return ['getfindings', '/getfindings/:scanId', args] as const
}

export function getGetfindingsScanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetfindingsScanIdQueryKey>
  >({
    queryKey: getGetfindingsScanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getfindings[':scanId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetfindingsScanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.getfindings)[':scanId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.getfindings)[':scanId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetfindingsScanIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetfindingsScanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLivenessQueryKey() {
  return ['liveness', '/liveness'] as const
}

export function getLivenessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLivenessQueryKey>
  >({
    queryKey: getLivenessQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.liveness.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLiveness<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liveness.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLivenessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLivenessQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getReadinessQueryKey() {
  return ['readiness', '/readiness'] as const
}

export function getReadinessQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadinessQueryKey>
  >({
    queryKey: getReadinessQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.readiness.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReadiness<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.readiness.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReadinessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadinessQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getReloadconfigQueryKey() {
  return ['reloadconfig', '/reloadconfig'] as const
}

export function getReloadconfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReloadconfigQueryKey>
  >({
    queryKey: getReloadconfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reloadconfig.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReloadconfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reloadconfig.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReloadconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReloadconfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostStartscan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startscan.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.startscan.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartscanMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getStatusScanIdQueryKey(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
) {
  return ['status', '/status/:scanId', args] as const
}

export function getStatusScanIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.status)[':scanId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStatusScanIdQueryKey>
  >({
    queryKey: getStatusScanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.status[':scanId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatusScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.status)[':scanId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.status)[':scanId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStatusScanIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatusScanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStopScanIdQueryKey(
  args: InferRequestType<(typeof client.stop)[':scanId']['$get']>,
) {
  return ['stop', '/stop/:scanId', args] as const
}

export function getStopScanIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.stop)[':scanId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getStopScanIdQueryKey>
  >({
    queryKey: getStopScanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stop[':scanId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStopScanId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.stop)[':scanId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':scanId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStopScanIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopScanIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStopscansQueryKey() {
  return ['stopscans', '/stopscans'] as const
}

export function getStopscansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStopscansQueryKey>
  >({
    queryKey: getStopscansQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stopscans.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStopscans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stopscans.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStopscansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStopscansQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTestQueryKey() {
  return ['test', '/test'] as const
}

export function getTestQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTestQueryKey>
  >({
    queryKey: getTestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.test.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTest<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTestQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
