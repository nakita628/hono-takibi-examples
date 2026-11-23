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

export function getV1AgreementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agreements.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/agreements', keyArgs] as const
}

export function getV1AgreementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agreements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AgreementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.agreements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Agreements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.agreements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
          >,
          ReturnType<typeof getV1AgreementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.agreements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1AgreementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AgreementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.agreements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
