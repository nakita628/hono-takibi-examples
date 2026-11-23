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

export function getApiKey() {
  return ['api'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getApiOembedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oembed.$get>>,
) {
  return ['api', '/api/oembed', toValue(args)] as const
}

export function getApiOembedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oembed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOembedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oembed.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiOembed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oembed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>
          >,
          ReturnType<typeof getApiOembedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oembed.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOembedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOembedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oembed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiProofsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.proofs.$get>>,
) {
  return ['api', '/api/proofs', toValue(args)] as const
}

export function getApiProofsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.proofs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProofsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.proofs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProofs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.proofs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>
          >,
          ReturnType<typeof getApiProofsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.proofs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProofsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProofsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.proofs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.accounts.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.relationships.$get>>,
) {
  return ['api', '/api/v1/accounts/relationships', toValue(args)] as const
}

export function getApiV1AccountsRelationshipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.relationships.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsRelationshipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts.relationships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsRelationships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.relationships.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsRelationshipsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.relationships.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsRelationshipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsRelationshipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts.relationships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.search.$get>>,
) {
  return ['api', '/api/v1/accounts/search', toValue(args)] as const
}

export function getApiV1AccountsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.accounts.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AccountsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.accounts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1AccountsVerifyCredentialsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AccountsVerifyCredentialsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts.verify_credentials.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsVerifyCredentialsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.accounts.verify_credentials.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsVerifyCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AccountsVerifyCredentialsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts.verify_credentials.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>>,
) {
  return ['api', '/api/v1/accounts/:id', toValue(args)] as const
}

export function getApiV1AccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:id/featured_tags', toValue(args)] as const
}

export function getApiV1AccountsIdFeaturedTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdFeaturedTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].featured_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdFeaturedTagsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['featured_tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFeaturedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdFeaturedTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].featured_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:id/followers', toValue(args)] as const
}

export function getApiV1AccountsIdFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdFollowersQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsIdFollowingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:id/following', toValue(args)] as const
}

export function getApiV1AccountsIdFollowingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['following']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdFollowingQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsIdIdentityProofsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:id/identity_proofs', toValue(args)] as const
}

export function getApiV1AccountsIdIdentityProofsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdIdentityProofsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].identity_proofs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdIdentityProofsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['identity_proofs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdIdentityProofsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdIdentityProofsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].identity_proofs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AccountsIdListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>,
) {
  return ['api', '/api/v1/accounts/:id/lists', toValue(args)] as const
}

export function getApiV1AccountsIdListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdListsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>
  >,
) {
  return ['api', '/api/v1/accounts/:id/statuses', toValue(args)] as const
}

export function getApiV1AccountsIdStatusesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AccountsIdStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.accounts[':id'].statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AccountsIdStatusesQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.accounts)[':id']['statuses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AccountsIdStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AccountsIdStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.accounts[':id'].statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.accounts.$get>>,
) {
  return ['api', '/api/v1/admin/accounts', toValue(args)] as const
}

export function getApiV1AdminAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AdminAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.admin.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AdminAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AdminAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AdminAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.admin.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AdminAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>,
) {
  return ['api', '/api/v1/admin/accounts/:id', toValue(args)] as const
}

export function getApiV1AdminAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AdminAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.admin.accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AdminAccountsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AdminAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.admin.accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.admin.accounts)[':id']['approve']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.reports.$get>>,
) {
  return ['api', '/api/v1/admin/reports', toValue(args)] as const
}

export function getApiV1AdminReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AdminReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.admin.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AdminReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.admin.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AdminReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.admin.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AdminReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.admin.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1AdminReportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>>,
) {
  return ['api', '/api/v1/admin/reports/:id', toValue(args)] as const
}

export function getApiV1AdminReportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AdminReportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.admin.reports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AdminReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.admin.reports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AdminReportsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.admin.reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AdminReportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AdminReportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.admin.reports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.admin.reports)[':id']['unassign']['$post']>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.announcements.$get>>,
) {
  return ['api', '/api/v1/announcements', toValue(args)] as const
}

