import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationsIndexQueryKey(
  args: InferRequestType<typeof client.organizations.index.$get>,
) {
  return ['organizations', '/organizations/', args] as const
}

export function getOrganizationsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organizations.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIndexQueryKey>
  >({
    queryKey: getOrganizationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.organizations.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrganizationsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.organizations)[':organization_id_or_slug']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.organizations)[':organization_id_or_slug']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugAgentsConversationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].agents.conversations[
          ':conversation_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/artifactbundle/assemble/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].artifactbundle.assemble.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['artifactbundle']['assemble']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['available-actions'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugAvailableActionsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/chunk-upload/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugChunkUploadIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/chunk-upload/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['chunk-upload'].index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugChunkUploadIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/code-mappings/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugCodeMappingsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugCodeMappingsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/:config_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'][':config_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/:config_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'][
          ':config_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings'][':config_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/bulk/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'].bulk.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['bulk']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].config.integrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugConfigIntegrationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/dashboards/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDashboardsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/dashboards/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugDashboardsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugDashboardsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugDashboardsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey
    >
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[
          ':dashboard_id'
        ].revisions.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/revisions/:revision_id/restore/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].revisions[
          ':revision_id'
        ].restore.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions'][':revision_id']['restore']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDetectorsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugDetectorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors.index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugDetectorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/detectors/', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors.index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugDetectorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/discover/saved/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/dsn-lookup/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugDsnLookupIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/environments/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].environments.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugEnvironmentsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugEventidsEventIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/events/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugEventsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].events.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugEventsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugEventsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/events-dropped/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugEventsDroppedIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugEventsTimeseriesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['external-users'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugExternalUsersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['external-users']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/:external_user_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['external-users'][
          ':external_user_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/external-users/:external_user_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['external-users'][
          ':external_user_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['external-users'][':external_user_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/flags/logs/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].flags.logs.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugFlagsLogsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/forwarding/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugForwardingIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].forwarding.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugForwardingIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugForwardingIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugForwardingIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/forwarding/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugForwardingIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugForwardingIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].forwarding.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugForwardingIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugForwardingIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/forwarding/:data_forwarder_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].forwarding[
          ':data_forwarder_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/forwarding/:data_forwarder_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].forwarding[
          ':data_forwarder_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['forwarding'][':data_forwarder_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/group-search-views/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['group-search-views'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/integrations/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIntegrationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[':integration_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[
          ':integration_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
          'channel-validate'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[
          ':integration_id'
        ].channels.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey
    >
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[
          ':integration_id'
        ].repos.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugIssuesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues.index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugIssuesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/issues/', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues.index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugIssuesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/members/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugMembersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugMembersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugMembersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugMembersIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/members/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugMembersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugMembersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugMembersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugMembersIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
          ':team_id_or_slug'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
          ':team_id_or_slug'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/teams/:team_id_or_slug/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].teams[
          ':team_id_or_slug'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['teams'][':team_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/monitors/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugMonitorsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugMonitorsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/monitors/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugMonitorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugMonitorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugMonitorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugMonitorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].checkins.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/notebooks/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugNotebooksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugNotebooksIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notebooks']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugNotebooksIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[
          ':notebook_id'
        ].blocks.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/:block_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
          ':block_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/:block_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].blocks[
          ':block_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks'][':block_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
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

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/blocks/order/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[
          ':notebook_id'
        ].blocks.order.index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['blocks']['order']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions[
          ':action_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions[
          ':action_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions[
          ':action_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/:token_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['org-auth-tokens'][
          ':token_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens'][':token_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
          'install-details'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
          'size-analysis'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].archive.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/archive/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].archive.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].images[':image_identifier'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          'latest-base'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugProfilingChunksIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/project-keys/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['project-keys'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugProjectKeysIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/projects/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugProjectsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].projects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugProjectsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugProjectsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugProjectsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/projects/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugProjectsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugProjectsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].projects.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugProjectsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugProjectsIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/projects/:project_id_or_slug/detectors/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].projects[
          ':project_id_or_slug'
        ].detectors.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['projects'][':project_id_or_slug']['detectors']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/relay_usage/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].relay_usage.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugRelayUsageIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/releases/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/releases/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugReleasesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugReleasesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugReleasesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/deploys/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files[
          ':file_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files[
          ':file_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files[
          ':file_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'][
          'previous-with-commits'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/replay-count/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['replay-count'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReplayCountIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReplaySelectorsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/replays/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugReplaysIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].replays.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReplaysIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReplaysIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReplaysReplayIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReposIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/repos/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugReposIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReposIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].repos.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReposIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReposIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/repos/settings/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].repos.settings.index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugReposSettingsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['repos']['settings']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Groups', args] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2Groups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2GroupsMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugScimV2GroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugScimV2Groups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugScimV2GroupsMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
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

