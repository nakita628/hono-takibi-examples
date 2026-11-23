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
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.$get>>,
) {
  return ['api', '/api/notifications', toValue(args)] as const
}

export function getApiNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>
            >
          >,
          ReturnType<typeof getApiNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSettingsMcpQueryKey() {
  return ['api', '/api/settings/mcp'] as const
}

export function getApiSettingsMcpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSettingsMcpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.mcp.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiSettingsMcp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>
            >
          >,
          ReturnType<typeof getApiSettingsMcpQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.mcp.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsMcpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSettingsMcpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.mcp.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSettingsWebhooksQueryKey() {
  return ['api', '/api/settings/webhooks'] as const
}

export function getApiSettingsWebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSettingsWebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.webhooks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
            >
          >,
          ReturnType<typeof getApiSettingsWebhooksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSettingsWebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiSettingsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.webhooks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.settings.webhooks.$post>,
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
  const mutationDefaults = getPostApiSettingsWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getApiSettingsWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>
  >,
) {
  return ['api', '/api/settings/webhooks/:webhookId', toValue(args)] as const
}

export function getApiSettingsWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSettingsWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSettingsWebhooksWebhookIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSettingsWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiSettingsWebhooksWebhookId<
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
                Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$post']>,
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
  const mutationDefaults = getPostApiSettingsWebhooksWebhookIdMutationOptions<
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

export function useDeleteApiSettingsWebhooksWebhookId<
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
                Awaited<ReturnType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.settings.webhooks)[':webhookId']['$delete']>,
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
  const mutationDefaults = getDeleteApiSettingsWebhooksWebhookIdMutationOptions<
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

export function usePostApiSettingsWebhooksWebhookIdAction<
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
                    (typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.settings.webhooks)[':webhookId'][':action']['$post']>,
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
  const mutationDefaults = getPostApiSettingsWebhooksWebhookIdActionMutationOptions<
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

export function usePostApiSettingsWebhooksWebhookIdReplayLogId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSettingsWebhooksWebhookIdReplayLogIdMutationOptions<
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

export function usePostApiSettingsPapersClaim<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.papers.claim.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.settings.papers.claim.$post>,
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
  const mutationDefaults = getPostApiSettingsPapersClaimMutationOptions<TError, TOnMutateResult>(
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

export function getApiSettingsRepositoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.settings.repositories.$get>>,
) {
  return ['api', '/api/settings/repositories', toValue(args)] as const
}

export function getApiSettingsRepositoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.settings.repositories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSettingsRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.settings.repositories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.repositories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.repositories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSettingsRepositoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.repositories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSettingsRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameSettingsTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/settings/tokens', toValue(args)] as const
}

export function getApiOrganizationsNameSettingsTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameSettingsTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].settings.tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameSettingsTokens<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
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
                    (typeof client.api.organizations)[':name']['settings']['tokens']['$get']
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
                    (typeof client.api.organizations)[':name']['settings']['tokens']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameSettingsTokensQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['settings']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameSettingsTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].settings.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameSettingsRepositoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['repositories']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/settings/repositories', toValue(args)] as const
}

export function getApiOrganizationsNameSettingsRepositoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['repositories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameSettingsRepositoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].settings.repositories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameSettingsRepositories<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['settings']['repositories']['$get']>
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
                    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
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
                    (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameSettingsRepositoriesQueryKey>
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
              (typeof client.api.organizations)[':name']['settings']['repositories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsRepositoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameSettingsRepositoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].settings.repositories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOrganizationsNameSettingsSsoCredentials<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiOrganizationsNameSettingsSsoCredentialsMutationOptions<
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

export function getApiOrganizationsNameAuditLogExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/audit-log/export', toValue(args)] as const
}

export function getApiOrganizationsNameAuditLogExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameAuditLogExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['audit-log'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameAuditLogExport<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
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
                    (typeof client.api.organizations)[':name']['audit-log']['export']['$get']
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
                    (typeof client.api.organizations)[':name']['audit-log']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameAuditLogExportQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['audit-log']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameAuditLogExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameAuditLogExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['audit-log'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameResourceGroupsResourceGroupId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey>
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
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameResourceGroupsResourceGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiOrganizationsNameResourceGroupsResourceGroupId<
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
    getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
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

export function usePatchApiOrganizationsNameResourceGroupsResourceGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsNameResourceGroupsResourceGroupIdMutationOptions<
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

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdSettings<
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
    getPostApiOrganizationsNameResourceGroupsResourceGroupIdSettingsMutationOptions<
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

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdUsers<
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
    getPostApiOrganizationsNameResourceGroupsResourceGroupIdUsersMutationOptions<
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

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdInvite<
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
    getPostApiOrganizationsNameResourceGroupsResourceGroupIdInviteMutationOptions<
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

export function getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/resource-groups/:resourceGroupId/invitations',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameResourceGroupsResourceGroupIdInvitations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey>
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
              (typeof client.api.organizations)[':name']['resource-groups'][':resourceGroupId']['invitations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiOrganizationsNameResourceGroupsResourceGroupIdInvitationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['resource-groups'][':resourceGroupId'].invitations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResend<
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
    getPostApiOrganizationsNameResourceGroupsResourceGroupIdInvitationIdResendMutationOptions<
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

export function useDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
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
    getDeleteApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
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

export function usePatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsername<
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
    getPatchApiOrganizationsNameResourceGroupsResourceGroupIdUsersUsernameMutationOptions<
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

export function getApiOrganizationsNameResourceGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups', toValue(args)] as const
}

export function getApiOrganizationsNameResourceGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameResourceGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameResourceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameResourceGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameResourceGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['resource-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameResourceGroups<
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
                  ReturnType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.organizations)[':name']['resource-groups']['$post']>,
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
  const mutationDefaults = getPostApiOrganizationsNameResourceGroupsMutationOptions<
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

export function getApiOrganizationsNameResourceGroupsSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/resource-groups/settings', toValue(args)] as const
}

export function getApiOrganizationsNameResourceGroupsSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameResourceGroupsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['resource-groups'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameResourceGroupsSettings<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
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
                    (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameResourceGroupsSettingsQueryKey>
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
              (typeof client.api.organizations)[':name']['resource-groups']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameResourceGroupsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameResourceGroupsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['resource-groups'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameResourceGroupsSettings<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsNameResourceGroupsSettingsMutationOptions<
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

export function getApiOrganizationsNameSettingsNetworkSecurityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/settings/network-security', toValue(args)] as const
}

export function getApiOrganizationsNameSettingsNetworkSecurityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameSettingsNetworkSecurityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].settings['network-security'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameSettingsNetworkSecurity<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
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
                    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
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
                    (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameSettingsNetworkSecurityQueryKey>
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
              (typeof client.api.organizations)[':name']['settings']['network-security']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSettingsNetworkSecurityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameSettingsNetworkSecurityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].settings['network-security'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiOrganizationsNameSettingsNetworkSecurity<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsNameSettingsNetworkSecurityMutationOptions<
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

export function getApiOrganizationsNameServiceAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/service-accounts', toValue(args)] as const
}

export function getApiOrganizationsNameServiceAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameServiceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameServiceAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameServiceAccountsQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['service-accounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameServiceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameServiceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['service-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameServiceAccounts<
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
                    (typeof client.api.organizations)[':name']['service-accounts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.organizations)[':name']['service-accounts']['$post']>,
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
  const mutationDefaults = getPostApiOrganizationsNameServiceAccountsMutationOptions<
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

export function getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameServiceAccountsServiceAccountId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey>
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
              (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiOrganizationsNameServiceAccountsServiceAccountIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteApiOrganizationsNameServiceAccountsServiceAccountId<
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
    getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdMutationOptions<
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

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTokens<
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
    getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensMutationOptions<
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

export function useDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
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
    getDeleteApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
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

export function usePatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenId<
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
    getPatchApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdMutationOptions<
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

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotate<
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
    getPostApiOrganizationsNameServiceAccountsServiceAccountIdTokensTokenIdRotateMutationOptions<
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

export function getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/service-accounts/:serviceAccountId/trusted-publishers',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
          'trusted-publishers'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
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
                    (typeof client.api.organizations)[':name']['service-accounts'][':serviceAccountId']['trusted-publishers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['service-accounts'][':serviceAccountId'][
            'trusted-publishers'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishers<
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
    getPostApiOrganizationsNameServiceAccountsServiceAccountIdTrustedPublishersMutationOptions<
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

export function getApiOrganizationsNameAvatarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/avatar', toValue(args)] as const
}

export function getApiOrganizationsNameAvatarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameAvatarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].avatar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['avatar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameAvatarQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameAvatarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameAvatarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].avatar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/members', toValue(args)] as const
}

export function getApiOrganizationsNameMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ServiceProviderConfig', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2ServiceProviderConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2ServiceProviderConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey>
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
              (typeof client.api.organizations)[':name']['scim']['v2']['ServiceProviderConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2ServiceProviderConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.ServiceProviderConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameScimV2ResourceTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/ResourceTypes', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2ResourceTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2ResourceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.ResourceTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2ResourceTypes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2ResourceTypesQueryKey>
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
              (typeof client.api.organizations)[':name']['scim']['v2']['ResourceTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2ResourceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2ResourceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.ResourceTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameScimV2SchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2SchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2SchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2Schemas<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2SchemasQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Schemas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2SchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2SchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Schemas/:schemaId', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2SchemasSchemaIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2SchemasSchemaId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey>
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
              (typeof client.api.organizations)[':name']['scim']['v2']['Schemas'][':schemaId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2SchemasSchemaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Schemas[':schemaId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameScimV2UsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2UsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2Users<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2UsersQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameScimV2Users<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsNameScimV2UsersMutationOptions<
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

export function getApiOrganizationsNameScimV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Users/:userId', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2UsersUserId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2UsersUserIdQueryKey>
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
              (typeof client.api.organizations)[':name']['scim']['v2']['Users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOrganizationsNameScimV2UsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiOrganizationsNameScimV2UsersUserIdMutationOptions<
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

export function useDeleteApiOrganizationsNameScimV2UsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiOrganizationsNameScimV2UsersUserIdMutationOptions<
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

export function usePatchApiOrganizationsNameScimV2UsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsNameScimV2UsersUserIdMutationOptions<
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

export function getApiOrganizationsNameScimV2GroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2GroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2GroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2Groups<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2GroupsQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['scim']['v2']['Groups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2GroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2GroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameScimV2Groups<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsNameScimV2GroupsMutationOptions<
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

export function getApiOrganizationsNameScimV2GroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim/v2/Groups/:groupId', toValue(args)] as const
}

export function getApiOrganizationsNameScimV2GroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimV2GroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimV2GroupsGroupId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimV2GroupsGroupIdQueryKey>
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
              (typeof client.api.organizations)[':name']['scim']['v2']['Groups'][':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimV2GroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimV2GroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].scim.v2.Groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOrganizationsNameScimV2GroupsGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
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

export function useDeleteApiOrganizationsNameScimV2GroupsGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
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

export function usePatchApiOrganizationsNameScimV2GroupsGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsNameScimV2GroupsGroupIdMutationOptions<
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

export function getApiOrganizationsNameScimProvisioningV2UsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Users', toValue(args)] as const
}

export function getApiOrganizationsNameScimProvisioningV2UsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimProvisioningV2Users<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersQueryKey>
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
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameScimProvisioningV2Users<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsNameScimProvisioningV2UsersMutationOptions<
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

export function getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/scim-provisioning/v2/Users/:userId',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameScimProvisioningV2UsersUserId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey>
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
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Users'][':userId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Users[':userId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOrganizationsNameScimProvisioningV2UsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
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

export function useDeleteApiOrganizationsNameScimProvisioningV2UsersUserId<
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
    getDeleteApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
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

export function usePatchApiOrganizationsNameScimProvisioningV2UsersUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiOrganizationsNameScimProvisioningV2UsersUserIdMutationOptions<
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

export function getApiOrganizationsNameScimProvisioningV2GroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/scim-provisioning/v2/Groups', toValue(args)] as const
}

export function getApiOrganizationsNameScimProvisioningV2GroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2GroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameScimProvisioningV2Groups<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsQueryKey>
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
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2GroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameScimProvisioningV2Groups<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiOrganizationsNameScimProvisioningV2GroupsMutationOptions<
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

export function getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/scim-provisioning/v2/Groups/:groupId',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
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
                    (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey>
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
              (typeof client.api.organizations)[':name']['scim-provisioning']['v2']['Groups'][':groupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiOrganizationsNameScimProvisioningV2GroupsGroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name']['scim-provisioning'].v2.Groups[':groupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
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

export function useDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
    getDeleteApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
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

export function usePatchApiOrganizationsNameScimProvisioningV2GroupsGroupId<
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
    getPatchApiOrganizationsNameScimProvisioningV2GroupsGroupIdMutationOptions<
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

export function usePostOauthRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.register.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.register.$post>,
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
  const mutationDefaults = getPostOauthRegisterMutationOptions<TError, TOnMutateResult>(
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

export function usePostOauthDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.device.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.device.$post>,
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
  const mutationDefaults = getPostOauthDeviceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOauthUserinfoQueryKey() {
  return ['oauth', '/oauth/userinfo'] as const
}

export function getOauthUserinfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOauthUserinfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.oauth.userinfo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOauthUserinfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
          >,
          ReturnType<typeof getOauthUserinfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthUserinfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOauthUserinfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.oauth.userinfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOauthUserinfo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.userinfo.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOauthUserinfoMutationOptions<TError, TOnMutateResult>(
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

export function getApiRegistryTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.registry.token.$get>>,
) {
  return ['api', '/api/registry/token', toValue(args)] as const
}

export function getApiRegistryTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.registry.token.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRegistryTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.registry.token.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRegistryToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.registry.token.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>
            >
          >,
          ReturnType<typeof getApiRegistryTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.registry.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRegistryTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRegistryTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.registry.token.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBlogSlugComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBlogSlugCommentMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiBlogSlugCommentCommentIdReply<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBlogSlugCommentCommentIdReplyMutationOptions<
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

export function usePostApiBlogNamespaceSlugComment<
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
                  ReturnType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['comment']['$post']>,
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
  const mutationDefaults = getPostApiBlogNamespaceSlugCommentMutationOptions<
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

export function usePostApiBlogNamespaceSlugCommentCommentIdReply<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBlogNamespaceSlugCommentCommentIdReplyMutationOptions<
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

export function getApiBlogNamespaceSlugResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
  >,
) {
  return ['api', '/api/blog/:namespace/:slug/resource-group', toValue(args)] as const
}

export function getApiBlogNamespaceSlugResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBlogNamespaceSlugResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.blog[':namespace'][':slug']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBlogNamespaceSlugResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
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
                    (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']
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
                    (typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiBlogNamespaceSlugResourceGroupQueryKey>
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
            ReturnType<(typeof client.api.blog)[':namespace'][':slug']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBlogNamespaceSlugResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBlogNamespaceSlugResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.blog[':namespace'][':slug']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBlogNamespaceSlugResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBlogNamespaceSlugResourceGroupMutationOptions<
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

export function getApiDocsQueryKey() {
  return ['api', '/api/docs'] as const
}

export function getApiDocsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiDocsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.docs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiDocs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>
          >,
          ReturnType<typeof getApiDocsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDocsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiDocsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.docs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDocsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.docs.search.$get>>,
) {
  return ['api', '/api/docs/search', toValue(args)] as const
}

export function getApiDocsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.docs.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.docs.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.docs.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>
            >
          >,
          ReturnType<typeof getApiDocsSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.docs.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.docs.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDocsSearchFullTextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>>,
) {
  return ['api', '/api/docs/search/full-text', toValue(args)] as const
}

export function getApiDocsSearchFullTextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocsSearchFullTextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.docs.search['full-text'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocsSearchFullText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.docs.search)['full-text']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDocsSearchFullTextQueryKey>
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
          Awaited<ReturnType<(typeof client.api.docs.search)['full-text']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocsSearchFullTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocsSearchFullTextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.docs.search['full-text'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWhoamiV2QueryKey() {
  return ['api', '/api/whoami-v2'] as const
}

export function getApiWhoamiV2QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiWhoamiV2QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['whoami-v2'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiWhoamiV2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
            >
          >,
          ReturnType<typeof getApiWhoamiV2QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['whoami-v2']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWhoamiV2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiWhoamiV2QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['whoami-v2'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameBillingUsageByResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage-by-resource-group', toValue(args)] as const
}

export function getApiOrganizationsNameBillingUsageByResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameBillingUsageByResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].billing['usage-by-resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameBillingUsageByResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameBillingUsageByResourceGroupQueryKey>
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
              (typeof client.api.organizations)[':name']['billing']['usage-by-resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageByResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameBillingUsageByResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].billing['usage-by-resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/organizations/:name/billing/usage-by-inference-session',
    toValue(args),
  ] as const
}

export function getApiOrganizationsNameBillingUsageByInferenceSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].billing['usage-by-inference-session'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiOrganizationsNameBillingUsageByInferenceSession<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey>
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
              (typeof client.api.organizations)[':name']['billing']['usage-by-inference-session']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameBillingUsageByInferenceSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].billing['usage-by-inference-session'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameBillingUsageInferenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
    >
  >,
) {
  return ['api', '/api/organizations/:name/billing/usage/inference', toValue(args)] as const
}

export function getApiOrganizationsNameBillingUsageInferenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameBillingUsageInferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].billing.usage.inference.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameBillingUsageInference<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameBillingUsageInferenceQueryKey>
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
              (typeof client.api.organizations)[':name']['billing']['usage']['inference']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingUsageInferenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameBillingUsageInferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].billing.usage.inference.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameBillingCreditsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/billing/credits', toValue(args)] as const
}

export function getApiOrganizationsNameBillingCreditsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameBillingCreditsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].billing.credits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameBillingCredits<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
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
                    (typeof client.api.organizations)[':name']['billing']['credits']['$get']
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
                    (typeof client.api.organizations)[':name']['billing']['credits']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameBillingCreditsQueryKey>
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
            ReturnType<(typeof client.api.organizations)[':name']['billing']['credits']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameBillingCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameBillingCreditsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].billing.credits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiOrganizationsNameBillingPrepaidCreditsPurchaseLink<
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
    getPostApiOrganizationsNameBillingPrepaidCreditsPurchaseLinkMutationOptions<
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

export function getApiSettingsBillingCreditsQueryKey() {
  return ['api', '/api/settings/billing/credits'] as const
}

export function getApiSettingsBillingCreditsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSettingsBillingCreditsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.billing.credits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsBillingCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSettingsBillingCreditsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.credits.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSettingsBillingCreditsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.billing.credits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiSettingsBillingPrepaidCreditsPurchaseLink<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSettingsBillingPrepaidCreditsPurchaseLinkMutationOptions<
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

export function getApiSettingsBillingUsageByInferenceSessionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
  >,
) {
  return ['api', '/api/settings/billing/usage-by-inference-session', toValue(args)] as const
}

export function getApiSettingsBillingUsageByInferenceSessionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSettingsBillingUsageByInferenceSessionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.billing['usage-by-inference-session'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsBillingUsageByInferenceSession<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
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
                    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
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
                    (typeof client.api.settings.billing)['usage-by-inference-session']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSettingsBillingUsageByInferenceSessionQueryKey>
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
            ReturnType<(typeof client.api.settings.billing)['usage-by-inference-session']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingUsageByInferenceSessionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSettingsBillingUsageByInferenceSessionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.billing['usage-by-inference-session'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSettingsBillingUsageJobsQueryKey() {
  return ['api', '/api/settings/billing/usage/jobs'] as const
}

export function getApiSettingsBillingUsageJobsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSettingsBillingUsageJobsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.settings.billing.usage.jobs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSettingsBillingUsageJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
              >
            >
          >,
          ReturnType<typeof getApiSettingsBillingUsageJobsQueryKey>
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
          Awaited<ReturnType<typeof client.api.settings.billing.usage.jobs.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSettingsBillingUsageJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSettingsBillingUsageJobsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.settings.billing.usage.jobs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameOverviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>
  >,
) {
  return ['api', '/api/users/:username/overview', toValue(args)] as const
}

export function getApiUsersUsernameOverviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameOverviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].overview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['overview']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameOverviewQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['overview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameOverviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameOverviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].overview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameSocialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>
  >,
) {
  return ['api', '/api/users/:username/socials', toValue(args)] as const
}

export function getApiUsersUsernameSocialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameSocialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].socials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameSocials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['socials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameSocialsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['socials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameSocialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameSocialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].socials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameAvatarQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>
  >,
) {
  return ['api', '/api/users/:username/avatar', toValue(args)] as const
}

export function getApiUsersUsernameAvatarQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameAvatarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].avatar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['avatar']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameAvatarQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['avatar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameAvatarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameAvatarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].avatar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameLikesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>>,
) {
  return ['api', '/api/users/:username/likes', toValue(args)] as const
}

export function getApiUsersUsernameLikesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameLikesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].likes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameLikes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.users)[':username']['likes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameLikesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['likes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameLikesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameLikesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].likes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>
  >,
) {
  return ['api', '/api/users/:username/followers', toValue(args)] as const
}

