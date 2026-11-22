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

export function getCategoriesKey() {
  return ['categories'] as const
}

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getCorporateKey() {
  return ['corporate'] as const
}

export function getCouponCollectionsKey() {
  return ['couponCollections'] as const
}

export function getCouponsKey() {
  return ['coupons'] as const
}

export function getCrmKey() {
  return ['crm'] as const
}

export function getEcommerceKey() {
  return ['ecommerce'] as const
}

export function getEmailCampaignsKey() {
  return ['emailCampaigns'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeedsKey() {
  return ['feeds'] as const
}

export function getInboundKey() {
  return ['inbound'] as const
}

export function getLoyaltyKey() {
  return ['loyalty'] as const
}

export function getObjectsKey() {
  return ['objects'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOrganizationKey() {
  return ['organization'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getProcessesKey() {
  return ['processes'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSendersKey() {
  return ['senders'] as const
}

export function getSmsCampaignsKey() {
  return ['smsCampaigns'] as const
}

export function getSmtpKey() {
  return ['smtp'] as const
}

export function getTransactionalSMSKey() {
  return ['transactionalSMS'] as const
}

export function getWalletKey() {
  return ['wallet'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getWhatsappKey() {
  return ['whatsapp'] as const
}

export function getWhatsappCampaignsKey() {
  return ['whatsappCampaigns'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCorporateGroupMutationKey() {
  return ['corporate', '/corporate/group', 'POST'] as const
}

export function getPostCorporateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.group.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.corporate.group.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.group.$post>) {
      return parseResponse(client.corporate.group.$post(args, options))
    },
  })
}

export function usePostCorporateGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.group.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.group.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateGroupMutationOptions<TError, TOnMutateResult>(
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

export function getPutCorporateGroupUnlinkGroupIdSubAccountsMutationKey() {
  return ['corporate', '/corporate/group/unlink/:groupId/subAccounts', 'PUT'] as const
}

export function getPutCorporateGroupUnlinkGroupIdSubAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateGroupUnlinkGroupIdSubAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']
      >,
    ) {
      return parseResponse(
        client.corporate.group.unlink[':groupId'].subAccounts.$put(args, options),
      )
    },
  })
}

export function usePutCorporateGroupUnlinkGroupIdSubAccounts<
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
                      (typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.corporate.group.unlink)[':groupId']['subAccounts']['$put']
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
  const mutationDefaults = getPutCorporateGroupUnlinkGroupIdSubAccountsMutationOptions<
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

export function getCorporateGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.group)[':id']['$get']>>,
) {
  return ['corporate', '/corporate/group/:id', toValue(args)] as const
}

export function getCorporateGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.group)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporateGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.group[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.group)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporateGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporateGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.group[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCorporateGroupIdMutationKey() {
  return ['corporate', '/corporate/group/:id', 'PUT'] as const
}

export function getPutCorporateGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.group)[':id']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.group)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.corporate.group)[':id']['$put']>) {
      return parseResponse(client.corporate.group[':id'].$put(args, options))
    },
  })
}

export function usePutCorporateGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.corporate.group)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.group)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCorporateGroupIdMutationKey() {
  return ['corporate', '/corporate/group/:id', 'DELETE'] as const
}

export function getDeleteCorporateGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.group)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.group)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCorporateGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.corporate.group)[':id']['$delete']>) {
      return parseResponse(client.corporate.group[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCorporateGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.corporate.group)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.group)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCorporateGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getCorporateGroupsQueryKey() {
  return ['corporate', '/corporate/groups'] as const
}

export function getCorporateGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorporateGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>
            >
          >,
          ReturnType<typeof getCorporateGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporateInvitedUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.invited.users.$get>>,
) {
  return ['corporate', '/corporate/invited/users', toValue(args)] as const
}

export function getCorporateInvitedUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.invited.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporateInvitedUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.invited.users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateInvitedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.invited.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
            >
          >,
          ReturnType<typeof getCorporateInvitedUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.invited.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateInvitedUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporateInvitedUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.invited.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporateIpQueryKey() {
  return ['corporate', '/corporate/ip'] as const
}

export function getCorporateIpQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateIpQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.ip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCorporateIp<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>
          >,
          ReturnType<typeof getCorporateIpQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCorporateIpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateIpQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.ip.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCorporateMasterAccountQueryKey() {
  return ['corporate', '/corporate/masterAccount'] as const
}

export function getCorporateMasterAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCorporateMasterAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.masterAccount.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateMasterAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
            >
          >,
          ReturnType<typeof getCorporateMasterAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.masterAccount.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateMasterAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCorporateMasterAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.masterAccount.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCorporateSsoTokenMutationKey() {
  return ['corporate', '/corporate/ssoToken', 'POST'] as const
}

export function getPostCorporateSsoTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ssoToken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.corporate.ssoToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateSsoTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.ssoToken.$post>) {
      return parseResponse(client.corporate.ssoToken.$post(args, options))
    },
  })
}

export function usePostCorporateSsoToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.ssoToken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.ssoToken.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateSsoTokenMutationOptions<TError, TOnMutateResult>(
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

export function getCorporateSubAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.subAccount.$get>>,
) {
  return ['corporate', '/corporate/subAccount', toValue(args)] as const
}

export function getCorporateSubAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.subAccount.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporateSubAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.subAccount.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateSubAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.corporate.subAccount.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>
            >
          >,
          ReturnType<typeof getCorporateSubAccountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateSubAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporateSubAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.subAccount.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCorporateSubAccountMutationKey() {
  return ['corporate', '/corporate/subAccount', 'POST'] as const
}

export function getPostCorporateSubAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.subAccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateSubAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.subAccount.$post>) {
      return parseResponse(client.corporate.subAccount.$post(args, options))
    },
  })
}

export function usePostCorporateSubAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.subAccount.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateSubAccountMutationOptions<TError, TOnMutateResult>(
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

export function getPostCorporateSubAccountIpAssociateMutationKey() {
  return ['corporate', '/corporate/subAccount/ip/associate', 'POST'] as const
}

export function getPostCorporateSubAccountIpAssociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.corporate.subAccount.ip.associate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.subAccount.ip.associate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateSubAccountIpAssociateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.corporate.subAccount.ip.associate.$post>,
    ) {
      return parseResponse(client.corporate.subAccount.ip.associate.$post(args, options))
    },
  })
}

export function usePostCorporateSubAccountIpAssociate<
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
                Awaited<ReturnType<typeof client.corporate.subAccount.ip.associate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.subAccount.ip.associate.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateSubAccountIpAssociateMutationOptions<
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

export function getPutCorporateSubAccountIpDissociateMutationKey() {
  return ['corporate', '/corporate/subAccount/ip/dissociate', 'PUT'] as const
}

export function getPutCorporateSubAccountIpDissociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.corporate.subAccount.ip.dissociate.$put>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateSubAccountIpDissociateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put>,
    ) {
      return parseResponse(client.corporate.subAccount.ip.dissociate.$put(args, options))
    },
  })
}

export function usePutCorporateSubAccountIpDissociate<
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
                  Awaited<ReturnType<typeof client.corporate.subAccount.ip.dissociate.$put>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.corporate.subAccount.ip.dissociate.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateSubAccountIpDissociateMutationOptions<
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

export function getPostCorporateSubAccountKeyMutationKey() {
  return ['corporate', '/corporate/subAccount/key', 'POST'] as const
}

export function getPostCorporateSubAccountKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.key.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.subAccount.key.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateSubAccountKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.subAccount.key.$post>) {
      return parseResponse(client.corporate.subAccount.key.$post(args, options))
    },
  })
}

export function usePostCorporateSubAccountKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.corporate.subAccount.key.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.subAccount.key.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateSubAccountKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPostCorporateSubAccountSsoTokenMutationKey() {
  return ['corporate', '/corporate/subAccount/ssoToken', 'POST'] as const
}

export function getPostCorporateSubAccountSsoTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccount.ssoToken.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.subAccount.ssoToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateSubAccountSsoTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.subAccount.ssoToken.$post>) {
      return parseResponse(client.corporate.subAccount.ssoToken.$post(args, options))
    },
  })
}

export function usePostCorporateSubAccountSsoToken<
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
                Awaited<ReturnType<typeof client.corporate.subAccount.ssoToken.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.subAccount.ssoToken.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateSubAccountSsoTokenMutationOptions<
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

export function getCorporateSubAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>>,
) {
  return ['corporate', '/corporate/subAccount/:id', toValue(args)] as const
}

export function getCorporateSubAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporateSubAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.subAccount[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateSubAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.corporate.subAccount)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporateSubAccountIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateSubAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporateSubAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.subAccount[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCorporateSubAccountIdMutationKey() {
  return ['corporate', '/corporate/subAccount/:id', 'DELETE'] as const
}

export function getDeleteCorporateSubAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCorporateSubAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']>,
    ) {
      return parseResponse(client.corporate.subAccount[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCorporateSubAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.subAccount)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCorporateSubAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutCorporateSubAccountIdApplicationsToggleMutationKey() {
  return ['corporate', '/corporate/subAccount/:id/applications/toggle', 'PUT'] as const
}

export function getPutCorporateSubAccountIdApplicationsToggleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateSubAccountIdApplicationsToggleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
      >,
    ) {
      return parseResponse(
        client.corporate.subAccount[':id'].applications.toggle.$put(args, options),
      )
    },
  })
}

export function usePutCorporateSubAccountIdApplicationsToggle<
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
                      (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.corporate.subAccount)[':id']['applications']['toggle']['$put']
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
  const mutationDefaults = getPutCorporateSubAccountIdApplicationsToggleMutationOptions<
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

export function getPutCorporateSubAccountIdPlanMutationKey() {
  return ['corporate', '/corporate/subAccount/:id/plan', 'PUT'] as const
}

export function getPutCorporateSubAccountIdPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateSubAccountIdPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>,
    ) {
      return parseResponse(client.corporate.subAccount[':id'].plan.$put(args, options))
    },
  })
}

export function usePutCorporateSubAccountIdPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.subAccount)[':id']['plan']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateSubAccountIdPlanMutationOptions<TError, TOnMutateResult>(
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

export function getPutCorporateSubAccountsPlanMutationKey() {
  return ['corporate', '/corporate/subAccounts/plan', 'PUT'] as const
}

export function getPutCorporateSubAccountsPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.corporate.subAccounts.plan.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.subAccounts.plan.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateSubAccountsPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.subAccounts.plan.$put>) {
      return parseResponse(client.corporate.subAccounts.plan.$put(args, options))
    },
  })
}

export function usePutCorporateSubAccountsPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.corporate.subAccounts.plan.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.subAccounts.plan.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateSubAccountsPlanMutationOptions<TError, TOnMutateResult>(
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

export function getPostCorporateUserInvitationSendMutationKey() {
  return ['corporate', '/corporate/user/invitation/send', 'POST'] as const
}

export function getPostCorporateUserInvitationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.corporate.user.invitation.send.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.corporate.user.invitation.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCorporateUserInvitationSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.corporate.user.invitation.send.$post>) {
      return parseResponse(client.corporate.user.invitation.send.$post(args, options))
    },
  })
}

export function usePostCorporateUserInvitationSend<
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
                Awaited<ReturnType<typeof client.corporate.user.invitation.send.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.corporate.user.invitation.send.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCorporateUserInvitationSendMutationOptions<
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

export function getPutCorporateUserInvitationActionEmailMutationKey() {
  return ['corporate', '/corporate/user/invitation/:action/:email', 'PUT'] as const
}

export function getPutCorporateUserInvitationActionEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateUserInvitationActionEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.corporate.user.invitation)[':action'][':email']['$put']
      >,
    ) {
      return parseResponse(
        client.corporate.user.invitation[':action'][':email'].$put(args, options),
      )
    },
  })
}

export function usePutCorporateUserInvitationActionEmail<
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
                  ReturnType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.corporate.user.invitation)[':action'][':email']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateUserInvitationActionEmailMutationOptions<
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

export function getDeleteCorporateUserRevokeEmailMutationKey() {
  return ['corporate', '/corporate/user/revoke/:email', 'DELETE'] as const
}

export function getDeleteCorporateUserRevokeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user.revoke)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCorporateUserRevokeEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']>,
    ) {
      return parseResponse(client.corporate.user.revoke[':email'].$delete(args, options))
    },
  })
}

export function useDeleteCorporateUserRevokeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.corporate.user.revoke)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.user.revoke)[':email']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCorporateUserRevokeEmailMutationOptions<
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

export function getCorporateUserEmailPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>
  >,
) {
  return ['corporate', '/corporate/user/:email/permissions', toValue(args)] as const
}

export function getCorporateUserEmailPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCorporateUserEmailPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.corporate.user[':email'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCorporateUserEmailPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCorporateUserEmailPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCorporateUserEmailPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCorporateUserEmailPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.corporate.user[':email'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutCorporateUserEmailPermissionsMutationKey() {
  return ['corporate', '/corporate/user/:email/permissions', 'PUT'] as const
}

export function getPutCorporateUserEmailPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.corporate.user)[':email']['permissions']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCorporateUserEmailPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>,
    ) {
      return parseResponse(client.corporate.user[':email'].permissions.$put(args, options))
    },
  })
}

export function usePutCorporateUserEmailPermissions<
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
                    ReturnType<(typeof client.corporate.user)[':email']['permissions']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.corporate.user)[':email']['permissions']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCorporateUserEmailPermissionsMutationOptions<
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

export function getOrganizationActivitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.activities.$get>>,
) {
  return ['organization', '/organization/activities', toValue(args)] as const
}

export function getOrganizationActivitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.activities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationActivitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.activities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.organization.activities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
            >
          >,
          ReturnType<typeof getOrganizationActivitiesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.activities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationActivitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationActivitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.activities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrganizationInvitedUsersQueryKey() {
  return ['organization', '/organization/invited/users'] as const
}

