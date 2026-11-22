import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchKey() {
  return ['batch'] as const
}

export function getDbKey() {
  return ['db'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getBatchQueryKey() {
  return ['batch', '/batch'] as const
}

export function getBatchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchQueryKey>
  >({
    queryKey: getBatchQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.batch.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getBatchQueryKey>
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
    return { ...getBatchQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostBatchMutationKey() {
  return ['batch', '/batch', 'POST'] as const
}

export function getPostBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.batch.$post>) {
      return parseResponse(client.batch.$post(args, options))
    },
  })
}

export function createPostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
          TError,
          InferRequestType<typeof client.batch.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBatchIdQueryKey(args: InferRequestType<(typeof client.batch)[':id']['$get']>) {
  return ['batch', '/batch/:id', args] as const
}

export function getBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.batch)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchIdQueryKey>
  >({
    queryKey: getBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.batch[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBatchId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.batch)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBatchIdQueryKey>
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
    return { ...getBatchIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteBatchIdMutationKey() {
  return ['batch', '/batch/:id', 'DELETE'] as const
}

export function getDeleteBatchIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.batch)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBatchIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.batch)[':id']['$delete']>) {
      return parseResponse(client.batch[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.batch)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteBatchIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDbQueryKey(args: InferRequestType<typeof client.db.$get>) {
  return ['db', '/db', args] as const
}

export function getDbQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.db.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbQueryKey>
  >({
    queryKey: getDbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.db.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function createDb<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.db.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getDbQueryKey>
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
    return { ...getDbQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainCheckQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain']['check']['$get']>,
) {
  return ['domains', '/domains/:domain/check', args] as const
}

export function getDomainsDomainCheckQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain']['check']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainCheckQueryKey>
  >({
    queryKey: getDomainsDomainCheckQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain'].check.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':domain']['check']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainCheckQueryKey>
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
    return { ...getDomainsDomainCheckQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainRankQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>,
) {
  return ['domains', '/domains/:domain/rank', args] as const
}

export function getDomainsDomainRankQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainRankQueryKey>
  >({
    queryKey: getDomainsDomainRankQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain'].rank.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainRank<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainRankQueryKey>
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
    return { ...getDomainsDomainRankQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDomainsDomainWhoisQueryKey(
  args: InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>,
) {
  return ['domains', '/domains/:domain/whois', args] as const
}

export function getDomainsDomainWhoisQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainWhoisQueryKey>
  >({
    queryKey: getDomainsDomainWhoisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domain'].whois.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createDomainsDomainWhois<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDomainsDomainWhoisQueryKey>
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
    return { ...getDomainsDomainWhoisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
