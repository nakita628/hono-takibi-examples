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

export function getAppKey() {
  return ['app'] as const
}

export function getBlocklistsKey() {
  return ['blocklists'] as const
}

export function getCallsKey() {
  return ['calls'] as const
}

export function getCampaignsKey() {
  return ['campaigns'] as const
}

export function getChannelsKey() {
  return ['channels'] as const
}

export function getChanneltypesKey() {
  return ['channeltypes'] as const
}

export function getCheckPushKey() {
  return ['check_push'] as const
}

export function getCheckSqsKey() {
  return ['check_sqs'] as const
}

export function getCommandsKey() {
  return ['commands'] as const
}

export function getConnectKey() {
  return ['connect'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getExportChannelsKey() {
  return ['export_channels'] as const
}

export function getGuestKey() {
  return ['guest'] as const
}

export function getImportUrlsKey() {
  return ['import_urls'] as const
}

export function getImportsKey() {
  return ['imports'] as const
}

export function getLongpollKey() {
  return ['longpoll'] as const
}

export function getMembersKey() {
  return ['members'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getModerationKey() {
  return ['moderation'] as const
}

export function getOgKey() {
  return ['og'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getPushProvidersKey() {
  return ['push_providers'] as const
}

export function getQueryBannedUsersKey() {
  return ['query_banned_users'] as const
}

export function getRateLimitsKey() {
  return ['rate_limits'] as const
}

export function getRecipientsKey() {
  return ['recipients'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getSegmentsKey() {
  return ['segments'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getTasksKey() {
  return ['tasks'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getAppQueryKey() {
  return ['app', '/app'] as const
}

export function getAppQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAppQueryKey>
  >({
    queryKey: getAppQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.app.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApp<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAppQueryKey>
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
    return { ...getAppQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchAppMutationKey() {
  return ['app', '/app', 'PATCH'] as const
}

export function getPatchAppMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$patch>>>>>,
    TError,
    InferRequestType<typeof client.app.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.app.$patch>) {
      return parseResponse(client.app.$patch(args, options))
    },
  })
}

export function createPatchApp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.$patch>>>>>,
          TError,
          InferRequestType<typeof client.app.$patch>,
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
    const mutationDefaults = getPatchAppMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistsQueryKey() {
  return ['blocklists', '/blocklists'] as const
}

export function getBlocklistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlocklistsQueryKey>
  >({
    queryKey: getBlocklistsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistsQueryKey>
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
    return { ...getBlocklistsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostBlocklistsMutationKey() {
  return ['blocklists', '/blocklists', 'POST'] as const
}

export function getPostBlocklistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>>,
    TError,
    InferRequestType<typeof client.blocklists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklists.$post>) {
      return parseResponse(client.blocklists.$post(args, options))
    },
  })
}

export function createPostBlocklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.blocklists.$post>,
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
    const mutationDefaults = getPostBlocklistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistsNameQueryKey(
  args: InferRequestType<(typeof client.blocklists)[':name']['$get']>,
) {
  return ['blocklists', '/blocklists/:name', args] as const
}

export function getBlocklistsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocklists)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistsNameQueryKey>
  >({
    queryKey: getBlocklistsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklists[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklistsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocklists)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistsNameQueryKey>
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
    return { ...getBlocklistsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBlocklistsNameMutationKey() {
  return ['blocklists', '/blocklists/:name', 'PUT'] as const
}

export function getPutBlocklistsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.blocklists)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlocklistsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blocklists)[':name']['$put']>) {
      return parseResponse(client.blocklists[':name'].$put(args, options))
    },
  })
}

export function createPutBlocklistsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklists)[':name']['$put']>,
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
    const mutationDefaults = getPutBlocklistsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBlocklistsNameMutationKey() {
  return ['blocklists', '/blocklists/:name', 'DELETE'] as const
}

export function getDeleteBlocklistsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.blocklists)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlocklistsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blocklists)[':name']['$delete']>) {
      return parseResponse(client.blocklists[':name'].$delete(args, options))
    },
  })
}

export function createDeleteBlocklistsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.blocklists)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklists)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteBlocklistsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCallsIndexMutationKey() {
  return ['calls', '/calls/', 'POST'] as const
}

export function getPostCallsIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.calls.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calls.index.$post>) {
      return parseResponse(client.calls.index.$post(args, options))
    },
  })
}

export function createPostCallsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.calls.index.$post>,
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
    const mutationDefaults = getPostCallsIndexMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCallsCallIdMutationKey() {
  return ['calls', '/calls/:call_id', 'POST'] as const
}

export function getPostCallsCallIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.calls)[':call_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsCallIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.calls)[':call_id']['$post']>) {
      return parseResponse(client.calls[':call_id'].$post(args, options))
    },
  })
}

export function createPostCallsCallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.calls)[':call_id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.calls)[':call_id']['$post']>,
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
    const mutationDefaults = getPostCallsCallIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCampaignsQueryKey(args: InferRequestType<typeof client.campaigns.$get>) {
  return ['campaigns', '/campaigns', args] as const
}

export function getCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >({
    queryKey: getCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.campaigns.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCampaignsQueryKey>
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
    return { ...getCampaignsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCampaignsMutationKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function getPostCampaignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    InferRequestType<typeof client.campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.campaigns.$post>) {
      return parseResponse(client.campaigns.$post(args, options))
    },
  })
}

export function createPostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.campaigns.$post>,
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
    const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutCampaignsIdMutationKey() {
  return ['campaigns', '/campaigns/:id', 'PUT'] as const
}

