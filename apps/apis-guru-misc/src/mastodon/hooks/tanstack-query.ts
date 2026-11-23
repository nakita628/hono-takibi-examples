import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getApiOembedQueryKey(args: InferRequestType<typeof client.api.oembed.$get>) {
  return ['api', '/api/oembed', args] as const
}

export function getApiOembedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.oembed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOembedQueryKey>
  >({
    queryKey: getApiOembedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oembed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiOembed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.oembed.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOembedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOembedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOembed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.oembed.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOembedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOembedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiProofsQueryKey(args: InferRequestType<typeof client.api.proofs.$get>) {
  return ['api', '/api/proofs', args] as const
}

export function getApiProofsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.proofs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProofsQueryKey>
  >({
    queryKey: getApiProofsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.proofs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiProofs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.proofs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProofsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProofs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.proofs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProofsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AccountsMutationKey() {
  return ['api', '/api/v1/accounts', 'POST'] as const
}

export function getPostApiV1AccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.accounts.$post>) {
      return parseResponse(client.api.v1.accounts.$post(args, options))
    },
  })
}

export function usePostApiV1Accounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AccountsRelationshipsQueryKey(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
) {
  return ['api', '/api/v1/accounts/relationships', args] as const
}

export function getApiV1AccountsRelationshipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsRelationshipsQueryKey>
  >({
    queryKey: getApiV1AccountsRelationshipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts.relationships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsRelationshipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.relationships.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsRelationshipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsRelationshipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsSearchQueryKey(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
) {
  return ['api', '/api/v1/accounts/search', args] as const
}

export function getApiV1AccountsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsSearchQueryKey>
  >({
    queryKey: getApiV1AccountsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AccountsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.accounts.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AccountsSearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchApiV1AccountsUpdateCredentialsMutationKey() {
  return ['api', '/api/v1/accounts/update_credentials', 'PATCH'] as const
}

export function getPatchApiV1AccountsUpdateCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.update_credentials.$patch>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV1AccountsUpdateCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch>,
    ) {
      return parseResponse(client.api.v1.accounts.update_credentials.$patch(args, options))
    },
  })
}

export function usePatchApiV1AccountsUpdateCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.accounts.update_credentials.$patch>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.accounts.update_credentials.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiV1AccountsUpdateCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AccountsVerifyCredentialsQueryKey() {
  return ['api', '/api/v1/accounts/verify_credentials'] as const
}

export function getApiV1AccountsVerifyCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsVerifyCredentialsQueryKey>
  >({
    queryKey: getApiV1AccountsVerifyCredentialsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts.verify_credentials.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsVerifyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsVerifyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsVerifyCredentialsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsVerifyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsVerifyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsVerifyCredentialsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id', args] as const
}

export function getApiV1AccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdQueryKey>
  >({
    queryKey: getApiV1AccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AccountsIdBlockMutationKey() {
  return ['api', '/api/v1/accounts/:id/block', 'POST'] as const
}

export function getPostApiV1AccountsIdBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].block.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['block']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['block']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdBlockMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AccountsIdFeaturedTagsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/featured_tags', args] as const
}

export function getApiV1AccountsIdFeaturedTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFeaturedTagsQueryKey>
  >({
    queryKey: getApiV1AccountsIdFeaturedTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].featured_tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdFeaturedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFeaturedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsIdFeaturedTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdFeaturedTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFeaturedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsIdFeaturedTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsIdFollowMutationKey() {
  return ['api', '/api/v1/accounts/:id/follow', 'POST'] as const
}

export function getPostApiV1AccountsIdFollowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdFollowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].follow.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdFollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['follow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdFollowMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AccountsIdFollowersQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/followers', args] as const
}

