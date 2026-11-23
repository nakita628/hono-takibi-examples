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

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
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
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.index.$get>>,
) {
  return ['organizations', '/organizations/', toValue(args)] as const
}

export function getOrganizationsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organizations.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organizations.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
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
                    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIndexQueryKey>
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
            ReturnType<(typeof client.organizations)[':organization_id_or_slug']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/agents/conversations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugAgentsConversationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugAgentsConversationsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].agents.conversations.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/agents/conversations/:conversation_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].agents.conversations[
          ':conversation_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['agents']['conversations'][':conversation_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugAgentsConversationsConversationIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].agents.conversations[
            ':conversation_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/available-actions/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['available-actions'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugAvailableActionsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['available-actions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugAvailableActionsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['available-actions'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/chunk-upload/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugChunkUploadIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['chunk-upload']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugChunkUploadIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['chunk-upload'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugChunkUploadIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugChunkUploadIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/code-mappings/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugCodeMappingsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['code-mappings']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugCodeMappingsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['code-mappings'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugCodeMappingsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugCodeMappingsIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugCodeMappingsConfigIdIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugCodeMappingsBulkIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/codeowners-associations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['codeowners-associations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugCodeownersAssociationsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['codeowners-associations'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/config/integrations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].config.integrations.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugConfigIntegrationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['config']['integrations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugConfigIntegrationsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].config.integrations.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDashboardsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['dashboards']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDashboardsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugDashboardsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugDashboardsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards[':dashboard_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugDashboardsDashboardIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dashboards/:dashboard_id/revisions/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].dashboards[
          ':dashboard_id'
        ].revisions.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dashboards'][':dashboard_id']['revisions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].dashboards[
            ':dashboard_id'
          ].revisions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugDashboardsDashboardIdRevisionsRevisionIdRestoreIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDetectorsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['detectors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDetectorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].detectors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugDetectorsIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugDetectorsIndex<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdOrSlugDetectorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/detectors/:detector_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['detectors'][':detector_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].detectors[':detector_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['discover']['saved']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].discover.saved.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugDiscoverSavedIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugDiscoverSavedIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/discover/saved/:query_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['discover']['saved'][':query_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].discover.saved[':query_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/dsn-lookup/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugDsnLookupIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['dsn-lookup']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugDsnLookupIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['dsn-lookup'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/environments/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].environments.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugEnvironmentsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['environments']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugEnvironmentsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].environments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/eventids/:event_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugEventidsEventIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['eventids'][':event_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugEventidsEventIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].eventids[':event_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/events/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugEventsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].events.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugEventsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['events']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugEventsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].events.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/events-dropped/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugEventsDroppedIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['events-dropped']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugEventsDroppedIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['events-dropped'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/events-timeseries/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugEventsTimeseriesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['events-timeseries']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugEventsTimeseriesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['events-timeseries'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugExternalUsersIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugExternalUsersIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugExternalUsersExternalUserIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/flags/logs/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].flags.logs.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugFlagsLogsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['flags']['logs']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugFlagsLogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].flags.logs.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/flags/logs/:flag_log_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['flags']['logs'][':flag_log_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugFlagsLogsFlagLogIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].flags.logs[':flag_log_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/forwarding/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugForwardingIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].forwarding.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugForwardingIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['forwarding']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugForwardingIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].forwarding.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugForwardingIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugForwardingIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugForwardingDataForwarderIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/group-search-views/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['group-search-views']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['group-search-views'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugGroupSearchViewsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIntegrationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['integrations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIntegrationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].integrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[':integration_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/channel-validate/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
          'channel-validate'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channel-validate']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelValidateIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].integrations[':integration_id'][
            'channel-validate'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/channels/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[
          ':integration_id'
        ].channels.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['channels']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdChannelsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].channels.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/integrations/:integration_id/repos/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].integrations[
          ':integration_id'
        ].repos.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['integrations'][':integration_id']['repos']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIntegrationsIntegrationIdReposIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].integrations[
            ':integration_id'
          ].repos.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIssuesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugIssuesIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIndex<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdOrSlugIssuesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugMembersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugMembersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['members']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugMembersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].members.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugMembersIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugMembersIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/members/:member_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['members'][':member_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugMembersMemberIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].members[':member_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugMembersMemberIdTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugMonitorsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['monitors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugMonitorsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].monitors.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugMonitorsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugMonitorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[':monitor_id_or_slug'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/monitors/:monitor_id_or_slug/checkins/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].checkins.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugNotebooksIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugNotebooksIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notebooks/:notebook_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['notebooks'][':notebook_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugNotebooksNotebookIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].notebooks[':notebook_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksBlockIdIndexMutationOptions<
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

export function usePutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugNotebooksNotebookIdBlocksOrderIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugNotificationsActionsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].notifications.actions.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugNotificationsActionsIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugNotificationsActionsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/notifications/actions/:action_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].notifications.actions[
          ':action_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['notifications']['actions'][':action_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].notifications.actions[
            ':action_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugNotificationsActionsActionIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/org-auth-tokens/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['org-auth-tokens']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['org-auth-tokens'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugOrgAuthTokensIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugOrgAuthTokensTokenIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/:artifact_id/install-details/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
          'install-details'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['install-details']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'install-details'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/:artifact_id/size-analysis/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
          'size-analysis'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts'][':artifact_id']['size-analysis']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts[':artifact_id'][
            'size-analysis'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/archive/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].archive.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['archive']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].archive.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/:snapshot_id/images/:image_identifier/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          ':snapshot_id'
        ].images[':image_identifier'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots'][':snapshot_id']['images'][':image_identifier']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            ':snapshot_id'
          ].images[':image_identifier'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/preprodartifacts/snapshots/latest-base/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
          'latest-base'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['preprodartifacts']['snapshots']['latest-base']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].preprodartifacts.snapshots[
            'latest-base'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/profiling/chunks/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugProfilingChunksIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['profiling']['chunks']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugProfilingChunksIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].profiling.chunks.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/profiling/flamegraph/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['profiling']['flamegraph']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugProfilingFlamegraphIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].profiling.flamegraph.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/project-keys/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['project-keys'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugProjectKeysIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['project-keys']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugProjectKeysIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['project-keys'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/projects/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugProjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].projects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugProjectsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['projects']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugProjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].projects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugProjectsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugProjectsIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/relay_usage/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].relay_usage.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugRelayUsageIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['relay_usage']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugRelayUsageIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].relay_usage.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/release-threshold-statuses/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['release-threshold-statuses']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['release-threshold-statuses'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['releases']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReleasesIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugReleasesIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugReleasesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/commits/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commits']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].commits.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/deploys/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['deploys']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].deploys.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].files.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/files/:file_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'].files[
          ':file_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'].files[
            ':file_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/previous-with-commits/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[':version'][
          'previous-with-commits'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['previous-with-commits']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[':version'][
            'previous-with-commits'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replay-count/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['replay-count'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReplayCountIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['replay-count']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReplayCountIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['replay-count'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replay-selectors/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReplaySelectorsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['replay-selectors']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['replay-selectors'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replays/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReplaysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].replays.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReplaysIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['replays']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReplaysIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].replays.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/replays/:replay_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReplaysReplayIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['replays'][':replay_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].replays[':replay_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReposIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
    >
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/repos/', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOrSlugReposIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReposIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].repos.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReposIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['repos']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugReposIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].repos.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/repos/:repo_id/commits/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['repos'][':repo_id']['commits']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReposRepoIdCommitsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].repos[':repo_id'].commits.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugReposSettingsIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugReposSettingsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2Groups<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2GroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugScimV2Groups<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugScimV2GroupsMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Groups/:team_id_or_slug',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Groups'][':team_id_or_slug']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Groups[':team_id_or_slug'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
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

export function usePatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlug<
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
  const mutationDefaults =
    getPatchOrganizationsOrganizationIdOrSlugScimV2GroupsTeamIdOrSlugMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ResourceTypes',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2ResourceTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ResourceTypes/:resource_type_name',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
          ':resource_type_name'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ResourceTypes'][':resource_type_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2ResourceTypesResourceTypeNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.ResourceTypes[
            ':resource_type_name'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Schemas/:schema_uri',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUri<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Schemas'][':schema_uri']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2SchemasSchemaUriQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Schemas[':schema_uri'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/ServiceProviderConfig',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['ServiceProviderConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2ServiceProviderConfigQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.ServiceProviderConfig.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2UsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2Users<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugScimV2Users<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugScimV2UsersMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/scim/v2/Users/:member_id',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['scim']['v2']['Users'][':member_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].scim.v2.Users[':member_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
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

export function usePatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberId<
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
  const mutationDefaults =
    getPatchOrganizationsOrganizationIdOrSlugScimV2UsersMemberIdMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sentry-app-components/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugSentryAppComponentsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['sentry-app-components']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugSentryAppComponentsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['sentry-app-components'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sentry-apps/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugSentryAppsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['sentry-apps']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugSentryAppsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['sentry-apps'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sessions/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugSessionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].sessions.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugSessionsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['sessions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugSessionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].sessions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/shortids/:issue_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugShortidsIssueIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['shortids'][':issue_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugShortidsIssueIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].shortids[':issue_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugStarredServiceSpansIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/stats-summary/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugStatsSummaryIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['stats-summary']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugStatsSummaryIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['stats-summary'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/stats_v2/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].stats_v2.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugStatsV2Index<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['stats_v2']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugStatsV2IndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].stats_v2.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
    >
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/tags/', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOrSlugTagsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].tags.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTagsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['tags']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTagsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].tags.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
    >
  >,
) {
  return ['organizations', '/organizations/:organization_id_or_slug/teams/', toValue(args)] as const
}

export function getOrganizationsOrganizationIdOrSlugTeamsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].teams.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTeamsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['teams']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTeamsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].teams.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugTeamsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugTeamsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/attributes/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace-items']['attributes']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['trace-items'].attributes.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/metrics/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace-items']['metrics']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugTraceItemsMetricsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['trace-items'].metrics.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-items/stats/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceItemsStatsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace-items']['stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugTraceItemsStatsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['trace-items'].stats.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-logs/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceLogsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace-logs']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTraceLogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['trace-logs'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace-meta/:trace_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace-meta'][':trace_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['trace-meta'][':trace_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/trace/:trace_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugTraceTraceIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['trace'][':trace_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].trace[':trace_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/user-teams/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['user-teams'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugUserTeamsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['user-teams']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugUserTeamsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['user-teams'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugWorkflowsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['workflows']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationsOrganizationIdOrSlugWorkflowsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].workflows.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugWorkflowsIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugWorkflowsIndex<
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
  const mutationDefaults = getPostOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndex<
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
  const mutationDefaults = getDeleteOrganizationsOrganizationIdOrSlugWorkflowsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/workflows/:workflow_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['workflows'][':workflow_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].workflows[':workflow_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsOrganizationIdOrSlugProjectIdOrSlugIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
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
  const mutationDefaults = getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndex<
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
  const mutationDefaults = getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/code-mapping-prefixes/stack/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'code-mapping-prefixes'
        ].stack.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['code-mapping-prefixes']['stack']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeMappingPrefixesStackIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'code-mapping-prefixes'
          ].stack.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/codeowners/:codeowners_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
          ':codeowners_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['codeowners'][':codeowners_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].codeowners[
            ':codeowners_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCodeownersCodeownersIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/custom-inbound-filters/:filter_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'custom-inbound-filters'
        ][':filter_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['custom-inbound-filters'][':filter_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'custom-inbound-filters'
          ][':filter_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugCustomInboundFiltersFilterIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].environments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/environments/:environment/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
          ':environment'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['environments'][':environment']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].environments[
            ':environment'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugEnvironmentsEnvironmentIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/attachments/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].attachments.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/attachments/:attachment_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
          ':event_id'
        ].attachments[':attachment_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['attachments'][':attachment_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdAttachmentsAttachmentIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[
            ':event_id'
          ].attachments[':attachment_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/events/:event_id/source-map-debug/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
          'source-map-debug'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['events'][':event_id']['source-map-debug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugEventsEventIdSourceMapDebugIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].events[':event_id'][
            'source-map-debug'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDifsAssembleIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/files/dsyms/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['files']['dsyms']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugFilesDsymsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].files.dsyms.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/filters/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['filters']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].filters.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugFiltersFilterIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugKeysIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/keys/:key_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
          ':key_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['keys'][':key_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].keys[
            ':key_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugKeysKeyIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/members/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['members']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugMembersIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].members.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/monitors/:monitor_id_or_slug/checkins/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
          ':monitor_id_or_slug'
        ].checkins.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['monitors'][':monitor_id_or_slug']['checkins']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugMonitorsMonitorIdOrSlugCheckinsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].monitors[
            ':monitor_id_or_slug'
          ].checkins.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/ownership/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['ownership']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].ownership.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugOwnershipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/size-analysis/status-check-rules/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod['size-analysis'][
          'status-check-rules'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['size-analysis']['status-check-rules']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod[
            'size-analysis'
          ]['status-check-rules'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprod/snapshots/status-check-rules/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
          'status-check-rules'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprod']['snapshots']['status-check-rules']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprod.snapshots[
            'status-check-rules'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/preprodartifacts/build-distribution/latest/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
          'build-distribution'
        ].latest.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['preprodartifacts']['build-distribution']['latest']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].preprodartifacts[
            'build-distribution'
          ].latest.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/profiling/profiles/:profile_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
          ':profile_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['profiling']['profiles'][':profile_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugProfilingProfilesProfileIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].profiling.profiles[
            ':profile_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/commits/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].commits.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['commits']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].commits.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/:version/files/:file_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
          ':version'
        ].files[':file_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases'][':version']['files'][':file_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].releases[
            ':version'
          ].files[':file_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/releases/completion/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].releases.completion.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['releases']['completion']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].releases.completion.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/clicks/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
          ':replay_id'
        ].clicks.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['clicks']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[
            ':replay_id'
          ].clicks.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/recording-segments/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'recording-segments'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/recording-segments/:segment_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'recording-segments'
        ][':segment_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['recording-segments'][':segment_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'recording-segments'
          ][':segment_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/:replay_id/viewed-by/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
          'viewed-by'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays'][':replay_id']['viewed-by']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays[':replay_id'][
            'viewed-by'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][
          ':project_id_or_slug'
        ].replays.jobs.delete.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][
            ':project_id_or_slug'
          ].replays.jobs.delete.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/replays/jobs/delete/:job_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
          ':job_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['replays']['jobs']['delete'][':job_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].replays.jobs.delete[
            ':job_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/repo/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['repo']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].repo.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugRepoIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/seer/repos/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['seer']['repos']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].seer.repos.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSeerReposIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/stacktrace-link/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'stacktrace-link'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stacktrace-link']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugStacktraceLinkIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'stacktrace-link'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/stats/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['stats']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugStatsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].stats.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/symbol-sources/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'symbol-sources'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['symbol-sources']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'symbol-sources'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugSymbolSourcesIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/teams/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['teams']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].teams.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugTeamsTeamIdOrSlugIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/trace-items/:item_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
          ':item_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][':item_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugTraceItemsItemIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug']['trace-items'][
            ':item_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/user-feedback/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'][
          'user-feedback'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['user-feedback']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'][
            'user-feedback'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugUserFeedbackIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/users/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['users']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugUsersIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].users.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSeerModelsIndexQueryKey() {
  return ['seer', '/seer/models/'] as const
}

