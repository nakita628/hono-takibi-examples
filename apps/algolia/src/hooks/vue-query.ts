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

export function get_1Key() {
  return ['1'] as const
}

export function getAccountCopyIndexKey() {
  return ['accountCopyIndex'] as const
}

export function getBrowseObjectsKey() {
  return ['browseObjects'] as const
}

export function getChunkedBatchKey() {
  return ['chunkedBatch'] as const
}

export function getDeleteObjectsKey() {
  return ['deleteObjects'] as const
}

export function getGenerateSecuredApiKeyKey() {
  return ['generateSecuredApiKey'] as const
}

export function getIndexExistsKey() {
  return ['indexExists'] as const
}

export function getPartialUpdateObjectsKey() {
  return ['partialUpdateObjects'] as const
}

export function getPartialUpdateObjectsWithTransformationKey() {
  return ['partialUpdateObjectsWithTransformation'] as const
}

export function getReplaceAllObjectsKey() {
  return ['replaceAllObjects'] as const
}

export function getReplaceAllObjectsWithTransformationKey() {
  return ['replaceAllObjectsWithTransformation'] as const
}

export function getSaveObjectsKey() {
  return ['saveObjects'] as const
}

export function getSaveObjectsWithTransformationKey() {
  return ['saveObjectsWithTransformation'] as const
}

export function getSetClientApiKeyKey() {
  return ['setClientApiKey'] as const
}

export function getWaitForApiKeyKey() {
  return ['waitForApiKey'] as const
}

export function getWaitForAppTaskKey() {
  return ['waitForAppTask'] as const
}

export function getWaitForTaskKey() {
  return ['waitForTask'] as const
}

export function getPathKey() {
  return ['{path}'] as const
}

export function getPathQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
) {
  return [':path', '/:path', toValue(args)] as const
}

export function getPathQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':path'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':path']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
          >,
          ReturnType<typeof getPathQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPathMutationKey() {
  return [':path', '/:path', 'PUT'] as const
}

export function getPutPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path']['$put']>) {
      return parseResponse(client[':path'].$put(args, options))
    },
  })
}

export function usePutPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$put']>>>>
          >,
          TError,
          InferRequestType<(typeof client)[':path']['$put']>,
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
  const mutationDefaults = getPutPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPathMutationKey() {
  return [':path', '/:path', 'POST'] as const
}

export function getPostPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':path']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path']['$post']>) {
      return parseResponse(client[':path'].$post(args, options))
    },
  })
}

export function usePostPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$post']>>>>
          >,
          TError,
          InferRequestType<(typeof client)[':path']['$post']>,
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
  const mutationDefaults = getPostPathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePathMutationKey() {
  return [':path', '/:path', 'DELETE'] as const
}

export function getDeletePathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':path']['$delete']>) {
      return parseResponse(client[':path'].$delete(args, options))
    },
  })
}

export function useDeletePath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':path']['$delete']>,
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
  const mutationDefaults = getDeletePathMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost1IndexesIndexNameQueryMutationKey() {
  return ['1', '/1/indexes/:indexName/query', 'POST'] as const
}

export function getPost1IndexesIndexNameQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].query.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['query']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesStarQueriesMutationKey() {
  return ['1', '/1/indexes/*/queries', 'POST'] as const
}

export function getPost1IndexesStarQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['queries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesStarQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']>,
    ) {
      return parseResponse(client['1'].indexes['*'].queries.$post(args, options))
    },
  })
}

export function usePost1IndexesStarQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes']['*']['queries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes']['*']['queries']['$post']>,
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
  const mutationDefaults = getPost1IndexesStarQueriesMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesIndexNameFacetsFacetNameQueryMutationKey() {
  return ['1', '/1/indexes/:indexName/facets/:facetName/query', 'POST'] as const
}

export function getPost1IndexesIndexNameFacetsFacetNameQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameFacetsFacetNameQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
      >,
    ) {
      return parseResponse(
        client['1'].indexes[':indexName'].facets[':facetName'].query.$post(args, options),
      )
    },
  })
}

export function usePost1IndexesIndexNameFacetsFacetNameQuery<
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
                    (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['facets'][':facetName']['query']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameFacetsFacetNameQueryMutationOptions<
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

export function getPost1IndexesIndexNameBrowseMutationKey() {
  return ['1', '/1/indexes/:indexName/browse', 'POST'] as const
}

export function getPost1IndexesIndexNameBrowseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameBrowseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].browse.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameBrowse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['browse']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameBrowseMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesIndexNameMutationKey() {
  return ['1', '/1/indexes/:indexName', 'POST'] as const
}