export function getApiV1AccountsIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFollowersQueryKey>
  >({
    queryKey: getApiV1AccountsIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsIdFollowersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsIdFollowersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsIdFollowingQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/following', args] as const
}

export function getApiV1AccountsIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFollowingQueryKey>
  >({
    queryKey: getApiV1AccountsIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsIdFollowingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsIdFollowingQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsIdIdentityProofsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/identity_proofs', args] as const
}

export function getApiV1AccountsIdIdentityProofsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdIdentityProofsQueryKey>
  >({
    queryKey: getApiV1AccountsIdIdentityProofsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].identity_proofs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdIdentityProofs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdIdentityProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsIdIdentityProofsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdIdentityProofs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdIdentityProofsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsIdIdentityProofsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1AccountsIdListsQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/lists', args] as const
}

export function getApiV1AccountsIdListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdListsQueryKey>
  >({
    queryKey: getApiV1AccountsIdListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AccountsIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AccountsIdListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AccountsIdMuteMutationKey() {
  return ['api', '/api/v1/accounts/:id/mute', 'POST'] as const
}

export function getPostApiV1AccountsIdMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].mute.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['mute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdMuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AccountsIdNoteMutationKey() {
  return ['api', '/api/v1/accounts/:id/note', 'POST'] as const
}

export function getPostApiV1AccountsIdNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['note']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].note.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdNote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['note']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['note']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdNoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AccountsIdPinMutationKey() {
  return ['api', '/api/v1/accounts/:id/pin', 'POST'] as const
}

export function getPostApiV1AccountsIdPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdPinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].pin.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['pin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdPinMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AccountsIdStatusesQueryKey(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
) {
  return ['api', '/api/v1/accounts/:id/statuses', args] as const
}

export function getApiV1AccountsIdStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdStatusesQueryKey>
  >({
    queryKey: getApiV1AccountsIdStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.accounts[':id'].statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AccountsIdStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1AccountsIdStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1AccountsIdStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AccountsIdStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1AccountsIdStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1AccountsIdUnblockMutationKey() {
  return ['api', '/api/v1/accounts/:id/unblock', 'POST'] as const
}

export function getPostApiV1AccountsIdUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].unblock.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['unblock']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdUnblockMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AccountsIdUnfollowMutationKey() {
  return ['api', '/api/v1/accounts/:id/unfollow', 'POST'] as const
}

export function getPostApiV1AccountsIdUnfollowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdUnfollowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].unfollow.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdUnfollow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['unfollow']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdUnfollowMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AccountsIdUnmuteMutationKey() {
  return ['api', '/api/v1/accounts/:id/unmute', 'POST'] as const
}

export function getPostApiV1AccountsIdUnmuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdUnmuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].unmute.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdUnmute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['unmute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdUnmuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AccountsIdUnpinMutationKey() {
  return ['api', '/api/v1/accounts/:id/unpin', 'POST'] as const
}

export function getPostApiV1AccountsIdUnpinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AccountsIdUnpinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>,
    ) {
      return parseResponse(client.api.v1.accounts[':id'].unpin.$post(args, options))
    },
  })
}

export function usePostApiV1AccountsIdUnpin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.accounts)[':id']['unpin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AccountsIdUnpinMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AdminAccountsQueryKey(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
) {
  return ['api', '/api/v1/admin/accounts', args] as const
}

export function getApiV1AdminAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminAccountsQueryKey>
  >({
    queryKey: getApiV1AdminAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.admin.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AdminAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AdminAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AdminAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.admin.accounts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AdminAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AdminAccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
) {
  return ['api', '/api/v1/admin/accounts/:id', args] as const
}

export function getApiV1AdminAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminAccountsIdQueryKey>
  >({
    queryKey: getApiV1AdminAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.admin.accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AdminAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AdminAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AdminAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AdminAccountsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdActionMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/action', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].action.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['action']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdActionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdApproveMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/approve', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].approve.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdApprove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdApproveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdEnableMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/enable', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].enable.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['enable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdEnableMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdRejectMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/reject', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].reject.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdReject<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['reject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdRejectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdUnsilenceMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/unsilence', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdUnsilenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdUnsilenceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].unsilence.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdUnsilence<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsilence']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdUnsilenceMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminAccountsIdUnsuspendMutationKey() {
  return ['api', '/api/v1/admin/accounts/:id/unsuspend', 'POST'] as const
}

export function getPostApiV1AdminAccountsIdUnsuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminAccountsIdUnsuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.accounts[':id'].unsuspend.$post(args, options))
    },
  })
}

export function usePostApiV1AdminAccountsIdUnsuspend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['unsuspend']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminAccountsIdUnsuspendMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AdminReportsQueryKey(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
) {
  return ['api', '/api/v1/admin/reports', args] as const
}

export function getApiV1AdminReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.admin.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminReportsQueryKey>
  >({
    queryKey: getApiV1AdminReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.admin.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1AdminReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AdminReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AdminReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.admin.reports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AdminReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1AdminReportsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
) {
  return ['api', '/api/v1/admin/reports/:id', args] as const
}

export function getApiV1AdminReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminReportsIdQueryKey>
  >({
    queryKey: getApiV1AdminReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.admin.reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AdminReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AdminReportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AdminReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AdminReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AdminReportsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AdminReportsIdAssignToSelfMutationKey() {
  return ['api', '/api/v1/admin/reports/:id/assign_to_self', 'POST'] as const
}

export function getPostApiV1AdminReportsIdAssignToSelfMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminReportsIdAssignToSelfMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']
      >,
    ) {
      return parseResponse(client.api.v1.admin.reports[':id'].assign_to_self.$post(args, options))
    },
  })
}

export function usePostApiV1AdminReportsIdAssignToSelf<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.reports)[':id']['assign_to_self']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminReportsIdAssignToSelfMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminReportsIdReopenMutationKey() {
  return ['api', '/api/v1/admin/reports/:id/reopen', 'POST'] as const
}

export function getPostApiV1AdminReportsIdReopenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminReportsIdReopenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.reports[':id'].reopen.$post(args, options))
    },
  })
}

export function usePostApiV1AdminReportsIdReopen<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.reports)[':id']['reopen']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminReportsIdReopenMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1AdminReportsIdResolveMutationKey() {
  return ['api', '/api/v1/admin/reports/:id/resolve', 'POST'] as const
}

export function getPostApiV1AdminReportsIdResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminReportsIdResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.reports[':id'].resolve.$post(args, options))
    },
  })
}

