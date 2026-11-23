import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV4Key() {
  return ['v4'] as const
}

export function getV4EncodedFullHashesEncodedRequestQueryKey(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
) {
  return ['v4', '/v4/encodedFullHashes/:encodedRequest', args] as const
}

export function getV4EncodedFullHashesEncodedRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4EncodedFullHashesEncodedRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.encodedFullHashes[':encodedRequest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4EncodedFullHashesEncodedRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.encodedFullHashes)[':encodedRequest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4EncodedFullHashesEncodedRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4EncodedUpdatesEncodedRequestQueryKey(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
) {
  return ['v4', '/v4/encodedUpdates/:encodedRequest', args] as const
}

export function getV4EncodedUpdatesEncodedRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4EncodedUpdatesEncodedRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.encodedUpdates[':encodedRequest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4EncodedUpdatesEncodedRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.encodedUpdates)[':encodedRequest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV4EncodedUpdatesEncodedRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV4FullHashesFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4FullHashesFindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV4ThreatHits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatHits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.threatHits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4ThreatHitsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV4ThreatListUpdatesFetch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4ThreatListUpdatesFetchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV4ThreatListsQueryKey(
  args: InferRequestType<typeof client.v4.threatLists.$get>,
) {
  return ['v4', '/v4/threatLists', args] as const
}

export function getV4ThreatListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.threatLists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4ThreatListsQueryKey>
  >({
    queryKey: getV4ThreatListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.threatLists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4ThreatLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.threatLists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.threatLists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4ThreatListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4ThreatListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV4ThreatMatchesFind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4ThreatMatchesFindMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
