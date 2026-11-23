import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetApiNotificationsKey(
  args: InferRequestType<typeof client.api.notifications.$get>,
) {
  return ['api', '/api/notifications', args] as const
}

export function useGetApiNotifications<TError = unknown>(
  args: InferRequestType<typeof client.api.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiNotifications<TError = unknown>(
  args: InferRequestType<typeof client.api.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSettingsMcpKey() {
  return ['api', '/api/settings/mcp'] as const
}

export function useGetApiSettingsMcp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsMcpKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.mcp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsMcp<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSettingsMcpKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.mcp.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSettingsWebhooksKey() {
  return ['api', '/api/settings/webhooks'] as const
}

export function useGetApiSettingsWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSettingsWebhooksKey() {
  return ['api', '/api/settings/webhooks', 'POST'] as const
}

export function usePostApiSettingsWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.settings.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.settings.webhooks.$post> },
      ) => parseResponse(client.api.settings.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
) {
  return ['api', '/api/settings/webhooks/:webhookId', args] as const
}

export function useGetApiSettingsWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.settings.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.settings.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSettingsWebhooksWebhookIdKey() {
  return ['api', '/api/settings/webhooks/:webhookId', 'POST'] as const
}

export function usePostApiSettingsWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']> },
      ) => parseResponse(client.api.settings.webhooks[':webhookId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiSettingsWebhooksWebhookIdKey() {
  return ['api', '/api/settings/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteApiSettingsWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiSettingsWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>
        },
      ) => parseResponse(client.api.settings.webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSettingsWebhooksWebhookIdActionKey() {
  return ['api', '/api/settings/webhooks/:webhookId/:action', 'POST'] as const
}

export function usePostApiSettingsWebhooksWebhookIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsWebhooksWebhookIdActionKey()
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
            (typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.settings.webhooks[':webhookId'][':action'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSettingsWebhooksWebhookIdReplayLogIdKey() {
  return ['api', '/api/settings/webhooks/:webhookId/replay/:logId', 'POST'] as const
}

export function usePostApiSettingsWebhooksWebhookIdReplayLogId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsWebhooksWebhookIdReplayLogIdKey()
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
            (typeof client.api.settings.webhooks)[':webhookId']['replay'][':logId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.settings.webhooks[':webhookId'].replay[':logId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSettingsPapersClaimKey() {
  return ['api', '/api/settings/papers/claim', 'POST'] as const
}

export function usePostApiSettingsPapersClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.papers.claim.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.settings.papers.claim.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsPapersClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.settings.papers.claim.$post> },
      ) => parseResponse(client.api.settings.papers.claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsRepositoriesKey(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
) {
  return ['api', '/api/settings/repositories', args] as const
}

export function useGetApiSettingsRepositories<TError = unknown>(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsRepositories<TError = unknown>(
  args: InferRequestType<typeof client.api.settings.repositories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsRepositoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.repositories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameSettingsTokensKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
) {
  return ['api', '/api/organizations/:name/settings/tokens', args] as const
}

export function useGetApiOrganizationsNameSettingsTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].settings.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameSettingsTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].settings.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameSettingsRepositoriesKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/settings/repositories', args] as const
}

export function useGetApiOrganizationsNameSettingsRepositories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsRepositoriesKey(args)
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
                (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].settings.repositories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameSettingsRepositories<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsRepositoriesKey(args)
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
                (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].settings.repositories.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiOrganizationsNameSettingsSsoCredentialsKey() {
  return ['api', '/api/organizations/:name/settings/sso/credentials', 'PUT'] as const
}

export function usePutApiOrganizationsNameSettingsSsoCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOrganizationsNameSettingsSsoCredentialsKey()
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
            (typeof client.api.organizations)[':name']['settings']['sso']['credentials']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].settings.sso.credentials.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameAuditLogExportKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
) {
  return ['api', '/api/organizations/:name/audit-log/export', args] as const
}

export function useGetApiOrganizationsNameAuditLogExport<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameAuditLogExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['audit-log'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameAuditLogExport<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameAuditLogExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['audit-log'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameResourceGroupsResourceGroupIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', args] as const
}

export function useGetApiOrganizationsNameResourceGroupsResourceGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsResourceGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameResourceGroupsResourceGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsResourceGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameResourceGroupsResourceGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameResourceGroupsResourceGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameResourceGroupsResourceGroupIdKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/settings',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersKey() {
  return ['api', '/api/organizations/:name/resource-groups/:resourceGroupId/users', 'POST'] as const
}

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invite',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdInvite<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invite']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invite.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsKey(
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

export function useGetApiOrganizationsNameResourceGroupsResourceGroupIdInvitations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameResourceGroupsResourceGroupIdInvitations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitation/:id/resend',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResend<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitation'][':id']['resend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitation[
            ':id'
          ].resend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/users/:username',
    'DELETE',
  ] as const
}

export function useDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
            ':username'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameKey() {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/users/:username',
    'PATCH',
  ] as const
}

export function usePatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameKey()
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
            (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['users'][':username']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].users[
            ':username'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameResourceGroupsKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
) {
  return ['api', '/api/organizations/:name/resource-groups', args] as const
}

export function useGetApiOrganizationsNameResourceGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameResourceGroups<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsKey() {
  return ['api', '/api/organizations/:name/resource-groups', 'POST'] as const
}

export function usePostApiOrganizationsNameResourceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameResourceGroupsKey()
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
            (typeof client.api.organizations)[':name']['resource-groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameResourceGroupsSettingsKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups/settings', args] as const
}

export function useGetApiOrganizationsNameResourceGroupsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsSettingsKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameResourceGroupsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameResourceGroupsSettingsKey(args)
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
                (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameResourceGroupsSettingsKey() {
  return ['api', '/api/organizations/:name/resource-groups/settings', 'POST'] as const
}

export function usePostApiOrganizationsNameResourceGroupsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameResourceGroupsSettingsKey()
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
            (typeof client.api.organizations)[':name']['resource-groups']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['resource-groups'].settings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameSettingsNetworkSecurityKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/settings/network-security', args] as const
}

export function useGetApiOrganizationsNameSettingsNetworkSecurity<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsNetworkSecurityKey(args)
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
                (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].settings['network-security'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameSettingsNetworkSecurity<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSettingsNetworkSecurityKey(args)
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
                (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].settings['network-security'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameSettingsNetworkSecurityKey() {
  return ['api', '/api/organizations/:name/settings/network-security', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameSettingsNetworkSecurity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameSettingsNetworkSecurityKey()
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
            (typeof client.api.organizations)[':name']['settings']['network-security']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].settings['network-security'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameServiceAccountsKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
) {
  return ['api', '/api/organizations/:name/service-accounts', args] as const
}

export function useGetApiOrganizationsNameServiceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameServiceAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameServiceAccountsKey() {
  return ['api', '/api/organizations/:name/service-accounts', 'POST'] as const
}

export function usePostApiOrganizationsNameServiceAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameServiceAccountsKey()
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
            (typeof client.api.organizations)[':name']['service-accounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameServiceAccountsServiceAccountIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/service-accounts/:serviceAccountId', args] as const
}

export function useGetApiOrganizationsNameServiceAccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsServiceAccountIdKey(args)
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
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameServiceAccountsServiceAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsServiceAccountIdKey(args)
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
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdKey() {
  return ['api', '/api/organizations/:name/service-accounts/:serviceAccountId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameServiceAccountsServiceAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTokens<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function useDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
            ':tokenId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId',
    'PATCH',
  ] as const
}

export function usePatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
            ':tokenId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/tokens/:tokenId/rotate',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['tokens'][':tokenId']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].tokens[
            ':tokenId'
          ].rotate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersKey(
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

export function useGetApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersKey(args)
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
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
            'trusted-publishers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersKey(args)
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
                (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
            'trusted-publishers'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersKey() {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/trusted-publishers',
    'POST',
  ] as const
}

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersKey()
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
            (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
            'trusted-publishers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameAvatarKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
) {
  return ['api', '/api/organizations/:name/avatar', args] as const
}

export function useGetApiOrganizationsNameAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.organizations[':name'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.organizations[':name'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameMembersKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
) {
  return ['api', '/api/organizations/:name/members', args] as const
}

export function useGetApiOrganizationsNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2ServiceProviderConfigKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ServiceProviderConfig', args] as const
}

export function useGetApiOrganizationsNameScimV2ServiceProviderConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2ServiceProviderConfigKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2ServiceProviderConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2ServiceProviderConfigKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2ResourceTypesKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ResourceTypes', args] as const
}

export function useGetApiOrganizationsNameScimV2ResourceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2ResourceTypesKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.ResourceTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2ResourceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2ResourceTypesKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.ResourceTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2SchemasKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas', args] as const
}