export function usePostApiV1AdminReportsIdResolve<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.reports)[':id']['resolve']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminReportsIdResolveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AdminReportsIdUnassignMutationKey() {
  return ['api', '/api/v1/admin/reports/:id/unassign', 'POST'] as const
}

export function getPostApiV1AdminReportsIdUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AdminReportsIdUnassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>,
    ) {
      return parseResponse(client.api.v1.admin.reports[':id'].unassign.$post(args, options))
    },
  })
}

export function usePostApiV1AdminReportsIdUnassign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AdminReportsIdUnassignMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AnnouncementsQueryKey(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
) {
  return ['api', '/api/v1/announcements', args] as const
}

export function getApiV1AnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.announcements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnouncementsQueryKey>
  >({
    queryKey: getApiV1AnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.announcements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Announcements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AnnouncementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Announcements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.announcements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AnnouncementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1AnnouncementsIdDismissMutationKey() {
  return ['api', '/api/v1/announcements/:id/dismiss', 'POST'] as const
}

export function getPostApiV1AnnouncementsIdDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AnnouncementsIdDismissMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>,
    ) {
      return parseResponse(client.api.v1.announcements[':id'].dismiss.$post(args, options))
    },
  })
}

export function usePostApiV1AnnouncementsIdDismiss<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.announcements)[':id']['dismiss']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AnnouncementsIdDismissMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutApiV1AnnouncementsIdReactionsNameMutationKey() {
  return ['api', '/api/v1/announcements/:id/reactions/:name', 'PUT'] as const
}

export function getPutApiV1AnnouncementsIdReactionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1AnnouncementsIdReactionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v1.announcements[':id'].reactions[':name'].$put(args, options),
      )
    },
  })
}

export function usePutApiV1AnnouncementsIdReactionsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1AnnouncementsIdReactionsNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1AnnouncementsIdReactionsNameMutationKey() {
  return ['api', '/api/v1/announcements/:id/reactions/:name', 'DELETE'] as const
}

export function getDeleteApiV1AnnouncementsIdReactionsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1AnnouncementsIdReactionsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.announcements[':id'].reactions[':name'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV1AnnouncementsIdReactionsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1AnnouncementsIdReactionsNameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1AppsMutationKey() {
  return ['api', '/api/v1/apps', 'POST'] as const
}

export function getPostApiV1AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.apps.$post>) {
      return parseResponse(client.api.v1.apps.$post(args, options))
    },
  })
}

export function usePostApiV1Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.apps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1AppsVerifyCredentialsQueryKey() {
  return ['api', '/api/v1/apps/verify_credentials'] as const
}

export function getApiV1AppsVerifyCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsVerifyCredentialsQueryKey>
  >({
    queryKey: getApiV1AppsVerifyCredentialsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.apps.verify_credentials.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1AppsVerifyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppsVerifyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1AppsVerifyCredentialsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1AppsVerifyCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1AppsVerifyCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1AppsVerifyCredentialsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1BlocksQueryKey(args: InferRequestType<typeof client.api.v1.blocks.$get>) {
  return ['api', '/api/v1/blocks', args] as const
}

export function getApiV1BlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.blocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocksQueryKey>
  >({
    queryKey: getApiV1BlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.blocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Blocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.blocks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1BlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Blocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.blocks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1BlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1BookmarksQueryKey(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
) {
  return ['api', '/api/v1/bookmarks', args] as const
}

export function getApiV1BookmarksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.bookmarks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BookmarksQueryKey>
  >({
    queryKey: getApiV1BookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.bookmarks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Bookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BookmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1BookmarksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Bookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.bookmarks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BookmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1BookmarksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ConversationsQueryKey(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
) {
  return ['api', '/api/v1/conversations', args] as const
}

export function getApiV1ConversationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.conversations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConversationsQueryKey>
  >({
    queryKey: getApiV1ConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.conversations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Conversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Conversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.conversations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ConversationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV1ConversationsIdMutationKey() {
  return ['api', '/api/v1/conversations/:id', 'DELETE'] as const
}

export function getDeleteApiV1ConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.conversations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.conversations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ConversationsIdReadMutationKey() {
  return ['api', '/api/v1/conversations/:id/read', 'POST'] as const
}

export function getPostApiV1ConversationsIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ConversationsIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']>,
    ) {
      return parseResponse(client.api.v1.conversations[':id'].read.$post(args, options))
    },
  })
}

export function usePostApiV1ConversationsIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.conversations)[':id']['read']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.conversations)[':id']['read']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ConversationsIdReadMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1CustomEmojisQueryKey() {
  return ['api', '/api/v1/custom_emojis'] as const
}

export function getApiV1CustomEmojisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomEmojisQueryKey>
  >({
    queryKey: getApiV1CustomEmojisQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.custom_emojis.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1CustomEmojis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CustomEmojisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1CustomEmojisQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1CustomEmojis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1CustomEmojisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1CustomEmojisQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DirectoryQueryKey(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
) {
  return ['api', '/api/v1/directory', args] as const
}

export function getApiV1DirectoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.directory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectoryQueryKey>
  >({
    queryKey: getApiV1DirectoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.directory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Directory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DirectoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Directory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.directory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DirectoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DirectoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1DomainBlocksQueryKey(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
) {
  return ['api', '/api/v1/domain_blocks', args] as const
}

export function getApiV1DomainBlocksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.domain_blocks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DomainBlocksQueryKey>
  >({
    queryKey: getApiV1DomainBlocksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.domain_blocks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1DomainBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DomainBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1DomainBlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1DomainBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.domain_blocks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DomainBlocksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1DomainBlocksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1DomainBlocksMutationKey() {
  return ['api', '/api/v1/domain_blocks', 'POST'] as const
}

export function getPostApiV1DomainBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.domain_blocks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1DomainBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.domain_blocks.$post>) {
      return parseResponse(client.api.v1.domain_blocks.$post(args, options))
    },
  })
}

export function usePostApiV1DomainBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.domain_blocks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1DomainBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1DomainBlocksMutationKey() {
  return ['api', '/api/v1/domain_blocks', 'DELETE'] as const
}

export function getDeleteApiV1DomainBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.domain_blocks.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1DomainBlocksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.domain_blocks.$delete>) {
      return parseResponse(client.api.v1.domain_blocks.$delete(args, options))
    },
  })
}

