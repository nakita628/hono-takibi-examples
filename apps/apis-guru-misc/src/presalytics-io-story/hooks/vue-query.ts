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

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
          TError,
          InferRequestType<typeof client.index.$post>,
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
  const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCache<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.cache.$post>,
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
  const mutationDefaults = getPostCacheMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCacheNonceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':nonce']['$get']>>,
) {
  return ['cache', '/cache/:nonce', toValue(args)] as const
}

export function getCacheNonceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':nonce']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCacheNonceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cache[':nonce'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCacheNonce<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cache)[':nonce']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
            >
          >,
          ReturnType<typeof getCacheNonceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCacheNonceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCacheNonceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cache[':nonce'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCollaborators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborators.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.collaborators.$post>,
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
  const mutationDefaults = getPostCollaboratorsMutationOptions<TError, TOnMutateResult>(
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

export function getEnvironmentIndexQueryKey() {
  return ['environment', '/environment/'] as const
}

export function getEnvironmentIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEnvironmentIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.environment.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnvironmentIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>
            >
          >,
          ReturnType<typeof getEnvironmentIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEnvironmentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEnvironmentIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.environment.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
          TError,
          InferRequestType<typeof client.file.$post>,
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
  const mutationDefaults = getPostFileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostFileJson<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.json.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.file.json.$post>,
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
  const mutationDefaults = getPostFileJsonMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNoTagsSpecQueryKey() {
  return ['no_tags_spec', '/no_tags_spec'] as const
}

export function getNoTagsSpecQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNoTagsSpecQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.no_tags_spec.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNoTagsSpec<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
          >,
          ReturnType<typeof getNoTagsSpecQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNoTagsSpecQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNoTagsSpecQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.no_tags_spec.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
    >
  >,
) {
  return [
    'outline-schema',
    '/outline-schema/:schema_version/story-outline.json',
    toValue(args),
  ] as const
}

export function getOutlineSchemaSchemaVersionStoryOutlineJsonQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['outline-schema'][':schema_version']['story-outline.json'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOutlineSchemaSchemaVersionStoryOutlineJson<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOutlineSchemaSchemaVersionStoryOutlineJsonQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['outline-schema'][':schema_version']['story-outline.json'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPermissionTypesQueryKey() {
  return ['permission_types', '/permission_types'] as const
}

export function getPermissionTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPermissionTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.permission_types.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePermissionTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>
            >
          >,
          ReturnType<typeof getPermissionTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPermissionTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.permission_types.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsSessionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
) {
  return ['sessions', '/sessions/:session_id', toValue(args)] as const
}

export function getSessionsSessionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsSessionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions[':session_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsSessionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.sessions)[':session_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionsSessionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsSessionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions[':session_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSessionsSessionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSessionsSessionIdMutationOptions<TError, TOnMutateResult>(
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

export function getSessionsSessionIdViewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>
  >,
) {
  return ['sessions', '/sessions/:session_id/views', toValue(args)] as const
}

export function getSessionsSessionIdViewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsSessionIdViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions[':session_id'].views.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsSessionIdViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSessionsSessionIdViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsSessionIdViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsSessionIdViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions[':session_id'].views.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSessionsSessionIdViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSessionsSessionIdViewsMutationOptions<TError, TOnMutateResult>(
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

export function getViewsViewIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.views)[':view_id']['$get']>>,
) {
  return ['views', '/views/:view_id', toValue(args)] as const
}

export function getViewsViewIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.views)[':view_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getViewsViewIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.views[':view_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useViewsViewId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.views)[':view_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
            >
          >,
          ReturnType<typeof getViewsViewIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewsViewIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getViewsViewIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.views[':view_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteViewsViewIdMutationOptions<TError, TOnMutateResult>(
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

export function getIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['$get']>>,
) {
  return [':id', '/:id', toValue(args)] as const
}

export function getIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
          >,
          ReturnType<typeof getIdQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>>,
    TError,
    TData,
    ReturnType<typeof getIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$put']>>>>
          >,
          TError,
          InferRequestType<(typeof client)[':id']['$put']>,
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
  const mutationDefaults = getPutIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['analytics']['$get']>>,
) {
  return [':id', '/:id/analytics', toValue(args)] as const
}

export function getIdAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['analytics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['analytics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
            >
          >,
          ReturnType<typeof getIdAnalyticsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdCollaboratorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['collaborators']['$get']>>,
) {
  return [':id', '/:id/collaborators', toValue(args)] as const
}

export function getIdCollaboratorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['collaborators']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdCollaboratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].collaborators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdCollaborators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['collaborators']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdCollaboratorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdCollaboratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdCollaboratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].collaborators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdCollaborators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdCollaboratorsMutationOptions<TError, TOnMutateResult>(
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

export function getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
    >
  >,
) {
  return [
    ':id',
    '/:id/collaborators/authorize/:story_collaborator_userid/:permissiontype',
    toValue(args),
  ] as const
}

