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

export function getBinKey() {
  return ['bin'] as const
}

export function getPostBinMutationKey() {
  return ['bin', '/bin', 'POST'] as const
}

export function getPostBinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bin.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBinMutationKey(),
    async mutationFn() {
      return parseResponse(client.bin.$post(undefined, options))
    },
  })
}

export function createPostBin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bin.$post>>>>>,
        TError,
        void,
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
    const mutationDefaults = getPostBinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBinIdQueryKey(args: InferRequestType<(typeof client.bin)[':id']['$get']>) {
  return ['bin', '/bin/:id', args] as const
}

export function getBinIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.bin)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBinIdQueryKey>
  >({
    queryKey: getBinIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bin[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBinId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bin)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBinIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBinIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBinIdMutationKey() {
  return ['bin', '/bin/:id', 'PUT'] as const
}

export function getPutBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$put']>) {
      return parseResponse(client.bin[':id'].$put(args, options))
    },
  })
}

export function createPutBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.bin)[':id']['$put']>,
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
    const mutationDefaults = getPutBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBinIdMutationKey() {
  return ['bin', '/bin/:id', 'DELETE'] as const
}

export function getDeleteBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$delete']>) {
      return parseResponse(client.bin[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.bin)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBinIdMutationKey() {
  return ['bin', '/bin/:id', 'PATCH'] as const
}

export function getPatchBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$patch']>) {
      return parseResponse(client.bin[':id'].$patch(args, options))
    },
  })
}

export function createPatchBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.bin)[':id']['$patch']>,
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
    const mutationDefaults = getPatchBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