export function useDeleteApiV1DomainBlocks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.domain_blocks.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1DomainBlocksMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1EndorsementsQueryKey(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
) {
  return ['api', '/api/v1/endorsements', args] as const
}

export function getApiV1EndorsementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.endorsements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EndorsementsQueryKey>
  >({
    queryKey: getApiV1EndorsementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.endorsements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Endorsements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EndorsementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1EndorsementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Endorsements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.endorsements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1EndorsementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1EndorsementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1FavouritesQueryKey(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
) {
  return ['api', '/api/v1/favourites', args] as const
}

export function getApiV1FavouritesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.favourites.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FavouritesQueryKey>
  >({
    queryKey: getApiV1FavouritesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.favourites.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Favourites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FavouritesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FavouritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Favourites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.favourites.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FavouritesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FavouritesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1FeaturedTagsQueryKey() {
  return ['api', '/api/v1/featured_tags'] as const
}

export function getApiV1FeaturedTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturedTagsQueryKey>
  >({
    queryKey: getApiV1FeaturedTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.featured_tags.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FeaturedTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FeaturedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FeaturedTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1FeaturedTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FeaturedTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FeaturedTagsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1FeaturedTagsMutationKey() {
  return ['api', '/api/v1/featured_tags', 'POST'] as const
}

export function getPostApiV1FeaturedTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.featured_tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FeaturedTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.featured_tags.$post>) {
      return parseResponse(client.api.v1.featured_tags.$post(args, options))
    },
  })
}

export function usePostApiV1FeaturedTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.featured_tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1FeaturedTagsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FeaturedTagsSuggestionsQueryKey() {
  return ['api', '/api/v1/featured_tags/suggestions'] as const
}

export function getApiV1FeaturedTagsSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturedTagsSuggestionsQueryKey>
  >({
    queryKey: getApiV1FeaturedTagsSuggestionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.featured_tags.suggestions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FeaturedTagsSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FeaturedTagsSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1FeaturedTagsSuggestionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1FeaturedTagsSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FeaturedTagsSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1FeaturedTagsSuggestionsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiV1FeaturedTagsIdMutationKey() {
  return ['api', '/api/v1/featured_tags/:id', 'DELETE'] as const
}

export function getDeleteApiV1FeaturedTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.featured_tags)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1FeaturedTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.featured_tags[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1FeaturedTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.featured_tags)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.featured_tags)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1FeaturedTagsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FiltersQueryKey() {
  return ['api', '/api/v1/filters'] as const
}

export function getApiV1FiltersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FiltersQueryKey>
  >({
    queryKey: getApiV1FiltersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Filters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FiltersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Filters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FiltersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FiltersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1FiltersMutationKey() {
  return ['api', '/api/v1/filters', 'POST'] as const
}

export function getPostApiV1FiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.filters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FiltersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.filters.$post>) {
      return parseResponse(client.api.v1.filters.$post(args, options))
    },
  })
}

export function usePostApiV1Filters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.filters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1FiltersMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FiltersIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
) {
  return ['api', '/api/v1/filters/:id', args] as const
}

