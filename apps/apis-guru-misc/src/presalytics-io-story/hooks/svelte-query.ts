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

export function getCacheKey() {
  return ['cache'] as const
}

export function getCollaboratorsKey() {
  return ['collaborators'] as const
}

export function getEnvironmentKey() {
  return ['environment'] as const
}

export function getFileKey() {
  return ['file'] as const
}

export function getNoTagsSpecKey() {
  return ['no_tags_spec'] as const
}

export function getOutlineSchemaKey() {
  return ['outline-schema'] as const
}

export function getPermissionTypesKey() {
  return ['permission_types'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getViewsKey() {
  return ['views'] as const
}

export function getIdKey() {
  return ['{id}'] as const
}

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function createPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
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
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCacheMutationKey() {
  return ['cache', '/cache', 'POST'] as const
}

export function getPostCacheMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.cache.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCacheMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cache.$post>) {
      return parseResponse(client.cache.$post(args, options))
    },
  })
}

export function createPostCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$post>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.cache.$post>,
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
    const mutationDefaults = getPostCacheMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCacheNonceQueryKey(
  args: InferRequestType<(typeof client.cache)[':nonce']['$get']>,
) {
  return ['cache', '/cache/:nonce', args] as const
}

export function getCacheNonceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.cache)[':nonce']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheNonceQueryKey>
  >({
    queryKey: getCacheNonceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cache[':nonce'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCacheNonce<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cache)[':nonce']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCacheNonceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCacheNonceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCollaboratorsMutationKey() {
  return ['collaborators', '/collaborators', 'POST'] as const
}

export function getPostCollaboratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborators.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.collaborators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCollaboratorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.collaborators.$post>) {
      return parseResponse(client.collaborators.$post(args, options))
    },
  })
}

export function createPostCollaborators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborators.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.collaborators.$post>,
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
    const mutationDefaults = getPostCollaboratorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEnvironmentIndexQueryKey() {
  return ['environment', '/environment/'] as const
}

export function getEnvironmentIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentIndexQueryKey>
  >({
    queryKey: getEnvironmentIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.environment.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createEnvironmentIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnvironmentIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnvironmentIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostFileMutationKey() {
  return ['file', '/file', 'POST'] as const
}

export function getPostFileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
    TError,
    InferRequestType<typeof client.file.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file.$post>) {
      return parseResponse(client.file.$post(args, options))
    },
  })
}

export function createPostFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
        TError,
        InferRequestType<typeof client.file.$post>,
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
    const mutationDefaults = getPostFileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostFileJsonMutationKey() {
  return ['file', '/file/json', 'POST'] as const
}

export function getPostFileJsonMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.json.$post>>>>>,
    TError,
    InferRequestType<typeof client.file.json.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFileJsonMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.file.json.$post>) {
      return parseResponse(client.file.json.$post(args, options))
    },
  })
}

export function createPostFileJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.json.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.file.json.$post>,
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
    const mutationDefaults = getPostFileJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getNoTagsSpecQueryKey() {
  return ['no_tags_spec', '/no_tags_spec'] as const
}

export function getNoTagsSpecQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNoTagsSpecQueryKey>
  >({
    queryKey: getNoTagsSpecQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.no_tags_spec.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNoTagsSpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNoTagsSpecQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNoTagsSpecQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
) {
  return ['outline-schema', '/outline-schema/:schema_version/story-outline.json', args] as const
}

export function getOutlineSchemaSchemaVersionStoryOutlineJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey>
  >({
    queryKey: getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['outline-schema'][':schema_version']['story-outline.json'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOutlineSchemaSchemaVersionStoryOutlineJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOutlineSchemaSchemaVersionStoryOutlineJsonQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPermissionTypesQueryKey() {
  return ['permission_types', '/permission_types'] as const
}

export function getPermissionTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionTypesQueryKey>
  >({
    queryKey: getPermissionTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.permission_types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPermissionTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionTypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSessionsSessionIdQueryKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
) {
  return ['sessions', '/sessions/:session_id', args] as const
}

export function getSessionsSessionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdQueryKey>
  >({
    queryKey: getSessionsSessionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions[':session_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsSessionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSessionsSessionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSessionsSessionIdMutationKey() {
  return ['sessions', '/sessions/:session_id', 'DELETE'] as const
}

export function getDeleteSessionsSessionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSessionsSessionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sessions)[':session_id']['$delete']>) {
      return parseResponse(client.sessions[':session_id'].$delete(args, options))
    },
  })
}

export function createDeleteSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sessions)[':session_id']['$delete']>,
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
    const mutationDefaults = getDeleteSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSessionsSessionIdViewsQueryKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
) {
  return ['sessions', '/sessions/:session_id/views', args] as const
}

export function getSessionsSessionIdViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdViewsQueryKey>
  >({
    queryKey: getSessionsSessionIdViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions[':session_id'].views.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSessionsSessionIdViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsSessionIdViewsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSessionsSessionIdViewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSessionsSessionIdViewsMutationKey() {
  return ['sessions', '/sessions/:session_id/views', 'POST'] as const
}

export function getPostSessionsSessionIdViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSessionsSessionIdViewsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']>,
    ) {
      return parseResponse(client.sessions[':session_id'].views.$post(args, options))
    },
  })
}

export function createPostSessionsSessionIdViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']>,
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
    const mutationDefaults = getPostSessionsSessionIdViewsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getViewsViewIdQueryKey(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
) {
  return ['views', '/views/:view_id', args] as const
}

export function getViewsViewIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewsViewIdQueryKey>
  >({
    queryKey: getViewsViewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.views[':view_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createViewsViewId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.views)[':view_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsViewIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getViewsViewIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteViewsViewIdMutationKey() {
  return ['views', '/views/:view_id', 'DELETE'] as const
}

export function getDeleteViewsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.views)[':view_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteViewsViewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.views)[':view_id']['$delete']>) {
      return parseResponse(client.views[':view_id'].$delete(args, options))
    },
  })
}

export function createDeleteViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.views)[':view_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.views)[':view_id']['$delete']>,
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
    const mutationDefaults = getDeleteViewsViewIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdQueryKey(args: InferRequestType<(typeof client)[':id']['$get']>) {
  return [':id', '/:id', args] as const
}

export function getIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>>,
    TError,
    TData,
    ReturnType<typeof getIdQueryKey>
  >({
    queryKey: getIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutIdMutationKey() {
  return [':id', '/:id', 'PUT'] as const
}

export function getPutIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$put']>>>>>,
    TError,
    InferRequestType<(typeof client)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['$put']>) {
      return parseResponse(client[':id'].$put(args, options))
    },
  })
}

export function createPutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client)[':id']['$put']>,
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
    const mutationDefaults = getPutIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIdMutationKey() {
  return [':id', '/:id', 'DELETE'] as const
}

export function getDeleteIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$delete']>>>>
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['$delete']>) {
      return parseResponse(client[':id'].$delete(args, options))
    },
  })
}

export function createDeleteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$delete']>>>>
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdAnalyticsQueryKey(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
) {
  return [':id', '/:id/analytics', args] as const
}

export function getIdAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdAnalyticsQueryKey>
  >({
    queryKey: getIdAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIdCollaboratorsQueryKey(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
) {
  return [':id', '/:id/collaborators', args] as const
}

export function getIdCollaboratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdCollaboratorsQueryKey>
  >({
    queryKey: getIdCollaboratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].collaborators.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdCollaboratorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdCollaboratorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIdCollaboratorsMutationKey() {
  return [':id', '/:id/collaborators', 'POST'] as const
}

export function getPostIdCollaboratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':id']['collaborators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdCollaboratorsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['collaborators']['$post']>) {
      return parseResponse(client[':id'].collaborators.$post(args, options))
    },
  })
}

export function createPostIdCollaborators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':id']['collaborators']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':id']['collaborators']['$post']>,
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
    const mutationDefaults = getPostIdCollaboratorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey(
  args: InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
) {
  return [
    ':id',
    '/:id/collaborators/authorize/:story_collaborator_userid/:permissiontype',
    args,
  ] as const
}

export function getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey>
  >({
    queryKey: getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].collaborators.authorize[':story_collaborator_userid'][':permissiontype'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontype<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostIdCollaboratorsInactiveMutationKey() {
  return [':id', '/:id/collaborators/inactive', 'POST'] as const
}

export function getPostIdCollaboratorsInactiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['collaborators']['inactive']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdCollaboratorsInactiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']>,
    ) {
      return parseResponse(client[':id'].collaborators.inactive.$post(args, options))
    },
  })
}

export function createPostIdCollaboratorsInactive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['collaborators']['inactive']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']>,
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
    const mutationDefaults = getPostIdCollaboratorsInactiveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdCollaboratorsStoryCollaboratorUseridQueryKey(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
) {
  return [':id', '/:id/collaborators/:story_collaborator_userid', args] as const
}

export function getIdCollaboratorsStoryCollaboratorUseridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdCollaboratorsStoryCollaboratorUseridQueryKey>
  >({
    queryKey: getIdCollaboratorsStoryCollaboratorUseridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].collaborators[':story_collaborator_userid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdCollaboratorsStoryCollaboratorUserid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdCollaboratorsStoryCollaboratorUseridQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdCollaboratorsStoryCollaboratorUseridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutIdCollaboratorsStoryCollaboratorUseridMutationKey() {
  return [':id', '/:id/collaborators/:story_collaborator_userid', 'PUT'] as const
}

export function getPutIdCollaboratorsStoryCollaboratorUseridMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIdCollaboratorsStoryCollaboratorUseridMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
      >,
    ) {
      return parseResponse(
        client[':id'].collaborators[':story_collaborator_userid'].$put(args, options),
      )
    },
  })
}

export function createPutIdCollaboratorsStoryCollaboratorUserid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
        >,
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
    const mutationDefaults = getPutIdCollaboratorsStoryCollaboratorUseridMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteIdCollaboratorsStoryCollaboratorUseridMutationKey() {
  return [':id', '/:id/collaborators/:story_collaborator_userid', 'DELETE'] as const
}

