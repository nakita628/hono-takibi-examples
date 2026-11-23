import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getSeerKey() {
  return ['seer'] as const
}

export function getSentryAppInstallationsKey() {
  return ['sentry-app-installations'] as const
}

export function getSentryAppsKey() {
  return ['sentry-apps'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsIndexKey(
  args: InferRequestType<typeof client.organizations.index.$get>,
) {
  return ['organizations', '/organizations/', args] as const
}

export function useGetOrganizationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.organizations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
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
        ? getGetOrganizationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsIndex<TError = unknown>(
  args: InferRequestType<typeof client.organizations.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
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
        ? getGetOrganizationsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.organizations.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
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
        ? getGetOrganizationsOrganizationIdOrSlugIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
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
        ? getGetOrganizationsOrganizationIdOrSlugIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.organizations)[':organization_id_or_slug']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugAgentsConversationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/agents/conversations/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugAgentsConversationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAgentsConversationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugAgentsConversationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAgentsConversationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/agents/conversations/:conversation_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].agents.conversations[
            ':conversation_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].agents.conversations[
            ':conversation_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/artifactbundle/assemble/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].artifactbundle.assemble.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugAvailableActionsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/available-actions/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugAvailableActionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAvailableActionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['available-actions'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugAvailableActionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugAvailableActionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['available-actions'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugChunkUploadIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/chunk-upload/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugChunkUploadIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugChunkUploadIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugChunkUploadIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugChunkUploadIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/chunk-upload/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugChunkUploadIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['chunk-upload'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugCodeMappingsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/code-mappings/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugCodeMappingsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugCodeMappingsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugCodeMappingsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugCodeMappingsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugCodeMappingsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['code-mappings'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/:config_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['code-mappings'][
            ':config_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/:config_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['code-mappings'][
            ':config_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/bulk/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['code-mappings'].bulk.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/codeowners-associations/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/config/integrations/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugConfigIntegrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].config.integrations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugConfigIntegrationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].config.integrations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDashboardsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/dashboards/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDashboardsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDashboardsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/dashboards/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugDashboardsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugDashboardsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards[
            ':dashboard_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/revisions/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards[
            ':dashboard_id'
          ].revisions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].dashboards[
            ':dashboard_id'
          ].revisions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/revisions/:revision_id/restore/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].revisions[
            ':revision_id'
          ].restore.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDetectorsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDetectorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDetectorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].detectors.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDetectorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDetectorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].detectors.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdOrSlugDetectorsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugDetectorsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].detectors.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugDetectorsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].detectors.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDiscoverSavedIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/discover/saved/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDiscoverSavedIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].discover.saved.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDiscoverSavedIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].discover.saved.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].discover.saved.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].discover.saved[
            ':query_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugDsnLookupIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/dsn-lookup/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugDsnLookupIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDsnLookupIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugDsnLookupIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugDsnLookupIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugEnvironmentsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/environments/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEnvironmentsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEnvironmentsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugEventidsEventIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/eventids/:event_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugEventidsEventIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventidsEventIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugEventidsEventIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventidsEventIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugEventsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/events/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugEventsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].events.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugEventsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].events.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugEventsDroppedIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/events-dropped/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugEventsDroppedIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsDroppedIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugEventsDroppedIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsDroppedIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/events-timeseries/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugEventsTimeseriesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugEventsTimeseriesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugExternalUsersIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['external-users'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/:external_user_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['external-users'][
            ':external_user_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/:external_user_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['external-users'][
            ':external_user_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugFlagsLogsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/flags/logs/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugFlagsLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugFlagsLogsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].flags.logs.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugFlagsLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugFlagsLogsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].flags.logs.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/flags/logs/:flag_log_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugForwardingIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/forwarding/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugForwardingIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugForwardingIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].forwarding.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugForwardingIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugForwardingIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].forwarding.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugForwardingIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/forwarding/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugForwardingIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugForwardingIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].forwarding.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/forwarding/:data_forwarder_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].forwarding[
            ':data_forwarder_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/forwarding/:data_forwarder_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].forwarding[
            ':data_forwarder_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/group-search-views/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/group-search-views/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['group-search-views'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIntegrationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/integrations/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIntegrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIntegrationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/channel-validate/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
            'channel-validate'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
            'channel-validate'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/channels/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].channels.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].channels.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/repos/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].repos.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].repos.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdOrSlugIssuesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugIssuesIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues.index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugMembersIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/members/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugMembersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMembersIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].members.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugMembersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMembersIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].members.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugMembersIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/members/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugMembersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugMembersIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
            ':team_id_or_slug'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
            ':team_id_or_slug'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
            ':team_id_or_slug'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugMonitorsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/monitors/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugMonitorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugMonitorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugMonitorsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/monitors/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugMonitorsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugMonitorsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].monitors.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/checkins/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/notebooks/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugNotebooksIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugNotebooksIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks[
            ':notebook_id'
          ].blocks.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/:block_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
            ':block_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/:block_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
            ':block_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/order/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks[
            ':notebook_id'
          ].blocks.order.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugNotificationsActionsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotificationsActionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotificationsActionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notifications.actions.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notifications.actions[
            ':action_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].notifications.actions[
            ':action_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notifications.actions[
            ':action_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].notifications.actions[
            ':action_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/:token_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['org-auth-tokens'][
            ':token_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/:artifact_id/install-details/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'install-details'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'install-details'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/:artifact_id/size-analysis/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'size-analysis'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'size-analysis'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/archive/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].archive.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].archive.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/archive/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].archive.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/images/:image_identifier/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].images[':image_identifier'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].images[':image_identifier'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/latest-base/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            'latest-base'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            'latest-base'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugProfilingChunksIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/profiling/chunks/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugProfilingChunksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProfilingChunksIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugProfilingChunksIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProfilingChunksIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/profiling/flamegraph/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugProjectKeysIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/project-keys/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugProjectKeysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProjectKeysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['project-keys'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugProjectKeysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProjectKeysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['project-keys'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugProjectsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/projects/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProjectsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].projects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugProjectsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].projects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugProjectsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/projects/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugProjectsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugProjectsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].projects.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/projects/:project_id_or_slug/detectors/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].projects[
            ':project_id_or_slug'
          ].detectors.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugRelayUsageIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/relay_usage/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugRelayUsageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugRelayUsageIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].relay_usage.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugRelayUsageIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugRelayUsageIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].relay_usage.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/release-threshold-statuses/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/releases/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/releases/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugReleasesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugReleasesIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/commits/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/deploys/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/deploys/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].files[
            ':file_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'].files[
            ':file_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].files[
            ':file_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].files[
            ':file_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/previous-with-commits/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'][
            'previous-with-commits'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[':version'][
            'previous-with-commits'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReplayCountIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/replay-count/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReplayCountIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplayCountIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['replay-count'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReplayCountIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplayCountIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['replay-count'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReplaySelectorsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replay-selectors/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReplaySelectorsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaySelectorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReplaySelectorsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaySelectorsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReplaysIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/replays/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReplaysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].replays.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReplaysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaysIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].replays.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replays/:replay_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReplaysReplayIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReplaysReplayIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReposIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/repos/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReposIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReposIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].repos.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReposIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReposIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].repos.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/repos/:repo_id/commits/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/repos/settings/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugReposSettingsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].repos.settings.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2GroupsKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Groups', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2GroupsKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2GroupsKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2GroupsKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugScimV2Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugScimV2GroupsKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Groups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Groups[
            ':team_id_or_slug'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    'PATCH',
  ] as const
}

