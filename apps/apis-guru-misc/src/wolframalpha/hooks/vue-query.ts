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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CloudPluginQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>>,
) {
  return ['api', '/api/v1/cloud-plugin', toValue(args)] as const
}

export function getApiV1CloudPluginQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1CloudPluginQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['cloud-plugin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CloudPlugin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['cloud-plugin']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1CloudPluginQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cloud-plugin']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CloudPluginQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1CloudPluginQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['cloud-plugin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1LlmApiQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['llm-api']['$get']>>,
) {
  return ['api', '/api/v1/llm-api', toValue(args)] as const
}

export function getApiV1LlmApiQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['llm-api']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1LlmApiQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['llm-api'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1LlmApi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['llm-api']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1LlmApiQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['llm-api']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1LlmApiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1LlmApiQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['llm-api'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
