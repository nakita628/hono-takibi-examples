import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1CheckIndexQueryKey() {
  return ['api', '/api/v1/check/'] as const
}

export function getApiV1CheckIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CheckIndexQueryKey>
  >({
    queryKey: getApiV1CheckIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.check.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1CheckIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.check.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1CheckIndexQueryKey>
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
    return { ...getApiV1CheckIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ConfigurationLinkIndexQueryKey() {
  return ['api', '/api/v1/configuration-link/'] as const
}

export function getApiV1ConfigurationLinkIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
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
  >({
    queryKey: getApiV1ConfigurationLinkIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['configuration-link'].index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ConfigurationLinkIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['configuration-link']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
    return { ...getApiV1ConfigurationLinkIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1ExposedIndexQueryKey() {
  return ['api', '/api/v1/exposed/'] as const
}

export function getApiV1ExposedIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ExposedIndexQueryKey>
  >({
    queryKey: getApiV1ExposedIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.exposed.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ExposedIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.exposed.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1ExposedIndexQueryKey>
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
    return { ...getApiV1ExposedIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV1ExposedExposedAppActionIdExecuteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ExposedExposedAppActionIdExecuteIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
