import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAuthIntrospectQueryKey() {
  return ['api', '/api/auth/introspect'] as const
}

export function getApiAuthIntrospectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthIntrospectQueryKey>
  >({
    queryKey: getApiAuthIntrospectQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.auth.introspect.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiAuthIntrospect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAuthIntrospectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAuthIntrospectQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ItemusagesMutationKey() {
  return ['api', '/api/v1/itemusages', 'POST'] as const
}

export function getPostApiV1ItemusagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.itemusages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.itemusages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ItemusagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.itemusages.$post>) {
      return parseResponse(client.api.v1.itemusages.$post(args, options))
    },
  })
}

export function createPostApiV1Itemusages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.itemusages.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.itemusages.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ItemusagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1SigninattemptsMutationKey() {
  return ['api', '/api/v1/signinattempts', 'POST'] as const
}

export function getPostApiV1SigninattemptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.signinattempts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.signinattempts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SigninattemptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.signinattempts.$post>) {
      return parseResponse(client.api.v1.signinattempts.$post(args, options))
    },
  })
}

export function createPostApiV1Signinattempts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.signinattempts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.signinattempts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1SigninattemptsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
