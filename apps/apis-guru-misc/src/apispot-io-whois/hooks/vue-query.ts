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

export function getBatchQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBatchQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batch.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBatch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
          ReturnType<typeof getBatchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBatchQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.batch.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.batch.$post>>>>>,
          TError,
          InferRequestType<typeof client.batch.$post>,
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
  const mutationDefaults = getPostBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch)[':id']['$get']>>,
) {
  return ['batch', '/batch/:id', toValue(args)] as const
}

export function getBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.batch[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBatchId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.batch)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBatchIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.batch[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBatchId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.batch)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.batch)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteBatchIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDbQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.db.$get>>) {
  return ['db', '/db', toValue(args)] as const
}

export function getDbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.db.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.db.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDb<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.db.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
          ReturnType<typeof getDbQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.db.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['check']['$get']>>,
) {
  return ['domains', '/domains/:domain/check', toValue(args)] as const
}

export function getDomainsDomainCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['check']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain'].check.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['check']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainCheckQueryKey>
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
          Awaited<ReturnType<(typeof client.domains)[':domain']['check']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain'].check.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainRankQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>>,
) {
  return ['domains', '/domains/:domain/rank', toValue(args)] as const
}

export function getDomainsDomainRankQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainRankQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain'].rank.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainRank<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['rank']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainRankQueryKey>
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
          Awaited<ReturnType<(typeof client.domains)[':domain']['rank']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainRankQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainRankQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain'].rank.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDomainsDomainWhoisQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>>,
) {
  return ['domains', '/domains/:domain/whois', toValue(args)] as const
}

export function getDomainsDomainWhoisQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDomainsDomainWhoisQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.domains[':domain'].whois.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDomainsDomainWhois<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.domains)[':domain']['whois']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDomainsDomainWhoisQueryKey>
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
          Awaited<ReturnType<(typeof client.domains)[':domain']['whois']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainWhoisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDomainsDomainWhoisQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.domains[':domain'].whois.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
