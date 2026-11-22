import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPublicOpenaiV0Products<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.public.openai.v0.products.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
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
      ...getPublicOpenaiV0ProductsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
