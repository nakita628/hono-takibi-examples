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

export function usePostAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.account.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAccountShards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.shards.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.shards.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountShardsMutationOptions<TError, TOnMutateResult>(
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

export function usePostAccountVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.verify.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountVerifyMutationOptions<TError, TOnMutateResult>(
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

export function usePostCertificatesExternal<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.certificates.external.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificatesExternalMutationOptions<TError, TOnMutateResult>(
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

export function getCertificatesExternalCaQueryKey() {
  return ['certificates', '/certificates/external/ca'] as const
}

export function getCertificatesExternalCaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCertificatesExternalCaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.external.ca.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesExternalCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
            >
          >,
          ReturnType<typeof getCertificatesExternalCaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.external.ca.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesExternalCaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCertificatesExternalCaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.external.ca.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesWebhooksCaQueryKey() {
  return ['certificates', '/certificates/webhooks/ca'] as const
}

export function getCertificatesWebhooksCaQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCertificatesWebhooksCaQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.webhooks.ca.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesWebhooksCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
            >
          >,
          ReturnType<typeof getCertificatesWebhooksCaQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.certificates.webhooks.ca.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesWebhooksCaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCertificatesWebhooksCaQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.webhooks.ca.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCertificatesWebhooksCa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificatesWebhooksCaMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCertificatesWebhooksCa<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCertificatesWebhooksCaMutationOptions<TError, TOnMutateResult>(
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

export function usePostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.contacts.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.groups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['$get']>>,
) {
  return ['groups', '/groups/:GroupId', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':GroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':GroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteGroupsGroupIdAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdAdminsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchGroupsGroupIdAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchGroupsGroupIdAdminsMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdIconQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>>,
) {
  return ['groups', '/groups/:GroupId/icon', toValue(args)] as const
}

export function getGroupsGroupIdIconQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdIconQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':GroupId'].icon.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdIcon<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['icon']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['icon']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdIconQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdIconQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':GroupId'].icon.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostGroupsGroupIdIcon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdIconMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteGroupsGroupIdIcon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdIconMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsGroupIdInviteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>>,
) {
  return ['groups', '/groups/:GroupId/invite', toValue(args)] as const
}

export function getGroupsGroupIdInviteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdInviteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':GroupId'].invite.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupIdInvite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':GroupId']['invite']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['invite']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsGroupIdInviteQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdInviteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':GroupId'].invite.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteGroupsGroupIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdInviteMutationOptions<TError, TOnMutateResult>(
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

export function usePostGroupsGroupIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdLeaveMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteGroupsGroupIdParticipants<
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
                Awaited<ReturnType<(typeof client.groups)[':GroupId']['participants']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':GroupId']['participants']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdParticipantsMutationOptions<
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

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
          TError,
          InferRequestType<typeof client.media.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaMediaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':MediaId']['$get']>>,
) {
  return ['media', '/media/:MediaId', toValue(args)] as const
}

export function getMediaMediaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':MediaId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaMediaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media[':MediaId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaMediaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':MediaId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>
            >
          >,
          ReturnType<typeof getMediaMediaIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':MediaId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaMediaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media[':MediaId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteMediaMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMediaMediaIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.messages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMessagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutMessagesMessageID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutMessagesMessageIDMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
) {
  return ['metrics', '/metrics', toValue(args)] as const
}

export function getMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsAccountTwoStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsAccountTwoStepMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSettingsAccountTwoStep<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsAccountTwoStepMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsApplicationQueryKey() {
  return ['settings', '/settings/application'] as const
}

export function getSettingsApplicationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsApplicationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.application.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsApplication<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>
            >
          >,
          ReturnType<typeof getSettingsApplicationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsApplicationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsApplicationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.application.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSettingsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$delete>>>
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
  const mutationDefaults = getDeleteSettingsApplicationMutationOptions<TError, TOnMutateResult>(
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

export function usePatchSettingsApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.application.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.application.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsApplicationMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsApplicationMediaProvidersQueryKey() {
  return ['settings', '/settings/application/media/providers'] as const
}

export function getSettingsApplicationMediaProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsApplicationMediaProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.application.media.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsApplicationMediaProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
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
                Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.application.media.providers.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsApplicationMediaProvidersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getSettingsApplicationMediaProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.application.media.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsApplicationMediaProviders<
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
                Awaited<ReturnType<typeof client.settings.application.media.providers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.settings.application.media.providers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsApplicationMediaProvidersMutationOptions<
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

export function useDeleteSettingsApplicationMediaProvidersProviderName<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsApplicationMediaProvidersProviderNameMutationOptions<
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

export function usePostSettingsBackup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.backup.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.backup.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsBackupMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsBusinessProfileQueryKey() {
  return ['settings', '/settings/business/profile'] as const
}

export function getSettingsBusinessProfileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsBusinessProfileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.business.profile.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsBusinessProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$get>>>
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
                Awaited<ReturnType<typeof client.settings.business.profile.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.settings.business.profile.$get>>
              >
            >
          >,
          ReturnType<typeof getSettingsBusinessProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.business.profile.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsBusinessProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsBusinessProfileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.business.profile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsBusinessProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsBusinessProfileMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsProfileAboutQueryKey() {
  return ['settings', '/settings/profile/about'] as const
}

export function getSettingsProfileAboutQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsProfileAboutQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.profile.about.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsProfileAbout<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>
            >
          >,
          ReturnType<typeof getSettingsProfileAboutQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsProfileAboutQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsProfileAboutQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.profile.about.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchSettingsProfileAbout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.about.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.profile.about.$patch>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchSettingsProfileAboutMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsProfilePhotoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.profile.photo.$get>>,
) {
  return ['settings', '/settings/profile/photo', toValue(args)] as const
}

export function getSettingsProfilePhotoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.profile.photo.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsProfilePhotoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.profile.photo.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsProfilePhoto<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.settings.profile.photo.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>
            >
          >,
          ReturnType<typeof getSettingsProfilePhotoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsProfilePhotoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsProfilePhotoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.profile.photo.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSettingsProfilePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.profile.photo.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.profile.photo.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsProfilePhotoMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteSettingsProfilePhoto<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSettingsProfilePhotoMutationOptions<TError, TOnMutateResult>(
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

export function usePostSettingsRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.settings.restore.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.settings.restore.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getStatsAppQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.app.$get>>,
) {
  return ['stats', '/stats/app', toValue(args)] as const
}

export function getStatsAppQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.app.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsAppQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.app.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsApp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.app.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>
          >,
          ReturnType<typeof getStatsAppQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.app.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsAppQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsAppQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.app.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getStatsDbQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.db.$get>>,
) {
  return ['stats', '/stats/db', toValue(args)] as const
}

export function getStatsDbQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.db.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getStatsDbQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.stats.db.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatsDb<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.stats.db.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>
          >,
          ReturnType<typeof getStatsDbQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stats.db.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatsDbQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getStatsDbQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.stats.db.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupportQueryKey() {
  return ['support', '/support'] as const
}

export function getSupportQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSupportQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSupport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>
          >,
          ReturnType<typeof getSupportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSupportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSupportQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.support.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUsersLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.users.login.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostUsersLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.logout.$post>>>>
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
  const mutationDefaults = getPostUsersLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':UserUsername']['$get']>>,
) {
  return ['users', '/users/:UserUsername', toValue(args)] as const
}

export function getUsersUserUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':UserUsername']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':UserUsername'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':UserUsername']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserUsernameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':UserUsername']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':UserUsername'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserUsernameMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteUsersUserUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserUsernameMutationOptions<TError, TOnMutateResult>(
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