export function getApiV1AnnouncementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.announcements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AnnouncementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.announcements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Announcements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.announcements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>
            >
          >,
          ReturnType<typeof getApiV1AnnouncementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AnnouncementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.announcements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.api.v1.announcements)[':id']['reactions'][':name']['$put']
          >,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.apps.$post>,
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

export function getApiV1AppsVerifyCredentialsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1AppsVerifyCredentialsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.apps.verify_credentials.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1AppsVerifyCredentialsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.verify_credentials.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AppsVerifyCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1AppsVerifyCredentialsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.apps.verify_credentials.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocks.$get>>,
) {
  return ['api', '/api/v1/blocks', toValue(args)] as const
}

export function getApiV1BlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Blocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.blocks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
          >,
          ReturnType<typeof getApiV1BlocksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bookmarks.$get>>,
) {
  return ['api', '/api/v1/bookmarks', toValue(args)] as const
}

export function getApiV1BookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Bookmarks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BookmarksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.bookmarks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.conversations.$get>>,
) {
  return ['api', '/api/v1/conversations', toValue(args)] as const
}

export function getApiV1ConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.conversations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Conversations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.conversations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>
            >
          >,
          ReturnType<typeof getApiV1ConversationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.conversations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1CustomEmojisQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1CustomEmojisQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.custom_emojis.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1CustomEmojis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>
            >
          >,
          ReturnType<typeof getApiV1CustomEmojisQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.custom_emojis.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1CustomEmojisQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1CustomEmojisQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.custom_emojis.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DirectoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
) {
  return ['api', '/api/v1/directory', toValue(args)] as const
}

export function getApiV1DirectoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DirectoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.directory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Directory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.directory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DirectoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.directory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DirectoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.directory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1DomainBlocksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.domain_blocks.$get>>,
) {
  return ['api', '/api/v1/domain_blocks', toValue(args)] as const
}

export function getApiV1DomainBlocksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.domain_blocks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1DomainBlocksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.domain_blocks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DomainBlocks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.domain_blocks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DomainBlocksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.domain_blocks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DomainBlocksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1DomainBlocksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.domain_blocks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endorsements.$get>>,
) {
  return ['api', '/api/v1/endorsements', toValue(args)] as const
}

export function getApiV1EndorsementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endorsements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1EndorsementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.endorsements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Endorsements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.endorsements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>
            >
          >,
          ReturnType<typeof getApiV1EndorsementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.endorsements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1EndorsementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1EndorsementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.endorsements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FavouritesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.favourites.$get>>,
) {
  return ['api', '/api/v1/favourites', toValue(args)] as const
}

export function getApiV1FavouritesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.favourites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FavouritesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.favourites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Favourites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.favourites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FavouritesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.favourites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FavouritesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FavouritesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.favourites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1FeaturedTagsQueryKey() {
  return ['api', '/api/v1/featured_tags'] as const
}

export function getApiV1FeaturedTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1FeaturedTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.featured_tags.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FeaturedTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FeaturedTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.featured_tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturedTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1FeaturedTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.featured_tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1FeaturedTagsSuggestionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1FeaturedTagsSuggestionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.featured_tags.suggestions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1FeaturedTagsSuggestionsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.featured_tags.suggestions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FeaturedTagsSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1FeaturedTagsSuggestionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.featured_tags.suggestions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1FiltersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1FiltersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Filters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
          >,
          ReturnType<typeof getApiV1FiltersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FiltersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1FiltersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.filters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.filters.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>>,
) {
  return ['api', '/api/v1/filters/:id', toValue(args)] as const
}

export function getApiV1FiltersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FiltersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.filters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FiltersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.filters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1FiltersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FiltersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FiltersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.filters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.filters)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.filters)[':id']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.follow_requests.$get>>,
) {
  return ['api', '/api/v1/follow_requests', toValue(args)] as const
}

export function getApiV1FollowRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.follow_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1FollowRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.follow_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1FollowRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.follow_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
            >
          >,
          ReturnType<typeof getApiV1FollowRequestsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.follow_requests.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1FollowRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1FollowRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.follow_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.follow_requests)[':id']['reject']['$post']>,
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

