import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getGetV4AccountsKey(args: InferRequestType<typeof client.v4.accounts.$get>) {
  return ['v4', '/v4/accounts', args] as const
}

export function useGetV4Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v4.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Accounts<TError = unknown>(
  args: InferRequestType<typeof client.v4.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4AccountsKey() {
  return ['v4', '/v4/accounts', 'POST'] as const
}

export function usePostV4Accounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4AccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.accounts.$post> }) =>
        parseResponse(client.v4.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AttributesKey(args: InferRequestType<typeof client.v4.attributes.$get>) {
  return ['v4', '/v4/attributes', args] as const
}

export function useGetV4Attributes<TError = unknown>(
  args: InferRequestType<typeof client.v4.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Attributes<TError = unknown>(
  args: InferRequestType<typeof client.v4.attributes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AttributesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.attributes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.attributes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4CategoriesKey(args: InferRequestType<typeof client.v4.categories.$get>) {
  return ['v4', '/v4/categories', args] as const
}

export function useGetV4Categories<TError = unknown>(
  args: InferRequestType<typeof client.v4.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4CategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Categories<TError = unknown>(
  args: InferRequestType<typeof client.v4.categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4CategoriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.categories.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4CategoriesBatchGetKey(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
) {
  return ['v4', '/v4/categories:batchGet', args] as const
}

export function useGetV4CategoriesBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
          >
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
        ? getGetV4CategoriesBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4['categories:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4CategoriesBatchGet<TError = unknown>(
  args: InferRequestType<(typeof client.v4)['categories:batchGet']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
          >
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
        ? getGetV4CategoriesBatchGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)['categories:batchGet']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4['categories:batchGet'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ChainsSearchKey(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
) {
  return ['v4', '/v4/chains:search', args] as const
}

export function useGetV4ChainsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ChainsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4['chains:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ChainsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v4)['chains:search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ChainsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['chains:search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4['chains:search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4GoogleLocationsSearchKey() {
  return ['v4', '/v4/googleLocations:search', 'POST'] as const
}

export function usePostV4GoogleLocationsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['googleLocations:search']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)['googleLocations:search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4GoogleLocationsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)['googleLocations:search']['$post']> },
      ) => parseResponse(client.v4['googleLocations:search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NameKey(args: InferRequestType<(typeof client.v4)[':name']['$get']>) {
  return ['v4', '/v4/:name', args] as const
}

export function useGetV4Name<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Name<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV4NameKey() {
  return ['v4', '/v4/:name', 'PUT'] as const
}

export function usePutV4Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v4)[':name']['$put']> }) =>
        parseResponse(client.v4[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NameKey() {
  return ['v4', '/v4/:name', 'DELETE'] as const
}

export function useDeleteV4Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v4)[':name']['$delete']> }) =>
        parseResponse(client.v4[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV4NameKey() {
  return ['v4', '/v4/:name', 'PATCH'] as const
}

export function usePatchV4Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV4NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v4)[':name']['$patch']> }) =>
        parseResponse(client.v4[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameLocalPostsReportInsightsKey() {
  return ['v4', '/v4/:name/localPosts:reportInsights', 'POST'] as const
}

export function usePostV4NameLocalPostsReportInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameLocalPostsReportInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4)[':name']['localPosts:reportInsights']['$post']>
        },
      ) => parseResponse(client.v4[':name']['localPosts:reportInsights'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameLocationsBatchGetKey() {
  return ['v4', '/v4/:name/locations:batchGet', 'POST'] as const
}

export function usePostV4NameLocationsBatchGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGet']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameLocationsBatchGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':name']['locations:batchGet']['$post']> },
      ) => parseResponse(client.v4[':name']['locations:batchGet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameLocationsBatchGetReviewsKey() {
  return ['v4', '/v4/:name/locations:batchGetReviews', 'POST'] as const
}

export function usePostV4NameLocationsBatchGetReviews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameLocationsBatchGetReviewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4)[':name']['locations:batchGetReviews']['$post']>
        },
      ) => parseResponse(client.v4[':name']['locations:batchGetReviews'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameLocationsReportInsightsKey() {
  return ['v4', '/v4/:name/locations:reportInsights', 'POST'] as const
}

export function usePostV4NameLocationsReportInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameLocationsReportInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4)[':name']['locations:reportInsights']['$post']>
        },
      ) => parseResponse(client.v4[':name']['locations:reportInsights'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV4NameReplyKey() {
  return ['v4', '/v4/:name/reply', 'PUT'] as const
}

export function usePutV4NameReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['reply']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV4NameReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name']['reply']['$put']> },
      ) => parseResponse(client.v4[':name'].reply.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV4NameReplyKey() {
  return ['v4', '/v4/:name/reply', 'DELETE'] as const
}

export function useDeleteV4NameReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name']['reply']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name']['reply']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4NameReplyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name']['reply']['$delete']> },
      ) => parseResponse(client.v4[':name'].reply.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameAcceptKey() {
  return ['v4', '/v4/:name:accept', 'POST'] as const
}

export function usePostV4NameAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:accept']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:accept']['$post']> },
      ) => parseResponse(client.v4[':name:accept'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameAssociateKey() {
  return ['v4', '/v4/:name:associate', 'POST'] as const
}

export function usePostV4NameAssociate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:associate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:associate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameAssociateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:associate']['$post']> },
      ) => parseResponse(client.v4[':name:associate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameClearAssociationKey() {
  return ['v4', '/v4/:name:clearAssociation', 'POST'] as const
}

export function usePostV4NameClearAssociation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:clearAssociation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameClearAssociationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:clearAssociation']['$post']> },
      ) => parseResponse(client.v4[':name:clearAssociation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameCompleteKey() {
  return ['v4', '/v4/:name:complete', 'POST'] as const
}

export function usePostV4NameComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:complete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:complete']['$post']> },
      ) => parseResponse(client.v4[':name:complete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameDeclineKey() {
  return ['v4', '/v4/:name:decline', 'POST'] as const
}

export function usePostV4NameDecline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:decline']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:decline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameDeclineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:decline']['$post']> },
      ) => parseResponse(client.v4[':name:decline'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameFetchVerificationOptionsKey() {
  return ['v4', '/v4/:name:fetchVerificationOptions', 'POST'] as const
}

export function usePostV4NameFetchVerificationOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameFetchVerificationOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':name:fetchVerificationOptions']['$post']> },
      ) => parseResponse(client.v4[':name:fetchVerificationOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameFindMatchesKey() {
  return ['v4', '/v4/:name:findMatches', 'POST'] as const
}

export function usePostV4NameFindMatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:findMatches']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:findMatches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameFindMatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:findMatches']['$post']> },
      ) => parseResponse(client.v4[':name:findMatches'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameGenerateAccountNumberKey() {
  return ['v4', '/v4/:name:generateAccountNumber', 'POST'] as const
}

export function usePostV4NameGenerateAccountNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':name:generateAccountNumber']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameGenerateAccountNumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':name:generateAccountNumber']['$post']> },
      ) => parseResponse(client.v4[':name:generateAccountNumber'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4NameGetGoogleUpdatedKey(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
) {
  return ['v4', '/v4/:name:getGoogleUpdated', args] as const
}

export function useGetV4NameGetGoogleUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
          >
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
        ? getGetV4NameGetGoogleUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name:getGoogleUpdated'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NameGetGoogleUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
          >
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
        ? getGetV4NameGetGoogleUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:getGoogleUpdated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name:getGoogleUpdated'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4NameGoogleUpdatedKey(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
) {
  return ['v4', '/v4/:name:googleUpdated', args] as const
}

export function useGetV4NameGoogleUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
          >
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
        ? getGetV4NameGoogleUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name:googleUpdated'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NameGoogleUpdated<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:googleUpdated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
          >
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
        ? getGetV4NameGoogleUpdatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:googleUpdated']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':name:googleUpdated'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4NameRecommendGoogleLocationsKey(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
) {
  return ['v4', '/v4/:name:recommendGoogleLocations', args] as const
}