export function usePatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Groups[
            ':team_id_or_slug'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ResourceTypes',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ResourceTypes/:resource_type_name',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
            ':resource_type_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
            ':resource_type_name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Schemas/:schema_uri',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUri<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUri<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ServiceProviderConfig',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2UsersKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Users', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2UsersKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2UsersKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2UsersKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Users', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugScimV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugScimV2UsersKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
          client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    'PATCH',
  ] as const
}

export function usePatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sentry-app-components/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugSentryAppComponentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugSentryAppComponentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugSentryAppsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/sentry-apps/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugSentryAppsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugSentryAppsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugSessionsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/sessions/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugSessionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSessionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].sessions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugSessionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSessionsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].sessions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/shortids/:issue_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugShortidsIssueIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugShortidsIssueIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/starred-service-spans/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/starred-service-spans/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugStatsSummaryIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/stats-summary/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugStatsSummaryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugStatsSummaryIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugStatsSummaryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugStatsSummaryIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugStatsV2IndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/stats_v2/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugStatsV2Index<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugStatsV2IndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].stats_v2.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugStatsV2Index<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugStatsV2IndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].stats_v2.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTagsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/tags/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTagsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTagsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].tags.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTagsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTagsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].tags.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTeamsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/teams/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTeamsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTeamsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].teams.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTeamsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTeamsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].teams.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugTeamsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/teams/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugTeamsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugTeamsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].teams.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/attributes/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/metrics/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/stats/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceItemsStatsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceItemsStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceLogsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/trace-logs/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceLogsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceLogsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-meta/:trace_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugTraceTraceIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace/:trace_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugTraceTraceIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceTraceIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugTraceTraceIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugTraceTraceIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugUserTeamsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/user-teams/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugUserTeamsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugUserTeamsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['user-teams'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugUserTeamsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugUserTeamsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['user-teams'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugWorkflowsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', args] as const
}

export function useGetOrganizationsOrganizationIdOrSlugWorkflowsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugWorkflowsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].workflows.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugWorkflowsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugWorkflowsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].workflows.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'PUT'] as const
}

