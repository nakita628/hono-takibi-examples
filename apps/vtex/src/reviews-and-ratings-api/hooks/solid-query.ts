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

export function getRatingKey() {
  return ['rating'] as const
}

export function getReviewKey() {
  return ['review'] as const
}

export function getReviewsKey() {
  return ['reviews'] as const
}

export function getRatingProductIdQueryKey(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rating', '/rating/:productId', keyArgs] as const
}

export function getRatingProductIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRatingProductIdQueryKey>
  >({
    queryKey: getRatingProductIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rating[':productId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRatingProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.rating)[':productId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getRatingProductIdQueryKey>
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
    return { ...getRatingProductIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostReviewMutationKey() {
  return ['review', '/review', 'POST'] as const
}

export function getPostReviewMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$post>>>>>,
    TError,
    InferRequestType<typeof client.review.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.review.$post>) {
      return parseResponse(client.review.$post(args, options))
    },
  })
}

export function createPostReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.review.$post>,
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
    const mutationDefaults = getPostReviewMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewReviewIdQueryKey(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['review', '/review/:reviewId', keyArgs] as const
}

export function getReviewReviewIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdQueryKey>
  >({
    queryKey: getReviewReviewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.review[':reviewId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.review)[':reviewId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReviewReviewIdQueryKey>
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
    return { ...getReviewReviewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteReviewReviewIdMutationKey() {
  return ['review', '/review/:reviewId', 'DELETE'] as const
}

export function getDeleteReviewReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.review)[':reviewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReviewReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.review)[':reviewId']['$delete']>) {
      return parseResponse(client.review[':reviewId'].$delete(args, options))
    },
  })
}

export function createDeleteReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':reviewId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.review)[':reviewId']['$delete']>,
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
    const mutationDefaults = getDeleteReviewReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchReviewReviewIdMutationKey() {
  return ['review', '/review/:reviewId', 'PATCH'] as const
}

export function getPatchReviewReviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.review)[':reviewId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchReviewReviewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.review)[':reviewId']['$patch']>) {
      return parseResponse(client.review[':reviewId'].$patch(args, options))
    },
  })
}

export function createPatchReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.review)[':reviewId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.review)[':reviewId']['$patch']>,
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
    const mutationDefaults = getPatchReviewReviewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getReviewsQueryKey(args: InferRequestType<typeof client.reviews.$get>) {
  const { header: _, ...keyArgs } = args
  return ['reviews', '/reviews', keyArgs] as const
}

export function getReviewsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reviews.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewsQueryKey>
  >({
    queryKey: getReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reviews.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reviews.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getReviewsQueryKey>
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
    return { ...getReviewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostReviewsMutationKey() {
  return ['reviews', '/reviews', 'POST'] as const
}

export function getPostReviewsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>>,
    TError,
    InferRequestType<typeof client.reviews.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReviewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.$post>) {
      return parseResponse(client.reviews.$post(args, options))
    },
  })
}

export function createPostReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.$post>,
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
    const mutationDefaults = getPostReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteReviewsMutationKey() {
  return ['reviews', '/reviews', 'DELETE'] as const
}

export function getDeleteReviewsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$delete>>>>>,
    TError,
    InferRequestType<typeof client.reviews.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReviewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reviews.$delete>) {
      return parseResponse(client.reviews.$delete(args, options))
    },
  })
}

export function createDeleteReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.$delete>,
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
    const mutationDefaults = getDeleteReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