export function useGetV4NameRecommendGoogleLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
          >
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
        ? getGetV4NameRecommendGoogleLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4[':name:recommendGoogleLocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4NameRecommendGoogleLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
          >
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
        ? getGetV4NameRecommendGoogleLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':name:recommendGoogleLocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4[':name:recommendGoogleLocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4NameReportKey() {
  return ['v4', '/v4/:name:report', 'POST'] as const
}

export function usePostV4NameReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:report']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:report']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameReportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:report']['$post']> },
      ) => parseResponse(client.v4[':name:report'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameTransferKey() {
  return ['v4', '/v4/:name:transfer', 'POST'] as const
}

export function usePostV4NameTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:transfer']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:transfer']['$post']> },
      ) => parseResponse(client.v4[':name:transfer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4NameVerifyKey() {
  return ['v4', '/v4/:name:verify', 'POST'] as const
}

export function usePostV4NameVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':name:verify']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':name:verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4NameVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':name:verify']['$post']> },
      ) => parseResponse(client.v4[':name:verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentAdminsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
) {
  return ['v4', '/v4/:parent/admins', args] as const
}

export function useGetV4ParentAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ParentAdminsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentAdmins<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['admins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ParentAdminsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].admins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentAdminsKey() {
  return ['v4', '/v4/:parent/admins', 'POST'] as const
}

export function usePostV4ParentAdmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['admins']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['admins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentAdminsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':parent']['admins']['$post']> },
      ) => parseResponse(client.v4[':parent'].admins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentAnswersKey(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
) {
  return ['v4', '/v4/:parent/answers', args] as const
}

export function useGetV4ParentAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
          >
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
        ? getGetV4ParentAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentAnswers<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['answers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
          >
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
        ? getGetV4ParentAnswersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['answers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].answers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4ParentAnswersDeleteKey() {
  return ['v4', '/v4/:parent/answers:delete', 'DELETE'] as const
}

export function useDeleteV4ParentAnswersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['answers:delete']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4ParentAnswersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':parent']['answers:delete']['$delete']> },
      ) => parseResponse(client.v4[':parent']['answers:delete'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4ParentAnswersUpsertKey() {
  return ['v4', '/v4/:parent/answers:upsert', 'POST'] as const
}

export function usePostV4ParentAnswersUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['answers:upsert']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentAnswersUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':parent']['answers:upsert']['$post']> },
      ) => parseResponse(client.v4[':parent']['answers:upsert'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentInsuranceNetworksKey(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
) {
  return ['v4', '/v4/:parent/insuranceNetworks', args] as const
}

export function useGetV4ParentInsuranceNetworks<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
          >
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
        ? getGetV4ParentInsuranceNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].insuranceNetworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentInsuranceNetworks<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
          >
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
        ? getGetV4ParentInsuranceNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['insuranceNetworks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].insuranceNetworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ParentInvitationsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
) {
  return ['v4', '/v4/:parent/invitations', args] as const
}

export function useGetV4ParentInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
          >
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
        ? getGetV4ParentInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentInvitations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
          >
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
        ? getGetV4ParentInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['invitations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].invitations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ParentLocalPostsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
) {
  return ['v4', '/v4/:parent/localPosts', args] as const
}

export function useGetV4ParentLocalPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
          >
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
        ? getGetV4ParentLocalPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].localPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentLocalPosts<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
          >
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
        ? getGetV4ParentLocalPostsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].localPosts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentLocalPostsKey() {
  return ['v4', '/v4/:parent/localPosts', 'POST'] as const
}

