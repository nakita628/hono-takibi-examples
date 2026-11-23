import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CloudPluginQueryKey(
  args: InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>,
) {
  return ['api', '/api/v1/cloud-plugin', args] as const
}

export function getApiV1CloudPluginQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CloudPluginQueryKey>
  >({
    queryKey: getApiV1CloudPluginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cloud-plugin'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CloudPlugin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CloudPluginQueryKey>
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
    return { ...getApiV1CloudPluginQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1LlmApiQueryKey(
  args: InferRequestType<(typeof client.api.v1)['llm-api']['$get']>,
) {
  return ['api', '/api/v1/llm-api', args] as const
}

export function getApiV1LlmApiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['llm-api']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LlmApiQueryKey>
  >({
    queryKey: getApiV1LlmApiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['llm-api'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1LlmApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['llm-api']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1LlmApiQueryKey>
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
    return { ...getApiV1LlmApiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
