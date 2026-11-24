import { injectQuery, injectMutation, queryOptions, mutationOptions } from '@tanstack/angular-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
} from '@tanstack/angular-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getBucketsKey() {
  return ['buckets'] as const
}

export function getContainersKey() {
  return ['containers'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getSpacesKey() {
  return ['spaces'] as const
}

export function getNamespaceKey() {
  return ['{namespace}'] as const
}

export function getApiNotificationsQueryKey(
  args: InferRequestType<typeof client.api.notifications.$get>,
) {
  return ['api', '/api/notifications', args] as const
}

export function getApiNotificationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.notifications.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsQueryKey>
  >({
    queryKey: getApiNotificationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.notifications.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.notifications.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiNotificationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiNotificationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiSettingsMcpQueryKey() {
  return ['api', '/api/settings/mcp'] as const
}

export function getApiSettingsMcpQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsMcpQueryKey>
  >({
    queryKey: getApiSettingsMcpQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.mcp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSettingsMcp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsMcpQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsMcpQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiSettingsWebhooksQueryKey() {
  return ['api', '/api/settings/webhooks'] as const
}

export function getApiSettingsWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsWebhooksQueryKey>
  >({
    queryKey: getApiSettingsWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.webhooks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsWebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getPostApiSettingsWebhooksMutationKey() {
  return ['api', '/api/settings/webhooks', 'POST'] as const
}

export function getPostApiSettingsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.settings.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.settings.webhooks.$post>) {
      return parseResponse(client.api.settings.webhooks.$post(args, options))
    },
  })
}

export function injectPostApiSettingsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.settings.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSettingsWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
) {
  return ['api', '/api/settings/webhooks/:webhookId', args] as const
}

export function getApiSettingsWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsWebhooksWebhookIdQueryKey>
  >({
    queryKey: getApiSettingsWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSettingsWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiSettingsWebhooksWebhookIdMutationKey() {
  return ['api', '/api/settings/webhooks/:webhookId', 'POST'] as const
}

export function getPostApiSettingsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>,
    ) {
      return parseResponse(client.api.settings.webhooks[':webhookId'].$post(args, options))
    },
  })
}

export function injectPostApiSettingsWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiSettingsWebhooksWebhookIdMutationKey() {
  return ['api', '/api/settings/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteApiSettingsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSettingsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>,
    ) {
      return parseResponse(client.api.settings.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function injectDeleteApiSettingsWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiSettingsWebhooksWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSettingsWebhooksWebhookIdActionMutationKey() {
  return ['api', '/api/settings/webhooks/:webhookId/:action', 'POST'] as const
}

export function getPostApiSettingsWebhooksWebhookIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsWebhooksWebhookIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']
      >,
    ) {
      return parseResponse(
        client.api.settings.webhooks[':webhookId'][':action'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSettingsWebhooksWebhookIdAction<
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
                ReturnType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsWebhooksWebhookIdActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSettingsWebhooksWebhookIdReplayLogIdMutationKey() {
  return ['api', '/api/settings/webhooks/:webhookId/replay/:logId', 'POST'] as const
}

export function getPostApiSettingsWebhooksWebhookIdReplayLogIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsWebhooksWebhookIdReplayLogIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.settings.webhooks[':webhookId'].replay[':logId'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSettingsWebhooksWebhookIdReplayLogId<
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
                  (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsWebhooksWebhookIdReplayLogIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSettingsPapersClaimMutationKey() {
  return ['api', '/api/settings/papers/claim', 'POST'] as const
}

export function getPostApiSettingsPapersClaimMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.papers.claim.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.settings.papers.claim.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsPapersClaimMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.settings.papers.claim.$post>) {
      return parseResponse(client.api.settings.papers.claim.$post(args, options))
    },
  })
}

export function injectPostApiSettingsPapersClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.papers.claim.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.settings.papers.claim.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsPapersClaimMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSettingsRepositoriesQueryKey(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
) {
  return ['api', '/api/settings/repositories', args] as const
}

export function getApiSettingsRepositoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsRepositoriesQueryKey>
  >({
    queryKey: getApiSettingsRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.settings.repositories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsRepositoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSettingsRepositoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameSettingsTokensQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
) {
  return ['api', '/api/organizations/:name/settings/tokens', args] as const
}

export function getApiOrganizationsNameSettingsTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsTokensQueryKey>
  >({
    queryKey: getApiOrganizationsNameSettingsTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].settings.tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameSettingsTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['tokens']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameSettingsTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameSettingsTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameSettingsRepositoriesQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/settings/repositories', args] as const
}

export function getApiOrganizationsNameSettingsRepositoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['settings']['repositories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsRepositoriesQueryKey>
  >({
    queryKey: getApiOrganizationsNameSettingsRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].settings.repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameSettingsRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['settings']['repositories']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameSettingsRepositoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameSettingsRepositoriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPutApiOrganizationsNameSettingsSsoCredentialsMutationKey() {
  return ['api', '/api/organizations/:name/settings/sso/credentials', 'PUT'] as const
}

export function getPutApiOrganizationsNameSettingsSsoCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOrganizationsNameSettingsSsoCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].settings.sso.credentials.$put(args, options),
      )
    },
  })
}

export function injectPutApiOrganizationsNameSettingsSsoCredentials<
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
                  (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiOrganizationsNameSettingsSsoCredentialsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameAuditLogExportQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
) {
  return ['api', '/api/organizations/:name/audit-log/export', args] as const
}

export function getApiOrganizationsNameAuditLogExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameAuditLogExportQueryKey>
  >({
    queryKey: getApiOrganizationsNameAuditLogExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['audit-log'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameAuditLogExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['audit-log']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['audit-log']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameAuditLogExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameAuditLogExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', args] as const
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameResourceGroupsResourceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameResourceGroupsResourceGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameResourceGroupsResourceGroupId<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameResourceGroupsResourceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameResourceGroupsResourceGroupId<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsMutationKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/settings',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].settings.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroupsResourceGroupIdSettings<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersMutationKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId/users', 'POST'] as const
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroupsResourceGroupIdUsers<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteMutationKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invite',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invite.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroupsResourceGroupIdInvite<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
) {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitations',
    args,
  ] as const
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey>
  >({
    queryKey: getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApiOrganizationsNameResourceGroupsResourceGroupIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendMutationKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitation/:id/resend',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitation[
          ':id'
        ].resend.$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResend<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/users/:username',
    'DELETE',
  ] as const
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
          ':username'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/users/:username',
    'PATCH',
  ] as const
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
          ':username'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
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
                  (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameResourceGroupsQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
) {
  return ['api', '/api/organizations/:name/resource-groups', args] as const
}

export function getApiOrganizationsNameResourceGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsQueryKey>
  >({
    queryKey: getApiOrganizationsNameResourceGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameResourceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameResourceGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameResourceGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsMutationKey() {
  return ['api', '/api/organizations/:name/resource-groups', 'POST'] as const
}

export function getPostApiOrganizationsNameResourceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameResourceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroups<
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
                ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameResourceGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameResourceGroupsSettingsQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups/settings', args] as const
}

export function getApiOrganizationsNameResourceGroupsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsSettingsQueryKey>
  >({
    queryKey: getApiOrganizationsNameResourceGroupsSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameResourceGroupsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameResourceGroupsSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameResourceGroupsSettingsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameResourceGroupsSettingsMutationKey() {
  return ['api', '/api/organizations/:name/resource-groups/settings', 'POST'] as const
}

export function getPostApiOrganizationsNameResourceGroupsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameResourceGroupsSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].settings.$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameResourceGroupsSettings<
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
                  (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameResourceGroupsSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameSettingsNetworkSecurityQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/settings/network-security', args] as const
}

export function getApiOrganizationsNameSettingsNetworkSecurityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsNetworkSecurityQueryKey>
  >({
    queryKey: getApiOrganizationsNameSettingsNetworkSecurityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].settings['network-security'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameSettingsNetworkSecurity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameSettingsNetworkSecurityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameSettingsNetworkSecurityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPatchApiOrganizationsNameSettingsNetworkSecurityMutationKey() {
  return ['api', '/api/organizations/:name/settings/network-security', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameSettingsNetworkSecurityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameSettingsNetworkSecurityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].settings['network-security'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameSettingsNetworkSecurity<
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
                  (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiOrganizationsNameSettingsNetworkSecurityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameServiceAccountsQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
) {
  return ['api', '/api/organizations/:name/service-accounts', args] as const
}

export function getApiOrganizationsNameServiceAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameServiceAccountsQueryKey>
  >({
    queryKey: getApiOrganizationsNameServiceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameServiceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameServiceAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameServiceAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameServiceAccountsMutationKey() {
  return ['api', '/api/organizations/:name/service-accounts', 'POST'] as const
}

export function getPostApiOrganizationsNameServiceAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameServiceAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'].$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameServiceAccounts<
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
                ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameServiceAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/service-accounts/:serviceAccountId', args] as const
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameServiceAccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameServiceAccountsServiceAccountIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdMutationKey() {
  return ['api', '/api/organizations/:name/service-accounts/:serviceAccountId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameServiceAccountsServiceAccountId<
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensMutationKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrganizationsNameServiceAccountsServiceAccountIdTokens<
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
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
          ':tokenId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId',
    'PATCH',
  ] as const
}

export function getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
          ':tokenId'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
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
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateMutationKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId/rotate',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
          ':tokenId'
        ].rotate.$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotate<
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
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
) {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/trusted-publishers',
    args,
  ] as const
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey
    >
  >({
    queryKey: getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
          'trusted-publishers'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersMutationKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/trusted-publishers',
    'POST',
  ] as const
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
          'trusted-publishers'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
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
                  (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameAvatarQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
) {
  return ['api', '/api/organizations/:name/avatar', args] as const
}

export function getApiOrganizationsNameAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameAvatarQueryKey>
  >({
    queryKey: getApiOrganizationsNameAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameAvatarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameAvatarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameMembersQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
) {
  return ['api', '/api/organizations/:name/members', args] as const
}

export function getApiOrganizationsNameMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameMembersQueryKey>
  >({
    queryKey: getApiOrganizationsNameMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameMembersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ServiceProviderConfig', args] as const
}

export function getApiOrganizationsNameScimV2ServiceProviderConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2ServiceProviderConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2ServiceProviderConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameScimV2ResourceTypesQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ResourceTypes', args] as const
}

export function getApiOrganizationsNameScimV2ResourceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2ResourceTypesQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2ResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.ResourceTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2ResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2ResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2ResourceTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameScimV2SchemasQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas', args] as const
}

export function getApiOrganizationsNameScimV2SchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2SchemasQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2SchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2Schemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2SchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2SchemasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas/:schemaId', args] as const
}

export function getApiOrganizationsNameScimV2SchemasSchemaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2SchemasSchemaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2SchemasSchemaIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameScimV2UsersQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users', args] as const
}

export function getApiOrganizationsNameScimV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2UsersQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2UsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameScimV2UsersMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users', 'POST'] as const
}

export function getPostApiOrganizationsNameScimV2UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameScimV2UsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']
      >,
    ) {
      return parseResponse(client.api.organizations[':name'].scim.v2.Users.$post(args, options))
    },
  })
}

export function injectPostApiOrganizationsNameScimV2Users<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameScimV2UsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimV2UsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', args] as const
}