export function getApiV1FiltersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FiltersIdQueryKey>
  >({
    queryKey: getApiV1FiltersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.filters[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1FiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FiltersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FiltersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1FiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FiltersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FiltersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1FiltersIdMutationKey() {
  return ['api', '/api/v1/filters/:id', 'PUT'] as const
}

export function getPutApiV1FiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1FiltersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>) {
      return parseResponse(client.api.v1.filters[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1FiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1FiltersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1FiltersIdMutationKey() {
  return ['api', '/api/v1/filters/:id', 'DELETE'] as const
}

export function getDeleteApiV1FiltersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1FiltersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']>) {
      return parseResponse(client.api.v1.filters[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1FiltersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.filters)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1FiltersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1FollowRequestsQueryKey(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
) {
  return ['api', '/api/v1/follow_requests', args] as const
}

export function getApiV1FollowRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FollowRequestsQueryKey>
  >({
    queryKey: getApiV1FollowRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.follow_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1FollowRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FollowRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1FollowRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1FollowRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.follow_requests.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1FollowRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1FollowRequestsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1FollowRequestsIdAuthorizeMutationKey() {
  return ['api', '/api/v1/follow_requests/:id/authorize', 'POST'] as const
}

export function getPostApiV1FollowRequestsIdAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FollowRequestsIdAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>,
    ) {
      return parseResponse(client.api.v1.follow_requests[':id'].authorize.$post(args, options))
    },
  })
}

export function usePostApiV1FollowRequestsIdAuthorize<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.follow_requests)[':id']['authorize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1FollowRequestsIdAuthorizeMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1FollowRequestsIdRejectMutationKey() {
  return ['api', '/api/v1/follow_requests/:id/reject', 'POST'] as const
}

export function getPostApiV1FollowRequestsIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1FollowRequestsIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>,
    ) {
      return parseResponse(client.api.v1.follow_requests[':id'].reject.$post(args, options))
    },
  })
}

export function usePostApiV1FollowRequestsIdReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1FollowRequestsIdRejectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1InstanceQueryKey() {
  return ['api', '/api/v1/instance'] as const
}

export function getApiV1InstanceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstanceQueryKey>
  >({
    queryKey: getApiV1InstanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.instance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Instance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1InstanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Instance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1InstanceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1InstanceActivityQueryKey() {
  return ['api', '/api/v1/instance/activity'] as const
}

export function getApiV1InstanceActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstanceActivityQueryKey>
  >({
    queryKey: getApiV1InstanceActivityQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.instance.activity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1InstanceActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstanceActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1InstanceActivityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1InstanceActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstanceActivityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1InstanceActivityQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1InstancePeersQueryKey() {
  return ['api', '/api/v1/instance/peers'] as const
}

export function getApiV1InstancePeersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstancePeersQueryKey>
  >({
    queryKey: getApiV1InstancePeersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.instance.peers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1InstancePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstancePeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1InstancePeersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1InstancePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1InstancePeersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1InstancePeersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ListsQueryKey() {
  return ['api', '/api/v1/lists'] as const
}

export function getApiV1ListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsQueryKey>
  >({
    queryKey: getApiV1ListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Lists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Lists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1ListsMutationKey() {
  return ['api', '/api/v1/lists', 'PUT'] as const
}

export function getPutApiV1ListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$put>>>>>,
    TError,
    InferRequestType<typeof client.api.v1.lists.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.lists.$put>) {
      return parseResponse(client.api.v1.lists.$put(args, options))
    },
  })
}

export function usePutApiV1Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.lists.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1ListsMutationKey() {
  return ['api', '/api/v1/lists', 'POST'] as const
}

export function getPostApiV1ListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.lists.$post>) {
      return parseResponse(client.api.v1.lists.$post(args, options))
    },
  })
}

export function usePostApiV1Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ListsMutationKey() {
  return ['api', '/api/v1/lists', 'DELETE'] as const
}

export function getDeleteApiV1ListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ListsMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.lists.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$delete>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ListsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ListsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
) {
  return ['api', '/api/v1/lists/:id', args] as const
}

export function getApiV1ListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsIdQueryKey>
  >({
    queryKey: getApiV1ListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ListsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1ListsIdAccountsQueryKey(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
) {
  return ['api', '/api/v1/lists/:id/accounts', args] as const
}

export function getApiV1ListsIdAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsIdAccountsQueryKey>
  >({
    queryKey: getApiV1ListsIdAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.lists[':id'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ListsIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsIdAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1ListsIdAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1ListsIdAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ListsIdAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1ListsIdAccountsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1ListsIdAccountsMutationKey() {
  return ['api', '/api/v1/lists/:id/accounts', 'POST'] as const
}

export function getPostApiV1ListsIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ListsIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>,
    ) {
      return parseResponse(client.api.v1.lists[':id'].accounts.$post(args, options))
    },
  })
}

export function usePostApiV1ListsIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ListsIdAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ListsIdAccountsMutationKey() {
  return ['api', '/api/v1/lists/:id/accounts', 'DELETE'] as const
}

export function getDeleteApiV1ListsIdAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ListsIdAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>,
    ) {
      return parseResponse(client.api.v1.lists[':id'].accounts.$delete(args, options))
    },
  })
}

export function useDeleteApiV1ListsIdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ListsIdAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MarkersQueryKey(args: InferRequestType<typeof client.api.v1.markers.$get>) {
  return ['api', '/api/v1/markers', args] as const
}

export function getApiV1MarkersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.markers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarkersQueryKey>
  >({
    queryKey: getApiV1MarkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.markers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Markers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.markers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MarkersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MarkersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Markers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.markers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MarkersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MarkersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1MarkersMutationKey() {
  return ['api', '/api/v1/markers', 'POST'] as const
}

export function getPostApiV1MarkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.markers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MarkersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.markers.$post>) {
      return parseResponse(client.api.v1.markers.$post(args, options))
    },
  })
}

