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

export function getGetweatherKey() {
  return ['getweather'] as const
}

export function getGetweatherQueryKey(args: InferRequestType<typeof client.getweather.$get>) {
  return ['getweather', '/getweather', args] as const
}

export function getGetweatherQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getweather.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetweatherQueryKey>
  >({
    queryKey: getGetweatherQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getweather.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectGetweather<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getweather.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getweather.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetweatherQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetweatherQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