export function getPost1IndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].$post(args, options))
    },
  })
}

export function usePost1IndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameMutationOptions<TError, TOnMutateResult>(
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

export function getDelete1IndexesIndexNameMutationKey() {
  return ['1', '/1/indexes/:indexName', 'DELETE'] as const
}

export function getDelete1IndexesIndexNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete1IndexesIndexNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].$delete(args, options))
    },
  })
}

export function useDelete1IndexesIndexName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['$delete']>,
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
  const mutationDefaults = getDelete1IndexesIndexNameMutationOptions<TError, TOnMutateResult>(
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

export function get1IndexesIndexNameObjectIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>
  >,
) {
  return ['1', '/1/indexes/:indexName/:objectID', toValue(args)] as const
}

export function get1IndexesIndexNameObjectIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesIndexNameObjectIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes[':indexName'][':objectID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1IndexesIndexNameObjectID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>
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
                  ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get1IndexesIndexNameObjectIDQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesIndexNameObjectIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesIndexNameObjectIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes[':indexName'][':objectID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1IndexesIndexNameObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/:objectID', 'PUT'] as const
}

export function getPut1IndexesIndexNameObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1IndexesIndexNameObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'][':objectID'].$put(args, options))
    },
  })
}

export function usePut1IndexesIndexNameObjectID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$put']>,
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
  const mutationDefaults = getPut1IndexesIndexNameObjectIDMutationOptions<TError, TOnMutateResult>(
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

export function getDelete1IndexesIndexNameObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/:objectID', 'DELETE'] as const
}

export function getDelete1IndexesIndexNameObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete1IndexesIndexNameObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'][':objectID'].$delete(args, options))
    },
  })
}

export function useDelete1IndexesIndexNameObjectID<
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
                  ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$delete']>,
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
  const mutationDefaults = getDelete1IndexesIndexNameObjectIDMutationOptions<
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

export function getPost1IndexesIndexNameDeleteByQueryMutationKey() {
  return ['1', '/1/indexes/:indexName/deleteByQuery', 'POST'] as const
}

export function getPost1IndexesIndexNameDeleteByQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameDeleteByQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].deleteByQuery.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameDeleteByQuery<
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
                    (typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['deleteByQuery']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameDeleteByQueryMutationOptions<
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

export function getPost1IndexesIndexNameClearMutationKey() {
  return ['1', '/1/indexes/:indexName/clear', 'POST'] as const
}

export function getPost1IndexesIndexNameClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameClearMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].clear.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['clear']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameClearMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesIndexNameObjectIDPartialMutationKey() {
  return ['1', '/1/indexes/:indexName/:objectID/partial', 'POST'] as const
}

export function getPost1IndexesIndexNameObjectIDPartialMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameObjectIDPartialMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
      >,
    ) {
      return parseResponse(
        client['1'].indexes[':indexName'][':objectID'].partial.$post(args, options),
      )
    },
  })
}

export function usePost1IndexesIndexNameObjectIDPartial<
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
                    (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName'][':objectID']['partial']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameObjectIDPartialMutationOptions<
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

export function getPost1IndexesIndexNameBatchMutationKey() {
  return ['1', '/1/indexes/:indexName/batch', 'POST'] as const
}

export function getPost1IndexesIndexNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].batch.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['batch']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesStarBatchMutationKey() {
  return ['1', '/1/indexes/*/batch', 'POST'] as const
}

export function getPost1IndexesStarBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesStarBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']>,
    ) {
      return parseResponse(client['1'].indexes['*'].batch.$post(args, options))
    },
  })
}

export function usePost1IndexesStarBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes']['*']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes']['*']['batch']['$post']>,
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
  const mutationDefaults = getPost1IndexesStarBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPost1IndexesStarObjectsMutationKey() {
  return ['1', '/1/indexes/*/objects', 'POST'] as const
}

export function getPost1IndexesStarObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes']['*']['objects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesStarObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']>,
    ) {
      return parseResponse(client['1'].indexes['*'].objects.$post(args, options))
    },
  })
}