export function getPutCampaignsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['$put']>) {
      return parseResponse(client.campaigns[':id'].$put(args, options))
    },
  })
}

export function createPutCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['$put']>,
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
    const mutationDefaults = getPutCampaignsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCampaignsIdMutationKey() {
  return ['campaigns', '/campaigns/:id', 'DELETE'] as const
}

export function getDeleteCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['$delete']>) {
      return parseResponse(client.campaigns[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCampaignsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchCampaignsIdResumeMutationKey() {
  return ['campaigns', '/campaigns/:id/resume', 'PATCH'] as const
}

export function getPatchCampaignsIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['resume']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['resume']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsIdResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['resume']['$patch']>) {
      return parseResponse(client.campaigns[':id'].resume.$patch(args, options))
    },
  })
}

export function createPatchCampaignsIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':id']['resume']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['resume']['$patch']>,
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
    const mutationDefaults = getPatchCampaignsIdResumeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchCampaignsIdScheduleMutationKey() {
  return ['campaigns', '/campaigns/:id/schedule', 'PATCH'] as const
}

export function getPatchCampaignsIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['schedule']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['schedule']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.campaigns)[':id']['schedule']['$patch']>,
    ) {
      return parseResponse(client.campaigns[':id'].schedule.$patch(args, options))
    },
  })
}

export function createPatchCampaignsIdSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':id']['schedule']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['schedule']['$patch']>,
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
    const mutationDefaults = getPatchCampaignsIdScheduleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchCampaignsIdStopMutationKey() {
  return ['campaigns', '/campaigns/:id/stop', 'PATCH'] as const
}

export function getPatchCampaignsIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['stop']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['stop']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCampaignsIdStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['stop']['$patch']>) {
      return parseResponse(client.campaigns[':id'].stop.$patch(args, options))
    },
  })
}

export function createPatchCampaignsIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':id']['stop']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['stop']['$patch']>,
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
    const mutationDefaults = getPatchCampaignsIdStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCampaignsIdTestMutationKey() {
  return ['campaigns', '/campaigns/:id/test', 'POST'] as const
}

export function getPostCampaignsIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['test']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsIdTestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>) {
      return parseResponse(client.campaigns[':id'].test.$post(args, options))
    },
  })
}

export function createPostCampaignsIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.campaigns)[':id']['test']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
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
    const mutationDefaults = getPostCampaignsIdTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function createPostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.$post>,
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
    const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsDeleteMutationKey() {
  return ['channels', '/channels/delete', 'POST'] as const
}

export function getPostChannelsDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.delete.$post>) {
      return parseResponse(client.channels.delete.$post(args, options))
    },
  })
}

export function createPostChannelsDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.channels.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.channels.delete.$post>,
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
    const mutationDefaults = getPostChannelsDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsReadMutationKey() {
  return ['channels', '/channels/read', 'POST'] as const
}

export function getPostChannelsReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.read.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channels.read.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsReadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.read.$post>) {
      return parseResponse(client.channels.read.$post(args, options))
    },
  })
}

export function createPostChannelsRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.read.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channels.read.$post>,
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
    const mutationDefaults = getPostChannelsReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeQueryMutationKey() {
  return ['channels', '/channels/:type/query', 'POST'] as const
}

export function getPostChannelsTypeQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeQueryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':type']['query']['$post']>) {
      return parseResponse(client.channels[':type'].query.$post(args, options))
    },
  })
}

export function createPostChannelsTypeQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type']['query']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdMutationKey() {
  return ['channels', '/channels/:type/:id', 'POST'] as const
}

export function getPostChannelsTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':type'][':id']['$post']>) {
      return parseResponse(client.channels[':type'][':id'].$post(args, options))
    },
  })
}

export function createPostChannelsTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChannelsTypeIdMutationKey() {
  return ['channels', '/channels/:type/:id', 'DELETE'] as const
}

export function getDeleteChannelsTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTypeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':type'][':id']['$delete']>) {
      return parseResponse(client.channels[':type'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteChannelsTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteChannelsTypeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchChannelsTypeIdMutationKey() {
  return ['channels', '/channels/:type/:id', 'PATCH'] as const
}

export function getPatchChannelsTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchChannelsTypeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':type'][':id']['$patch']>) {
      return parseResponse(client.channels[':type'][':id'].$patch(args, options))
    },
  })
}

export function createPatchChannelsTypeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['$patch']>,
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
    const mutationDefaults = getPatchChannelsTypeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdCallMutationKey() {
  return ['channels', '/channels/:type/:id/call', 'POST'] as const
}

export function getPostChannelsTypeIdCallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['call']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['call']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdCallMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['call']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].call.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdCall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['call']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['call']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdCallMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdEventMutationKey() {
  return ['channels', '/channels/:type/:id/event', 'POST'] as const
}

export function getPostChannelsTypeIdEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['event']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['event']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdEventMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['event']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].event.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['event']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['event']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdFileMutationKey() {
  return ['channels', '/channels/:type/:id/file', 'POST'] as const
}

export function getPostChannelsTypeIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['file']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['file']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['file']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].file.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['file']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['file']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChannelsTypeIdFileMutationKey() {
  return ['channels', '/channels/:type/:id/file', 'DELETE'] as const
}

export function getDeleteChannelsTypeIdFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['file']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['file']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTypeIdFileMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['file']['$delete']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].file.$delete(args, options))
    },
  })
}