export function getApiOrganizationsNameScimV2UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2UsersUserIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2UsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPutApiOrganizationsNameScimV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'PUT'] as const
}

export function getPutApiOrganizationsNameScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOrganizationsNameScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users[':userId'].$put(args, options),
      )
    },
  })
}

export function injectPutApiOrganizationsNameScimV2UsersUserId<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiOrganizationsNameScimV2UsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameScimV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users[':userId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameScimV2UsersUserId<
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiOrganizationsNameScimV2UsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameScimV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users[':userId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameScimV2UsersUserId<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiOrganizationsNameScimV2UsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimV2GroupsQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups', args] as const
}

export function getApiOrganizationsNameScimV2GroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2GroupsQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2Groups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2GroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameScimV2GroupsMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups', 'POST'] as const
}

export function getPostApiOrganizationsNameScimV2GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameScimV2GroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']
      >,
    ) {
      return parseResponse(client.api.organizations[':name'].scim.v2.Groups.$post(args, options))
    },
  })
}

export function injectPostApiOrganizationsNameScimV2Groups<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameScimV2GroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimV2GroupsGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', args] as const
}

export function getApiOrganizationsNameScimV2GroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2GroupsGroupIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimV2GroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimV2GroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimV2GroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimV2GroupsGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPutApiOrganizationsNameScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'PUT'] as const
}

export function getPutApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOrganizationsNameScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups[':groupId'].$put(args, options),
      )
    },
  })
}

export function injectPutApiOrganizationsNameScimV2GroupsGroupId<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups[':groupId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameScimV2GroupsGroupId<
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups[':groupId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameScimV2GroupsGroupId<
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
                  (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimProvisioningV2UsersQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users', args] as const
}

export function getApiOrganizationsNameScimProvisioningV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimProvisioningV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimProvisioningV2Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimProvisioningV2UsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameScimProvisioningV2UsersMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users', 'POST'] as const
}

export function getPostApiOrganizationsNameScimProvisioningV2UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameScimProvisioningV2UsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users.$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameScimProvisioningV2Users<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameScimProvisioningV2UsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', args] as const
}

export function getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimProvisioningV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPutApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'PUT'] as const
}

export function getPutApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiOrganizationsNameScimProvisioningV2UsersUserId<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameScimProvisioningV2UsersUserId<
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameScimProvisioningV2UsersUserId<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimProvisioningV2GroupsQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups', args] as const
}

export function getApiOrganizationsNameScimProvisioningV2GroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimProvisioningV2GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimProvisioningV2Groups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimProvisioningV2GroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameScimProvisioningV2GroupsMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups', 'POST'] as const
}

export function getPostApiOrganizationsNameScimProvisioningV2GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameScimProvisioningV2GroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups.$post(args, options),
      )
    },
  })
}

export function injectPostApiOrganizationsNameScimProvisioningV2Groups<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrganizationsNameScimProvisioningV2GroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', args] as const
}

export function getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey>
  >({
    queryKey: getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameScimProvisioningV2GroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'PUT'] as const
}

export function getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'DELETE'] as const
}

export function getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'PATCH'] as const
}

export function getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
                  (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostOauthRegisterMutationKey() {
  return ['oauth', '/oauth/register', 'POST'] as const
}

export function getPostOauthRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.register.$post>) {
      return parseResponse(client.oauth.register.$post(args, options))
    },
  })
}

export function injectPostOauthRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.register.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostOauthDeviceMutationKey() {
  return ['oauth', '/oauth/device', 'POST'] as const
}

export function getPostOauthDeviceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.device.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.device.$post>) {
      return parseResponse(client.oauth.device.$post(args, options))
    },
  })
}

export function injectPostOauthDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.device.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getOauthUserinfoQueryKey() {
  return ['oauth', '/oauth/userinfo'] as const
}

export function getOauthUserinfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthUserinfoQueryKey>
  >({
    queryKey: getOauthUserinfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOauthUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthUserinfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOauthUserinfoQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getPostOauthUserinfoMutationKey() {
  return ['oauth', '/oauth/userinfo', 'POST'] as const
}

export function getPostOauthUserinfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostOauthUserinfoMutationKey(),
    async mutationFn() {
      return parseResponse(client.oauth.userinfo.$post(undefined, options))
    },
  })
}

export function injectPostOauthUserinfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOauthUserinfoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiRegistryTokenQueryKey(
  args: InferRequestType<typeof client.api.registry.token.$get>,
) {
  return ['api', '/api/registry/token', args] as const
}

export function getApiRegistryTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.registry.token.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegistryTokenQueryKey>
  >({
    queryKey: getApiRegistryTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.registry.token.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiRegistryToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.registry.token.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRegistryTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRegistryTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiBlogSlugCommentMutationKey() {
  return ['api', '/api/blog/:slug/comment', 'POST'] as const
}

export function getPostApiBlogSlugCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.blog)[':slug']['comment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlogSlugCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']>,
    ) {
      return parseResponse(client.api.blog[':slug'].comment.$post(args, options))
    },
  })
}

export function injectPostApiBlogSlugComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.blog)[':slug']['comment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlogSlugCommentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiBlogSlugCommentCommentIdReplyMutationKey() {
  return ['api', '/api/blog/:slug/comment/:commentId/reply', 'POST'] as const
}

export function getPostApiBlogSlugCommentCommentIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlogSlugCommentCommentIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']
      >,
    ) {
      return parseResponse(
        client.api.blog[':slug'].comment[':commentId'].reply.$post(args, options),
      )
    },
  })
}

export function injectPostApiBlogSlugCommentCommentIdReply<
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
                  (typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlogSlugCommentCommentIdReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiBlogNamespaceSlugCommentMutationKey() {
  return ['api', '/api/blog/:namespace/:slug/comment', 'POST'] as const
}

export function getPostApiBlogNamespaceSlugCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlogNamespaceSlugCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>,
    ) {
      return parseResponse(client.api.blog[':namespace'][':slug'].comment.$post(args, options))
    },
  })
}

export function injectPostApiBlogNamespaceSlugComment<
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
                ReturnType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlogNamespaceSlugCommentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiBlogNamespaceSlugCommentCommentIdReplyMutationKey() {
  return ['api', '/api/blog/:namespace/:slug/comment/:commentId/reply', 'POST'] as const
}

export function getPostApiBlogNamespaceSlugCommentCommentIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlogNamespaceSlugCommentCommentIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
      >,
    ) {
      return parseResponse(
        client.api.blog[':namespace'][':slug'].comment[':commentId'].reply.$post(args, options),
      )
    },
  })
}

