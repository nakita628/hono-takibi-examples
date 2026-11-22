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

export function getAccountKey() {
  return ['account'] as const
}

export function getCertificatesKey() {
  return ['certificates'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getStatsKey() {
  return ['stats'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getPostAccountMutationKey() {
  return ['account', '/account', 'POST'] as const
}

export function getPostAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>>,
    TError,
    InferRequestType<typeof client.account.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$post>) {
      return parseResponse(client.account.$post(args, options))
    },
  })
}

export function createPostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$post>,
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
    const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountShardsMutationKey() {
  return ['account', '/account/shards', 'POST'] as const
}

export function getPostAccountShardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.shards.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.shards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountShardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.shards.$post>) {
      return parseResponse(client.account.shards.$post(args, options))
    },
  })
}

export function createPostAccountShards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.shards.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.shards.$post>,
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
    const mutationDefaults = getPostAccountShardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostAccountVerifyMutationKey() {
  return ['account', '/account/verify', 'POST'] as const
}

export function getPostAccountVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.verify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountVerifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.verify.$post>) {
      return parseResponse(client.account.verify.$post(args, options))
    },
  })
}

export function createPostAccountVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verify.$post>,
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
    const mutationDefaults = getPostAccountVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCertificatesExternalMutationKey() {
  return ['certificates', '/certificates/external', 'POST'] as const
}

export function getPostCertificatesExternalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.certificates.external.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesExternalMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificates.external.$post>) {
      return parseResponse(client.certificates.external.$post(args, options))
    },
  })
}

export function createPostCertificatesExternal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.certificates.external.$post>,
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
    const mutationDefaults = getPostCertificatesExternalMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCertificatesExternalCaQueryKey() {
  return ['certificates', '/certificates/external/ca'] as const
}

export function getCertificatesExternalCaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesExternalCaQueryKey>
  >({
    queryKey: getCertificatesExternalCaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates.external.ca.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCertificatesExternalCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCertificatesExternalCaQueryKey>
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
    return { ...getCertificatesExternalCaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getCertificatesWebhooksCaQueryKey() {
  return ['certificates', '/certificates/webhooks/ca'] as const
}

export function getCertificatesWebhooksCaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesWebhooksCaQueryKey>
  >({
    queryKey: getCertificatesWebhooksCaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates.webhooks.ca.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCertificatesWebhooksCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCertificatesWebhooksCaQueryKey>
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
    return { ...getCertificatesWebhooksCaQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostCertificatesWebhooksCaMutationKey() {
  return ['certificates', '/certificates/webhooks/ca', 'POST'] as const
}

export function getPostCertificatesWebhooksCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.certificates.webhooks.ca.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesWebhooksCaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificates.webhooks.ca.$post>) {
      return parseResponse(client.certificates.webhooks.ca.$post(args, options))
    },
  })
}

export function createPostCertificatesWebhooksCa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.certificates.webhooks.ca.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.certificates.webhooks.ca.$post>,
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
    const mutationDefaults = getPostCertificatesWebhooksCaMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCertificatesWebhooksCaMutationKey() {
  return ['certificates', '/certificates/webhooks/ca', 'DELETE'] as const
}

export function getDeleteCertificatesWebhooksCaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteCertificatesWebhooksCaMutationKey(),
    async mutationFn() {
      return parseResponse(client.certificates.webhooks.ca.$delete(undefined, options))
    },
  })
}

export function createDeleteCertificatesWebhooksCa<
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
                Awaited<ReturnType<typeof client.certificates.webhooks.ca.$delete>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getDeleteCertificatesWebhooksCaMutationOptions<
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

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function createPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getGroupsQueryKey>
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
    return { ...getGroupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostGroupsMutationKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function getPostGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    InferRequestType<typeof client.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$post>) {
      return parseResponse(client.groups.$post(args, options))
    },
  })
}

export function createPostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
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
    const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':GroupId']['$get']>,
) {
  return ['groups', '/groups/:GroupId', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':GroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':GroupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':GroupId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
    return { ...getGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:GroupId', 'PUT'] as const
}

export function getPutGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':GroupId']['$put']>) {
      return parseResponse(client.groups[':GroupId'].$put(args, options))
    },
  })
}

