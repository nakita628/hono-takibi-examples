import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostKey() {
  return ['', '/', 'POST'] as const
}

export function usePost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.index.$post> }) =>
        parseResponse(client.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCacheKey() {
  return ['cache', '/cache', 'POST'] as const
}

export function usePostCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cache.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.cache.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cache.$post> }) =>
        parseResponse(client.cache.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCacheNonceKey(
  args: InferRequestType<(typeof client.cache)[':nonce']['$get']>,
) {
  return ['cache', '/cache/:nonce', args] as const
}

export function useGetCacheNonce<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':nonce']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCacheNonceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':nonce'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCacheNonce<TError = unknown>(
  args: InferRequestType<(typeof client.cache)[':nonce']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCacheNonceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cache)[':nonce']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cache[':nonce'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCollaboratorsKey() {
  return ['collaborators', '/collaborators', 'POST'] as const
}

export function usePostCollaborators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.collaborators.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.collaborators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollaboratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.collaborators.$post> }) =>
        parseResponse(client.collaborators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentIndexKey() {
  return ['environment', '/environment/'] as const
}

export function useGetEnvironmentIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environment.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environment.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environment.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFileKey() {
  return ['file', '/file', 'POST'] as const
}

export function usePostFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.file.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.file.$post> }) =>
        parseResponse(client.file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileJsonKey() {
  return ['file', '/file/json', 'POST'] as const
}

export function usePostFileJson<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.file.json.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.file.json.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileJsonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.file.json.$post> }) =>
        parseResponse(client.file.json.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNoTagsSpecKey() {
  return ['no_tags_spec', '/no_tags_spec'] as const
}

export function useGetNoTagsSpec<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoTagsSpecKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.no_tags_spec.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNoTagsSpec<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNoTagsSpecKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.no_tags_spec.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.no_tags_spec.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOutlineSchemaSchemaVersionStoryOutlineJsonKey(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
) {
  return ['outline-schema', '/outline-schema/:schema_version/story-outline.json', args] as const
}

export function useGetOutlineSchemaSchemaVersionStoryOutlineJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOutlineSchemaSchemaVersionStoryOutlineJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['outline-schema'][':schema_version']['story-outline.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutlineSchemaSchemaVersionStoryOutlineJson<TError = unknown>(
  args: InferRequestType<
    (typeof client)['outline-schema'][':schema_version']['story-outline.json']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOutlineSchemaSchemaVersionStoryOutlineJsonKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['outline-schema'][':schema_version']['story-outline.json'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPermissionTypesKey() {
  return ['permission_types', '/permission_types'] as const
}

export function useGetPermissionTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permission_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPermissionTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPermissionTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permission_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.permission_types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionsSessionIdKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
) {
  return ['sessions', '/sessions/:session_id', args] as const
}

export function useGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
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
        ? getGetSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sessions)[':session_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSessionsSessionIdKey() {
  return ['sessions', '/sessions/:session_id', 'DELETE'] as const
}

export function useDeleteSessionsSessionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSessionsSessionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['$delete']> },
      ) => parseResponse(client.sessions[':session_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSessionsSessionIdViewsKey(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
) {
  return ['sessions', '/sessions/:session_id/views', args] as const
}

export function useGetSessionsSessionIdViews<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
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
        ? getGetSessionsSessionIdViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsSessionIdViews<TError = unknown>(
  args: InferRequestType<(typeof client.sessions)[':session_id']['views']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
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
        ? getGetSessionsSessionIdViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions[':session_id'].views.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSessionsSessionIdViewsKey() {
  return ['sessions', '/sessions/:session_id/views', 'POST'] as const
}

export function usePostSessionsSessionIdViews<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sessions)[':session_id']['views']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSessionsSessionIdViewsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sessions)[':session_id']['views']['$post']> },
      ) => parseResponse(client.sessions[':session_id'].views.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetViewsViewIdKey(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
) {
  return ['views', '/views/:view_id', args] as const
}

export function useGetViewsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsViewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.views[':view_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetViewsViewId<TError = unknown>(
  args: InferRequestType<(typeof client.views)[':view_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetViewsViewIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.views[':view_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteViewsViewIdKey() {
  return ['views', '/views/:view_id', 'DELETE'] as const
}

export function useDeleteViewsViewId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':view_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.views)[':view_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteViewsViewIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.views)[':view_id']['$delete']> },
      ) => parseResponse(client.views[':view_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdKey(args: InferRequestType<(typeof client)[':id']['$get']>) {
  return [':id', '/:id', args] as const
}

export function useGetId<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':id'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetId<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':id'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutIdKey() {
  return [':id', '/:id', 'PUT'] as const
}

export function usePutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$put']>>>>>,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':id']['$put']> }) =>
        parseResponse(client[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteIdKey() {
  return [':id', '/:id', 'DELETE'] as const
}

export function useDeleteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['$delete']>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':id']['$delete']> }) =>
        parseResponse(client[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdAnalyticsKey(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
) {
  return [':id', '/:id/analytics', args] as const
}

export function useGetIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdAnalyticsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['analytics']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdCollaboratorsKey(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
) {
  return [':id', '/:id/collaborators', args] as const
}

export function useGetIdCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
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
        ? getGetIdCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].collaborators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdCollaborators<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['collaborators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
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
        ? getGetIdCollaboratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].collaborators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdCollaboratorsKey() {
  return [':id', '/:id/collaborators', 'POST'] as const
}

export function usePostIdCollaborators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['collaborators']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['collaborators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdCollaboratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':id']['collaborators']['$post']> },
      ) => parseResponse(client[':id'].collaborators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeKey(
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

export function useGetIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontype<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':id'].collaborators.authorize[':story_collaborator_userid'][
            ':permissiontype'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontype<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators']['authorize'][':story_collaborator_userid'][':permissiontype']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIdCollaboratorsAuthorizeStoryCollaboratorUseridPermissiontypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':id'].collaborators.authorize[':story_collaborator_userid'][
            ':permissiontype'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostIdCollaboratorsInactiveKey() {
  return [':id', '/:id/collaborators/inactive', 'POST'] as const
}

export function usePostIdCollaboratorsInactive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['collaborators']['inactive']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdCollaboratorsInactiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':id']['collaborators']['inactive']['$post']> },
      ) => parseResponse(client[':id'].collaborators.inactive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdCollaboratorsStoryCollaboratorUseridKey(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
) {
  return [':id', '/:id/collaborators/:story_collaborator_userid', args] as const
}

export function useGetIdCollaboratorsStoryCollaboratorUserid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIdCollaboratorsStoryCollaboratorUseridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':id'].collaborators[':story_collaborator_userid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdCollaboratorsStoryCollaboratorUserid<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetIdCollaboratorsStoryCollaboratorUseridKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':id'].collaborators[':story_collaborator_userid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutIdCollaboratorsStoryCollaboratorUseridKey() {
  return [':id', '/:id/collaborators/:story_collaborator_userid', 'PUT'] as const
}

export function usePutIdCollaboratorsStoryCollaboratorUserid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIdCollaboratorsStoryCollaboratorUseridKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':id'].collaborators[':story_collaborator_userid'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteIdCollaboratorsStoryCollaboratorUseridKey() {
  return [':id', '/:id/collaborators/:story_collaborator_userid', 'DELETE'] as const
}

export function useDeleteIdCollaboratorsStoryCollaboratorUserid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIdCollaboratorsStoryCollaboratorUseridKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)[':id']['collaborators'][':story_collaborator_userid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':id'].collaborators[':story_collaborator_userid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIdEventsKey(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
) {
  return [':id', '/:id/events', args] as const
}

export function useGetIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdEventsKey() {
  return [':id', '/:id/events', 'POST'] as const
}

export function usePostIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['events']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':id']['events']['$post']> },
      ) => parseResponse(client[':id'].events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIdFileKey() {
  return [':id', '/:id/file', 'POST'] as const
}

export function usePostIdFile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['file']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['file']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdFileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':id']['file']['$post']> }) =>
        parseResponse(client[':id'].file.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdFileOoxmlAutomationIdKey(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
) {
  return [':id', '/:id/file/:ooxml_automation_id', args] as const
}

export function useGetIdFileOoxmlAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
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
        ? getGetIdFileOoxmlAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':id'].file[':ooxml_automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdFileOoxmlAutomationId<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
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
        ? getGetIdFileOoxmlAutomationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':id'].file[':ooxml_automation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIdFileOoxmlAutomationIdKey() {
  return [':id', '/:id/file/:ooxml_automation_id', 'DELETE'] as const
}

export function useDeleteIdFileOoxmlAutomationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIdFileOoxmlAutomationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':id']['file'][':ooxml_automation_id']['$delete']>
        },
      ) => parseResponse(client[':id'].file[':ooxml_automation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdMessagesKey(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
) {
  return [':id', '/:id/messages', args] as const
}

export function useGetIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdMessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdMessagesKey() {
  return [':id', '/:id/messages', 'POST'] as const
}

export function usePostIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['messages']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':id']['messages']['$post']> },
      ) => parseResponse(client[':id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdOutlineKey(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
) {
  return [':id', '/:id/outline', args] as const
}

export function useGetIdOutline<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdOutlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].outline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdOutline<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['outline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdOutlineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].outline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdOutlineKey() {
  return [':id', '/:id/outline', 'POST'] as const
}

export function usePostIdOutline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['outline']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['outline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdOutlineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':id']['outline']['$post']> },
      ) => parseResponse(client[':id'].outline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdPublicIndexKey(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
) {
  return [':id', '/:id/public/', args] as const
}

export function useGetIdPublicIndex<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetIdPublicIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].public.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdPublicIndex<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['public']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetIdPublicIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':id']['public']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].public.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdRevealKey(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
) {
  return [':id', '/:id/reveal', args] as const
}

export function useGetIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdRevealKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdReveal<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['reveal']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdRevealKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['reveal']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].reveal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIdSessionsKey(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
) {
  return [':id', '/:id/sessions', args] as const
}

export function useGetIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdSessionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIdSessionsKey() {
  return [':id', '/:id/sessions', 'POST'] as const
}

export function usePostIdSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['sessions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':id']['sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIdSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':id']['sessions']['$post']> },
      ) => parseResponse(client[':id'].sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIdStatusKey(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
) {
  return [':id', '/:id/status', args] as const
}

export function useGetIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':id']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetIdStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':id']['status']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':id'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
