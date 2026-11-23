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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.read.operations)[':operationId']['$get']>>,
) {
  return ['read', '/read/operations/:operationId', toValue(args)] as const
}

export function getReadOperationsOperationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.read.operations)[':operationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReadOperationsOperationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.read.operations[':operationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.read.operations)[':operationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReadOperationsOperationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReadOperationsOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReadOperationsOperationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.read.operations[':operationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recognizeText.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.recognizeText.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.textOperations)[':operationId']['$get']>>,
) {
  return ['textOperations', '/textOperations/:operationId', toValue(args)] as const
}

export function getTextOperationsOperationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.textOperations)[':operationId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTextOperationsOperationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.textOperations[':operationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.textOperations)[':operationId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTextOperationsOperationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTextOperationsOperationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTextOperationsOperationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.textOperations[':operationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