export function getDeleteIdCollaboratorsStoryCollaboratorUseridMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteIdCollaboratorsStoryCollaboratorUseridMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
      >,
    ) {
      return parseResponse(
        client[':id'].collaborators[':story_collaborator_userid'].$delete(args, options),
      )
    },
  })
}

export function createDeleteIdCollaboratorsStoryCollaboratorUserid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
        >,
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
    const mutationDefaults = getDeleteIdCollaboratorsStoryCollaboratorUseridMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdEventsQueryKey(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
) {
  return [':id', '/:id/events', args] as const
}

export function getIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdEventsQueryKey>
  >({
    queryKey: getIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIdEventsMutationKey() {
  return [':id', '/:id/events', 'POST'] as const
}

export function getPostIdEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':id']['events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdEventsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['events']['$post']>) {
      return parseResponse(client[':id'].events.$post(args, options))
    },
  })
}

export function createPostIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':id']['events']['$post']>,
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
    const mutationDefaults = getPostIdEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostIdFileMutationKey() {
  return [':id', '/:id/file', 'POST'] as const
}

export function getPostIdFileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['file']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)[':id']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdFileMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['file']['$post']>) {
      return parseResponse(client[':id'].file.$post(args, options))
    },
  })
}

export function createPostIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['file']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':id']['file']['$post']>,
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
    const mutationDefaults = getPostIdFileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdFileOoxmlAutomationIdQueryKey(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
) {
  return [':id', '/:id/file/:ooxml_automation_id', args] as const
}

export function getIdFileOoxmlAutomationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdFileOoxmlAutomationIdQueryKey>
  >({
    queryKey: getIdFileOoxmlAutomationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].file[':ooxml_automation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createIdFileOoxmlAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdFileOoxmlAutomationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getIdFileOoxmlAutomationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteIdFileOoxmlAutomationIdMutationKey() {
  return [':id', '/:id/file/:ooxml_automation_id', 'DELETE'] as const
}

export function getDeleteIdFileOoxmlAutomationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteIdFileOoxmlAutomationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>,
    ) {
      return parseResponse(client[':id'].file[':ooxml_automation_id'].$delete(args, options))
    },
  })
}

export function createDeleteIdFileOoxmlAutomationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>,
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
    const mutationDefaults = getDeleteIdFileOoxmlAutomationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdMessagesQueryKey(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
) {
  return [':id', '/:id/messages', args] as const
}

export function getIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdMessagesQueryKey>
  >({
    queryKey: getIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].messages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdMessagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIdMessagesMutationKey() {
  return [':id', '/:id/messages', 'POST'] as const
}

export function getPostIdMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdMessagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['messages']['$post']>) {
      return parseResponse(client[':id'].messages.$post(args, options))
    },
  })
}

export function createPostIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':id']['messages']['$post']>,
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
    const mutationDefaults = getPostIdMessagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdOutlineQueryKey(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
) {
  return [':id', '/:id/outline', args] as const
}

export function getIdOutlineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdOutlineQueryKey>
  >({
    queryKey: getIdOutlineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].outline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdOutline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['outline']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdOutlineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdOutlineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIdOutlineMutationKey() {
  return [':id', '/:id/outline', 'POST'] as const
}

export function getPostIdOutlineMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':id']['outline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdOutlineMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['outline']['$post']>) {
      return parseResponse(client[':id'].outline.$post(args, options))
    },
  })
}

export function createPostIdOutline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':id']['outline']['$post']>,
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
    const mutationDefaults = getPostIdOutlineMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdPublicIndexQueryKey(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
) {
  return [':id', '/:id/public/', args] as const
}

export function getIdPublicIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdPublicIndexQueryKey>
  >({
    queryKey: getIdPublicIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].public.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdPublicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdPublicIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdPublicIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIdRevealQueryKey(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
) {
  return [':id', '/:id/reveal', args] as const
}

export function getIdRevealQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdRevealQueryKey>
  >({
    queryKey: getIdRevealQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].reveal.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdReveal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['reveal']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdRevealQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdRevealQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getIdSessionsQueryKey(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
) {
  return [':id', '/:id/sessions', args] as const
}

export function getIdSessionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdSessionsQueryKey>
  >({
    queryKey: getIdSessionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].sessions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['sessions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdSessionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdSessionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostIdSessionsMutationKey() {
  return [':id', '/:id/sessions', 'POST'] as const
}

export function getPostIdSessionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)[':id']['sessions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostIdSessionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)[':id']['sessions']['$post']>) {
      return parseResponse(client[':id'].sessions.$post(args, options))
    },
  })
}

export function createPostIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)[':id']['sessions']['$post']>,
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
    const mutationDefaults = getPostIdSessionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getIdStatusQueryKey(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
) {
  return [':id', '/:id/status', args] as const
}

export function getIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdStatusQueryKey>
  >({
    queryKey: getIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':id'].status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createIdStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':id']['status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