export function getOrganizationInvitedUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrganizationInvitedUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.invited.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationInvitedUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
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
                Awaited<ReturnType<typeof client.organization.invited.users.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.organization.invited.users.$get>>
              >
            >
          >,
          ReturnType<typeof getOrganizationInvitedUsersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.organization.invited.users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationInvitedUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrganizationInvitedUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.invited.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutOrganizationUserInvitationRevokeEmailMutationKey() {
  return ['organization', '/organization/user/invitation/revoke/:email', 'PUT'] as const
}

export function getPutOrganizationUserInvitationRevokeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationUserInvitationRevokeEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>,
    ) {
      return parseResponse(client.organization.user.invitation.revoke[':email'].$put(args, options))
    },
  })
}

export function usePutOrganizationUserInvitationRevokeEmail<
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
                  ReturnType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.organization.user.invitation.revoke)[':email']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganizationUserInvitationRevokeEmailMutationOptions<
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

export function getPostOrganizationUserInvitationSendMutationKey() {
  return ['organization', '/organization/user/invitation/send', 'POST'] as const
}

export function getPostOrganizationUserInvitationSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.user.invitation.send.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.organization.user.invitation.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationUserInvitationSendMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.organization.user.invitation.send.$post>,
    ) {
      return parseResponse(client.organization.user.invitation.send.$post(args, options))
    },
  })
}

export function usePostOrganizationUserInvitationSend<
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
                Awaited<ReturnType<typeof client.organization.user.invitation.send.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.user.invitation.send.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationUserInvitationSendMutationOptions<
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

export function getPutOrganizationUserInvitationActionEmailMutationKey() {
  return ['organization', '/organization/user/invitation/:action/:email', 'PUT'] as const
}

export function getPutOrganizationUserInvitationActionEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organization.user.invitation)[':action'][':email']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organization.user.invitation)[':action'][':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganizationUserInvitationActionEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organization.user.invitation)[':action'][':email']['$put']
      >,
    ) {
      return parseResponse(
        client.organization.user.invitation[':action'][':email'].$put(args, options),
      )
    },
  })
}

export function usePutOrganizationUserInvitationActionEmail<
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
                    (typeof client.organization.user.invitation)[':action'][':email']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.organization.user.invitation)[':action'][':email']['$put']
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
  const mutationDefaults = getPutOrganizationUserInvitationActionEmailMutationOptions<
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

export function getPostOrganizationUserUpdatePermissionsMutationKey() {
  return ['organization', '/organization/user/update/permissions', 'POST'] as const
}

export function getPostOrganizationUserUpdatePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.organization.user.update.permissions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.organization.user.update.permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationUserUpdatePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.organization.user.update.permissions.$post>,
    ) {
      return parseResponse(client.organization.user.update.permissions.$post(args, options))
    },
  })
}

export function usePostOrganizationUserUpdatePermissions<
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
                Awaited<ReturnType<typeof client.organization.user.update.permissions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.organization.user.update.permissions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationUserUpdatePermissionsMutationOptions<
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

export function getOrganizationUserEmailPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>
  >,
) {
  return ['organization', '/organization/user/:email/permissions', toValue(args)] as const
}

export function getOrganizationUserEmailPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrganizationUserEmailPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.organization.user[':email'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrganizationUserEmailPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.organization.user)[':email']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrganizationUserEmailPermissionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organization.user)[':email']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationUserEmailPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrganizationUserEmailPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.organization.user[':email'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProcessesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.processes.$get>>,
) {
  return ['processes', '/processes', toValue(args)] as const
}

export function getProcessesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.processes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProcessesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.processes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProcesses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.processes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>
          >,
          ReturnType<typeof getProcessesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProcessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProcessesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.processes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProcessesProcessIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.processes)[':processId']['$get']>>,
) {
  return ['processes', '/processes/:processId', toValue(args)] as const
}

export function getProcessesProcessIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.processes)[':processId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProcessesProcessIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.processes[':processId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProcessesProcessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.processes)[':processId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProcessesProcessIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.processes)[':processId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProcessesProcessIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProcessesProcessIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.processes[':processId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
) {
  return ['senders', '/senders', toValue(args)] as const
}

export function getSendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.senders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>
          >,
          ReturnType<typeof getSendersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSendersMutationKey() {
  return ['senders', '/senders', 'POST'] as const
}

export function getPostSendersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>>,
    TError,
    InferRequestType<typeof client.senders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.$post>) {
      return parseResponse(client.senders.$post(args, options))
    },
  })
}

export function usePostSenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.senders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSendersDomainsQueryKey() {
  return ['senders', '/senders/domains'] as const
}

export function getSendersDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSendersDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSendersDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>
            >
          >,
          ReturnType<typeof getSendersDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendersDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSendersDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.senders.domains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSendersDomainsMutationKey() {
  return ['senders', '/senders/domains', 'POST'] as const
}

export function getPostSendersDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.senders.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendersDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.senders.domains.$post>) {
      return parseResponse(client.senders.domains.$post(args, options))
    },
  })
}

export function usePostSendersDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.senders.domains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendersDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getSendersDomainsDomainNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>>,
) {
  return ['senders', '/senders/domains/:domainName', toValue(args)] as const
}

export function getSendersDomainsDomainNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendersDomainsDomainNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders.domains[':domainName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendersDomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders.domains)[':domainName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSendersDomainsDomainNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendersDomainsDomainNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendersDomainsDomainNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senders.domains[':domainName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSendersDomainsDomainNameMutationKey() {
  return ['senders', '/senders/domains/:domainName', 'DELETE'] as const
}

export function getDeleteSendersDomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSendersDomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']>,
    ) {
      return parseResponse(client.senders.domains[':domainName'].$delete(args, options))
    },
  })
}

export function useDeleteSendersDomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders.domains)[':domainName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.senders.domains)[':domainName']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSendersDomainsDomainNameMutationOptions<
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

export function getPutSendersDomainsDomainNameAuthenticateMutationKey() {
  return ['senders', '/senders/domains/:domainName/authenticate', 'PUT'] as const
}

export function getPutSendersDomainsDomainNameAuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSendersDomainsDomainNameAuthenticateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.senders.domains)[':domainName']['authenticate']['$put']
      >,
    ) {
      return parseResponse(client.senders.domains[':domainName'].authenticate.$put(args, options))
    },
  })
}

export function usePutSendersDomainsDomainNameAuthenticate<
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
                  ReturnType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.senders.domains)[':domainName']['authenticate']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSendersDomainsDomainNameAuthenticateMutationOptions<
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

export function getSendersIpsQueryKey() {
  return ['senders', '/senders/ips'] as const
}

export function getSendersIpsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSendersIpsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders.ips.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSendersIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>
          >,
          ReturnType<typeof getSendersIpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSendersIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSendersIpsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.senders.ips.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSendersSenderIdMutationKey() {
  return ['senders', '/senders/:senderId', 'PUT'] as const
}

export function getPutSendersSenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.senders)[':senderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSendersSenderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)[':senderId']['$put']>) {
      return parseResponse(client.senders[':senderId'].$put(args, options))
    },
  })
}

export function usePutSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.senders)[':senderId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.senders)[':senderId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSendersSenderIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSendersSenderIdMutationKey() {
  return ['senders', '/senders/:senderId', 'DELETE'] as const
}

export function getDeleteSendersSenderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.senders)[':senderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSendersSenderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.senders)[':senderId']['$delete']>) {
      return parseResponse(client.senders[':senderId'].$delete(args, options))
    },
  })
}

export function useDeleteSendersSenderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.senders)[':senderId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.senders)[':senderId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSendersSenderIdMutationOptions<TError, TOnMutateResult>(
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

export function getSendersSenderIdIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>>,
) {
  return ['senders', '/senders/:senderId/ips', toValue(args)] as const
}

export function getSendersSenderIdIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendersSenderIdIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.senders[':senderId'].ips.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendersSenderIdIps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.senders)[':senderId']['ips']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSendersSenderIdIpsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.senders)[':senderId']['ips']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSendersSenderIdIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendersSenderIdIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.senders[':senderId'].ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSendersSenderIdValidateMutationKey() {
  return ['senders', '/senders/:senderId/validate', 'PUT'] as const
}

export function getPutSendersSenderIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.senders)[':senderId']['validate']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSendersSenderIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']>,
    ) {
      return parseResponse(client.senders[':senderId'].validate.$put(args, options))
    },
  })
}

export function usePutSendersSenderIdValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.senders)[':senderId']['validate']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.senders)[':senderId']['validate']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSendersSenderIdValidateMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  return ['webhooks', '/webhooks', toValue(args)] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostWebhooksExportMutationKey() {
  return ['webhooks', '/webhooks/export', 'POST'] as const
}

export function getPostWebhooksExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhooks.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.export.$post>) {
      return parseResponse(client.webhooks.export.$post(args, options))
    },
  })
}

export function usePostWebhooksExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.webhooks.export.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhooksExportMutationOptions<TError, TOnMutateResult>(
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

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
) {
  return ['webhooks', '/webhooks/:webhookId', toValue(args)] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'PUT'] as const
}

export function getPutWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>) {
      return parseResponse(client.webhooks[':webhookId'].$put(args, options))
    },
  })
}

export function usePutWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>) {
      return parseResponse(client.webhooks[':webhookId'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhookId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhookId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getFeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feeds.$get>>,
) {
  return ['feeds', '/feeds', toValue(args)] as const
}

export function getFeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeeds<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
          ReturnType<typeof getFeedsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostFeedsMutationKey() {
  return ['feeds', '/feeds', 'POST'] as const
}

export function getPostFeedsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
    TError,
    InferRequestType<typeof client.feeds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFeedsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.feeds.$post>) {
      return parseResponse(client.feeds.$post(args, options))
    },
  })
}

export function usePostFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feeds.$post>>>>>,
          TError,
          InferRequestType<typeof client.feeds.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFeedsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFeedsUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':uuid']['$get']>>,
) {
  return ['feeds', '/feeds/:uuid', toValue(args)] as const
}

export function getFeedsUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedsUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feeds[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedsUuid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.feeds)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>
            >
          >,
          ReturnType<typeof getFeedsUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedsUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedsUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feeds[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutFeedsUuidMutationKey() {
  return ['feeds', '/feeds/:uuid', 'PUT'] as const
}

export function getPutFeedsUuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.feeds)[':uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeedsUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds)[':uuid']['$put']>) {
      return parseResponse(client.feeds[':uuid'].$put(args, options))
    },
  })
}

export function usePutFeedsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$put']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.feeds)[':uuid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFeedsUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFeedsUuidMutationKey() {
  return ['feeds', '/feeds/:uuid', 'DELETE'] as const
}

export function getDeleteFeedsUuidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.feeds)[':uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFeedsUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.feeds)[':uuid']['$delete']>) {
      return parseResponse(client.feeds[':uuid'].$delete(args, options))
    },
  })
}

export function useDeleteFeedsUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.feeds)[':uuid']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.feeds)[':uuid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFeedsUuidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostObjectsObjectTypeBatchUpsertMutationKey() {
  return ['objects', '/objects/:object_type/batch/upsert', 'POST'] as const
}

export function getPostObjectsObjectTypeBatchUpsertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsObjectTypeBatchUpsertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>,
    ) {
      return parseResponse(client.objects[':object_type'].batch.upsert.$post(args, options))
    },
  })
}

export function usePostObjectsObjectTypeBatchUpsert<
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
                  ReturnType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects)[':object_type']['batch']['upsert']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsObjectTypeBatchUpsertMutationOptions<
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

export function getObjectsObjectTypeRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>
  >,
) {
  return ['objects', '/objects/:object_type/records', toValue(args)] as const
}

export function getObjectsObjectTypeRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsObjectTypeRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects[':object_type'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsObjectTypeRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['records']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
              >
            >
          >,
          ReturnType<typeof getObjectsObjectTypeRecordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsObjectTypeRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsObjectTypeRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects[':object_type'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostObjectsObjectTypeBatchDeleteMutationKey() {
  return ['objects', '/objects/:object_type/batch/delete', 'POST'] as const
}

export function getPostObjectsObjectTypeBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostObjectsObjectTypeBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>,
    ) {
      return parseResponse(client.objects[':object_type'].batch.delete.$post(args, options))
    },
  })
}

export function usePostObjectsObjectTypeBatchDelete<
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
                  ReturnType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.objects)[':object_type']['batch']['delete']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostObjectsObjectTypeBatchDeleteMutationOptions<
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

export function getObjectsObjectTypeAssociatedRecordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>
  >,
) {
  return ['objects', '/objects/:object_type/associated-records', toValue(args)] as const
}

export function getObjectsObjectTypeAssociatedRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getObjectsObjectTypeAssociatedRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.objects[':object_type']['associated-records'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useObjectsObjectTypeAssociatedRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.objects)[':object_type']['associated-records']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getObjectsObjectTypeAssociatedRecordsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.objects)[':object_type']['associated-records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getObjectsObjectTypeAssociatedRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getObjectsObjectTypeAssociatedRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.objects[':object_type']['associated-records'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
) {
  return ['contacts', '/contacts', toValue(args)] as const
}

export function getContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>
    | undefined,
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
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
            >
          | undefined,
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

export function getContactsAttributesQueryKey() {
  return ['contacts', '/contacts/attributes'] as const
}

export function getContactsAttributesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getContactsAttributesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.attributes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsAttributes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>
            >
          >,
          ReturnType<typeof getContactsAttributesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.attributes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsAttributesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getContactsAttributesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.attributes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsAttributesAttributeCategoryAttributeNameMutationKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'PUT'] as const
}

export function getPutContactsAttributesAttributeCategoryAttributeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutContactsAttributesAttributeCategoryAttributeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
      >,
    ) {
      return parseResponse(
        client.contacts.attributes[':attributeCategory'][':attributeName'].$put(args, options),
      )
    },
  })
}

export function usePutContactsAttributesAttributeCategoryAttributeName<
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
                      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$put']
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
  const mutationDefaults = getPutContactsAttributesAttributeCategoryAttributeNameMutationOptions<
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