export function usePostApiV1Markers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.markers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1MarkersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1MediaMutationKey() {
  return ['api', '/api/v1/media', 'POST'] as const
}

export function getPostApiV1MediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.media.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.media.$post>) {
      return parseResponse(client.api.v1.media.$post(args, options))
    },
  })
}

export function usePostApiV1Media<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.media.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1MediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MediaIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
) {
  return ['api', '/api/v1/media/:id', args] as const
}

export function getApiV1MediaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaIdQueryKey>
  >({
    queryKey: getApiV1MediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.media[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1MediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MediaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1MediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.media)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MediaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1MediaIdMutationKey() {
  return ['api', '/api/v1/media/:id', 'POST'] as const
}

export function getPostApiV1MediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.media)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MediaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.media)[':id']['$post']>) {
      return parseResponse(client.api.v1.media[':id'].$post(args, options))
    },
  })
}

export function usePostApiV1MediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.media)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1MediaIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1MutesQueryKey(args: InferRequestType<typeof client.api.v1.mutes.$get>) {
  return ['api', '/api/v1/mutes', args] as const
}

export function getApiV1MutesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.mutes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1MutesQueryKey>
  >({
    queryKey: getApiV1MutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.mutes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Mutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.mutes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1MutesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Mutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.mutes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MutesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1MutesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1NotificationsQueryKey(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
) {
  return ['api', '/api/v1/notifications', args] as const
}

export function getApiV1NotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationsQueryKey>
  >({
    queryKey: getApiV1NotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Notifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Notifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.notifications.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NotificationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1NotificationsClearMutationKey() {
  return ['api', '/api/v1/notifications/clear', 'POST'] as const
}

export function getPostApiV1NotificationsClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.clear.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationsClearMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.notifications.clear.$post(undefined, options))
    },
  })
}

export function usePostApiV1NotificationsClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.notifications.clear.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NotificationsClearMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1NotificationsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
) {
  return ['api', '/api/v1/notifications/:id', args] as const
}

export function getApiV1NotificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationsIdQueryKey>
  >({
    queryKey: getApiV1NotificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.notifications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1NotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NotificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1NotificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1NotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NotificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1NotificationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1NotificationsIdDismissMutationKey() {
  return ['api', '/api/v1/notifications/:id/dismiss', 'POST'] as const
}

export function getPostApiV1NotificationsIdDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NotificationsIdDismissMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>,
    ) {
      return parseResponse(client.api.v1.notifications[':id'].dismiss.$post(args, options))
    },
  })
}

export function usePostApiV1NotificationsIdDismiss<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.notifications)[':id']['dismiss']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1NotificationsIdDismissMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1PollsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
) {
  return ['api', '/api/v1/polls/:id', args] as const
}

export function getApiV1PollsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PollsIdQueryKey>
  >({
    queryKey: getApiV1PollsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.polls[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1PollsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PollsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1PollsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1PollsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PollsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1PollsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiV1PollsIdMutationKey() {
  return ['api', '/api/v1/polls/:id', 'POST'] as const
}

export function getPostApiV1PollsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PollsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>) {
      return parseResponse(client.api.v1.polls[':id'].$post(args, options))
    },
  })
}

export function usePostApiV1PollsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PollsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PreferencesQueryKey() {
  return ['api', '/api/v1/preferences'] as const
}

export function getApiV1PreferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PreferencesQueryKey>
  >({
    queryKey: getApiV1PreferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1Preferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1PreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Preferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1PreferencesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1PushSubscriptionQueryKey() {
  return ['api', '/api/v1/push/subscription'] as const
}

export function getApiV1PushSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushSubscriptionQueryKey>
  >({
    queryKey: getApiV1PushSubscriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.push.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1PushSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PushSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1PushSubscriptionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1PushSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PushSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1PushSubscriptionQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiV1PushSubscriptionMutationKey() {
  return ['api', '/api/v1/push/subscription', 'PUT'] as const
}

export function getPutApiV1PushSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.push.subscription.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1PushSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.push.subscription.$put>) {
      return parseResponse(client.api.v1.push.subscription.$put(args, options))
    },
  })
}

export function usePutApiV1PushSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.push.subscription.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1PushSubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1PushSubscriptionMutationKey() {
  return ['api', '/api/v1/push/subscription', 'POST'] as const
}

export function getPostApiV1PushSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.push.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PushSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.push.subscription.$post>) {
      return parseResponse(client.api.v1.push.subscription.$post(args, options))
    },
  })
}

export function usePostApiV1PushSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.push.subscription.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1PushSubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1PushSubscriptionMutationKey() {
  return ['api', '/api/v1/push/subscription', 'DELETE'] as const
}

export function getDeleteApiV1PushSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PushSubscriptionMutationKey(),
    async mutationFn() {
      return parseResponse(client.api.v1.push.subscription.$delete(undefined, options))
    },
  })
}

export function useDeleteApiV1PushSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.push.subscription.$delete>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1PushSubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1ReportsMutationKey() {
  return ['api', '/api/v1/reports', 'POST'] as const
}

export function getPostApiV1ReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.reports.$post>) {
      return parseResponse(client.api.v1.reports.$post(args, options))
    },
  })
}

