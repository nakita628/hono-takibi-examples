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

export function getPagespeedonlineKey() {
  return ['pagespeedonline'] as const
}

export function getPagespeedonlineV5RunPagespeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>>,
) {
  return ['pagespeedonline', '/pagespeedonline/v5/runPagespeed', toValue(args)] as const
}

export function getPagespeedonlineV5RunPagespeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPagespeedonlineV5RunPagespeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pagespeedonline.v5.runPagespeed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePagespeedonlineV5RunPagespeed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pagespeedonline.v5.runPagespeed.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
              >
            >
          >,
          ReturnType<typeof getPagespeedonlineV5RunPagespeedQueryKey>
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
          Awaited<ReturnType<typeof client.pagespeedonline.v5.runPagespeed.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPagespeedonlineV5RunPagespeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPagespeedonlineV5RunPagespeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pagespeedonline.v5.runPagespeed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