export function getApiV1InstanceQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InstanceQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.instance.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Instance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InstanceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InstanceQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.instance.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InstanceActivityQueryKey() {
  return ['api', '/api/v1/instance/activity'] as const
}

export function getApiV1InstanceActivityQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InstanceActivityQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.instance.activity.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InstanceActivityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.activity.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstanceActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InstanceActivityQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.instance.activity.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1InstancePeersQueryKey() {
  return ['api', '/api/v1/instance/peers'] as const
}

export function getApiV1InstancePeersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1InstancePeersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.instance.peers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1InstancePeers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
            >
          >,
          ReturnType<typeof getApiV1InstancePeersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.instance.peers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1InstancePeersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1InstancePeersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.instance.peers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ListsQueryKey() {
  return ['api', '/api/v1/lists'] as const
}

export function getApiV1ListsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1ListsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Lists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>
          >,
          ReturnType<typeof getApiV1ListsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1ListsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.lists.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.lists.$put>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.lists.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.lists.$delete>>>
            >
          >,
          TError,
          void,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>>,
) {
  return ['api', '/api/v1/lists/:id', toValue(args)] as const
}

export function getApiV1ListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.lists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1ListsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ListsIdAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>,
) {
  return ['api', '/api/v1/lists/:id/accounts', toValue(args)] as const
}

export function getApiV1ListsIdAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ListsIdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.lists[':id'].accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ListsIdAccountsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.lists)[':id']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ListsIdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ListsIdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.lists[':id'].accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getApiV1MarkersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.markers.$get>>,
) {
  return ['api', '/api/v1/markers', toValue(args)] as const
}

export function getApiV1MarkersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.markers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MarkersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.markers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Markers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.markers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
          >,
          ReturnType<typeof getApiV1MarkersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MarkersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MarkersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.markers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.markers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.markers.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.media.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.media.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media)[':id']['$get']>>,
) {
  return ['api', '/api/v1/media/:id', toValue(args)] as const
}

export function getApiV1MediaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.media[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.media)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1MediaIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.media[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.media)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.media)[':id']['$post']>,
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

export function getApiV1MutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.mutes.$get>>,
) {
  return ['api', '/api/v1/mutes', toValue(args)] as const
}

export function getApiV1MutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.mutes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.mutes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Mutes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.mutes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>
          >,
          ReturnType<typeof getApiV1MutesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.mutes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1MutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.mutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1NotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notifications.$get>>,
) {
  return ['api', '/api/v1/notifications', toValue(args)] as const
}

export function getApiV1NotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Notifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>
            >
          >,
          ReturnType<typeof getApiV1NotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>>,
) {
  return ['api', '/api/v1/notifications/:id', toValue(args)] as const
}

export function getApiV1NotificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1NotificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.notifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1NotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.notifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1NotificationsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NotificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1NotificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.notifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>>,
) {
  return ['api', '/api/v1/polls/:id', toValue(args)] as const
}

export function getApiV1PollsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PollsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.polls[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PollsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.polls)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1PollsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PollsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PollsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.polls[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.polls)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.polls)[':id']['$post']>,
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

export function getApiV1PreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1PreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.preferences.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Preferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PreferencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1PreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PushSubscriptionQueryKey() {
  return ['api', '/api/v1/push/subscription'] as const
}

export function getApiV1PushSubscriptionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1PushSubscriptionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.push.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PushSubscriptionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.push.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1PushSubscriptionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.push.subscription.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.push.subscription.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.push.subscription.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.reports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.reports.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduled_statuses.$get>>,
) {
  return ['api', '/api/v1/scheduled_statuses', toValue(args)] as const
}

export function getApiV1ScheduledStatusesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduled_statuses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ScheduledStatusesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scheduled_statuses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ScheduledStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.scheduled_statuses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1ScheduledStatusesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.scheduled_statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScheduledStatusesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ScheduledStatusesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scheduled_statuses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1ScheduledStatusesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/scheduled_statuses/:id', toValue(args)] as const
}

