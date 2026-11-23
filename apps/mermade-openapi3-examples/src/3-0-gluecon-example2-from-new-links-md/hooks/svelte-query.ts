import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEmployeesKey() {
  return ['employees'] as const
}

export function getEmployeesIdQueryKey(
  args: InferRequestType<(typeof client.employees)[':id']['$get']>,
) {
  return ['employees', '/employees/:id', args] as const
}

export function getEmployeesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.employees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.employees)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployeesIdQueryKey>
  >({
    queryKey: getEmployeesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.employees[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEmployeesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.employees)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.employees)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.employees)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployeesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployeesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
