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

export function getLiffKey() {
  return ['liff'] as const
}

export function getLiffV1AppsQueryKey() {
  return ['liff', '/liff/v1/apps'] as const
}

export function getLiffV1AppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLiffV1AppsQueryKey>
  >({
    queryKey: getLiffV1AppsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.liff.v1.apps.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLiffV1Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLiffV1AppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLiffV1AppsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostLiffV1AppsMutationKey() {
  return ['liff', '/liff/v1/apps', 'POST'] as const
}

export function getPostLiffV1AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.liff.v1.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLiffV1AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.liff.v1.apps.$post>) {
      return parseResponse(client.liff.v1.apps.$post(args, options))
    },
  })
}

export function createPostLiffV1Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.liff.v1.apps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.liff.v1.apps.$post>,
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
    const mutationDefaults = getPostLiffV1AppsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutLiffV1AppsLiffIdMutationKey() {
  return ['liff', '/liff/v1/apps/:liffId', 'PUT'] as const
}

export function getPutLiffV1AppsLiffIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLiffV1AppsLiffIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']>) {
      return parseResponse(client.liff.v1.apps[':liffId'].$put(args, options))
    },
  })
}

export function createPutLiffV1AppsLiffId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$put']>,
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
    const mutationDefaults = getPutLiffV1AppsLiffIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteLiffV1AppsLiffIdMutationKey() {
  return ['liff', '/liff/v1/apps/:liffId', 'DELETE'] as const
}

export function getDeleteLiffV1AppsLiffIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLiffV1AppsLiffIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']>) {
      return parseResponse(client.liff.v1.apps[':liffId'].$delete(args, options))
    },
  })
}

export function createDeleteLiffV1AppsLiffId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.liff.v1.apps)[':liffId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.liff.v1.apps)[':liffId']['$delete']>,
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
    const mutationDefaults = getDeleteLiffV1AppsLiffIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