export function getPostContactsAttributesAttributeCategoryAttributeNameMutationKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'POST'] as const
}

export function getPostContactsAttributesAttributeCategoryAttributeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostContactsAttributesAttributeCategoryAttributeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
      >,
    ) {
      return parseResponse(
        client.contacts.attributes[':attributeCategory'][':attributeName'].$post(args, options),
      )
    },
  })
}

export function usePostContactsAttributesAttributeCategoryAttributeName<
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
                    (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$post']
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
  const mutationDefaults = getPostContactsAttributesAttributeCategoryAttributeNameMutationOptions<
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

export function getDeleteContactsAttributesAttributeCategoryAttributeNameMutationKey() {
  return ['contacts', '/contacts/attributes/:attributeCategory/:attributeName', 'DELETE'] as const
}

export function getDeleteContactsAttributesAttributeCategoryAttributeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsAttributesAttributeCategoryAttributeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
      >,
    ) {
      return parseResponse(
        client.contacts.attributes[':attributeCategory'][':attributeName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactsAttributesAttributeCategoryAttributeName<
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
                      (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.contacts.attributes)[':attributeCategory'][':attributeName']['$delete']
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
  const mutationDefaults = getDeleteContactsAttributesAttributeCategoryAttributeNameMutationOptions<
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

export function getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionMutationKey() {
  return [
    'contacts',
    '/contacts/attributes/:attributeType/:multipleChoiceAttribute/:multipleChoiceAttributeOption',
    'DELETE',
  ] as const
}

export function getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
      >,
    ) {
      return parseResponse(
        client.contacts.attributes[':attributeType'][':multipleChoiceAttribute'][
          ':multipleChoiceAttributeOption'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOption<
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
                      (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.contacts.attributes)[':attributeType'][':multipleChoiceAttribute'][':multipleChoiceAttributeOption']['$delete']
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
    getDeleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionMutationOptions<
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

export function getPostContactsBatchMutationKey() {
  return ['contacts', '/contacts/batch', 'POST'] as const
}

export function getPostContactsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.batch.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.contacts.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.batch.$post>) {
      return parseResponse(client.contacts.batch.$post(args, options))
    },
  })
}

export function usePostContactsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.contacts.batch.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.contacts.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostContactsDoubleOptinConfirmationMutationKey() {
  return ['contacts', '/contacts/doubleOptinConfirmation', 'POST'] as const
}

export function getPostContactsDoubleOptinConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.contacts.doubleOptinConfirmation.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsDoubleOptinConfirmationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post>) {
      return parseResponse(client.contacts.doubleOptinConfirmation.$post(args, options))
    },
  })
}

export function usePostContactsDoubleOptinConfirmation<
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
                  Awaited<ReturnType<typeof client.contacts.doubleOptinConfirmation.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.contacts.doubleOptinConfirmation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsDoubleOptinConfirmationMutationOptions<
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

export function getPostContactsExportMutationKey() {
  return ['contacts', '/contacts/export', 'POST'] as const
}

export function getPostContactsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.export.$post>) {
      return parseResponse(client.contacts.export.$post(args, options))
    },
  })
}

export function usePostContactsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.export.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsExportMutationOptions<TError, TOnMutateResult>(
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

export function getContactsFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.folders.$get>>,
) {
  return ['contacts', '/contacts/folders', toValue(args)] as const
}

export function getContactsFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>
            >
          >,
          ReturnType<typeof getContactsFoldersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsFoldersMutationKey() {
  return ['contacts', '/contacts/folders', 'POST'] as const
}

export function getPostContactsFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.folders.$post>) {
      return parseResponse(client.contacts.folders.$post(args, options))
    },
  })
}

export function usePostContactsFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.folders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.folders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsFoldersMutationOptions<TError, TOnMutateResult>(
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

export function getContactsFoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>>,
) {
  return ['contacts', '/contacts/folders/:folderId', toValue(args)] as const
}

export function getContactsFoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsFoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.folders[':folderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.folders)[':folderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsFoldersFolderIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsFoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.folders[':folderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsFoldersFolderIdMutationKey() {
  return ['contacts', '/contacts/folders/:folderId', 'PUT'] as const
}

export function getPutContactsFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']>,
    ) {
      return parseResponse(client.contacts.folders[':folderId'].$put(args, options))
    },
  })
}

export function usePutContactsFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts.folders)[':folderId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactsFoldersFolderIdMutationKey() {
  return ['contacts', '/contacts/folders/:folderId', 'DELETE'] as const
}

export function getDeleteContactsFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']>,
    ) {
      return parseResponse(client.contacts.folders[':folderId'].$delete(args, options))
    },
  })
}

export function useDeleteContactsFoldersFolderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts.folders)[':folderId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsFoldersFolderIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactsFoldersFolderIdListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>
  >,
) {
  return ['contacts', '/contacts/folders/:folderId/lists', toValue(args)] as const
}

export function getContactsFoldersFolderIdListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsFoldersFolderIdListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.folders[':folderId'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsFoldersFolderIdLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsFoldersFolderIdListsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.folders)[':folderId']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsFoldersFolderIdListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsFoldersFolderIdListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.folders[':folderId'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsImportMutationKey() {
  return ['contacts', '/contacts/import', 'POST'] as const
}

export function getPostContactsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.import.$post>) {
      return parseResponse(client.contacts.import.$post(args, options))
    },
  })
}

export function usePostContactsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsImportMutationOptions<TError, TOnMutateResult>(
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

export function getContactsListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.lists.$get>>,
) {
  return ['contacts', '/contacts/lists', toValue(args)] as const
}

export function getContactsListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.lists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.lists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
          >,
          ReturnType<typeof getContactsListsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsListsMutationKey() {
  return ['contacts', '/contacts/lists', 'POST'] as const
}

export function getPostContactsListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.contacts.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.lists.$post>) {
      return parseResponse(client.contacts.lists.$post(args, options))
    },
  })
}

export function usePostContactsLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.lists.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.contacts.lists.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsListsMutationOptions<TError, TOnMutateResult>(
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

export function getContactsListsListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>>,
) {
  return ['contacts', '/contacts/lists/:listId', toValue(args)] as const
}

export function getContactsListsListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsListsListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.lists[':listId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsListsListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts.lists)[':listId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsListsListIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsListsListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsListsListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.lists[':listId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsListsListIdMutationKey() {
  return ['contacts', '/contacts/lists/:listId', 'PUT'] as const
}

export function getPutContactsListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts.lists)[':listId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts.lists)[':listId']['$put']>) {
      return parseResponse(client.contacts.lists[':listId'].$put(args, options))
    },
  })
}

export function usePutContactsListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts.lists)[':listId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactsListsListIdMutationKey() {
  return ['contacts', '/contacts/lists/:listId', 'DELETE'] as const
}

export function getDeleteContactsListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']>) {
      return parseResponse(client.contacts.lists[':listId'].$delete(args, options))
    },
  })
}

export function useDeleteContactsListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts.lists)[':listId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactsListsListIdContactsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>
  >,
) {
  return ['contacts', '/contacts/lists/:listId/contacts', toValue(args)] as const
}

export function getContactsListsListIdContactsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsListsListIdContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.lists[':listId'].contacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsListsListIdContacts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsListsListIdContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsListsListIdContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsListsListIdContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.lists[':listId'].contacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsListsListIdContactsAddMutationKey() {
  return ['contacts', '/contacts/lists/:listId/contacts/add', 'POST'] as const
}

export function getPostContactsListsListIdContactsAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsListsListIdContactsAddMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>,
    ) {
      return parseResponse(client.contacts.lists[':listId'].contacts.add.$post(args, options))
    },
  })
}

export function usePostContactsListsListIdContactsAdd<
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
                  ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['add']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsListsListIdContactsAddMutationOptions<
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

export function getPostContactsListsListIdContactsRemoveMutationKey() {
  return ['contacts', '/contacts/lists/:listId/contacts/remove', 'POST'] as const
}

export function getPostContactsListsListIdContactsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsListsListIdContactsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']
      >,
    ) {
      return parseResponse(client.contacts.lists[':listId'].contacts.remove.$post(args, options))
    },
  })
}

export function usePostContactsListsListIdContactsRemove<
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
                    (typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.contacts.lists)[':listId']['contacts']['remove']['$post']
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
  const mutationDefaults = getPostContactsListsListIdContactsRemoveMutationOptions<
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

export function getContactsSegmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.segments.$get>>,
) {
  return ['contacts', '/contacts/segments', toValue(args)] as const
}

export function getContactsSegmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.segments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsSegments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.contacts.segments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>
            >
          >,
          ReturnType<typeof getContactsSegmentsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.segments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContactsConsentGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)['consent-groups']['$get']>>,
) {
  return ['contacts', '/contacts/consent-groups', toValue(args)] as const
}

export function getContactsConsentGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)['consent-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsConsentGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts['consent-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsConsentGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)['consent-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsConsentGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsConsentGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsConsentGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts['consent-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostContactsConsentGroupsMutationKey() {
  return ['contacts', '/contacts/consent-groups', 'POST'] as const
}

export function getPostContactsConsentGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)['consent-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsConsentGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)['consent-groups']['$post']>) {
      return parseResponse(client.contacts['consent-groups'].$post(args, options))
    },
  })
}

export function usePostContactsConsentGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)['consent-groups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostContactsConsentGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getContactsConsentGroupsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>
  >,
) {
  return ['contacts', '/contacts/consent-groups/:id', toValue(args)] as const
}

export function getContactsConsentGroupsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsConsentGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts['consent-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsConsentGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsConsentGroupsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsConsentGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsConsentGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts['consent-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsConsentGroupsIdMutationKey() {
  return ['contacts', '/contacts/consent-groups/:id', 'PUT'] as const
}

export function getPutContactsConsentGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsConsentGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']>,
    ) {
      return parseResponse(client.contacts['consent-groups'][':id'].$put(args, options))
    },
  })
}

export function usePutContactsConsentGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsConsentGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactsConsentGroupsIdMutationKey() {
  return ['contacts', '/contacts/consent-groups/:id', 'DELETE'] as const
}

export function getDeleteContactsConsentGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsConsentGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']>,
    ) {
      return parseResponse(client.contacts['consent-groups'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteContactsConsentGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts)['consent-groups'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts)['consent-groups'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsConsentGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getContactsIdentifierQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':identifier']['$get']>>,
) {
  return ['contacts', '/contacts/:identifier', toValue(args)] as const
}

export function getContactsIdentifierQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':identifier']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.contacts)[':identifier']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getContactsIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutContactsIdentifierMutationKey() {
  return ['contacts', '/contacts/:identifier', 'PUT'] as const
}

export function getPutContactsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':identifier']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts)[':identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':identifier']['$put']>) {
      return parseResponse(client.contacts[':identifier'].$put(args, options))
    },
  })
}

export function usePutContactsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts)[':identifier']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts)[':identifier']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutContactsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteContactsIdentifierMutationKey() {
  return ['contacts', '/contacts/:identifier', 'DELETE'] as const
}

export function getDeleteContactsIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.contacts)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.contacts)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':identifier']['$delete']>) {
      return parseResponse(client.contacts[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteContactsIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.contacts)[':identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.contacts)[':identifier']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteContactsIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getContactsIdentifierCampaignStatsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>
  >,
) {
  return ['contacts', '/contacts/:identifier/campaignStats', toValue(args)] as const
}

export function getContactsIdentifierCampaignStatsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContactsIdentifierCampaignStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts[':identifier'].campaignStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContactsIdentifierCampaignStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getContactsIdentifierCampaignStatsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.contacts)[':identifier']['campaignStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdentifierCampaignStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContactsIdentifierCampaignStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts[':identifier'].campaignStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConversationsAgentOnlinePingMutationKey() {
  return ['conversations', '/conversations/agentOnlinePing', 'POST'] as const
}

export function getPostConversationsAgentOnlinePingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.agentOnlinePing.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.agentOnlinePing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsAgentOnlinePingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.agentOnlinePing.$post>) {
      return parseResponse(client.conversations.agentOnlinePing.$post(args, options))
    },
  })
}

export function usePostConversationsAgentOnlinePing<
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
                Awaited<ReturnType<typeof client.conversations.agentOnlinePing.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.agentOnlinePing.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsAgentOnlinePingMutationOptions<
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

export function getPostConversationsMessagesMutationKey() {
  return ['conversations', '/conversations/messages', 'POST'] as const
}

export function getPostConversationsMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.messages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.messages.$post>) {
      return parseResponse(client.conversations.messages.$post(args, options))
    },
  })
}

export function usePostConversationsMessages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.conversations.messages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.messages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsMessagesMutationOptions<TError, TOnMutateResult>(
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

export function getConversationsMessagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.messages)[':id']['$get']>>,
) {
  return ['conversations', '/conversations/messages/:id', toValue(args)] as const
}

export function getConversationsMessagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.messages)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.messages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.conversations.messages)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsMessagesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.messages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConversationsMessagesIdMutationKey() {
  return ['conversations', '/conversations/messages/:id', 'PUT'] as const
}

export function getPutConversationsMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.messages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.messages)[':id']['$put']>,
    ) {
      return parseResponse(client.conversations.messages[':id'].$put(args, options))
    },
  })
}

export function usePutConversationsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.messages)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversationsMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteConversationsMessagesIdMutationKey() {
  return ['conversations', '/conversations/messages/:id', 'DELETE'] as const
}

export function getDeleteConversationsMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.conversations.messages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.messages)[':id']['$delete']>,
    ) {
      return parseResponse(client.conversations.messages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsMessagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.conversations.messages)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.conversations.messages)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsMessagesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostConversationsPushedMessagesMutationKey() {
  return ['conversations', '/conversations/pushedMessages', 'POST'] as const
}