export function usePutOrganizationsOrganizationIdOrSlugWorkflowsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].workflows.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'POST'] as const
}

export function usePostOrganizationsOrganizationIdOrSlugWorkflowsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].workflows.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'DELETE'] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].workflows.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', args] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey() {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', 'PUT'] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey() {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', 'DELETE'] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/code-mapping-prefixes/stack/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'code-mapping-prefixes'
          ].stack.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'code-mapping-prefixes'
          ].stack.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
            ':codeowners_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
            ':codeowners_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
            ':codeowners_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
            ':codeowners_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ][':filter_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ][':filter_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ][':filter_id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ][':filter_id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].environments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].environments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].environments.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/:environment/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
            ':environment'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
            ':environment'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/:environment/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
            ':environment'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/attachments/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/attachments/:attachment_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments[':attachment_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments[':attachment_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/source-map-debug/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
            'source-map-debug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
            'source-map-debug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/difs/assemble/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].files.difs.assemble.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/dsyms/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/preprodartifacts/assemble/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].files.preprodartifacts.assemble.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/filters/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/filters/:filter_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters[
            ':filter_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/keys/', args] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
            ':key_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
            ':key_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
            ':key_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
            ':key_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/members/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/checkins/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/ownership/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/ownership/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/size-analysis/status-check-rules/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod[
            'size-analysis'
          ]['status-check-rules'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod[
            'size-analysis'
          ]['status-check-rules'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/size-analysis/status-checks/skip/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod[
            'size-analysis'
          ]['status-checks'].skip.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/snapshots/status-check-rules/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
            'status-check-rules'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
            'status-check-rules'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/snapshots/status-checks/skip/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
            'status-checks'
          ].skip.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprodartifacts/build-distribution/latest/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
            'build-distribution'
          ].latest.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
            'build-distribution'
          ].latest.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprodartifacts/snapshots/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].preprodartifacts.snapshots.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/profiling/profiles/:profile_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
            ':profile_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
            ':profile_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/commits/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].commits.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].commits.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files[':file_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files[':file_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files[':file_id'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files[':file_id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/completion/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].releases.completion.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].releases.completion.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
            ':replay_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/clicks/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
            ':replay_id'
          ].clicks.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
            ':replay_id'
          ].clicks.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/recording-segments/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/recording-segments/:segment_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ][':segment_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexKey(
            args,
          )
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ][':segment_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/viewed-by/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'viewed-by'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'viewed-by'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].replays.jobs.delete.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].replays.jobs.delete.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].replays.jobs.delete.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/:job_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
            ':job_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
            ':job_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/repo/', args] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/repo/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/stacktrace-link/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'stacktrace-link'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'stacktrace-link'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/stats/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/:team_id_or_slug/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
            ':team_id_or_slug'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/:team_id_or_slug/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
            ':team_id_or_slug'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/trace-items/:item_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
            ':item_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
            ':item_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/user-feedback/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'user-feedback'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'user-feedback'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/user-feedback/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'user-feedback'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/users/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSeerModelsIndexKey() {
  return ['seer', '/seer/models/'] as const
}

export function useGetSeerModelsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeerModelsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.seer.models.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSeerModelsIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSeerModelsIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.seer.models.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSentryAppInstallationsUuidExternalIssueActionsIndexKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issue-actions/',
    'POST',
  ] as const
}