export function usePostApiV1Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1ReportsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1ScheduledStatusesQueryKey(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
) {
  return ['api', '/api/v1/scheduled_statuses', args] as const
}

export function getApiV1ScheduledStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScheduledStatusesQueryKey>
  >({
    queryKey: getApiV1ScheduledStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.scheduled_statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ScheduledStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ScheduledStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1ScheduledStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ScheduledStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.scheduled_statuses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ScheduledStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1ScheduledStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1ScheduledStatusesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
) {
  return ['api', '/api/v1/scheduled_statuses/:id', args] as const
}

export function getApiV1ScheduledStatusesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScheduledStatusesIdQueryKey>
  >({
    queryKey: getApiV1ScheduledStatusesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.scheduled_statuses[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1ScheduledStatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ScheduledStatusesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1ScheduledStatusesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1ScheduledStatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ScheduledStatusesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1ScheduledStatusesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiV1ScheduledStatusesIdMutationKey() {
  return ['api', '/api/v1/scheduled_statuses/:id', 'PUT'] as const
}

export function getPutApiV1ScheduledStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ScheduledStatusesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>,
    ) {
      return parseResponse(client.api.v1.scheduled_statuses[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ScheduledStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiV1ScheduledStatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1ScheduledStatusesIdMutationKey() {
  return ['api', '/api/v1/scheduled_statuses/:id', 'DELETE'] as const
}

export function getDeleteApiV1ScheduledStatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ScheduledStatusesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.scheduled_statuses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ScheduledStatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1ScheduledStatusesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1StatusesMutationKey() {
  return ['api', '/api/v1/statuses', 'POST'] as const
}

export function getPostApiV1StatusesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statuses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.statuses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.statuses.$post>) {
      return parseResponse(client.api.v1.statuses.$post(args, options))
    },
  })
}

export function usePostApiV1Statuses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statuses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.statuses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1StatusesIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id', args] as const
}

export function getApiV1StatusesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdQueryKey>
  >({
    queryKey: getApiV1StatusesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.statuses[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1StatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1StatusesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1StatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1StatusesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV1StatusesIdMutationKey() {
  return ['api', '/api/v1/statuses/:id', 'DELETE'] as const
}

export function getDeleteApiV1StatusesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1StatusesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']>) {
      return parseResponse(client.api.v1.statuses[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1StatusesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1StatusesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdBookmarkMutationKey() {
  return ['api', '/api/v1/statuses/:id/bookmark', 'POST'] as const
}

export function getPostApiV1StatusesIdBookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdBookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].bookmark.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdBookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['bookmark']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdBookmarkMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1StatusesIdContextQueryKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/context', args] as const
}

export function getApiV1StatusesIdContextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdContextQueryKey>
  >({
    queryKey: getApiV1StatusesIdContextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.statuses[':id'].context.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1StatusesIdContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1StatusesIdContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1StatusesIdContext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdContextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1StatusesIdContextQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1StatusesIdFavouriteMutationKey() {
  return ['api', '/api/v1/statuses/:id/favourite', 'POST'] as const
}

export function getPostApiV1StatusesIdFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].favourite.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdFavourite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['favourite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdFavouriteMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1StatusesIdFavouritedByQueryKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/favourited_by', args] as const
}

export function getApiV1StatusesIdFavouritedByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdFavouritedByQueryKey>
  >({
    queryKey: getApiV1StatusesIdFavouritedByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.statuses[':id'].favourited_by.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1StatusesIdFavouritedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdFavouritedByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1StatusesIdFavouritedByQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1StatusesIdFavouritedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdFavouritedByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1StatusesIdFavouritedByQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1StatusesIdMuteMutationKey() {
  return ['api', '/api/v1/statuses/:id/mute', 'POST'] as const
}

export function getPostApiV1StatusesIdMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].mute.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['mute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdMuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdPinMutationKey() {
  return ['api', '/api/v1/statuses/:id/pin', 'POST'] as const
}

export function getPostApiV1StatusesIdPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdPinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].pin.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['pin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdPinMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdReblogMutationKey() {
  return ['api', '/api/v1/statuses/:id/reblog', 'POST'] as const
}

export function getPostApiV1StatusesIdReblogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdReblogMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].reblog.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdReblog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['reblog']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdReblogMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1StatusesIdRebloggedByQueryKey(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
) {
  return ['api', '/api/v1/statuses/:id/reblogged_by', args] as const
}

export function getApiV1StatusesIdRebloggedByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdRebloggedByQueryKey>
  >({
    queryKey: getApiV1StatusesIdRebloggedByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.statuses[':id'].reblogged_by.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1StatusesIdRebloggedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdRebloggedByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1StatusesIdRebloggedByQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1StatusesIdRebloggedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StatusesIdRebloggedByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1StatusesIdRebloggedByQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiV1StatusesIdUnbookmarkMutationKey() {
  return ['api', '/api/v1/statuses/:id/unbookmark', 'POST'] as const
}

export function getPostApiV1StatusesIdUnbookmarkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdUnbookmarkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].unbookmark.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdUnbookmark<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['unbookmark']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdUnbookmarkMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdUnfavouriteMutationKey() {
  return ['api', '/api/v1/statuses/:id/unfavourite', 'POST'] as const
}

export function getPostApiV1StatusesIdUnfavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdUnfavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].unfavourite.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdUnfavourite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['unfavourite']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdUnfavouriteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiV1StatusesIdUnmuteMutationKey() {
  return ['api', '/api/v1/statuses/:id/unmute', 'POST'] as const
}

export function getPostApiV1StatusesIdUnmuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdUnmuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].unmute.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdUnmute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['unmute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdUnmuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdUnpinMutationKey() {
  return ['api', '/api/v1/statuses/:id/unpin', 'POST'] as const
}

export function getPostApiV1StatusesIdUnpinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdUnpinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].unpin.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdUnpin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['unpin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdUnpinMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiV1StatusesIdUnreblogMutationKey() {
  return ['api', '/api/v1/statuses/:id/unreblog', 'POST'] as const
}

export function getPostApiV1StatusesIdUnreblogMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1StatusesIdUnreblogMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>,
    ) {
      return parseResponse(client.api.v1.statuses[':id'].unreblog.$post(args, options))
    },
  })
}