export function getPostConversationsPushedMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.pushedMessages.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.pushedMessages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConversationsPushedMessagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.pushedMessages.$post>) {
      return parseResponse(client.conversations.pushedMessages.$post(args, options))
    },
  })
}

export function usePostConversationsPushedMessages<
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
                Awaited<ReturnType<typeof client.conversations.pushedMessages.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.pushedMessages.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConversationsPushedMessagesMutationOptions<
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

export function getConversationsPushedMessagesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>
  >,
) {
  return ['conversations', '/conversations/pushedMessages/:id', toValue(args)] as const
}

export function getConversationsPushedMessagesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConversationsPushedMessagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.conversations.pushedMessages[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConversationsPushedMessagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConversationsPushedMessagesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConversationsPushedMessagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConversationsPushedMessagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.conversations.pushedMessages[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutConversationsPushedMessagesIdMutationKey() {
  return ['conversations', '/conversations/pushedMessages/:id', 'PUT'] as const
}

export function getPutConversationsPushedMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsPushedMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']>,
    ) {
      return parseResponse(client.conversations.pushedMessages[':id'].$put(args, options))
    },
  })
}

export function usePutConversationsPushedMessagesId<
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
                Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversationsPushedMessagesIdMutationOptions<
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

export function getDeleteConversationsPushedMessagesIdMutationKey() {
  return ['conversations', '/conversations/pushedMessages/:id', 'DELETE'] as const
}

export function getDeleteConversationsPushedMessagesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations.pushedMessages)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConversationsPushedMessagesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>,
    ) {
      return parseResponse(client.conversations.pushedMessages[':id'].$delete(args, options))
    },
  })
}

export function useDeleteConversationsPushedMessagesId<
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
                    ReturnType<(typeof client.conversations.pushedMessages)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.conversations.pushedMessages)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConversationsPushedMessagesIdMutationOptions<
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

export function getPutConversationsVisitorGroupMutationKey() {
  return ['conversations', '/conversations/visitorGroup', 'PUT'] as const
}

export function getPutConversationsVisitorGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.visitorGroup.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.conversations.visitorGroup.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutConversationsVisitorGroupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.conversations.visitorGroup.$put>) {
      return parseResponse(client.conversations.visitorGroup.$put(args, options))
    },
  })
}

export function usePutConversationsVisitorGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.conversations.visitorGroup.$put>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.conversations.visitorGroup.$put>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutConversationsVisitorGroupMutationOptions<TError, TOnMutateResult>(
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

export function getCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
) {
  return ['categories', '/categories', toValue(args)] as const
}

export function getCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>
          >,
          ReturnType<typeof getCategoriesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCategoriesMutationKey() {
  return ['categories', '/categories', 'POST'] as const
}

export function getPostCategoriesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.$post>) {
      return parseResponse(client.categories.$post(args, options))
    },
  })
}

export function usePostCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.categories.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCategoriesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCategoriesBatchMutationKey() {
  return ['categories', '/categories/batch', 'POST'] as const
}

export function getPostCategoriesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.categories.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.categories.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCategoriesBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.categories.batch.$post>) {
      return parseResponse(client.categories.batch.$post(args, options))
    },
  })
}

export function usePostCategoriesBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.categories.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.categories.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCategoriesBatchMutationOptions<TError, TOnMutateResult>(
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

export function getCategoriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
) {
  return ['categories', '/categories/:id', toValue(args)] as const
}

export function getCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCategoriesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.categories)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCategoriesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.categories)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCouponCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.couponCollections.$get>>,
) {
  return ['couponCollections', '/couponCollections', toValue(args)] as const
}

export function getCouponCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.couponCollections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.couponCollections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.couponCollections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>
            >
          >,
          ReturnType<typeof getCouponCollectionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCouponCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.couponCollections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCouponCollectionsMutationKey() {
  return ['couponCollections', '/couponCollections', 'POST'] as const
}

export function getPostCouponCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.couponCollections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.couponCollections.$post>) {
      return parseResponse(client.couponCollections.$post(args, options))
    },
  })
}

export function usePostCouponCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.couponCollections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.couponCollections.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCouponCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getCouponCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.couponCollections)[':id']['$get']>>,
) {
  return ['couponCollections', '/couponCollections/:id', toValue(args)] as const
}

export function getCouponCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.couponCollections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.couponCollections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.couponCollections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCouponCollectionsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.couponCollections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.couponCollections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCouponCollectionsIdMutationKey() {
  return ['couponCollections', '/couponCollections/:id', 'PATCH'] as const
}

export function getPatchCouponCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.couponCollections)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.couponCollections)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCouponCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.couponCollections)[':id']['$patch']>) {
      return parseResponse(client.couponCollections[':id'].$patch(args, options))
    },
  })
}

export function usePatchCouponCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.couponCollections)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.couponCollections)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCouponCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostCouponsMutationKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function getPostCouponsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.coupons.$post>) {
      return parseResponse(client.coupons.$post(args, options))
    },
  })
}

export function usePostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.coupons.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEcommerceActivateMutationKey() {
  return ['ecommerce', '/ecommerce/activate', 'POST'] as const
}

export function getPostEcommerceActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.activate.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostEcommerceActivateMutationKey(),
    async mutationFn() {
      return parseResponse(client.ecommerce.activate.$post(undefined, options))
    },
  })
}

export function usePostEcommerceActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.activate.$post>>>
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
  const mutationDefaults = getPostEcommerceActivateMutationOptions<TError, TOnMutateResult>(
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

export function getEcommerceAttributionMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.attribution.metrics.$get>>,
) {
  return ['ecommerce', '/ecommerce/attribution/metrics', toValue(args)] as const
}

export function getEcommerceAttributionMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.attribution.metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEcommerceAttributionMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.attribution.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceAttributionMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ecommerce.attribution.metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>
              >
            >
          >,
          ReturnType<typeof getEcommerceAttributionMetricsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.attribution.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceAttributionMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEcommerceAttributionMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.attribution.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
    >
  >,
) {
  return [
    'ecommerce',
    '/ecommerce/attribution/metrics/:conversionSource/:conversionSourceId',
    toValue(args),
  ] as const
}

export function getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useEcommerceAttributionMetricsConversionSourceConversionSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
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
                    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
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
                    (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey
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
              (typeof client.ecommerce.attribution.metrics)[':conversionSource'][':conversionSourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEcommerceAttributionMetricsConversionSourceConversionSourceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.attribution.metrics[':conversionSource'][':conversionSourceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
    >
  >,
) {
  return [
    'ecommerce',
    '/ecommerce/attribution/products/:conversionSource/:conversionSourceId',
    toValue(args),
  ] as const
}

export function getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useEcommerceAttributionProductsConversionSourceConversionSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
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
                    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
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
                    (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey
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
              (typeof client.ecommerce.attribution.products)[':conversionSource'][':conversionSourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getEcommerceAttributionProductsConversionSourceConversionSourceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.attribution.products[':conversionSource'][':conversionSourceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getEcommerceConfigDisplayCurrencyQueryKey() {
  return ['ecommerce', '/ecommerce/config/displayCurrency'] as const
}

export function getEcommerceConfigDisplayCurrencyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEcommerceConfigDisplayCurrencyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ecommerce.config.displayCurrency.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEcommerceConfigDisplayCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>>
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
                Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
              >
            >
          >,
          ReturnType<typeof getEcommerceConfigDisplayCurrencyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEcommerceConfigDisplayCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEcommerceConfigDisplayCurrencyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ecommerce.config.displayCurrency.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEcommerceConfigDisplayCurrencyMutationKey() {
  return ['ecommerce', '/ecommerce/config/displayCurrency', 'POST'] as const
}

export function getPostEcommerceConfigDisplayCurrencyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.ecommerce.config.displayCurrency.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEcommerceConfigDisplayCurrencyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ecommerce.config.displayCurrency.$post>) {
      return parseResponse(client.ecommerce.config.displayCurrency.$post(args, options))
    },
  })
}

export function usePostEcommerceConfigDisplayCurrency<
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
                Awaited<ReturnType<typeof client.ecommerce.config.displayCurrency.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.ecommerce.config.displayCurrency.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEcommerceConfigDisplayCurrencyMutationOptions<
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

export function getOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
) {
  return ['orders', '/orders', toValue(args)] as const
}

export function getOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrders<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
          ReturnType<typeof getOrdersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostOrdersStatusMutationKey() {
  return ['orders', '/orders/status', 'POST'] as const
}

export function getPostOrdersStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.orders.status.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersStatusMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.status.$post>) {
      return parseResponse(client.orders.status.$post(args, options))
    },
  })
}

export function usePostOrdersStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.orders.status.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrdersStatusBatchMutationKey() {
  return ['orders', '/orders/status/batch', 'POST'] as const
}

export function getPostOrdersStatusBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.orders.status.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrdersStatusBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orders.status.batch.$post>) {
      return parseResponse(client.orders.status.batch.$post(args, options))
    },
  })
}

export function usePostOrdersStatusBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.orders.status.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.orders.status.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrdersStatusBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostPaymentsRequestsMutationKey() {
  return ['payments', '/payments/requests', 'POST'] as const
}

export function getPostPaymentsRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payments.requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payments.requests.$post>) {
      return parseResponse(client.payments.requests.$post(args, options))
    },
  })
}

export function usePostPaymentsRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payments.requests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payments.requests.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentsRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentsRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.requests)[':id']['$get']>>,
) {
  return ['payments', '/payments/requests/:id', toValue(args)] as const
}

export function getPaymentsRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.requests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments.requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentsRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.payments.requests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentsRequestsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments.requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments.requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePaymentsRequestsIdMutationKey() {
  return ['payments', '/payments/requests/:id', 'DELETE'] as const
}

export function getDeletePaymentsRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payments.requests)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payments.requests)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentsRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.payments.requests)[':id']['$delete']>) {
      return parseResponse(client.payments.requests[':id'].$delete(args, options))
    },
  })
}

export function useDeletePaymentsRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.payments.requests)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.payments.requests)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePaymentsRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  return ['products', '/products', toValue(args)] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductsMutationKey() {
  return ['products', '/products', 'POST'] as const
}

export function getPostProductsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.$post>) {
      return parseResponse(client.products.$post(args, options))
    },
  })
}

export function usePostProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.products.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostProductsBatchMutationKey() {
  return ['products', '/products/batch', 'POST'] as const
}

export function getPostProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.products.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.batch.$post>) {
      return parseResponse(client.products.batch.$post(args, options))
    },
  })
}

export function usePostProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.products.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.products.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
) {
  return ['products', '/products/:id', toValue(args)] as const
}

export function getProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProductsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostProductsIdAlertsTypeMutationKey() {
  return ['products', '/products/:id/alerts/:type', 'POST'] as const
}

export function getPostProductsIdAlertsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.products)[':id']['alerts'][':type']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsIdAlertsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']>,
    ) {
      return parseResponse(client.products[':id'].alerts[':type'].$post(args, options))
    },
  })
}

export function usePostProductsIdAlertsType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.products)[':id']['alerts'][':type']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.products)[':id']['alerts'][':type']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProductsIdAlertsTypeMutationOptions<TError, TOnMutateResult>(
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

export function getEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
) {
  return ['events', '/events', toValue(args)] as const
}

export function getEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEvents<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
          ReturnType<typeof getEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEventsMutationKey() {
  return ['events', '/events', 'POST'] as const
}

export function getPostEventsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.events.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.$post>) {
      return parseResponse(client.events.$post(args, options))
    },
  })
}

export function usePostEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.events.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEventsBatchMutationKey() {
  return ['events', '/events/batch', 'POST'] as const
}

export function getPostEventsBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.batch.$post>) {
      return parseResponse(client.events.batch.$post(args, options))
    },
  })
}

export function usePostEventsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.batch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.events.batch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInboundEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound.events.$get>>,
) {
  return ['inbound', '/inbound/events', toValue(args)] as const
}

export function getInboundEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboundEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.inbound.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
          >,
          ReturnType<typeof getInboundEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInboundEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboundEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboundEventsUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>>,
) {
  return ['inbound', '/inbound/events/:uuid', toValue(args)] as const
}

export function getInboundEventsUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundEventsUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound.events[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboundEventsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.inbound.events)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboundEventsUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound.events)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundEventsUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboundEventsUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound.events[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInboundAttachmentsDownloadTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>
  >,
) {
  return ['inbound', '/inbound/attachments/:downloadToken', toValue(args)] as const
}

export function getInboundAttachmentsDownloadTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInboundAttachmentsDownloadTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inbound.attachments[':downloadToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInboundAttachmentsDownloadToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.inbound.attachments)[':downloadToken']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInboundAttachmentsDownloadTokenQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.inbound.attachments)[':downloadToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInboundAttachmentsDownloadTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInboundAttachmentsDownloadTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.inbound.attachments[':downloadToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoyaltyBalanceProgramsPidActiveBalanceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/active-balance', toValue(args)] as const
}

export function getLoyaltyBalanceProgramsPidActiveBalanceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidActiveBalanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['active-balance'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidActiveBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
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
                    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidActiveBalanceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.loyalty.balance.programs)[':pid']['active-balance']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidActiveBalanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidActiveBalanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['active-balance'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
    >
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions', toValue(args)] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidBalanceDefinitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidBalanceDefinitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidBalanceDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'].$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidBalanceDefinitions<
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidBalanceDefinitionsMutationOptions<
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

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
    >
  >,
) {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid',
    toValue(args),
  ] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', 'PUT'] as const
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$put(args, options),
      )
    },
  })
}

export function usePutLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$put']
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
  const mutationDefaults = getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
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

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/balance-definitions/:bdid', 'DELETE'] as const
}

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdid<
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
                      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidMutationOptions<
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

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsMutationKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits',
    'POST',
  ] as const
}

export function getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimits<
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits']['$post']
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
    getPostLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsMutationOptions<
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

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
    >
  >,
) {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    toValue(args),
  ] as const
}

export function getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
          ':blid'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
            ':blid'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    'PUT',
  ] as const
}

export function getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
          ':blid'
        ].$put(args, options),
      )
    },
  })
}

