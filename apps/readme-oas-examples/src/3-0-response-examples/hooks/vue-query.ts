import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getExampleKey() {
  return ['example'] as const
}

export function getExamplesKey() {
  return ['examples'] as const
}

export function getExampleQueryKey() {
  return ['example', '/example'] as const
}

export function getExampleQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExampleQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.example.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExample<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>
          >,
          ReturnType<typeof getExampleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.example.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExampleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExampleQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.example.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExamplesQueryKey() {
  return ['examples', '/examples'] as const
}

export function getExamplesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getExamplesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.examples.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>
          >,
          ReturnType<typeof getExamplesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.examples.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExamplesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getExamplesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.examples.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
