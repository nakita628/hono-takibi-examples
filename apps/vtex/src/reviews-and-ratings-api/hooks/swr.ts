import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetRatingProductIdKey(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['rating', '/rating/:productId', keyArgs] as const
}

export function useGetRatingProductId<TError = unknown>(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRatingProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rating[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRatingProductId<TError = unknown>(
  args: InferRequestType<(typeof client.rating)[':productId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRatingProductIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rating)[':productId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rating[':productId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReviewKey() {
  return ['review', '/review', 'POST'] as const
}

export function usePostReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.review.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.review.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.review.$post> }) =>
        parseResponse(client.review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewReviewIdKey(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['review', '/review/:reviewId', keyArgs] as const
}

export function useGetReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewReviewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReviewReviewId<TError = unknown>(
  args: InferRequestType<(typeof client.review)[':reviewId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewReviewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.review[':reviewId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteReviewReviewIdKey() {
  return ['review', '/review/:reviewId', 'DELETE'] as const
}

export function useDeleteReviewReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.review)[':reviewId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReviewReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.review)[':reviewId']['$delete']> },
      ) => parseResponse(client.review[':reviewId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchReviewReviewIdKey() {
  return ['review', '/review/:reviewId', 'PATCH'] as const
}

export function usePatchReviewReviewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.review)[':reviewId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.review)[':reviewId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchReviewReviewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.review)[':reviewId']['$patch']> },
      ) => parseResponse(client.review[':reviewId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReviewsKey(args: InferRequestType<typeof client.reviews.$get>) {
  const { header: _, ...keyArgs } = args
  return ['reviews', '/reviews', keyArgs] as const
}

export function useGetReviews<TError = unknown>(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reviews.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReviews<TError = unknown>(
  args: InferRequestType<typeof client.reviews.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReviewsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.reviews.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostReviewsKey() {
  return ['reviews', '/reviews', 'POST'] as const
}

export function usePostReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reviews.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.$post> }) =>
        parseResponse(client.reviews.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReviewsKey() {
  return ['reviews', '/reviews', 'DELETE'] as const
}

export function useDeleteReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reviews.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reviews.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reviews.$delete> }) =>
        parseResponse(client.reviews.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
