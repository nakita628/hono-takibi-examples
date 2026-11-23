import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicOpenaiV0ProductsQueryKey(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
) {
  return ['public', '/public/openai/v0/products', args] as const
}

export function getPublicOpenaiV0ProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
  >({
    queryKey: getPublicOpenaiV0ProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.openai.v0.products.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePublicOpenaiV0Products<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
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
      ...getPublicOpenaiV0ProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePublicOpenaiV0Products<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
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
      ...getPublicOpenaiV0ProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
