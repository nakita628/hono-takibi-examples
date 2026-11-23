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

export function getDumpsKey() {
  return ['dumps'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getIndexesKey() {
  return ['indexes'] as const
}

export function getKeysKey() {
  return ['keys'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getPostDumpsMutationKey() {
  return ['dumps', '/dumps', 'POST'] as const
}

export function getPostDumpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDumpsMutationKey(),
    async mutationFn() {
      return parseResponse(client.dumps.$post(undefined, options))
    },
  })
}

export function injectPostDumps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
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
    const mutationDefaults = getPostDumpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIndexesQueryKey(args: InferRequestType<typeof client.indexes.$get>) {
  return ['indexes', '/indexes', args] as const
}

export function getIndexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indexes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexesQueryKey>
  >({
    queryKey: getIndexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.$get(args, { ...options, init: { ...options?.init, signal } }),
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
  args: () => InferRequestType<typeof client.indexes.$get>,
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
    return { ...getIndexesQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function getIndexesBooksQueryKey() {
  return ['indexes', '/indexes/books'] as const
}

export function getIndexesBooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksQueryKey>
  >({
    queryKey: getIndexesBooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndexesBooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesBooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteIndexesBooksMutationKey() {
  return ['indexes', '/indexes/books', 'DELETE'] as const
}

export function getDeleteIndexesBooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$delete>>>>
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
    const mutationDefaults = getDeleteIndexesBooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchIndexesBooksMutationKey() {
  return ['indexes', '/indexes/books', 'PATCH'] as const
}

export function getPatchIndexesBooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.indexes.books.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesBooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.$patch>) {
      return parseResponse(client.indexes.books.$patch(args, options))
    },
  })
}

export function injectPatchIndexesBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$patch>>>>
        >,
        TError,
        InferRequestType<typeof client.indexes.books.$patch>,
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
    const mutationDefaults = getPatchIndexesBooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIndexesBooksDocumentsQueryKey(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
) {
  return ['indexes', '/indexes/books/documents', args] as const
}

export function getIndexesBooksDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.indexes.books.documents.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksDocumentsQueryKey>
  >({
    queryKey: getIndexesBooksDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.indexes.books.documents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksDocumentsQueryKey>
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
      ...getIndexesBooksDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksDocumentsMutationKey() {
  return ['indexes', '/indexes/books/documents', 'PUT'] as const
}

export function getPutIndexesBooksDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.documents.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.documents.$put>) {
      return parseResponse(client.indexes.books.documents.$put(args, options))
    },
  })
}

export function injectPutIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.documents.$put>,
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
    const mutationDefaults = getPutIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostIndexesBooksDocumentsMutationKey() {
  return ['indexes', '/indexes/books/documents', 'POST'] as const
}

export function getPostIndexesBooksDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesBooksDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.documents.$post>) {
      return parseResponse(client.indexes.books.documents.$post(args, options))
    },
  })
}

export function injectPostIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.documents.$post>,
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
    const mutationDefaults = getPostIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteIndexesBooksDocumentsMutationKey() {
  return ['indexes', '/indexes/books/documents', 'DELETE'] as const
}

export function getDeleteIndexesBooksDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksDocumentsMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.documents.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$delete>>>
          >
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
    const mutationDefaults = getDeleteIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteIndexesBooksDocuments1MutationKey() {
  return ['indexes', '/indexes/books/documents/1', 'DELETE'] as const
}

export function getDeleteIndexesBooksDocuments1MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.documents)['1']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksDocuments1MutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.documents['1'].$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksDocuments1<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.documents)['1']['$delete']>>
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksDocuments1MutationOptions<
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

export function getIndexesBooksDocuments2QueryKey(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
) {
  return ['indexes', '/indexes/books/documents/2', args] as const
}

export function getIndexesBooksDocuments2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksDocuments2QueryKey>
  >({
    queryKey: getIndexesBooksDocuments2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.documents['2'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksDocuments2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksDocuments2QueryKey>
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
      ...getIndexesBooksDocuments2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostIndexesBooksDocumentsDeleteBatchMutationKey() {
  return ['indexes', '/indexes/books/documents/delete-batch', 'POST'] as const
}

export function getPostIndexesBooksDocumentsDeleteBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.documents)['delete-batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesBooksDocumentsDeleteBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>,
    ) {
      return parseResponse(client.indexes.books.documents['delete-batch'].$post(args, options))
    },
  })
}

