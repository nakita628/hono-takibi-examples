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

export function getSectionFormatKey() {
  return ['{section}.{format}'] as const
}

export function getSectionFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':section.:format']['$get']>>,
) {
  return [':section.:format', '/:section.:format', toValue(args)] as const
}

export function getSectionFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':section.:format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSectionFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':section.:format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSectionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':section.:format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
            >
          >,
          ReturnType<typeof getSectionFormatQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.:format']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSectionFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':section.:format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
