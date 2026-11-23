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

export function getPublicKey() {
  return ['public'] as const
}

export function getPublicOpenaiV0ProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.openai.v0.products.$get>>,
) {
  return ['public', '/public/openai/v0/products', toValue(args)] as const
}

export function getPublicOpenaiV0ProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.openai.v0.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicOpenaiV0ProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.openai.v0.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicOpenaiV0Products<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.public.openai.v0.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>
              >
            >
          >,
          ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.public.openai.v0.products.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicOpenaiV0ProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicOpenaiV0ProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.openai.v0.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
