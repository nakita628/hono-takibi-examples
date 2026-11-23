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

export function getReadKey() {
  return ['read'] as const
}

export function getRecognizeTextKey() {
  return ['recognizeText'] as const
}

export function getTextOperationsKey() {
  return ['textOperations'] as const
}

export function getPostReadCoreAsyncBatchAnalyzeMutationKey() {
  return ['read', '/read/core/asyncBatchAnalyze', 'POST'] as const
}

export function getPostReadCoreAsyncBatchAnalyzeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.read.core.asyncBatchAnalyze.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReadCoreAsyncBatchAnalyzeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post>) {
      return parseResponse(client.read.core.asyncBatchAnalyze.$post(args, options))
    },
  })
}

export function usePostReadCoreAsyncBatchAnalyze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.read.core.asyncBatchAnalyze.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReadCoreAsyncBatchAnalyzeMutationOptions<TError, TOnMutateResult>(
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

export function getReadOperationsOperationIdQueryKey(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
) {
  return ['read', '/read/operations/:operationId', args] as const
}

export function getReadOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReadOperationsOperationIdQueryKey>
  >({
    queryKey: getReadOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.read.operations[':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReadOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReadOperationsOperationIdQueryKey>
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
      ...getReadOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReadOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReadOperationsOperationIdQueryKey>
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
      ...getReadOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRecognizeTextMutationKey() {
  return ['recognizeText', '/recognizeText', 'POST'] as const
}

export function getPostRecognizeTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recognizeText.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.recognizeText.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRecognizeTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.recognizeText.$post>) {
      return parseResponse(client.recognizeText.$post(args, options))
    },
  })
}

export function usePostRecognizeText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recognizeText.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.recognizeText.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecognizeTextMutationOptions<TError, TOnMutateResult>(
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

export function getTextOperationsOperationIdQueryKey(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
) {
  return ['textOperations', '/textOperations/:operationId', args] as const
}

export function getTextOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTextOperationsOperationIdQueryKey>
  >({
    queryKey: getTextOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.textOperations[':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTextOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTextOperationsOperationIdQueryKey>
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
      ...getTextOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTextOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTextOperationsOperationIdQueryKey>
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
      ...getTextOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
