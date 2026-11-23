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

export function getPathKey() {
  return ['{Path}'] as const
}

export function getPathQueryKey(args: InferRequestType<(typeof client)[':Path']['$get']>) {
  const { header: _, ...keyArgs } = args
  return [':Path', '/:Path', keyArgs] as const
}

export function getPathQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':Path']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPathQueryKey>
  >({
    queryKey: getPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':Path'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPath<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':Path']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPathQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPathMutationKey() {
  return [':Path', '/:Path', 'PUT'] as const
}

export function getPutPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Path']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Path']['$put']>) {
      return parseResponse(client[':Path'].$put(args, options))
    },
  })
}

export function createPutPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':Path']['$put']>,
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
    const mutationDefaults = getPutPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePathMutationKey() {
  return [':Path', '/:Path', 'DELETE'] as const
}

export function getDeletePathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Path']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Path']['$delete']>) {
      return parseResponse(client[':Path'].$delete(args, options))
    },
  })
}

export function createDeletePath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$delete']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':Path']['$delete']>,
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
    const mutationDefaults = getDeletePathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHeadPathMutationKey() {
  return [':Path', '/:Path', 'HEAD'] as const
}

export function getHeadPathMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$head']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':Path']['$head']>,
    TOnMutateResult
  >({
    mutationKey: getHeadPathMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':Path']['$head']>) {
      return parseResponse(client[':Path'].$head(args, options))
    },
  })
}

export function createHeadPath<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$head']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':Path']['$head']>,
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
    const mutationDefaults = getHeadPathMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
