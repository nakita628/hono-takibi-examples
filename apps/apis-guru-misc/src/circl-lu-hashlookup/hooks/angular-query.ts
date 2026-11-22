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

export function injectPostBulkMd5<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.md5.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostBulkMd5MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostBulkSha1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk.sha1.$post>>>>
        >,
        TError,
        void,
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
    const mutationDefaults = getPostBulkSha1MutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getChildrenSha1CountCursorQueryKey(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
) {
  return ['children', '/children/:sha1/:count/:cursor', args] as const
}

export function getChildrenSha1CountCursorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getChildrenSha1CountCursorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.children[':sha1'][':count'][':cursor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectChildrenSha1CountCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.children)[':sha1'][':count'][':cursor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getChildrenSha1CountCursorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
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

export function getLookupMd5Md5QueryKey(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
) {
  return ['lookup', '/lookup/md5/:md5', args] as const
}

export function getLookupMd5Md5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupMd5Md5QueryKey>
  >({
    queryKey: getLookupMd5Md5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.md5[':md5'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLookupMd5Md5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.md5)[':md5']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.md5)[':md5']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupMd5Md5QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupMd5Md5QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLookupSha1Sha1QueryKey(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
) {
  return ['lookup', '/lookup/sha1/:sha1', args] as const
}

export function getLookupSha1Sha1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSha1Sha1QueryKey>
  >({
    queryKey: getLookupSha1Sha1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.sha1[':sha1'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLookupSha1Sha1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.sha1)[':sha1']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha1)[':sha1']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupSha1Sha1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupSha1Sha1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLookupSha256Sha256QueryKey(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
) {
  return ['lookup', '/lookup/sha256/:sha256', args] as const
}

export function getLookupSha256Sha256QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLookupSha256Sha256QueryKey>
  >({
    queryKey: getLookupSha256Sha256QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lookup.sha256[':sha256'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLookupSha256Sha256<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lookup.sha256)[':sha256']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lookup.sha256)[':sha256']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLookupSha256Sha256QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLookupSha256Sha256QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getParentsSha1CountCursorQueryKey(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
) {
  return ['parents', '/parents/:sha1/:count/:cursor', args] as const
}

export function getParentsSha1CountCursorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getParentsSha1CountCursorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parents[':sha1'][':count'][':cursor'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectParentsSha1CountCursor<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.parents)[':sha1'][':count'][':cursor']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getParentsSha1CountCursorQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSessionCreateNameQueryKey(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
) {
  return ['session', '/session/create/:name', args] as const
}

export function getSessionCreateNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.session.create)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionCreateNameQueryKey>
  >({
    queryKey: getSessionCreateNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.session.create[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSessionCreateName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.session.create)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.session.create)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionCreateNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionCreateNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSessionGetNameQueryKey(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
) {
  return ['session', '/session/get/:name', args] as const
}

export function getSessionGetNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.session.get)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionGetNameQueryKey>
  >({
    queryKey: getSessionGetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.session.get[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSessionGetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.session.get)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.session.get)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionGetNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionGetNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStatsTopQueryKey() {
  return ['stats', '/stats/top'] as const
}

export function getStatsTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsTopQueryKey>
  >({
    queryKey: getStatsTopQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.top.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatsTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.top.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatsTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsTopQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