export function usePost1IndexesStarObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['indexes']['*']['objects']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes']['*']['objects']['$post']>,
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
  const mutationDefaults = getPost1IndexesStarObjectsMutationOptions<TError, TOnMutateResult>(
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

export function get1IndexesIndexNameSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>
  >,
) {
  return ['1', '/1/indexes/:indexName/settings', toValue(args)] as const
}

export function get1IndexesIndexNameSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesIndexNameSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes[':indexName'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1IndexesIndexNameSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>
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
                  ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get1IndexesIndexNameSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesIndexNameSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesIndexNameSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes[':indexName'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1IndexesIndexNameSettingsMutationKey() {
  return ['1', '/1/indexes/:indexName/settings', 'PUT'] as const
}

export function getPut1IndexesIndexNameSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1IndexesIndexNameSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].settings.$put(args, options))
    },
  })
}

export function usePut1IndexesIndexNameSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$put']>,
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
  const mutationDefaults = getPut1IndexesIndexNameSettingsMutationOptions<TError, TOnMutateResult>(
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

export function get1IndexesIndexNameSynonymsObjectIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']>
  >,
) {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', toValue(args)] as const
}

export function get1IndexesIndexNameSynonymsObjectIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesIndexNameSynonymsObjectIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes[':indexName'].synonyms[':objectID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1IndexesIndexNameSynonymsObjectID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get1IndexesIndexNameSynonymsObjectIDQueryKey>
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
              (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesIndexNameSynonymsObjectIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesIndexNameSynonymsObjectIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes[':indexName'].synonyms[':objectID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1IndexesIndexNameSynonymsObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', 'PUT'] as const
}

export function getPut1IndexesIndexNameSynonymsObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut1IndexesIndexNameSynonymsObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
      >,
    ) {
      return parseResponse(
        client['1'].indexes[':indexName'].synonyms[':objectID'].$put(args, options),
      )
    },
  })
}

export function usePut1IndexesIndexNameSynonymsObjectID<
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$put']
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
  const mutationDefaults = getPut1IndexesIndexNameSynonymsObjectIDMutationOptions<
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

export function getDelete1IndexesIndexNameSynonymsObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', 'DELETE'] as const
}

export function getDelete1IndexesIndexNameSynonymsObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete1IndexesIndexNameSynonymsObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
      >,
    ) {
      return parseResponse(
        client['1'].indexes[':indexName'].synonyms[':objectID'].$delete(args, options),
      )
    },
  })
}

export function useDelete1IndexesIndexNameSynonymsObjectID<
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$delete']
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
  const mutationDefaults = getDelete1IndexesIndexNameSynonymsObjectIDMutationOptions<
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

export function getPost1IndexesIndexNameSynonymsBatchMutationKey() {
  return ['1', '/1/indexes/:indexName/synonyms/batch', 'POST'] as const
}

export function getPost1IndexesIndexNameSynonymsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameSynonymsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].synonyms.batch.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameSynonymsBatch<
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['synonyms']['batch']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameSynonymsBatchMutationOptions<
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

export function getPost1IndexesIndexNameSynonymsClearMutationKey() {
  return ['1', '/1/indexes/:indexName/synonyms/clear', 'POST'] as const
}

export function getPost1IndexesIndexNameSynonymsClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameSynonymsClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].synonyms.clear.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameSynonymsClear<
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['synonyms']['clear']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameSynonymsClearMutationOptions<
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

export function getPost1IndexesIndexNameSynonymsSearchMutationKey() {
  return ['1', '/1/indexes/:indexName/synonyms/search', 'POST'] as const
}

export function getPost1IndexesIndexNameSynonymsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameSynonymsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].synonyms.search.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameSynonymsSearch<
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
                    (typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['synonyms']['search']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameSynonymsSearchMutationOptions<
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

export function get1KeysQueryKey() {
  return ['1', '/1/keys'] as const
}

export function get1KeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1KeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use1Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>
            >
          >,
          ReturnType<typeof get1KeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1KeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1KeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost1KeysMutationKey() {
  return ['1', '/1/keys', 'POST'] as const
}

export function getPost1KeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['1']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1KeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['1']['keys']['$post']>) {
      return parseResponse(client['1'].keys.$post(args, options))
    },
  })
}

export function usePost1Keys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['keys']['$post']>,
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
  const mutationDefaults = getPost1KeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get1KeysKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['keys'][':key']['$get']>>,
) {
  return ['1', '/1/keys/:key', toValue(args)] as const
}

