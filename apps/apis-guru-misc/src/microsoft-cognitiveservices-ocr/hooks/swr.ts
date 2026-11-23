import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostReadCoreAsyncBatchAnalyzeKey() {
  return ['read', '/read/core/asyncBatchAnalyze', 'POST'] as const
}

export function usePostReadCoreAsyncBatchAnalyze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.read.core.asyncBatchAnalyze.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReadCoreAsyncBatchAnalyzeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.read.core.asyncBatchAnalyze.$post> },
      ) => parseResponse(client.read.core.asyncBatchAnalyze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReadOperationsOperationIdKey(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
) {
  return ['read', '/read/operations/:operationId', args] as const
}

export function useGetReadOperationsOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReadOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.read.operations[':operationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReadOperationsOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.read.operations)[':operationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReadOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.read.operations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.read.operations[':operationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecognizeTextKey() {
  return ['recognizeText', '/recognizeText', 'POST'] as const
}

export function usePostRecognizeText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recognizeText.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.recognizeText.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecognizeTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.recognizeText.$post> }) =>
        parseResponse(client.recognizeText.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTextOperationsOperationIdKey(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
) {
  return ['textOperations', '/textOperations/:operationId', args] as const
}

export function useGetTextOperationsOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTextOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.textOperations[':operationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTextOperationsOperationId<TError = unknown>(
  args: InferRequestType<(typeof client.textOperations)[':operationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTextOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.textOperations)[':operationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.textOperations[':operationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