export function createDeleteChannelsTypeIdFile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['file']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['file']['$delete']>,
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
    const mutationDefaults = getDeleteChannelsTypeIdFileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdHideMutationKey() {
  return ['channels', '/channels/:type/:id/hide', 'POST'] as const
}

export function getPostChannelsTypeIdHideMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['hide']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['hide']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdHideMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['hide']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].hide.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdHide<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['hide']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['hide']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdHideMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdImageMutationKey() {
  return ['channels', '/channels/:type/:id/image', 'POST'] as const
}

export function getPostChannelsTypeIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['image']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].image.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['image']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['image']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChannelsTypeIdImageMutationKey() {
  return ['channels', '/channels/:type/:id/image', 'DELETE'] as const
}

export function getDeleteChannelsTypeIdImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['image']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['image']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsTypeIdImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['image']['$delete']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].image.$delete(args, options))
    },
  })
}

export function createDeleteChannelsTypeIdImage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['image']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['image']['$delete']>,
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
    const mutationDefaults = getDeleteChannelsTypeIdImageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdMessageMutationKey() {
  return ['channels', '/channels/:type/:id/message', 'POST'] as const
}

export function getPostChannelsTypeIdMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['message']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['message']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdMessageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['message']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].message.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['message']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['message']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdMessageMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChannelsTypeIdMessagesQueryKey(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['messages']['$get']>,
) {
  return ['channels', '/channels/:type/:id/messages', args] as const
}

export function getChannelsTypeIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':type'][':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channels)[':type'][':id']['messages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['messages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsTypeIdMessagesQueryKey>
  >({
    queryKey: getChannelsTypeIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':type'][':id'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createChannelsTypeIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.channels)[':type'][':id']['messages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':type'][':id']['messages']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['messages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChannelsTypeIdMessagesQueryKey>
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
      ...getChannelsTypeIdMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdQueryMutationKey() {
  return ['channels', '/channels/:type/:id/query', 'POST'] as const
}

export function getPostChannelsTypeIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['query']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].query.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['query']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdReadMutationKey() {
  return ['channels', '/channels/:type/:id/read', 'POST'] as const
}

export function getPostChannelsTypeIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['read']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].read.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['read']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['read']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdReadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdShowMutationKey() {
  return ['channels', '/channels/:type/:id/show', 'POST'] as const
}

export function getPostChannelsTypeIdShowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['show']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['show']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdShowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['show']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].show.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdShow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['show']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['show']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdShowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdStopWatchingMutationKey() {
  return ['channels', '/channels/:type/:id/stop-watching', 'POST'] as const
}

export function getPostChannelsTypeIdStopWatchingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdStopWatchingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id']['stop-watching'].$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdStopWatching<
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
                  ReturnType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['stop-watching']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdStopWatchingMutationOptions<
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

export function getPostChannelsTypeIdTruncateMutationKey() {
  return ['channels', '/channels/:type/:id/truncate', 'POST'] as const
}

export function getPostChannelsTypeIdTruncateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['truncate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['truncate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdTruncateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['truncate']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].truncate.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdTruncate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['truncate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['truncate']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdTruncateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostChannelsTypeIdUnreadMutationKey() {
  return ['channels', '/channels/:type/:id/unread', 'POST'] as const
}

export function getPostChannelsTypeIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':type'][':id']['unread']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':type'][':id']['unread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsTypeIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':type'][':id']['unread']['$post']>,
    ) {
      return parseResponse(client.channels[':type'][':id'].unread.$post(args, options))
    },
  })
}

export function createPostChannelsTypeIdUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channels)[':type'][':id']['unread']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channels)[':type'][':id']['unread']['$post']>,
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
    const mutationDefaults = getPostChannelsTypeIdUnreadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChanneltypesQueryKey() {
  return ['channeltypes', '/channeltypes'] as const
}

export function getChanneltypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChanneltypesQueryKey>
  >({
    queryKey: getChanneltypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.channeltypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChanneltypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getChanneltypesQueryKey>
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
    return { ...getChanneltypesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostChanneltypesMutationKey() {
  return ['channeltypes', '/channeltypes', 'POST'] as const
}

export function getPostChanneltypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.channeltypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChanneltypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channeltypes.$post>) {
      return parseResponse(client.channeltypes.$post(args, options))
    },
  })
}

export function createPostChanneltypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channeltypes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.channeltypes.$post>,
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
    const mutationDefaults = getPostChanneltypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChanneltypesNameQueryKey(
  args: InferRequestType<(typeof client.channeltypes)[':name']['$get']>,
) {
  return ['channeltypes', '/channeltypes/:name', args] as const
}

export function getChanneltypesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channeltypes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.channeltypes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channeltypes)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChanneltypesNameQueryKey>
  >({
    queryKey: getChanneltypesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channeltypes[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChanneltypesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.channeltypes)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channeltypes)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channeltypes)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getChanneltypesNameQueryKey>
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
    return { ...getChanneltypesNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutChanneltypesNameMutationKey() {
  return ['channeltypes', '/channeltypes/:name', 'PUT'] as const
}

export function getPutChanneltypesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channeltypes)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channeltypes)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChanneltypesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channeltypes)[':name']['$put']>) {
      return parseResponse(client.channeltypes[':name'].$put(args, options))
    },
  })
}

