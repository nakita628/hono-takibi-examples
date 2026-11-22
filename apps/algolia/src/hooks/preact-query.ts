import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getPathQueryKey(args: InferRequestType<(typeof client)[':path']['$get']>) {
  return [':path', '/:path', args] as const
}

export function getPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >({
    queryKey: getPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':path']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPathQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':path']['$put']>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$post']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':path']['$post']>,
        TOnMutateResult
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':path']['$delete']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':path']['$delete']>,
        TOnMutateResult
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/:objectID', args] as const
}

export function get1IndexesIndexNameObjectIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1IndexesIndexNameObjectIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes[':indexName'][':objectID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1IndexesIndexNameObjectIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1IndexesIndexNameObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1IndexesIndexNameObjectID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName'][':objectID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get1IndexesIndexNameObjectIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1IndexesIndexNameObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/settings', args] as const
}

export function get1IndexesIndexNameSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1IndexesIndexNameSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes[':indexName'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1IndexesIndexNameSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1IndexesIndexNameSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1IndexesIndexNameSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
) {
  return ['1', '/1/indexes/:indexName/synonyms/:objectID', args] as const
}

export function get1IndexesIndexNameSynonymsObjectIDQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1IndexesIndexNameSynonymsObjectIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes[':indexName'].synonyms[':objectID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1IndexesIndexNameSynonymsObjectIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1IndexesIndexNameSynonymsObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1IndexesIndexNameSynonymsObjectID<
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['synonyms'][':objectID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1IndexesIndexNameSynonymsObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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

export function get1KeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1KeysQueryKey>
  >({
    queryKey: get1KeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1KeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1KeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1KeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1KeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
) {
  return ['1', '/1/keys/:key', args] as const
}

export function get1KeysKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1KeysKeyQueryKey>
  >({
    queryKey: get1KeysKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].keys[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1KeysKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1KeysKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1KeysKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1KeysKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['keys'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1KeysKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1KeysKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['keys'][':key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['1']['keys'][':key']['$put']>,
        TOnMutateResult
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
) {
  return ['1', '/1/indexes/:indexName/rules/:objectID', args] as const
}

export function get1IndexesIndexNameRulesObjectIDQueryOptions<
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1IndexesIndexNameRulesObjectIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes[':indexName'].rules[':objectID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1IndexesIndexNameRulesObjectIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1IndexesIndexNameRulesObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1IndexesIndexNameRulesObjectID<
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
  args: InferRequestType<
    (typeof client)['1']['indexes'][':indexName']['rules'][':objectID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof get1IndexesIndexNameRulesObjectIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1IndexesIndexNameRulesObjectIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
      UseMutationOptions<
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
        InferRequestType<(typeof client)['1']['indexes'][':indexName']['rules']['search']['$post']>,
        TOnMutateResult
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
        InferRequestType<(typeof client)['1']['dictionaries'][':dictionaryName']['batch']['$post']>,
        TOnMutateResult
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

export function get1DictionariesStarSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get1DictionariesStarSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].dictionaries['*'].settings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof get1DictionariesStarSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1DictionariesStarSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1DictionariesStarSettings<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1DictionariesStarSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function get1DictionariesStarLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['dictionaries']['*']['languages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get1DictionariesStarLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].dictionaries['*'].languages.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof get1DictionariesStarLanguagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1DictionariesStarLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1DictionariesStarLanguages<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1DictionariesStarLanguagesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get1ClustersMappingQueryKey(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
) {
  return ['1', '/1/clusters/mapping', args] as const
}

export function get1ClustersMappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1ClustersMappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].clusters.mapping.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1ClustersMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1ClustersMappingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1ClustersMappingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1ClustersMapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1ClustersMappingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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

export function get1ClustersMappingTopQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['top']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get1ClustersMappingTopQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].clusters.mapping.top.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof get1ClustersMappingTopQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1ClustersMappingTopQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1ClustersMappingTop<
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
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1ClustersMappingTopQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get1ClustersMappingUserIDQueryKey(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
) {
  return ['1', '/1/clusters/mapping/:userID', args] as const
}

export function get1ClustersMappingUserIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1ClustersMappingUserIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].clusters.mapping[':userID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1ClustersMappingUserIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1ClustersMappingUserIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1ClustersMappingUserID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping'][':userID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1ClustersMappingUserIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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

export function get1ClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1ClustersQueryKey>
  >({
    queryKey: get1ClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].clusters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1ClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1ClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1Clusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['clusters']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1ClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1ClustersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
) {
  return ['1', '/1/clusters/mapping/pending', args] as const
}

export function get1ClustersMappingPendingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1ClustersMappingPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].clusters.mapping.pending.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1ClustersMappingPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1ClustersMappingPendingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1ClustersMappingPending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['clusters']['mapping']['pending']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1ClustersMappingPendingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function get1SecuritySourcesQueryKey() {
  return ['1', '/1/security/sources'] as const
}

export function get1SecuritySourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: get1SecuritySourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].security.sources.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof get1SecuritySourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1SecuritySourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1SecuritySources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['security']['sources']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1SecuritySourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
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

export function get1LogsQueryKey(args: InferRequestType<(typeof client)['1']['logs']['$get']>) {
  return ['1', '/1/logs', args] as const
}

export function get1LogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['1']['logs']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1LogsQueryKey>
  >({
    queryKey: get1LogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1LogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1LogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1Logs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['logs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1LogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1LogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get1TaskTaskIDQueryKey(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
) {
  return ['1', '/1/task/:taskID', args] as const
}

export function get1TaskTaskIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get1TaskTaskIDQueryKey>
  >({
    queryKey: get1TaskTaskIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].task[':taskID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1TaskTaskID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof get1TaskTaskIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1TaskTaskIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1TaskTaskID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['task'][':taskID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['1']['task'][':taskID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1TaskTaskIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1TaskTaskIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function get1IndexesIndexNameTaskTaskIDQueryKey(
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
) {
  return ['1', '/1/indexes/:indexName/task/:taskID', args] as const
}

export function get1IndexesIndexNameTaskTaskIDQueryOptions<
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get1IndexesIndexNameTaskTaskIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes[':indexName'].task[':taskID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...get1IndexesIndexNameTaskTaskIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspense1IndexesIndexNameTaskTaskID<
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
  args: InferRequestType<(typeof client)['1']['indexes'][':indexName']['task'][':taskID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...get1IndexesIndexNameTaskTaskIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
) {
  return ['1', '/1/indexes', args] as const
}

export function get1IndexesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['1']['indexes']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get1IndexesQueryKey>
  >({
    queryKey: get1IndexesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['1'].indexes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use1Indexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1IndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...get1IndexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense1Indexes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['1']['indexes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['1']['indexes']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get1IndexesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...get1IndexesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWaitForApiKeyQueryKey(args: InferRequestType<typeof client.waitForApiKey.$get>) {
  return ['waitForApiKey', '/waitForApiKey', args] as const
}

export function getWaitForApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.waitForApiKey.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitForApiKeyQueryKey>
  >({
    queryKey: getWaitForApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.waitForApiKey.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWaitForApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForApiKey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWaitForApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWaitForApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForApiKey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForApiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWaitForApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWaitForTaskQueryKey(args: InferRequestType<typeof client.waitForTask.$get>) {
  return ['waitForTask', '/waitForTask', args] as const
}

export function getWaitForTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.waitForTask.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWaitForTaskQueryKey>
  >({
    queryKey: getWaitForTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.waitForTask.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWaitForTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForTask.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWaitForTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWaitForTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForTask.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForTask.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWaitForTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getWaitForAppTaskQueryKey(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
) {
  return ['waitForAppTask', '/waitForAppTask', args] as const
}

export function getWaitForAppTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.waitForAppTask.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWaitForAppTaskQueryKey>
  >({
    queryKey: getWaitForAppTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.waitForAppTask.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWaitForAppTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForAppTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWaitForAppTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWaitForAppTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.waitForAppTask.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.waitForAppTask.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWaitForAppTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWaitForAppTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBrowseObjectsQueryKey(args: InferRequestType<typeof client.browseObjects.$get>) {
  return ['browseObjects', '/browseObjects', args] as const
}

export function getBrowseObjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.browseObjects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBrowseObjectsQueryKey>
  >({
    queryKey: getBrowseObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.browseObjects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBrowseObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.browseObjects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBrowseObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBrowseObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.browseObjects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.browseObjects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBrowseObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBrowseObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGenerateSecuredApiKeyQueryKey(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
) {
  return ['generateSecuredApiKey', '/generateSecuredApiKey', args] as const
}

export function getGenerateSecuredApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGenerateSecuredApiKeyQueryKey>
  >({
    queryKey: getGenerateSecuredApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.generateSecuredApiKey.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGenerateSecuredApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenerateSecuredApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGenerateSecuredApiKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGenerateSecuredApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.generateSecuredApiKey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.generateSecuredApiKey.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGenerateSecuredApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGenerateSecuredApiKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountCopyIndexQueryKey(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
) {
  return ['accountCopyIndex', '/accountCopyIndex', args] as const
}

export function getAccountCopyIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accountCopyIndex.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountCopyIndexQueryKey>
  >({
    queryKey: getAccountCopyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accountCopyIndex.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountCopyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCopyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountCopyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountCopyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.accountCopyIndex.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accountCopyIndex.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAccountCopyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountCopyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReplaceAllObjectsQueryKey(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
) {
  return ['replaceAllObjects', '/replaceAllObjects', args] as const
}

export function getReplaceAllObjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.replaceAllObjects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReplaceAllObjectsQueryKey>
  >({
    queryKey: getReplaceAllObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.replaceAllObjects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReplaceAllObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReplaceAllObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReplaceAllObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReplaceAllObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.replaceAllObjects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.replaceAllObjects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReplaceAllObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReplaceAllObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReplaceAllObjectsWithTransformationQueryKey(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
) {
  return [
    'replaceAllObjectsWithTransformation',
    '/replaceAllObjectsWithTransformation',
    args,
  ] as const
}

export function getReplaceAllObjectsWithTransformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getReplaceAllObjectsWithTransformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.replaceAllObjectsWithTransformation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getReplaceAllObjectsWithTransformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getReplaceAllObjectsWithTransformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReplaceAllObjectsWithTransformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.replaceAllObjectsWithTransformation.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.replaceAllObjectsWithTransformation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getReplaceAllObjectsWithTransformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getChunkedBatchQueryKey(args: InferRequestType<typeof client.chunkedBatch.$get>) {
  return ['chunkedBatch', '/chunkedBatch', args] as const
}

export function getChunkedBatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.chunkedBatch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChunkedBatchQueryKey>
  >({
    queryKey: getChunkedBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.chunkedBatch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useChunkedBatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chunkedBatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChunkedBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChunkedBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseChunkedBatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.chunkedBatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.chunkedBatch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getChunkedBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChunkedBatchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSaveObjectsQueryKey(args: InferRequestType<typeof client.saveObjects.$get>) {
  return ['saveObjects', '/saveObjects', args] as const
}

export function getSaveObjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.saveObjects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSaveObjectsQueryKey>
  >({
    queryKey: getSaveObjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saveObjects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSaveObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveObjects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSaveObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSaveObjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveObjects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saveObjects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSaveObjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSaveObjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSaveObjectsWithTransformationQueryKey(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
) {
  return ['saveObjectsWithTransformation', '/saveObjectsWithTransformation', args] as const
}

export function getSaveObjectsWithTransformationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSaveObjectsWithTransformationQueryKey>
  >({
    queryKey: getSaveObjectsWithTransformationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.saveObjectsWithTransformation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSaveObjectsWithTransformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getSaveObjectsWithTransformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSaveObjectsWithTransformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSaveObjectsWithTransformation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.saveObjectsWithTransformation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.saveObjectsWithTransformation.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSaveObjectsWithTransformationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSaveObjectsWithTransformationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteObjects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteObjects.$post>,
        TOnMutateResult
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

export function getIndexExistsQueryKey(args: InferRequestType<typeof client.indexExists.$get>) {
  return ['indexExists', '/indexExists', args] as const
}

export function getIndexExistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.indexExists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIndexExistsQueryKey>
  >({
    queryKey: getIndexExistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.indexExists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIndexExists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.indexExists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndexExistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIndexExistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIndexExists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.indexExists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.indexExists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIndexExistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIndexExistsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSetClientApiKeyQueryKey(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
) {
  return ['setClientApiKey', '/setClientApiKey', args] as const
}

export function getSetClientApiKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.setClientApiKey.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSetClientApiKeyQueryKey>
  >({
    queryKey: getSetClientApiKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.setClientApiKey.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSetClientApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSetClientApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSetClientApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSetClientApiKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.setClientApiKey.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setClientApiKey.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSetClientApiKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSetClientApiKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