export function usePutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
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
                    (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$put']
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
    getPutLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
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

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationKey() {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/balance-definitions/:bdid/limits/:blid',
    'DELETE',
  ] as const
}

export function getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['balance-definitions'][':bdid'].limits[
          ':blid'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlid<
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
                      (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['balance-definitions'][':bdid']['limits'][':blid']['$delete']
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
    getDeleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidMutationOptions<
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

export function getLoyaltyBalanceProgramsPidContactBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/contact-balances', toValue(args)] as const
}

export function getLoyaltyBalanceProgramsPidContactBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidContactBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['contact-balances'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidContactBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']>
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
                    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidContactBalancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.loyalty.balance.programs)[':pid']['contact-balances']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidContactBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidContactBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['contact-balances'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyBalanceProgramsPidCreateOrderMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/create-order', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidCreateOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidCreateOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['create-order'].$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidCreateOrder<
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
                    (typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['create-order']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidCreateOrderMutationOptions<
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

export function getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
    >
  >,
) {
  return [
    'loyalty',
    '/loyalty/balance/programs/:pid/subscriptions/:cid/balances',
    toValue(args),
  ] as const
}

export function getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidSubscriptionsCidBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/subscriptions/:cid/balances', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].subscriptions[':cid'].balances.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidSubscriptionsCidBalances<
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
                    (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['subscriptions'][':cid']['balances']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidSubscriptionsCidBalancesMutationOptions<
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

export function getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
    >
  >,
) {
  return ['loyalty', '/loyalty/balance/programs/:pid/transaction-history', toValue(args)] as const
}

export function getLoyaltyBalanceProgramsPidTransactionHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.balance.programs[':pid']['transaction-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyBalanceProgramsPidTransactionHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
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
                    (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.balance.programs)[':pid']['transaction-history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyBalanceProgramsPidTransactionHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.balance.programs[':pid']['transaction-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyBalanceProgramsPidTransactionsMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].transactions.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidTransactions<
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
                    (typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['transactions']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsMutationOptions<
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

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCancelMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions/:tid/cancel', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidTransactionsTidCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].transactions[':tid'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidTransactionsTidCancel<
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
                    (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['cancel']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsTidCancelMutationOptions<
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

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteMutationKey() {
  return ['loyalty', '/loyalty/balance/programs/:pid/transactions/:tid/complete', 'POST'] as const
}

export function getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.balance.programs[':pid'].transactions[':tid'].complete.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyBalanceProgramsPidTransactionsTidComplete<
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
                    (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.balance.programs)[':pid']['transactions'][':tid']['complete']['$post']
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
  const mutationDefaults = getPostLoyaltyBalanceProgramsPidTransactionsTidCompleteMutationOptions<
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

export function getLoyaltyConfigProgramsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loyalty.config.programs.$get>>,
) {
  return ['loyalty', '/loyalty/config/programs', toValue(args)] as const
}

export function getLoyaltyConfigProgramsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loyalty.config.programs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyConfigProgramsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.config.programs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyConfigPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.loyalty.config.programs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
            >
          >,
          ReturnType<typeof getLoyaltyConfigProgramsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyConfigProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyConfigProgramsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.config.programs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyConfigProgramsMutationKey() {
  return ['loyalty', '/loyalty/config/programs', 'POST'] as const
}

export function getPostLoyaltyConfigProgramsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.loyalty.config.programs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyConfigProgramsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.loyalty.config.programs.$post>) {
      return parseResponse(client.loyalty.config.programs.$post(args, options))
    },
  })
}

export function usePostLoyaltyConfigPrograms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.loyalty.config.programs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.loyalty.config.programs.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoyaltyConfigProgramsMutationOptions<TError, TOnMutateResult>(
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

export function getLoyaltyConfigProgramsPidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>>,
) {
  return ['loyalty', '/loyalty/config/programs/:pid', toValue(args)] as const
}

export function getLoyaltyConfigProgramsPidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyConfigProgramsPidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.config.programs[':pid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyConfigProgramsPid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoyaltyConfigProgramsPidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyConfigProgramsPidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyConfigProgramsPidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.config.programs[':pid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoyaltyConfigProgramsPidMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'PUT'] as const
}

export function getPutLoyaltyConfigProgramsPidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoyaltyConfigProgramsPidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']>,
    ) {
      return parseResponse(client.loyalty.config.programs[':pid'].$put(args, options))
    },
  })
}

export function usePutLoyaltyConfigProgramsPid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLoyaltyConfigProgramsPidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLoyaltyConfigProgramsPidMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'DELETE'] as const
}

export function getDeleteLoyaltyConfigProgramsPidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyConfigProgramsPidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']>,
    ) {
      return parseResponse(client.loyalty.config.programs[':pid'].$delete(args, options))
    },
  })
}

export function useDeleteLoyaltyConfigProgramsPid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLoyaltyConfigProgramsPidMutationOptions<
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

export function getPatchLoyaltyConfigProgramsPidMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid', 'PATCH'] as const
}

export function getPatchLoyaltyConfigProgramsPidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLoyaltyConfigProgramsPidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']>,
    ) {
      return parseResponse(client.loyalty.config.programs[':pid'].$patch(args, options))
    },
  })
}

export function usePatchLoyaltyConfigProgramsPid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.config.programs)[':pid']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchLoyaltyConfigProgramsPidMutationOptions<TError, TOnMutateResult>(
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

export function getLoyaltyConfigProgramsPidAccountInfoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/config/programs/:pid/account-info', toValue(args)] as const
}

export function getLoyaltyConfigProgramsPidAccountInfoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyConfigProgramsPidAccountInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.config.programs[':pid']['account-info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyConfigProgramsPidAccountInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
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
                    (typeof client.loyalty.config.programs)[':pid']['account-info']['$get']
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
                    (typeof client.loyalty.config.programs)[':pid']['account-info']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyConfigProgramsPidAccountInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.loyalty.config.programs)[':pid']['account-info']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyConfigProgramsPidAccountInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyConfigProgramsPidAccountInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.config.programs[':pid']['account-info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLoyaltyConfigProgramsPidContactCidMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/contact/:cid', 'DELETE'] as const
}

export function getDeleteLoyaltyConfigProgramsPidContactCidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyConfigProgramsPidContactCidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.config.programs[':pid'].contact[':cid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyConfigProgramsPidContactCid<
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
                      (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.config.programs)[':pid']['contact'][':cid']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyConfigProgramsPidContactCidMutationOptions<
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

export function getPostLoyaltyConfigProgramsPidPublishMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/publish', 'POST'] as const
}

export function getPostLoyaltyConfigProgramsPidPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyConfigProgramsPidPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>,
    ) {
      return parseResponse(client.loyalty.config.programs[':pid'].publish.$post(args, options))
    },
  })
}

export function usePostLoyaltyConfigProgramsPidPublish<
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
                  ReturnType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.config.programs)[':pid']['publish']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoyaltyConfigProgramsPidPublishMutationOptions<
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

export function getPostLoyaltyConfigProgramsPidSubscriptionMembersMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscription-members', 'POST'] as const
}

export function getPostLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyConfigProgramsPidSubscriptionMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.config.programs[':pid']['subscription-members'].$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyConfigProgramsPidSubscriptionMembers<
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
                    (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$post']
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
  const mutationDefaults = getPostLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
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

export function getDeleteLoyaltyConfigProgramsPidSubscriptionMembersMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscription-members', 'DELETE'] as const
}

export function getDeleteLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyConfigProgramsPidSubscriptionMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.config.programs[':pid']['subscription-members'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyConfigProgramsPidSubscriptionMembers<
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
                      (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.config.programs)[':pid']['subscription-members']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyConfigProgramsPidSubscriptionMembersMutationOptions<
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

export function getPostLoyaltyConfigProgramsPidSubscriptionsMutationKey() {
  return ['loyalty', '/loyalty/config/programs/:pid/subscriptions', 'POST'] as const
}

export function getPostLoyaltyConfigProgramsPidSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyConfigProgramsPidSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.config.programs[':pid'].subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyConfigProgramsPidSubscriptions<
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
                    (typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.config.programs)[':pid']['subscriptions']['$post']
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
  const mutationDefaults = getPostLoyaltyConfigProgramsPidSubscriptionsMutationOptions<
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

export function getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
    >
  >,
) {
  return [
    'loyalty',
    '/loyalty/offer/programs/:pid/code-pools/:cpid/codes-count',
    toValue(args),
  ] as const
}

export function getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useLoyaltyOfferProgramsPidCodePoolsCpidCodesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
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
                    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
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
                    (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.loyalty.offer.programs)[':pid']['code-pools'][':cpid']['codes-count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyOfferProgramsPidCodePoolsCpidCodesCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.offer.programs[':pid']['code-pools'][':cpid']['codes-count'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getLoyaltyOfferProgramsPidOffersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/offers', toValue(args)] as const
}

export function getLoyaltyOfferProgramsPidOffersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyOfferProgramsPidOffersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].offers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyOfferProgramsPidOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyOfferProgramsPidOffersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyOfferProgramsPidOffersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyOfferProgramsPidOffersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.offer.programs[':pid'].offers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyOfferProgramsPidOffersMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/offers', 'POST'] as const
}

export function getPostLoyaltyOfferProgramsPidOffersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyOfferProgramsPidOffersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>,
    ) {
      return parseResponse(client.loyalty.offer.programs[':pid'].offers.$post(args, options))
    },
  })
}

export function usePostLoyaltyOfferProgramsPidOffers<
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
                  ReturnType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['offers']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoyaltyOfferProgramsPidOffersMutationOptions<
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

export function getPostLoyaltyOfferProgramsPidRewardsAttributeMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/attribute', 'POST'] as const
}

export function getPostLoyaltyOfferProgramsPidRewardsAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyOfferProgramsPidRewardsAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards.attribute.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyOfferProgramsPidRewardsAttribute<
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['attribute']['$post']
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
  const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsAttributeMutationOptions<
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

export function getPostLoyaltyOfferProgramsPidRewardsRedeemMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/redeem', 'POST'] as const
}

export function getPostLoyaltyOfferProgramsPidRewardsRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyOfferProgramsPidRewardsRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards.redeem.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyOfferProgramsPidRewardsRedeem<
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem']['$post']
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
  const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsRedeemMutationOptions<
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

export function getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/redeem/:tid/complete', 'POST'] as const
}

export function getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards.redeem[':tid'].complete.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyOfferProgramsPidRewardsRedeemTidComplete<
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['redeem'][':tid']['complete']['$post']
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
  const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsRedeemTidCompleteMutationOptions<
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

export function getDeleteLoyaltyOfferProgramsPidRewardsRevokeMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/revoke', 'DELETE'] as const
}

export function getDeleteLoyaltyOfferProgramsPidRewardsRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyOfferProgramsPidRewardsRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards.revoke.$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyOfferProgramsPidRewardsRevoke<
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
                      (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['revoke']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyOfferProgramsPidRewardsRevokeMutationOptions<
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

export function getPostLoyaltyOfferProgramsPidRewardsValidateMutationKey() {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/validate', 'POST'] as const
}

export function getPostLoyaltyOfferProgramsPidRewardsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyOfferProgramsPidRewardsValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards.validate.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyOfferProgramsPidRewardsValidate<
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.offer.programs)[':pid']['rewards']['validate']['$post']
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
  const mutationDefaults = getPostLoyaltyOfferProgramsPidRewardsValidateMutationOptions<
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

export function getLoyaltyOfferProgramsPidRewardsRidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/rewards/:rid', toValue(args)] as const
}

export function getLoyaltyOfferProgramsPidRewardsRidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyOfferProgramsPidRewardsRidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyOfferProgramsPidRewardsRid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']
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
                    (typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyOfferProgramsPidRewardsRidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.loyalty.offer.programs)[':pid']['rewards'][':rid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyOfferProgramsPidRewardsRidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyOfferProgramsPidRewardsRidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.offer.programs[':pid'].rewards[':rid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoyaltyOfferProgramsPidVouchersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/offer/programs/:pid/vouchers', toValue(args)] as const
}

export function getLoyaltyOfferProgramsPidVouchersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyOfferProgramsPidVouchersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.offer.programs[':pid'].vouchers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyOfferProgramsPidVouchers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyOfferProgramsPidVouchersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.offer.programs)[':pid']['vouchers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyOfferProgramsPidVouchersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyOfferProgramsPidVouchersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.offer.programs[':pid'].vouchers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyTierProgramsPidContactsCidTiersTidMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/contacts/:cid/tiers/:tid', 'POST'] as const
}

export function getPostLoyaltyTierProgramsPidContactsCidTiersTidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyTierProgramsPidContactsCidTiersTidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.tier.programs[':pid'].contacts[':cid'].tiers[':tid'].$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyTierProgramsPidContactsCidTiersTid<
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
                    (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.tier.programs)[':pid']['contacts'][':cid']['tiers'][':tid']['$post']
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
  const mutationDefaults = getPostLoyaltyTierProgramsPidContactsCidTiersTidMutationOptions<
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

export function getLoyaltyTierProgramsPidTierGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups', toValue(args)] as const
}

export function getLoyaltyTierProgramsPidTierGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyTierProgramsPidTierGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyTierProgramsPidTierGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyTierProgramsPidTierGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLoyaltyTierProgramsPidTierGroupsMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups', 'POST'] as const
}

export function getPostLoyaltyTierProgramsPidTierGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyTierProgramsPidTierGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>,
    ) {
      return parseResponse(client.loyalty.tier.programs[':pid']['tier-groups'].$post(args, options))
    },
  })
}

export function usePostLoyaltyTierProgramsPidTierGroups<
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
                  ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoyaltyTierProgramsPidTierGroupsMutationOptions<
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

export function getLoyaltyTierProgramsPidTierGroupsGidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', toValue(args)] as const
}