export function createPutChanneltypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channeltypes)[':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channeltypes)[':name']['$put']>,
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
    const mutationDefaults = getPutChanneltypesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChanneltypesNameMutationKey() {
  return ['channeltypes', '/channeltypes/:name', 'DELETE'] as const
}

export function getDeleteChanneltypesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channeltypes)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channeltypes)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChanneltypesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channeltypes)[':name']['$delete']>) {
      return parseResponse(client.channeltypes[':name'].$delete(args, options))
    },
  })
}

export function createDeleteChanneltypesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.channeltypes)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.channeltypes)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteChanneltypesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCheckPushMutationKey() {
  return ['check_push', '/check_push', 'POST'] as const
}

export function getPostCheckPushMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_push.$post>>>>>,
    TError,
    InferRequestType<typeof client.check_push.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckPushMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check_push.$post>) {
      return parseResponse(client.check_push.$post(args, options))
    },
  })
}

export function createPostCheckPush<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_push.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.check_push.$post>,
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
    const mutationDefaults = getPostCheckPushMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCheckSqsMutationKey() {
  return ['check_sqs', '/check_sqs', 'POST'] as const
}

export function getPostCheckSqsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_sqs.$post>>>>>,
    TError,
    InferRequestType<typeof client.check_sqs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCheckSqsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.check_sqs.$post>) {
      return parseResponse(client.check_sqs.$post(args, options))
    },
  })
}

export function createPostCheckSqs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.check_sqs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.check_sqs.$post>,
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
    const mutationDefaults = getPostCheckSqsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCommandsQueryKey() {
  return ['commands', '/commands'] as const
}

export function getCommandsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCommandsQueryKey>
  >({
    queryKey: getCommandsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.commands.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCommandsQueryKey>
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
    return { ...getCommandsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCommandsMutationKey() {
  return ['commands', '/commands', 'POST'] as const
}

export function getPostCommandsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$post>>>>>,
    TError,
    InferRequestType<typeof client.commands.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommandsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.commands.$post>) {
      return parseResponse(client.commands.$post(args, options))
    },
  })
}

export function createPostCommands<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.commands.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.commands.$post>,
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
    const mutationDefaults = getPostCommandsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCommandsNameQueryKey(
  args: InferRequestType<(typeof client.commands)[':name']['$get']>,
) {
  return ['commands', '/commands/:name', args] as const
}

export function getCommandsNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.commands)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommandsNameQueryKey>
  >({
    queryKey: getCommandsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commands[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCommandsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.commands)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCommandsNameQueryKey>
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
    return { ...getCommandsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCommandsNameMutationKey() {
  return ['commands', '/commands/:name', 'PUT'] as const
}

export function getPutCommandsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.commands)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCommandsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.commands)[':name']['$put']>) {
      return parseResponse(client.commands[':name'].$put(args, options))
    },
  })
}

export function createPutCommandsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.commands)[':name']['$put']>,
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
    const mutationDefaults = getPutCommandsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCommandsNameMutationKey() {
  return ['commands', '/commands/:name', 'DELETE'] as const
}

export function getDeleteCommandsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.commands)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.commands)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommandsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.commands)[':name']['$delete']>) {
      return parseResponse(client.commands[':name'].$delete(args, options))
    },
  })
}

export function createDeleteCommandsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.commands)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.commands)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteCommandsNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getConnectQueryKey(args: InferRequestType<typeof client.connect.$get>) {
  return ['connect', '/connect', args] as const
}

export function getConnectQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connect.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectQueryKey>
  >({
    queryKey: getConnectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connect.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConnect<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connect.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getConnectQueryKey>
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
    return { ...getConnectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDevicesQueryKey(args: InferRequestType<typeof client.devices.$get>) {
  return ['devices', '/devices', args] as const
}

export function getDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >({
    queryKey: getDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDevicesQueryKey>
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
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDevicesMutationKey() {
  return ['devices', '/devices', 'POST'] as const
}

export function getPostDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$post>>>>>,
    TError,
    InferRequestType<typeof client.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devices.$post>) {
      return parseResponse(client.devices.$post(args, options))
    },
  })
}

export function createPostDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.devices.$post>,
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
    const mutationDefaults = getPostDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteDevicesMutationKey() {
  return ['devices', '/devices', 'DELETE'] as const
}

export function getDeleteDevicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$delete>>>>>,
    TError,
    InferRequestType<typeof client.devices.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.devices.$delete>) {
      return parseResponse(client.devices.$delete(args, options))
    },
  })
}

export function createDeleteDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$delete>>>>
          >,
          TError,
          InferRequestType<typeof client.devices.$delete>,
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
    const mutationDefaults = getDeleteDevicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportUsersMutationKey() {
  return ['export', '/export/users', 'POST'] as const
}

export function getPostExportUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.users.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.export.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.export.users.$post>) {
      return parseResponse(client.export.users.$post(args, options))
    },
  })
}

export function createPostExportUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.export.users.$post>,
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
    const mutationDefaults = getPostExportUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostExportChannelsMutationKey() {
  return ['export_channels', '/export_channels', 'POST'] as const
}

export function getPostExportChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export_channels.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.export_channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExportChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.export_channels.$post>) {
      return parseResponse(client.export_channels.$post(args, options))
    },
  })
}

export function createPostExportChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.export_channels.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.export_channels.$post>,
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
    const mutationDefaults = getPostExportChannelsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getExportChannelsIdQueryKey(
  args: InferRequestType<(typeof client.export_channels)[':id']['$get']>,
) {
  return ['export_channels', '/export_channels/:id', args] as const
}

