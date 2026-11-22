import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetareacodefromnumberKey() {
  return ['getareacodefromnumber'] as const
}

export function getGetareacodefromnumberQueryKey(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
) {
  return ['getareacodefromnumber', '/getareacodefromnumber', args] as const
}

export function getGetareacodefromnumberQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetareacodefromnumberQueryKey>
  >({
    queryKey: getGetareacodefromnumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getareacodefromnumber.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGetareacodefromnumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getareacodefromnumber.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetareacodefromnumberQueryKey>
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
      ...getGetareacodefromnumberQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