export function getLoyaltyTierProgramsPidTierGroupsGidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyTierProgramsPidTierGroupsGidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyTierProgramsPidTierGroupsGid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']>
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
                    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
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
                    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsGidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyTierProgramsPidTierGroupsGidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyTierProgramsPidTierGroupsGidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoyaltyTierProgramsPidTierGroupsGidMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', 'PUT'] as const
}

export function getPutLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoyaltyTierProgramsPidTierGroupsGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']
      >,
    ) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$put(args, options),
      )
    },
  })
}

export function usePutLoyaltyTierProgramsPidTierGroupsGid<
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
                    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$put']
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
  const mutationDefaults = getPutLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
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

export function getDeleteLoyaltyTierProgramsPidTierGroupsGidMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid', 'DELETE'] as const
}

export function getDeleteLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyTierProgramsPidTierGroupsGidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyTierProgramsPidTierGroupsGid<
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
                      (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyTierProgramsPidTierGroupsGidMutationOptions<
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

export function getPostLoyaltyTierProgramsPidTierGroupsGidTiersMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tier-groups/:gid/tiers', 'POST'] as const
}

export function getPostLoyaltyTierProgramsPidTierGroupsGidTiersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoyaltyTierProgramsPidTierGroupsGidTiersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
      >,
    ) {
      return parseResponse(
        client.loyalty.tier.programs[':pid']['tier-groups'][':gid'].tiers.$post(args, options),
      )
    },
  })
}

export function usePostLoyaltyTierProgramsPidTierGroupsGidTiers<
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
                    (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.loyalty.tier.programs)[':pid']['tier-groups'][':gid']['tiers']['$post']
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
  const mutationDefaults = getPostLoyaltyTierProgramsPidTierGroupsGidTiersMutationOptions<
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

export function getLoyaltyTierProgramsPidTiersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>
  >,
) {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers', toValue(args)] as const
}

export function getLoyaltyTierProgramsPidTiersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoyaltyTierProgramsPidTiersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.loyalty.tier.programs[':pid'].tiers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoyaltyTierProgramsPidTiers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoyaltyTierProgramsPidTiersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoyaltyTierProgramsPidTiersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoyaltyTierProgramsPidTiersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.loyalty.tier.programs[':pid'].tiers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutLoyaltyTierProgramsPidTiersTidMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers/:tid', 'PUT'] as const
}

export function getPutLoyaltyTierProgramsPidTiersTidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoyaltyTierProgramsPidTiersTidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']
      >,
    ) {
      return parseResponse(client.loyalty.tier.programs[':pid'].tiers[':tid'].$put(args, options))
    },
  })
}

export function usePutLoyaltyTierProgramsPidTiersTid<
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
                  ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLoyaltyTierProgramsPidTiersTidMutationOptions<
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

export function getDeleteLoyaltyTierProgramsPidTiersTidMutationKey() {
  return ['loyalty', '/loyalty/tier/programs/:pid/tiers/:tid', 'DELETE'] as const
}

export function getDeleteLoyaltyTierProgramsPidTiersTidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoyaltyTierProgramsPidTiersTidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']
      >,
    ) {
      return parseResponse(
        client.loyalty.tier.programs[':pid'].tiers[':tid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLoyaltyTierProgramsPidTiersTid<
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
                      (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.loyalty.tier.programs)[':pid']['tiers'][':tid']['$delete']
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
  const mutationDefaults = getDeleteLoyaltyTierProgramsPidTiersTidMutationOptions<
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

export function getWalletPassesPassIdInstallUrlContactIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']>
  >,
) {
  return ['wallet', '/wallet/passes/:passId/installUrl/:contactId', toValue(args)] as const
}

export function getWalletPassesPassIdInstallUrlContactIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWalletPassesPassIdInstallUrlContactIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.wallet.passes[':passId'].installUrl[':contactId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWalletPassesPassIdInstallUrlContactId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']>
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
                    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
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
                    (typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWalletPassesPassIdInstallUrlContactIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
            ReturnType<(typeof client.wallet.passes)[':passId']['installUrl'][':contactId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWalletPassesPassIdInstallUrlContactIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWalletPassesPassIdInstallUrlContactIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.wallet.passes[':passId'].installUrl[':contactId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWalletPassesInstallationIdRedeemMutationKey() {
  return ['wallet', '/wallet/passes/:installationId/redeem', 'POST'] as const
}

export function getPostWalletPassesInstallationIdRedeemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWalletPassesInstallationIdRedeemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>,
    ) {
      return parseResponse(client.wallet.passes[':installationId'].redeem.$post(args, options))
    },
  })
}

export function usePostWalletPassesInstallationIdRedeem<
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
                  ReturnType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.wallet.passes)[':installationId']['redeem']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWalletPassesInstallationIdRedeemMutationOptions<
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

export function getEmailCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emailCampaigns.$get>>,
) {
  return ['emailCampaigns', '/emailCampaigns', toValue(args)] as const
}

export function getEmailCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emailCampaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emailCampaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.emailCampaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
          >,
          ReturnType<typeof getEmailCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emailCampaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmailCampaignsMutationKey() {
  return ['emailCampaigns', '/emailCampaigns', 'POST'] as const
}

export function getPostEmailCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.emailCampaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emailCampaigns.$post>) {
      return parseResponse(client.emailCampaigns.$post(args, options))
    },
  })
}

export function usePostEmailCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.emailCampaigns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsMutationOptions<TError, TOnMutateResult>(
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

export function getPostEmailCampaignsImagesMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/images', 'POST'] as const
}

export function getPostEmailCampaignsImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.images.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.emailCampaigns.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.emailCampaigns.images.$post>) {
      return parseResponse(client.emailCampaigns.images.$post(args, options))
    },
  })
}

export function usePostEmailCampaignsImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.emailCampaigns.images.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.emailCampaigns.images.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsImagesMutationOptions<TError, TOnMutateResult>(
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

export function getEmailCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>>,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', toValue(args)] as const
}

export function getEmailCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEmailCampaignsCampaignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emailCampaigns[':campaignId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmailCampaignsCampaignIdMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', 'PUT'] as const
}

export function getPutEmailCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].$put(args, options))
    },
  })
}

export function usePutEmailCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteEmailCampaignsCampaignIdMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId', 'DELETE'] as const
}

export function getDeleteEmailCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmailCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].$delete(args, options))
    },
  })
}

export function useDeleteEmailCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEmailCampaignsCampaignIdMutationOptions<
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

export function getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']>
  >,
) {
  return [
    'emailCampaigns',
    '/emailCampaigns/:campaignId/abTestCampaignResult',
    toValue(args),
  ] as const
}

export function getEmailCampaignsCampaignIdAbTestCampaignResultQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailCampaignsCampaignIdAbTestCampaignResult<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']>
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
                    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
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
                    (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
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
              (typeof client.emailCampaigns)[':campaignId']['abTestCampaignResult']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailCampaignsCampaignIdAbTestCampaignResultQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emailCampaigns[':campaignId'].abTestCampaignResult.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEmailCampaignsCampaignIdExportRecipientsMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/exportRecipients', 'POST'] as const
}

export function getPostEmailCampaignsCampaignIdExportRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsCampaignIdExportRecipientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']
      >,
    ) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].exportRecipients.$post(args, options),
      )
    },
  })
}

export function usePostEmailCampaignsCampaignIdExportRecipients<
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
                    (typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.emailCampaigns)[':campaignId']['exportRecipients']['$post']
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
  const mutationDefaults = getPostEmailCampaignsCampaignIdExportRecipientsMutationOptions<
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

export function getPostEmailCampaignsCampaignIdSendNowMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendNow', 'POST'] as const
}

export function getPostEmailCampaignsCampaignIdSendNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsCampaignIdSendNowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].sendNow.$post(args, options))
    },
  })
}

export function usePostEmailCampaignsCampaignIdSendNow<
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
                    ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendNow']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsCampaignIdSendNowMutationOptions<
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

export function getPostEmailCampaignsCampaignIdSendReportMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendReport', 'POST'] as const
}

export function getPostEmailCampaignsCampaignIdSendReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsCampaignIdSendReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].sendReport.$post(args, options))
    },
  })
}

export function usePostEmailCampaignsCampaignIdSendReport<
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
                    ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsCampaignIdSendReportMutationOptions<
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

export function getPostEmailCampaignsCampaignIdSendTestMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sendTest', 'POST'] as const
}

export function getPostEmailCampaignsCampaignIdSendTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmailCampaignsCampaignIdSendTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].sendTest.$post(args, options))
    },
  })
}

export function usePostEmailCampaignsCampaignIdSendTest<
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
                    ReturnType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sendTest']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEmailCampaignsCampaignIdSendTestMutationOptions<
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

export function getEmailCampaignsCampaignIdSharedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>
  >,
) {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/sharedUrl', toValue(args)] as const
}

export function getEmailCampaignsCampaignIdSharedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailCampaignsCampaignIdSharedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.emailCampaigns[':campaignId'].sharedUrl.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailCampaignsCampaignIdSharedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEmailCampaignsCampaignIdSharedUrlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['sharedUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmailCampaignsCampaignIdSharedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailCampaignsCampaignIdSharedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.emailCampaigns[':campaignId'].sharedUrl.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutEmailCampaignsCampaignIdStatusMutationKey() {
  return ['emailCampaigns', '/emailCampaigns/:campaignId/status', 'PUT'] as const
}

export function getPutEmailCampaignsCampaignIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmailCampaignsCampaignIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>,
    ) {
      return parseResponse(client.emailCampaigns[':campaignId'].status.$put(args, options))
    },
  })
}

export function usePutEmailCampaignsCampaignIdStatus<
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
                    ReturnType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.emailCampaigns)[':campaignId']['status']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutEmailCampaignsCampaignIdStatusMutationOptions<
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

export function getSmsCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smsCampaigns.$get>>,
) {
  return ['smsCampaigns', '/smsCampaigns', toValue(args)] as const
}

export function getSmsCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smsCampaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smsCampaigns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSmsCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smsCampaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>
          >,
          ReturnType<typeof getSmsCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smsCampaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSmsCampaignsMutationKey() {
  return ['smsCampaigns', '/smsCampaigns', 'POST'] as const
}

export function getPostSmsCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.smsCampaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smsCampaigns.$post>) {
      return parseResponse(client.smsCampaigns.$post(args, options))
    },
  })
}

export function usePostSmsCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsCampaigns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.smsCampaigns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsMutationOptions<TError, TOnMutateResult>(
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

export function getSmsCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>>,
) {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', toValue(args)] as const
}

export function getSmsCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmsCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smsCampaigns[':campaignId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmsCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmsCampaignsCampaignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmsCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmsCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smsCampaigns[':campaignId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSmsCampaignsCampaignIdMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', 'PUT'] as const
}

export function getPutSmsCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsCampaignsCampaignIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']>) {
      return parseResponse(client.smsCampaigns[':campaignId'].$put(args, options))
    },
  })
}

export function usePutSmsCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSmsCampaignsCampaignIdMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId', 'DELETE'] as const
}

export function getDeleteSmsCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmsCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']>,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].$delete(args, options))
    },
  })
}

export function useDeleteSmsCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmsCampaignsCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSmsCampaignsCampaignIdExportRecipientsMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/exportRecipients', 'POST'] as const
}

export function getPostSmsCampaignsCampaignIdExportRecipientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsCampaignIdExportRecipientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']
      >,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].exportRecipients.$post(args, options))
    },
  })
}

export function usePostSmsCampaignsCampaignIdExportRecipients<
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
                    (typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.smsCampaigns)[':campaignId']['exportRecipients']['$post']
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
  const mutationDefaults = getPostSmsCampaignsCampaignIdExportRecipientsMutationOptions<
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

export function getPostSmsCampaignsCampaignIdSendNowMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendNow', 'POST'] as const
}

export function getPostSmsCampaignsCampaignIdSendNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsCampaignIdSendNowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].sendNow.$post(args, options))
    },
  })
}

export function usePostSmsCampaignsCampaignIdSendNow<
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
                    ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendNow']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsCampaignIdSendNowMutationOptions<
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

export function getPostSmsCampaignsCampaignIdSendReportMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendReport', 'POST'] as const
}

export function getPostSmsCampaignsCampaignIdSendReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsCampaignIdSendReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].sendReport.$post(args, options))
    },
  })
}

export function usePostSmsCampaignsCampaignIdSendReport<
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
                    ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendReport']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsCampaignIdSendReportMutationOptions<
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

export function getPostSmsCampaignsCampaignIdSendTestMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/sendTest', 'POST'] as const
}

export function getPostSmsCampaignsCampaignIdSendTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsCampaignsCampaignIdSendTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].sendTest.$post(args, options))
    },
  })
}

export function usePostSmsCampaignsCampaignIdSendTest<
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
                    ReturnType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['sendTest']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmsCampaignsCampaignIdSendTestMutationOptions<
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

export function getPutSmsCampaignsCampaignIdStatusMutationKey() {
  return ['smsCampaigns', '/smsCampaigns/:campaignId/status', 'PUT'] as const
}

export function getPutSmsCampaignsCampaignIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmsCampaignsCampaignIdStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>,
    ) {
      return parseResponse(client.smsCampaigns[':campaignId'].status.$put(args, options))
    },
  })
}

export function usePutSmsCampaignsCampaignIdStatus<
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
                  Awaited<ReturnType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smsCampaigns)[':campaignId']['status']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmsCampaignsCampaignIdStatusMutationOptions<
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

export function getWhatsappCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsappCampaigns.$get>>,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns', toValue(args)] as const
}

export function getWhatsappCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsappCampaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhatsappCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsappCampaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsappCampaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>
            >
          >,
          ReturnType<typeof getWhatsappCampaignsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhatsappCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsappCampaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhatsappCampaignsMutationKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns', 'POST'] as const
}

export function getPostWhatsappCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.whatsappCampaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsappCampaigns.$post>) {
      return parseResponse(client.whatsappCampaigns.$post(args, options))
    },
  })
}

export function usePostWhatsappCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whatsappCampaigns.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappCampaignsMutationOptions<TError, TOnMutateResult>(
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

export function getWhatsappCampaignsConfigQueryKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/config'] as const
}