export function getApiUsersUsernameFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameFollowingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['$get']>
  >,
) {
  return ['api', '/api/users/:username/following', toValue(args)] as const
}

export function getApiUsersUsernameFollowingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameFollowingQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiUsersUsernameFollowingOrgsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>
  >,
) {
  return ['api', '/api/users/:username/following/orgs', toValue(args)] as const
}

export function getApiUsersUsernameFollowingOrgsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiUsersUsernameFollowingOrgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.users[':username'].following.orgs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiUsersUsernameFollowingOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.users)[':username']['following']['orgs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiUsersUsernameFollowingOrgsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.users)[':username']['following']['orgs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiUsersUsernameFollowingOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiUsersUsernameFollowingOrgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.users[':username'].following.orgs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOrganizationsNameSocialsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>
  >,
) {
  return ['api', '/api/organizations/:name/socials', toValue(args)] as const
}

export function getApiOrganizationsNameSocialsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrganizationsNameSocialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.organizations[':name'].socials.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrganizationsNameSocials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.organizations)[':name']['socials']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOrganizationsNameSocialsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.organizations)[':name']['socials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrganizationsNameSocialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrganizationsNameSocialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.organizations[':name'].socials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiInferenceEndpointsNamespaceAuthCheckPerms<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiInferenceEndpointsNamespaceAuthCheckPermsMutationOptions<
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

export function usePostApiInferenceEndpointsNamespaceEndpointAuthCheckPerms<
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
    getPostApiInferenceEndpointsNamespaceEndpointAuthCheckPermsMutationOptions<
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

export function usePostApiJobsNamespaceAuthCheckPerms<
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
                    (typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':namespace']['auth-check'][':perms']['$post']>,
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
  const mutationDefaults = getPostApiJobsNamespaceAuthCheckPermsMutationOptions<
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

export function usePostApiJobsNamespaceJobIdAuthCheckPerms<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJobsNamespaceJobIdAuthCheckPermsMutationOptions<
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

export function getApiModelsNamespaceRepoTreesizeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/treesize/:rev/:path', toValue(args)] as const
}

export function getApiModelsNamespaceRepoTreesizeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoTreesizeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoTreesizeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoTreesizeRevPathQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoTreesizeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoTreesizeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoTreesizeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/treesize/:rev/:path', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoTreesizeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoTreesizeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoTreesizeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoTreesizeRevPathQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoTreesizeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoTreesizeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/treesize/:rev/:path', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoTreesizeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoTreesizeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['treesize'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoTreesizeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].treesize[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/safetensors-metadata/:path', toValue(args)] as const
}

export function getApiModelsNamespaceRepoSafetensorsMetadataPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiModelsNamespaceRepoSafetensorsMetadataPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['safetensors-metadata'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoSafetensorsMetadataPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['safetensors-metadata'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoLfsFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/lfs-files', toValue(args)] as const
}

export function getApiModelsNamespaceRepoLfsFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoLfsFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoLfsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoLfsFilesQueryKey>
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
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoLfsFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoLfsFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoLfsFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/lfs-files', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoLfsFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoLfsFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoLfsFiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
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
                    (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoLfsFilesQueryKey>
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
            ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoLfsFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoLfsFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoLfsFilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/lfs-files', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoLfsFilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoLfsFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoLfsFiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoLfsFilesQueryKey>
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
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['lfs-files']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoLfsFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoLfsFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo']['lfs-files'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiModelsNamespaceRepoLfsFilesDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoLfsFilesDuplicateMutationOptions<
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

export function usePostApiKernelsNamespaceRepoLfsFilesDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKernelsNamespaceRepoLfsFilesDuplicateMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoLfsFilesDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoLfsFilesDuplicateMutationOptions<
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

export function usePostApiSpacesNamespaceRepoLfsFilesDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoLfsFilesDuplicateMutationOptions<
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

export function usePostApiBucketsNamespaceRepoLfsFilesDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBucketsNamespaceRepoLfsFilesDuplicateMutationOptions<
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

export function getApiModelsNamespaceRepoCommitsRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/commits/:rev', toValue(args)] as const
}

export function getApiModelsNamespaceRepoCommitsRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoCommitsRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoCommitsRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
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
                    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoCommitsRevQueryKey>
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
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['commits'][':rev']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoCommitsRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoCommitsRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoCommitsRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/commits/:rev', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoCommitsRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoCommitsRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoCommitsRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
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
                    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoCommitsRevQueryKey>
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
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['commits'][':rev']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoCommitsRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoCommitsRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoCommitsRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/commits/:rev', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoCommitsRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoCommitsRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoCommitsRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']>
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
                    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoCommitsRevQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['commits'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoCommitsRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoCommitsRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].commits[':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoRefsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/refs', toValue(args)] as const
}

export function getApiModelsNamespaceRepoRefsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoRefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].refs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>
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
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoRefsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoRefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoRefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].refs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoRefsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/refs', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoRefsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoRefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].refs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoRefsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoRefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoRefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].refs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoRefsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/refs', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoRefsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoRefsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].refs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoRefs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>
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
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoRefsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['refs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoRefsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoRefsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].refs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoCompareCompareQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/compare/:compare', toValue(args)] as const
}

export function getApiModelsNamespaceRepoCompareCompareQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoCompareCompareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoCompareCompare<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoCompareCompareQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoCompareCompareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoCompareCompareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoCompareCompareQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/compare/:compare', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoCompareCompareQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoCompareCompareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoCompareCompare<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoCompareCompareQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoCompareCompareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoCompareCompareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoCompareCompareQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/compare/:compare', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoCompareCompareQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoCompareCompareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoCompareCompare<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoCompareCompareQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['compare'][':compare']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoCompareCompareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoCompareCompareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].compare[':compare'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiModelsNamespaceRepoPathsInfoRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoPathsInfoRevMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoPathsInfoRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoPathsInfoRevMutationOptions<
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

export function usePostApiSpacesNamespaceRepoPathsInfoRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoPathsInfoRevMutationOptions<
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

export function usePostApiModelsNamespaceRepoPreuploadRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoPreuploadRevMutationOptions<
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

export function usePostApiSpacesNamespaceRepoPreuploadRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoPreuploadRevMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoPreuploadRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoPreuploadRevMutationOptions<
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

export function getApiModelsNamespaceRepoXetWriteTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-write-token/:rev', toValue(args)] as const
}

export function getApiModelsNamespaceRepoXetWriteTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoXetWriteTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoXetWriteTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoXetWriteTokenRevQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoXetWriteTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoXetWriteTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['xet-write-token'][':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-write-token/:rev', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoXetWriteTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoXetWriteTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoXetWriteTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-write-token'][':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-write-token/:rev', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoXetWriteTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoXetWriteTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['xet-write-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoXetWriteTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-write-token'][':rev'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiBucketsNamespaceRepoXetWriteTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-write-token', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoXetWriteTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoXetWriteTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepoXetWriteToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']>
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
                    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
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
                    (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoXetWriteTokenQueryKey>
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
              (typeof client.api.buckets)[':namespace'][':repo']['xet-write-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoXetWriteTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoXetWriteTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-write-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiContainersNamespaceRepoXetWriteTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
    >
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-write-token', toValue(args)] as const
}

export function getApiContainersNamespaceRepoXetWriteTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceRepoXetWriteTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['xet-write-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespaceRepoXetWriteToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceRepoXetWriteTokenQueryKey>
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
              (typeof client.api.containers)[':namespace'][':repo']['xet-write-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoXetWriteTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceRepoXetWriteTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'][':repo']['xet-write-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoXetReadTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/xet-read-token/:rev', toValue(args)] as const
}

export function getApiModelsNamespaceRepoXetReadTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoXetReadTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoXetReadTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoXetReadTokenRevQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoXetReadTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoXetReadTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoXetReadTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/xet-read-token/:rev', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoXetReadTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoXetReadTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoXetReadTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoXetReadTokenRevQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoXetReadTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoXetReadTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/xet-read-token/:rev', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoXetReadTokenRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoXetReadTokenRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['xet-read-token'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoXetReadTokenRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo']['xet-read-token'][':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBucketsNamespaceRepoXetReadTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/xet-read-token', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoXetReadTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoXetReadTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepoXetReadToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
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
                    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
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
                    (typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoXetReadTokenQueryKey>
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
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['xet-read-token']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoXetReadTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoXetReadTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo']['xet-read-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiContainersNamespaceRepoXetReadTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
    >
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/xet-read-token', toValue(args)] as const
}

export function getApiContainersNamespaceRepoXetReadTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceRepoXetReadTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['xet-read-token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespaceRepoXetReadToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceRepoXetReadTokenQueryKey>
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
              (typeof client.api.containers)[':namespace'][':repo']['xet-read-token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoXetReadTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceRepoXetReadTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'][':repo']['xet-read-token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiModelsNamespaceRepoCommitRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoCommitRevMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoCommitRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoCommitRevMutationOptions<
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

export function usePostApiSpacesNamespaceRepoCommitRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoCommitRevMutationOptions<
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

export function getApiModelsNamespaceRepoResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/resource-group', toValue(args)] as const
}

export function getApiModelsNamespaceRepoResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
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
                    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoResourceGroupQueryKey>
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
            ReturnType<(typeof client.api.models)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiModelsNamespaceRepoResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoResourceGroupMutationOptions<
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

export function getApiSpacesNamespaceRepoResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/resource-group', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
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
                    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoResourceGroupQueryKey>
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
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiSpacesNamespaceRepoResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoResourceGroupMutationOptions<
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

export function getApiDatasetsNamespaceRepoResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/resource-group', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']>
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
                    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoResourceGroupQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiDatasetsNamespaceRepoResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoResourceGroupMutationOptions<
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

export function getApiBucketsNamespaceRepoResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/resource-group', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepoResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
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
                    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoResourceGroupQueryKey>
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
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['resource-group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBucketsNamespaceRepoResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBucketsNamespaceRepoResourceGroupMutationOptions<
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

export function getApiContainersNamespaceRepoResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
    >
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/resource-group', toValue(args)] as const
}

export function getApiContainersNamespaceRepoResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceRepoResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'][':repo']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespaceRepoResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceRepoResourceGroupQueryKey>
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
              (typeof client.api.containers)[':namespace'][':repo']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceRepoResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'][':repo']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiContainersNamespaceRepoResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiContainersNamespaceRepoResourceGroupMutationOptions<
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

export function usePostApiModelsNamespaceRepoSuperSquashRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoSuperSquashRevMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoSuperSquashRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoSuperSquashRevMutationOptions<
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

export function usePostApiSpacesNamespaceRepoSuperSquashRev<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiSpacesNamespaceRepoSuperSquashRevMutationOptions<
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

export function usePutApiModelsNamespaceRepoSettings<
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
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.models)[':namespace'][':repo']['settings']['$put']>,
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
  const mutationDefaults = getPutApiModelsNamespaceRepoSettingsMutationOptions<
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

export function usePutApiSpacesNamespaceRepoSettings<
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
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['settings']['$put']>,
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
  const mutationDefaults = getPutApiSpacesNamespaceRepoSettingsMutationOptions<
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

export function usePutApiDatasetsNamespaceRepoSettings<
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
                    (typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['settings']['$put']>,
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
  const mutationDefaults = getPutApiDatasetsNamespaceRepoSettingsMutationOptions<
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

export function getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/:repoType/:namespace/:repo/settings/trusted-publishers',
    toValue(args),
  ] as const
}

export function getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiRepoTypeNamespaceRepoSettingsTrustedPublishers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey>
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
              (typeof client.api)[':repoType'][':namespace'][':repo']['settings']['trusted-publishers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRepoTypeNamespaceRepoSettingsTrustedPublishersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':repoType'][':namespace'][':repo'].settings['trusted-publishers'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRepoTypeNamespaceRepoSettingsTrustedPublishers<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoSettingsTrustedPublishersMutationOptions<
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

export function getApiModelsNamespaceRepoTreeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/tree/:rev/:path', toValue(args)] as const
}

export function getApiModelsNamespaceRepoTreeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoTreeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoTreeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoTreeRevPathQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoTreeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoTreeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoTreeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/tree/:rev/:path', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoTreeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoTreeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoTreeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoTreeRevPathQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoTreeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoTreeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoTreeRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/tree/:rev/:path', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoTreeRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoTreeRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoTreeRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoTreeRevPathQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['tree'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoTreeRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoTreeRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].tree[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoNotebookRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/notebook/:rev/:path', toValue(args)] as const
}

export function getApiModelsNamespaceRepoNotebookRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoNotebookRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoNotebookRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoNotebookRevPathQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoNotebookRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoNotebookRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoNotebookRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/notebook/:rev/:path', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoNotebookRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoNotebookRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoNotebookRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoNotebookRevPathQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoNotebookRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoNotebookRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoNotebookRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/notebook/:rev/:path', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoNotebookRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoNotebookRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoNotebookRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
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
                    (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoNotebookRevPathQueryKey>
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
              (typeof client.api.spaces)[':namespace'][':repo']['notebook'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoNotebookRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoNotebookRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].notebook[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoScanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/scan', toValue(args)] as const
}

export function getApiModelsNamespaceRepoScanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoScanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].scan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>
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
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoScanQueryKey>
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
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoScanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoScanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].scan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoScanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/scan', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoScanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoScanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].scan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoScanQueryKey>
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
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoScanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoScanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].scan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoScanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/scan', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoScanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoScanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].scan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>
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
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoScanQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoScanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoScanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].scan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKernelsNamespaceRepoScanQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>
  >,
) {
  return ['api', '/api/kernels/:namespace/:repo/scan', toValue(args)] as const
}

export function getApiKernelsNamespaceRepoScanQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKernelsNamespaceRepoScanQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].scan.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKernelsNamespaceRepoScan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiKernelsNamespaceRepoScanQueryKey>
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
          Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['scan']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoScanQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKernelsNamespaceRepoScanQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.kernels[':namespace'][':repo'].scan.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRepoTypeNamespaceRepoDiscussionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']>
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions', toValue(args)] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRepoTypeNamespaceRepoDiscussions<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']>
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsQueryKey>
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
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRepoTypeNamespaceRepoDiscussions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsMutationOptions<
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

export function getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
    >
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num', toValue(args)] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRepoTypeNamespaceRepoDiscussionsNum<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey>
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
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsNumQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumComment<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumCommentMutationOptions<
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

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumStatusMutationOptions<
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

export function usePostApiRepoTypeNamespaceRepoDiscussionsNumTitle<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoDiscussionsNumTitleMutationOptions<
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

export function getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
    >
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/discussions/:num/storage', toValue(args)] as const
}

export function getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiRepoTypeNamespaceRepoDiscussionsNumStorage<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey>
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
              (typeof client.api)[':repoType'][':namespace'][':repo']['discussions'][':num']['storage']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRepoTypeNamespaceRepoDiscussionsNumStorageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':repoType'][':namespace'][':repo'].discussions[':num'].storage.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiKernelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.kernels.$get>>,
) {
  return ['api', '/api/kernels', toValue(args)] as const
}

export function getApiKernelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.kernels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKernelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.kernels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiKernels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.kernels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>
          >,
          ReturnType<typeof getApiKernelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.kernels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKernelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKernelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.kernels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKernelsNamespaceRepoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>
  >,
) {
  return ['api', '/api/kernels/:namespace/:repo', toValue(args)] as const
}

export function getApiKernelsNamespaceRepoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKernelsNamespaceRepoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKernelsNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiKernelsNamespaceRepoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.kernels)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKernelsNamespaceRepoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.kernels[':namespace'][':repo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiKernelsNamespaceRepoRevisionRevQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']>
  >,
) {
  return ['api', '/api/kernels/:namespace/:repo/revision/:rev', toValue(args)] as const
}

export function getApiKernelsNamespaceRepoRevisionRevQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiKernelsNamespaceRepoRevisionRevQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiKernelsNamespaceRepoRevisionRev<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']>
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
                    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
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
                    (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiKernelsNamespaceRepoRevisionRevQueryKey>
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
              (typeof client.api.kernels)[':namespace'][':repo']['revision'][':rev']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiKernelsNamespaceRepoRevisionRevQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiKernelsNamespaceRepoRevisionRevQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.kernels[':namespace'][':repo'].revision[':rev'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoLeaderboardQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/leaderboard', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoLeaderboardQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoLeaderboardQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].leaderboard.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoLeaderboard<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
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
                    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoLeaderboardQueryKey>
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
            ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['leaderboard']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoLeaderboardQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoLeaderboardQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].leaderboard.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoJwtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>
  >,
) {
  return ['api', '/api/models/:namespace/:repo/jwt', toValue(args)] as const
}

export function getApiModelsNamespaceRepoJwtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoJwtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo'].jwt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>
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
                  ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoJwtQueryKey>
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
          Awaited<ReturnType<(typeof client.api.models)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoJwtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoJwtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo'].jwt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoJwtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/jwt', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoJwtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoJwtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].jwt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>
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
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoJwtQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoJwtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoJwtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].jwt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoJwtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>
  >,
) {
  return ['api', '/api/datasets/:namespace/:repo/jwt', toValue(args)] as const
}

export function getApiDatasetsNamespaceRepoJwtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoJwtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo'].jwt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoJwt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoJwtQueryKey>
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
          Awaited<ReturnType<(typeof client.api.datasets)[':namespace'][':repo']['jwt']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoJwtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoJwtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo'].jwt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiAgentHarnessesQueryKey() {
  return ['api', '/api/agent-harnesses'] as const
}