export function useGetApiOrganizationsNameScimV2Schemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2SchemasKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2Schemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2SchemasKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Schemas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2SchemasSchemaIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas/:schemaId', args] as const
}

export function useGetApiOrganizationsNameScimV2SchemasSchemaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2SchemasSchemaIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2SchemasSchemaId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2SchemasSchemaIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2UsersKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users', args] as const
}

export function useGetApiOrganizationsNameScimV2Users<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2UsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2Users<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2UsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameScimV2UsersKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users', 'POST'] as const
}

export function usePostApiOrganizationsNameScimV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameScimV2UsersKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$post']
          >
        },
      ) => parseResponse(client.api.organizations[':name'].scim.v2.Users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2UsersUserIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', args] as const
}

export function useGetApiOrganizationsNameScimV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2UsersUserIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2UsersUserIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiOrganizationsNameScimV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'PUT'] as const
}

export function usePutApiOrganizationsNameScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOrganizationsNameScimV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameScimV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameScimV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameScimV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameScimV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2GroupsKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups', args] as const
}

export function useGetApiOrganizationsNameScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2GroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2GroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].scim.v2.Groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameScimV2GroupsKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups', 'POST'] as const
}

export function usePostApiOrganizationsNameScimV2Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameScimV2GroupsKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$post']
          >
        },
      ) =>
        parseResponse(client.api.organizations[':name'].scim.v2.Groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimV2GroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', args] as const
}

export function useGetApiOrganizationsNameScimV2GroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2GroupsGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimV2GroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimV2GroupsGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiOrganizationsNameScimV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'PUT'] as const
}

export function usePutApiOrganizationsNameScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOrganizationsNameScimV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameScimV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameScimV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameScimV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameScimV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimProvisioningV2UsersKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users', args] as const
}

export function useGetApiOrganizationsNameScimProvisioningV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2UsersKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimProvisioningV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2UsersKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameScimProvisioningV2UsersKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users', 'POST'] as const
}

export function usePostApiOrganizationsNameScimProvisioningV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameScimProvisioningV2UsersKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimProvisioningV2UsersUserIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', args] as const
}

export function useGetApiOrganizationsNameScimProvisioningV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2UsersUserIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimProvisioningV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2UsersUserIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiOrganizationsNameScimProvisioningV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'PUT'] as const
}

export function usePutApiOrganizationsNameScimProvisioningV2UsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOrganizationsNameScimProvisioningV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameScimProvisioningV2UsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users/:userId', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameScimProvisioningV2UsersUserId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimProvisioningV2GroupsKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups', args] as const
}

export function useGetApiOrganizationsNameScimProvisioningV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2GroupsKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimProvisioningV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2GroupsKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameScimProvisioningV2GroupsKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups', 'POST'] as const
}

export function usePostApiOrganizationsNameScimProvisioningV2Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameScimProvisioningV2GroupsKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', args] as const
}

export function useGetApiOrganizationsNameScimProvisioningV2GroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameScimProvisioningV2GroupsGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey(args)
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
                (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'PUT'] as const
}

export function usePutApiOrganizationsNameScimProvisioningV2GroupsGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'DELETE'] as const
}

export function useDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey() {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId', 'PATCH'] as const
}