export function createPutGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['$put']>,
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
    const mutationDefaults = getPutGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupsGroupIdAdminsMutationKey() {
  return ['groups', '/groups/:GroupId/admins', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['admins']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['admins']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdAdminsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':GroupId']['admins']['$delete']>,
    ) {
      return parseResponse(client.groups[':GroupId'].admins.$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupIdAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['admins']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['admins']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdAdminsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchGroupsGroupIdAdminsMutationKey() {
  return ['groups', '/groups/:GroupId/admins', 'PATCH'] as const
}

export function getPatchGroupsGroupIdAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['admins']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['admins']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGroupsGroupIdAdminsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':GroupId']['admins']['$patch']>,
    ) {
      return parseResponse(client.groups[':GroupId'].admins.$patch(args, options))
    },
  })
}

export function createPatchGroupsGroupIdAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['admins']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['admins']['$patch']>,
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
    const mutationDefaults = getPatchGroupsGroupIdAdminsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsGroupIdIconQueryKey(
  args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>,
) {
  return ['groups', '/groups/:GroupId/icon', args] as const
}

export function getGroupsGroupIdIconQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdIconQueryKey>
  >({
    queryKey: getGroupsGroupIdIconQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':GroupId'].icon.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdIcon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdIconQueryKey>
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
    return { ...getGroupsGroupIdIconQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostGroupsGroupIdIconMutationKey() {
  return ['groups', '/groups/:GroupId/icon', 'POST'] as const
}

export function getPostGroupsGroupIdIconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['icon']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdIconMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$post']>) {
      return parseResponse(client.groups[':GroupId'].icon.$post(args, options))
    },
  })
}

export function createPostGroupsGroupIdIcon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['icon']['$post']>,
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
    const mutationDefaults = getPostGroupsGroupIdIconMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupsGroupIdIconMutationKey() {
  return ['groups', '/groups/:GroupId/icon', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdIconMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['icon']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdIconMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':GroupId']['icon']['$delete']>,
    ) {
      return parseResponse(client.groups[':GroupId'].icon.$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupIdIcon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['icon']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdIconMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getGroupsGroupIdInviteQueryKey(
  args: InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>,
) {
  return ['groups', '/groups/:GroupId/invite', args] as const
}

export function getGroupsGroupIdInviteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdInviteQueryKey>
  >({
    queryKey: getGroupsGroupIdInviteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':GroupId'].invite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createGroupsGroupIdInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getGroupsGroupIdInviteQueryKey>
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
    return { ...getGroupsGroupIdInviteQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteGroupsGroupIdInviteMutationKey() {
  return ['groups', '/groups/:GroupId/invite', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['invite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':GroupId']['invite']['$delete']>,
    ) {
      return parseResponse(client.groups[':GroupId'].invite.$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['invite']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostGroupsGroupIdLeaveMutationKey() {
  return ['groups', '/groups/:GroupId/leave', 'POST'] as const
}

export function getPostGroupsGroupIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdLeaveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':GroupId']['leave']['$post']>) {
      return parseResponse(client.groups[':GroupId'].leave.$post(args, options))
    },
  })
}

export function createPostGroupsGroupIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['leave']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['leave']['$post']>,
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
    const mutationDefaults = getPostGroupsGroupIdLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteGroupsGroupIdParticipantsMutationKey() {
  return ['groups', '/groups/:GroupId/participants', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdParticipantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':GroupId']['participants']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':GroupId']['participants']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdParticipantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':GroupId']['participants']['$delete']>,
    ) {
      return parseResponse(client.groups[':GroupId'].participants.$delete(args, options))
    },
  })
}

export function createDeleteGroupsGroupIdParticipants<
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
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['participants']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['participants']['$delete']>,
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
    const mutationDefaults = getDeleteGroupsGroupIdParticipantsMutationOptions<
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getHealthQueryKey>
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
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostMediaMutationKey() {
  return ['media', '/media', 'POST'] as const
}

export function getPostMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    InferRequestType<typeof client.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.media.$post>) {
      return parseResponse(client.media.$post(args, options))
    },
  })
}

