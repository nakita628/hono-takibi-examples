import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSectionFormatKey() {
  return ['{section}.{format}'] as const
}

export function getSectionFormatQueryKey(
  args: InferRequestType<(typeof client)[':section.{format}']['$get']>,
) {
  return [':section.{format}', '/:section.{format}', args] as const
}

export function getSectionFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':section.{format}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSectionFormatQueryKey>
  >({
    queryKey: getSectionFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':section.{format}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSectionFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':section.{format}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':section.{format}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSectionFormatQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSectionFormatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