export function getSeerModelsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSeerModelsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.seer.models.index.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSeerModelsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>
            >
          >,
          ReturnType<typeof getSeerModelsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.seer.models.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSeerModelsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSeerModelsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.seer.models.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSentryAppInstallationsUuidExternalIssueActionsIndex<
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
  const mutationDefaults =
    getPostSentryAppInstallationsUuidExternalIssueActionsIndexMutationOptions<
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

export function getSentryAppInstallationsUuidExternalRequestsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
    >
  >,
) {
  return [
    'sentry-app-installations',
    '/sentry-app-installations/:uuid/external-requests/',
    toValue(args),
  ] as const
}

export function getSentryAppInstallationsUuidExternalRequestsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentryAppInstallationsUuidExternalRequestsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sentry-app-installations'][':uuid']['external-requests'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSentryAppInstallationsUuidExternalRequestsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
                    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
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
                    (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSentryAppInstallationsUuidExternalRequestsIndexQueryKey>
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
              (typeof client)['sentry-app-installations'][':uuid']['external-requests']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentryAppInstallationsUuidExternalRequestsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentryAppInstallationsUuidExternalRequestsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sentry-app-installations'][':uuid']['external-requests'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSentryAppsSentryAppIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
  >,
) {
  return ['sentry-apps', '/sentry-apps/:sentry_app_id_or_slug/', toValue(args)] as const
}

export function getSentryAppsSentryAppIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSentryAppsSentryAppIdOrSlugIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSentryAppsSentryAppIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
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
                    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']
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
                    (typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSentryAppsSentryAppIdOrSlugIndexQueryKey>
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
            ReturnType<(typeof client)['sentry-apps'][':sentry_app_id_or_slug']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSentryAppsSentryAppIdOrSlugIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSentryAppsSentryAppIdOrSlugIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['sentry-apps'][':sentry_app_id_or_slug'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSentryAppsSentryAppIdOrSlugIndex<
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
  const mutationDefaults = getPutSentryAppsSentryAppIdOrSlugIndexMutationOptions<
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

export function useDeleteSentryAppsSentryAppIdOrSlugIndex<
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
  const mutationDefaults = getDeleteSentryAppsSentryAppIdOrSlugIndexMutationOptions<
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

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
    >
  >,
) {
  return ['teams', '/teams/:organization_id_or_slug/:team_id_or_slug/', toValue(args)] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey>
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
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
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
  const mutationDefaults = getPutTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
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

export function useDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndex<
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
  const mutationDefaults = getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugIndexMutationOptions<
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

export function usePostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndex<
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
  const mutationDefaults =
    getPostTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsIndexMutationOptions<
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

export function usePutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
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
  const mutationDefaults =
    getPutTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
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

export function useDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndex<
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
  const mutationDefaults =
    getDeleteTeamsOrganizationIdOrSlugTeamIdOrSlugExternalTeamsExternalTeamIdIndexMutationOptions<
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

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
    >
  >,
) {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/members/',
    toValue(args),
  ] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey>
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
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['members']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugMembersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].members.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
    >
  >,
) {
  return [
    'teams',
    '/teams/:organization_id_or_slug/:team_id_or_slug/projects/',
    toValue(args),
  ] as const
}

