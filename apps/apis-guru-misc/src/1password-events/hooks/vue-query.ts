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

export function getApiAuthIntrospectQueryKey() {
  return ['api', '/api/auth/introspect'] as const
}

export function getApiAuthIntrospectQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAuthIntrospectQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.auth.introspect.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAuthIntrospect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>
            >
          >,
          ReturnType<typeof getApiAuthIntrospectQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.auth.introspect.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAuthIntrospectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAuthIntrospectQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.auth.introspect.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1Itemusages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.itemusages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.itemusages.$post>,
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
  const mutationDefaults = getPostApiV1ItemusagesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiV1Signinattempts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.signinattempts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.signinattempts.$post>,
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
  const mutationDefaults = getPostApiV1SigninattemptsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