export function injectPostApiBlogNamespaceSlugCommentCommentIdReply<
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
                  (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlogNamespaceSlugCommentCommentIdReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiBlogNamespaceSlugResourceGroupQueryKey(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
) {
  return ['api', '/api/blog/:namespace/:slug/resource-group', args] as const
}

export function getApiBlogNamespaceSlugResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBlogNamespaceSlugResourceGroupQueryKey>
  >({
    queryKey: getApiBlogNamespaceSlugResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.blog[':namespace'][':slug']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBlogNamespaceSlugResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBlogNamespaceSlugResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBlogNamespaceSlugResourceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiBlogNamespaceSlugResourceGroupMutationKey() {
  return ['api', '/api/blog/:namespace/:slug/resource-group', 'POST'] as const
}

export function getPostApiBlogNamespaceSlugResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBlogNamespaceSlugResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.blog[':namespace'][':slug']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiBlogNamespaceSlugResourceGroup<
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
                  (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBlogNamespaceSlugResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiDocsQueryKey() {
  return ['api', '/api/docs'] as const
}

export function getApiDocsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDocsQueryKey>
  >({
    queryKey: getApiDocsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiDocsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiDocsSearchQueryKey(
  args: InferRequestType<typeof client.api.docs.search.$get>,
) {
  return ['api', '/api/docs/search', args] as const
}

export function getApiDocsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.docs.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocsSearchQueryKey>
  >({
    queryKey: getApiDocsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.docs.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDocsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.docs.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiDocsSearchFullTextQueryKey(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
) {
  return ['api', '/api/docs/search/full-text', args] as const
}

export function getApiDocsSearchFullTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocsSearchFullTextQueryKey>
  >({
    queryKey: getApiDocsSearchFullTextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.docs.search['full-text'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDocsSearchFullText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocsSearchFullTextQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDocsSearchFullTextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiWhoamiV2QueryKey() {
  return ['api', '/api/whoami-v2'] as const
}

export function getApiWhoamiV2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWhoamiV2QueryKey>
  >({
    queryKey: getApiWhoamiV2QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['whoami-v2'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiWhoamiV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWhoamiV2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWhoamiV2QueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiOrganizationsNameBillingUsageByResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage-by-resource-group', args] as const
}

export function getApiOrganizationsNameBillingUsageByResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageByResourceGroupQueryKey>
  >({
    queryKey: getApiOrganizationsNameBillingUsageByResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].billing['usage-by-resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameBillingUsageByResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameBillingUsageByResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameBillingUsageByResourceGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage-by-inference-session', args] as const
}

export function getApiOrganizationsNameBillingUsageByInferenceSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey>
  >({
    queryKey: getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].billing['usage-by-inference-session'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameBillingUsageByInferenceSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameBillingUsageByInferenceSessionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameBillingUsageInferenceQueryKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage/inference', args] as const
}

export function getApiOrganizationsNameBillingUsageInferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageInferenceQueryKey>
  >({
    queryKey: getApiOrganizationsNameBillingUsageInferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].billing.usage.inference.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameBillingUsageInference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameBillingUsageInferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameBillingUsageInferenceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiOrganizationsNameBillingCreditsQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
) {
  return ['api', '/api/organizations/:name/billing/credits', args] as const
}

export function getApiOrganizationsNameBillingCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingCreditsQueryKey>
  >({
    queryKey: getApiOrganizationsNameBillingCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].billing.credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['credits']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameBillingCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameBillingCreditsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkMutationKey() {
  return ['api', '/api/organizations/:name/billing/prepaid-credits/purchase-link', 'POST'] as const
}

export function getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
      >,
    ) {
      return parseResponse(
        client.api.organizations[':name'].billing['prepaid-credits']['purchase-link'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLink<
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
                  (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSettingsBillingCreditsQueryKey() {
  return ['api', '/api/settings/billing/credits'] as const
}

export function getApiSettingsBillingCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingCreditsQueryKey>
  >({
    queryKey: getApiSettingsBillingCreditsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.billing.credits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsBillingCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsBillingCreditsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getPostApiSettingsBillingPrepaidCreditsPurchaseLinkMutationKey() {
  return ['api', '/api/settings/billing/prepaid-credits/purchase-link', 'POST'] as const
}

export function getPostApiSettingsBillingPrepaidCreditsPurchaseLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSettingsBillingPrepaidCreditsPurchaseLinkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
      >,
    ) {
      return parseResponse(
        client.api.settings.billing['prepaid-credits']['purchase-link'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSettingsBillingPrepaidCreditsPurchaseLink<
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
                  (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSettingsBillingPrepaidCreditsPurchaseLinkMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSettingsBillingUsageByInferenceSessionQueryKey(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
) {
  return ['api', '/api/settings/billing/usage-by-inference-session', args] as const
}

export function getApiSettingsBillingUsageByInferenceSessionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingUsageByInferenceSessionQueryKey>
  >({
    queryKey: getApiSettingsBillingUsageByInferenceSessionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.billing['usage-by-inference-session'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsBillingUsageByInferenceSession<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsBillingUsageByInferenceSessionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSettingsBillingUsageByInferenceSessionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiSettingsBillingUsageJobsQueryKey() {
  return ['api', '/api/settings/billing/usage/jobs'] as const
}

export function getApiSettingsBillingUsageJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingUsageJobsQueryKey>
  >({
    queryKey: getApiSettingsBillingUsageJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.settings.billing.usage.jobs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSettingsBillingUsageJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSettingsBillingUsageJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSettingsBillingUsageJobsQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiUsersUsernameOverviewQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
) {
  return ['api', '/api/users/:username/overview', args] as const
}

export function getApiUsersUsernameOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameOverviewQueryKey>
  >({
    queryKey: getApiUsersUsernameOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameOverviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameOverviewQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameSocialsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
) {
  return ['api', '/api/users/:username/socials', args] as const
}

export function getApiUsersUsernameSocialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameSocialsQueryKey>
  >({
    queryKey: getApiUsersUsernameSocialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].socials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameSocials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameSocialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameSocialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameAvatarQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
) {
  return ['api', '/api/users/:username/avatar', args] as const
}

export function getApiUsersUsernameAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameAvatarQueryKey>
  >({
    queryKey: getApiUsersUsernameAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].avatar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameAvatarQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameAvatarQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameLikesQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
) {
  return ['api', '/api/users/:username/likes', args] as const
}

export function getApiUsersUsernameLikesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameLikesQueryKey>
  >({
    queryKey: getApiUsersUsernameLikesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].likes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameLikesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameLikesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameFollowersQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
) {
  return ['api', '/api/users/:username/followers', args] as const
}

export function getApiUsersUsernameFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowersQueryKey>
  >({
    queryKey: getApiUsersUsernameFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameFollowersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameFollowingQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
) {
  return ['api', '/api/users/:username/following', args] as const
}

export function getApiUsersUsernameFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowingQueryKey>
  >({
    queryKey: getApiUsersUsernameFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameFollowingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiUsersUsernameFollowingOrgsQueryKey(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
) {
  return ['api', '/api/users/:username/following/orgs', args] as const
}

export function getApiUsersUsernameFollowingOrgsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowingOrgsQueryKey>
  >({
    queryKey: getApiUsersUsernameFollowingOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.users[':username'].following.orgs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiUsersUsernameFollowingOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiUsersUsernameFollowingOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiUsersUsernameFollowingOrgsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiOrganizationsNameSocialsQueryKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
) {
  return ['api', '/api/organizations/:name/socials', args] as const
}

export function getApiOrganizationsNameSocialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSocialsQueryKey>
  >({
    queryKey: getApiOrganizationsNameSocialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.organizations[':name'].socials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrganizationsNameSocials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrganizationsNameSocialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiOrganizationsNameSocialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiInferenceEndpointsNamespaceAuthCheckPermsMutationKey() {
  return ['api', '/api/inference-endpoints/:namespace/auth-check/:perms', 'POST'] as const
}

export function getPostApiInferenceEndpointsNamespaceAuthCheckPermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiInferenceEndpointsNamespaceAuthCheckPermsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
      >,
    ) {
      return parseResponse(
        client.api['inference-endpoints'][':namespace']['auth-check'][':perms'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiInferenceEndpointsNamespaceAuthCheckPerms<
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
                  (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInferenceEndpointsNamespaceAuthCheckPermsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsMutationKey() {
  return ['api', '/api/inference-endpoints/:namespace/:endpoint/auth-check/:perms', 'POST'] as const
}

export function getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
      >,
    ) {
      return parseResponse(
        client.api['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiInferenceEndpointsNamespaceEndpointAuthCheckPerms<
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
                  (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiJobsNamespaceAuthCheckPermsMutationKey() {
  return ['api', '/api/jobs/:namespace/auth-check/:perms', 'POST'] as const
}

export function getPostApiJobsNamespaceAuthCheckPermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsNamespaceAuthCheckPermsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']
      >,
    ) {
      return parseResponse(
        client.api.jobs[':namespace']['auth-check'][':perms'].$post(args, options),
      )
    },
  })
}

export function injectPostApiJobsNamespaceAuthCheckPerms<
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
                ReturnType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsNamespaceAuthCheckPermsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiJobsNamespaceJobIdAuthCheckPermsMutationKey() {
  return ['api', '/api/jobs/:namespace/:jobId/auth-check/:perms', 'POST'] as const
}

export function getPostApiJobsNamespaceJobIdAuthCheckPermsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsNamespaceJobIdAuthCheckPermsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
      >,
    ) {
      return parseResponse(
        client.api.jobs[':namespace'][':jobId']['auth-check'][':perms'].$post(args, options),
      )
    },
  })
}

export function injectPostApiJobsNamespaceJobIdAuthCheckPerms<
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
                  (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsNamespaceJobIdAuthCheckPermsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiModelsNamespaceRepoTreesizeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function getApiModelsNamespaceRepoTreesizeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoTreesizeRevPathQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoTreesizeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoTreesizeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoTreesizeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoTreesizeRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoTreesizeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function getApiSpacesNamespaceRepoTreesizeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoTreesizeRevPathQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoTreesizeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoTreesizeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoTreesizeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoTreesizeRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function getApiDatasetsNamespaceRepoTreesizeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoTreesizeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoTreesizeRevPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/safetensors-metadata/:path', args] as const
}

export function getApiModelsNamespaceRepoSafetensorsMetadataPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoSafetensorsMetadataPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoSafetensorsMetadataPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoLfsFilesQueryKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/lfs-files', args] as const
}

export function getApiModelsNamespaceRepoLfsFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoLfsFilesQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoLfsFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['lfs-files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoLfsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoLfsFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoLfsFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoLfsFilesQueryKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/lfs-files', args] as const
}

export function getApiDatasetsNamespaceRepoLfsFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoLfsFilesQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoLfsFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['lfs-files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoLfsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoLfsFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoLfsFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoLfsFilesQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/lfs-files', args] as const
}

export function getApiSpacesNamespaceRepoLfsFilesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoLfsFilesQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoLfsFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['lfs-files'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoLfsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoLfsFilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoLfsFilesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiModelsNamespaceRepoLfsFilesDuplicateMutationKey() {
  return ['api', '/api/models/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoLfsFilesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoLfsFilesDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoLfsFilesDuplicate<
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
                  (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoLfsFilesDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiKernelsNamespaceRepoLfsFilesDuplicateMutationKey() {
  return ['api', '/api/kernels/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function getPostApiKernelsNamespaceRepoLfsFilesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiKernelsNamespaceRepoLfsFilesDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiKernelsNamespaceRepoLfsFilesDuplicate<
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
                  (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiKernelsNamespaceRepoLfsFilesDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoLfsFilesDuplicateMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoLfsFilesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoLfsFilesDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoLfsFilesDuplicate<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoLfsFilesDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSpacesNamespaceRepoLfsFilesDuplicateMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoLfsFilesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoLfsFilesDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoLfsFilesDuplicate<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoLfsFilesDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiBucketsNamespaceRepoLfsFilesDuplicateMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function getPostApiBucketsNamespaceRepoLfsFilesDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiBucketsNamespaceRepoLfsFilesDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['lfs-files'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiBucketsNamespaceRepoLfsFilesDuplicate<
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
                  (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBucketsNamespaceRepoLfsFilesDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiModelsNamespaceRepoCommitsRevQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/commits/:rev', args] as const
}

export function getApiModelsNamespaceRepoCommitsRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoCommitsRevQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoCommitsRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].commits[':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoCommitsRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoCommitsRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoCommitsRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoCommitsRevQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/commits/:rev', args] as const
}

export function getApiSpacesNamespaceRepoCommitsRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoCommitsRevQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoCommitsRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoCommitsRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoCommitsRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoCommitsRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoCommitsRevQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/commits/:rev', args] as const
}

export function getApiDatasetsNamespaceRepoCommitsRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoCommitsRevQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoCommitsRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoCommitsRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoCommitsRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoCommitsRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoRefsQueryKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/refs', args] as const
}

export function getApiModelsNamespaceRepoRefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoRefsQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoRefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].refs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoRefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoRefsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoRefsQueryKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/refs', args] as const
}

export function getApiDatasetsNamespaceRepoRefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoRefsQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoRefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].refs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoRefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoRefsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoRefsQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/refs', args] as const
}

export function getApiSpacesNamespaceRepoRefsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoRefsQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoRefsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].refs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoRefsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoRefsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoCompareCompareQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/compare/:compare', args] as const
}

export function getApiModelsNamespaceRepoCompareCompareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoCompareCompareQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoCompareCompareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].compare[':compare'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoCompareCompare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoCompareCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoCompareCompareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoCompareCompareQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/compare/:compare', args] as const
}

export function getApiDatasetsNamespaceRepoCompareCompareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoCompareCompareQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoCompareCompareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoCompareCompare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoCompareCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoCompareCompareQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoCompareCompareQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/compare/:compare', args] as const
}

export function getApiSpacesNamespaceRepoCompareCompareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoCompareCompareQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoCompareCompareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoCompareCompare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoCompareCompareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoCompareCompareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiModelsNamespaceRepoPathsInfoRevMutationKey() {
  return ['api', '/api/models/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoPathsInfoRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoPathsInfoRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoPathsInfoRev<
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
                  (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoPathsInfoRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoPathsInfoRevMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoPathsInfoRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoPathsInfoRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoPathsInfoRev<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoPathsInfoRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSpacesNamespaceRepoPathsInfoRevMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoPathsInfoRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoPathsInfoRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['paths-info'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoPathsInfoRev<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoPathsInfoRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiModelsNamespaceRepoPreuploadRevMutationKey() {
  return ['api', '/api/models/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoPreuploadRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoPreuploadRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].preupload[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoPreuploadRev<
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
                  (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoPreuploadRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSpacesNamespaceRepoPreuploadRevMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoPreuploadRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoPreuploadRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].preupload[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoPreuploadRev<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoPreuploadRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoPreuploadRevMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoPreuploadRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoPreuploadRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].preupload[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoPreuploadRev<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoPreuploadRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiModelsNamespaceRepoXetWriteTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function getApiModelsNamespaceRepoXetWriteTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoXetWriteTokenRevQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoXetWriteTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoXetWriteTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoXetWriteTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoXetWriteTokenRevQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function getApiSpacesNamespaceRepoXetWriteTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoXetWriteTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoXetWriteTokenRevQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function getApiDatasetsNamespaceRepoXetWriteTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoXetWriteTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoXetWriteTokenRevQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiBucketsNamespaceRepoXetWriteTokenQueryKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-write-token', args] as const
}

export function getApiBucketsNamespaceRepoXetWriteTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoXetWriteTokenQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoXetWriteTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepoXetWriteToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoXetWriteTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoXetWriteTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiContainersNamespaceRepoXetWriteTokenQueryKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-write-token', args] as const
}

export function getApiContainersNamespaceRepoXetWriteTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoXetWriteTokenQueryKey>
  >({
    queryKey: getApiContainersNamespaceRepoXetWriteTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['xet-write-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespaceRepoXetWriteToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceRepoXetWriteTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceRepoXetWriteTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoXetReadTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function getApiModelsNamespaceRepoXetReadTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoXetReadTokenRevQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoXetReadTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoXetReadTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoXetReadTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoXetReadTokenRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoXetReadTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function getApiSpacesNamespaceRepoXetReadTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoXetReadTokenRevQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoXetReadTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoXetReadTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoXetReadTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoXetReadTokenRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function getApiDatasetsNamespaceRepoXetReadTokenRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoXetReadTokenRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoXetReadTokenRevQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiBucketsNamespaceRepoXetReadTokenQueryKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-read-token', args] as const
}

export function getApiBucketsNamespaceRepoXetReadTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoXetReadTokenQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoXetReadTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepoXetReadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoXetReadTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoXetReadTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiContainersNamespaceRepoXetReadTokenQueryKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-read-token', args] as const
}

export function getApiContainersNamespaceRepoXetReadTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoXetReadTokenQueryKey>
  >({
    queryKey: getApiContainersNamespaceRepoXetReadTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['xet-read-token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespaceRepoXetReadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceRepoXetReadTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceRepoXetReadTokenQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiModelsNamespaceRepoCommitRevMutationKey() {
  return ['api', '/api/models/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoCommitRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoCommitRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].commit[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoCommitRev<
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
                  (typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoCommitRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoCommitRevMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoCommitRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoCommitRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].commit[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoCommitRev<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoCommitRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSpacesNamespaceRepoCommitRevMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoCommitRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoCommitRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].commit[':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoCommitRev<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoCommitRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiModelsNamespaceRepoResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/resource-group', args] as const
}

export function getApiModelsNamespaceRepoResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoResourceGroupQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoResourceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiModelsNamespaceRepoResourceGroupMutationKey() {
  return ['api', '/api/models/:namespace/:repo/resource-group', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoResourceGroup<
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
                  (typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSpacesNamespaceRepoResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/resource-group', args] as const
}

export function getApiSpacesNamespaceRepoResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoResourceGroupQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoResourceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiSpacesNamespaceRepoResourceGroupMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/resource-group', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoResourceGroup<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiDatasetsNamespaceRepoResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/resource-group', args] as const
}

export function getApiDatasetsNamespaceRepoResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoResourceGroupQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoResourceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoResourceGroupMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/resource-group', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoResourceGroup<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiBucketsNamespaceRepoResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/resource-group', args] as const
}

export function getApiBucketsNamespaceRepoResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoResourceGroupQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepoResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoResourceGroupQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiBucketsNamespaceRepoResourceGroupMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo/resource-group', 'POST'] as const
}

export function getPostApiBucketsNamespaceRepoResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBucketsNamespaceRepoResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiBucketsNamespaceRepoResourceGroup<
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
                  (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBucketsNamespaceRepoResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiContainersNamespaceRepoResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/resource-group', args] as const
}

export function getApiContainersNamespaceRepoResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoResourceGroupQueryKey>
  >({
    queryKey: getApiContainersNamespaceRepoResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespaceRepoResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceRepoResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceRepoResourceGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiContainersNamespaceRepoResourceGroupMutationKey() {
  return ['api', '/api/containers/:namespace/:repo/resource-group', 'POST'] as const
}

export function getPostApiContainersNamespaceRepoResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiContainersNamespaceRepoResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiContainersNamespaceRepoResourceGroup<
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
                  (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiContainersNamespaceRepoResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiModelsNamespaceRepoSuperSquashRevMutationKey() {
  return ['api', '/api/models/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoSuperSquashRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoSuperSquashRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoSuperSquashRev<
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
                  (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoSuperSquashRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoSuperSquashRevMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoSuperSquashRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoSuperSquashRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoSuperSquashRev<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoSuperSquashRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiSpacesNamespaceRepoSuperSquashRevMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function getPostApiSpacesNamespaceRepoSuperSquashRevMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSpacesNamespaceRepoSuperSquashRevMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
      >,
    ) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['super-squash'][':rev'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSpacesNamespaceRepoSuperSquashRev<
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
                  (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSpacesNamespaceRepoSuperSquashRevMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiModelsNamespaceRepoSettingsMutationKey() {
  return ['api', '/api/models/:namespace/:repo/settings', 'PUT'] as const
}

export function getPutApiModelsNamespaceRepoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiModelsNamespaceRepoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>,
    ) {
      return parseResponse(client.api.models[':namespace'][':repo'].settings.$put(args, options))
    },
  })
}

export function injectPutApiModelsNamespaceRepoSettings<
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
                ReturnType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiModelsNamespaceRepoSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiSpacesNamespaceRepoSettingsMutationKey() {
  return ['api', '/api/spaces/:namespace/:repo/settings', 'PUT'] as const
}

export function getPutApiSpacesNamespaceRepoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiSpacesNamespaceRepoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>,
    ) {
      return parseResponse(client.api.spaces[':namespace'][':repo'].settings.$put(args, options))
    },
  })
}

export function injectPutApiSpacesNamespaceRepoSettings<
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
                ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiSpacesNamespaceRepoSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiDatasetsNamespaceRepoSettingsMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/settings', 'PUT'] as const
}

export function getPutApiDatasetsNamespaceRepoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiDatasetsNamespaceRepoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']
      >,
    ) {
      return parseResponse(client.api.datasets[':namespace'][':repo'].settings.$put(args, options))
    },
  })
}

export function injectPutApiDatasetsNamespaceRepoSettings<
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
                ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiDatasetsNamespaceRepoSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/settings/trusted-publishers', args] as const
}

export function getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey>
  >({
    queryKey: getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRepoTypeNamespaceRepoSettingsTrustedPublishers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/settings/trusted-publishers', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoSettingsTrustedPublishers<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiModelsNamespaceRepoTreeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/tree/:rev/:path', args] as const
}

export function getApiModelsNamespaceRepoTreeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoTreeRevPathQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoTreeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoTreeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoTreeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoTreeRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoTreeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/tree/:rev/:path', args] as const
}

export function getApiSpacesNamespaceRepoTreeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoTreeRevPathQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoTreeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoTreeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoTreeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoTreeRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoTreeRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/tree/:rev/:path', args] as const
}

export function getApiDatasetsNamespaceRepoTreeRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoTreeRevPathQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoTreeRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoTreeRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoTreeRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoTreeRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoNotebookRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function getApiModelsNamespaceRepoNotebookRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoNotebookRevPathQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoNotebookRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoNotebookRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoNotebookRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoNotebookRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoNotebookRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function getApiDatasetsNamespaceRepoNotebookRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoNotebookRevPathQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoNotebookRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoNotebookRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoNotebookRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoNotebookRevPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoNotebookRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function getApiSpacesNamespaceRepoNotebookRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoNotebookRevPathQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoNotebookRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoNotebookRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoNotebookRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoNotebookRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoScanQueryKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/scan', args] as const
}

export function getApiModelsNamespaceRepoScanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoScanQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoScanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].scan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoScanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoScanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoScanQueryKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/scan', args] as const
}

export function getApiDatasetsNamespaceRepoScanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoScanQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoScanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].scan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoScanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoScanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoScanQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/scan', args] as const
}

export function getApiSpacesNamespaceRepoScanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoScanQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoScanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].scan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoScanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoScanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiKernelsNamespaceRepoScanQueryKey(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/kernels/:namespace/:repo/scan', args] as const
}

export function getApiKernelsNamespaceRepoScanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoScanQueryKey>
  >({
    queryKey: getApiKernelsNamespaceRepoScanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].scan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiKernelsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKernelsNamespaceRepoScanQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKernelsNamespaceRepoScanQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiRepoTypeNamespaceRepoDiscussionsQueryKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions', args] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsQueryKey>
  >({
    queryKey: getApiRepoTypeNamespaceRepoDiscussionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRepoTypeNamespaceRepoDiscussions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRepoTypeNamespaceRepoDiscussionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoDiscussionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions.$post(args, options),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoDiscussions<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num', args] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey>
  >({
    queryKey: getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRepoTypeNamespaceRepoDiscussionsNum<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRepoTypeNamespaceRepoDiscussionsNumQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/comment', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].comment.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoDiscussionsNumComment<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/status', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].status.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoDiscussionsNumStatus<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/title', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].title.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoDiscussionsNumTitle<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/storage', args] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey>
  >({
    queryKey: getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRepoTypeNamespaceRepoDiscussionsNumStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiKernelsQueryKey(args: InferRequestType<typeof client.api.kernels.$get>) {
  return ['api', '/api/kernels', args] as const
}

export function getApiKernelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.kernels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKernelsQueryKey>
  >({
    queryKey: getApiKernelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.kernels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiKernels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.kernels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKernelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiKernelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiKernelsNamespaceRepoQueryKey(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/kernels/:namespace/:repo', args] as const
}

export function getApiKernelsNamespaceRepoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoQueryKey>
  >({
    queryKey: getApiKernelsNamespaceRepoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiKernelsNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKernelsNamespaceRepoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKernelsNamespaceRepoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiKernelsNamespaceRepoRevisionRevQueryKey(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
) {
  return ['api', '/api/kernels/:namespace/:repo/revision/:rev', args] as const
}

export function getApiKernelsNamespaceRepoRevisionRevQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoRevisionRevQueryKey>
  >({
    queryKey: getApiKernelsNamespaceRepoRevisionRevQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiKernelsNamespaceRepoRevisionRev<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiKernelsNamespaceRepoRevisionRevQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiKernelsNamespaceRepoRevisionRevQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoLeaderboardQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/leaderboard', args] as const
}

export function getApiDatasetsNamespaceRepoLeaderboardQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoLeaderboardQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoLeaderboardQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].leaderboard.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoLeaderboard<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoLeaderboardQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoLeaderboardQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoJwtQueryKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/jwt', args] as const
}

export function getApiModelsNamespaceRepoJwtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoJwtQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoJwtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].jwt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoJwtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoJwtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoJwtQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/jwt', args] as const
}

export function getApiSpacesNamespaceRepoJwtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoJwtQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoJwtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].jwt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoJwtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoJwtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoJwtQueryKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/jwt', args] as const
}

export function getApiDatasetsNamespaceRepoJwtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoJwtQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoJwtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].jwt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoJwtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoJwtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiAgentHarnessesQueryKey() {
  return ['api', '/api/agent-harnesses'] as const
}

export function getApiAgentHarnessesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAgentHarnessesQueryKey>
  >({
    queryKey: getApiAgentHarnessesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api['agent-harnesses'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAgentHarnesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAgentHarnessesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAgentHarnessesQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiModelsTagsByTypeQueryKey(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
) {
  return ['api', '/api/models-tags-by-type', args] as const
}

export function getApiModelsTagsByTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsTagsByTypeQueryKey>
  >({
    queryKey: getApiModelsTagsByTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['models-tags-by-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsTagsByType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsTagsByTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiModelsTagsByTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiDatasetsTagsByTypeQueryKey(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
) {
  return ['api', '/api/datasets-tags-by-type', args] as const
}

export function getApiDatasetsTagsByTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsTagsByTypeQueryKey>
  >({
    queryKey: getApiDatasetsTagsByTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['datasets-tags-by-type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsTagsByType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsTagsByTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsTagsByTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiTrendingQueryKey(args: InferRequestType<typeof client.api.trending.$get>) {
  return ['api', '/api/trending', args] as const
}

export function getApiTrendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.trending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTrendingQueryKey>
  >({
    queryKey: getApiTrendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.trending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.trending.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTrendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTrendingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiQuicksearchQueryKey(
  args: InferRequestType<typeof client.api.quicksearch.$get>,
) {
  return ['api', '/api/quicksearch', args] as const
}

export function getApiQuicksearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.quicksearch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQuicksearchQueryKey>
  >({
    queryKey: getApiQuicksearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.quicksearch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiQuicksearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.quicksearch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiQuicksearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiQuicksearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiQuicksearchMutationKey() {
  return ['api', '/api/quicksearch', 'POST'] as const
}

export function getPostApiQuicksearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.quicksearch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiQuicksearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.quicksearch.$post>) {
      return parseResponse(client.api.quicksearch.$post(args, options))
    },
  })
}

export function injectPostApiQuicksearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.quicksearch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiQuicksearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiSpacesHardwareQueryKey() {
  return ['api', '/api/spaces/hardware'] as const
}

export function getApiSpacesHardwareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesHardwareQueryKey>
  >({
    queryKey: getApiSpacesHardwareQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces.hardware.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesHardwareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpacesHardwareQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiSpacesTemplatesQueryKey() {
  return ['api', '/api/spaces/templates'] as const
}

export function getApiSpacesTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesTemplatesQueryKey>
  >({
    queryKey: getApiSpacesTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpacesTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiSpacesZeroGpuQuotaQueryKey() {
  return ['api', '/api/spaces/zero-gpu/quota'] as const
}

export function getApiSpacesZeroGpuQuotaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesZeroGpuQuotaQueryKey>
  >({
    queryKey: getApiSpacesZeroGpuQuotaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces['zero-gpu'].quota.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesZeroGpuQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesZeroGpuQuotaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSpacesZeroGpuQuotaQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiSpacesNamespaceRepoSecretsQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/secrets', args] as const
}

export function getApiSpacesNamespaceRepoSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoSecretsQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoSecretsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiSpacesNamespaceRepoVariablesQueryKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/variables', args] as const
}

export function getApiSpacesNamespaceRepoVariablesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoVariablesQueryKey>
  >({
    queryKey: getApiSpacesNamespaceRepoVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].variables.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSpacesNamespaceRepoVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSpacesNamespaceRepoVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiSpacesNamespaceRepoVariablesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoDuplicateMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/duplicate', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].duplicate.$post(args, options),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoDuplicate<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/duplicate/status', args] as const
}

export function getApiRepoTypeNamespaceRepoDuplicateStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey>
  >({
    queryKey: getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiRepoTypeNamespaceRepoDuplicateStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiRepoTypeNamespaceRepoDuplicateStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiReposCreateMutationKey() {
  return ['api', '/api/repos/create', 'POST'] as const
}

export function getPostApiReposCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.repos.create.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.repos.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReposCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.repos.create.$post>) {
      return parseResponse(client.api.repos.create.$post(args, options))
    },
  })
}

export function injectPostApiReposCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.repos.create.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.repos.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiReposCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id', 'DELETE'] as const
}

export function getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedId<
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id', 'PATCH'] as const
}

export function getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedId<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id/hide', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].hide.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHide<
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedMutationKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed', 'POST'] as const
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo']['sql-console'].embed.$post(args, options),
      )
    },
  })
}

export function injectPostApiRepoTypeNamespaceRepoSqlConsoleEmbed<
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
                  (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getSpacesNamespaceRepoResolveRevPathQueryKey(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['spaces', '/spaces/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getSpacesNamespaceRepoResolveRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesNamespaceRepoResolveRevPathQueryKey>
  >({
    queryKey: getSpacesNamespaceRepoResolveRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSpacesNamespaceRepoResolveRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSpacesNamespaceRepoResolveRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSpacesNamespaceRepoResolveRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDatasetsNamespaceRepoResolveRevPathQueryKey(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getDatasetsNamespaceRepoResolveRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNamespaceRepoResolveRevPathQueryKey>
  >({
    queryKey: getDatasetsNamespaceRepoResolveRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasetsNamespaceRepoResolveRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsNamespaceRepoResolveRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatasetsNamespaceRepoResolveRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getNamespaceRepoResolveRevPathQueryKey(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':namespace', '/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getNamespaceRepoResolveRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespaceRepoResolveRevPathQueryKey>
  >({
    queryKey: getNamespaceRepoResolveRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNamespaceRepoResolveRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespaceRepoResolveRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNamespaceRepoResolveRevPathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/spaces/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheSpacesNamespaceRepoRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey>
  >({
    queryKey: getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiResolveCacheSpacesNamespaceRepoRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiResolveCacheSpacesNamespaceRepoRevPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/datasets/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheDatasetsNamespaceRepoRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey>
  >({
    queryKey: getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiResolveCacheDatasetsNamespaceRepoRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiResolveCacheDatasetsNamespaceRepoRevPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiResolveCacheModelsNamespaceRepoRevPathQueryKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/models/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheModelsNamespaceRepoRevPathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheModelsNamespaceRepoRevPathQueryKey>
  >({
    queryKey: getApiResolveCacheModelsNamespaceRepoRevPathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiResolveCacheModelsNamespaceRepoRevPath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiResolveCacheModelsNamespaceRepoRevPathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiResolveCacheModelsNamespaceRepoRevPathQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostNamespaceRepoAskAccessMutationKey() {
  return [':namespace', '/:namespace/:repo/ask-access', 'POST'] as const
}

export function getPostNamespaceRepoAskAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespaceRepoAskAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>,
    ) {
      return parseResponse(client[':namespace'][':repo']['ask-access'].$post(args, options))
    },
  })
}

export function injectPostNamespaceRepoAskAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostNamespaceRepoAskAccessMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostDatasetsNamespaceRepoAskAccessMutationKey() {
  return ['datasets', '/datasets/:namespace/:repo/ask-access', 'POST'] as const
}

export function getPostDatasetsNamespaceRepoAskAccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasetsNamespaceRepoAskAccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']
      >,
    ) {
      return parseResponse(
        client.datasets[':namespace'][':repo']['ask-access'].$post(args, options),
      )
    },
  })
}

export function injectPostDatasetsNamespaceRepoAskAccess<
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
                ReturnType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDatasetsNamespaceRepoAskAccessMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getNamespaceRepoUserAccessReportQueryKey(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
) {
  return [':namespace', '/:namespace/:repo/user-access-report', args] as const
}

export function getNamespaceRepoUserAccessReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespaceRepoUserAccessReportQueryKey>
  >({
    queryKey: getNamespaceRepoUserAccessReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':namespace'][':repo']['user-access-report'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNamespaceRepoUserAccessReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespaceRepoUserAccessReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getNamespaceRepoUserAccessReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getDatasetsNamespaceRepoUserAccessReportQueryKey(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
) {
  return ['datasets', '/datasets/:namespace/:repo/user-access-report', args] as const
}

export function getDatasetsNamespaceRepoUserAccessReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNamespaceRepoUserAccessReportQueryKey>
  >({
    queryKey: getDatasetsNamespaceRepoUserAccessReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':namespace'][':repo']['user-access-report'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasetsNamespaceRepoUserAccessReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsNamespaceRepoUserAccessReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDatasetsNamespaceRepoUserAccessReportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/user-access-request/:status', args] as const
}

export function getApiModelsNamespaceRepoUserAccessRequestStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey>
  >({
    queryKey: getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiModelsNamespaceRepoUserAccessRequestStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiModelsNamespaceRepoUserAccessRequestStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/user-access-request/:status', args] as const
}

export function getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey>
  >({
    queryKey: getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDatasetsNamespaceRepoUserAccessRequestStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiModelsNamespaceRepoUserAccessRequestBatchMutationKey() {
  return ['api', '/api/models/:namespace/:repo/user-access-request/batch', 'POST'] as const
}

export function getPostApiModelsNamespaceRepoUserAccessRequestBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiModelsNamespaceRepoUserAccessRequestBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['user-access-request'].batch.$post(args, options),
      )
    },
  })
}

export function injectPostApiModelsNamespaceRepoUserAccessRequestBatch<
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
                  (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiModelsNamespaceRepoUserAccessRequestBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiDatasetsNamespaceRepoUserAccessRequestBatchMutationKey() {
  return ['api', '/api/datasets/:namespace/:repo/user-access-request/batch', 'POST'] as const
}

export function getPostApiDatasetsNamespaceRepoUserAccessRequestBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDatasetsNamespaceRepoUserAccessRequestBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['user-access-request'].batch.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiDatasetsNamespaceRepoUserAccessRequestBatch<
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
                  (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDatasetsNamespaceRepoUserAccessRequestBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiDailyPapersQueryKey(
  args: InferRequestType<typeof client.api.daily_papers.$get>,
) {
  return ['api', '/api/daily_papers', args] as const
}

export function getApiDailyPapersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.daily_papers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDailyPapersQueryKey>
  >({
    queryKey: getApiDailyPapersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.daily_papers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDailyPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.daily_papers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDailyPapersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDailyPapersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiPapersQueryKey(args: InferRequestType<typeof client.api.papers.$get>) {
  return ['api', '/api/papers', args] as const
}

export function getApiPapersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.papers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPapersQueryKey>
  >({
    queryKey: getApiPapersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.papers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.papers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPapersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPapersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiPapersIndexMutationKey() {
  return ['api', '/api/papers/index', 'POST'] as const
}

export function getPostApiPapersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.papers.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPapersIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.papers.index.$post>) {
      return parseResponse(client.api.papers.index.$post(args, options))
    },
  })
}

export function injectPostApiPapersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.papers.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPapersIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiPapersPaperIdQueryKey(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
) {
  return ['api', '/api/papers/:paperId', args] as const
}

export function getApiPapersPaperIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPapersPaperIdQueryKey>
  >({
    queryKey: getApiPapersPaperIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.papers[':paperId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPapersPaperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPapersPaperIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPapersPaperIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiPapersPaperIdCommentMutationKey() {
  return ['api', '/api/papers/:paperId/comment', 'POST'] as const
}

export function getPostApiPapersPaperIdCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['comment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPapersPaperIdCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']>,
    ) {
      return parseResponse(client.api.papers[':paperId'].comment.$post(args, options))
    },
  })
}

export function injectPostApiPapersPaperIdComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.papers)[':paperId']['comment']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPapersPaperIdCommentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiPapersPaperIdCommentCommentIdReplyMutationKey() {
  return ['api', '/api/papers/:paperId/comment/:commentId/reply', 'POST'] as const
}

export function getPostApiPapersPaperIdCommentCommentIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPapersPaperIdCommentCommentIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
      >,
    ) {
      return parseResponse(
        client.api.papers[':paperId'].comment[':commentId'].reply.$post(args, options),
      )
    },
  })
}

export function injectPostApiPapersPaperIdCommentCommentIdReply<
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
                  (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPapersPaperIdCommentCommentIdReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiPapersPaperIdLinksMutationKey() {
  return ['api', '/api/papers/:paperId/links', 'POST'] as const
}

export function getPostApiPapersPaperIdLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['links']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPapersPaperIdLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']>,
    ) {
      return parseResponse(client.api.papers[':paperId'].links.$post(args, options))
    },
  })
}

export function injectPostApiPapersPaperIdLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.papers)[':paperId']['links']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPapersPaperIdLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiPapersPaperIdMediaMutationKey() {
  return ['api', '/api/papers/:paperId/media', 'POST'] as const
}

export function getPostApiPapersPaperIdMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['media']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPapersPaperIdMediaMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']>,
    ) {
      return parseResponse(client.api.papers[':paperId'].media.$post(args, options))
    },
  })
}

export function injectPostApiPapersPaperIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.papers)[':paperId']['media']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPapersPaperIdMediaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiPostsUsernamePostSlugCommentMutationKey() {
  return ['api', '/api/posts/:username/:postSlug/comment', 'POST'] as const
}

export function getPostApiPostsUsernamePostSlugCommentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPostsUsernamePostSlugCommentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.posts)[':username'][':postSlug']['comment']['$post']
      >,
    ) {
      return parseResponse(client.api.posts[':username'][':postSlug'].comment.$post(args, options))
    },
  })
}

export function injectPostApiPostsUsernamePostSlugComment<
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
                ReturnType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPostsUsernamePostSlugCommentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiPostsUsernamePostSlugCommentCommentIdReplyMutationKey() {
  return ['api', '/api/posts/:username/:postSlug/comment/:commentId/reply', 'POST'] as const
}

export function getPostApiPostsUsernamePostSlugCommentCommentIdReplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPostsUsernamePostSlugCommentCommentIdReplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
      >,
    ) {
      return parseResponse(
        client.api.posts[':username'][':postSlug'].comment[':commentId'].reply.$post(args, options),
      )
    },
  })
}

export function injectPostApiPostsUsernamePostSlugCommentCommentIdReply<
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
                  (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPostsUsernamePostSlugCommentCommentIdReplyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiCollectionsNamespaceSlugIdQueryKey(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}', args] as const
}

export function getApiCollectionsNamespaceSlugIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugIdQueryKey>
  >({
    queryKey: getApiCollectionsNamespaceSlugIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCollectionsNamespaceSlugId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCollectionsNamespaceSlugIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCollectionsNamespaceSlugIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPatchApiCollectionsNamespaceSlugIdMutationKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}', 'PATCH'] as const
}

export function getPatchApiCollectionsNamespaceSlugIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCollectionsNamespaceSlugIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>,
    ) {
      return parseResponse(client.api.collections[':namespace'][':slug-{id}'].$patch(args, options))
    },
  })
}

export function injectPatchApiCollectionsNamespaceSlugId<
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
                ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiCollectionsNamespaceSlugIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiCollectionsNamespaceSlugQueryKey(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
) {
  return ['api', '/api/collections/:namespace/:slug', args] as const
}

export function getApiCollectionsNamespaceSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugQueryKey>
  >({
    queryKey: getApiCollectionsNamespaceSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.collections[':namespace'][':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCollectionsNamespaceSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCollectionsNamespaceSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCollectionsNamespaceSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPatchApiCollectionsNamespaceSlugMutationKey() {
  return ['api', '/api/collections/:namespace/:slug', 'PATCH'] as const
}

export function getPatchApiCollectionsNamespaceSlugMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCollectionsNamespaceSlugMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>,
    ) {
      return parseResponse(client.api.collections[':namespace'][':slug'].$patch(args, options))
    },
  })
}