export function createPostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
          TError,
          InferRequestType<typeof client.media.$post>,
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
    const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMediaMediaIdQueryKey(
  args: InferRequestType<(typeof client.media)[':MediaId']['$get']>,
) {
  return ['media', '/media/:MediaId', args] as const
}

export function getMediaMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':MediaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdQueryKey>
  >({
    queryKey: getMediaMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':MediaId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMediaMediaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.media)[':MediaId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMediaMediaIdQueryKey>
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
    return { ...getMediaMediaIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteMediaMediaIdMutationKey() {
  return ['media', '/media/:MediaId', 'DELETE'] as const
}

export function getDeleteMediaMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.media)[':MediaId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaMediaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':MediaId']['$delete']>) {
      return parseResponse(client.media[':MediaId'].$delete(args, options))
    },
  })
}

export function createDeleteMediaMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':MediaId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.media)[':MediaId']['$delete']>,
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
    const mutationDefaults = getDeleteMediaMediaIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostMessagesMutationKey() {
  return ['messages', '/messages', 'POST'] as const
}

export function getPostMessagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>>,
    TError,
    InferRequestType<typeof client.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.messages.$post>) {
      return parseResponse(client.messages.$post(args, options))
    },
  })
}

export function createPostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
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
    const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutMessagesMessageIDMutationKey() {
  return ['messages', '/messages/:MessageID', 'PUT'] as const
}

export function getPutMessagesMessageIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':MessageID']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.messages)[':MessageID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMessagesMessageIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.messages)[':MessageID']['$put']>) {
      return parseResponse(client.messages[':MessageID'].$put(args, options))
    },
  })
}

export function createPutMessagesMessageID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.messages)[':MessageID']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.messages)[':MessageID']['$put']>,
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
    const mutationDefaults = getPutMessagesMessageIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetricsQueryKey(args: InferRequestType<typeof client.metrics.$get>) {
  return ['metrics', '/metrics', args] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.metrics.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsQueryKey>
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
    return { ...getMetricsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSettingsAccountTwoStepMutationKey() {
  return ['settings', '/settings/account/two-step', 'POST'] as const
}

export function getPostSettingsAccountTwoStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.account)['two-step']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.account)['two-step']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsAccountTwoStepMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.account)['two-step']['$post']>,
    ) {
      return parseResponse(client.settings.account['two-step'].$post(args, options))
    },
  })
}

export function createPostSettingsAccountTwoStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings.account)['two-step']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.settings.account)['two-step']['$post']>,
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
    const mutationDefaults = getPostSettingsAccountTwoStepMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSettingsAccountTwoStepMutationKey() {
  return ['settings', '/settings/account/two-step', 'DELETE'] as const
}

export function getDeleteSettingsAccountTwoStepMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.account)['two-step']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsAccountTwoStepMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.account['two-step'].$delete(undefined, options))
    },
  })
}

export function createDeleteSettingsAccountTwoStep<
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
                Awaited<ReturnType<(typeof client.settings.account)['two-step']['$delete']>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getDeleteSettingsAccountTwoStepMutationOptions<
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

export function getSettingsApplicationQueryKey() {
  return ['settings', '/settings/application'] as const
}

export function getSettingsApplicationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsApplicationQueryKey>
  >({
    queryKey: getSettingsApplicationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.application.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsApplication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsApplicationQueryKey>
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
    return { ...getSettingsApplicationQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getDeleteSettingsApplicationMutationKey() {
  return ['settings', '/settings/application', 'DELETE'] as const
}

export function getDeleteSettingsApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsApplicationMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.application.$delete(undefined, options))
    },
  })
}

export function createDeleteSettingsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$delete>>>
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getDeleteSettingsApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchSettingsApplicationMutationKey() {
  return ['settings', '/settings/application', 'PATCH'] as const
}

export function getPatchSettingsApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.application.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.application.$patch>) {
      return parseResponse(client.settings.application.$patch(args, options))
    },
  })
}

export function createPatchSettingsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.application.$patch>,
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
    const mutationDefaults = getPatchSettingsApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsApplicationMediaProvidersQueryKey() {
  return ['settings', '/settings/application/media/providers'] as const
}

export function getSettingsApplicationMediaProvidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsApplicationMediaProvidersQueryKey>
  >({
    queryKey: getSettingsApplicationMediaProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.application.media.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsApplicationMediaProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsApplicationMediaProvidersQueryKey>
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
      ...getSettingsApplicationMediaProvidersQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSettingsApplicationMediaProvidersMutationKey() {
  return ['settings', '/settings/application/media/providers', 'POST'] as const
}

export function getPostSettingsApplicationMediaProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.settings.application.media.providers.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.settings.application.media.providers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsApplicationMediaProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.settings.application.media.providers.$post>,
    ) {
      return parseResponse(client.settings.application.media.providers.$post(args, options))
    },
  })
}

export function createPostSettingsApplicationMediaProviders<
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
                Awaited<ReturnType<typeof client.settings.application.media.providers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.application.media.providers.$post>,
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
    const mutationDefaults = getPostSettingsApplicationMediaProvidersMutationOptions<
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

export function getDeleteSettingsApplicationMediaProvidersProviderNameMutationKey() {
  return ['settings', '/settings/application/media/providers/:ProviderName', 'DELETE'] as const
}

export function getDeleteSettingsApplicationMediaProvidersProviderNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsApplicationMediaProvidersProviderNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
      >,
    ) {
      return parseResponse(
        client.settings.application.media.providers[':ProviderName'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSettingsApplicationMediaProvidersProviderName<
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
                    (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.settings.application.media.providers)[':ProviderName']['$delete']
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
    const mutationDefaults = getDeleteSettingsApplicationMediaProvidersProviderNameMutationOptions<
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

export function getPostSettingsBackupMutationKey() {
  return ['settings', '/settings/backup', 'POST'] as const
}

export function getPostSettingsBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.backup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.backup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsBackupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.backup.$post>) {
      return parseResponse(client.settings.backup.$post(args, options))
    },
  })
}

export function createPostSettingsBackup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.backup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.backup.$post>,
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
    const mutationDefaults = getPostSettingsBackupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsBusinessProfileQueryKey() {
  return ['settings', '/settings/business/profile'] as const
}

export function getSettingsBusinessProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsBusinessProfileQueryKey>
  >({
    queryKey: getSettingsBusinessProfileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.business.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsBusinessProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.business.profile.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsBusinessProfileQueryKey>
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
    return { ...getSettingsBusinessProfileQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostSettingsBusinessProfileMutationKey() {
  return ['settings', '/settings/business/profile', 'POST'] as const
}

export function getPostSettingsBusinessProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.business.profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsBusinessProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.business.profile.$post>) {
      return parseResponse(client.settings.business.profile.$post(args, options))
    },
  })
}

export function createPostSettingsBusinessProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.business.profile.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.business.profile.$post>,
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
    const mutationDefaults = getPostSettingsBusinessProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsProfileAboutQueryKey() {
  return ['settings', '/settings/profile/about'] as const
}

export function getSettingsProfileAboutQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsProfileAboutQueryKey>
  >({
    queryKey: getSettingsProfileAboutQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.profile.about.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsProfileAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsProfileAboutQueryKey>
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
    return { ...getSettingsProfileAboutQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPatchSettingsProfileAboutMutationKey() {
  return ['settings', '/settings/profile/about', 'PATCH'] as const
}

export function getPatchSettingsProfileAboutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.profile.about.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSettingsProfileAboutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.profile.about.$patch>) {
      return parseResponse(client.settings.profile.about.$patch(args, options))
    },
  })
}

export function createPatchSettingsProfileAbout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.profile.about.$patch>,
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
    const mutationDefaults = getPatchSettingsProfileAboutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSettingsProfilePhotoQueryKey(
  args: InferRequestType<typeof client.settings.profile.photo.$get>,
) {
  return ['settings', '/settings/profile/photo', args] as const
}

export function getSettingsProfilePhotoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.settings.profile.photo.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsProfilePhotoQueryKey>
  >({
    queryKey: getSettingsProfilePhotoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.profile.photo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSettingsProfilePhoto<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.settings.profile.photo.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSettingsProfilePhotoQueryKey>
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
      ...getSettingsProfilePhotoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSettingsProfilePhotoMutationKey() {
  return ['settings', '/settings/profile/photo', 'POST'] as const
}

export function getPostSettingsProfilePhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.settings.profile.photo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsProfilePhotoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.profile.photo.$post>) {
      return parseResponse(client.settings.profile.photo.$post(args, options))
    },
  })
}

