import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetfullnameparsedmatchKey() {
  return ['getfullnameparsedmatch'] as const
}

export function getGetfullnameparsedmatchQueryKey(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
) {
  return ['getfullnameparsedmatch', '/getfullnameparsedmatch', args] as const
}

export function getGetfullnameparsedmatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetfullnameparsedmatchQueryKey>
  >({
    queryKey: getGetfullnameparsedmatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getfullnameparsedmatch.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGetfullnameparsedmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetfullnameparsedmatchQueryKey>
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
      ...getGetfullnameparsedmatchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
