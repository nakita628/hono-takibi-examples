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

export function getPagespeedonlineKey() {
  return ['pagespeedonline'] as const
}

export function getPagespeedonlineV5RunPagespeedQueryKey(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
) {
  return ['pagespeedonline', '/pagespeedonline/v5/runPagespeed', args] as const
}

export function getPagespeedonlineV5RunPagespeedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPagespeedonlineV5RunPagespeedQueryKey>
  >({
    queryKey: getPagespeedonlineV5RunPagespeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pagespeedonline.v5.runPagespeed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePagespeedonlineV5RunPagespeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPagespeedonlineV5RunPagespeedQueryKey>
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
      ...getPagespeedonlineV5RunPagespeedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePagespeedonlineV5RunPagespeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPagespeedonlineV5RunPagespeedQueryKey>
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
      ...getPagespeedonlineV5RunPagespeedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
