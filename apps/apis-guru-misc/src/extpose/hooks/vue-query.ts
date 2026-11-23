import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getUserExtensionsKey() {
  return ['user-extensions'] as const
}

export function getUserExtensionsQueryKey() {
  return ['user-extensions', '/user-extensions'] as const
}

export function getUserExtensionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserExtensionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['user-extensions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserExtensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
            >
          >,
          ReturnType<typeof getUserExtensionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['user-extensions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserExtensionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserExtensionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['user-extensions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