export function getExportChannelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export_channels)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.export_channels)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.export_channels)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExportChannelsIdQueryKey>
  >({
    queryKey: getExportChannelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.export_channels[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createExportChannelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.export_channels)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.export_channels)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.export_channels)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getExportChannelsIdQueryKey>
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
    return { ...getExportChannelsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGuestMutationKey() {
  return ['guest', '/guest', 'POST'] as const
}

export function getPostGuestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest.$post>>>>>,
    TError,
    InferRequestType<typeof client.guest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGuestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.guest.$post>) {
      return parseResponse(client.guest.$post(args, options))
    },
  })
}

export function createPostGuest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.guest.$post>>>>>,
          TError,
          InferRequestType<typeof client.guest.$post>,
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
    const mutationDefaults = getPostGuestMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostImportUrlsMutationKey() {
  return ['import_urls', '/import_urls', 'POST'] as const
}

export function getPostImportUrlsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import_urls.$post>>>>>,
    TError,
    InferRequestType<typeof client.import_urls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportUrlsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import_urls.$post>) {
      return parseResponse(client.import_urls.$post(args, options))
    },
  })
}

export function createPostImportUrls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import_urls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.import_urls.$post>,
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
    const mutationDefaults = getPostImportUrlsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImportsQueryKey() {
  return ['imports', '/imports'] as const
}

export function getImportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImportsQueryKey>
  >({
    queryKey: getImportsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.imports.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getImportsQueryKey>
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
    return { ...getImportsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostImportsMutationKey() {
  return ['imports', '/imports', 'POST'] as const
}

export function getPostImportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$post>>>>>,
    TError,
    InferRequestType<typeof client.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.imports.$post>) {
      return parseResponse(client.imports.$post(args, options))
    },
  })
}

export function createPostImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.imports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.imports.$post>,
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
    const mutationDefaults = getPostImportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getImportsIdQueryKey(
  args: InferRequestType<(typeof client.imports)[':id']['$get']>,
) {
  return ['imports', '/imports/:id', args] as const
}

export function getImportsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.imports)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImportsIdQueryKey>
  >({
    queryKey: getImportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.imports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createImportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.imports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.imports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getImportsIdQueryKey>
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
    return { ...getImportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getLongpollQueryKey(args: InferRequestType<typeof client.longpoll.$get>) {
  return ['longpoll', '/longpoll', args] as const
}

export function getLongpollQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longpoll.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.longpoll.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longpoll.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLongpollQueryKey>
  >({
    queryKey: getLongpollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.longpoll.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLongpoll<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longpoll.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.longpoll.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.longpoll.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getLongpollQueryKey>
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
    return { ...getLongpollQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMembersQueryKey(args: InferRequestType<typeof client.members.$get>) {
  return ['members', '/members', args] as const
}

export function getMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.members.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMembersQueryKey>
  >({
    queryKey: getMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.members.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.members.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMembersQueryKey>
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
    return { ...getMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getMessagesIdQueryKey(
  args: InferRequestType<(typeof client.messages)[':id']['$get']>,
) {
  return ['messages', '/messages/:id', args] as const
}

export function getMessagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.messages)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIdQueryKey>
  >({
    queryKey: getMessagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMessagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessagesIdQueryKey>
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
    return { ...getMessagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutMessagesIdMutationKey() {
  return ['messages', '/messages/:id', 'PUT'] as const
}

export function getPutMessagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['$put']>) {
      return parseResponse(client.messages[':id'].$put(args, options))
    },
  })
}

export function createPutMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['$put']>,
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
    const mutationDefaults = getPutMessagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesIdMutationKey() {
  return ['messages', '/messages/:id', 'POST'] as const
}

export function getPostMessagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['$post']>) {
      return parseResponse(client.messages[':id'].$post(args, options))
    },
  })
}

export function createPostMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['$post']>,
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
    const mutationDefaults = getPostMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMessagesIdMutationKey() {
  return ['messages', '/messages/:id', 'DELETE'] as const
}

export function getDeleteMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['$delete']>) {
      return parseResponse(client.messages[':id'].$delete(args, options))
    },
  })
}

export function createDeleteMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteMessagesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesIdActionMutationKey() {
  return ['messages', '/messages/:id/action', 'POST'] as const
}

export function getPostMessagesIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['action']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIdActionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['action']['$post']>) {
      return parseResponse(client.messages[':id'].action.$post(args, options))
    },
  })
}

export function createPostMessagesIdAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':id']['action']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['action']['$post']>,
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
    const mutationDefaults = getPostMessagesIdActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesIdCommitMutationKey() {
  return ['messages', '/messages/:id/commit', 'POST'] as const
}

export function getPostMessagesIdCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['commit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['commit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIdCommitMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['commit']['$post']>) {
      return parseResponse(client.messages[':id'].commit.$post(args, options))
    },
  })
}

export function createPostMessagesIdCommit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':id']['commit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['commit']['$post']>,
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
    const mutationDefaults = getPostMessagesIdCommitMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesIdReactionMutationKey() {
  return ['messages', '/messages/:id/reaction', 'POST'] as const
}

export function getPostMessagesIdReactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['reaction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['reaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIdReactionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':id']['reaction']['$post']>) {
      return parseResponse(client.messages[':id'].reaction.$post(args, options))
    },
  })
}

