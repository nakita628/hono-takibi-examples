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

export function getGetareacodefromnumberKey() {
  return ['getareacodefromnumber'] as const
}

export function getGetareacodefromnumberQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacodefromnumber.$get>>,
) {
  return ['getareacodefromnumber', '/getareacodefromnumber', toValue(args)] as const
}

export function getGetareacodefromnumberQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacodefromnumber.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetareacodefromnumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getareacodefromnumber.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetareacodefromnumber<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getareacodefromnumber.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
            >
          >,
          ReturnType<typeof getGetareacodefromnumberQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getareacodefromnumber.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetareacodefromnumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetareacodefromnumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getareacodefromnumber.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