export function getApiV1ScheduledStatusesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ScheduledStatusesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.scheduled_statuses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1ScheduledStatusesIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.scheduled_statuses)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ScheduledStatusesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ScheduledStatusesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.scheduled_statuses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.statuses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.statuses.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>>,
) {
  return ['api', '/api/v1/statuses/:id', toValue(args)] as const
}

export function getApiV1StatusesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statuses[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1StatusesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.statuses)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statuses[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>
  >,
) {
  return ['api', '/api/v1/statuses/:id/context', toValue(args)] as const
}

export function getApiV1StatusesIdContextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusesIdContextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statuses[':id'].context.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['context']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusesIdContextQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['context']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdContextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusesIdContextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statuses[':id'].context.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>
  >,
) {
  return ['api', '/api/v1/statuses/:id/favourited_by', toValue(args)] as const
}

export function getApiV1StatusesIdFavouritedByQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusesIdFavouritedByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statuses[':id'].favourited_by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusesIdFavouritedByQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['favourited_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdFavouritedByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusesIdFavouritedByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statuses[':id'].favourited_by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>
  >,
) {
  return ['api', '/api/v1/statuses/:id/reblogged_by', toValue(args)] as const
}

export function getApiV1StatusesIdRebloggedByQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StatusesIdRebloggedByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.statuses[':id'].reblogged_by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1StatusesIdRebloggedByQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.statuses)[':id']['reblogged_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StatusesIdRebloggedByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StatusesIdRebloggedByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.statuses[':id'].reblogged_by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggestions.$get>>,
) {
  return ['api', '/api/v1/suggestions', toValue(args)] as const
}

export function getApiV1SuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Suggestions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SuggestionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.suggestions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.home.$get>>,
) {
  return ['api', '/api/v1/timelines/home', toValue(args)] as const
}

export function getApiV1TimelinesHomeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.home.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TimelinesHomeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.timelines.home.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TimelinesHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.home.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TimelinesHomeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.home.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesHomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TimelinesHomeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.timelines.home.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TimelinesListListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>
  >,
) {
  return ['api', '/api/v1/timelines/list/:list_id', toValue(args)] as const
}

export function getApiV1TimelinesListListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TimelinesListListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.timelines.list[':list_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TimelinesListListIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.timelines.list)[':list_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesListListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TimelinesListListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.timelines.list[':list_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TimelinesPublicQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.public.$get>>,
) {
  return ['api', '/api/v1/timelines/public', toValue(args)] as const
}

export function getApiV1TimelinesPublicQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.public.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TimelinesPublicQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.timelines.public.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1TimelinesPublic<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.timelines.public.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
            >
          >,
          ReturnType<typeof getApiV1TimelinesPublicQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.timelines.public.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesPublicQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TimelinesPublicQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.timelines.public.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TimelinesTagHashtagQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>
  >,
) {
  return ['api', '/api/v1/timelines/tag/:hashtag', toValue(args)] as const
}

export function getApiV1TimelinesTagHashtagQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TimelinesTagHashtagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.timelines.tag[':hashtag'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1TimelinesTagHashtagQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.timelines.tag)[':hashtag']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TimelinesTagHashtagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TimelinesTagHashtagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.timelines.tag[':hashtag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1TrendsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trends.$get>>,
) {
  return ['api', '/api/v1/trends', toValue(args)] as const
}

export function getApiV1TrendsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trends.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1TrendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.trends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Trends<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.trends.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
          >,
          ReturnType<typeof getApiV1TrendsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.trends.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1TrendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1TrendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.trends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV2SearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.search.$get>>,
) {
  return ['api', '/api/v2/search', toValue(args)] as const
}

export function getApiV2SearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV2SearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v2.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV2Search<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v2.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
          >,
          ReturnType<typeof getApiV2SearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV2SearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV2SearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v2.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
) {
  return ['oauth', '/oauth/authorize', toValue(args)] as const
}

export function getOauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getOauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.revoke.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.revoke.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
