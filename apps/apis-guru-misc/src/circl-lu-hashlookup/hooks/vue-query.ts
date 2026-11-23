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

export function getBulkKey() {
  return ['bulk'] as const
}

export function getChildrenKey() {
  return ['children'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getLookupKey() {
  return ['lookup'] as const
}

export function getParentsKey() {
  return ['parents'] as const
}

export function getSessionKey() {
  return ['session'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getPostBulkMd5MutationKey() {
  return ['bulk', '/bulk/md5', 'POST'] as const
}

export function getPostBulkMd5MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.md5.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBulkMd5MutationKey(),
    async mutationFn() {
      return parseResponse(client.bulk.md5.$post(undefined, options))
    },
  })
}

export function usePostBulkMd5<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.md5.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostBulkMd5MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBulkSha1MutationKey() {
  return ['bulk', '/bulk/sha1', 'POST'] as const
}

export function getPostBulkSha1MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.sha1.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBulkSha1MutationKey(),
    async mutationFn() {
      return parseResponse(client.bulk.sha1.$post(undefined, options))
    },
  })
}

export function usePostBulkSha1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.sha1.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostBulkSha1MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChildrenSha1CountCursorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>
  >,
) {
  return ['children', '/children/:sha1/:count/:cursor', toValue(args)] as const
}

export function getChildrenSha1CountCursorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChildrenSha1CountCursorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.children[':sha1'][':count'][':cursor'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useChildrenSha1CountCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChildrenSha1CountCursorQueryKey>
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
          Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChildrenSha1CountCursorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChildrenSha1CountCursorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.children[':sha1'][':count'][':cursor'].$get(toValue(args), {
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

export function getLookupMd5Md5QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>>,
) {
  return ['lookup', '/lookup/md5/:md5', toValue(args)] as const
}

export function getLookupMd5Md5QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupMd5Md5QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.md5[':md5'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLookupMd5Md5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
            >
          >,
          ReturnType<typeof getLookupMd5Md5QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupMd5Md5QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupMd5Md5QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.md5[':md5'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupSha1Sha1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>>,
) {
  return ['lookup', '/lookup/sha1/:sha1', toValue(args)] as const
}

export function getLookupSha1Sha1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupSha1Sha1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.sha1[':sha1'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLookupSha1Sha1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupSha1Sha1QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSha1Sha1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupSha1Sha1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.sha1[':sha1'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLookupSha256Sha256QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>>,
) {
  return ['lookup', '/lookup/sha256/:sha256', toValue(args)] as const
}

export function getLookupSha256Sha256QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLookupSha256Sha256QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lookup.sha256[':sha256'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLookupSha256Sha256<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLookupSha256Sha256QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSha256Sha256QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLookupSha256Sha256QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lookup.sha256[':sha256'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParentsSha1CountCursorQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>
  >,
) {
  return ['parents', '/parents/:sha1/:count/:cursor', toValue(args)] as const
}

export function getParentsSha1CountCursorQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParentsSha1CountCursorQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parents[':sha1'][':count'][':cursor'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParentsSha1CountCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
              >
            >
          >,
          ReturnType<typeof getParentsSha1CountCursorQueryKey>
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
          Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParentsSha1CountCursorQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParentsSha1CountCursorQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parents[':sha1'][':count'][':cursor'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionCreateNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.create)[':name']['$get']>>,
) {
  return ['session', '/session/create/:name', toValue(args)] as const
}

export function getSessionCreateNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.create)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionCreateNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.session.create[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionCreateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.create)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionCreateNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionCreateNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionCreateNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.session.create[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionGetNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.get)[':name']['$get']>>,
) {
  return ['session', '/session/get/:name', toValue(args)] as const
}

export function getSessionGetNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.get)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionGetNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.session.get[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionGetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.session.get)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionGetNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionGetNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionGetNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.session.get[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsTopQueryKey() {
  return ['stats', '/stats/top'] as const
}

export function getStatsTopQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsTopQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.top.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
          >,
          ReturnType<typeof getStatsTopQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsTopQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.top.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
