import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClassifierKey() {
  return ['classifier'] as const
}

export function getClassifierBusinessBatchIdQueryKey(
  args: InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>,
) {
  return ['classifier', '/classifier/business/batch/:id', args] as const
}

export function getClassifierBusinessBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassifierBusinessBatchIdQueryKey>
  >({
    queryKey: getClassifierBusinessBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifier.business.batch[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassifierBusinessBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassifierBusinessBatchIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassifierBusinessBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClassifierConsumerBatchIdQueryKey(
  args: InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>,
) {
  return ['classifier', '/classifier/consumer/batch/:id', args] as const
}

export function getClassifierConsumerBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassifierConsumerBatchIdQueryKey>
  >({
    queryKey: getClassifierConsumerBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.classifier.consumer.batch[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClassifierConsumerBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClassifierConsumerBatchIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getClassifierConsumerBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
