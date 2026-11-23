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

export function usePostDumps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dumps.$post>>>>>,
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
  const mutationDefaults = getPostDumpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIndexesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.$get>>,
) {
  return ['indexes', '/indexes', toValue(args)] as const
}

export function getIndexesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>
          >,
          ReturnType<typeof getIndexesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.indexes.$post>,
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
  const mutationDefaults = getPostIndexesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksQueryKey() {
  return ['indexes', '/indexes/books'] as const
}

export function getIndexesBooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndexesBooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
          >,
          ReturnType<typeof getIndexesBooksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIndexesBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$delete>>>
            >
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
  const mutationDefaults = getDeleteIndexesBooksMutationOptions<TError, TOnMutateResult>(
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

export function usePatchIndexesBooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexes.books.$patch>,
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
  const mutationDefaults = getPatchIndexesBooksMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesBooksDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.documents.$get>>,
) {
  return ['indexes', '/indexes/books/documents', toValue(args)] as const
}

export function getIndexesBooksDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexesBooksDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
            >
          >,
          ReturnType<typeof getIndexesBooksDocumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexesBooksDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexes.books.documents.$put>,
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
  const mutationDefaults = getPutIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function usePostIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.documents.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexes.books.documents.$post>,
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
  const mutationDefaults = getPostIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteIndexesBooksDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.indexes.books.documents.$delete>>
              >
            >
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
  const mutationDefaults = getDeleteIndexesBooksDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteIndexesBooksDocuments1<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksDocuments1MutationOptions<TError, TOnMutateResult>(
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

export function getIndexesBooksDocuments2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>>,
) {
  return ['indexes', '/indexes/books/documents/2', toValue(args)] as const
}

export function getIndexesBooksDocuments2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexesBooksDocuments2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.documents['2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksDocuments2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.indexes.books.documents)['2']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksDocuments2QueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.documents)['2']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksDocuments2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexesBooksDocuments2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.documents['2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexesBooksDocumentsDeleteBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.indexes.books.documents)['delete-batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.indexes.books.documents)['delete-batch']['$post']>,
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
  const mutationDefaults = getPostIndexesBooksDocumentsDeleteBatchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.search.$get>>,
) {
  return ['indexes', '/indexes/books/search', toValue(args)] as const
}

export function getIndexesBooksSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexesBooksSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexes.books.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>
            >
          >,
          ReturnType<typeof getIndexesBooksSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexesBooksSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexesBooksSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexes.books.search.$post>,
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
  const mutationDefaults = getPostIndexesBooksSearchMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesBooksSettingsQueryKey() {
  return ['indexes', '/indexes/books/settings'] as const
}

export function getIndexesBooksSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.indexes.books.settings.$delete>>
              >
            >
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
  const mutationDefaults = getDeleteIndexesBooksSettingsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchIndexesBooksSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.indexes.books.settings.$patch>,
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
  const mutationDefaults = getPatchIndexesBooksSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getIndexesBooksSettingsDisplayedAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/displayed-attributes'] as const
}

