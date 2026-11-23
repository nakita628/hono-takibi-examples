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

export function getBadgeKey() {
  return ['badge'] as const
}

export function getConvertKey() {
  return ['convert'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getValidateKey() {
  return ['validate'] as const
}

export function getBadgeQueryKey(args: InferRequestType<typeof client.badge.$get>) {
  return ['badge', '/badge', args] as const
}

export function getBadgeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.badge.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBadgeQueryKey>
  >({
    queryKey: getBadgeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.badge.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBadge<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.badge.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.badge.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getBadgeQueryKey>
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
    return { ...getBadgeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConvertQueryKey(args: InferRequestType<typeof client.convert.$get>) {
  return ['convert', '/convert', args] as const
}

export function getConvertQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.convert.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConvertQueryKey>
  >({
    queryKey: getConvertQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConvert<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.convert.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getConvertQueryKey>
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
    return { ...getConvertQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostConvertMutationKey() {
  return ['convert', '/convert', 'POST'] as const
}

export function getPostConvertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>>,
    TError,
    InferRequestType<typeof client.convert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.convert.$post>) {
      return parseResponse(client.convert.$post(args, options))
    },
  })
}

export function createPostConvert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.convert.$post>,
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
    const mutationDefaults = getPostConvertMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getStatusQueryKey>
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
    return { ...getStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getValidateQueryKey(args: InferRequestType<typeof client.validate.$get>) {
  return ['validate', '/validate', args] as const
}

export function getValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.validate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValidateQueryKey>
  >({
    queryKey: getValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.validate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.validate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getValidateQueryKey>
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
    return { ...getValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostValidateMutationKey() {
  return ['validate', '/validate', 'POST'] as const
}

export function getPostValidateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$post>>>>>,
    TError,
    InferRequestType<typeof client.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validate.$post>) {
      return parseResponse(client.validate.$post(args, options))
    },
  })
}

export function createPostValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.validate.$post>,
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
    const mutationDefaults = getPostValidateMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