export function usePostSentryAppInstallationsUuidExternalIssueActionsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSentryAppInstallationsUuidExternalIssueActionsIndexKey()
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
            (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sentry-app-installations'][':uuid']['external-issue-actions'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSentryAppInstallationsUuidExternalRequestsIndexKey(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
) {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-requests/',
    args,
  ] as const
}

export function useGetSentryAppInstallationsUuidExternalRequestsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
        ? getGetSentryAppInstallationsUuidExternalRequestsIndexKey(args)
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
                (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
          client['sentry-app-installations'][':uuid']['external-requests'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentryAppInstallationsUuidExternalRequestsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
        ? getGetSentryAppInstallationsUuidExternalRequestsIndexKey(args)
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
                (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
          client['sentry-app-installations'][':uuid']['external-requests'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSentryAppsSentryAppIdOrSlugIndexKey(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
) {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', args] as const
}

export function useGetSentryAppsSentryAppIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
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
        ? getGetSentryAppsSentryAppIdOrSlugIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSentryAppsSentryAppIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
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
        ? getGetSentryAppsSentryAppIdOrSlugIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSentryAppsSentryAppIdOrSlugIndexKey() {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', 'PUT'] as const
}

export function usePutSentryAppsSentryAppIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSentryAppsSentryAppIdOrSlugIndexKey()
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
            (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client['sentry-apps'][':sentry_app_id_or_slug'].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSentryAppsSentryAppIdOrSlugIndexKey() {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', 'DELETE'] as const
}

export function useDeleteSentryAppsSentryAppIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSentryAppsSentryAppIdOrSlugIndexKey()
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
            (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sentry-apps'][':sentry_app_id_or_slug'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', args] as const
}

export function useGetTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', 'PUT'] as const
}

export function usePutTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', 'DELETE'] as const
}

export function useDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/',
    'POST',
  ] as const
}

export function usePostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'][
            'external-teams'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/:external_team_id/',
    'PUT',
  ] as const
}

export function usePutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
            ':external_team_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/:external_team_id/',
    'DELETE',
  ] as const
}

export function useDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
            ':external_team_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/members/', args] as const
}

export function useGetTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/projects/', args] as const
}

export function useGetTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
        ? getGetTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexKey(args)
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
                (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/projects/', 'POST'] as const
}

export function usePostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexKey()
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
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdIndexKey(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
) {
  return ['users', '/users/:user_id/', args] as const
}

export function useGetUsersUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
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
        ? getGetUsersUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
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
        ? getGetUsersUserIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/tags/:key/values/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
            ':key'
          ].values.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
            ':key'
          ].values.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/',
    'POST',
  ] as const
}

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
            ':hook_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
            ':hook_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
            ':hook_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
            ':hook_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    args,
  ] as const
}

export function useGetProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
        ? getGetProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey(args)
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
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    'PUT',
  ] as const
}

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    'DELETE',
  ] as const
}

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexKey()
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
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/commitfiles/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[
            ':version'
          ].commitfiles.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].releases[
            ':version'
          ].commitfiles.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sentry-app-installations/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
          client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSentryAppInstallationsUuidExternalIssuesIndexKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issues/',
    'POST',
  ] as const
}

export function usePostSentryAppInstallationsUuidExternalIssuesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSentryAppInstallationsUuidExternalIssuesIndexKey()
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
            (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['sentry-app-installations'][':uuid']['external-issues'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issues/:external_issue_id/',
    'DELETE',
  ] as const
}

export function useDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexKey()
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
            (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['sentry-app-installations'][':uuid']['external-issues'][
            ':external_issue_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/spike-protections/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['spike-protections'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/spike-protections/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug']['spike-protections'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/autofix/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/autofix/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/events/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/events/:event_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
            ':event_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
            ':event_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/external-issues/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'][
            'external-issues'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'][
            'external-issues'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/external-issues/:external_issue_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id']['external-issues'][
            ':external_issue_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/hashes/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[
            ':issue_id'
          ].integrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[
            ':issue_id'
          ].integrations.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey(
            args,
          )
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'PUT',
  ] as const
}

export function usePutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'POST',
  ] as const
}

export function usePostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'DELETE',
  ] as const
}

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexKey()
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
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/tags/:key/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/tags/:key/values/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].values.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].values.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/shared/issues/:share_id/',
    args,
  ] as const
}

export function useGetOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
        ? getGetOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexKey(args)
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
                (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
          client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