export function injectPatchApiCollectionsNamespaceSlug<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiCollectionsNamespaceSlugMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiCollectionsNamespaceSlugIdItemsMutationKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}/items', 'POST'] as const
}

export function getPostApiCollectionsNamespaceSlugIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCollectionsNamespaceSlugIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}'].items.$post(args, options),
      )
    },
  })
}

export function injectPostApiCollectionsNamespaceSlugIdItems<
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
                  (typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCollectionsNamespaceSlugIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiCollectionsNamespaceSlugItemsMutationKey() {
  return ['api', '/api/collections/:namespace/:slug/items', 'POST'] as const
}

export function getPostApiCollectionsNamespaceSlugItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCollectionsNamespaceSlugItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.collections)[':namespace'][':slug']['items']['$post']
      >,
    ) {
      return parseResponse(client.api.collections[':namespace'][':slug'].items.$post(args, options))
    },
  })
}

export function injectPostApiCollectionsNamespaceSlugItems<
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
                ReturnType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCollectionsNamespaceSlugItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiCollectionsQueryKey(
  args: InferRequestType<typeof client.api.collections.$get>,
) {
  return ['api', '/api/collections', args] as const
}

export function getApiCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsQueryKey>
  >({
    queryKey: getApiCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiCollectionsMutationKey() {
  return ['api', '/api/collections', 'POST'] as const
}

export function getPostApiCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.collections.$post>) {
      return parseResponse(client.api.collections.$post(args, options))
    },
  })
}