export function getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
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
                    (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey>
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
              (typeof client.teams)[':organization_id_or_slug'][':team_id_or_slug']['projects']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':organization_id_or_slug'][':team_id_or_slug'].projects.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndex<
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
  const mutationDefaults = getPostTeamsOrganizationIdOrSlugTeamIdOrSlugProjectsIndexMutationOptions<
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

export function getUsersUserIdIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
) {
  return ['users', '/users/:user_id/', toValue(args)] as const
}

export function getUsersUserIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/tags/:key/values/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
          ':key'
        ].values.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['tags'][':key']['values']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugTagsKeyValuesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].tags[
            ':key'
          ].values.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndex<
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
  const mutationDefaults =
    getPostProjectsOrganizationIdOrSlugProjectIdOrSlugHooksIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/hooks/:hook_id/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
          ':hook_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['hooks'][':hook_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].hooks[
            ':hook_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugHooksHookIdIndexMutationOptions<
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

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
    >
  >,
) {
  return [
    'projects',
    '/projects/:organization_id_or_slug/:project_id_or_slug/issues/',
    toValue(args),
  ] as const
}

export function getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
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
                    (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey>
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
              (typeof client.projects)[':organization_id_or_slug'][':project_id_or_slug']['issues']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':organization_id_or_slug'][':project_id_or_slug'].issues.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
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
  const mutationDefaults =
    getPutProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
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