export function usePostApiV1StatusesIdUnreblog<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.statuses)[':id']['unreblog']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1StatusesIdUnreblogMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1SuggestionsQueryKey(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
) {
  return ['api', '/api/v1/suggestions', args] as const
}

export function getApiV1SuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.suggestions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SuggestionsQueryKey>
  >({
    queryKey: getApiV1SuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.suggestions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Suggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1SuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Suggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.suggestions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1SuggestionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteApiV1SuggestionsIdMutationKey() {
  return ['api', '/api/v1/suggestions/:id', 'DELETE'] as const
}

export function getDeleteApiV1SuggestionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.suggestions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1SuggestionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']>) {
      return parseResponse(client.api.v1.suggestions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1SuggestionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.suggestions)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.suggestions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1SuggestionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1TimelinesHomeQueryKey(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
) {
  return ['api', '/api/v1/timelines/home', args] as const
}

export function getApiV1TimelinesHomeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesHomeQueryKey>
  >({
    queryKey: getApiV1TimelinesHomeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.timelines.home.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1TimelinesHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TimelinesHomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1TimelinesHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.home.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TimelinesHomeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1TimelinesListListIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
) {
  return ['api', '/api/v1/timelines/list/:list_id', args] as const
}

export function getApiV1TimelinesListListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesListListIdQueryKey>
  >({
    queryKey: getApiV1TimelinesListListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.timelines.list[':list_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TimelinesListListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesListListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1TimelinesListListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1TimelinesListListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesListListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1TimelinesListListIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1TimelinesPublicQueryKey(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
) {
  return ['api', '/api/v1/timelines/public', args] as const
}

export function getApiV1TimelinesPublicQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesPublicQueryKey>
  >({
    queryKey: getApiV1TimelinesPublicQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.timelines.public.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TimelinesPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TimelinesPublicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1TimelinesPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.timelines.public.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesPublicQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TimelinesPublicQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV1TimelinesTagHashtagQueryKey(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
) {
  return ['api', '/api/v1/timelines/tag/:hashtag', args] as const
}

export function getApiV1TimelinesTagHashtagQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesTagHashtagQueryKey>
  >({
    queryKey: getApiV1TimelinesTagHashtagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.timelines.tag[':hashtag'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiV1TimelinesTagHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesTagHashtagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiV1TimelinesTagHashtagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiV1TimelinesTagHashtag<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TimelinesTagHashtagQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiV1TimelinesTagHashtagQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiV1TrendsQueryKey(args: InferRequestType<typeof client.api.v1.trends.$get>) {
  return ['api', '/api/v1/trends', args] as const
}

export function getApiV1TrendsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.trends.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrendsQueryKey>
  >({
    queryKey: getApiV1TrendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.trends.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV1Trends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.trends.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TrendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV1TrendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV1Trends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.trends.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1TrendsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV1TrendsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiV2SearchQueryKey(args: InferRequestType<typeof client.api.v2.search.$get>) {
  return ['api', '/api/v2/search', args] as const
}

export function getApiV2SearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v2.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SearchQueryKey>
  >({
    queryKey: getApiV2SearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v2.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiV2Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiV2SearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiV2Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v2.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV2SearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiV2SearchQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  return ['oauth', '/oauth/authorize', args] as const
}

export function getOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >({
    queryKey: getOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauthRevokeMutationKey() {
  return ['oauth', '/oauth/revoke', 'POST'] as const
}

export function getPostOauthRevokeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.revoke.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRevokeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.revoke.$post>) {
      return parseResponse(client.oauth.revoke.$post(args, options))
    },
  })
}

export function usePostOauthRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.revoke.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthRevokeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostOauthTokenMutationKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function getPostOauthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.oauth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.token.$post>) {
      return parseResponse(client.oauth.token.$post(args, options))
    },
  })
}

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