export function getWhatsappCampaignsConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getWhatsappCampaignsConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsappCampaigns.config.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappCampaignsConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
            >
          >,
          ReturnType<typeof getWhatsappCampaignsConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getWhatsappCampaignsConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsappCampaigns.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhatsappCampaignsTemplateMutationKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/template', 'POST'] as const
}

export function getPostWhatsappCampaignsTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsappCampaigns.template.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.whatsappCampaigns.template.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappCampaignsTemplateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsappCampaigns.template.$post>) {
      return parseResponse(client.whatsappCampaigns.template.$post(args, options))
    },
  })
}

export function usePostWhatsappCampaignsTemplate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whatsappCampaigns.template.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.whatsappCampaigns.template.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappCampaignsTemplateMutationOptions<TError, TOnMutateResult>(
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

export function getWhatsappCampaignsTemplateListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>
  >,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/template-list', toValue(args)] as const
}

export function getWhatsappCampaignsTemplateListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhatsappCampaignsTemplateListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsappCampaigns['template-list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappCampaignsTemplateList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)['template-list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhatsappCampaignsTemplateListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsappCampaigns)['template-list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsTemplateListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhatsappCampaignsTemplateListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsappCampaigns['template-list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhatsappCampaignsTemplateApprovalTemplateIdMutationKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/template/approval/:templateId', 'POST'] as const
}

export function getPostWhatsappCampaignsTemplateApprovalTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappCampaignsTemplateApprovalTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']
      >,
    ) {
      return parseResponse(
        client.whatsappCampaigns.template.approval[':templateId'].$post(args, options),
      )
    },
  })
}

export function usePostWhatsappCampaignsTemplateApprovalTemplateId<
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
                    (typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.whatsappCampaigns.template.approval)[':templateId']['$post']
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
  const mutationDefaults = getPostWhatsappCampaignsTemplateApprovalTemplateIdMutationOptions<
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

export function getWhatsappCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>
  >,
) {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', toValue(args)] as const
}

export function getWhatsappCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhatsappCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsappCampaigns[':campaignId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWhatsappCampaignsCampaignIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhatsappCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsappCampaigns[':campaignId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutWhatsappCampaignsCampaignIdMutationKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', 'PUT'] as const
}

export function getPutWhatsappCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWhatsappCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>,
    ) {
      return parseResponse(client.whatsappCampaigns[':campaignId'].$put(args, options))
    },
  })
}

export function usePutWhatsappCampaignsCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWhatsappCampaignsCampaignIdMutationOptions<
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

export function getDeleteWhatsappCampaignsCampaignIdMutationKey() {
  return ['whatsappCampaigns', '/whatsappCampaigns/:campaignId', 'DELETE'] as const
}

export function getDeleteWhatsappCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWhatsappCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>,
    ) {
      return parseResponse(client.whatsappCampaigns[':campaignId'].$delete(args, options))
    },
  })
}

export function useDeleteWhatsappCampaignsCampaignId<
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
                  Awaited<ReturnType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.whatsappCampaigns)[':campaignId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWhatsappCampaignsCampaignIdMutationOptions<
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

export function getCompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
) {
  return ['companies', '/companies', toValue(args)] as const
}

export function getCompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
          >,
          ReturnType<typeof getCompaniesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompaniesMutationKey() {
  return ['companies', '/companies', 'POST'] as const
}

export function getPostCompaniesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>>,
    TError,
    InferRequestType<typeof client.companies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.companies.$post>) {
      return parseResponse(client.companies.$post(args, options))
    },
  })
}

export function usePostCompanies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.companies.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCompaniesImportMutationKey() {
  return ['companies', '/companies/import', 'POST'] as const
}

export function getPostCompaniesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.companies.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.companies.import.$post>) {
      return parseResponse(client.companies.import.$post(args, options))
    },
  })
}

export function usePostCompaniesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.companies.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.companies.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesImportMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCompaniesLinkUnlinkIdMutationKey() {
  return ['companies', '/companies/link-unlink/:id', 'PATCH'] as const
}

export function getPatchCompaniesLinkUnlinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.companies)['link-unlink'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesLinkUnlinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']>,
    ) {
      return parseResponse(client.companies['link-unlink'][':id'].$patch(args, options))
    },
  })
}

export function usePatchCompaniesLinkUnlinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.companies)['link-unlink'][':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.companies)['link-unlink'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesLinkUnlinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getCompaniesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':id']['$get']>>,
) {
  return ['companies', '/companies/:id', toValue(args)] as const
}

export function getCompaniesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCompaniesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.companies[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCompaniesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.companies)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCompaniesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCompaniesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.companies[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCompaniesIdMutationKey() {
  return ['companies', '/companies/:id', 'DELETE'] as const
}

export function getDeleteCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.companies)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.companies)[':id']['$delete']>) {
      return parseResponse(client.companies[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.companies)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.companies)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCompaniesIdMutationKey() {
  return ['companies', '/companies/:id', 'PATCH'] as const
}

export function getPatchCompaniesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.companies)[':id']['$patch']>) {
      return parseResponse(client.companies[':id'].$patch(args, options))
    },
  })
}

export function usePatchCompaniesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.companies)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostCrmAttributesMutationKey() {
  return ['crm', '/crm/attributes', 'POST'] as const
}

export function getPostCrmAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.attributes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmAttributesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.attributes.$post>) {
      return parseResponse(client.crm.attributes.$post(args, options))
    },
  })
}

export function usePostCrmAttributes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crm.attributes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmAttributesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCrmAttributesIdMutationKey() {
  return ['crm', '/crm/attributes/:id', 'DELETE'] as const
}

export function getDeleteCrmAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.attributes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmAttributesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.attributes)[':id']['$delete']>) {
      return parseResponse(client.crm.attributes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.attributes)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmAttributesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmAttributesIdMutationKey() {
  return ['crm', '/crm/attributes/:id', 'PATCH'] as const
}

export function getPatchCrmAttributesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.attributes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmAttributesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.attributes)[':id']['$patch']>) {
      return parseResponse(client.crm.attributes[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmAttributesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.attributes)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.attributes)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmAttributesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmAttributesCompaniesQueryKey() {
  return ['crm', '/crm/attributes/companies'] as const
}

export function getCrmAttributesCompaniesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmAttributesCompaniesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.attributes.companies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmAttributesCompanies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
            >
          >,
          ReturnType<typeof getCrmAttributesCompaniesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.companies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAttributesCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmAttributesCompaniesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.attributes.companies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmAttributesDealsQueryKey() {
  return ['crm', '/crm/attributes/deals'] as const
}

export function getCrmAttributesDealsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmAttributesDealsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.attributes.deals.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmAttributesDeals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>
            >
          >,
          ReturnType<typeof getCrmAttributesDealsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.attributes.deals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmAttributesDealsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmAttributesDealsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.attributes.deals.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmDealsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.deals.$get>>,
) {
  return ['crm', '/crm/deals', toValue(args)] as const
}

export function getCrmDealsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.deals.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmDealsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.deals.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmDeals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.deals.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>
          >,
          ReturnType<typeof getCrmDealsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmDealsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmDealsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.deals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmDealsMutationKey() {
  return ['crm', '/crm/deals', 'POST'] as const
}

export function getPostCrmDealsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.deals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmDealsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.deals.$post>) {
      return parseResponse(client.crm.deals.$post(args, options))
    },
  })
}

export function usePostCrmDeals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.deals.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmDealsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCrmDealsImportMutationKey() {
  return ['crm', '/crm/deals/import', 'POST'] as const
}

export function getPostCrmDealsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.crm.deals.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmDealsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.deals.import.$post>) {
      return parseResponse(client.crm.deals.import.$post(args, options))
    },
  })
}

export function usePostCrmDealsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.deals.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.crm.deals.import.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmDealsImportMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmDealsLinkUnlinkIdMutationKey() {
  return ['crm', '/crm/deals/link-unlink/:id', 'PATCH'] as const
}

export function getPatchCrmDealsLinkUnlinkIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmDealsLinkUnlinkIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>,
    ) {
      return parseResponse(client.crm.deals['link-unlink'][':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmDealsLinkUnlinkId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.deals)['link-unlink'][':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmDealsLinkUnlinkIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmDealsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.deals)[':id']['$get']>>,
) {
  return ['crm', '/crm/deals/:id', toValue(args)] as const
}

export function getCrmDealsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.deals)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmDealsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.deals[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmDealsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.deals)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmDealsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmDealsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmDealsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.deals[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmDealsIdMutationKey() {
  return ['crm', '/crm/deals/:id', 'DELETE'] as const
}

export function getDeleteCrmDealsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.deals)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmDealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.deals)[':id']['$delete']>) {
      return parseResponse(client.crm.deals[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmDealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.deals)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.deals)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmDealsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmDealsIdMutationKey() {
  return ['crm', '/crm/deals/:id', 'PATCH'] as const
}

export function getPatchCrmDealsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.deals)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.deals)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmDealsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.deals)[':id']['$patch']>) {
      return parseResponse(client.crm.deals[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmDealsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.deals)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.deals)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmDealsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.files.$get>>,
) {
  return ['crm', '/crm/files', toValue(args)] as const
}

export function getCrmFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmFiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>
          >,
          ReturnType<typeof getCrmFilesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmFilesMutationKey() {
  return ['crm', '/crm/files', 'POST'] as const
}

export function getPostCrmFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.files.$post>) {
      return parseResponse(client.crm.files.$post(args, options))
    },
  })
}

export function usePostCrmFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.files.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.files.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmFilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['$get']>>,
) {
  return ['crm', '/crm/files/:id', toValue(args)] as const
}

export function getCrmFilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmFilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.files[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmFilesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmFilesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmFilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmFilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.files[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmFilesIdMutationKey() {
  return ['crm', '/crm/files/:id', 'DELETE'] as const
}

export function getDeleteCrmFilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.files)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.files)[':id']['$delete']>) {
      return parseResponse(client.crm.files[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.files)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.files)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmFilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCrmFilesIdDataQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>>,
) {
  return ['crm', '/crm/files/:id/data', toValue(args)] as const
}

export function getCrmFilesIdDataQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmFilesIdDataQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.files[':id'].data.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmFilesIdData<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.files)[':id']['data']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmFilesIdDataQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.files)[':id']['data']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmFilesIdDataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmFilesIdDataQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.files[':id'].data.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmNotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
) {
  return ['crm', '/crm/notes', toValue(args)] as const
}

export function getCrmNotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.notes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmNotes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.notes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>
          >,
          ReturnType<typeof getCrmNotesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmNotesMutationKey() {
  return ['crm', '/crm/notes', 'POST'] as const
}

export function getPostCrmNotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.notes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmNotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.notes.$post>) {
      return parseResponse(client.crm.notes.$post(args, options))
    },
  })
}

export function usePostCrmNotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.notes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.notes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmNotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmNotesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
) {
  return ['crm', '/crm/notes/:id', toValue(args)] as const
}

export function getCrmNotesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmNotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.notes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmNotesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.notes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmNotesIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmNotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmNotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.notes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmNotesIdMutationKey() {
  return ['crm', '/crm/notes/:id', 'DELETE'] as const
}

export function getDeleteCrmNotesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.notes)[':id']['$delete']>) {
      return parseResponse(client.crm.notes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.notes)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.notes)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmNotesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmNotesIdMutationKey() {
  return ['crm', '/crm/notes/:id', 'PATCH'] as const
}

export function getPatchCrmNotesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmNotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.notes)[':id']['$patch']>) {
      return parseResponse(client.crm.notes[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmNotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.notes)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.notes)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmNotesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmPipelineDetailsQueryKey() {
  return ['crm', '/crm/pipeline/details'] as const
}

export function getCrmPipelineDetailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmPipelineDetailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.pipeline.details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmPipelineDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>
            >
          >,
          ReturnType<typeof getCrmPipelineDetailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelineDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmPipelineDetailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.pipeline.details.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmPipelineDetailsAllQueryKey() {
  return ['crm', '/crm/pipeline/details/all'] as const
}

export function getCrmPipelineDetailsAllQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmPipelineDetailsAllQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.pipeline.details.all.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmPipelineDetailsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
            >
          >,
          ReturnType<typeof getCrmPipelineDetailsAllQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.crm.pipeline.details.all.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelineDetailsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmPipelineDetailsAllQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.pipeline.details.all.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmPipelineDetailsPipelineIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>
  >,
) {
  return ['crm', '/crm/pipeline/details/:pipelineID', toValue(args)] as const
}

export function getCrmPipelineDetailsPipelineIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmPipelineDetailsPipelineIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.pipeline.details[':pipelineID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmPipelineDetailsPipelineID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCrmPipelineDetailsPipelineIDQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.pipeline.details)[':pipelineID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmPipelineDetailsPipelineIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmPipelineDetailsPipelineIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.pipeline.details[':pipelineID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.tasks.$get>>,
) {
  return ['crm', '/crm/tasks', toValue(args)] as const
}

export function getCrmTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.tasks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.tasks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.crm.tasks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>
          >,
          ReturnType<typeof getCrmTasksQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCrmTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCrmTasksMutationKey() {
  return ['crm', '/crm/tasks', 'POST'] as const
}

export function getPostCrmTasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.crm.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.crm.tasks.$post>) {
      return parseResponse(client.crm.tasks.$post(args, options))
    },
  })
}

export function usePostCrmTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.crm.tasks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmTasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmTasksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.tasks)[':id']['$get']>>,
) {
  return ['crm', '/crm/tasks/:id', toValue(args)] as const
}

export function getCrmTasksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.tasks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmTasksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.tasks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCrmTasksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.crm.tasks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCrmTasksIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmTasksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmTasksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.tasks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCrmTasksIdMutationKey() {
  return ['crm', '/crm/tasks/:id', 'DELETE'] as const
}

