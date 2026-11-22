import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClassifierKey() {
  return ['classifier'] as const
}

export function getClassifierBusinessBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>
  >,
) {
  return ['classifier', '/classifier/business/batch/:id', toValue(args)] as const
}

export function getClassifierBusinessBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassifierBusinessBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifier.business.batch[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassifierBusinessBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.business.batch)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassifierBusinessBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.classifier.business.batch)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassifierBusinessBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassifierBusinessBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifier.business.batch[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getClassifierConsumerBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>
  >,
) {
  return ['classifier', '/classifier/consumer/batch/:id', toValue(args)] as const
}

export function getClassifierConsumerBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClassifierConsumerBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.classifier.consumer.batch[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClassifierConsumerBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.classifier.consumer.batch)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClassifierConsumerBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.classifier.consumer.batch)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClassifierConsumerBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClassifierConsumerBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.classifier.consumer.batch[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