export function injectPostApiCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiCollectionsNamespaceSlugIdResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}/resource-group', args] as const
}

export function getApiCollectionsNamespaceSlugIdResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugIdResourceGroupQueryKey>
  >({
    queryKey: getApiCollectionsNamespaceSlugIdResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCollectionsNamespaceSlugIdResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCollectionsNamespaceSlugIdResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCollectionsNamespaceSlugIdResourceGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiCollectionsNamespaceSlugIdResourceGroupMutationKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}/resource-group', 'POST'] as const
}

export function getPostApiCollectionsNamespaceSlugIdResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCollectionsNamespaceSlugIdResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiCollectionsNamespaceSlugIdResourceGroup<
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
                  (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCollectionsNamespaceSlugIdResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiCollectionsNamespaceSlugResourceGroupQueryKey(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
) {
  return ['api', '/api/collections/:namespace/:slug/resource-group', args] as const
}

export function getApiCollectionsNamespaceSlugResourceGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugResourceGroupQueryKey>
  >({
    queryKey: getApiCollectionsNamespaceSlugResourceGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.collections[':namespace'][':slug']['resource-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCollectionsNamespaceSlugResourceGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCollectionsNamespaceSlugResourceGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiCollectionsNamespaceSlugResourceGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  })
}

export function getPostApiCollectionsNamespaceSlugResourceGroupMutationKey() {
  return ['api', '/api/collections/:namespace/:slug/resource-group', 'POST'] as const
}

export function getPostApiCollectionsNamespaceSlugResourceGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCollectionsNamespaceSlugResourceGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
      >,
    ) {
      return parseResponse(
        client.api.collections[':namespace'][':slug']['resource-group'].$post(args, options),
      )
    },
  })
}

