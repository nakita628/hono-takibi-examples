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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.documents.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>>,
) {
  return ['v1', '/v1/documents/:documentId', toValue(args)] as const
}

export function getV1DocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.documents)[':documentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DocumentsDocumentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.documents)[':documentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.documents[':documentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.documents)[':documentId:batchUpdate']['$post']>,
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