export function get1KeysKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['keys'][':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1KeysKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].keys[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1KeysKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['keys'][':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1KeysKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1KeysKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1KeysKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].keys[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1KeysKeyMutationKey() {
  return ['1', '/1/keys/:key', 'PUT'] as const
}

export function getPut1KeysKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['keys'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1KeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['1']['keys'][':key']['$put']>) {
      return parseResponse(client['1'].keys[':key'].$put(args, options))
    },
  })
}

export function usePut1KeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['keys'][':key']['$put']>,
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
  const mutationDefaults = getPut1KeysKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete1KeysKeyMutationKey() {
  return ['1', '/1/keys/:key', 'DELETE'] as const
}

export function getDelete1KeysKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['keys'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete1KeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['1']['keys'][':key']['$delete']>) {
      return parseResponse(client['1'].keys[':key'].$delete(args, options))
    },
  })
}

export function useDelete1KeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['keys'][':key']['$delete']>,
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
  const mutationDefaults = getDelete1KeysKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost1KeysKeyRestoreMutationKey() {
  return ['1', '/1/keys/:key/restore', 'POST'] as const
}

export function getPost1KeysKeyRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['keys'][':key']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1KeysKeyRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']>,
    ) {
      return parseResponse(client['1'].keys[':key'].restore.$post(args, options))
    },
  })
}

export function usePost1KeysKeyRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['keys'][':key']['restore']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['keys'][':key']['restore']['$post']>,
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
  const mutationDefaults = getPost1KeysKeyRestoreMutationOptions<TError, TOnMutateResult>(
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

export function get1IndexesIndexNameRulesObjectIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']>
  >,
) {
  return ['1', '/1/indexes/:indexName/rules/:objectID', toValue(args)] as const
}

export function get1IndexesIndexNameRulesObjectIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesIndexNameRulesObjectIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes[':indexName'].rules[':objectID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1IndexesIndexNameRulesObjectID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
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
                    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get1IndexesIndexNameRulesObjectIDQueryKey>
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
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesIndexNameRulesObjectIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesIndexNameRulesObjectIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes[':indexName'].rules[':objectID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1IndexesIndexNameRulesObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/rules/:objectID', 'PUT'] as const
}

export function getPut1IndexesIndexNameRulesObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1IndexesIndexNameRulesObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].rules[':objectID'].$put(args, options))
    },
  })
}

export function usePut1IndexesIndexNameRulesObjectID<
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
                    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$put']
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
  const mutationDefaults = getPut1IndexesIndexNameRulesObjectIDMutationOptions<
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

export function getDelete1IndexesIndexNameRulesObjectIDMutationKey() {
  return ['1', '/1/indexes/:indexName/rules/:objectID', 'DELETE'] as const
}

export function getDelete1IndexesIndexNameRulesObjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete1IndexesIndexNameRulesObjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
      >,
    ) {
      return parseResponse(
        client['1'].indexes[':indexName'].rules[':objectID'].$delete(args, options),
      )
    },
  })
}

export function useDelete1IndexesIndexNameRulesObjectID<
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
                    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$delete']
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
  const mutationDefaults = getDelete1IndexesIndexNameRulesObjectIDMutationOptions<
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

export function getPost1IndexesIndexNameRulesBatchMutationKey() {
  return ['1', '/1/indexes/:indexName/rules/batch', 'POST'] as const
}

export function getPost1IndexesIndexNameRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameRulesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].rules.batch.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameRulesBatch<
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
                    (typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['rules']['batch']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameRulesBatchMutationOptions<
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

export function getPost1IndexesIndexNameRulesClearMutationKey() {
  return ['1', '/1/indexes/:indexName/rules/clear', 'POST'] as const
}

export function getPost1IndexesIndexNameRulesClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameRulesClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].rules.clear.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameRulesClear<
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
                    (typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['rules']['clear']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameRulesClearMutationOptions<
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

export function getPost1IndexesIndexNameRulesSearchMutationKey() {
  return ['1', '/1/indexes/:indexName/rules/search', 'POST'] as const
}

export function getPost1IndexesIndexNameRulesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameRulesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']
      >,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].rules.search.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameRulesSearch<
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
                    (typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']
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
  const mutationDefaults = getPost1IndexesIndexNameRulesSearchMutationOptions<
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

export function getPost1DictionariesDictionaryNameBatchMutationKey() {
  return ['1', '/1/dictionaries/:dictionaryName/batch', 'POST'] as const
}

export function getPost1DictionariesDictionaryNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1DictionariesDictionaryNameBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']
      >,
    ) {
      return parseResponse(client['1'].dictionaries[':dictionaryName'].batch.$post(args, options))
    },
  })
}

