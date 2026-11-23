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

export function getV4Key() {
  return ['v4'] as const
}

export function getV4EncodedFullHashesEncodedRequestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>
  >,
) {
  return ['v4', '/v4/encodedFullHashes/:encodedRequest', toValue(args)] as const
}

export function getV4EncodedFullHashesEncodedRequestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4EncodedFullHashesEncodedRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.encodedFullHashes[':encodedRequest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4EncodedFullHashesEncodedRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4EncodedFullHashesEncodedRequestQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4EncodedFullHashesEncodedRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4EncodedFullHashesEncodedRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.encodedFullHashes[':encodedRequest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4EncodedUpdatesEncodedRequestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>
  >,
) {
  return ['v4', '/v4/encodedUpdates/:encodedRequest', toValue(args)] as const
}

export function getV4EncodedUpdatesEncodedRequestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4EncodedUpdatesEncodedRequestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.encodedUpdates[':encodedRequest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4EncodedUpdatesEncodedRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4EncodedUpdatesEncodedRequestQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4EncodedUpdatesEncodedRequestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4EncodedUpdatesEncodedRequestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.encodedUpdates[':encodedRequest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV4FullHashesFindMutationKey() {
  return ['v4', '/v4/fullHashes:find', 'POST'] as const
}

export function getPostV4FullHashesFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['fullHashes:find']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['fullHashes:find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4FullHashesFindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['fullHashes:find']['$post']>) {
      return parseResponse(client.v4['fullHashes:find'].$post(args, options))
    },
  })
}

export function usePostV4FullHashesFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)['fullHashes:find']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)['fullHashes:find']['$post']>,
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
  const mutationDefaults = getPostV4FullHashesFindMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4ThreatHitsMutationKey() {
  return ['v4', '/v4/threatHits', 'POST'] as const
}

export function getPostV4ThreatHitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatHits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v4.threatHits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ThreatHitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.threatHits.$post>) {
      return parseResponse(client.v4.threatHits.$post(args, options))
    },
  })
}

export function usePostV4ThreatHits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatHits.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.threatHits.$post>,
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
  const mutationDefaults = getPostV4ThreatHitsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4ThreatListUpdatesFetchMutationKey() {
  return ['v4', '/v4/threatListUpdates:fetch', 'POST'] as const
}

export function getPostV4ThreatListUpdatesFetchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4)['threatListUpdates:fetch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ThreatListUpdatesFetchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']>,
    ) {
      return parseResponse(client.v4['threatListUpdates:fetch'].$post(args, options))
    },
  })
}

export function usePostV4ThreatListUpdatesFetch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)['threatListUpdates:fetch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)['threatListUpdates:fetch']['$post']>,
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
  const mutationDefaults = getPostV4ThreatListUpdatesFetchMutationOptions<TError, TOnMutateResult>(
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

export function getV4ThreatListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.threatLists.$get>>,
) {
  return ['v4', '/v4/threatLists', toValue(args)] as const
}

export function getV4ThreatListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.threatLists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4ThreatListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.threatLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4ThreatLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.threatLists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
          >,
          ReturnType<typeof getV4ThreatListsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4ThreatListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4ThreatListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.threatLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV4ThreatMatchesFindMutationKey() {
  return ['v4', '/v4/threatMatches:find', 'POST'] as const
}

export function getPostV4ThreatMatchesFindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4)['threatMatches:find']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v4)['threatMatches:find']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4ThreatMatchesFindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4)['threatMatches:find']['$post']>) {
      return parseResponse(client.v4['threatMatches:find'].$post(args, options))
    },
  })
}

export function usePostV4ThreatMatchesFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4)['threatMatches:find']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4)['threatMatches:find']['$post']>,
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
  const mutationDefaults = getPostV4ThreatMatchesFindMutationOptions<TError, TOnMutateResult>(
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
