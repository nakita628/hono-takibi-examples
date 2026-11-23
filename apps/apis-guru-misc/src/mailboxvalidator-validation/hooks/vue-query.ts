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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ValidationSingleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.validation.single.$get>>,
) {
  return ['v1', '/v1/validation/single', toValue(args)] as const
}

export function getV1ValidationSingleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.validation.single.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ValidationSingleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.validation.single.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ValidationSingle<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.validation.single.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>
            >
          >,
          ReturnType<typeof getV1ValidationSingleQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validation.single.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ValidationSingleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ValidationSingleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.validation.single.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
