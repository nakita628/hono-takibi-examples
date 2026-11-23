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

export function getMagneticFieldKey() {
  return ['magnetic_field'] as const
}

export function getMagneticFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magnetic_field.$get>>,
) {
  return ['magnetic_field', '/magnetic_field', toValue(args)] as const
}

export function getMagneticFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magnetic_field.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMagneticFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.magnetic_field.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMagneticField<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.magnetic_field.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
          >,
          ReturnType<typeof getMagneticFieldQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.magnetic_field.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMagneticFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMagneticFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.magnetic_field.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
