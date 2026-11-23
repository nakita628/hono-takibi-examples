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

export function getGetzipcodeinfoKey() {
  return ['getzipcodeinfo'] as const
}

export function getGetzipcodeinfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getzipcodeinfo.$get>>,
) {
  return ['getzipcodeinfo', '/getzipcodeinfo', toValue(args)] as const
}

export function getGetzipcodeinfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getzipcodeinfo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetzipcodeinfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getzipcodeinfo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetzipcodeinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getzipcodeinfo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
          >,
          ReturnType<typeof getGetzipcodeinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getzipcodeinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetzipcodeinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetzipcodeinfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getzipcodeinfo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