export function injectPostIndexesBooksDocumentsDeleteBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.documents)['delete-batch']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>,
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
    const mutationDefaults = getPostIndexesBooksDocumentsDeleteBatchMutationOptions<
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

export function getIndexesBooksSearchQueryKey(
  args: InferRequestType<typeof client.indexes.books.search.$get>,
) {
  return ['indexes', '/indexes/books/search', args] as const
}

export function getIndexesBooksSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indexes.books.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSearchQueryKey>
  >({
    queryKey: getIndexesBooksSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIndexesBooksSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.indexes.books.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesBooksSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIndexesBooksSearchMutationKey() {
  return ['indexes', '/indexes/books/search', 'POST'] as const
}

export function getPostIndexesBooksSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesBooksSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.search.$post>) {
      return parseResponse(client.indexes.books.search.$post(args, options))
    },
  })
}

export function injectPostIndexesBooksSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.search.$post>,
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
    const mutationDefaults = getPostIndexesBooksSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIndexesBooksSettingsQueryKey() {
  return ['indexes', '/indexes/books/settings'] as const
}

export function getIndexesBooksSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsQueryKey>
  >({
    queryKey: getIndexesBooksSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesBooksSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteIndexesBooksSettingsMutationKey() {
  return ['indexes', '/indexes/books/settings', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.settings.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$delete>>>
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchIndexesBooksSettingsMutationKey() {
  return ['indexes', '/indexes/books/settings', 'PATCH'] as const
}

export function getPatchIndexesBooksSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.settings.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesBooksSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.settings.$patch>) {
      return parseResponse(client.indexes.books.settings.$patch(args, options))
    },
  })
}

export function injectPatchIndexesBooksSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.settings.$patch>,
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
    const mutationDefaults = getPatchIndexesBooksSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIndexesBooksSettingsDisplayedAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes'] as const
}

export function getIndexesBooksSettingsDisplayedAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsDisplayedAttributesQueryKey>
  >({
    queryKey: getIndexesBooksSettingsDisplayedAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['displayed-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsDisplayedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsDisplayedAttributesQueryKey>
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
      ...getIndexesBooksSettingsDisplayedAttributesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsDisplayedAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes', 'PUT'] as const
}

export function getPutIndexesBooksSettingsDisplayedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsDisplayedAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes.books.settings)['displayed-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes.books.settings['displayed-attributes'].$put(args, options),
      )
    },
  })
}

export function injectPutIndexesBooksSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['displayed-attributes']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsDisplayedAttributesMutationOptions<
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

export function getDeleteIndexesBooksSettingsDisplayedAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsDisplayedAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsDisplayedAttributesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['displayed-attributes'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes.books.settings)['displayed-attributes']['$delete']
                >
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsDisplayedAttributesMutationOptions<
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

export function getIndexesBooksSettingsDistinctAttributeQueryKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute'] as const
}

export function getIndexesBooksSettingsDistinctAttributeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsDistinctAttributeQueryKey>
  >({
    queryKey: getIndexesBooksSettingsDistinctAttributeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['distinct-attribute'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsDistinctAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsDistinctAttributeQueryKey>
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
      ...getIndexesBooksSettingsDistinctAttributeQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsDistinctAttributeMutationKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute', 'PUT'] as const
}

export function getPutIndexesBooksSettingsDistinctAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$put']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsDistinctAttributeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['distinct-attribute'].$put(undefined, options),
      )
    },
  })
}

export function injectPutIndexesBooksSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$put']>
              >
            >
          >
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
    const mutationDefaults = getPutIndexesBooksSettingsDistinctAttributeMutationOptions<
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

export function getDeleteIndexesBooksSettingsDistinctAttributeMutationKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsDistinctAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsDistinctAttributeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['distinct-attribute'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$delete']>
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsDistinctAttributeMutationOptions<
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

export function getIndexesBooksSettingsFacetingQueryKey() {
  return ['indexes', '/indexes/books/settings/faceting'] as const
}

export function getIndexesBooksSettingsFacetingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsFacetingQueryKey>
  >({
    queryKey: getIndexesBooksSettingsFacetingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings.faceting.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsFaceting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsFacetingQueryKey>
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
      ...getIndexesBooksSettingsFacetingQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteIndexesBooksSettingsFacetingMutationKey() {
  return ['indexes', '/indexes/books/settings/faceting', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsFacetingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsFacetingMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.settings.faceting.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$delete>>
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsFacetingMutationOptions<
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

export function getPatchIndexesBooksSettingsFacetingMutationKey() {
  return ['indexes', '/indexes/books/settings/faceting', 'PATCH'] as const
}

export function getPatchIndexesBooksSettingsFacetingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.settings.faceting.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesBooksSettingsFacetingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.settings.faceting.$patch>) {
      return parseResponse(client.indexes.books.settings.faceting.$patch(args, options))
    },
  })
}

export function injectPatchIndexesBooksSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.settings.faceting.$patch>,
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
    const mutationDefaults = getPatchIndexesBooksSettingsFacetingMutationOptions<
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

export function getIndexesBooksSettingsFilterableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes'] as const
}

export function getIndexesBooksSettingsFilterableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsFilterableAttributesQueryKey>
  >({
    queryKey: getIndexesBooksSettingsFilterableAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['filterable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsFilterableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsFilterableAttributesQueryKey>
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
      ...getIndexesBooksSettingsFilterableAttributesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsFilterableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes', 'PUT'] as const
}

export function getPutIndexesBooksSettingsFilterableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsFilterableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes.books.settings)['filterable-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes.books.settings['filterable-attributes'].$put(args, options),
      )
    },
  })
}

export function injectPutIndexesBooksSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsFilterableAttributesMutationOptions<
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

export function getDeleteIndexesBooksSettingsFilterableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsFilterableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsFilterableAttributesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['filterable-attributes'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes.books.settings)['filterable-attributes']['$delete']
                >
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsFilterableAttributesMutationOptions<
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

export function getIndexesBooksSettingsPaginationQueryKey() {
  return ['indexes', '/indexes/books/settings/pagination'] as const
}

export function getIndexesBooksSettingsPaginationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsPaginationQueryKey>
  >({
    queryKey: getIndexesBooksSettingsPaginationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings.pagination.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsPaginationQueryKey>
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
      ...getIndexesBooksSettingsPaginationQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteIndexesBooksSettingsPaginationMutationKey() {
  return ['indexes', '/indexes/books/settings/pagination', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsPaginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsPaginationMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.settings.pagination.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$delete>>
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsPaginationMutationOptions<
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

export function getPatchIndexesBooksSettingsPaginationMutationKey() {
  return ['indexes', '/indexes/books/settings/pagination', 'PATCH'] as const
}

export function getPatchIndexesBooksSettingsPaginationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.settings.pagination.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesBooksSettingsPaginationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.indexes.books.settings.pagination.$patch>,
    ) {
      return parseResponse(client.indexes.books.settings.pagination.$patch(args, options))
    },
  })
}

export function injectPatchIndexesBooksSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.settings.pagination.$patch>,
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
    const mutationDefaults = getPatchIndexesBooksSettingsPaginationMutationOptions<
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

export function getIndexesBooksSettingsRankingRulesQueryKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules'] as const
}

export function getIndexesBooksSettingsRankingRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsRankingRulesQueryKey>
  >({
    queryKey: getIndexesBooksSettingsRankingRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['ranking-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsRankingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsRankingRulesQueryKey>
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
      ...getIndexesBooksSettingsRankingRulesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsRankingRulesMutationKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules', 'PUT'] as const
}

export function getPutIndexesBooksSettingsRankingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsRankingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>,
    ) {
      return parseResponse(client.indexes.books.settings['ranking-rules'].$put(args, options))
    },
  })
}

export function injectPutIndexesBooksSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['ranking-rules']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsRankingRulesMutationOptions<
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

export function getDeleteIndexesBooksSettingsRankingRulesMutationKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsRankingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsRankingRulesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['ranking-rules'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$delete']>
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsRankingRulesMutationOptions<
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

export function getIndexesBooksSettingsSearchableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes'] as const
}

export function getIndexesBooksSettingsSearchableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSearchableAttributesQueryKey>
  >({
    queryKey: getIndexesBooksSettingsSearchableAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['searchable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsSearchableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsSearchableAttributesQueryKey>
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
      ...getIndexesBooksSettingsSearchableAttributesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsSearchableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes', 'PUT'] as const
}

export function getPutIndexesBooksSettingsSearchableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsSearchableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.indexes.books.settings)['searchable-attributes']['$put']
      >,
    ) {
      return parseResponse(
        client.indexes.books.settings['searchable-attributes'].$put(args, options),
      )
    },
  })
}

export function injectPutIndexesBooksSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsSearchableAttributesMutationOptions<
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