export function createPostMessagesIdReaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':id']['reaction']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['reaction']['$post']>,
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
    const mutationDefaults = getPostMessagesIdReactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteMessagesIdReactionTypeMutationKey() {
  return ['messages', '/messages/:id/reaction/:type', 'DELETE'] as const
}

export function getDeleteMessagesIdReactionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMessagesIdReactionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>,
    ) {
      return parseResponse(client.messages[':id'].reaction[':type'].$delete(args, options))
    },
  })
}

export function createDeleteMessagesIdReactionType<
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
                Awaited<ReturnType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['reaction'][':type']['$delete']>,
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
    const mutationDefaults = getDeleteMessagesIdReactionTypeMutationOptions<
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

export function getMessagesIdReactionsQueryKey(
  args: InferRequestType<(typeof client.messages)[':id']['reactions']['$get']>,
) {
  return ['messages', '/messages/:id/reactions', args] as const
}

export function getMessagesIdReactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':id']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':id']['reactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['reactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesIdReactionsQueryKey>
  >({
    queryKey: getMessagesIdReactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':id'].reactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessagesIdReactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':id']['reactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':id']['reactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':id']['reactions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessagesIdReactionsQueryKey>
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
    return { ...getMessagesIdReactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostMessagesIdTranslateMutationKey() {
  return ['messages', '/messages/:id/translate', 'POST'] as const
}

export function getPostMessagesIdTranslateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':id']['translate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':id']['translate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesIdTranslateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.messages)[':id']['translate']['$post']>,
    ) {
      return parseResponse(client.messages[':id'].translate.$post(args, options))
    },
  })
}

export function createPostMessagesIdTranslate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':id']['translate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':id']['translate']['$post']>,
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
    const mutationDefaults = getPostMessagesIdTranslateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMessagesParentIdRepliesQueryKey(
  args: InferRequestType<(typeof client.messages)[':parent_id']['replies']['$get']>,
) {
  return ['messages', '/messages/:parent_id/replies', args] as const
}

export function getMessagesParentIdRepliesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':parent_id']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.messages)[':parent_id']['replies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':parent_id']['replies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesParentIdRepliesQueryKey>
  >({
    queryKey: getMessagesParentIdRepliesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages[':parent_id'].replies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMessagesParentIdReplies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.messages)[':parent_id']['replies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.messages)[':parent_id']['replies']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':parent_id']['replies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMessagesParentIdRepliesQueryKey>
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
      ...getMessagesParentIdRepliesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostModerationBanMutationKey() {
  return ['moderation', '/moderation/ban', 'POST'] as const
}

export function getPostModerationBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.ban.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.ban.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationBanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.ban.$post>) {
      return parseResponse(client.moderation.ban.$post(args, options))
    },
  })
}

export function createPostModerationBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.ban.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.ban.$post>,
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
    const mutationDefaults = getPostModerationBanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteModerationBanMutationKey() {
  return ['moderation', '/moderation/ban', 'DELETE'] as const
}

export function getDeleteModerationBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.ban.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.ban.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteModerationBanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.ban.$delete>) {
      return parseResponse(client.moderation.ban.$delete(args, options))
    },
  })
}

export function createDeleteModerationBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.ban.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.ban.$delete>,
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
    const mutationDefaults = getDeleteModerationBanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostModerationFlagMutationKey() {
  return ['moderation', '/moderation/flag', 'POST'] as const
}

export function getPostModerationFlagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flag.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.flag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationFlagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.flag.$post>) {
      return parseResponse(client.moderation.flag.$post(args, options))
    },
  })
}

export function createPostModerationFlag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flag.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.flag.$post>,
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
    const mutationDefaults = getPostModerationFlagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getModerationFlagsMessageQueryKey(
  args: InferRequestType<typeof client.moderation.flags.message.$get>,
) {
  return ['moderation', '/moderation/flags/message', args] as const
}

export function getModerationFlagsMessageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flags.message.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.moderation.flags.message.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flags.message.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getModerationFlagsMessageQueryKey>
  >({
    queryKey: getModerationFlagsMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.moderation.flags.message.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createModerationFlagsMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flags.message.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.moderation.flags.message.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.flags.message.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getModerationFlagsMessageQueryKey>
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
      ...getModerationFlagsMessageQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostModerationMuteMutationKey() {
  return ['moderation', '/moderation/mute', 'POST'] as const
}

export function getPostModerationMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.mute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.mute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationMuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.mute.$post>) {
      return parseResponse(client.moderation.mute.$post(args, options))
    },
  })
}

export function createPostModerationMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.mute.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.mute.$post>,
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
    const mutationDefaults = getPostModerationMuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostModerationMuteChannelMutationKey() {
  return ['moderation', '/moderation/mute/channel', 'POST'] as const
}

export function getPostModerationMuteChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.mute.channel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.mute.channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationMuteChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.mute.channel.$post>) {
      return parseResponse(client.moderation.mute.channel.$post(args, options))
    },
  })
}

export function createPostModerationMuteChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.mute.channel.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.mute.channel.$post>,
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
    const mutationDefaults = getPostModerationMuteChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostModerationUnflagMutationKey() {
  return ['moderation', '/moderation/unflag', 'POST'] as const
}

export function getPostModerationUnflagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unflag.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.unflag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationUnflagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.unflag.$post>) {
      return parseResponse(client.moderation.unflag.$post(args, options))
    },
  })
}