export function usePost1DictionariesDictionaryNameBatch<
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
                    (typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']
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
  const mutationDefaults = getPost1DictionariesDictionaryNameBatchMutationOptions<
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

export function getPost1DictionariesDictionaryNameSearchMutationKey() {
  return ['1', '/1/dictionaries/:dictionaryName/search', 'POST'] as const
}

export function getPost1DictionariesDictionaryNameSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1DictionariesDictionaryNameSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']
      >,
    ) {
      return parseResponse(client['1'].dictionaries[':dictionaryName'].search.$post(args, options))
    },
  })
}

export function usePost1DictionariesDictionaryNameSearch<
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
                    (typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['1']['dictionaries'][':dictionaryName']['search']['$post']
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
  const mutationDefaults = getPost1DictionariesDictionaryNameSearchMutationOptions<
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

export function get1DictionariesStarSettingsQueryKey() {
  return ['1', '/1/dictionaries/*/settings'] as const
}

export function get1DictionariesStarSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1DictionariesStarSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].dictionaries['*'].settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1DictionariesStarSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
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
                Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1DictionariesStarSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1DictionariesStarSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1DictionariesStarSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].dictionaries['*'].settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1DictionariesStarSettingsMutationKey() {
  return ['1', '/1/dictionaries/*/settings', 'PUT'] as const
}

export function getPut1DictionariesStarSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1DictionariesStarSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>,
    ) {
      return parseResponse(client['1'].dictionaries['*'].settings.$put(args, options))
    },
  })
}

export function usePut1DictionariesStarSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['dictionaries']['*']['settings']['$put']>,
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
  const mutationDefaults = getPut1DictionariesStarSettingsMutationOptions<TError, TOnMutateResult>(
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

export function get1DictionariesStarLanguagesQueryKey() {
  return ['1', '/1/dictionaries/*/languages'] as const
}

export function get1DictionariesStarLanguagesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1DictionariesStarLanguagesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].dictionaries['*'].languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1DictionariesStarLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
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
                Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1DictionariesStarLanguagesQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1DictionariesStarLanguagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1DictionariesStarLanguagesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].dictionaries['*'].languages.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get1ClustersMappingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>>,
) {
  return ['1', '/1/clusters/mapping', toValue(args)] as const
}

export function get1ClustersMappingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1ClustersMappingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].clusters.mapping.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1ClustersMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1ClustersMappingQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersMappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1ClustersMappingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].clusters.mapping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost1ClustersMappingMutationKey() {
  return ['1', '/1/clusters/mapping', 'POST'] as const
}

export function getPost1ClustersMappingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1ClustersMappingMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']>) {
      return parseResponse(client['1'].clusters.mapping.$post(args, options))
    },
  })
}

export function usePost1ClustersMapping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['clusters']['mapping']['$post']>,
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
  const mutationDefaults = getPost1ClustersMappingMutationOptions<TError, TOnMutateResult>(
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

export function getPost1ClustersMappingBatchMutationKey() {
  return ['1', '/1/clusters/mapping/batch', 'POST'] as const
}

export function getPost1ClustersMappingBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1ClustersMappingBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>,
    ) {
      return parseResponse(client['1'].clusters.mapping.batch.$post(args, options))
    },
  })
}

export function usePost1ClustersMappingBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['clusters']['mapping']['batch']['$post']>,
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
  const mutationDefaults = getPost1ClustersMappingBatchMutationOptions<TError, TOnMutateResult>(
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

export function get1ClustersMappingTopQueryKey() {
  return ['1', '/1/clusters/mapping/top'] as const
}

export function get1ClustersMappingTopQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1ClustersMappingTopQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].clusters.mapping.top.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1ClustersMappingTop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
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
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1ClustersMappingTopQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersMappingTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1ClustersMappingTopQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].clusters.mapping.top.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get1ClustersMappingUserIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>
  >,
) {
  return ['1', '/1/clusters/mapping/:userID', toValue(args)] as const
}

