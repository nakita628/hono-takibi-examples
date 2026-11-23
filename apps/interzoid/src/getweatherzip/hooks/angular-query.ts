import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetweatherzipcodeKey() {
  return ['getweatherzipcode'] as const
}

export function getGetweatherzipcodeQueryKey(
  args: InferRequestType<typeof client.getweatherzipcode.$get>,
) {
  return ['getweatherzipcode', '/getweatherzipcode', args] as const
}

export function getGetweatherzipcodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getweatherzipcode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetweatherzipcodeQueryKey>
  >({
    queryKey: getGetweatherzipcodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getweatherzipcode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetweatherzipcode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getweatherzipcode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getweatherzipcode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherzipcodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetweatherzipcodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