export function getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    'PATCH',
  ] as const
}

export function getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2ResourceTypes<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey
    >
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
          ':resource_type_name'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUri<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Users', args] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2UsersQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2Users<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2UsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2UsersMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/scim/v2/Users', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugScimV2UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugScimV2UsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugScimV2Users<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugScimV2UsersMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
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

export function getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    'PATCH',
  ] as const
}

export function getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$patch']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugSentryAppComponentsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/sentry-apps/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugSentryAppsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/sessions/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugSessionsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].sessions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugSessionsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugSessionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugShortidsIssueIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/starred-service-spans/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/starred-service-spans/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['starred-service-spans'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['starred-service-spans']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/stats-summary/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugStatsSummaryIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/stats_v2/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].stats_v2.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugStatsV2Index<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/tags/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugTagsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].tags.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTagsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTagsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/teams/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugTeamsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].teams.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTeamsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTeamsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugTeamsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/teams/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugTeamsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugTeamsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].teams.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugTeamsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugTeamsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceItemsStatsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/trace-logs/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceLogsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugTraceTraceIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/user-teams/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['user-teams'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugUserTeamsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', args] as const
}

export function getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugWorkflowsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'PUT'] as const
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows.index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugWorkflowsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'POST'] as const
}

export function getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows.index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugWorkflowsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey() {
  return ['organizations', '/organizations/:organization_id_or_slug/workflows/', 'DELETE'] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows.index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', args] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationKey() {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', 'PUT'] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationKey() {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/', 'DELETE'] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'code-mapping-prefixes'
        ].stack.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
          ':codeowners_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
          ':codeowners_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
          ':codeowners_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey
    >
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ][':filter_id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ][':filter_id'].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ][':filter_id'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
          ':environment'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/:environment/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
          ':environment'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].attachments.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].attachments[':attachment_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
          'source-map-debug'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/difs/assemble/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].files.difs.assemble.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['difs']['assemble']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/preprodartifacts/assemble/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].files.preprodartifacts.assemble.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['preprodartifacts']['assemble']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/filters/:filter_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters[
          ':filter_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters'][':filter_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/keys/', args] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
          ':key_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
          ':key_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
          ':key_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].checkins.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/ownership/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod['size-analysis'][
          'status-check-rules'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/size-analysis/status-checks/skip/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod['size-analysis'][
          'status-checks'
        ].skip.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-checks']['skip']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
          'status-check-rules'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/snapshots/status-checks/skip/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
          'status-checks'
        ].skip.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-checks']['skip']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
          'build-distribution'
        ].latest.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprodartifacts/snapshots/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].preprodartifacts.snapshots.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['snapshots']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
          ':profile_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].commits.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey
    >
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files[':file_id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files[':file_id'].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files[':file_id'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].releases.completion.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
          ':replay_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
          ':replay_id'
        ].clicks.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'recording-segments'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'recording-segments'
        ][':segment_id'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'viewed-by'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].replays.jobs.delete.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].replays.jobs.delete.index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey
    >
  >({
    queryKey:
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
          ':job_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
) {
  return ['projects', '/projects/:organization_id_or_slug/:project_id_or_slug/repo/', args] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/repo/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
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

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'stacktrace-link'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'symbol-sources'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'symbol-sources'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'symbol-sources'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'symbol-sources'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/:team_id_or_slug/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
          ':team_id_or_slug'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/:team_id_or_slug/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams[
          ':team_id_or_slug'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams'][':team_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
          ':item_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'user-feedback'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/user-feedback/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'user-feedback'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSeerModelsIndexQueryKey() {
  return ['seer', '/seer/models/'] as const
}

export function getSeerModelsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeerModelsIndexQueryKey>
  >({
    queryKey: getSeerModelsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.seer.models.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSeerModelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSeerModelsIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSeerModelsIndexQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSentryAppInstallationsUuidExternalIssueActionsIndexMutationKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issue-actions/',
    'POST',
  ] as const
}

export function getPostSentryAppInstallationsUuidExternalIssueActionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSentryAppInstallationsUuidExternalIssueActionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['sentry-app-installations'][':uuid']['external-issue-actions'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostSentryAppInstallationsUuidExternalIssueActionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['sentry-app-installations'][':uuid']['external-issue-actions']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostSentryAppInstallationsUuidExternalIssueActionsIndexMutationOptions<
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

export function getSentryAppInstallationsUuidExternalRequestsIndexQueryKey(
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

export function getSentryAppInstallationsUuidExternalRequestsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getSentryAppInstallationsUuidExternalRequestsIndexQueryKey>
  >({
    queryKey: getSentryAppInstallationsUuidExternalRequestsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sentry-app-installations'][':uuid']['external-requests'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSentryAppInstallationsUuidExternalRequestsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getSentryAppInstallationsUuidExternalRequestsIndexQueryKey>
        >
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
      ...getSentryAppInstallationsUuidExternalRequestsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getSentryAppsSentryAppIdOrSlugIndexQueryKey(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
) {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', args] as const
}

export function getSentryAppsSentryAppIdOrSlugIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentryAppsSentryAppIdOrSlugIndexQueryKey>
  >({
    queryKey: getSentryAppsSentryAppIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSentryAppsSentryAppIdOrSlugIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSentryAppsSentryAppIdOrSlugIndexQueryKey>
        >
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
      ...getSentryAppsSentryAppIdOrSlugIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSentryAppsSentryAppIdOrSlugIndexMutationKey() {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', 'PUT'] as const
}

export function getPutSentryAppsSentryAppIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSentryAppsSentryAppIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client['sentry-apps'][':sentry_app_id_or_slug'].index.$put(args, options),
      )
    },
  })
}

export function createPutSentryAppsSentryAppIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSentryAppsSentryAppIdOrSlugIndexMutationOptions<
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

export function getDeleteSentryAppsSentryAppIdOrSlugIndexMutationKey() {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', 'DELETE'] as const
}

export function getDeleteSentryAppsSentryAppIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSentryAppsSentryAppIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client['sentry-apps'][':sentry_app_id_or_slug'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteSentryAppsSentryAppIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSentryAppsSentryAppIdOrSlugIndexMutationOptions<
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

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', args] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey>
  >({
    queryKey: getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey>
        >
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
      ...getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', 'PUT'] as const
}

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$put(args, options),
      )
    },
  })
}