export function usePostV4ParentLocalPosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['localPosts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentLocalPostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':parent']['localPosts']['$post']> },
      ) => parseResponse(client.v4[':parent'].localPosts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentLocationsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
) {
  return ['v4', '/v4/:parent/locations', args] as const
}

export function useGetV4ParentLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
          >
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
        ? getGetV4ParentLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
          >
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
        ? getGetV4ParentLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentLocationsKey() {
  return ['v4', '/v4/:parent/locations', 'POST'] as const
}

export function usePostV4ParentLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['locations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['locations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':parent']['locations']['$post']> },
      ) => parseResponse(client.v4[':parent'].locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentMediaKey(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
) {
  return ['v4', '/v4/:parent/media', args] as const
}

export function useGetV4ParentMedia<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ParentMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentMedia<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV4ParentMediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentMediaKey() {
  return ['v4', '/v4/:parent/media', 'POST'] as const
}

export function usePostV4ParentMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)[':parent']['media']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':parent']['media']['$post']> },
      ) => parseResponse(client.v4[':parent'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentMediaCustomersKey(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
) {
  return ['v4', '/v4/:parent/media/customers', args] as const
}

export function useGetV4ParentMediaCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
          >
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
        ? getGetV4ParentMediaCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].media.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentMediaCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['media']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
          >
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
        ? getGetV4ParentMediaCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['media']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].media.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentMediaStartUploadKey() {
  return ['v4', '/v4/:parent/media:startUpload', 'POST'] as const
}

export function usePostV4ParentMediaStartUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['media:startUpload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentMediaStartUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4)[':parent']['media:startUpload']['$post']> },
      ) => parseResponse(client.v4[':parent']['media:startUpload'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentQuestionsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
) {
  return ['v4', '/v4/:parent/questions', args] as const
}

export function useGetV4ParentQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
          >
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
        ? getGetV4ParentQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentQuestions<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['questions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
          >
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
        ? getGetV4ParentQuestionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].questions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4ParentQuestionsKey() {
  return ['v4', '/v4/:parent/questions', 'POST'] as const
}

export function usePostV4ParentQuestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)[':parent']['questions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4)[':parent']['questions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4ParentQuestionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4)[':parent']['questions']['$post']> },
      ) => parseResponse(client.v4[':parent'].questions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4ParentReviewsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
) {
  return ['v4', '/v4/:parent/reviews', args] as const
}

export function useGetV4ParentReviews<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
          >
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
        ? getGetV4ParentReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentReviews<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['reviews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
          >
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
        ? getGetV4ParentReviewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['reviews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].reviews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4ParentVerificationsKey(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
) {
  return ['v4', '/v4/:parent/verifications', args] as const
}

export function useGetV4ParentVerifications<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
          >
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
        ? getGetV4ParentVerificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].verifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4ParentVerifications<TError = unknown>(
  args: InferRequestType<(typeof client.v4)[':parent']['verifications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
          >
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
        ? getGetV4ParentVerificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4)[':parent']['verifications']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4[':parent'].verifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