export function get1ClustersMappingUserIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1ClustersMappingUserIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].clusters.mapping[':userID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1ClustersMappingUserID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1ClustersMappingUserIDQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersMappingUserIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1ClustersMappingUserIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].clusters.mapping[':userID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete1ClustersMappingUserIDMutationKey() {
  return ['1', '/1/clusters/mapping/:userID', 'DELETE'] as const
}

export function getDelete1ClustersMappingUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete1ClustersMappingUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>,
    ) {
      return parseResponse(client['1'].clusters.mapping[':userID'].$delete(args, options))
    },
  })
}

export function useDelete1ClustersMappingUserID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$delete']>,
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
  const mutationDefaults = getDelete1ClustersMappingUserIDMutationOptions<TError, TOnMutateResult>(
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

export function get1ClustersQueryKey() {
  return ['1', '/1/clusters'] as const
}

export function get1ClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1ClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
            >
          >,
          ReturnType<typeof get1ClustersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1ClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].clusters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost1ClustersMappingSearchMutationKey() {
  return ['1', '/1/clusters/mapping/search', 'POST'] as const
}

export function getPost1ClustersMappingSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1ClustersMappingSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>,
    ) {
      return parseResponse(client['1'].clusters.mapping.search.$post(args, options))
    },
  })
}

export function usePost1ClustersMappingSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['search']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['clusters']['mapping']['search']['$post']>,
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
  const mutationDefaults = getPost1ClustersMappingSearchMutationOptions<TError, TOnMutateResult>(
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

export function get1ClustersMappingPendingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>
  >,
) {
  return ['1', '/1/clusters/mapping/pending', toValue(args)] as const
}

export function get1ClustersMappingPendingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1ClustersMappingPendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].clusters.mapping.pending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1ClustersMappingPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1ClustersMappingPendingQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersMappingPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1ClustersMappingPendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].clusters.mapping.pending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get1SecuritySourcesQueryKey() {
  return ['1', '/1/security/sources'] as const
}

export function get1SecuritySourcesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get1SecuritySourcesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].security.sources.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1SecuritySources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1SecuritySourcesQueryKey>
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
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1SecuritySourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get1SecuritySourcesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].security.sources.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut1SecuritySourcesMutationKey() {
  return ['1', '/1/security/sources', 'PUT'] as const
}

export function getPut1SecuritySourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['security']['sources']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut1SecuritySourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['1']['security']['sources']['$put']>) {
      return parseResponse(client['1'].security.sources.$put(args, options))
    },
  })
}

export function usePut1SecuritySources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['security']['sources']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['security']['sources']['$put']>,
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
  const mutationDefaults = getPut1SecuritySourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPost1SecuritySourcesAppendMutationKey() {
  return ['1', '/1/security/sources/append', 'POST'] as const
}

export function getPost1SecuritySourcesAppendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources']['append']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1SecuritySourcesAppendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>,
    ) {
      return parseResponse(client['1'].security.sources.append.$post(args, options))
    },
  })
}

export function usePost1SecuritySourcesAppend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['security']['sources']['append']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['security']['sources']['append']['$post']>,
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
  const mutationDefaults = getPost1SecuritySourcesAppendMutationOptions<TError, TOnMutateResult>(
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

export function getDelete1SecuritySourcesSourceMutationKey() {
  return ['1', '/1/security/sources/:source', 'DELETE'] as const
}

export function getDelete1SecuritySourcesSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['security']['sources'][':source']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete1SecuritySourcesSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>,
    ) {
      return parseResponse(client['1'].security.sources[':source'].$delete(args, options))
    },
  })
}

export function useDelete1SecuritySourcesSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['security']['sources'][':source']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['security']['sources'][':source']['$delete']>,
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
  const mutationDefaults = getDelete1SecuritySourcesSourceMutationOptions<TError, TOnMutateResult>(
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

export function get1LogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['logs']['$get']>>,
) {
  return ['1', '/1/logs', toValue(args)] as const
}

export function get1LogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1LogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use1Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>
            >
          >,
          ReturnType<typeof get1LogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1LogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1LogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get1TaskTaskIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>>,
) {
  return ['1', '/1/task/:taskID', toValue(args)] as const
}

export function get1TaskTaskIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1TaskTaskIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].task[':taskID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1TaskTaskID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>
              >
            >
          >,
          ReturnType<typeof get1TaskTaskIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1TaskTaskIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1TaskTaskIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].task[':taskID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get1IndexesIndexNameTaskTaskIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
  >,
) {
  return ['1', '/1/indexes/:indexName/task/:taskID', toValue(args)] as const
}

export function get1IndexesIndexNameTaskTaskIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesIndexNameTaskTaskIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes[':indexName'].task[':taskID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use1IndexesIndexNameTaskTaskID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']
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
                    (typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get1IndexesIndexNameTaskTaskIDQueryKey>
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
            ReturnType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesIndexNameTaskTaskIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesIndexNameTaskTaskIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes[':indexName'].task[':taskID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost1IndexesIndexNameOperationMutationKey() {
  return ['1', '/1/indexes/:indexName/operation', 'POST'] as const
}

export function getPost1IndexesIndexNameOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost1IndexesIndexNameOperationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>,
    ) {
      return parseResponse(client['1'].indexes[':indexName'].operation.$post(args, options))
    },
  })
}

export function usePost1IndexesIndexNameOperation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['1']['indexes'][':indexName']['operation']['$post']>,
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
  const mutationDefaults = getPost1IndexesIndexNameOperationMutationOptions<
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

export function get1IndexesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['indexes']['$get']>>,
) {
  return ['1', '/1/indexes', toValue(args)] as const
}

export function get1IndexesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['indexes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get1IndexesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['1'].indexes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use1Indexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['1']['indexes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
            >
          >,
          ReturnType<typeof get1IndexesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get1IndexesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['1'].indexes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWaitForApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForApiKey.$get>>,
) {
  return ['waitForApiKey', '/waitForApiKey', toValue(args)] as const
}

export function getWaitForApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForApiKey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWaitForApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.waitForApiKey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWaitForApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForApiKey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
          >,
          ReturnType<typeof getWaitForApiKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitForApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWaitForApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.waitForApiKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWaitForTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForTask.$get>>,
) {
  return ['waitForTask', '/waitForTask', toValue(args)] as const
}

export function getWaitForTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForTask.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWaitForTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.waitForTask.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWaitForTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForTask.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
          >,
          ReturnType<typeof getWaitForTaskQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWaitForTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWaitForTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.waitForTask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWaitForAppTaskQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForAppTask.$get>>,
) {
  return ['waitForAppTask', '/waitForAppTask', toValue(args)] as const
}

export function getWaitForAppTaskQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForAppTask.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWaitForAppTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.waitForAppTask.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWaitForAppTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.waitForAppTask.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
          >,
          ReturnType<typeof getWaitForAppTaskQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitForAppTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWaitForAppTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.waitForAppTask.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBrowseObjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browseObjects.$get>>,
) {
  return ['browseObjects', '/browseObjects', toValue(args)] as const
}

export function getBrowseObjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browseObjects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBrowseObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.browseObjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBrowseObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.browseObjects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
          >,
          ReturnType<typeof getBrowseObjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBrowseObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.browseObjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGenerateSecuredApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.generateSecuredApiKey.$get>>,
) {
  return ['generateSecuredApiKey', '/generateSecuredApiKey', toValue(args)] as const
}

export function getGenerateSecuredApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.generateSecuredApiKey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGenerateSecuredApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.generateSecuredApiKey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGenerateSecuredApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.generateSecuredApiKey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
            >
          >,
          ReturnType<typeof getGenerateSecuredApiKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenerateSecuredApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGenerateSecuredApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.generateSecuredApiKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountCopyIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accountCopyIndex.$get>>,
) {
  return ['accountCopyIndex', '/accountCopyIndex', toValue(args)] as const
}

export function getAccountCopyIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accountCopyIndex.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountCopyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accountCopyIndex.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountCopyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accountCopyIndex.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>
            >
          >,
          ReturnType<typeof getAccountCopyIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCopyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountCopyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accountCopyIndex.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReplaceAllObjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjects.$get>>,
) {
  return ['replaceAllObjects', '/replaceAllObjects', toValue(args)] as const
}

export function getReplaceAllObjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReplaceAllObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.replaceAllObjects.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReplaceAllObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>
            >
          >,
          ReturnType<typeof getReplaceAllObjectsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReplaceAllObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReplaceAllObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.replaceAllObjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReplaceAllObjectsWithTransformationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>>,
) {
  return [
    'replaceAllObjectsWithTransformation',
    '/replaceAllObjectsWithTransformation',
    toValue(args),
  ] as const
}

export function getReplaceAllObjectsWithTransformationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReplaceAllObjectsWithTransformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.replaceAllObjectsWithTransformation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReplaceAllObjectsWithTransformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
              >
            >
          >,
          ReturnType<typeof getReplaceAllObjectsWithTransformationQueryKey>
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
          Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReplaceAllObjectsWithTransformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReplaceAllObjectsWithTransformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.replaceAllObjectsWithTransformation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getChunkedBatchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chunkedBatch.$get>>,
) {
  return ['chunkedBatch', '/chunkedBatch', toValue(args)] as const
}

export function getChunkedBatchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chunkedBatch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChunkedBatchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.chunkedBatch.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useChunkedBatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.chunkedBatch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
          >,
          ReturnType<typeof getChunkedBatchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChunkedBatchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChunkedBatchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.chunkedBatch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSaveObjectsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjects.$get>>,
) {
  return ['saveObjects', '/saveObjects', toValue(args)] as const
}

export function getSaveObjectsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjects.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSaveObjectsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saveObjects.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSaveObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjects.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
          >,
          ReturnType<typeof getSaveObjectsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSaveObjectsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSaveObjectsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saveObjects.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSaveObjectsWithTransformationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjectsWithTransformation.$get>>,
) {
  return ['saveObjectsWithTransformation', '/saveObjectsWithTransformation', toValue(args)] as const
}

export function getSaveObjectsWithTransformationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjectsWithTransformation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSaveObjectsWithTransformationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saveObjectsWithTransformation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSaveObjectsWithTransformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.saveObjectsWithTransformation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
              >
            >
          >,
          ReturnType<typeof getSaveObjectsWithTransformationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSaveObjectsWithTransformationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSaveObjectsWithTransformationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.saveObjectsWithTransformation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDeleteObjectsMutationKey() {
  return ['deleteObjects', '/deleteObjects', 'POST'] as const
}

export function getPostDeleteObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteObjects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteObjects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteObjects.$post>) {
      return parseResponse(client.deleteObjects.$post(args, options))
    },
  })
}

export function usePostDeleteObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteObjects.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.deleteObjects.$post>,
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
  const mutationDefaults = getPostDeleteObjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartialUpdateObjectsMutationKey() {
  return ['partialUpdateObjects', '/partialUpdateObjects', 'POST'] as const
}

export function getPostPartialUpdateObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.partialUpdateObjects.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.partialUpdateObjects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartialUpdateObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.partialUpdateObjects.$post>) {
      return parseResponse(client.partialUpdateObjects.$post(args, options))
    },
  })
}

export function usePostPartialUpdateObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.partialUpdateObjects.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.partialUpdateObjects.$post>,
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
  const mutationDefaults = getPostPartialUpdateObjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPostPartialUpdateObjectsWithTransformationMutationKey() {
  return [
    'partialUpdateObjectsWithTransformation',
    '/partialUpdateObjectsWithTransformation',
    'POST',
  ] as const
}

export function getPostPartialUpdateObjectsWithTransformationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.partialUpdateObjectsWithTransformation.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPartialUpdateObjectsWithTransformationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post>,
    ) {
      return parseResponse(client.partialUpdateObjectsWithTransformation.$post(args, options))
    },
  })
}

export function usePostPartialUpdateObjectsWithTransformation<
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
                Awaited<ReturnType<typeof client.partialUpdateObjectsWithTransformation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.partialUpdateObjectsWithTransformation.$post>,
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
  const mutationDefaults = getPostPartialUpdateObjectsWithTransformationMutationOptions<
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

export function getIndexExistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexExists.$get>>,
) {
  return ['indexExists', '/indexExists', toValue(args)] as const
}

export function getIndexExistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexExists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIndexExistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.indexExists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIndexExists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.indexExists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
          >,
          ReturnType<typeof getIndexExistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexExistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIndexExistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.indexExists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSetClientApiKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setClientApiKey.$get>>,
) {
  return ['setClientApiKey', '/setClientApiKey', toValue(args)] as const
}

export function getSetClientApiKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setClientApiKey.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSetClientApiKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setClientApiKey.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSetClientApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.setClientApiKey.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>
            >
          >,
          ReturnType<typeof getSetClientApiKeyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetClientApiKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSetClientApiKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.setClientApiKey.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
