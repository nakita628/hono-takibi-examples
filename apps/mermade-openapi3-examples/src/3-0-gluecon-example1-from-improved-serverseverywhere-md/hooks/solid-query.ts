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

export function getImagesKey() {
  return ['images'] as const
}

export function getPassportsKey() {
  return ['passports'] as const
}

export function getPassportsIdQueryKey(
  args: InferRequestType<(typeof client.passports)[':id']['$get']>,
) {
  return ['passports', '/passports/:id', args] as const
}

export function getPassportsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.passports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPassportsIdQueryKey>
  >({
    queryKey: getPassportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.passports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPassportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.passports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPassportsIdQueryKey>
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
    return { ...getPassportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPassportsIdMutationKey() {
  return ['passports', '/passports/:id', 'POST'] as const
}

export function getPostPassportsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.passports)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPassportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.passports)[':id']['$post']>) {
      return parseResponse(client.passports[':id'].$post(args, options))
    },
  })
}

export function createPostPassportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.passports)[':id']['$post']>,
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
    const mutationDefaults = getPostPassportsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImagesFilenameQueryKey(
  args: InferRequestType<(typeof client.images)[':filename']['$get']>,
) {
  return ['images', '/images/:filename', args] as const
}

export function getImagesFilenameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesFilenameQueryKey>
  >({
    queryKey: getImagesFilenameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':filename'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImagesFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.images)[':filename']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImagesFilenameQueryKey>
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
    return { ...getImagesFilenameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutImagesFilenameMutationKey() {
  return ['images', '/images/:filename', 'PUT'] as const
}

export function getPutImagesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':filename']['$put']>) {
      return parseResponse(client.images[':filename'].$put(args, options))
    },
  })
}

export function createPutImagesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':filename']['$put']>,
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
    const mutationDefaults = getPutImagesFilenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteImagesFilenameMutationKey() {
  return ['images', '/images/:filename', 'DELETE'] as const
}

export function getDeleteImagesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':filename']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':filename']['$delete']>) {
      return parseResponse(client.images[':filename'].$delete(args, options))
    },
  })
}

export function createDeleteImagesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':filename']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':filename']['$delete']>,
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
    const mutationDefaults = getDeleteImagesFilenameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