export function injectPostApiCollectionsNamespaceSlugResourceGroup<
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
                  (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCollectionsNamespaceSlugResourceGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiBucketsNamespaceRepoQueryKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/buckets/:namespace/:repo', args] as const
}

export function getApiBucketsNamespaceRepoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiBucketsNamespaceRepoMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo', 'POST'] as const
}

export function getPostApiBucketsNamespaceRepoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBucketsNamespaceRepoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>,
    ) {
      return parseResponse(client.api.buckets[':namespace'][':repo'].$post(args, options))
    },
  })
}

export function injectPostApiBucketsNamespaceRepo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBucketsNamespaceRepoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiContainersNamespaceRepoQueryKey(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/containers/:namespace/:repo', args] as const
}

export function getApiContainersNamespaceRepoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoQueryKey>
  >({
    queryKey: getApiContainersNamespaceRepoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'][':repo'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceRepoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceRepoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiContainersNamespaceRepoMutationKey() {
  return ['api', '/api/containers/:namespace/:repo', 'POST'] as const
}

export function getPostApiContainersNamespaceRepoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiContainersNamespaceRepoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>,
    ) {
      return parseResponse(client.api.containers[':namespace'][':repo'].$post(args, options))
    },
  })
}

export function injectPostApiContainersNamespaceRepo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiContainersNamespaceRepoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiBucketsNamespaceRepoSettingsMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo/settings', 'PUT'] as const
}

export function getPutApiBucketsNamespaceRepoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiBucketsNamespaceRepoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']
      >,
    ) {
      return parseResponse(client.api.buckets[':namespace'][':repo'].settings.$put(args, options))
    },
  })
}

export function injectPutApiBucketsNamespaceRepoSettings<
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
                ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiBucketsNamespaceRepoSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiContainersNamespaceRepoSettingsMutationKey() {
  return ['api', '/api/containers/:namespace/:repo/settings', 'PUT'] as const
}

export function getPutApiContainersNamespaceRepoSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.containers)[':namespace'][':repo']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiContainersNamespaceRepoSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.containers)[':namespace'][':repo']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.api.containers[':namespace'][':repo'].settings.$put(args, options),
      )
    },
  })
}

export function injectPutApiContainersNamespaceRepoSettings<
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
                  (typeof client.api.containers)[':namespace'][':repo']['settings']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiContainersNamespaceRepoSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiBucketsNamespaceQueryKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
) {
  return ['api', '/api/buckets/:namespace', args] as const
}

export function getApiBucketsNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceQueryKey>
  >({
    queryKey: getApiBucketsNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBucketsNamespaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getApiContainersNamespaceQueryKey(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
) {
  return ['api', '/api/containers/:namespace', args] as const
}

export function getApiContainersNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceQueryKey>
  >({
    queryKey: getApiContainersNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getBucketsNamespaceRepoResolvePathQueryKey(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function getBucketsNamespaceRepoResolvePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsNamespaceRepoResolvePathQueryKey>
  >({
    queryKey: getBucketsNamespaceRepoResolvePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.buckets[':namespace'][':repo'].resolve[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectBucketsNamespaceRepoResolvePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBucketsNamespaceRepoResolvePathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getBucketsNamespaceRepoResolvePathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getContainersNamespaceRepoResolvePathQueryKey(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['containers', '/containers/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function getContainersNamespaceRepoResolvePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersNamespaceRepoResolvePathQueryKey>
  >({
    queryKey: getContainersNamespaceRepoResolvePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.containers[':namespace'][':repo'].resolve[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectContainersNamespaceRepoResolvePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContainersNamespaceRepoResolvePathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getContainersNamespaceRepoResolvePathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiBucketsNamespaceRepoBatchMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo/batch', 'POST'] as const
}

export function getPostApiBucketsNamespaceRepoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBucketsNamespaceRepoBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>,
    ) {
      return parseResponse(client.api.buckets[':namespace'][':repo'].batch.$post(args, options))
    },
  })
}

export function injectPostApiBucketsNamespaceRepoBatch<
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
                ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBucketsNamespaceRepoBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiContainersNamespaceRepoBatchMutationKey() {
  return ['api', '/api/containers/:namespace/:repo/batch', 'POST'] as const
}

export function getPostApiContainersNamespaceRepoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiContainersNamespaceRepoBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.containers)[':namespace'][':repo']['batch']['$post']
      >,
    ) {
      return parseResponse(client.api.containers[':namespace'][':repo'].batch.$post(args, options))
    },
  })
}

export function injectPostApiContainersNamespaceRepoBatch<
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
                ReturnType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiContainersNamespaceRepoBatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiBucketsNamespaceRepoTreePathQueryKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/tree/:path', args] as const
}

export function getApiBucketsNamespaceRepoTreePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoTreePathQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoTreePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].tree[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepoTreePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoTreePathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoTreePathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiContainersNamespaceRepoTreePathQueryKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/tree/:path', args] as const
}

export function getApiContainersNamespaceRepoTreePathQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoTreePathQueryKey>
  >({
    queryKey: getApiContainersNamespaceRepoTreePathQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.containers[':namespace'][':repo'].tree[':path'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiContainersNamespaceRepoTreePath<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiContainersNamespaceRepoTreePathQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiContainersNamespaceRepoTreePathQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiBucketsNamespaceRepoEventsQueryKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
) {
  return ['api', '/api/buckets/:namespace/:repo/events', args] as const
}

export function getApiBucketsNamespaceRepoEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoEventsQueryKey>
  >({
    queryKey: getApiBucketsNamespaceRepoEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBucketsNamespaceRepoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBucketsNamespaceRepoEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiBucketsNamespaceRepoEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiBucketsNamespaceRepoPathsInfoMutationKey() {
  return ['api', '/api/buckets/:namespace/:repo/paths-info', 'POST'] as const
}

export function getPostApiBucketsNamespaceRepoPathsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBucketsNamespaceRepoPathsInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']
      >,
    ) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['paths-info'].$post(args, options),
      )
    },
  })
}