export function getApiAgentHarnessesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiAgentHarnessesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['agent-harnesses'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAgentHarnesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAgentHarnessesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['agent-harnesses']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAgentHarnessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiAgentHarnessesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api['agent-harnesses'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsTagsByTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>>,
) {
  return ['api', '/api/models-tags-by-type', toValue(args)] as const
}

export function getApiModelsTagsByTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsTagsByTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['models-tags-by-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiModelsTagsByType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['models-tags-by-type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiModelsTagsByTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['models-tags-by-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsTagsByTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsTagsByTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['models-tags-by-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsTagsByTypeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>>,
) {
  return ['api', '/api/datasets-tags-by-type', toValue(args)] as const
}

export function getApiDatasetsTagsByTypeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsTagsByTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['datasets-tags-by-type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDatasetsTagsByType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api)['datasets-tags-by-type']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDatasetsTagsByTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['datasets-tags-by-type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsTagsByTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsTagsByTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['datasets-tags-by-type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.trending.$get>>,
) {
  return ['api', '/api/trending', toValue(args)] as const
}

export function getApiTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.trending.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiTrending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>
          >,
          ReturnType<typeof getApiTrendingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.trending.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiQuicksearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quicksearch.$get>>,
) {
  return ['api', '/api/quicksearch', toValue(args)] as const
}

export function getApiQuicksearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quicksearch.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiQuicksearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.quicksearch.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiQuicksearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.quicksearch.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>
            >
          >,
          ReturnType<typeof getApiQuicksearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiQuicksearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiQuicksearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.quicksearch.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiQuicksearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.quicksearch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.quicksearch.$post>,
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
  const mutationDefaults = getPostApiQuicksearchMutationOptions<TError, TOnMutateResult>(
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

export function getApiSpacesHardwareQueryKey() {
  return ['api', '/api/spaces/hardware'] as const
}

export function getApiSpacesHardwareQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSpacesHardwareQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces.hardware.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>
            >
          >,
          ReturnType<typeof getApiSpacesHardwareQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.hardware.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesHardwareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSpacesHardwareQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces.hardware.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesTemplatesQueryKey() {
  return ['api', '/api/spaces/templates'] as const
}

export function getApiSpacesTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSpacesTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>
            >
          >,
          ReturnType<typeof getApiSpacesTemplatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.spaces.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSpacesTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces.templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesZeroGpuQuotaQueryKey() {
  return ['api', '/api/spaces/zero-gpu/quota'] as const
}

export function getApiSpacesZeroGpuQuotaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiSpacesZeroGpuQuotaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces['zero-gpu'].quota.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesZeroGpuQuota<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiSpacesZeroGpuQuotaQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)['zero-gpu']['quota']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesZeroGpuQuotaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiSpacesZeroGpuQuotaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces['zero-gpu'].quota.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoSecretsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/secrets', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoSecretsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].secrets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoSecretsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSpacesNamespaceRepoVariablesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
  >,
) {
  return ['api', '/api/spaces/:namespace/:repo/variables', toValue(args)] as const
}

export function getApiSpacesNamespaceRepoVariablesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSpacesNamespaceRepoVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.spaces[':namespace'][':repo'].variables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSpacesNamespaceRepoVariables<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiSpacesNamespaceRepoVariablesQueryKey>
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
            ReturnType<(typeof client.api.spaces)[':namespace'][':repo']['variables']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSpacesNamespaceRepoVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSpacesNamespaceRepoVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.spaces[':namespace'][':repo'].variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiRepoTypeNamespaceRepoDuplicate<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoDuplicateMutationOptions<
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

export function getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
    >
  >,
) {
  return ['api', '/api/:repoType/:namespace/:repo/duplicate/status', toValue(args)] as const
}

export function getApiRepoTypeNamespaceRepoDuplicateStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRepoTypeNamespaceRepoDuplicateStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
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
                    (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey>
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
              (typeof client.api)[':repoType'][':namespace'][':repo']['duplicate']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRepoTypeNamespaceRepoDuplicateStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':repoType'][':namespace'][':repo'].duplicate.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiReposCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.repos.create.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.repos.create.$post>,
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
  const mutationDefaults = getPostApiReposCreateMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
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

export function usePatchApiRepoTypeNamespaceRepoSqlConsoleEmbedId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiRepoTypeNamespaceRepoSqlConsoleEmbedIdMutationOptions<
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

export function usePostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHide<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedIdHideMutationOptions<
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

export function usePostApiRepoTypeNamespaceRepoSqlConsoleEmbed<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRepoTypeNamespaceRepoSqlConsoleEmbedMutationOptions<
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

export function getSpacesNamespaceRepoResolveRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['spaces', '/spaces/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getSpacesNamespaceRepoResolveRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpacesNamespaceRepoResolveRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSpacesNamespaceRepoResolveRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
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
                    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
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
                    (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSpacesNamespaceRepoResolveRevPathQueryKey>
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
              (typeof client.spaces)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSpacesNamespaceRepoResolveRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpacesNamespaceRepoResolveRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.spaces[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetsNamespaceRepoResolveRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['datasets', '/datasets/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getDatasetsNamespaceRepoResolveRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsNamespaceRepoResolveRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsNamespaceRepoResolveRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
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
                    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
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
                    (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasetsNamespaceRepoResolveRevPathQueryKey>
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
              (typeof client.datasets)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNamespaceRepoResolveRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsNamespaceRepoResolveRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNamespaceRepoResolveRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':namespace', '/:namespace/:repo/resolve/:rev/:path', keyArgs] as const
}

export function getNamespaceRepoResolveRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamespaceRepoResolveRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamespaceRepoResolveRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
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
                    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
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
                    (typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNamespaceRepoResolveRevPathQueryKey>
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
            ReturnType<(typeof client)[':namespace'][':repo']['resolve'][':rev'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespaceRepoResolveRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamespaceRepoResolveRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':namespace'][':repo'].resolve[':rev'][':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/resolve-cache/spaces/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheSpacesNamespaceRepoRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiResolveCacheSpacesNamespaceRepoRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey>
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
              (typeof client.api)['resolve-cache']['spaces'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiResolveCacheSpacesNamespaceRepoRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['resolve-cache'].spaces[':namespace'][':repo'][':rev'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/resolve-cache/datasets/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheDatasetsNamespaceRepoRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiResolveCacheDatasetsNamespaceRepoRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey>
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
              (typeof client.api)['resolve-cache']['datasets'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiResolveCacheDatasetsNamespaceRepoRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['resolve-cache'].datasets[':namespace'][':repo'][':rev'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiResolveCacheModelsNamespaceRepoRevPathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/resolve-cache/models/:namespace/:repo/:rev/:path', keyArgs] as const
}

export function getApiResolveCacheModelsNamespaceRepoRevPathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiResolveCacheModelsNamespaceRepoRevPathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiResolveCacheModelsNamespaceRepoRevPath<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
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
                    (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiResolveCacheModelsNamespaceRepoRevPathQueryKey>
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
              (typeof client.api)['resolve-cache']['models'][':namespace'][':repo'][':rev'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiResolveCacheModelsNamespaceRepoRevPathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiResolveCacheModelsNamespaceRepoRevPathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['resolve-cache'].models[':namespace'][':repo'][':rev'][':path'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostNamespaceRepoAskAccess<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNamespaceRepoAskAccessMutationOptions<TError, TOnMutateResult>(
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

export function usePostDatasetsNamespaceRepoAskAccess<
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
                  ReturnType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasets)[':namespace'][':repo']['ask-access']['$post']>,
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
  const mutationDefaults = getPostDatasetsNamespaceRepoAskAccessMutationOptions<
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

export function getNamespaceRepoUserAccessReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
  >,
) {
  return [':namespace', '/:namespace/:repo/user-access-report', toValue(args)] as const
}

export function getNamespaceRepoUserAccessReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNamespaceRepoUserAccessReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':namespace'][':repo']['user-access-report'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNamespaceRepoUserAccessReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNamespaceRepoUserAccessReportQueryKey>
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
          Awaited<ReturnType<(typeof client)[':namespace'][':repo']['user-access-report']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespaceRepoUserAccessReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNamespaceRepoUserAccessReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':namespace'][':repo']['user-access-report'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetsNamespaceRepoUserAccessReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']>
  >,
) {
  return ['datasets', '/datasets/:namespace/:repo/user-access-report', toValue(args)] as const
}

export function getDatasetsNamespaceRepoUserAccessReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsNamespaceRepoUserAccessReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':namespace'][':repo']['user-access-report'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsNamespaceRepoUserAccessReport<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']>
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
                    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
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
                    (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasetsNamespaceRepoUserAccessReportQueryKey>
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
              (typeof client.datasets)[':namespace'][':repo']['user-access-report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsNamespaceRepoUserAccessReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsNamespaceRepoUserAccessReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':namespace'][':repo']['user-access-report'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
    >
  >,
) {
  return ['api', '/api/models/:namespace/:repo/user-access-request/:status', toValue(args)] as const
}

export function getApiModelsNamespaceRepoUserAccessRequestStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiModelsNamespaceRepoUserAccessRequestStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
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
                    (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey>
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
              (typeof client.api.models)[':namespace'][':repo']['user-access-request'][':status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiModelsNamespaceRepoUserAccessRequestStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.models[':namespace'][':repo']['user-access-request'][':status'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/datasets/:namespace/:repo/user-access-request/:status',
    toValue(args),
  ] as const
}

export function getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiDatasetsNamespaceRepoUserAccessRequestStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
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
                    (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey>
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
              (typeof client.api.datasets)[':namespace'][':repo']['user-access-request'][':status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDatasetsNamespaceRepoUserAccessRequestStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.datasets[':namespace'][':repo']['user-access-request'][':status'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiModelsNamespaceRepoUserAccessRequestBatch<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiModelsNamespaceRepoUserAccessRequestBatchMutationOptions<
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

export function usePostApiDatasetsNamespaceRepoUserAccessRequestBatch<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiDatasetsNamespaceRepoUserAccessRequestBatchMutationOptions<
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

export function getApiDailyPapersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.daily_papers.$get>>,
) {
  return ['api', '/api/daily_papers', toValue(args)] as const
}

export function getApiDailyPapersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.daily_papers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDailyPapersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.daily_papers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDailyPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.daily_papers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>
            >
          >,
          ReturnType<typeof getApiDailyPapersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.daily_papers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDailyPapersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDailyPapersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.daily_papers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPapersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.papers.$get>>,
) {
  return ['api', '/api/papers', toValue(args)] as const
}

export function getApiPapersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.papers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPapersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.papers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPapers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.papers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>
          >,
          ReturnType<typeof getApiPapersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPapersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPapersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.papers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPapersIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.papers.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.papers.index.$post>,
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
  const mutationDefaults = getPostApiPapersIndexMutationOptions<TError, TOnMutateResult>(
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

export function getApiPapersPaperIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.papers)[':paperId']['$get']>>,
) {
  return ['api', '/api/papers/:paperId', toValue(args)] as const
}

export function getApiPapersPaperIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.papers)[':paperId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPapersPaperIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.papers[':paperId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPapersPaperId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.papers)[':paperId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPapersPaperIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.papers)[':paperId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPapersPaperIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPapersPaperIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.papers[':paperId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiPapersPaperIdComment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPapersPaperIdCommentMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiPapersPaperIdCommentCommentIdReply<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPapersPaperIdCommentCommentIdReplyMutationOptions<
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

export function usePostApiPapersPaperIdLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPapersPaperIdLinksMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiPapersPaperIdMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPapersPaperIdMediaMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiPostsUsernamePostSlugComment<
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
                    (typeof client.api.posts)[':username'][':postSlug']['comment']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.posts)[':username'][':postSlug']['comment']['$post']>,
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
  const mutationDefaults = getPostApiPostsUsernamePostSlugCommentMutationOptions<
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

export function usePostApiPostsUsernamePostSlugCommentCommentIdReply<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPostsUsernamePostSlugCommentCommentIdReplyMutationOptions<
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

export function getApiCollectionsNamespaceSlugIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>
  >,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}', toValue(args)] as const
}

export function getApiCollectionsNamespaceSlugIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCollectionsNamespaceSlugIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCollectionsNamespaceSlugId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiCollectionsNamespaceSlugIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCollectionsNamespaceSlugIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.collections[':namespace'][':slug-{id}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiCollectionsNamespaceSlugId<
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
                  ReturnType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.collections)[':namespace'][':slug-{id}']['$patch']>,
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
  const mutationDefaults = getPatchApiCollectionsNamespaceSlugIdMutationOptions<
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

export function getApiCollectionsNamespaceSlugQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>
  >,
) {
  return ['api', '/api/collections/:namespace/:slug', toValue(args)] as const
}

export function getApiCollectionsNamespaceSlugQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCollectionsNamespaceSlugQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.collections[':namespace'][':slug'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCollectionsNamespaceSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCollectionsNamespaceSlugQueryKey>
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
          Awaited<ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCollectionsNamespaceSlugQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.collections[':namespace'][':slug'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchApiCollectionsNamespaceSlug<
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
                  ReturnType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.collections)[':namespace'][':slug']['$patch']>,
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
  const mutationDefaults = getPatchApiCollectionsNamespaceSlugMutationOptions<
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

export function usePostApiCollectionsNamespaceSlugIdItems<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCollectionsNamespaceSlugIdItemsMutationOptions<
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

export function usePostApiCollectionsNamespaceSlugItems<
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
                    (typeof client.api.collections)[':namespace'][':slug']['items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.collections)[':namespace'][':slug']['items']['$post']
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
  const mutationDefaults = getPostApiCollectionsNamespaceSlugItemsMutationOptions<
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

export function getApiCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.collections.$get>>,
) {
  return ['api', '/api/collections', toValue(args)] as const
}

export function getApiCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>
            >
          >,
          ReturnType<typeof getApiCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.collections.$post>,
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
  const mutationDefaults = getPostApiCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiCollectionsNamespaceSlugIdResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
    >
  >,
) {
  return ['api', '/api/collections/:namespace/:slug-{id}/resource-group', toValue(args)] as const
}

export function getApiCollectionsNamespaceSlugIdResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCollectionsNamespaceSlugIdResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.collections[':namespace'][':slug-{id}']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCollectionsNamespaceSlugIdResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
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
                    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
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
                    (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCollectionsNamespaceSlugIdResourceGroupQueryKey>
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
              (typeof client.api.collections)[':namespace'][':slug-{id}']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugIdResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCollectionsNamespaceSlugIdResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.collections[':namespace'][':slug-{id}']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCollectionsNamespaceSlugIdResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCollectionsNamespaceSlugIdResourceGroupMutationOptions<
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

export function getApiCollectionsNamespaceSlugResourceGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
    >
  >,
) {
  return ['api', '/api/collections/:namespace/:slug/resource-group', toValue(args)] as const
}

export function getApiCollectionsNamespaceSlugResourceGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCollectionsNamespaceSlugResourceGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.collections[':namespace'][':slug']['resource-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCollectionsNamespaceSlugResourceGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
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
                    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
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
                    (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCollectionsNamespaceSlugResourceGroupQueryKey>
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
              (typeof client.api.collections)[':namespace'][':slug']['resource-group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCollectionsNamespaceSlugResourceGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCollectionsNamespaceSlugResourceGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.collections[':namespace'][':slug']['resource-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiCollectionsNamespaceSlugResourceGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiCollectionsNamespaceSlugResourceGroupMutationOptions<
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

export function getApiBucketsNamespaceRepoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBucketsNamespaceRepo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiBucketsNamespaceRepoMutationOptions<TError, TOnMutateResult>(
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

export function getApiContainersNamespaceRepoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>
  >,
) {
  return ['api', '/api/containers/:namespace/:repo', toValue(args)] as const
}

export function getApiContainersNamespaceRepoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceRepoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'][':repo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespaceRepo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceRepoQueryKey>
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
          Awaited<ReturnType<(typeof client.api.containers)[':namespace'][':repo']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceRepoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'][':repo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiContainersNamespaceRepo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiContainersNamespaceRepoMutationOptions<
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

export function usePutApiBucketsNamespaceRepoSettings<
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
                  ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['settings']['$put']>,
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
  const mutationDefaults = getPutApiBucketsNamespaceRepoSettingsMutationOptions<
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

export function usePutApiContainersNamespaceRepoSettings<
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
                    (typeof client.api.containers)[':namespace'][':repo']['settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.containers)[':namespace'][':repo']['settings']['$put']
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
  const mutationDefaults = getPutApiContainersNamespaceRepoSettingsMutationOptions<
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

export function getApiBucketsNamespaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>>,
) {
  return ['api', '/api/buckets/:namespace', toValue(args)] as const
}

export function getApiBucketsNamespaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.buckets)[':namespace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.buckets)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiContainersNamespaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.containers)[':namespace']['$get']>>,
) {
  return ['api', '/api/containers/:namespace', toValue(args)] as const
}

export function getApiContainersNamespaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.containers)[':namespace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.containers)[':namespace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceQueryKey>
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
          Awaited<ReturnType<(typeof client.api.containers)[':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBucketsNamespaceRepoResolvePathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['buckets', '/buckets/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function getBucketsNamespaceRepoResolvePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBucketsNamespaceRepoResolvePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.buckets[':namespace'][':repo'].resolve[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBucketsNamespaceRepoResolvePath<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
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
                    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
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
                    (typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBucketsNamespaceRepoResolvePathQueryKey>
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
            ReturnType<(typeof client.buckets)[':namespace'][':repo']['resolve'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBucketsNamespaceRepoResolvePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBucketsNamespaceRepoResolvePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.buckets[':namespace'][':repo'].resolve[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContainersNamespaceRepoResolvePathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['containers', '/containers/:namespace/:repo/resolve/:path', keyArgs] as const
}

export function getContainersNamespaceRepoResolvePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContainersNamespaceRepoResolvePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.containers[':namespace'][':repo'].resolve[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContainersNamespaceRepoResolvePath<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']>
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
                    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
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
                    (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getContainersNamespaceRepoResolvePathQueryKey>
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
              (typeof client.containers)[':namespace'][':repo']['resolve'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContainersNamespaceRepoResolvePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContainersNamespaceRepoResolvePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.containers[':namespace'][':repo'].resolve[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBucketsNamespaceRepoBatch<
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
                  ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['batch']['$post']>,
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
  const mutationDefaults = getPostApiBucketsNamespaceRepoBatchMutationOptions<
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

export function usePostApiContainersNamespaceRepoBatch<
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
                    (typeof client.api.containers)[':namespace'][':repo']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['batch']['$post']>,
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
  const mutationDefaults = getPostApiContainersNamespaceRepoBatchMutationOptions<
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

export function getApiBucketsNamespaceRepoTreePathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/tree/:path', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoTreePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoTreePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].tree[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepoTreePath<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
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
                    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
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
                    (typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoTreePathQueryKey>
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
            ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['tree'][':path']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoTreePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoTreePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo'].tree[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiContainersNamespaceRepoTreePathQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']>
  >,
) {
  return ['api', '/api/containers/:namespace/:repo/tree/:path', toValue(args)] as const
}

export function getApiContainersNamespaceRepoTreePathQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiContainersNamespaceRepoTreePathQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.containers[':namespace'][':repo'].tree[':path'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiContainersNamespaceRepoTreePath<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']>
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
                    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
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
                    (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiContainersNamespaceRepoTreePathQueryKey>
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
              (typeof client.api.containers)[':namespace'][':repo']['tree'][':path']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiContainersNamespaceRepoTreePathQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiContainersNamespaceRepoTreePathQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.containers[':namespace'][':repo'].tree[':path'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBucketsNamespaceRepoEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
  >,
) {
  return ['api', '/api/buckets/:namespace/:repo/events', toValue(args)] as const
}

export function getApiBucketsNamespaceRepoEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBucketsNamespaceRepoEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.buckets[':namespace'][':repo'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBucketsNamespaceRepoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiBucketsNamespaceRepoEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.buckets)[':namespace'][':repo']['events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBucketsNamespaceRepoEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBucketsNamespaceRepoEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.buckets[':namespace'][':repo'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiBucketsNamespaceRepoPathsInfo<
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
                    (typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.buckets)[':namespace'][':repo']['paths-info']['$post']
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
  const mutationDefaults = getPostApiBucketsNamespaceRepoPathsInfoMutationOptions<
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

export function usePostApiContainersNamespaceRepoPathsInfo<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiContainersNamespaceRepoPathsInfoMutationOptions<
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

export function getApiJobsHardwareQueryKey() {
  return ['api', '/api/jobs/hardware'] as const
}

export function getApiJobsHardwareQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiJobsHardwareQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs.hardware.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsHardware<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>
            >
          >,
          ReturnType<typeof getApiJobsHardwareQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.hardware.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsHardwareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiJobsHardwareQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs.hardware.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsNamespaceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>>,
) {
  return ['api', '/api/jobs/:namespace', toValue(args)] as const
}

export function getApiJobsNamespaceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsNamespaceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiJobsNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiJobsNamespaceMutationOptions<TError, TOnMutateResult>(
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

export function getApiJobsNamespaceCountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>>,
) {
  return ['api', '/api/jobs/:namespace/count', toValue(args)] as const
}

export function getApiJobsNamespaceCountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsNamespaceCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':namespace'].count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsNamespaceCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.jobs)[':namespace']['count']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsNamespaceCountQueryKey>
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
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsNamespaceCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':namespace'].count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJobsNamespaceJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>
  >,
) {
  return ['api', '/api/jobs/:namespace/:jobId', toValue(args)] as const
}

export function getApiJobsNamespaceJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJobsNamespaceJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.jobs[':namespace'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJobsNamespaceJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJobsNamespaceJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsNamespaceJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJobsNamespaceJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.jobs[':namespace'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiJobsNamespaceJobIdCancel<
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
                  ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['cancel']['$post']>,
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
  const mutationDefaults = getPostApiJobsNamespaceJobIdCancelMutationOptions<
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

export function usePostApiJobsNamespaceJobIdDuplicate<
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
                  ReturnType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':namespace'][':jobId']['duplicate']['$post']>,
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
  const mutationDefaults = getPostApiJobsNamespaceJobIdDuplicateMutationOptions<
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

export function usePutApiJobsNamespaceJobIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiJobsNamespaceJobIdLabelsMutationOptions<
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

export function usePutApiJobsNamespaceJobIdExpose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiJobsNamespaceJobIdExposeMutationOptions<
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

export function getApiScheduledJobsNamespaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>
  >,
) {
  return ['api', '/api/scheduled-jobs/:namespace', toValue(args)] as const
}

export function getApiScheduledJobsNamespaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiScheduledJobsNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiScheduledJobsNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiScheduledJobsNamespaceQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScheduledJobsNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiScheduledJobsNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['scheduled-jobs'][':namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiScheduledJobsNamespace<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiScheduledJobsNamespaceMutationOptions<TError, TOnMutateResult>(
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

export function getApiScheduledJobsNamespaceJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
  >,
) {
  return ['api', '/api/scheduled-jobs/:namespace/:jobId', toValue(args)] as const
}

export function getApiScheduledJobsNamespaceJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiScheduledJobsNamespaceJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['scheduled-jobs'][':namespace'][':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiScheduledJobsNamespaceJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiScheduledJobsNamespaceJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['scheduled-jobs'][':namespace'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiScheduledJobsNamespaceJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiScheduledJobsNamespaceJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['scheduled-jobs'][':namespace'][':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiScheduledJobsNamespaceJobIdRun<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiScheduledJobsNamespaceJobIdRunMutationOptions<
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

export function usePostApiScheduledJobsNamespaceJobIdSchedule<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiScheduledJobsNamespaceJobIdScheduleMutationOptions<
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

export function usePutApiScheduledJobsNamespaceJobIdLabels<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiScheduledJobsNamespaceJobIdLabelsMutationOptions<
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