export function getDeleteIndexesBooksSettingsSearchableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsSearchableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsSearchableAttributesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['searchable-attributes'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.indexes.books.settings)['searchable-attributes']['$delete']
                >
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsSearchableAttributesMutationOptions<
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

export function getIndexesBooksSettingsSortableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes'] as const
}

export function getIndexesBooksSettingsSortableAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSortableAttributesQueryKey>
  >({
    queryKey: getIndexesBooksSettingsSortableAttributesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['sortable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsSortableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsSortableAttributesQueryKey>
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
      ...getIndexesBooksSettingsSortableAttributesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsSortableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes', 'PUT'] as const
}

export function getPutIndexesBooksSettingsSortableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsSortableAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>,
    ) {
      return parseResponse(client.indexes.books.settings['sortable-attributes'].$put(args, options))
    },
  })
}

export function injectPutIndexesBooksSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['sortable-attributes']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsSortableAttributesMutationOptions<
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

export function getDeleteIndexesBooksSettingsSortableAttributesMutationKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsSortableAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$delete']>
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsSortableAttributesMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['sortable-attributes'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$delete']>
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsSortableAttributesMutationOptions<
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

export function getIndexesBooksSettingsStopWordsQueryKey(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
) {
  return ['indexes', '/indexes/books/settings/stop-words', args] as const
}

export function getIndexesBooksSettingsStopWordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsStopWordsQueryKey>
  >({
    queryKey: getIndexesBooksSettingsStopWordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['stop-words'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsStopWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsStopWordsQueryKey>
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
      ...getIndexesBooksSettingsStopWordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsStopWordsMutationKey() {
  return ['indexes', '/indexes/books/settings/stop-words', 'PUT'] as const
}

export function getPutIndexesBooksSettingsStopWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsStopWordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']>,
    ) {
      return parseResponse(client.indexes.books.settings['stop-words'].$put(args, options))
    },
  })
}

export function injectPutIndexesBooksSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$put']>,
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
    const mutationDefaults = getPutIndexesBooksSettingsStopWordsMutationOptions<
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

export function getDeleteIndexesBooksSettingsStopWordsMutationKey() {
  return ['indexes', '/indexes/books/settings/stop-words', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsStopWordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsStopWordsMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.settings['stop-words'].$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$delete']>>
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsStopWordsMutationOptions<
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

export function getIndexesBooksSettingsSynonymsQueryKey() {
  return ['indexes', '/indexes/books/settings/synonyms'] as const
}

export function getIndexesBooksSettingsSynonymsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSynonymsQueryKey>
  >({
    queryKey: getIndexesBooksSettingsSynonymsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings.synonyms.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsSynonymsQueryKey>
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
      ...getIndexesBooksSettingsSynonymsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutIndexesBooksSettingsSynonymsMutationKey() {
  return ['indexes', '/indexes/books/settings/synonyms', 'PUT'] as const
}

export function getPutIndexesBooksSettingsSynonymsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.indexes.books.settings.synonyms.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutIndexesBooksSettingsSynonymsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.indexes.books.settings.synonyms.$put>) {
      return parseResponse(client.indexes.books.settings.synonyms.$put(args, options))
    },
  })
}

export function injectPutIndexesBooksSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.indexes.books.settings.synonyms.$put>,
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
    const mutationDefaults = getPutIndexesBooksSettingsSynonymsMutationOptions<
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

export function getDeleteIndexesBooksSettingsSynonymsMutationKey() {
  return ['indexes', '/indexes/books/settings/synonyms', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsSynonymsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$delete>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsSynonymsMutationKey(),
    async mutationFn() {
      return parseResponse(client.indexes.books.settings.synonyms.$delete(undefined, options))
    },
  })
}

export function injectDeleteIndexesBooksSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$delete>>
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsSynonymsMutationOptions<
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

export function getIndexesBooksSettingsTypoToleranceQueryKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance'] as const
}

export function getIndexesBooksSettingsTypoToleranceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsTypoToleranceQueryKey>
  >({
    queryKey: getIndexesBooksSettingsTypoToleranceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.settings['typo-tolerance'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksSettingsTypoTolerance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksSettingsTypoToleranceQueryKey>
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
      ...getIndexesBooksSettingsTypoToleranceQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteIndexesBooksSettingsTypoToleranceMutationKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance', 'DELETE'] as const
}

export function getDeleteIndexesBooksSettingsTypoToleranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteIndexesBooksSettingsTypoToleranceMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.indexes.books.settings['typo-tolerance'].$delete(undefined, options),
      )
    },
  })
}

export function injectDeleteIndexesBooksSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$delete']>
              >
            >
          >
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
    const mutationDefaults = getDeleteIndexesBooksSettingsTypoToleranceMutationOptions<
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

export function getPatchIndexesBooksSettingsTypoToleranceMutationKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance', 'PATCH'] as const
}

export function getPatchIndexesBooksSettingsTypoToleranceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIndexesBooksSettingsTypoToleranceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>,
    ) {
      return parseResponse(client.indexes.books.settings['typo-tolerance'].$patch(args, options))
    },
  })
}

export function injectPatchIndexesBooksSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes.books.settings)['typo-tolerance']['$patch']>,
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
    const mutationDefaults = getPatchIndexesBooksSettingsTypoToleranceMutationOptions<
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

export function getIndexesBooksStatsQueryKey() {
  return ['indexes', '/indexes/books/stats'] as const
}

export function getIndexesBooksStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksStatsQueryKey>
  >({
    queryKey: getIndexesBooksStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.indexes.books.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectIndexesBooksStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIndexesBooksStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIndexesBooksStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostIndexesSwapIndexesMutationKey() {
  return ['indexes', '/indexes/swap-indexes', 'POST'] as const
}

export function getPostIndexesSwapIndexesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.indexes)['swap-indexes']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.indexes)['swap-indexes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIndexesSwapIndexesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.indexes)['swap-indexes']['$post']>) {
      return parseResponse(client.indexes['swap-indexes'].$post(args, options))
    },
  })
}

export function injectPostIndexesSwapIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.indexes)['swap-indexes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.indexes)['swap-indexes']['$post']>,
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
    const mutationDefaults = getPostIndexesSwapIndexesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysQueryKey(args: InferRequestType<typeof client.keys.$get>) {
  return ['keys', '/keys', args] as const
}

export function getKeysQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >({
    queryKey: getKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostKeysMutationKey() {
  return ['keys', '/keys', 'POST'] as const
}

export function getPostKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.keys.$post>) {
      return parseResponse(client.keys.$post(args, options))
    },
  })
}

export function injectPostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
        TError,
        InferRequestType<typeof client.keys.$post>,
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
    const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey() {
  return [
    'keys',
    '/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705',
  ] as const
}

export function getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey
    >
  >({
    queryKey:
      getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
          undefined,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey
        >
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
      ...getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryOptions<
        TData,
        TError
      >(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bMutationKey() {
  return [
    'keys',
    '/keys/kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b',
    'DELETE',
  ] as const
}

export function getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete
            >
          >
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete(
          undefined,
          options,
        ),
      )
    },
  })
}

export function injectDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.keys.kN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b.$delete
                >
              >
            >
          >
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
    const mutationDefaults =
      getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bMutationOptions<
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

export function getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddMutationKey() {
  return [
    'keys',
    '/keys/wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd',
    'PATCH',
  ] as const
}

export function getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
      >,
    ) {
      return parseResponse(
        client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          typeof client.keys.wYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd.$patch
        >,
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
    const mutationDefaults =
      getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddMutationOptions<
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

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >({
    queryKey: getStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getTasksQueryKey(args: InferRequestType<typeof client.tasks.$get>) {
  return ['tasks', '/tasks', args] as const
}

export function getTasksQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >({
    queryKey: getTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tasks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteTasksMutationKey() {
  return ['tasks', '/tasks', 'DELETE'] as const
}

export function getDeleteTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>>,
    TError,
    InferRequestType<typeof client.tasks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.$delete>) {
      return parseResponse(client.tasks.$delete(args, options))
    },
  })
}

export function injectDeleteTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>>,
        TError,
        InferRequestType<typeof client.tasks.$delete>,
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
    const mutationDefaults = getDeleteTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTasks0QueryKey() {
  return ['tasks', '/tasks/0'] as const
}

export function getTasks0QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTasks0QueryKey>
  >({
    queryKey: getTasks0QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks['0'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTasks0<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTasks0QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTasks0QueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostTasksCancelMutationKey() {
  return ['tasks', '/tasks/cancel', 'POST'] as const
}

export function getPostTasksCancelMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tasks.cancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tasks.cancel.$post>) {
      return parseResponse(client.tasks.cancel.$post(args, options))
    },
  })
}

export function injectPostTasksCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tasks.cancel.$post>,
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
    const mutationDefaults = getPostTasksCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
