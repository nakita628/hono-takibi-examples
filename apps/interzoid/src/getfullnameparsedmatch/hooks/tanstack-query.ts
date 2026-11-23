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

export function useGetfullnameparsedmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGetfullnameparsedmatchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetfullnameparsedmatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getfullnameparsedmatch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getfullnameparsedmatch.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGetfullnameparsedmatchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