export function createPostModerationUnflag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unflag.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.unflag.$post>,
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
    const mutationDefaults = getPostModerationUnflagMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostModerationUnmuteMutationKey() {
  return ['moderation', '/moderation/unmute', 'POST'] as const
}

export function getPostModerationUnmuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unmute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.moderation.unmute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationUnmuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.unmute.$post>) {
      return parseResponse(client.moderation.unmute.$post(args, options))
    },
  })
}

export function createPostModerationUnmute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unmute.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.unmute.$post>,
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
    const mutationDefaults = getPostModerationUnmuteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostModerationUnmuteChannelMutationKey() {
  return ['moderation', '/moderation/unmute/channel', 'POST'] as const
}

export function getPostModerationUnmuteChannelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.moderation.unmute.channel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.moderation.unmute.channel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostModerationUnmuteChannelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.moderation.unmute.channel.$post>) {
      return parseResponse(client.moderation.unmute.channel.$post(args, options))
    },
  })
}

export function createPostModerationUnmuteChannel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.moderation.unmute.channel.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.moderation.unmute.channel.$post>,
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
    const mutationDefaults = getPostModerationUnmuteChannelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOgQueryKey(args: InferRequestType<typeof client.og.$get>) {
  return ['og', '/og', args] as const
}

export function getOgQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.og.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.og.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.og.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOgQueryKey>
  >({
    queryKey: getOgQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(client.og.$get(args, { ...options, init: { ...options?.init, signal } }))
    },
  })
}

export function createOg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.og.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.og.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.og.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getOgQueryKey>
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
    return { ...getOgQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPermissionsQueryKey() {
  return ['permissions', '/permissions'] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPermissionsQueryKey>
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
    return { ...getPermissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPermissionsIdQueryKey(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
) {
  return ['permissions', '/permissions/:id', args] as const
}

export function getPermissionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsIdQueryKey>
  >({
    queryKey: getPermissionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPermissionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.permissions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPermissionsIdQueryKey>
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
    return { ...getPermissionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPushProvidersQueryKey() {
  return ['push_providers', '/push_providers'] as const
}

export function getPushProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPushProvidersQueryKey>
  >({
    queryKey: getPushProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.push_providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPushProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getPushProvidersQueryKey>
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
    return { ...getPushProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostPushProvidersMutationKey() {
  return ['push_providers', '/push_providers', 'POST'] as const
}

export function getPostPushProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.push_providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPushProvidersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.push_providers.$post>) {
      return parseResponse(client.push_providers.$post(args, options))
    },
  })
}

export function createPostPushProviders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.push_providers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.push_providers.$post>,
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
    const mutationDefaults = getPostPushProvidersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePushProvidersTypeNameMutationKey() {
  return ['push_providers', '/push_providers/:type/:name', 'DELETE'] as const
}

export function getDeletePushProvidersTypeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.push_providers)[':type'][':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.push_providers)[':type'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePushProvidersTypeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.push_providers)[':type'][':name']['$delete']>,
    ) {
      return parseResponse(client.push_providers[':type'][':name'].$delete(args, options))
    },
  })
}

export function createDeletePushProvidersTypeName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.push_providers)[':type'][':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.push_providers)[':type'][':name']['$delete']>,
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
    const mutationDefaults = getDeletePushProvidersTypeNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getQueryBannedUsersQueryKey(
  args: InferRequestType<typeof client.query_banned_users.$get>,
) {
  return ['query_banned_users', '/query_banned_users', args] as const
}

export function getQueryBannedUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_banned_users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.query_banned_users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_banned_users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQueryBannedUsersQueryKey>
  >({
    queryKey: getQueryBannedUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.query_banned_users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createQueryBannedUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.query_banned_users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.query_banned_users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.query_banned_users.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getQueryBannedUsersQueryKey>
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
    return { ...getQueryBannedUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRateLimitsQueryKey(args: InferRequestType<typeof client.rate_limits.$get>) {
  return ['rate_limits', '/rate_limits', args] as const
}

export function getRateLimitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limits.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rate_limits.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRateLimitsQueryKey>
  >({
    queryKey: getRateLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rate_limits.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRateLimits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limits.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rate_limits.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_limits.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRateLimitsQueryKey>
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
    return { ...getRateLimitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRecipientsQueryKey(args: InferRequestType<typeof client.recipients.$get>) {
  return ['recipients', '/recipients', args] as const
}

export function getRecipientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipients.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.recipients.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipients.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRecipientsQueryKey>
  >({
    queryKey: getRecipientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.recipients.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRecipients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.recipients.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.recipients.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getRecipientsQueryKey>
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
    return { ...getRecipientsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getRolesQueryKey() {
  return ['roles', '/roles'] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getRolesQueryKey>
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
    return { ...getRolesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostRolesMutationKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function getPostRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$post>) {
      return parseResponse(client.roles.$post(args, options))
    },
  })
}

export function createPostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
          TError,
          InferRequestType<typeof client.roles.$post>,
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
    const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteRolesNameMutationKey() {
  return ['roles', '/roles/:name', 'DELETE'] as const
}

export function getDeleteRolesNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':name']['$delete']>) {
      return parseResponse(client.roles[':name'].$delete(args, options))
    },
  })
}

export function createDeleteRolesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.roles)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteRolesNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSearchQueryKey>
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
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSegmentsQueryKey(args: InferRequestType<typeof client.segments.$get>) {
  return ['segments', '/segments', args] as const
}

export function getSegmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSegmentsQueryKey>
  >({
    queryKey: getSegmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.segments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSegmentsQueryKey>
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
    return { ...getSegmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSegmentsMutationKey() {
  return ['segments', '/segments', 'POST'] as const
}

export function getPostSegmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>>,
    TError,
    InferRequestType<typeof client.segments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSegmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.segments.$post>) {
      return parseResponse(client.segments.$post(args, options))
    },
  })
}

export function createPostSegments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.segments.$post>,
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
    const mutationDefaults = getPostSegmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutSegmentsIdMutationKey() {
  return ['segments', '/segments/:id', 'PUT'] as const
}

export function getPutSegmentsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.segments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.segments)[':id']['$put']>) {
      return parseResponse(client.segments[':id'].$put(args, options))
    },
  })
}

