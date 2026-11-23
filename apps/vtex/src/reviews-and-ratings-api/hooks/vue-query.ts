import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rating)[':productId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rating', '/rating/:productId', keyArgs] as const
}

export function getRatingProductIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rating)[':productId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRatingProductIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rating[':productId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRatingProductId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rating)[':productId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRatingProductIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRatingProductIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRatingProductIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rating[':productId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.review.$post>,
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
  const mutationDefaults = getPostReviewMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReviewReviewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':reviewId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['review', '/review/:reviewId', keyArgs] as const
}

export function getReviewReviewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':reviewId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewReviewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.review[':reviewId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReviewReviewId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.review)[':reviewId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
            >
          >,
          ReturnType<typeof getReviewReviewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReviewReviewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewReviewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.review[':reviewId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteReviewReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchReviewReviewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchReviewReviewIdMutationOptions<TError, TOnMutateResult>(
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

export function getReviewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reviews', '/reviews', keyArgs] as const
}

export function getReviewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reviews.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReviews<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reviews.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>
          >,
          ReturnType<typeof getReviewsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.$post>,
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
  const mutationDefaults = getPostReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteReviews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.reviews.$delete>,
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
  const mutationDefaults = getDeleteReviewsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
