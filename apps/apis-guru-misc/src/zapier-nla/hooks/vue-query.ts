import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CheckIndexQueryKey() {
  return ['api', '/api/v1/check/'] as const
}

export function getApiV1CheckIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CheckIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.check.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CheckIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CheckIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CheckIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CheckIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.check.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConfigurationLinkIndexQueryKey() {
  return ['api', '/api/v1/configuration-link/'] as const
}

export function getApiV1ConfigurationLinkIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ConfigurationLinkIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['configuration-link'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ConfigurationLinkIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
      >
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
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ConfigurationLinkIndexQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConfigurationLinkIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ConfigurationLinkIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['configuration-link'].index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ExposedIndexQueryKey() {
  return ['api', '/api/v1/exposed/'] as const
}

export function getApiV1ExposedIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ExposedIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.exposed.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ExposedIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ExposedIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExposedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ExposedIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.exposed.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ExposedExposedAppActionIdExecuteIndexMutationKey() {
  return ['api', '/api/v1/exposed/:exposed_app_action_id/execute/', 'POST'] as const
}

export function getPostApiV1ExposedExposedAppActionIdExecuteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ExposedExposedAppActionIdExecuteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.exposed[':exposed_app_action_id'].execute.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV1ExposedExposedAppActionIdExecuteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v1.exposed)[':exposed_app_action_id']['execute']['index']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ExposedExposedAppActionIdExecuteIndexMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