export function getIndexesBooksSettingsDisplayedAttributesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getIndexesBooksSettingsDisplayedAttributesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['displayed-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsDisplayedAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
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
                  ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsDisplayedAttributesQueryKey>
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
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['displayed-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsDisplayedAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsDisplayedAttributesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['displayed-attributes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsDisplayedAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsDisplayedAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsDisplayedAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsDistinctAttributeQueryKey() {
  return ['indexes', '/indexes/books/settings/distinct-attribute'] as const
}

export function getIndexesBooksSettingsDistinctAttributeQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getIndexesBooksSettingsDistinctAttributeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['distinct-attribute'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsDistinctAttribute<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>
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
                  ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsDistinctAttributeQueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.settings)['distinct-attribute']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsDistinctAttributeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsDistinctAttributeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['distinct-attribute'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsDistinctAttributeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsDistinctAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['distinct-attribute']['$delete']
                  >
                >
              >
            >
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
  const mutationDefaults = getDeleteIndexesBooksSettingsDistinctAttributeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsFacetingQueryKey() {
  return ['indexes', '/indexes/books/settings/faceting'] as const
}

export function getIndexesBooksSettingsFacetingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsFacetingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings.faceting.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsFaceting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>>
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
                Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsFacetingQueryKey>
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
          Awaited<ReturnType<typeof client.indexes.books.settings.faceting.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsFacetingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsFacetingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings.faceting.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsFacetingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchIndexesBooksSettingsFaceting<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesBooksSettingsFacetingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsFilterableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/filterable-attributes'] as const
}

export function getIndexesBooksSettingsFilterableAttributesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getIndexesBooksSettingsFilterableAttributesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['filterable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsFilterableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>>
      >
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
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['filterable-attributes']['$get']
                  >
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
                  ReturnType<
                    (typeof client.indexes.books.settings)['filterable-attributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsFilterableAttributesQueryKey>
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
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['filterable-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsFilterableAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsFilterableAttributesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['filterable-attributes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['filterable-attributes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.indexes.books.settings)['filterable-attributes']['$put']>,
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
  const mutationDefaults = getPutIndexesBooksSettingsFilterableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsFilterableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsFilterableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsPaginationQueryKey() {
  return ['indexes', '/indexes/books/settings/pagination'] as const
}

export function getIndexesBooksSettingsPaginationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsPaginationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings.pagination.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsPagination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
      >
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
                Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsPaginationQueryKey>
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
          Awaited<ReturnType<typeof client.indexes.books.settings.pagination.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsPaginationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsPaginationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings.pagination.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsPaginationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchIndexesBooksSettingsPagination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesBooksSettingsPaginationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsRankingRulesQueryKey() {
  return ['indexes', '/indexes/books/settings/ranking-rules'] as const
}

export function getIndexesBooksSettingsRankingRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsRankingRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['ranking-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsRankingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsRankingRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.settings)['ranking-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsRankingRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsRankingRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['ranking-rules'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsRankingRulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsRankingRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsRankingRulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsSearchableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/searchable-attributes'] as const
}

export function getIndexesBooksSettingsSearchableAttributesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getIndexesBooksSettingsSearchableAttributesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['searchable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsSearchableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>>
      >
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
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['searchable-attributes']['$get']
                  >
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
                  ReturnType<
                    (typeof client.indexes.books.settings)['searchable-attributes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsSearchableAttributesQueryKey>
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
          Awaited<
            ReturnType<(typeof client.indexes.books.settings)['searchable-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSearchableAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsSearchableAttributesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['searchable-attributes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['searchable-attributes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.indexes.books.settings)['searchable-attributes']['$put']>,
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
  const mutationDefaults = getPutIndexesBooksSettingsSearchableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsSearchableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsSearchableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsSortableAttributesQueryKey() {
  return ['indexes', '/indexes/books/settings/sortable-attributes'] as const
}

export function getIndexesBooksSettingsSortableAttributesQueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey: getIndexesBooksSettingsSortableAttributesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['sortable-attributes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsSortableAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>
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
                  ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsSortableAttributesQueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.settings)['sortable-attributes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSortableAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsSortableAttributesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['sortable-attributes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsSortableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsSortableAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.indexes.books.settings)['sortable-attributes']['$delete']
                  >
                >
              >
            >
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
  const mutationDefaults = getDeleteIndexesBooksSettingsSortableAttributesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsStopWordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>
  >,
) {
  return ['indexes', '/indexes/books/settings/stop-words', toValue(args)] as const
}

export function getIndexesBooksSettingsStopWordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexesBooksSettingsStopWordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['stop-words'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsStopWords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.indexes.books.settings)['stop-words']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsStopWordsQueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.settings)['stop-words']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsStopWordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexesBooksSettingsStopWordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['stop-words'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsStopWordsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsStopWords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsStopWordsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsSynonymsQueryKey() {
  return ['indexes', '/indexes/books/settings/synonyms'] as const
}

export function getIndexesBooksSettingsSynonymsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsSynonymsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings.synonyms.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsSynonyms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>>
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
                Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsSynonymsQueryKey>
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
          Awaited<ReturnType<typeof client.indexes.books.settings.synonyms.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsSynonymsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsSynonymsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings.synonyms.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIndexesBooksSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIndexesBooksSettingsSynonymsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsSynonyms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsSynonymsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksSettingsTypoToleranceQueryKey() {
  return ['indexes', '/indexes/books/settings/typo-tolerance'] as const
}

export function getIndexesBooksSettingsTypoToleranceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksSettingsTypoToleranceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.settings['typo-tolerance'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksSettingsTypoTolerance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
      >
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
                Awaited<
                  ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>
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
                  ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIndexesBooksSettingsTypoToleranceQueryKey>
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
          Awaited<ReturnType<(typeof client.indexes.books.settings)['typo-tolerance']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksSettingsTypoToleranceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksSettingsTypoToleranceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.settings['typo-tolerance'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIndexesBooksSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIndexesBooksSettingsTypoToleranceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchIndexesBooksSettingsTypoTolerance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchIndexesBooksSettingsTypoToleranceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIndexesBooksStatsQueryKey() {
  return ['indexes', '/indexes/books/stats'] as const
}

export function getIndexesBooksStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIndexesBooksStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexes.books.stats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIndexesBooksStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>
            >
          >,
          ReturnType<typeof getIndexesBooksStatsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexes.books.stats.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIndexesBooksStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIndexesBooksStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.indexes.books.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIndexesSwapIndexes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIndexesSwapIndexesMutationOptions<TError, TOnMutateResult>(
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

export function getKeysQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>) {
  return ['keys', '/keys', toValue(args)] as const
}

export function getKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeys<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
          ReturnType<typeof getKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keys.$post>>>>>,
          TError,
          InferRequestType<typeof client.keys.$post>,
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
  const mutationDefaults = getPostKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey() {
  return [
    'keys',
    '/keys/L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705',
  ] as const
}

export function getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryOptions(
  options?: ClientRequestOptions,
) {
  return {
    queryKey:
      getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
          undefined,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey:
        getKeysL8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.keys.L8l05tFb188aab693735bbaf1f898b9902fb39f865160d39dddba2b47b940115a0430705.$get(
            undefined,
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5b<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteKeysKN2aK9EO8a7b627e425717d9196c8081552ca004e513545ed178f8a56981dbd3080d4a5bMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2dd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchKeysWYZjGJyBcdb0621b97999c233246a8ec0a35d0fcd9a6417ef8ccee0c8978b64b123af2ddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStatsQueryKey() {
  return ['stats', '/stats'] as const
}

export function getStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStats<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
          ReturnType<typeof getStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
) {
  return ['tasks', '/tasks', toValue(args)] as const
}

export function getTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasks<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
          ReturnType<typeof getTasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.tasks.$delete>,
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
  const mutationDefaults = getDeleteTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTasks0QueryKey() {
  return ['tasks', '/tasks/0'] as const
}

export function getTasks0QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTasks0QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks['0'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTasks0<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>
            >
          >,
          ReturnType<typeof getTasks0QueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)['0']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTasks0QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTasks0QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks['0'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTasksCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tasks.cancel.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tasks.cancel.$post>,
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
  const mutationDefaults = getPostTasksCancelMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
