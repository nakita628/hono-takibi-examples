import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectClassifierBusinessBatchId<
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
      CreateQueryOptions<
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
      ...getClassifierBusinessBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectClassifierConsumerBatchId<
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
      CreateQueryOptions<
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
      ...getClassifierConsumerBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
