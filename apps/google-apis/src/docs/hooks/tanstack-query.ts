import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1DocumentsMutationKey() {
  return ['v1', '/v1/documents', 'POST'] as const
}

export function getPostV1DocumentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.documents.$post>) {
      return parseResponse(client.v1.documents.$post(args, options))
    },
  })
}

export function usePostV1Documents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DocumentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DocumentsDocumentIdQueryKey(
  args: InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>,
) {
  return ['v1', '/v1/documents/:documentId', args] as const
}

export function getV1DocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DocumentsDocumentIdQueryKey>
  >({
    queryKey: getV1DocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1DocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DocumentsDocumentIdQueryKey>
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
      ...getV1DocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1DocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DocumentsDocumentIdQueryKey>
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
      ...getV1DocumentsDocumentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1DocumentsDocumentIdBatchUpdateMutationKey() {
  return ['v1', '/v1/documents/:documentId:batchUpdate', 'POST'] as const
}

export function getPostV1DocumentsDocumentIdBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DocumentsDocumentIdBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1.documents[':documentId:batchUpdate'].$post(args, options))
    },
  })
}

export function usePostV1DocumentsDocumentIdBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1DocumentsDocumentIdBatchUpdateMutationOptions<
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