export function createPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
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

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', 'DELETE'] as const
}

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
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

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexMutationKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/',
    'POST',
  ] as const
}

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexMutationOptions<
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

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/:external_team_id/',
    'PUT',
  ] as const
}

export function getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
          ':external_team_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
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

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationKey() {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/external-teams/:external_team_id/',
    'DELETE',
  ] as const
}

export function getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][
          ':external_team_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['external-teams'][':external_team_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
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

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/members/', args] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey>
  >({
    queryKey: getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey>
        >
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
      ...getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/projects/', args] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey>
  >({
    queryKey: getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey>
        >
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
      ...getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexMutationKey() {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/projects/', 'POST'] as const
}

export function getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexMutationOptions<
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

export function getUsersUserIdIndexQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
) {
  return ['users', '/users/:user_id/', args] as const
}

export function getUsersUserIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdIndexQueryKey>
  >({
    queryKey: getUsersUserIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdIndexQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
          ':key'
        ].values.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey
          >
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/',
    'POST',
  ] as const
}

export function getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
          ':hook_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
          ':hook_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
          ':hook_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey(
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey>
  >({
    queryKey: getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey>
        >
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
      ...getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    'PUT',
  ] as const
}

export function getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
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

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationKey() {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    'DELETE',
  ] as const
}

export function getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[
          ':version'
        ].commitfiles.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostSentryAppInstallationsUuidExternalIssuesIndexMutationKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issues/',
    'POST',
  ] as const
}

export function getPostSentryAppInstallationsUuidExternalIssuesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSentryAppInstallationsUuidExternalIssuesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['sentry-app-installations'][':uuid']['external-issues'].index.$post(args, options),
      )
    },
  })
}

export function createPostSentryAppInstallationsUuidExternalIssuesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['sentry-app-installations'][':uuid']['external-issues']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSentryAppInstallationsUuidExternalIssuesIndexMutationOptions<
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

export function getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexMutationKey() {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-issues/:external_issue_id/',
    'DELETE',
  ] as const
}

export function getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client['sentry-app-installations'][':uuid']['external-issues'][
          ':external_issue_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client)['sentry-app-installations'][':uuid']['external-issues'][':external_issue_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/spike-protections/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['spike-protections'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/spike-protections/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['spike-protections'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['spike-protections']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/autofix/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
          ':event_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'][
          'external-issues'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/external-issues/:external_issue_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id']['external-issues'][
          ':external_issue_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues'][':external_issue_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[
          ':issue_id'
        ].integrations.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey
    >
  >({
    queryKey:
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
          ':integration_id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'PUT',
  ] as const
}

export function getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
          ':integration_id'
        ].index.$put(args, options),
      )
    },
  })
}

export function createPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'POST',
  ] as const
}

export function getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
          ':integration_id'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey() {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
          ':integration_id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
          ':key'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
          ':key'
        ].values.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey
          >
        >
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
      ...getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey(
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

export function getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey>
  >({
    queryKey: getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey>
        >
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
      ...getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