export function createPutSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.segments)[':id']['$put']>,
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
    const mutationDefaults = getPutSegmentsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSegmentsIdMutationKey() {
  return ['segments', '/segments/:id', 'DELETE'] as const
}

export function getDeleteSegmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.segments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSegmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.segments)[':id']['$delete']>) {
      return parseResponse(client.segments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteSegmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.segments)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.segments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSegmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSyncMutationKey() {
  return ['sync', '/sync', 'POST'] as const
}

export function getPostSyncMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.$post>>>>>,
    TError,
    InferRequestType<typeof client.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.$post>) {
      return parseResponse(client.sync.$post(args, options))
    },
  })
}

export function createPostSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.$post>>>>>,
          TError,
          InferRequestType<typeof client.sync.$post>,
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
    const mutationDefaults = getPostSyncMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTasksIdQueryKey(args: InferRequestType<(typeof client.tasks)[':id']['$get']>) {
  return ['tasks', '/tasks/:id', args] as const
}

export function getTasksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tasks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTasksIdQueryKey>
  >({
    queryKey: getTasksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tasks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tasks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTasksIdQueryKey>
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
    return { ...getTasksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getUsersQueryKey>
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
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function createPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchUsersMutationKey() {
  return ['users', '/users', 'PATCH'] as const
}

export function getPatchUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$patch>>>>>,
    TError,
    InferRequestType<typeof client.users.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$patch>) {
      return parseResponse(client.users.$patch(args, options))
    },
  })
}

export function createPatchUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$patch>>>>
          >,
          TError,
          InferRequestType<typeof client.users.$patch>,
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
    const mutationDefaults = getPatchUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersDeactivateMutationKey() {
  return ['users', '/users/deactivate', 'POST'] as const
}

export function getPostUsersDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.deactivate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.deactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersDeactivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.deactivate.$post>) {
      return parseResponse(client.users.deactivate.$post(args, options))
    },
  })
}

export function createPostUsersDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.deactivate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.deactivate.$post>,
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
    const mutationDefaults = getPostUsersDeactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersDeleteMutationKey() {
  return ['users', '/users/delete', 'POST'] as const
}

export function getPostUsersDeleteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.delete.$post>) {
      return parseResponse(client.users.delete.$post(args, options))
    },
  })
}

export function createPostUsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.delete.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.delete.$post>,
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
    const mutationDefaults = getPostUsersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersReactivateMutationKey() {
  return ['users', '/users/reactivate', 'POST'] as const
}

export function getPostUsersReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.reactivate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.reactivate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersReactivateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.reactivate.$post>) {
      return parseResponse(client.users.reactivate.$post(args, options))
    },
  })
}

export function createPostUsersReactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.users.reactivate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.users.reactivate.$post>,
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
    const mutationDefaults = getPostUsersReactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersRestoreMutationKey() {
  return ['users', '/users/restore', 'POST'] as const
}

export function getPostUsersRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.restore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.restore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersRestoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.restore.$post>) {
      return parseResponse(client.users.restore.$post(args, options))
    },
  })
}

export function createPostUsersRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.restore.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.restore.$post>,
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
    const mutationDefaults = getPostUsersRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$delete']>) {
      return parseResponse(client.users[':user_id'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdDeactivateMutationKey() {
  return ['users', '/users/:user_id/deactivate', 'POST'] as const
}

export function getPostUsersUserIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['deactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['deactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['deactivate']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].deactivate.$post(args, options))
    },
  })
}

export function createPostUsersUserIdDeactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['deactivate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['deactivate']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdDeactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersUserIdEventMutationKey() {
  return ['users', '/users/:user_id/event', 'POST'] as const
}

export function getPostUsersUserIdEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['event']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['event']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdEventMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['event']['$post']>) {
      return parseResponse(client.users[':user_id'].event.$post(args, options))
    },
  })
}

export function createPostUsersUserIdEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['event']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['event']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserIdExportQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['export']['$get']>,
) {
  return ['users', '/users/:user_id/export', args] as const
}

export function getUsersUserIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdExportQueryKey>
  >({
    queryKey: getUsersUserIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['export']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['export']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserIdExportQueryKey>
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
    return { ...getUsersUserIdExportQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostUsersUserIdReactivateMutationKey() {
  return ['users', '/users/:user_id/reactivate', 'POST'] as const
}

export function getPostUsersUserIdReactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['reactivate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersUserIdReactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
    ) {
      return parseResponse(client.users[':user_id'].reactivate.$post(args, options))
    },
  })
}

export function createPostUsersUserIdReactivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['reactivate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['reactivate']['$post']>,
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
    const mutationDefaults = getPostUsersUserIdReactivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
