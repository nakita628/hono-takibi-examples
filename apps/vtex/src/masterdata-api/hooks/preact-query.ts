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

export function getApiKey() {
  return ['api'] as const
}

export function getApiDataentitiesQueryKey(
  args: InferRequestType<typeof client.api.dataentities.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities', keyArgs] as const
}

export function getApiDataentitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.dataentities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesQueryKey>
  >({
    queryKey: getApiDataentitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiDataentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.dataentities.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiDataentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiDataentities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.dataentities.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.dataentities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiDataentitiesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiDataentitiesAcronymQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym', keyArgs] as const
}

export function getApiDataentitiesAcronymQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronym<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymQueryKey>
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
      ...getApiDataentitiesAcronymQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronym<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymQueryKey>
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
      ...getApiDataentitiesAcronymQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$put(args, options))
    },
  })
}

export function usePutApiDataentitiesAcronymDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$post(args, options))
    },
  })
}

export function usePostApiDataentitiesAcronymDocuments<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getPatchApiDataentitiesAcronymDocumentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents', 'PATCH'] as const
}

export function getPatchApiDataentitiesAcronymDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAcronymDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents.$patch(args, options))
    },
  })
}

export function usePatchApiDataentitiesAcronymDocuments<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiDataentitiesAcronymDocumentsMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronymDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']
      >,
    ) {
      return parseResponse(client.api.dataentities[':acronym'].documents[':id'].$put(args, options))
    },
  })
}

export function usePutApiDataentitiesAcronymDocumentsId<
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
                ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getDeleteApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiDataentitiesAcronymDocumentsId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getPatchApiDataentitiesAcronymDocumentsIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id', 'PATCH'] as const
}

export function getPatchApiDataentitiesAcronymDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiDataentitiesAcronymDocumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiDataentitiesAcronymDocumentsId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['$patch']
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
  const mutationDefaults = getPatchApiDataentitiesAcronymDocumentsIdMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsIdClustersMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/clusters', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsIdClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsIdClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].clusters.$post(args, options),
      )
    },
  })
}

export function usePostApiDataentitiesAcronymDocumentsIdClusters<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['clusters']['$post']
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
  const mutationDefaults = getPostApiDataentitiesAcronymDocumentsIdClustersMutationOptions<
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

export function getPutApiDataentitiesAcronymDocumentsIdScoreMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdScoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score.$put(args, options),
      )
    },
  })
}

export function usePutApiDataentitiesAcronymDocumentsIdScore<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score']['$put']
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
  const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdScoreMutationOptions<
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

export function getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiDataentitiesAcronymDocumentsIdScoreFieldName<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$put']
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
  const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
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

export function getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/score/:field-name', 'DELETE'] as const
}

export function getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].score[':field-name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiDataentitiesAcronymDocumentsIdScoreFieldName<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['score'][':field-name']['$delete']
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
  const mutationDefaults = getDeleteApiDataentitiesAcronymDocumentsIdScoreFieldNameMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronymDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymDocumentsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', keyArgs] as const
}

export function getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronymDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymDocumentsIdVersionsVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdVersionsVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/versions/:versionId', 'PUT'] as const
}

export function getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'].versions[':versionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiDataentitiesAcronymDocumentsIdVersionsVersionId<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id']['versions'][':versionId']['$put']
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
  const mutationDefaults = getPutApiDataentitiesAcronymDocumentsIdVersionsVersionIdMutationOptions<
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

export function getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationKey() {
  return ['api', '/api/dataentities/:acronym/documents/:id/:field/attachments', 'POST'] as const
}

export function getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'][':field'].attachments.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiDataentitiesAcronymDocumentsIdFieldAttachments<
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
                  (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments']['$post']
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
  const mutationDefaults = getPostApiDataentitiesAcronymDocumentsIdFieldAttachmentsMutationOptions<
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

export function getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
) {
  return [
    'api',
    '/api/dataentities/:acronym/documents/:id/:field/attachments/:file-name',
    args,
  ] as const
}

export function getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].documents[':id'][':field'].attachments[
          ':file-name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.dataentities)[':acronym']['documents'][':id'][':field']['attachments'][':file-name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryKey>
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
      ...getApiDataentitiesAcronymDocumentsIdFieldAttachmentsFileNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesAcronymScrollQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/scroll', keyArgs] as const
}

export function getApiDataentitiesAcronymScrollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymScrollQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymScrollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].scroll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronymScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymScrollQueryKey>
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
      ...getApiDataentitiesAcronymScrollQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymScroll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['scroll']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymScrollQueryKey>
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
      ...getApiDataentitiesAcronymScrollQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiDataentitiesAcronymSearchQueryKey(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/dataentities/:acronym/search', keyArgs] as const
}

export function getApiDataentitiesAcronymSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDataentitiesAcronymSearchQueryKey>
  >({
    queryKey: getApiDataentitiesAcronymSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dataentities[':acronym'].search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDataentitiesAcronymSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymSearchQueryKey>
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
      ...getApiDataentitiesAcronymSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDataentitiesAcronymSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.dataentities)[':acronym']['search']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.dataentities)[':acronym']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDataentitiesAcronymSearchQueryKey>
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
      ...getApiDataentitiesAcronymSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