export function getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].collaborators.authorize[':story_collaborator_userid'][':permissiontype'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontype<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].collaborators.authorize[':story_collaborator_userid'][
            ':permissiontype'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdCollaboratorsInactive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostIdCollaboratorsInactiveMutationOptions<TError, TOnMutateResult>(
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

export function getIdCollaboratorsStoryCollaboratorUseridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']>
  >,
) {
  return [':id', '/:id/collaborators/:story_collaborator_userid', toValue(args)] as const
}

export function getIdCollaboratorsStoryCollaboratorUseridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdCollaboratorsStoryCollaboratorUseridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].collaborators[':story_collaborator_userid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdCollaboratorsStoryCollaboratorUserid<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getIdCollaboratorsStoryCollaboratorUseridQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdCollaboratorsStoryCollaboratorUseridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].collaborators[':story_collaborator_userid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutIdCollaboratorsStoryCollaboratorUserid<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutIdCollaboratorsStoryCollaboratorUseridMutationOptions<
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

export function useDeleteIdCollaboratorsStoryCollaboratorUserid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIdCollaboratorsStoryCollaboratorUseridMutationOptions<
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

export function getIdEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['events']['$get']>>,
) {
  return [':id', '/:id/events', toValue(args)] as const
}

export function getIdEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
            >
          >,
          ReturnType<typeof getIdEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':id']['events']['$post']>,
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
  const mutationDefaults = getPostIdEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['file']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':id']['file']['$post']>,
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
  const mutationDefaults = getPostIdFileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdFileOoxmlAutomationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>
  >,
) {
  return [':id', '/:id/file/:ooxml_automation_id', toValue(args)] as const
}

export function getIdFileOoxmlAutomationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdFileOoxmlAutomationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].file[':ooxml_automation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdFileOoxmlAutomationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdFileOoxmlAutomationIdQueryKey>
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
          Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdFileOoxmlAutomationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdFileOoxmlAutomationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].file[':ooxml_automation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIdFileOoxmlAutomationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteIdFileOoxmlAutomationIdMutationOptions<TError, TOnMutateResult>(
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

export function getIdMessagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['messages']['$get']>>,
) {
  return [':id', '/:id/messages', toValue(args)] as const
}

export function getIdMessagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['messages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['messages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
            >
          >,
          ReturnType<typeof getIdMessagesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)[':id']['messages']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':id']['messages']['$post']>,
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
  const mutationDefaults = getPostIdMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdOutlineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['outline']['$get']>>,
) {
  return [':id', '/:id/outline', toValue(args)] as const
}

export function getIdOutlineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['outline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdOutlineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].outline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdOutline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['outline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
            >
          >,
          ReturnType<typeof getIdOutlineQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdOutlineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdOutlineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].outline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdOutline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)[':id']['outline']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)[':id']['outline']['$post']>,
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
  const mutationDefaults = getPostIdOutlineMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdPublicIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['public']['index']['$get']>>,
) {
  return [':id', '/:id/public/', toValue(args)] as const
}

export function getIdPublicIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['public']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdPublicIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].public.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdPublicIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['public']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getIdPublicIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdPublicIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdPublicIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].public.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdRevealQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['reveal']['$get']>>,
) {
  return [':id', '/:id/reveal', toValue(args)] as const
}

export function getIdRevealQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['reveal']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdRevealQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].reveal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdReveal<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['reveal']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
            >
          >,
          ReturnType<typeof getIdRevealQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdRevealQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdRevealQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].reveal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIdSessionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['sessions']['$get']>>,
) {
  return [':id', '/:id/sessions', toValue(args)] as const
}

export function getIdSessionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['sessions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdSessionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].sessions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdSessions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['sessions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
            >
          >,
          ReturnType<typeof getIdSessionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdSessionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdSessionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].sessions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIdSessions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)[':id']['sessions']['$post']>,
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
  const mutationDefaults = getPostIdSessionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIdStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['status']['$get']>>,
) {
  return [':id', '/:id/status', toValue(args)] as const
}

export function getIdStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIdStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':id']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
            >
          >,
          ReturnType<typeof getIdStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