export function injectPostApiBucketsNamespaceRepoPathsInfo<
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
                  (typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBucketsNamespaceRepoPathsInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiContainersNamespaceRepoPathsInfoMutationKey() {
  return ['api', '/api/containers/:namespace/:repo/paths-info', 'POST'] as const
}

export function getPostApiContainersNamespaceRepoPathsInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiContainersNamespaceRepoPathsInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']
      >,
    ) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['paths-info'].$post(args, options),
      )
    },
  })
}

export function injectPostApiContainersNamespaceRepoPathsInfo<
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
                  (typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiContainersNamespaceRepoPathsInfoMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiJobsHardwareQueryKey() {
  return ['api', '/api/jobs/hardware'] as const
}

export function getApiJobsHardwareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsHardwareQueryKey>
  >({
    queryKey: getApiJobsHardwareQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs.hardware.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJobsHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsHardwareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsHardwareQueryOptions<TData, TError>(clientOptions), ...query }
  })
}

export function getApiJobsNamespaceQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
) {
  return ['api', '/api/jobs/:namespace', args] as const
}

export function getApiJobsNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceQueryKey>
  >({
    queryKey: getApiJobsNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJobsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsNamespaceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  })
}

export function getPostApiJobsNamespaceMutationKey() {
  return ['api', '/api/jobs/:namespace', 'POST'] as const
}

export function getPostApiJobsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsNamespaceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.jobs)[':namespace']['$post']>) {
      return parseResponse(client.api.jobs[':namespace'].$post(args, options))
    },
  })
}

export function injectPostApiJobsNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsNamespaceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiJobsNamespaceCountQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
) {
  return ['api', '/api/jobs/:namespace/count', args] as const
}

export function getApiJobsNamespaceCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceCountQueryKey>
  >({
    queryKey: getApiJobsNamespaceCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':namespace'].count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJobsNamespaceCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsNamespaceCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiJobsNamespaceCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getApiJobsNamespaceJobIdQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
) {
  return ['api', '/api/jobs/:namespace/:jobId', args] as const
}

export function getApiJobsNamespaceJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceJobIdQueryKey>
  >({
    queryKey: getApiJobsNamespaceJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':namespace'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJobsNamespaceJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJobsNamespaceJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiJobsNamespaceJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiJobsNamespaceJobIdCancelMutationKey() {
  return ['api', '/api/jobs/:namespace/:jobId/cancel', 'POST'] as const
}

export function getPostApiJobsNamespaceJobIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsNamespaceJobIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':namespace'][':jobId'].cancel.$post(args, options))
    },
  })
}

export function injectPostApiJobsNamespaceJobIdCancel<
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
                ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsNamespaceJobIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiJobsNamespaceJobIdDuplicateMutationKey() {
  return ['api', '/api/jobs/:namespace/:jobId/duplicate', 'POST'] as const
}

export function getPostApiJobsNamespaceJobIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsNamespaceJobIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']
      >,
    ) {
      return parseResponse(client.api.jobs[':namespace'][':jobId'].duplicate.$post(args, options))
    },
  })
}

export function injectPostApiJobsNamespaceJobIdDuplicate<
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
                ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsNamespaceJobIdDuplicateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiJobsNamespaceJobIdLabelsMutationKey() {
  return ['api', '/api/jobs/:namespace/:jobId/labels', 'PUT'] as const
}

export function getPutApiJobsNamespaceJobIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiJobsNamespaceJobIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>,
    ) {
      return parseResponse(client.api.jobs[':namespace'][':jobId'].labels.$put(args, options))
    },
  })
}

export function injectPutApiJobsNamespaceJobIdLabels<
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
                ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiJobsNamespaceJobIdLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiJobsNamespaceJobIdExposeMutationKey() {
  return ['api', '/api/jobs/:namespace/:jobId/expose', 'PUT'] as const
}

export function getPutApiJobsNamespaceJobIdExposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiJobsNamespaceJobIdExposeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>,
    ) {
      return parseResponse(client.api.jobs[':namespace'][':jobId'].expose.$put(args, options))
    },
  })
}

export function injectPutApiJobsNamespaceJobIdExpose<
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
                ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiJobsNamespaceJobIdExposeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiScheduledJobsNamespaceQueryKey(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
) {
  return ['api', '/api/scheduled-jobs/:namespace', args] as const
}

export function getApiScheduledJobsNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScheduledJobsNamespaceQueryKey>
  >({
    queryKey: getApiScheduledJobsNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiScheduledJobsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiScheduledJobsNamespaceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiScheduledJobsNamespaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiScheduledJobsNamespaceMutationKey() {
  return ['api', '/api/scheduled-jobs/:namespace', 'POST'] as const
}

export function getPostApiScheduledJobsNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiScheduledJobsNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>,
    ) {
      return parseResponse(client.api['scheduled-jobs'][':namespace'].$post(args, options))
    },
  })
}

export function injectPostApiScheduledJobsNamespace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiScheduledJobsNamespaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getApiScheduledJobsNamespaceJobIdQueryKey(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
) {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId', args] as const
}

export function getApiScheduledJobsNamespaceJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScheduledJobsNamespaceJobIdQueryKey>
  >({
    queryKey: getApiScheduledJobsNamespaceJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiScheduledJobsNamespaceJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiScheduledJobsNamespaceJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiScheduledJobsNamespaceJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  })
}

export function getPostApiScheduledJobsNamespaceJobIdRunMutationKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/run', 'POST'] as const
}

export function getPostApiScheduledJobsNamespaceJobIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiScheduledJobsNamespaceJobIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'][':jobId'].run.$post(args, options),
      )
    },
  })
}

export function injectPostApiScheduledJobsNamespaceJobIdRun<
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
                  (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiScheduledJobsNamespaceJobIdRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPostApiScheduledJobsNamespaceJobIdScheduleMutationKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/schedule', 'POST'] as const
}

export function getPostApiScheduledJobsNamespaceJobIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiScheduledJobsNamespaceJobIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
      >,
    ) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'][':jobId'].schedule.$post(args, options),
      )
    },
  })
}

export function injectPostApiScheduledJobsNamespaceJobIdSchedule<
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
                  (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiScheduledJobsNamespaceJobIdScheduleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}

export function getPutApiScheduledJobsNamespaceJobIdLabelsMutationKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/labels', 'PUT'] as const
}

export function getPutApiScheduledJobsNamespaceJobIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiScheduledJobsNamespaceJobIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
      >,
    ) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'][':jobId'].labels.$put(args, options),
      )
    },
  })
}

export function injectPutApiScheduledJobsNamespaceJobIdLabels<
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
                  (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiScheduledJobsNamespaceJobIdLabelsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  })
}