export function useDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndex<
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
  const mutationDefaults =
    getDeleteProjectsOrganizationIdOrSlugProjectIdOrSlugIssuesIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/releases/:version/commitfiles/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].releases[
          ':version'
        ].commitfiles.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['releases'][':version']['commitfiles']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].releases[
            ':version'
          ].commitfiles.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/sentry-app-installations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['sentry-app-installations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugSentryAppInstallationsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug']['sentry-app-installations'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostSentryAppInstallationsUuidExternalIssuesIndex<
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
  const mutationDefaults = getPostSentryAppInstallationsUuidExternalIssuesIndexMutationOptions<
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

export function useDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndex<
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
  const mutationDefaults =
    getDeleteSentryAppInstallationsUuidExternalIssuesExternalIssueIdIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugSpikeProtectionsIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
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
  const mutationDefaults = getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/autofix/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['autofix']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].autofix.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdAutofixIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/events/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/events/:event_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
          ':event_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['events'][':event_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdEventsEventIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].events[
            ':event_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/external-issues/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'][
          'external-issues'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['external-issues']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'][
            'external-issues'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdExternalIssuesExternalIssueIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/hashes/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['hashes']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdHashesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].hashes.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[
          ':issue_id'
        ].integrations.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[
            ':issue_id'
          ].integrations.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/integrations/:integration_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
          ':integration_id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['integrations'][':integration_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].integrations[
            ':integration_id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
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
  const mutationDefaults =
    getPutOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function usePostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
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
  const mutationDefaults =
    getPostOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function useDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndex<
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
  const mutationDefaults =
    getDeleteOrganizationsOrganizationIdOrSlugIssuesIssueIdIntegrationsIntegrationIdIndexMutationOptions<
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

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/tags/:key/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
          ':key'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/issues/:issue_id/tags/:key/values/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
          ':key'
        ].values.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey
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
              (typeof client.organizations)[':organization_id_or_slug']['issues'][':issue_id']['tags'][':key']['values']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugIssuesIssueIdTagsKeyValuesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].issues[':issue_id'].tags[
            ':key'
          ].values.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
    >
  >,
) {
  return [
    'organizations',
    '/organizations/:organization_id_or_slug/shared/issues/:share_id/',
    toValue(args),
  ] as const
}

export function getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
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
                    (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey>
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
              (typeof client.organizations)[':organization_id_or_slug']['shared']['issues'][':share_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getOrganizationsOrganizationIdOrSlugSharedIssuesShareIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.organizations[':organization_id_or_slug'].shared.issues[':share_id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