export function usePatchApiOrganizationsNameScimProvisioningV2GroupsGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdKey()
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
            (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOauthRegisterKey() {
  return ['oauth', '/oauth/register', 'POST'] as const
}

export function usePostOauthRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.register.$post> }) =>
        parseResponse(client.oauth.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthDeviceKey() {
  return ['oauth', '/oauth/device', 'POST'] as const
}

export function usePostOauthDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.device.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.device.$post> }) =>
        parseResponse(client.oauth.device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthUserinfoKey() {
  return ['oauth', '/oauth/userinfo'] as const
}

export function useGetOauthUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthUserinfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOauthUserinfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.userinfo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthUserinfoKey() {
  return ['oauth', '/oauth/userinfo', 'POST'] as const
}

export function usePostOauthUserinfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthUserinfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.oauth.userinfo.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRegistryTokenKey(
  args: InferRequestType<typeof client.api.registry.token.$get>,
) {
  return ['api', '/api/registry/token', args] as const
}

export function useGetApiRegistryToken<TError = unknown>(
  args: InferRequestType<typeof client.api.registry.token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRegistryTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.registry.token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRegistryToken<TError = unknown>(
  args: InferRequestType<typeof client.api.registry.token.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRegistryTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.registry.token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBlogSlugCommentKey() {
  return ['api', '/api/blog/:slug/comment', 'POST'] as const
}

export function usePostApiBlogSlugComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.blog)[':slug']['comment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBlogSlugCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.blog)[':slug']['comment']['$post']> },
      ) => parseResponse(client.api.blog[':slug'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBlogSlugCommentCommentIdReplyKey() {
  return ['api', '/api/blog/:slug/comment/:commentId/reply', 'POST'] as const
}

export function usePostApiBlogSlugCommentCommentIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBlogSlugCommentCommentIdReplyKey()
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
            (typeof client.api.blog)[':slug']['comment'][':commentId']['reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.blog[':slug'].comment[':commentId'].reply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiBlogNamespaceSlugCommentKey() {
  return ['api', '/api/blog/:namespace/:slug/comment', 'POST'] as const
}

export function usePostApiBlogNamespaceSlugComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBlogNamespaceSlugCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>
        },
      ) => parseResponse(client.api.blog[':namespace'][':slug'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiBlogNamespaceSlugCommentCommentIdReplyKey() {
  return ['api', '/api/blog/:namespace/:slug/comment/:commentId/reply', 'POST'] as const
}

export function usePostApiBlogNamespaceSlugCommentCommentIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBlogNamespaceSlugCommentCommentIdReplyKey()
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
            (typeof client.api.blog)[':namespace'][':slug']['comment'][':commentId']['reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.blog[':namespace'][':slug'].comment[':commentId'].reply.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiBlogNamespaceSlugResourceGroupKey(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
) {
  return ['api', '/api/blog/:namespace/:slug/resource-group', args] as const
}

export function useGetApiBlogNamespaceSlugResourceGroup<TError = unknown>(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBlogNamespaceSlugResourceGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.blog[':namespace'][':slug']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBlogNamespaceSlugResourceGroup<TError = unknown>(
  args: InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBlogNamespaceSlugResourceGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.blog[':namespace'][':slug']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiBlogNamespaceSlugResourceGroupKey() {
  return ['api', '/api/blog/:namespace/:slug/resource-group', 'POST'] as const
}

export function usePostApiBlogNamespaceSlugResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBlogNamespaceSlugResourceGroupKey()
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
            (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.blog[':namespace'][':slug']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDocsKey() {
  return ['api', '/api/docs'] as const
}

export function useGetApiDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDocsSearchKey(args: InferRequestType<typeof client.api.docs.search.$get>) {
  return ['api', '/api/docs/search', args] as const
}

export function useGetApiDocsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.docs.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocsSearch<TError = unknown>(
  args: InferRequestType<typeof client.api.docs.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDocsSearchFullTextKey(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
) {
  return ['api', '/api/docs/search/full-text', args] as const
}

export function useGetApiDocsSearchFullText<TError = unknown>(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDocsSearchFullTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.search['full-text'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocsSearchFullText<TError = unknown>(
  args: InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDocsSearchFullTextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.docs.search['full-text'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiWhoamiV2Key() {
  return ['api', '/api/whoami-v2'] as const
}

export function useGetApiWhoamiV2<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWhoamiV2Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['whoami-v2'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWhoamiV2<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWhoamiV2Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['whoami-v2'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameBillingUsageByResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage-by-resource-group', args] as const
}

export function useGetApiOrganizationsNameBillingUsageByResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageByResourceGroupKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing['usage-by-resource-group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameBillingUsageByResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageByResourceGroupKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing['usage-by-resource-group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameBillingUsageByInferenceSessionKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage-by-inference-session', args] as const
}

export function useGetApiOrganizationsNameBillingUsageByInferenceSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageByInferenceSessionKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing['usage-by-inference-session'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameBillingUsageByInferenceSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageByInferenceSessionKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing['usage-by-inference-session'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameBillingUsageInferenceKey(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage/inference', args] as const
}

export function useGetApiOrganizationsNameBillingUsageInference<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageInferenceKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing.usage.inference.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameBillingUsageInference<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingUsageInferenceKey(args)
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
                (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.organizations[':name'].billing.usage.inference.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameBillingCreditsKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
) {
  return ['api', '/api/organizations/:name/billing/credits', args] as const
}

export function useGetApiOrganizationsNameBillingCredits<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].billing.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameBillingCredits<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameBillingCreditsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].billing.credits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkKey() {
  return ['api', '/api/organizations/:name/billing/prepaid-credits/purchase-link', 'POST'] as const
}

export function usePostApiOrganizationsNameBillingPrepaidCreditsPurchaseLink<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkKey()
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
            (typeof client.api.organizations)[':name']['billing']['prepaid-credits']['purchase-link']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.organizations[':name'].billing['prepaid-credits']['purchase-link'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsBillingCreditsKey() {
  return ['api', '/api/settings/billing/credits'] as const
}

export function useGetApiSettingsBillingCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingCreditsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.billing.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsBillingCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingCreditsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.settings.billing.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSettingsBillingPrepaidCreditsPurchaseLinkKey() {
  return ['api', '/api/settings/billing/prepaid-credits/purchase-link', 'POST'] as const
}

export function usePostApiSettingsBillingPrepaidCreditsPurchaseLink<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSettingsBillingPrepaidCreditsPurchaseLinkKey()
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
            (typeof client.api.settings.billing)['prepaid-credits']['purchase-link']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.settings.billing['prepaid-credits']['purchase-link'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiSettingsBillingUsageByInferenceSessionKey(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
) {
  return ['api', '/api/settings/billing/usage-by-inference-session', args] as const
}

export function useGetApiSettingsBillingUsageByInferenceSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingUsageByInferenceSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.settings.billing['usage-by-inference-session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsBillingUsageByInferenceSession<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingUsageByInferenceSessionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.settings.billing['usage-by-inference-session'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSettingsBillingUsageJobsKey() {
  return ['api', '/api/settings/billing/usage/jobs'] as const
}

export function useGetApiSettingsBillingUsageJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingUsageJobsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.settings.billing.usage.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSettingsBillingUsageJobs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSettingsBillingUsageJobsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.settings.billing.usage.jobs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameOverviewKey(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
) {
  return ['api', '/api/users/:username/overview', args] as const
}

export function useGetApiUsersUsernameOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameSocialsKey(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
) {
  return ['api', '/api/users/:username/socials', args] as const
}

export function useGetApiUsersUsernameSocials<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameSocialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].socials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameSocials<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameSocialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].socials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameAvatarKey(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
) {
  return ['api', '/api/users/:username/avatar', args] as const
}

export function useGetApiUsersUsernameAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameAvatar<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameAvatarKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].avatar.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameLikesKey(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
) {
  return ['api', '/api/users/:username/likes', args] as const
}

export function useGetApiUsersUsernameLikes<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameLikes<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameLikesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].likes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameFollowersKey(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
) {
  return ['api', '/api/users/:username/followers', args] as const
}

export function useGetApiUsersUsernameFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameFollowers<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameFollowingKey(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
) {
  return ['api', '/api/users/:username/following', args] as const
}

export function useGetApiUsersUsernameFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameFollowing<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.users[':username'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiUsersUsernameFollowingOrgsKey(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
) {
  return ['api', '/api/users/:username/following/orgs', args] as const
}

export function useGetApiUsersUsernameFollowingOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowingOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.users[':username'].following.orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiUsersUsernameFollowingOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiUsersUsernameFollowingOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.users[':username'].following.orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOrganizationsNameSocialsKey(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
) {
  return ['api', '/api/organizations/:name/socials', args] as const
}

export function useGetApiOrganizationsNameSocials<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSocialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].socials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrganizationsNameSocials<TError = unknown>(
  args: InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiOrganizationsNameSocialsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.organizations[':name'].socials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInferenceEndpointsNamespaceAuthCheckPermsKey() {
  return ['api', '/api/inference-endpoints/:namespace/auth-check/:perms', 'POST'] as const
}

export function usePostApiInferenceEndpointsNamespaceAuthCheckPerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInferenceEndpointsNamespaceAuthCheckPermsKey()
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
            (typeof client.api)['inference-endpoints'][':namespace']['auth-check'][':perms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['inference-endpoints'][':namespace']['auth-check'][':perms'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsKey() {
  return ['api', '/api/inference-endpoints/:namespace/:endpoint/auth-check/:perms', 'POST'] as const
}

export function usePostApiInferenceEndpointsNamespaceEndpointAuthCheckPerms<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsKey()
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
            (typeof client.api)['inference-endpoints'][':namespace'][':endpoint']['auth-check'][':perms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['inference-endpoints'][':namespace'][':endpoint']['auth-check'][
            ':perms'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiJobsNamespaceAuthCheckPermsKey() {
  return ['api', '/api/jobs/:namespace/auth-check/:perms', 'POST'] as const
}

export function usePostApiJobsNamespaceAuthCheckPerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsNamespaceAuthCheckPermsKey()
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
            (typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.jobs[':namespace']['auth-check'][':perms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiJobsNamespaceJobIdAuthCheckPermsKey() {
  return ['api', '/api/jobs/:namespace/:jobId/auth-check/:perms', 'POST'] as const
}

export function usePostApiJobsNamespaceJobIdAuthCheckPerms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsNamespaceJobIdAuthCheckPermsKey()
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
            (typeof client.api.jobs)[':namespace'][':jobId']['auth-check'][':perms']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.jobs[':namespace'][':jobId']['auth-check'][':perms'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoTreesizeRevPathKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function useGetApiModelsNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoTreesizeRevPathKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function useGetApiSpacesNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoTreesizeRevPathKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/treesize/:rev/:path', args] as const
}

export function useGetApiDatasetsNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoTreesizeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoTreesizeRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoSafetensorsMetadataPathKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/safetensors-metadata/:path', args] as const
}

export function useGetApiModelsNamespaceRepoSafetensorsMetadataPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoSafetensorsMetadataPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoSafetensorsMetadataPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoSafetensorsMetadataPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoLfsFilesKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/lfs-files', args] as const
}

export function useGetApiModelsNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoLfsFilesKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/lfs-files', args] as const
}

export function useGetApiDatasetsNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoLfsFilesKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/lfs-files', args] as const
}

export function useGetApiSpacesNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoLfsFiles<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoLfsFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['lfs-files'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoLfsFilesDuplicateKey() {
  return ['api', '/api/models/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoLfsFilesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoLfsFilesDuplicateKey()
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
            (typeof client.api.models)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo']['lfs-files'].duplicate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiKernelsNamespaceRepoLfsFilesDuplicateKey() {
  return ['api', '/api/kernels/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function usePostApiKernelsNamespaceRepoLfsFilesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKernelsNamespaceRepoLfsFilesDuplicateKey()
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
            (typeof client.api.kernels)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.kernels[':namespace'][':repo']['lfs-files'].duplicate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoLfsFilesDuplicateKey() {
  return ['api', '/api/datasets/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoLfsFilesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoLfsFilesDuplicateKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['lfs-files'].duplicate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoLfsFilesDuplicateKey() {
  return ['api', '/api/spaces/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoLfsFilesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoLfsFilesDuplicateKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['lfs-files'].duplicate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiBucketsNamespaceRepoLfsFilesDuplicateKey() {
  return ['api', '/api/buckets/:namespace/:repo/lfs-files/duplicate', 'POST'] as const
}

export function usePostApiBucketsNamespaceRepoLfsFilesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBucketsNamespaceRepoLfsFilesDuplicateKey()
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
            (typeof client.api.buckets)[':namespace'][':repo']['lfs-files']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['lfs-files'].duplicate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoCommitsRevKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/commits/:rev', args] as const
}

export function useGetApiModelsNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoCommitsRevKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/commits/:rev', args] as const
}

export function useGetApiSpacesNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoCommitsRevKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/commits/:rev', args] as const
}

export function useGetApiDatasetsNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoCommitsRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoCommitsRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoRefsKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/refs', args] as const
}

export function useGetApiModelsNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoRefsKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/refs', args] as const
}

export function useGetApiDatasetsNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoRefsKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/refs', args] as const
}

export function useGetApiSpacesNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoRefs<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoRefsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].refs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoCompareCompareKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/compare/:compare', args] as const
}

export function useGetApiModelsNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoCompareCompareKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/compare/:compare', args] as const
}

export function useGetApiDatasetsNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoCompareCompareKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/compare/:compare', args] as const
}

export function useGetApiSpacesNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoCompareCompare<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoCompareCompareKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoPathsInfoRevKey() {
  return ['api', '/api/models/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoPathsInfoRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoPathsInfoRevKey()
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
            (typeof client.api.models)[':namespace'][':repo']['paths-info'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo']['paths-info'][':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoPathsInfoRevKey() {
  return ['api', '/api/datasets/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoPathsInfoRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoPathsInfoRevKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['paths-info'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['paths-info'][':rev'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoPathsInfoRevKey() {
  return ['api', '/api/spaces/:namespace/:repo/paths-info/:rev', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoPathsInfoRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoPathsInfoRevKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['paths-info'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['paths-info'][':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoPreuploadRevKey() {
  return ['api', '/api/models/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoPreuploadRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoPreuploadRevKey()
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
            (typeof client.api.models)[':namespace'][':repo']['preupload'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo'].preupload[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoPreuploadRevKey() {
  return ['api', '/api/spaces/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoPreuploadRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoPreuploadRevKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['preupload'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].preupload[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoPreuploadRevKey() {
  return ['api', '/api/datasets/:namespace/:repo/preupload/:rev', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoPreuploadRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoPreuploadRevKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['preupload'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].preupload[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoXetWriteTokenRevKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function useGetApiModelsNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoXetWriteTokenRevKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function useGetApiSpacesNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoXetWriteTokenRevKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-write-token/:rev', args] as const
}

export function useGetApiDatasetsNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoXetWriteTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoXetWriteTokenRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoXetWriteTokenKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-write-token', args] as const
}

export function useGetApiBucketsNamespaceRepoXetWriteToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoXetWriteTokenKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepoXetWriteToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoXetWriteTokenKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiContainersNamespaceRepoXetWriteTokenKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-write-token', args] as const
}

export function useGetApiContainersNamespaceRepoXetWriteToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoXetWriteTokenKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['xet-write-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespaceRepoXetWriteToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoXetWriteTokenKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['xet-write-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoXetReadTokenRevKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function useGetApiModelsNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoXetReadTokenRevKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function useGetApiSpacesNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoXetReadTokenRevKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-read-token/:rev', args] as const
}

export function useGetApiDatasetsNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoXetReadTokenRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoXetReadTokenRevKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoXetReadTokenKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-read-token', args] as const
}

export function useGetApiBucketsNamespaceRepoXetReadToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoXetReadTokenKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepoXetReadToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoXetReadTokenKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiContainersNamespaceRepoXetReadTokenKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-read-token', args] as const
}

export function useGetApiContainersNamespaceRepoXetReadToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoXetReadTokenKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['xet-read-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespaceRepoXetReadToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoXetReadTokenKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['xet-read-token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoCommitRevKey() {
  return ['api', '/api/models/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoCommitRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoCommitRevKey()
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
            (typeof client.api.models)[':namespace'][':repo']['commit'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo'].commit[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoCommitRevKey() {
  return ['api', '/api/datasets/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoCommitRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoCommitRevKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['commit'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].commit[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoCommitRevKey() {
  return ['api', '/api/spaces/:namespace/:repo/commit/:rev', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoCommitRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoCommitRevKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['commit'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].commit[':rev'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/resource-group', args] as const
}

export function useGetApiModelsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoResourceGroupKey() {
  return ['api', '/api/models/:namespace/:repo/resource-group', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoResourceGroupKey()
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
            (typeof client.api.models)[':namespace'][':repo']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/resource-group', args] as const
}

export function useGetApiSpacesNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoResourceGroupKey() {
  return ['api', '/api/spaces/:namespace/:repo/resource-group', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoResourceGroupKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/resource-group', args] as const
}

export function useGetApiDatasetsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoResourceGroupKey() {
  return ['api', '/api/datasets/:namespace/:repo/resource-group', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoResourceGroupKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/resource-group', args] as const
}

export function useGetApiBucketsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiBucketsNamespaceRepoResourceGroupKey() {
  return ['api', '/api/buckets/:namespace/:repo/resource-group', 'POST'] as const
}

export function usePostApiBucketsNamespaceRepoResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBucketsNamespaceRepoResourceGroupKey()
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
            (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiContainersNamespaceRepoResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/resource-group', args] as const
}

export function useGetApiContainersNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespaceRepoResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoResourceGroupKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiContainersNamespaceRepoResourceGroupKey() {
  return ['api', '/api/containers/:namespace/:repo/resource-group', 'POST'] as const
}

export function usePostApiContainersNamespaceRepoResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiContainersNamespaceRepoResourceGroupKey()
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
            (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoSuperSquashRevKey() {
  return ['api', '/api/models/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoSuperSquashRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoSuperSquashRevKey()
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
            (typeof client.api.models)[':namespace'][':repo']['super-squash'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo']['super-squash'][':rev'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoSuperSquashRevKey() {
  return ['api', '/api/datasets/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoSuperSquashRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoSuperSquashRevKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['super-squash'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['super-squash'][':rev'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSpacesNamespaceRepoSuperSquashRevKey() {
  return ['api', '/api/spaces/:namespace/:repo/super-squash/:rev', 'POST'] as const
}

export function usePostApiSpacesNamespaceRepoSuperSquashRev<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSpacesNamespaceRepoSuperSquashRevKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['super-squash'][':rev']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.spaces[':namespace'][':repo']['super-squash'][':rev'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiModelsNamespaceRepoSettingsKey() {
  return ['api', '/api/models/:namespace/:repo/settings', 'PUT'] as const
}

export function usePutApiModelsNamespaceRepoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiModelsNamespaceRepoSettingsKey()
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
            (typeof client.api.models)[':namespace'][':repo']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.api.models[':namespace'][':repo'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiSpacesNamespaceRepoSettingsKey() {
  return ['api', '/api/spaces/:namespace/:repo/settings', 'PUT'] as const
}

export function usePutApiSpacesNamespaceRepoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiSpacesNamespaceRepoSettingsKey()
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
            (typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.api.spaces[':namespace'][':repo'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiDatasetsNamespaceRepoSettingsKey() {
  return ['api', '/api/datasets/:namespace/:repo/settings', 'PUT'] as const
}

export function usePutApiDatasetsNamespaceRepoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiDatasetsNamespaceRepoSettingsKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.api.datasets[':namespace'][':repo'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRepoTypeNamespaceRepoSettingsTrustedPublishersKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/settings/trusted-publishers', args] as const
}

export function useGetApiRepoTypeNamespaceRepoSettingsTrustedPublishers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoSettingsTrustedPublishersKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRepoTypeNamespaceRepoSettingsTrustedPublishers<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoSettingsTrustedPublishersKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersKey() {
  return ['api', '/api/:repoType/:namespace/:repo/settings/trusted-publishers', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoSettingsTrustedPublishers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoTreeRevPathKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/tree/:rev/:path', args] as const
}

export function useGetApiModelsNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoTreeRevPathKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/tree/:rev/:path', args] as const
}

export function useGetApiSpacesNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoTreeRevPathKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/tree/:rev/:path', args] as const
}

export function useGetApiDatasetsNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoTreeRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoTreeRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoNotebookRevPathKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function useGetApiModelsNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoNotebookRevPathKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function useGetApiDatasetsNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoNotebookRevPathKey(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/notebook/:rev/:path', args] as const
}

export function useGetApiSpacesNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoNotebookRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoNotebookRevPathKey(args)
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
                (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoScanKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/scan', args] as const
}

export function useGetApiModelsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoScanKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/scan', args] as const
}

export function useGetApiDatasetsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoScanKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/scan', args] as const
}

export function useGetApiSpacesNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKernelsNamespaceRepoScanKey(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
) {
  return ['api', '/api/kernels/:namespace/:repo/scan', args] as const
}

export function useGetApiKernelsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.kernels[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKernelsNamespaceRepoScan<TError = unknown>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoScanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.kernels[':namespace'][':repo'].scan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRepoTypeNamespaceRepoDiscussionsKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions', args] as const
}

export function useGetApiRepoTypeNamespaceRepoDiscussions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRepoTypeNamespaceRepoDiscussions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoDiscussions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoDiscussionsKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiRepoTypeNamespaceRepoDiscussionsNumKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num', args] as const
}

export function useGetApiRepoTypeNamespaceRepoDiscussionsNum<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsNumKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRepoTypeNamespaceRepoDiscussionsNum<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsNumKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/comment', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['comment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].comment.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/status', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].status.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleKey() {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/title', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['title']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].title.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiRepoTypeNamespaceRepoDiscussionsNumStorageKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/storage', args] as const
}

export function useGetApiRepoTypeNamespaceRepoDiscussionsNumStorage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsNumStorageKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRepoTypeNamespaceRepoDiscussionsNumStorage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDiscussionsNumStorageKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiKernelsKey(args: InferRequestType<typeof client.api.kernels.$get>) {
  return ['api', '/api/kernels', args] as const
}

export function useGetApiKernels<TError = unknown>(
  args: InferRequestType<typeof client.api.kernels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKernelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKernels<TError = unknown>(
  args: InferRequestType<typeof client.api.kernels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKernelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.kernels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKernelsNamespaceRepoKey(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/kernels/:namespace/:repo', args] as const
}

export function useGetApiKernelsNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.kernels[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKernelsNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.kernels[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiKernelsNamespaceRepoRevisionRevKey(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
) {
  return ['api', '/api/kernels/:namespace/:repo/revision/:rev', args] as const
}

export function useGetApiKernelsNamespaceRepoRevisionRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoRevisionRevKey(args)
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
                (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKernelsNamespaceRepoRevisionRev<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiKernelsNamespaceRepoRevisionRevKey(args)
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
                (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoLeaderboardKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/leaderboard', args] as const
}

export function useGetApiDatasetsNamespaceRepoLeaderboard<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoLeaderboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].leaderboard.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoLeaderboard<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoLeaderboardKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo'].leaderboard.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoJwtKey(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/models/:namespace/:repo/jwt', args] as const
}

export function useGetApiModelsNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.models[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoJwtKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/jwt', args] as const
}

export function useGetApiSpacesNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoJwtKey(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
) {
  return ['api', '/api/datasets/:namespace/:repo/jwt', args] as const
}

export function useGetApiDatasetsNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoJwt<TError = unknown>(
  args: InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoJwtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.datasets[':namespace'][':repo'].jwt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAgentHarnessesKey() {
  return ['api', '/api/agent-harnesses'] as const
}

export function useGetApiAgentHarnesses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAgentHarnessesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['agent-harnesses'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAgentHarnesses<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAgentHarnessesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['agent-harnesses'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsTagsByTypeKey(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
) {
  return ['api', '/api/models-tags-by-type', args] as const
}

export function useGetApiModelsTagsByType<TError = unknown>(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsTagsByTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['models-tags-by-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsTagsByType<TError = unknown>(
  args: InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsTagsByTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['models-tags-by-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsTagsByTypeKey(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
) {
  return ['api', '/api/datasets-tags-by-type', args] as const
}

export function useGetApiDatasetsTagsByType<TError = unknown>(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsTagsByTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['datasets-tags-by-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsTagsByType<TError = unknown>(
  args: InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsTagsByTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['datasets-tags-by-type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiTrendingKey(args: InferRequestType<typeof client.api.trending.$get>) {
  return ['api', '/api/trending', args] as const
}

export function useGetApiTrending<TError = unknown>(
  args: InferRequestType<typeof client.api.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTrending<TError = unknown>(
  args: InferRequestType<typeof client.api.trending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTrendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.trending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiQuicksearchKey(
  args: InferRequestType<typeof client.api.quicksearch.$get>,
) {
  return ['api', '/api/quicksearch', args] as const
}

export function useGetApiQuicksearch<TError = unknown>(
  args: InferRequestType<typeof client.api.quicksearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiQuicksearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.quicksearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiQuicksearch<TError = unknown>(
  args: InferRequestType<typeof client.api.quicksearch.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiQuicksearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.quicksearch.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiQuicksearchKey() {
  return ['api', '/api/quicksearch', 'POST'] as const
}

export function usePostApiQuicksearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.quicksearch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiQuicksearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.quicksearch.$post> }) =>
        parseResponse(client.api.quicksearch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSpacesHardwareKey() {
  return ['api', '/api/spaces/hardware'] as const
}

export function useGetApiSpacesHardware<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSpacesHardwareKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces.hardware.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesHardware<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSpacesHardwareKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces.hardware.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesTemplatesKey() {
  return ['api', '/api/spaces/templates'] as const
}

export function useGetApiSpacesTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSpacesTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiSpacesTemplatesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesZeroGpuQuotaKey() {
  return ['api', '/api/spaces/zero-gpu/quota'] as const
}

export function useGetApiSpacesZeroGpuQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesZeroGpuQuotaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces['zero-gpu'].quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesZeroGpuQuota<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesZeroGpuQuotaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.spaces['zero-gpu'].quota.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoSecretsKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/secrets', args] as const
}

export function useGetApiSpacesNamespaceRepoSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoSecrets<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoSecretsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].secrets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSpacesNamespaceRepoVariablesKey(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
) {
  return ['api', '/api/spaces/:namespace/:repo/variables', args] as const
}

export function useGetApiSpacesNamespaceRepoVariables<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSpacesNamespaceRepoVariables<TError = unknown>(
  args: InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiSpacesNamespaceRepoVariablesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.spaces[':namespace'][':repo'].variables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoDuplicateKey() {
  return ['api', '/api/:repoType/:namespace/:repo/duplicate', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoDuplicateKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].duplicate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiRepoTypeNamespaceRepoDuplicateStatusKey(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/duplicate/status', args] as const
}

export function useGetApiRepoTypeNamespaceRepoDuplicateStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDuplicateStatusKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRepoTypeNamespaceRepoDuplicateStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiRepoTypeNamespaceRepoDuplicateStatusKey(args)
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
                (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiReposCreateKey() {
  return ['api', '/api/repos/create', 'POST'] as const
}

export function usePostApiReposCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.repos.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.repos.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReposCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.repos.create.$post> }) =>
        parseResponse(client.api.repos.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id', 'DELETE'] as const
}

export function useDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id', 'PATCH'] as const
}

export function usePatchApiRepoTypeNamespaceRepoSqlConsoleEmbedId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed/:id/hide', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHide<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed'][':id']['hide']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo']['sql-console'].embed[':id'].hide.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedKey() {
  return ['api', '/api/:repoType/:namespace/:repo/sql-console/embed', 'POST'] as const
}

export function usePostApiRepoTypeNamespaceRepoSqlConsoleEmbed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedKey()
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
            (typeof client.api)[':repoType'][':namespace'][':repo']['sql-console']['embed']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':repoType'][':namespace'][':repo']['sql-console'].embed.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSpacesNamespaceRepoResolveRevPathKey(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['spaces', '/spaces/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function useGetSpacesNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesNamespaceRepoResolveRevPathKey(args)
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
                (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpacesNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSpacesNamespaceRepoResolveRevPathKey(args)
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
                (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetsNamespaceRepoResolveRevPathKey(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['datasets', '/datasets/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function useGetDatasetsNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsNamespaceRepoResolveRevPathKey(args)
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
                (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsNamespaceRepoResolveRevPathKey(args)
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
                (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespaceRepoResolveRevPathKey(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':namespace', '/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function useGetNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespaceRepoResolveRevPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespaceRepoResolveRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespaceRepoResolveRevPathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':namespace'][':repo'].resolve[':rev'][':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiResolveCacheSpacesNamespaceRepoRevPathKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/spaces/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function useGetApiResolveCacheSpacesNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheSpacesNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiResolveCacheSpacesNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheSpacesNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiResolveCacheDatasetsNamespaceRepoRevPathKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/datasets/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function useGetApiResolveCacheDatasetsNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheDatasetsNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiResolveCacheDatasetsNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheDatasetsNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiResolveCacheModelsNamespaceRepoRevPathKey(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/resolve-cache/models/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function useGetApiResolveCacheModelsNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheModelsNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiResolveCacheModelsNamespaceRepoRevPath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiResolveCacheModelsNamespaceRepoRevPathKey(args)
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
                (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespaceRepoAskAccessKey() {
  return [':namespace', '/:namespace/:repo/ask-access', 'POST'] as const
}

export function usePostNamespaceRepoAskAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespaceRepoAskAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':namespace'][':repo']['ask-access']['$post']> },
      ) => parseResponse(client[':namespace'][':repo']['ask-access'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasetsNamespaceRepoAskAccessKey() {
  return ['datasets', '/datasets/:namespace/:repo/ask-access', 'POST'] as const
}

export function usePostDatasetsNamespaceRepoAskAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasetsNamespaceRepoAskAccessKey()
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
            (typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']
          >
        },
      ) =>
        parseResponse(
          client.datasets[':namespace'][':repo']['ask-access'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespaceRepoUserAccessReportKey(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
) {
  return [':namespace', '/:namespace/:repo/user-access-report', args] as const
}

export function useGetNamespaceRepoUserAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespaceRepoUserAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':namespace'][':repo']['user-access-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespaceRepoUserAccessReport<TError = unknown>(
  args: InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespaceRepoUserAccessReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client[':namespace'][':repo']['user-access-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatasetsNamespaceRepoUserAccessReportKey(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
) {
  return ['datasets', '/datasets/:namespace/:repo/user-access-report', args] as const
}

export function useGetDatasetsNamespaceRepoUserAccessReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsNamespaceRepoUserAccessReportKey(args)
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
                (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.datasets[':namespace'][':repo']['user-access-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasetsNamespaceRepoUserAccessReport<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasetsNamespaceRepoUserAccessReportKey(args)
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
                (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.datasets[':namespace'][':repo']['user-access-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiModelsNamespaceRepoUserAccessRequestStatusKey(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
) {
  return ['api', '/api/models/:namespace/:repo/user-access-request/:status', args] as const
}

export function useGetApiModelsNamespaceRepoUserAccessRequestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoUserAccessRequestStatusKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiModelsNamespaceRepoUserAccessRequestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiModelsNamespaceRepoUserAccessRequestStatusKey(args)
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
                (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDatasetsNamespaceRepoUserAccessRequestStatusKey(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/user-access-request/:status', args] as const
}

export function useGetApiDatasetsNamespaceRepoUserAccessRequestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoUserAccessRequestStatusKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDatasetsNamespaceRepoUserAccessRequestStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiDatasetsNamespaceRepoUserAccessRequestStatusKey(args)
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
                (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiModelsNamespaceRepoUserAccessRequestBatchKey() {
  return ['api', '/api/models/:namespace/:repo/user-access-request/batch', 'POST'] as const
}

export function usePostApiModelsNamespaceRepoUserAccessRequestBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiModelsNamespaceRepoUserAccessRequestBatchKey()
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
            (typeof client.api.models)[':namespace'][':repo']['user-access-request']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.models[':namespace'][':repo']['user-access-request'].batch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiDatasetsNamespaceRepoUserAccessRequestBatchKey() {
  return ['api', '/api/datasets/:namespace/:repo/user-access-request/batch', 'POST'] as const
}

export function usePostApiDatasetsNamespaceRepoUserAccessRequestBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDatasetsNamespaceRepoUserAccessRequestBatchKey()
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
            (typeof client.api.datasets)[':namespace'][':repo']['user-access-request']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.datasets[':namespace'][':repo']['user-access-request'].batch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDailyPapersKey(
  args: InferRequestType<typeof client.api.daily_papers.$get>,
) {
  return ['api', '/api/daily_papers', args] as const
}

export function useGetApiDailyPapers<TError = unknown>(
  args: InferRequestType<typeof client.api.daily_papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDailyPapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.daily_papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDailyPapers<TError = unknown>(
  args: InferRequestType<typeof client.api.daily_papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDailyPapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.daily_papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPapersKey(args: InferRequestType<typeof client.api.papers.$get>) {
  return ['api', '/api/papers', args] as const
}

export function useGetApiPapers<TError = unknown>(
  args: InferRequestType<typeof client.api.papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPapers<TError = unknown>(
  args: InferRequestType<typeof client.api.papers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPapersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.papers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPapersIndexKey() {
  return ['api', '/api/papers/index', 'POST'] as const
}

export function usePostApiPapersIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.papers.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPapersIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.papers.index.$post> }) =>
        parseResponse(client.api.papers.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPapersPaperIdKey(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
) {
  return ['api', '/api/papers/:paperId', args] as const
}

export function useGetApiPapersPaperId<TError = unknown>(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPapersPaperIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.papers[':paperId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPapersPaperId<TError = unknown>(
  args: InferRequestType<(typeof client.api.papers)[':paperId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiPapersPaperIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.papers[':paperId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPapersPaperIdCommentKey() {
  return ['api', '/api/papers/:paperId/comment', 'POST'] as const
}

export function usePostApiPapersPaperIdComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['comment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPapersPaperIdCommentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.papers)[':paperId']['comment']['$post']> },
      ) => parseResponse(client.api.papers[':paperId'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPapersPaperIdCommentCommentIdReplyKey() {
  return ['api', '/api/papers/:paperId/comment/:commentId/reply', 'POST'] as const
}

export function usePostApiPapersPaperIdCommentCommentIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPapersPaperIdCommentCommentIdReplyKey()
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
            (typeof client.api.papers)[':paperId']['comment'][':commentId']['reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.papers[':paperId'].comment[':commentId'].reply.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPapersPaperIdLinksKey() {
  return ['api', '/api/papers/:paperId/links', 'POST'] as const
}

export function usePostApiPapersPaperIdLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['links']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPapersPaperIdLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.papers)[':paperId']['links']['$post']> },
      ) => parseResponse(client.api.papers[':paperId'].links.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPapersPaperIdMediaKey() {
  return ['api', '/api/papers/:paperId/media', 'POST'] as const
}

export function usePostApiPapersPaperIdMedia<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.papers)[':paperId']['media']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPapersPaperIdMediaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.papers)[':paperId']['media']['$post']> },
      ) => parseResponse(client.api.papers[':paperId'].media.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPostsUsernamePostSlugCommentKey() {
  return ['api', '/api/posts/:username/:postSlug/comment', 'POST'] as const
}

export function usePostApiPostsUsernamePostSlugComment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPostsUsernamePostSlugCommentKey()
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
            (typeof client.api.posts)[':username'][':postSlug']['comment']['$post']
          >
        },
      ) =>
        parseResponse(client.api.posts[':username'][':postSlug'].comment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPostsUsernamePostSlugCommentCommentIdReplyKey() {
  return ['api', '/api/posts/:username/:postSlug/comment/:commentId/reply', 'POST'] as const
}

export function usePostApiPostsUsernamePostSlugCommentCommentIdReply<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPostsUsernamePostSlugCommentCommentIdReplyKey()
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
            (typeof client.api.posts)[':username'][':postSlug']['comment'][':commentId']['reply']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.posts[':username'][':postSlug'].comment[':commentId'].reply.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCollectionsNamespaceSlugIdKey(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}', args] as const
}

export function useGetApiCollectionsNamespaceSlugId<TError = unknown>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.collections[':namespace'][':slug-{id}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCollectionsNamespaceSlugId<TError = unknown>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.collections[':namespace'][':slug-{id}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiCollectionsNamespaceSlugIdKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}', 'PATCH'] as const
}

export function usePatchApiCollectionsNamespaceSlugId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCollectionsNamespaceSlugIdKey()
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
            (typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.collections[':namespace'][':slug-{id}'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCollectionsNamespaceSlugKey(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
) {
  return ['api', '/api/collections/:namespace/:slug', args] as const
}

export function useGetApiCollectionsNamespaceSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.collections[':namespace'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCollectionsNamespaceSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.collections[':namespace'][':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiCollectionsNamespaceSlugKey() {
  return ['api', '/api/collections/:namespace/:slug', 'PATCH'] as const
}

export function usePatchApiCollectionsNamespaceSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCollectionsNamespaceSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>
        },
      ) => parseResponse(client.api.collections[':namespace'][':slug'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCollectionsNamespaceSlugIdItemsKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}/items', 'POST'] as const
}

export function usePostApiCollectionsNamespaceSlugIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCollectionsNamespaceSlugIdItemsKey()
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
            (typeof client.api.collections)[':namespace'][':slug-{id}']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.collections[':namespace'][':slug-{id}'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiCollectionsNamespaceSlugItemsKey() {
  return ['api', '/api/collections/:namespace/:slug/items', 'POST'] as const
}

export function usePostApiCollectionsNamespaceSlugItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCollectionsNamespaceSlugItemsKey()
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
            (typeof client.api.collections)[':namespace'][':slug']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.collections[':namespace'][':slug'].items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCollectionsKey(
  args: InferRequestType<typeof client.api.collections.$get>,
) {
  return ['api', '/api/collections', args] as const
}

export function useGetApiCollections<TError = unknown>(
  args: InferRequestType<typeof client.api.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCollections<TError = unknown>(
  args: InferRequestType<typeof client.api.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCollectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCollectionsKey() {
  return ['api', '/api/collections', 'POST'] as const
}

export function usePostApiCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.collections.$post> }) =>
        parseResponse(client.api.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCollectionsNamespaceSlugIdResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}/resource-group', args] as const
}

export function useGetApiCollectionsNamespaceSlugIdResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugIdResourceGroupKey(args)
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
                (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.collections[':namespace'][':slug-{id}']['resource-group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCollectionsNamespaceSlugIdResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugIdResourceGroupKey(args)
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
                (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.collections[':namespace'][':slug-{id}']['resource-group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCollectionsNamespaceSlugIdResourceGroupKey() {
  return ['api', '/api/collections/:namespace/:slug-{id}/resource-group', 'POST'] as const
}

export function usePostApiCollectionsNamespaceSlugIdResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCollectionsNamespaceSlugIdResourceGroupKey()
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
            (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.collections[':namespace'][':slug-{id}']['resource-group'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiCollectionsNamespaceSlugResourceGroupKey(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
) {
  return ['api', '/api/collections/:namespace/:slug/resource-group', args] as const
}

export function useGetApiCollectionsNamespaceSlugResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugResourceGroupKey(args)
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
                (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.collections[':namespace'][':slug']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCollectionsNamespaceSlugResourceGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiCollectionsNamespaceSlugResourceGroupKey(args)
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
                (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.collections[':namespace'][':slug']['resource-group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCollectionsNamespaceSlugResourceGroupKey() {
  return ['api', '/api/collections/:namespace/:slug/resource-group', 'POST'] as const
}

export function usePostApiCollectionsNamespaceSlugResourceGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCollectionsNamespaceSlugResourceGroupKey()
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
            (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.collections[':namespace'][':slug']['resource-group'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/buckets/:namespace/:repo', args] as const
}

export function useGetApiBucketsNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.buckets[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.buckets[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBucketsNamespaceRepoKey() {
  return ['api', '/api/buckets/:namespace/:repo', 'POST'] as const
}

export function usePostApiBucketsNamespaceRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBucketsNamespaceRepoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$post']> },
      ) => parseResponse(client.api.buckets[':namespace'][':repo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiContainersNamespaceRepoKey(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
) {
  return ['api', '/api/containers/:namespace/:repo', args] as const
}

export function useGetApiContainersNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.containers[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespaceRepo<TError = unknown>(
  args: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.containers[':namespace'][':repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiContainersNamespaceRepoKey() {
  return ['api', '/api/containers/:namespace/:repo', 'POST'] as const
}

export function usePostApiContainersNamespaceRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiContainersNamespaceRepoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$post']>
        },
      ) => parseResponse(client.api.containers[':namespace'][':repo'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiBucketsNamespaceRepoSettingsKey() {
  return ['api', '/api/buckets/:namespace/:repo/settings', 'PUT'] as const
}

export function usePutApiBucketsNamespaceRepoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiBucketsNamespaceRepoSettingsKey()
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
            (typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.api.buckets[':namespace'][':repo'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiContainersNamespaceRepoSettingsKey() {
  return ['api', '/api/containers/:namespace/:repo/settings', 'PUT'] as const
}

export function usePutApiContainersNamespaceRepoSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiContainersNamespaceRepoSettingsKey()
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
            (typeof client.api.containers)[':namespace'][':repo']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.containers[':namespace'][':repo'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
) {
  return ['api', '/api/buckets/:namespace', args] as const
}

export function useGetApiBucketsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.buckets[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.buckets[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiContainersNamespaceKey(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
) {
  return ['api', '/api/containers/:namespace', args] as const
}

export function useGetApiContainersNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.containers[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.containers)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.containers[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBucketsNamespaceRepoResolvePathKey(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['buckets', '/buckets/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function useGetBucketsNamespaceRepoResolvePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketsNamespaceRepoResolvePathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.buckets[':namespace'][':repo'].resolve[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBucketsNamespaceRepoResolvePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBucketsNamespaceRepoResolvePathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.buckets[':namespace'][':repo'].resolve[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetContainersNamespaceRepoResolvePathKey(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['containers', '/containers/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function useGetContainersNamespaceRepoResolvePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersNamespaceRepoResolvePathKey(args)
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
                (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.containers[':namespace'][':repo'].resolve[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContainersNamespaceRepoResolvePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetContainersNamespaceRepoResolvePathKey(args)
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
                (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.containers[':namespace'][':repo'].resolve[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiBucketsNamespaceRepoBatchKey() {
  return ['api', '/api/buckets/:namespace/:repo/batch', 'POST'] as const
}

export function usePostApiBucketsNamespaceRepoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBucketsNamespaceRepoBatchKey()
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
            (typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']
          >
        },
      ) => parseResponse(client.api.buckets[':namespace'][':repo'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiContainersNamespaceRepoBatchKey() {
  return ['api', '/api/containers/:namespace/:repo/batch', 'POST'] as const
}

export function usePostApiContainersNamespaceRepoBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiContainersNamespaceRepoBatchKey()
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
            (typeof client.api.containers)[':namespace'][':repo']['batch']['$post']
          >
        },
      ) =>
        parseResponse(client.api.containers[':namespace'][':repo'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoTreePathKey(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/tree/:path', args] as const
}

export function useGetApiBucketsNamespaceRepoTreePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoTreePathKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo'].tree[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepoTreePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoTreePathKey(args)
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
                (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.buckets[':namespace'][':repo'].tree[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiContainersNamespaceRepoTreePathKey(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/tree/:path', args] as const
}

export function useGetApiContainersNamespaceRepoTreePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoTreePathKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo'].tree[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiContainersNamespaceRepoTreePath<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiContainersNamespaceRepoTreePathKey(args)
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
                (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.containers[':namespace'][':repo'].tree[':path'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiBucketsNamespaceRepoEventsKey(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
) {
  return ['api', '/api/buckets/:namespace/:repo/events', args] as const
}

export function useGetApiBucketsNamespaceRepoEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.buckets[':namespace'][':repo'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBucketsNamespaceRepoEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiBucketsNamespaceRepoEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.buckets[':namespace'][':repo'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBucketsNamespaceRepoPathsInfoKey() {
  return ['api', '/api/buckets/:namespace/:repo/paths-info', 'POST'] as const
}

export function usePostApiBucketsNamespaceRepoPathsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBucketsNamespaceRepoPathsInfoKey()
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
            (typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.buckets[':namespace'][':repo']['paths-info'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiContainersNamespaceRepoPathsInfoKey() {
  return ['api', '/api/containers/:namespace/:repo/paths-info', 'POST'] as const
}

export function usePostApiContainersNamespaceRepoPathsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiContainersNamespaceRepoPathsInfoKey()
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
            (typeof client.api.containers)[':namespace'][':repo']['paths-info']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.containers[':namespace'][':repo']['paths-info'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiJobsHardwareKey() {
  return ['api', '/api/jobs/hardware'] as const
}

export function useGetApiJobsHardware<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsHardwareKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs.hardware.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsHardware<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiJobsHardwareKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs.hardware.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJobsNamespaceKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
) {
  return ['api', '/api/jobs/:namespace', args] as const
}

export function useGetApiJobsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJobsNamespaceKey() {
  return ['api', '/api/jobs/:namespace', 'POST'] as const
}

export function usePostApiJobsNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.jobs)[':namespace']['$post']> },
      ) => parseResponse(client.api.jobs[':namespace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJobsNamespaceCountKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
) {
  return ['api', '/api/jobs/:namespace/count', args] as const
}

export function useGetApiJobsNamespaceCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'].count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsNamespaceCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'].count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJobsNamespaceJobIdKey(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
) {
  return ['api', '/api/jobs/:namespace/:jobId', args] as const
}

export function useGetApiJobsNamespaceJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJobsNamespaceJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiJobsNamespaceJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.jobs[':namespace'][':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiJobsNamespaceJobIdCancelKey() {
  return ['api', '/api/jobs/:namespace/:jobId/cancel', 'POST'] as const
}

export function usePostApiJobsNamespaceJobIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsNamespaceJobIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>
        },
      ) => parseResponse(client.api.jobs[':namespace'][':jobId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiJobsNamespaceJobIdDuplicateKey() {
  return ['api', '/api/jobs/:namespace/:jobId/duplicate', 'POST'] as const
}

export function usePostApiJobsNamespaceJobIdDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiJobsNamespaceJobIdDuplicateKey()
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
            (typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']
          >
        },
      ) =>
        parseResponse(client.api.jobs[':namespace'][':jobId'].duplicate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiJobsNamespaceJobIdLabelsKey() {
  return ['api', '/api/jobs/:namespace/:jobId/labels', 'PUT'] as const
}

export function usePutApiJobsNamespaceJobIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiJobsNamespaceJobIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['labels']['$put']>
        },
      ) => parseResponse(client.api.jobs[':namespace'][':jobId'].labels.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiJobsNamespaceJobIdExposeKey() {
  return ['api', '/api/jobs/:namespace/:jobId/expose', 'PUT'] as const
}

export function usePutApiJobsNamespaceJobIdExpose<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiJobsNamespaceJobIdExposeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['expose']['$put']>
        },
      ) => parseResponse(client.api.jobs[':namespace'][':jobId'].expose.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiScheduledJobsNamespaceKey(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
) {
  return ['api', '/api/scheduled-jobs/:namespace', args] as const
}

export function useGetApiScheduledJobsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScheduledJobsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['scheduled-jobs'][':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiScheduledJobsNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScheduledJobsNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['scheduled-jobs'][':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiScheduledJobsNamespaceKey() {
  return ['api', '/api/scheduled-jobs/:namespace', 'POST'] as const
}

export function usePostApiScheduledJobsNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiScheduledJobsNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$post']> },
      ) => parseResponse(client.api['scheduled-jobs'][':namespace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiScheduledJobsNamespaceJobIdKey(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
) {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId', args] as const
}

export function useGetApiScheduledJobsNamespaceJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScheduledJobsNamespaceJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiScheduledJobsNamespaceJobId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiScheduledJobsNamespaceJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiScheduledJobsNamespaceJobIdRunKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/run', 'POST'] as const
}

export function usePostApiScheduledJobsNamespaceJobIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiScheduledJobsNamespaceJobIdRunKey()
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
            (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].run.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiScheduledJobsNamespaceJobIdScheduleKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/schedule', 'POST'] as const
}

export function usePostApiScheduledJobsNamespaceJobIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiScheduledJobsNamespaceJobIdScheduleKey()
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
            (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['schedule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].schedule.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiScheduledJobsNamespaceJobIdLabelsKey() {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId/labels', 'PUT'] as const
}

export function usePutApiScheduledJobsNamespaceJobIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiScheduledJobsNamespaceJobIdLabelsKey()
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
            (typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['labels']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].labels.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