export function createPostSettingsProfilePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.profile.photo.$post>,
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
    const mutationDefaults = getPostSettingsProfilePhotoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteSettingsProfilePhotoMutationKey() {
  return ['settings', '/settings/profile/photo', 'DELETE'] as const
}

export function getDeleteSettingsProfilePhotoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSettingsProfilePhotoMutationKey(),
    async mutationFn() {
      return parseResponse(client.settings.profile.photo.$delete(undefined, options))
    },
  })
}

export function createDeleteSettingsProfilePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.profile.photo.$delete>>
              >
            >
          >,
          TError,
          void,
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
    const mutationDefaults = getDeleteSettingsProfilePhotoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSettingsRestoreMutationKey() {
  return ['settings', '/settings/restore', 'POST'] as const
}

export function getPostSettingsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.restore.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.restore.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsRestoreMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.restore.$post>) {
      return parseResponse(client.settings.restore.$post(args, options))
    },
  })
}

export function createPostSettingsRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.restore.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.restore.$post>,
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
    const mutationDefaults = getPostSettingsRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getStatsAppQueryKey(args: InferRequestType<typeof client.stats.app.$get>) {
  return ['stats', '/stats/app', args] as const
}

export function getStatsAppQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.app.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsAppQueryKey>
  >({
    queryKey: getStatsAppQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.app.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.app.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatsAppQueryKey>
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
    return { ...getStatsAppQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getStatsDbQueryKey(args: InferRequestType<typeof client.stats.db.$get>) {
  return ['stats', '/stats/db', args] as const
}

export function getStatsDbQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stats.db.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsDbQueryKey>
  >({
    queryKey: getStatsDbQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stats.db.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createStatsDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.stats.db.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getStatsDbQueryKey>
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
    return { ...getStatsDbQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSupportQueryKey() {
  return ['support', '/support'] as const
}

export function getSupportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSupportQueryKey>
  >({
    queryKey: getSupportQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.support.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSupport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSupportQueryKey>
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
    return { ...getSupportQueryOptions<TData, TError>(clientOptions), ...query }
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

export function getPostUsersLoginMutationKey() {
  return ['users', '/users/login', 'POST'] as const
}

export function getPostUsersLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.login.$post>) {
      return parseResponse(client.users.login.$post(args, options))
    },
  })
}

export function createPostUsersLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.login.$post>,
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
    const mutationDefaults = getPostUsersLoginMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostUsersLogoutMutationKey() {
  return ['users', '/users/logout', 'POST'] as const
}

export function getPostUsersLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.logout.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostUsersLogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.users.logout.$post(undefined, options))
    },
  })
}

export function createPostUsersLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.logout.$post>>>>
          >,
          TError,
          void,
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
    const mutationDefaults = getPostUsersLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getUsersUserUsernameQueryKey(
  args: InferRequestType<(typeof client.users)[':UserUsername']['$get']>,
) {
  return ['users', '/users/:UserUsername', args] as const
}

export function getUsersUserUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':UserUsername']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserUsernameQueryKey>
  >({
    queryKey: getUsersUserUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':UserUsername'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createUsersUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':UserUsername']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getUsersUserUsernameQueryKey>
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
    return { ...getUsersUserUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutUsersUserUsernameMutationKey() {
  return ['users', '/users/:UserUsername', 'PUT'] as const
}

export function getPutUsersUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':UserUsername']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':UserUsername']['$put']>) {
      return parseResponse(client.users[':UserUsername'].$put(args, options))
    },
  })
}

export function createPutUsersUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':UserUsername']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':UserUsername']['$put']>,
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
    const mutationDefaults = getPutUsersUserUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteUsersUserUsernameMutationKey() {
  return ['users', '/users/:UserUsername', 'DELETE'] as const
}

export function getDeleteUsersUserUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':UserUsername']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':UserUsername']['$delete']>) {
      return parseResponse(client.users[':UserUsername'].$delete(args, options))
    },
  })
}

export function createDeleteUsersUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':UserUsername']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':UserUsername']['$delete']>,
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
    const mutationDefaults = getDeleteUsersUserUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
