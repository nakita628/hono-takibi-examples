import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPagespeedonlineV5RunPagespeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getPagespeedonlineV5RunPagespeedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
