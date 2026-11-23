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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiV1IntegrationsCreateMutationKey() {
  return ['api', '/api/v1/integrations.create', 'POST'] as const
}

export function getPostApiV1IntegrationsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['integrations.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IntegrationsCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['integrations.create']['$post']>,
    ) {
      return parseResponse(client.api.v1['integrations.create'].$post(args, options))
    },
  })
}

export function createPostApiV1IntegrationsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['integrations.create']['$post']>,
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
    const mutationDefaults = getPostApiV1IntegrationsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1IntegrationsGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['integrations.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/integrations.get', keyArgs] as const
}

export function getApiV1IntegrationsGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['integrations.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['integrations.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IntegrationsGetQueryKey>
  >({
    queryKey: getApiV1IntegrationsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['integrations.get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1IntegrationsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['integrations.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['integrations.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.get']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1IntegrationsGetQueryKey>
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
      ...getApiV1IntegrationsGetQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1IntegrationsHistoryQueryKey(
  args: InferRequestType<(typeof client.api.v1)['integrations.history']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/integrations.history', keyArgs] as const
}

export function getApiV1IntegrationsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['integrations.history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['integrations.history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.history']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IntegrationsHistoryQueryKey>
  >({
    queryKey: getApiV1IntegrationsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['integrations.history'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1IntegrationsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['integrations.history']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['integrations.history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.history']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1IntegrationsHistoryQueryKey>
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
      ...getApiV1IntegrationsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1IntegrationsClearHistoryMutationKey() {
  return ['api', '/api/v1/integrations.clearHistory', 'POST'] as const
}

export function getPostApiV1IntegrationsClearHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.clearHistory']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['integrations.clearHistory']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IntegrationsClearHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['integrations.clearHistory']['$post']>,
    ) {
      return parseResponse(client.api.v1['integrations.clearHistory'].$post(args, options))
    },
  })
}

export function createPostApiV1IntegrationsClearHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.clearHistory']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['integrations.clearHistory']['$post']>,
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
    const mutationDefaults = getPostApiV1IntegrationsClearHistoryMutationOptions<
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

export function getPostApiV1IntegrationsReplayOutgoingMutationKey() {
  return ['api', '/api/v1/integrations.replayOutgoing', 'POST'] as const
}

export function getPostApiV1IntegrationsReplayOutgoingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IntegrationsReplayOutgoingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>,
    ) {
      return parseResponse(client.api.v1['integrations.replayOutgoing'].$post(args, options))
    },
  })
}

export function createPostApiV1IntegrationsReplayOutgoing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['integrations.replayOutgoing']['$post']>,
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
    const mutationDefaults = getPostApiV1IntegrationsReplayOutgoingMutationOptions<
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

export function getApiV1IntegrationsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['integrations.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/integrations.list', keyArgs] as const
}

export function getApiV1IntegrationsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['integrations.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['integrations.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1IntegrationsListQueryKey>
  >({
    queryKey: getApiV1IntegrationsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['integrations.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1IntegrationsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['integrations.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['integrations.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1IntegrationsListQueryKey>
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
      ...getApiV1IntegrationsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutApiV1IntegrationsUpdateMutationKey() {
  return ['api', '/api/v1/integrations.update', 'PUT'] as const
}

export function getPutApiV1IntegrationsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.update']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['integrations.update']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1IntegrationsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['integrations.update']['$put']>,
    ) {
      return parseResponse(client.api.v1['integrations.update'].$put(args, options))
    },
  })
}

export function createPutApiV1IntegrationsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.update']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['integrations.update']['$put']>,
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
    const mutationDefaults = getPutApiV1IntegrationsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1IntegrationsRemoveMutationKey() {
  return ['api', '/api/v1/integrations.remove', 'POST'] as const
}

export function getPostApiV1IntegrationsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['integrations.remove']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['integrations.remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1IntegrationsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['integrations.remove']['$post']>,
    ) {
      return parseResponse(client.api.v1['integrations.remove'].$post(args, options))
    },
  })
}

export function createPostApiV1IntegrationsRemove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['integrations.remove']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['integrations.remove']['$post']>,
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
    const mutationDefaults = getPostApiV1IntegrationsRemoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1OauthAppsCreateMutationKey() {
  return ['api', '/api/v1/oauth-apps.create', 'POST'] as const
}

export function getPostApiV1OauthAppsCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['oauth-apps.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OauthAppsCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['oauth-apps.create']['$post']>) {
      return parseResponse(client.api.v1['oauth-apps.create'].$post(args, options))
    },
  })
}

export function createPostApiV1OauthAppsCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.create']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['oauth-apps.create']['$post']>,
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
    const mutationDefaults = getPostApiV1OauthAppsCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1OauthAppsUpdateMutationKey() {
  return ['api', '/api/v1/oauth-apps.update', 'POST'] as const
}

export function getPostApiV1OauthAppsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['oauth-apps.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OauthAppsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['oauth-apps.update']['$post']>) {
      return parseResponse(client.api.v1['oauth-apps.update'].$post(args, options))
    },
  })
}

export function createPostApiV1OauthAppsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['oauth-apps.update']['$post']>,
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
    const mutationDefaults = getPostApiV1OauthAppsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1OauthAppsListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/oauth-apps.list', keyArgs] as const
}

export function getApiV1OauthAppsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OauthAppsListQueryKey>
  >({
    queryKey: getApiV1OauthAppsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['oauth-apps.list'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OauthAppsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['oauth-apps.list']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.list']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OauthAppsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1OauthAppsListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1OauthAppsGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/oauth-apps.get', keyArgs] as const
}

export function getApiV1OauthAppsGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['oauth-apps.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1OauthAppsGetQueryKey>
  >({
    queryKey: getApiV1OauthAppsGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['oauth-apps.get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1OauthAppsGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['oauth-apps.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.get']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1OauthAppsGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1OauthAppsGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1OauthAppsDeleteMutationKey() {
  return ['api', '/api/v1/oauth-apps.delete', 'POST'] as const
}

export function getPostApiV1OauthAppsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['oauth-apps.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1OauthAppsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['oauth-apps.delete']['$post']>) {
      return parseResponse(client.api.v1['oauth-apps.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1OauthAppsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['oauth-apps.delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['oauth-apps.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1OauthAppsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
