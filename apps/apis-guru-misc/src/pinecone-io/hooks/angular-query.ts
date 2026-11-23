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

export function getCollectionsKey() {
  return ['collections'] as const
}

export function getDescribeIndexStatsKey() {
  return ['describe_index_stats'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getQueryKey() {
  return ['query'] as const
}

export function getVectorsKey() {
  return ['vectors'] as const
}

export function getCollectionsQueryKey() {
  return ['collections', '/collections'] as const
}

export function getCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCollectionsQueryKey>
  >({
    queryKey: getCollectionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.collections.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCollectionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCollectionsMutationKey() {
  return ['collections', '/collections', 'POST'] as const
}

export function getPostCollectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>>,
    TError,
    InferRequestType<typeof client.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collections.$post>) {
      return parseResponse(client.collections.$post(args, options))
    },
  })
}

export function injectPostCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collections.$post>,
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
    const mutationDefaults = getPostCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCollectionsCollectionNameQueryKey(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
) {
  return ['collections', '/collections/:collectionName', args] as const
}

export function getCollectionsCollectionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCollectionsCollectionNameQueryKey>
  >({
    queryKey: getCollectionsCollectionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.collections[':collectionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCollectionsCollectionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.collections)[':collectionName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collectionName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCollectionsCollectionNameQueryKey>
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
      ...getCollectionsCollectionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCollectionsCollectionNameMutationKey() {
  return ['collections', '/collections/:collectionName', 'DELETE'] as const
}

export function getDeleteCollectionsCollectionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.collections)[':collectionName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCollectionsCollectionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
    ) {
      return parseResponse(client.collections[':collectionName'].$delete(args, options))
    },
  })
}

export function injectDeleteCollectionsCollectionName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.collections)[':collectionName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.collections)[':collectionName']['$delete']>,
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
    const mutationDefaults = getDeleteCollectionsCollectionNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeIndexStatsMutationKey() {
  return ['describe_index_stats', '/describe_index_stats', 'POST'] as const
}

export function getPostDescribeIndexStatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describe_index_stats.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describe_index_stats.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeIndexStatsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describe_index_stats.$post>) {
      return parseResponse(client.describe_index_stats.$post(args, options))
    },
  })
}

export function injectPostDescribeIndexStats<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describe_index_stats.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describe_index_stats.$post>,
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
    const mutationDefaults = getPostDescribeIndexStatsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIndexesQueryKey() {
  return ['indexes', '/indexes'] as const
}

export function getIndexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexesQueryKey>
  >({
    queryKey: getIndexesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostIndexesMutationKey() {
  return ['indexes', '/indexes', 'POST'] as const
}

export function getPostIndexesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
    TError,
    InferRequestType<typeof client.indexes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.$post>) {
      return parseResponse(client.indexes.$post(args, options))
    },
  })
}

export function injectPostIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>>,
        TError,
        InferRequestType<typeof client.indexes.$post>,
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
    const mutationDefaults = getPostIndexesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIndexesIndexNameQueryKey(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
) {
  return ['indexes', '/indexes/:indexName', args] as const
}

export function getIndexesIndexNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesIndexNameQueryKey>
  >({
    queryKey: getIndexesIndexNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes[':indexName'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndexesIndexName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.indexes)[':indexName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesIndexNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesIndexNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteIndexesIndexNameMutationKey() {
  return ['indexes', '/indexes/:indexName', 'DELETE'] as const
}

export function getDeleteIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesIndexNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':indexName']['$delete']>) {
      return parseResponse(client.indexes[':indexName'].$delete(args, options))
    },
  })
}

export function injectDeleteIndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexName']['$delete']>,
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
    const mutationDefaults = getDeleteIndexesIndexNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchIndexesIndexNameMutationKey() {
  return ['indexes', '/indexes/:indexName', 'PATCH'] as const
}

export function getPatchIndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)[':indexName']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)[':indexName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesIndexNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)[':indexName']['$patch']>) {
      return parseResponse(client.indexes[':indexName'].$patch(args, options))
    },
  })
}

export function injectPatchIndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)[':indexName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)[':indexName']['$patch']>,
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
    const mutationDefaults = getPatchIndexesIndexNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostQueryMutationKey() {
  return ['query', '/query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.query.$post>) {
      return parseResponse(client.query.$post(args, options))
    },
  })
}

export function injectPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query.$post>>>>>,
        TError,
        InferRequestType<typeof client.query.$post>,
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
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVectorsDeleteMutationKey() {
  return ['vectors', '/vectors/delete', 'POST'] as const
}

export function getPostVectorsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vectors.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vectors.delete.$post>) {
      return parseResponse(client.vectors.delete.$post(args, options))
    },
  })
}

export function injectPostVectorsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.delete.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vectors.delete.$post>,
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
    const mutationDefaults = getPostVectorsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVectorsFetchMutationKey() {
  return ['vectors', '/vectors/fetch', 'POST'] as const
}

export function getPostVectorsFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.fetch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vectors.fetch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorsFetchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vectors.fetch.$post>) {
      return parseResponse(client.vectors.fetch.$post(args, options))
    },
  })
}

export function injectPostVectorsFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.fetch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vectors.fetch.$post>,
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
    const mutationDefaults = getPostVectorsFetchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVectorsUpdateMutationKey() {
  return ['vectors', '/vectors/update', 'POST'] as const
}

export function getPostVectorsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.update.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vectors.update.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vectors.update.$post>) {
      return parseResponse(client.vectors.update.$post(args, options))
    },
  })
}

export function injectPostVectorsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.update.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vectors.update.$post>,
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
    const mutationDefaults = getPostVectorsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostVectorsUpsertMutationKey() {
  return ['vectors', '/vectors/upsert', 'POST'] as const
}

export function getPostVectorsUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.upsert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vectors.upsert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVectorsUpsertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vectors.upsert.$post>) {
      return parseResponse(client.vectors.upsert.$post(args, options))
    },
  })
}

export function injectPostVectorsUpsert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vectors.upsert.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vectors.upsert.$post>,
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
    const mutationDefaults = getPostVectorsUpsertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
