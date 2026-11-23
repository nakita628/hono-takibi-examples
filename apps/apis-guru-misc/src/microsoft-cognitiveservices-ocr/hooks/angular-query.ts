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

export function injectPostReadCoreAsyncBatchAnalyze<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReadCoreAsyncBatchAnalyzeMutationOptions<
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

export function injectReadOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReadOperationsOperationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostRecognizeText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRecognizeTextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectTextOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTextOperationsOperationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