export function getDeleteCrmTasksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCrmTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>) {
      return parseResponse(client.crm.tasks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCrmTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.tasks)[':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCrmTasksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCrmTasksIdMutationKey() {
  return ['crm', '/crm/tasks/:id', 'PATCH'] as const
}

export function getPatchCrmTasksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$patch']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCrmTasksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>) {
      return parseResponse(client.crm.tasks[':id'].$patch(args, options))
    },
  })
}

export function usePatchCrmTasksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.crm.tasks)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.crm.tasks)[':id']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCrmTasksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCrmTasktypesQueryKey() {
  return ['crm', '/crm/tasktypes'] as const
}

export function getCrmTasktypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCrmTasktypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.tasktypes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCrmTasktypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
          >,
          ReturnType<typeof getCrmTasktypesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.crm.tasktypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCrmTasktypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCrmTasktypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.tasktypes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWhatsappSendMessageMutationKey() {
  return ['whatsapp', '/whatsapp/sendMessage', 'POST'] as const
}

export function getPostWhatsappSendMessageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.sendMessage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.whatsapp.sendMessage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWhatsappSendMessageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.whatsapp.sendMessage.$post>) {
      return parseResponse(client.whatsapp.sendMessage.$post(args, options))
    },
  })
}

export function usePostWhatsappSendMessage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.sendMessage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.whatsapp.sendMessage.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWhatsappSendMessageMutationOptions<TError, TOnMutateResult>(
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

export function getWhatsappStatisticsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsapp.statistics.events.$get>>,
) {
  return ['whatsapp', '/whatsapp/statistics/events', toValue(args)] as const
}

export function getWhatsappStatisticsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsapp.statistics.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWhatsappStatisticsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.whatsapp.statistics.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWhatsappStatisticsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.whatsapp.statistics.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>
              >
            >
          >,
          ReturnType<typeof getWhatsappStatisticsEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.whatsapp.statistics.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWhatsappStatisticsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWhatsappStatisticsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.whatsapp.statistics.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmtpBlockedContactsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.blockedContacts.$get>>,
) {
  return ['smtp', '/smtp/blockedContacts', toValue(args)] as const
}

export function getSmtpBlockedContactsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.blockedContacts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpBlockedContactsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.blockedContacts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpBlockedContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.blockedContacts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>
            >
          >,
          ReturnType<typeof getSmtpBlockedContactsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedContacts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpBlockedContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpBlockedContactsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.blockedContacts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSmtpBlockedContactsEmailMutationKey() {
  return ['smtp', '/smtp/blockedContacts/:email', 'DELETE'] as const
}

export function getDeleteSmtpBlockedContactsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.blockedContacts)[':email']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmtpBlockedContactsEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']>,
    ) {
      return parseResponse(client.smtp.blockedContacts[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSmtpBlockedContactsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.blockedContacts)[':email']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.blockedContacts)[':email']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmtpBlockedContactsEmailMutationOptions<
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

export function getSmtpBlockedDomainsQueryKey() {
  return ['smtp', '/smtp/blockedDomains'] as const
}

export function getSmtpBlockedDomainsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSmtpBlockedDomainsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.blockedDomains.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpBlockedDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>
            >
          >,
          ReturnType<typeof getSmtpBlockedDomainsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpBlockedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSmtpBlockedDomainsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.blockedDomains.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSmtpBlockedDomainsMutationKey() {
  return ['smtp', '/smtp/blockedDomains', 'POST'] as const
}

export function getPostSmtpBlockedDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.smtp.blockedDomains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpBlockedDomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smtp.blockedDomains.$post>) {
      return parseResponse(client.smtp.blockedDomains.$post(args, options))
    },
  })
}

export function usePostSmtpBlockedDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.blockedDomains.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.smtp.blockedDomains.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpBlockedDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSmtpBlockedDomainsDomainMutationKey() {
  return ['smtp', '/smtp/blockedDomains/:domain', 'DELETE'] as const
}

export function getDeleteSmtpBlockedDomainsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmtpBlockedDomainsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>,
    ) {
      return parseResponse(client.smtp.blockedDomains[':domain'].$delete(args, options))
    },
  })
}

export function useDeleteSmtpBlockedDomainsDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.blockedDomains)[':domain']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmtpBlockedDomainsDomainMutationOptions<
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

export function getPostSmtpDeleteHardbouncesMutationKey() {
  return ['smtp', '/smtp/deleteHardbounces', 'POST'] as const
}

export function getPostSmtpDeleteHardbouncesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.smtp.deleteHardbounces.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.smtp.deleteHardbounces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpDeleteHardbouncesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smtp.deleteHardbounces.$post>) {
      return parseResponse(client.smtp.deleteHardbounces.$post(args, options))
    },
  })
}

export function usePostSmtpDeleteHardbounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.smtp.deleteHardbounces.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.smtp.deleteHardbounces.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpDeleteHardbouncesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSmtpEmailMutationKey() {
  return ['smtp', '/smtp/email', 'POST'] as const
}

export function getPostSmtpEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.email.$post>>>>>,
    TError,
    InferRequestType<typeof client.smtp.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smtp.email.$post>) {
      return parseResponse(client.smtp.email.$post(args, options))
    },
  })
}

export function usePostSmtpEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.email.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.smtp.email.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSmtpEmailIdentifierMutationKey() {
  return ['smtp', '/smtp/email/:identifier', 'DELETE'] as const
}

export function getDeleteSmtpEmailIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.email)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmtpEmailIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']>) {
      return parseResponse(client.smtp.email[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteSmtpEmailIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.email)[':identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.email)[':identifier']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmtpEmailIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getSmtpEmailStatusIdentifierQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>,
) {
  return ['smtp', '/smtp/emailStatus/:identifier', toValue(args)] as const
}

export function getSmtpEmailStatusIdentifierQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpEmailStatusIdentifierQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.emailStatus[':identifier'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpEmailStatusIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmtpEmailStatusIdentifierQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.smtp.emailStatus)[':identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpEmailStatusIdentifierQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpEmailStatusIdentifierQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.emailStatus[':identifier'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmtpEmailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.emails.$get>>,
) {
  return ['smtp', '/smtp/emails', toValue(args)] as const
}

export function getSmtpEmailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.emails.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpEmailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.emails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSmtpEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.emails.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>
          >,
          ReturnType<typeof getSmtpEmailsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmtpEmailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpEmailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.emails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmtpEmailsUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>>,
) {
  return ['smtp', '/smtp/emails/:uuid', toValue(args)] as const
}

export function getSmtpEmailsUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpEmailsUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.emails[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpEmailsUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.emails)[':uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmtpEmailsUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.smtp.emails)[':uuid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpEmailsUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpEmailsUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.emails[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteSmtpLogIdentifierMutationKey() {
  return ['smtp', '/smtp/log/:identifier', 'DELETE'] as const
}

export function getDeleteSmtpLogIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.log)[':identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmtpLogIdentifierMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']>) {
      return parseResponse(client.smtp.log[':identifier'].$delete(args, options))
    },
  })
}

export function useDeleteSmtpLogIdentifier<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.log)[':identifier']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.log)[':identifier']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmtpLogIdentifierMutationOptions<TError, TOnMutateResult>(
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

export function getSmtpStatisticsAggregatedReportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>>,
) {
  return ['smtp', '/smtp/statistics/aggregatedReport', toValue(args)] as const
}

export function getSmtpStatisticsAggregatedReportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpStatisticsAggregatedReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.statistics.aggregatedReport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpStatisticsAggregatedReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.aggregatedReport.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
              >
            >
          >,
          ReturnType<typeof getSmtpStatisticsAggregatedReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.smtp.statistics.aggregatedReport.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpStatisticsAggregatedReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpStatisticsAggregatedReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.statistics.aggregatedReport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmtpStatisticsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.events.$get>>,
) {
  return ['smtp', '/smtp/statistics/events', toValue(args)] as const
}

export function getSmtpStatisticsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpStatisticsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.statistics.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpStatisticsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
            >
          >,
          ReturnType<typeof getSmtpStatisticsEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpStatisticsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpStatisticsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.statistics.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmtpStatisticsReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.reports.$get>>,
) {
  return ['smtp', '/smtp/statistics/reports', toValue(args)] as const
}

export function getSmtpStatisticsReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpStatisticsReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.statistics.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpStatisticsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.statistics.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
            >
          >,
          ReturnType<typeof getSmtpStatisticsReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.statistics.reports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpStatisticsReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpStatisticsReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.statistics.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSmtpTemplatePreviewMutationKey() {
  return ['smtp', '/smtp/template/preview', 'POST'] as const
}

export function getPostSmtpTemplatePreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.smtp.template.preview.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.smtp.template.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpTemplatePreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smtp.template.preview.$post>) {
      return parseResponse(client.smtp.template.preview.$post(args, options))
    },
  })
}

export function usePostSmtpTemplatePreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.template.preview.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.smtp.template.preview.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpTemplatePreviewMutationOptions<TError, TOnMutateResult>(
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

export function getSmtpTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.templates.$get>>,
) {
  return ['smtp', '/smtp/templates', toValue(args)] as const
}

export function getSmtpTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.smtp.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
          >,
          ReturnType<typeof getSmtpTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSmtpTemplatesMutationKey() {
  return ['smtp', '/smtp/templates', 'POST'] as const
}

export function getPostSmtpTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.smtp.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smtp.templates.$post>) {
      return parseResponse(client.smtp.templates.$post(args, options))
    },
  })
}

export function usePostSmtpTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.smtp.templates.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.smtp.templates.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpTemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getSmtpTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>>,
) {
  return ['smtp', '/smtp/templates/:templateId', toValue(args)] as const
}

export function getSmtpTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSmtpTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.smtp.templates[':templateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSmtpTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.smtp.templates)[':templateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSmtpTemplatesTemplateIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSmtpTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSmtpTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.smtp.templates[':templateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSmtpTemplatesTemplateIdMutationKey() {
  return ['smtp', '/smtp/templates/:templateId', 'PUT'] as const
}

export function getPutSmtpTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSmtpTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']>,
    ) {
      return parseResponse(client.smtp.templates[':templateId'].$put(args, options))
    },
  })
}

export function usePutSmtpTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.templates)[':templateId']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSmtpTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSmtpTemplatesTemplateIdMutationKey() {
  return ['smtp', '/smtp/templates/:templateId', 'DELETE'] as const
}

export function getDeleteSmtpTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSmtpTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']>,
    ) {
      return parseResponse(client.smtp.templates[':templateId'].$delete(args, options))
    },
  })
}

export function useDeleteSmtpTemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.templates)[':templateId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSmtpTemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostSmtpTemplatesTemplateIdSendTestMutationKey() {
  return ['smtp', '/smtp/templates/:templateId/sendTest', 'POST'] as const
}

export function getPostSmtpTemplatesTemplateIdSendTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSmtpTemplatesTemplateIdSendTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>,
    ) {
      return parseResponse(client.smtp.templates[':templateId'].sendTest.$post(args, options))
    },
  })
}

export function usePostSmtpTemplatesTemplateIdSendTest<
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
                    ReturnType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.smtp.templates)[':templateId']['sendTest']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSmtpTemplatesTemplateIdSendTestMutationOptions<
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

export function getPostTransactionalSMSSendMutationKey() {
  return ['transactionalSMS', '/transactionalSMS/send', 'POST'] as const
}

export function getPostTransactionalSMSSendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.send.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactionalSMS.send.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionalSMSSendMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactionalSMS.send.$post>) {
      return parseResponse(client.transactionalSMS.send.$post(args, options))
    },
  })
}

export function usePostTransactionalSMSSend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.send.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactionalSMS.send.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionalSMSSendMutationOptions<TError, TOnMutateResult>(
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

export function getPostTransactionalSMSSmsMutationKey() {
  return ['transactionalSMS', '/transactionalSMS/sms', 'POST'] as const
}

export function getPostTransactionalSMSSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.sms.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.transactionalSMS.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionalSMSSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactionalSMS.sms.$post>) {
      return parseResponse(client.transactionalSMS.sms.$post(args, options))
    },
  })
}

export function usePostTransactionalSMSSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.sms.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.transactionalSMS.sms.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTransactionalSMSSmsMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionalSMSStatisticsAggregatedReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>
  >,
) {
  return [
    'transactionalSMS',
    '/transactionalSMS/statistics/aggregatedReport',
    toValue(args),
  ] as const
}

export function getTransactionalSMSStatisticsAggregatedReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionalSMSStatisticsAggregatedReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactionalSMS.statistics.aggregatedReport.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionalSMSStatisticsAggregatedReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionalSMSStatisticsAggregatedReportQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactionalSMS.statistics.aggregatedReport.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionalSMSStatisticsAggregatedReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionalSMSStatisticsAggregatedReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactionalSMS.statistics.aggregatedReport.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionalSMSStatisticsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.events.$get>>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/events', toValue(args)] as const
}

export function getTransactionalSMSStatisticsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionalSMSStatisticsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactionalSMS.statistics.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionalSMSStatisticsEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionalSMSStatisticsEventsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactionalSMS.statistics.events.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionalSMSStatisticsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionalSMSStatisticsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactionalSMS.statistics.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionalSMSStatisticsReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>>,
) {
  return ['transactionalSMS', '/transactionalSMS/statistics/reports', toValue(args)] as const
}

export function getTransactionalSMSStatisticsReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionalSMSStatisticsReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactionalSMS.statistics.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionalSMSStatisticsReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.statistics.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionalSMSStatisticsReportsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.transactionalSMS.statistics.reports.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionalSMSStatisticsReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionalSMSStatisticsReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactionalSMS.statistics.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionalSMSTemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.templates.$get>>,
) {
  return ['transactionalSMS', '/transactionalSMS/templates', toValue(args)] as const
}

export function getTransactionalSMSTemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.templates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionalSMSTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactionalSMS.templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionalSMSTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactionalSMS.templates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>
              >
            >
          >,
          ReturnType<typeof getTransactionalSMSTemplatesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.transactionalSMS.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionalSMSTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionalSMSTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactionalSMS.templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
